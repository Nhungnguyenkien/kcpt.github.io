var sketch = {
  "metadata": {
    "width": 780,
    "height": 540,
    "wsp-version": "4.6.0",
    "wsp-build-number": "1030",
    "wsp-build-stamp": "dn.kcptech.com/20190819121403",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "Accessibility2.gsp",
    "start-page": "1"
  },
  "resources": {
    "pictures": [
      {
        "height": 63,
        "width": 85,
        "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAA/CAYAAACRmoRmAAAAAXNSR0IArs4c6QAABRxJREFUeAHtmWtoXEUUx8+92d3sezf7CKVSSBVqomnF+iQvaBtBi5pCPtREIW01gl+K1IAgFKFIraAmIaJgSKkiGsG0HyRRpLUmTaxmk2K1Eje1pPWRmDSb3aSbfe/+nXuTrNmQ0FZEtsk5y3BnzsydPfObM3fOvUPEwgSYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYALSrYDA7/dDJMrLy1PSLWFz1nIdGRlBbc1uFLicyDcZsMFuQ/2eOni9XmSt0dls2EXvMLYUFWKH1YJPtRoMyDJOaGRU2CzYWlTEYP/N5D2/dw/uN5kQIEJSJkArqWlc5MstZuzbW8feejNgfT6futQ/k7UQ5NJAlbwCWPFY5VEwNTWVlWA1NzPY/6ttIBCgWCJBBZQk0i7al0ReFkZsEOpYIkVKu2wUxcasE1uenYwGA/2qE+YldBn2pZJQ9Qa9To0GMiqzpJCVUE0GI1XsqKQWrYEiFMtANSMsbtUZqLyyksOrDDI3UFDCqc2Fd6LMakV7rl7d/Tv0srp53VNYCKX+BrrhJksJjIxcQt1TtfNxqlndnJSoYHh4OKuBLtoFlg4pe8pKNKBsSna7g5xOfqPKnplhS5gAE2ACTIAJMAEmwASYwBonkPFGFQ/NIpqC+IAJkiRRBQ2ZLfqMNsvxQiwMSWe4brvl7l3VuqivDy+ud8Ppykd+vpLWwe0sQ8MH3ZiMxFZ810YihAvvbMP25gGE4mJGVpBEwo8zHx3D0Kzy3XmNSGSyF7sMD+C9b87hx8FzGBzox+mPj8Bmd2Bf18U0iGjwGoLBIMKLQE+e/wpfDk6obaLhiHqdvRYU7ULp+wITp+Cyl+CUL5rWrXq0IeGpuyw7cTac6UlHS6woftuDmXAME93vo0acalqtdhTXN6FnbA6g98QhvNQxhEj0Zxyu2Y/WtkOocDphyX0IB9vPYzo4iuPPFkAnS3C4X0bPxMqev6pARyb7UG18FJ//MYNpfwAB/1Vc+bYNW/U2HOi8hLG+RhiNZtQf68XQhW407twIs3wQl6MhDLZswebGfoT8HlSTDIfjabT3eXD2aIN6z4dDflw+04ZS3YN4t2cIU7HE2vDWiK8bL5issLnccLvdcLlccApvW1/ViO9Hp/BDyyMwVbbCH58DMn3lC5QarXhj0I+B5u24q6kfszMe7NYZcaDrd/X5mgz3o1pvxKv9owj4vkOV6TH0BjNXwqryzPnBpA/+UqShcWyiw5800336JKVSRLJ5HW26eyPZxJHGL1KC7NuKKU+rUXd5vcVEt1OY4qmEiBaIckRSzmaCIuNwGMmoFWs97EFEyiEtSSSJPUwDidaCi6ahyspo4aZ7S0voYaMST/0jiM8iKSDHhsfSylRSomnKUX8LSjUME5OTQ4k5laANMTsKTEFV1eVk5anYwgj+m2vGEJX4ND439ozeJa1Jyi8up/jxGnrrpBdjfw6hq+kVOi0/Q08UGSlHzIHwV+GxwsOTceVgeU6EXulTjXuFHtJJ+rr7JxoNiSPRVSxpTyWxTPV2g/Cy5cVdsp863xynqtoyOgKZ9Loyer3zNSrMBXlz9ZSXFF3JGrrDYSerbr4XKVeUrWTO1ZDGchtVPemmhuceJ+rwLP8nq1EbCoav60H+iTH8NvYXpmbmwimFQ0pEAAs8lDh2Ia9cF5cT4SCuTvgz6he35TwTYAJMgAkwgaUE/gaXLmRX6q7ULAAAAABJRU5ErkJggg=="
      },
      {
        "height": 63,
        "width": 85,
        "src": "data:image/png;base64,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"
      },
      {
        "height": 63,
        "width": 85,
        "src": "data:image/png;base64,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"
      },
      {
        "height": 63,
        "width": 85,
        "src": "data:image/png;base64,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"
      }
    ],
    "fontList": [
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
      }
    }
  ],
  "tools": [
    {
      "metadata": {
        "image": 0,
        "name": "Point"
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 302,
              "y": 187
            }
          },
          "toolRole": "given",
          "style": {
            "color": "red"
          }
        },
        "2": {
          "kind": "Picture",
          "genus": "ImportedPicture",
          "constraint": "PictureFree",
          "geom": {
            "transform": {
              "m00": 1,
              "m10": 0,
              "m20": 14,
              "m01": 0,
              "m11": 1,
              "m21": 11
            }
          },
          "image": 0,
          "style": {
            "color": "red",
            "opacity": 1,
            "layerOrder": 0
          }
        }
      }
    },
    {
      "metadata": {
        "image": 1,
        "name": "Compass"
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 333,
              "y": 199
            }
          },
          "toolRole": "given",
          "givenSortOrder": 1,
          "style": {
            "color": "red"
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 238,
              "y": 255
            }
          },
          "toolRole": "given",
          "givenSortOrder": 2,
          "style": {
            "color": "red"
          }
        },
        "3": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "color": "green"
          }
        },
        "4": {
          "kind": "Picture",
          "genus": "ImportedPicture",
          "constraint": "PictureFree",
          "geom": {
            "transform": {
              "m00": 1,
              "m10": 0,
              "m20": 1,
              "m01": 0,
              "m11": 1,
              "m21": 18
            }
          },
          "image": 1,
          "style": {
            "color": "red",
            "opacity": 1,
            "layerOrder": 14
          }
        }
      }
    },
    {
      "metadata": {
        "image": 2,
        "name": "Segment"
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 235,
              "y": 224
            }
          },
          "toolRole": "given",
          "style": {
            "color": "red"
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 425,
              "y": 143
            }
          },
          "toolRole": "given",
          "style": {
            "color": "red"
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
            "color": "navy"
          }
        },
        "4": {
          "kind": "Picture",
          "genus": "ImportedPicture",
          "constraint": "PictureFree",
          "geom": {
            "transform": {
              "m00": 1,
              "m10": 0,
              "m20": 18,
              "m01": 0,
              "m11": 1,
              "m21": 19
            }
          },
          "image": 2,
          "style": {
            "color": "red",
            "opacity": 1,
            "layerOrder": 1
          }
        }
      }
    },
    {
      "metadata": {
        "image": 3,
        "name": "Measure Length"
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 258,
              "y": 242
            }
          },
          "toolRole": "given",
          "givenSortOrder": 1,
          "style": {
            "color": "red"
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 431,
              "y": 159
            }
          },
          "toolRole": "given",
          "givenSortOrder": 2,
          "style": {
            "color": "red"
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
          "label": "constructibleGiven1",
          "style": {
            "color": "navy"
          }
        },
        "4": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "path": "3"
          },
          "constraint": "MeasurementLength",
          "geom": {
            "loc": {
              "x": 397,
              "y": 348
            }
          },
          "style": {
            "font-family": 0,
            "font-size": 18,
            "font-weight": "normal",
            "font-style": "normal",
            "text-decoration": "none",
            "letter-spacing": "none",
            "color": "black",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "5": {
          "kind": "Picture",
          "genus": "ImportedPicture",
          "constraint": "PictureFree",
          "geom": {
            "transform": {
              "m00": 1,
              "m10": 0,
              "m20": 17,
              "m01": 0,
              "m11": 1,
              "m21": 15
            }
          },
          "image": 3,
          "style": {
            "color": "red",
            "opacity": 1,
            "layerOrder": 0
          }
        }
      }
    }
  ]
};