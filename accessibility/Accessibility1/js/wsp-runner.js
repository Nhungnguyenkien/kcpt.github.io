/*!
	Web Sketchpad Sketch Runner. Copyright &copy; 2016 KCP Technologies, a McGraw-Hill Education Company. All rights reserved. 
	Version: Release: 2015Q4Update2, Semantic Version: 4.5.1-alpha, Build Number: 1020, Build Stamp: stek-macbook-pro.local/20190331013328
*/
(function( $ ){

	var GSPConfig = window.GSPConfig;

	function getVersion(gspInstance, field) {
		return parseInt(gspInstance.version[field], 10);
	}

	// Returns the latest instance whose major version matches the given
	// sketch json data.
	function doGetGSPInstance(majorJSON) {
		var i,
				instances,
				instance;


		function sortInstances() {
			instances.sort(function(a, b) {
				function cmp(field) {
					return getVersion(b, field) - getVersion(a, field);
				}
				return cmp('major') || cmp('minor') || cmp('patch');
			});
		}

		if (typeof GSPConfig === "object" &&
				GSPConfig.instances &&
				GSPConfig.instances.length > 0 &&
				majorJSON) {
			instances = GSPConfig.instances;
			sortInstances();
			for(i = 0;i < instances.length;i++) {
				instance = instances[i];
				if (instance.version.major === majorJSON) {
					return instance;
				}
			}
		}
		return null;
	}
	
	function fixSketchFonts (data) { // The fix here corrects erroneous export of sketches with font-family = "\"Times New Roman\", sans-serif"
		var defaultList = ["\"Times New Roman\", serif","\"Arial\", sans-serif"],
				i, fontList;
				
		function fixString (s) {
			if (typeof s === "string" && !$.isNumeric(s) && s.includes ('Times') && s.includes ('sans-serif'))
				s = s.replace ('sans-serif', 'serif');
			return s;
		}
		
		function fixPage (page) {
			// Fix the prefs
			$.each (page.preferences.text.textTypes, function (key, value) {
				if (!value["font-family"])
					value = value.label;
				if (value["font-family"])
					value["font-family"] = fixString (value["font-family"]);
			});
			// Fix any objects that explicitly list "\"Times New Roman\", sans-serif"
			if (page.objects) {
				$.each (page.objects, function (id, gobj) {
					var v;
					if (gobj.style && gobj.style.label)
							v = gobj.style.label;
					if (!v)
						v = gobj.style;
					if (v && v["font-family"])
						v["font-family"] = fixString (v["font-family"]);
				});
			}
		}
		
		function fixTool (tool) {
			// Fix any Calculator tools that use the expression "1+1" to be blank
      // Fix any GlideReflect tools to switch TranslateVector constraint to GlideReflect
			// Register any tool objects as constructibleGiven that have that label,
			// whose parents have labels that begin with "given",
			// and whose parents have no parents of their own.
			var thisTool = tool,
					constRole = "constructibleGiven",
          name = tool.metadata.name,
          glideReflect =  name.match(/glide\xA0reflect/i); //
          
        function checkGlideReflection (gobj) {  // If the tool is intended as a glide reflect tool, make it so.
          // Stopgap: Until GSP desktop supports glide reflection, enable a glide reflection tool.
          // The tool name must include "glide" and "reflect"; if so, any "Reflect"
          // constraint will be converted to a "GlideReflect" constraint.
          if (gobj.constraint === "Reflect") {
            gobj.constraint = "GlideReflect";
            gobj.parents.vector = gobj.parents.mirror;
            delete gobj.parents.mirror;
          }
        }
        
        function deleteWithDescendants (id) { // recursively delete my descendants and then myself
          var found = false;
          $.each (tool.objects, function (i, gobj) {  // check all objects with index > id
            if (i - id > 0 && gobj.parents) {
              $.each (gobj.parents, function (j, par) {
                if (par === id) { // am I a parent of gobj?
                  found = true; // 
                  deleteWithDescendants (i);  // delete this child and its descendants
                }
              });              
            }
          });
          delete tool.objects[id];
          if (found) {
            GSP.signalErrorWithMessage ("Given marked for deletion has children!");
          }
        }
        
      if (tool.objects) {
				$.each (tool.objects, function (id, gobj) {
					var isOK = true,
							sortOrder, labelArr;
					if (gobj.expression && gobj.expression === "1+1")
							gobj.expression = "";
					if (gobj.toolRole === "given" && gobj.label === "delete") {
            deleteWithDescendants (id);
            return;
          }
          if (glideReflect) {
            checkGlideReflection (gobj);
          }
          if (gobj.label && gobj.label.indexOf (constRole) === 0) {
            $.each(gobj.parents, function (key, idx) {
              var par = thisTool.objects[idx];
              isOK = isOK && par.toolRole === "given" && !par.parents;
            });
            isOK = isOK && "Segment, Line, Ray, PolygonFromPoints, CircleFromTwoPoints, Arc3Points".indexOf (gobj.constraint) >= 0;
            if (!isOK) {
              GSP.signalErrorWithMessage ("Improper constructibleGiven: " + gobj.constraint);
            } else {
              // If a tool object is labeled "constructibleGiven", drop that prefix. and any trailing colon or space.
              // Thus "constructibleGivenA, constructibleGiven:A, and constructibleGiven: A all become "A".
              gobj.toolRole = constRole;
              gobj.label = gobj.label.substring (constRole.length);
              sortOrder = gobj.label.replace (/(\d*)\.*/, "$1");
              if (sortOrder) {
                gobj.givenSortOrder = parseInt (sortOrder, 10);
              }
              labelArr = gobj.label.split (":");
              if (labelArr.length > 1) {  // found a colon, so get the label
                gobj.label = labelArr[1].trim();
              } else {
                delete gobj.label;
              }
              $.each(gobj.parents, function (key, idx) {
                var par = thisTool.objects[idx];
                par.toolRole = "givenParent";
              });
            }
          }
				});
			}
		}
		
		if (!data.resources)
			data.resources = {"fontList": defaultList};
		else if (!data.resources.fontList)
			data.resources.fontList =  defaultList;
		else {
			fontList = data.resources.fontList;
			for (i=0; i<fontList.length; ++i) {
				fontList[i] = fixString (fontList[i]);
			}
		}
		if (data.pages) {	// fix the doc
			$.each(data.pages, function (key, value) {
				fixPage (value);
			});
		}
		if (data.tools) {	// fix the tools
			$.each(data.tools, function (key, value) {
				fixTool (value);
			});
		}
	}

	function getGSPInstance(data) {
		var majorJSON;
		fixSketchFonts (data);
		majorJSON = data && data.metadata && data.metadata['wsp-version']
			&& data.metadata['wsp-version'].split('.')[0];
		var deferred = $.Deferred();
		var gspInstance = doGetGSPInstance(majorJSON);
		var pathFunc, path;

		function lastTry() { deferred.resolve(doGetGSPInstance(majorJSON) || window.GSP); }

		// If we've got a GSP that works, we're done.
		if( gspInstance) {
			deferred.resolve(gspInstance);
		} else { // Otherwise, try and find one.
			pathFunc = GSP.getConfigValue("compatibilityVersionPath");
			path = pathFunc(majorJSON);
			$.ajax({
				url: path,
				dataType: "script",
				cache: true
			}).always(lastTry);
		}

		return deferred.promise();
	}

	/*
	 * Informs the user of a same origin policy violation from loading
	 * a json file from a page loaded from the local filesystem.
	 * 
	 * If a jquery or dom element is provided, its contents are replaced
	 * with the error message. Otherwise, normal logging is used.
	 */
	function sendChromeSameOriginQuirkMsg(el) {
		var chromeSameOriginQuirkMsg = 
				'The load of your sketch has failed. ' +
				'This may be because you are loading from the local\n' + 
				'filesystem and you are running the Chrome or Opera ' + 
				'Browser and have therefore violated the browser\'s same\n' +
				'origin policy. To remedy this issue you can:\n' + 
				'    (a) employ a different browser or\n' + 
				'    (b) access your page through a web server.\n' +
				'See: http://code.google.com/p/chromium/issues/detail' + 
				'?id=40787, "Issue 40787: Local files doesn\'t load\n' + 
				'with Ajax" and http://my.opera.com/community/forums/' + 
				'topic.dml?id=907781, "Loading local XML with JavaScript".\n';
		if (el) {
			$(el).html('<pre class="wsp-error">' + chromeSameOriginQuirkMsg + '</pre>');
		}
		else {
			GSP.signalErrorWithMessage(chromeSameOriginQuirkMsg);
		}
	}

	function createDocumentFromJSONData(gspInstance, data, $target, options) {
		var sketch,
			isVersion4_2_1;

				// The now deprecated applyDocumentDiff was present in 3.0+,
				// and removed in the version AFTER 4.2.1.  (see
				// wsp-test/two-diffs.html). So 4.2.1 is the only modern
				// release with both GSP.applyDocumentDiff and
				// document.applydocumentDelta.
				if (options.delta) {
					if (gspInstance.applyDocumentDiff) {
						isVersion4_2_1 =
							getVersion(gspInstance, 'major') === 4 &&
							getVersion(gspInstance, 'minor') === 2 &&
							getVersion(gspInstance, 'patch') === 1;
						if (!isVersion4_2_1) {
							// We are somewhere between 3.0.0 and 4.2.0. Although the two-diffs
							// bug will trigger on the second diff, at least they get
							// one good diff!
							gspInstance.applyDocumentDiff(data, JSON.parse(options.delta));
						}
						// else see below -- we apply the delta AFTER
						// construction, as the Document constructor did not
						// accept the documentDelta option at that time.
					}
					else {
						// We are at a version after 4.2.1. Just pass the delta to the constructor.
						options.sketchOptions = options.sketchOptions || {};
						options.sketchOptions.documentDelta = options.delta;
					}
				}

				//Note: there was once a time when Document constructor would return a sketch
				//This is no longer the case, but since here we may be running an old version of WSP,
				//we must continue to handle that case.
				var Document = gspInstance.Document;
				var docOrSketch = new Document($target, data, options.sketchOptions);
				sketch = docOrSketch.focusPage || docOrSketch;

				//	The new document is now attached to the node in the new Document() call abvove,
				//	so that it's already there when before firing the LoadDocument, LoadPage, and DidChangeCurrentPage events. 
				// $target.data(isSketch? "sketch" : "document", docOrSketch);	


				if (docOrSketch.start) { docOrSketch.start(); }
				else if (docOrSketch.startCurrentFocusedSketch) {
					docOrSketch.startCurrentFocusedSketch(false);
				}

				// Special case for doc delta in version 4.2.1 -- see above
				if (options.delta && isVersion4_2_1) {
					docOrSketch.applyDocumentDelta(options.delta);
				}

				if( !options.autoStart) {
					sketch.pause();
				}

				if( options.onReady) {
					options.onReady.call($target, sketch, data.metadata);
				}
	}
	/*
	 * Loads and runs a sketch.
	 * @param {string | object} sketchSpec The sketch. If is a string,
	 *        it is assumed to be a a json object, and it is parsed into an
	 *        object. If it is an object, it is assumed to be a sketch object.
	 * @param {string} sketchURL The name of the source of the sketch. Used for
	 *        logging only.
	 * @param {JQuery Object} $target Identifies the DOM location that will be
	 *        replaced by the sketch.
	 * @param {object} options The following properties are supported:
	 *
	 *        onLoad: a function to call after the sketch has been loaded, but 
	 *                before it has been started. Arguments: $target, 
	 *                sketch metadata
	 *        autoStart: we always start the sketch. This boolean controls whether
	 *                or not we immediately pause.
	 *        onReady: a function to call after the sketch has been started. Same
	 *                arguments as above.
	 *        onError: a function to call in the event of error. Arguments:
	 *                target element.
	 *        sketchOptions: an object that is passed to the Sketch constructor.
	 *        delta: a delta generated by SQuery.getSketchDelta() that is to be
	 *                applied to the sketch immediately after loading.
	 */
	function loadSketch(sketchSpec, sketchUrl, $target, options) {
			var data;
			
			if (typeof sketchSpec === 'string') {
				try {
					data = $.parseJSON(sketchSpec);
				} catch(e) {
					if (options.onError) {
							options.onError.call($target, sketchSpec);
					}
					e.message = "Load failed: malformed JSON text: " + e.message;
					
					GSP.signalCaughtError(e);
					return;
			 }
			}
			else if (typeof sketchSpec === 'object') {
					data = sketchSpec;
			}
			else {
					if (options.onError) {
							options.onError.call($target, sketchSpec);
					}
					GSP.signalErrorWithMessage("Load failed: unrecognized sketch datatype.");
					return;
			}
			if( options.onLoad) {
				options.onLoad.call($target, data.metadata);
			}
			
			try {
				getGSPInstance(data).then(function(gspInstance) {
					createDocumentFromJSONData(gspInstance, data, $target, options);
					GSP.log("Loaded Sketch: " + sketchUrl);     
				});
		 
			} catch(e) {
				 e.message = "Load failed: Exception thrown in startup: " + e.message;
				 GSP.signalCaughtError(e);
		 }
	}
	
	var fetchFromAttr = {
	/*
	 * Fetches a requested sketch object from a URL and loads it.
	 * @param {string|Object} sketch The JSON of a sketch document, as a string or JSON object.
	 * @param {JQuery Object} $target Identifies the DOM location that will be
	 *        replaced by the sketch.
	 */
	 'sourceDocument': function(sourceDocument, $target, options) {
			GSP.log("sourceDocument Sketch from JSON document." );
			loadSketch(sourceDocument, "data", $target, options);
		},
	 /*
	 * Fetches a requested sketch object from a URL and loads it.
	 * @param {string} sketchURL The URL of a JSON sketch document.
	 * @param {JQuery Object} $target Identifies the DOM location that will be
	 *        replaced by the sketch.
	 */
	 'url': function(sketchUrl, $target, options) {
			GSP.log("Loading Sketch: " + sketchUrl);
			$.ajax({
					url: sketchUrl,
					success: function (text, statusMsg) {
							if (text) {
									loadSketch(text, sketchUrl, $target, options);
							}
							else {
									GSP.log("Load failed: '%@' is empty", sketchUrl);
							}
					},
					error: function (jqXHR, textStatus, errorThrown) {
							if (options.onError) {
									options.onError.call($target, sketchUrl);
							}
							GSP.log("Load failed: " + textStatus +
									" Error: " + errorThrown.toString());
							// Provide warning in case of local file access and same-origin
							// error. This is a bit ad hoc, since the jqXHR record does not
							// provide sufficient info to diagnose.
							if (location.protocol.match(/^file:/)
											&& ($.browser.chrome || $.browser.opera)) {
									sendChromeSameOriginQuirkMsg($target);
							}
					},
					dataType: "text"
			});
		},
		/*
		 * Fetches a requested sketch object from a DOM element and loads it.
		 * @param {string} id The DOM id of a DOM element. The text of the 
		 *        element should be a sketch document.
		 * @param {JQuery Object} $target Identifies the DOM location that will be
		 *        replaced by the sketch.
		 */
		'id': function (id, $target, options) {
			loadSketch($("#" + id).html(), id, $target, options);
		},
		/*
		 * Fetches a requested sketch object from a javascript variable and 
		 * loads it.
		 * @param {string} myVar A variable in the global namespace of a sketch
		 *        document. The text of the value should be a sketch document.
		 * @param {JQuery Object} $target Identifies the DOM location that will be
		 *        replaced by the sketch.
		 */
		'var':  function (myVar, $target, options) {
			loadSketch(window[myVar], myVar, $target, options);
			delete window[myVar];		// The variable is no longer needed, once loaded, so don't leave it hanging in global namespace.
		},
		/*
		 * Fetches a requested sketch object from another sketch on the same page
		 * and loads it.
		 * @param {string} cloneId The DOM id of a DOM element containing a Sketchpad document.
		 * @param {JQuery Object} $target Identifies the DOM location that will be
		 *        replaced by the sketch.
		 */
		'clone': function (cloneId, $target, options) {
				var docOrSketch = $('#' + cloneId).data('document') ||
							$('#' + cloneId).data('sketch');
				docOrSketch = docOrSketch.sQuery().toString();
				loadSketch(docOrSketch, 'clone', $target, options);
		},
		/*
		 * Fetches a requested sketch object from a promise and loads it.
		 * @param {Object} promise A jquery deferred or promise object.
		 * @param {JQuery Object} $target Identifies the DOM location that will be
		 *        replaced by the sketch.
		 */
		'promise': function (promise, $target, options) {
			promise.done(function(resolved) {
				loadSketch(resolved, 'promise', $target, options);
			}).fail(function(failVal) {
				if (options.onError) {
					options.onError.call($target, failVal);
				}
			});
		}

	};
	
	function fetchSketchFromAttrs(attrElement, sketchElement, options) {
		$.each(fetchFromAttr, function(i, f) {
			var attr = options["data-"+i] || attrElement.data(i);
			if( attr) {
				f(attr, sketchElement, options);
				return false;	// In case there are multiple matches, prefer the first. (It might be better to prefer the first one that succeeds, but these functions don't return a value to indicate success or failure.)
			}
		});
	}


	/**
	 * WSP provides a jQuery plugin interface to the WSP library.
	 * @param {String}  method - the method to call
	 * @param {Object}  options - arguments passed to the specified method
	 */
	$.fn.WSP = function( method, options ) {  

		var config = {
		};
		
		if ( options ) { 
			$.extend( config, options );
		}
	 
		var methods = {
			init : function( options ) { 
			},
			
			/**
			 *  Load the sketch into the DOM element.
			 *  
			 *  @param {object} options A set of (optional) configuration options:
			 *    autostart {boolean}: Start the sketch after load (default true)
			 *                          We might move this to sketchOptions, and have
			 *                          the document start itself.
			 *    sketchOptions {object}: Various document behavior options, passed
			 *                            to the document constructor.
			 *    onLoad {function}: called after successful load.
			 *                        this is the element, metadata is the argument.
			 *                        (default sets element width, height)
			 *    onReady {function}: called when the loaded sketch is ready
			 *    onError {function}: called if an error occurs during the load process
			 *    data-url {string}: if set, an ajax call will be issued to load the sketch
			 *                        from the specified URL.
			 *    delta {string}: JSON delta object generated by getSketchDelta() method.
			 */
			loadSketch : function( options ) {
				
				return this.each(function() { 
					var $this = $(this),
						config = {
							autoStart: true
						};
						
					var docOrSketch = $this.data('document') || $this.data('sketch');
					if (docOrSketch) {
						if (docOrSketch.stop) docOrSketch.stop();
						else if (docOrSketch.stopCurrentFocusedSketch) {
							docOrSketch.stopCurrentFocusedSketch();
						}
						$this.removeData('document');
						$this.removeData('sketch');
					}
					if ( options ) { 
						$.extend( config, options );
					}
					
					fetchSketchFromAttrs($this, $this, config);
				});
			}
		};  
		 
		// Method calling logic
		if ( methods[method] ) {
				return methods[ method ].apply( this, 
						Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
				return methods.init.apply( this, arguments );
		} else {
				$.error( 'Method ' +  method + ' does not exist on jQuery.WSP' );
		}
	};
}( jQuery ));


jQuery(document).ready(function ($) {

		// look for elements of the class "sketch_canvas", find an attribute that 
		// specifies how to instantiate the element, and process accordingly.
		$(".sketch_canvas").WSP("loadSketch");
});
(function() {
		var method;
		var noop = function noop() {};
		var methods = [
				'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
				'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
				'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
				'timeStamp', 'trace', 'warn'
		];
		var length = methods.length;
		var console = (window.console = window.console || {});

		while (length--) {
				method = methods[length];

				// Only stub undefined methods.
				if (!console[method]) {
						console[method] = noop;
				}
		}
}());
