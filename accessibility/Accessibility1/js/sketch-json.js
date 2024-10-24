var sketch = {
  "metadata": {
    "width": 780,
    "height": 540,
    "wsp-version": "4.6.0",
    "wsp-build-number": "1030",
    "wsp-build-stamp": "dn.kcptech.com/20190819121403",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "Accessibility1.gsp",
    "start-page": "1"
  },
  "resources": {
    "fontList": [
      "\"Proxima Nova\", sans-serif",
      "\"Times New Roman\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": 0,
          "left": -4,
          "bottom": 540,
          "right": 776
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Interior": {
            "color": "yellow"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", sans-serif",
              "font-size": 24
            },
            "Measurement": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-size": 24
            },
            "Action": {
              "label": {
                "font-family": "\"Proxima Nova\", sans-serif",
                "font-size": 24
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-size": 24
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 219,
              "y": 281
            }
          },
          "label": "A",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -26,
              "labelOffsetY": -9
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 331,
              "y": 134
            }
          },
          "label": "B",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -9,
              "labelOffsetY": -34
            }
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Segment"
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 549,
              "y": 388
            }
          },
          "label": "C",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": -4
            }
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "4"
          },
          "constraint": "Segment"
        },
        "6": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "4",
            "p1": "1"
          },
          "constraint": "Segment"
        },
        "7": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 252,
              "y": 459
            }
          },
          "textMFS": "<VL<H<S#18<T'Drag the vertices '>><T'of '><!102><SS2<T'ABC'>><T'.'>>>"
        },
        "8": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "4"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 0
          }
        }
      }
    },
    {
      "metadata": {
        "title": "2",
        "id": "2",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 540,
          "right": 780
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Interior": {
            "color": "rgb(255,128,0)"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", sans-serif",
              "font-size": 24
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", sans-serif",
              "font-size": 24
            },
            "Action": {
              "label": {
                "font-family": "\"Proxima Nova\", sans-serif",
                "font-size": 24
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-size": 24
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 231,
              "y": 371
            }
          },
          "label": "A",
          "style": {
            "selectable": false,
            "label": {
              "showLabel": true,
              "labelOffsetX": -23,
              "labelOffsetY": -2
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 477,
              "y": 373
            }
          },
          "label": "C",
          "style": {
            "selectable": false,
            "label": {
              "showLabel": true,
              "labelOffsetX": 6,
              "labelOffsetY": -6
            }
          }
        },
        "3": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false
          }
        },
        "4": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 458,
              "y": 148
            }
          },
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "4",
            "line": "3"
          },
          "constraint": "Parallel",
          "style": {
            "selectable": false
          }
        },
        "6": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "5"
          },
          "value": -0.12191011235955,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -9,
              "labelOffsetY": -34
            }
          }
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "6"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false
          }
        },
        "8": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "6",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false
          }
        },
        "9": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "1",
            "1": "6",
            "2": "2"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "selectable": false,
            "layerOrder": 0
          }
        },
        "10": {
          "kind": "Measure",
          "genus": "AreaMeasure",
          "parents": {
            "shape": "9"
          },
          "constraint": "MeasurementArea",
          "geom": {
            "loc": {
              "x": 25,
              "y": 35
            }
          },
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "11": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 58,
              "y": 453
            }
          },
          "textMFS": "<VL<H<T'Drag point '><SS2<T'B.'>><T' What do you notice about the area of the triangle?'>>>"
        }
      }
    },
    {
      "metadata": {
        "title": "3",
        "id": "3",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 540,
          "right": 780
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Interior": {
            "color": "yellow"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", sans-serif",
              "font-size": 24
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", sans-serif",
              "font-size": 24
            },
            "Action": {
              "label": {
                "font-family": "\"Proxima Nova\", sans-serif",
                "font-size": 24
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-size": 24
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 175,
              "y": 225
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 281,
              "y": 255
            }
          },
          "style": {
            "hidden": true
          }
        },
        "3": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "CircleFromTwoPoints"
        },
        "4": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.099549035984106,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": -26
            }
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 386,
              "y": 140
            }
          }
        },
        "6": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 625,
              "y": 140
            }
          }
        },
        "7": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "6"
          },
          "constraint": "Segment"
        },
        "8": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "7"
          },
          "value": 0.41004184100418,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -9,
              "labelOffsetY": 5
            }
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 448,
              "y": 341
            }
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 473,
              "y": 440
            }
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 573,
              "y": 442
            }
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 633,
              "y": 269
            }
          }
        },
        "13": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 513,
              "y": 214
            }
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "10"
          },
          "constraint": "Segment"
        },
        "15": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "10",
            "p1": "11"
          },
          "constraint": "Segment"
        },
        "16": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "11",
            "p1": "12"
          },
          "constraint": "Segment"
        },
        "17": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "12",
            "p1": "13"
          },
          "constraint": "Segment"
        },
        "18": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "13",
            "p1": "9"
          },
          "constraint": "Segment"
        },
        "19": {
          "kind": "Polygon",
          "genus": "Pentagon",
          "parents": {
            "0": "9",
            "1": "10",
            "2": "11",
            "3": "12",
            "4": "13"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 0
          }
        },
        "20": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "19"
          },
          "baseVertex": 3,
          "baseValue": 0.43300684823106,
          "constraint": "PointOnPolygonEdge",
          "label": "C",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 3,
              "labelOffsetY": -33
            }
          }
        }
      }
    },
    {
      "metadata": {
        "title": "4",
        "id": "4",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 540,
          "right": 780
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", sans-serif",
              "font-size": 24
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", sans-serif",
              "font-size": 24
            },
            "Action": {
              "label": {
                "font-family": "\"Proxima Nova\", sans-serif",
                "font-size": 24
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-size": 24
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "OriginPoint",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 270
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "origin": "1"
          },
          "value": 28.346456692913,
          "constraint": "HorizontalUnitPoint"
        },
        "3": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "1",
            "unitPoint": "2"
          },
          "constraint": "AxisInternalDist",
          "orientation": "horizontal",
          "label": "x",
          "style": {
            "label": {
              "showLabel": false
            },
            "width": 1
          }
        },
        "4": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "unitPoint": "2"
          },
          "constraint": "UnitPointInternalSquare",
          "style": {
            "hidden": true
          }
        },
        "5": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "1",
            "unitPoint": "4"
          },
          "constraint": "AxisInternalDist",
          "orientation": "vertical",
          "label": "y",
          "style": {
            "label": {
              "showLabel": false
            },
            "width": 1
          }
        },
        "6": {
          "kind": "CoordSys",
          "genus": "CoordSys",
          "parents": {
            "axisX": "3",
            "axisY": "5"
          },
          "constraint": "CoordSys",
          "shape": "square",
          "style": {
            "grid": "gridlines"
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "Function",
          "parents": {},
          "constraint": "Function",
          "geom": {
            "loc": {
              "x": 10,
              "y": 5
            }
          },
          "expressionType": "YofX_FunctionExprType",
          "functionExpr": {
            "notation": "function",
            "name": "f",
            "dependentVar": "y",
            "independentVar": "x"
          },
          "expression": "x^2",
          "label": "f"
        },
        "8": {
          "kind": "Sampler",
          "genus": "FunctionPlot",
          "parents": {
            "function": "7",
            "coordSys": "6"
          },
          "constraint": "FunctionPlot",
          "style": {
            "line-style": "solid",
            "width": 1,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 750,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": -13.758333333333,
            "high": 13.758333333333
          }
        }
      }
    },
    {
      "metadata": {
        "title": "5",
        "id": "5",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 540,
          "right": 780
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Straights": {
            "color": "rgb(255,128,0)"
          },
          "Interior": {
            "color": "yellow"
          },
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", sans-serif",
              "font-size": 24
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", sans-serif",
              "font-size": 24
            },
            "Action": {
              "label": {
                "font-family": "\"Proxima Nova\", sans-serif",
                "font-size": 24
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-size": 24
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 284,
              "y": 332
            }
          },
          "label": "A",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -25,
              "labelOffsetY": -6
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 367,
              "y": 163
            }
          },
          "label": "B",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -11,
              "labelOffsetY": -34
            }
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 572,
              "y": 408
            }
          },
          "label": "C",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": 5,
              "labelOffsetY": -4
            }
          }
        },
        "4": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "5": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "3"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "3",
            "p1": "1"
          },
          "constraint": "Segment",
          "style": {
            "color": "navy"
          }
        },
        "7": {
          "kind": "Polygon",
          "genus": "Triangle",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "3"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 0
          }
        },
        "8": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1"
          },
          "geom": {
            "loc": {
              "x": 11,
              "y": 19
            }
          },
          "label": "Animate Point A",
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Point A"
          ],
          "animationStates": [
            {
              "rate": 3,
              "timeInterval": 0,
              "repeat": true,
              "motionType": "forward"
            }
          ]
        },
        "9": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "4"
          },
          "constraint": "Midpoint",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "10": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "6"
          },
          "constraint": "Midpoint",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "11": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "5"
          },
          "constraint": "Midpoint",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "12": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "10",
            "line": "6"
          },
          "constraint": "Perpendicular",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "9",
            "line": "4"
          },
          "constraint": "Perpendicular",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "11",
            "line": "5"
          },
          "constraint": "Perpendicular",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "15": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "10",
            "1": "12",
            "2": "13",
            "3": "9",
            "4": "11",
            "5": "14"
          },
          "geom": {
            "loc": {
              "x": 11,
              "y": 63
            }
          },
          "label": "Show Perpendicualr Bisectors",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Perpendicualr Bisectors",
            "Show Perpendicualr Bisectors"
          ],
          "fade": true
        }
      }
    },
    {
      "metadata": {
        "title": "6",
        "id": "6",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 540,
          "right": 780
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Times New Roman\", sans-serif",
              "font-size": 24
            },
            "Measurement": {
              "font-family": "\"Times New Roman\", sans-serif",
              "font-size": 24
            },
            "Action": {
              "label": {
                "font-family": "\"Proxima Nova\", sans-serif",
                "font-size": 24
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Proxima Nova\", sans-serif",
              "font-size": 24
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 25,
              "y": 18
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "5",
          "label": "a",
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Point",
          "genus": "OriginPoint",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 270
            }
          }
        },
        "3": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "origin": "2"
          },
          "value": 28.346456692913,
          "constraint": "HorizontalUnitPoint"
        },
        "4": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "2",
            "unitPoint": "3"
          },
          "constraint": "AxisInternalDist",
          "orientation": "horizontal",
          "label": "x",
          "style": {
            "label": {
              "showLabel": false
            },
            "width": 1
          }
        },
        "5": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "unitPoint": "3"
          },
          "constraint": "UnitPointInternalSquare",
          "style": {
            "hidden": true
          }
        },
        "6": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "2",
            "unitPoint": "5"
          },
          "constraint": "AxisInternalDist",
          "orientation": "vertical",
          "label": "y",
          "style": {
            "label": {
              "showLabel": false
            },
            "width": 1
          }
        },
        "7": {
          "kind": "CoordSys",
          "genus": "CoordSys",
          "parents": {
            "axisX": "4",
            "axisY": "6"
          },
          "constraint": "CoordSys",
          "shape": "square",
          "style": {
            "grid": "gridlines"
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "Function",
          "parents": {
            "0": "1"
          },
          "constraint": "Function",
          "geom": {
            "loc": {
              "x": 25,
              "y": 54
            }
          },
          "expressionType": "YofX_FunctionExprType",
          "functionExpr": {
            "notation": "function",
            "name": "f",
            "dependentVar": "y",
            "independentVar": "x"
          },
          "expression": "@0*x^2",
          "label": "f"
        },
        "9": {
          "kind": "Sampler",
          "genus": "FunctionPlot",
          "parents": {
            "function": "8",
            "coordSys": "7"
          },
          "constraint": "FunctionPlot",
          "style": {
            "line-style": "solid",
            "width": 1,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 750,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": -13.758333333333,
            "high": 13.758333333333
          }
        }
      }
    }
  ]
};