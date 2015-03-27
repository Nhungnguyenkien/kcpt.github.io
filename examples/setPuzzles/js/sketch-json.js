var sketch = {
  "metadata": {
    "width": 780,
    "height": 540,
    "wsp-version": "4.1.0",
    "wsp-build-number": "833",
    "wsp-build-stamp": "sneferu.local/20150325162516",
    "exporter-version": "5.03A2011(dev)",
    "exporter-build": "2011(dev)",
    "exporter-debug": true,
    "original-document-name": "ParamTest.gsp",
    "start-page": "1"
  },
  "resources": {
    "fontList": [
      "\"Times\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
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
              "font-family": "\"Baskerville Italic\", sans-serif"
            },
            "Caption": {
              "font-family": "\"Baskerville\", sans-serif",
              "font-size": 24,
              "font-weight": "bold",
              "font-style": "italic"
            },
            "Measurement": {
              "font-family": "\"Times\", sans-serif"
            },
            "Action": {
              "label": {
                "font-family": "\"Arial\", sans-serif",
                "font-size": 18
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Geneva\", sans-serif"
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
              "x": 44,
              "y": 39
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1",
          "label": "t[1]",
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          },
          "debug": {
            "exists": true,
            "defined": true,
            "value": 1,
            "lengthPower": 0,
            "anglePower": 0
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 274,
              "y": 50
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1+@0",
          "style": {
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          },
          "debug": {
            "exists": true,
            "defined": true,
            "value": 2,
            "lengthPower": 0,
            "anglePower": 0
          }
        }
      }
    }
  ]
};