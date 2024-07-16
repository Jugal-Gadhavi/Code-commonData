const commonData = {
    "questionItemInstruction": "",
    "responseDeclaration": {
        "correctResponses": [
            {
                "answerSetId": 0,
                "correctAnswers": [
                    {
                        "stemIdentifier": "Response1",
                        "optionIdentifier": "Choice1"
                    },
                    {
                        "stemIdentifier": "Response2",
                        "optionIdentifier": "Choice2"
                    },
                    {
                        "stemIdentifier": "Response3",
                        "optionIdentifier": "Choice1"
                    },
                    {
                        "stemIdentifier": "Response4",
                        "optionIdentifier": "Choice2"
                    }
                ]
            },
            {
                "answerSetId": 1,
                "correctAnswers": [
                    {
                        "stemIdentifier": "Response1",
                        "optionIdentifier": "Choice2"
                    },
                    {
                        "stemIdentifier": "Response2",
                        "optionIdentifier": "Choice1"
                    },
                    {
                        "stemIdentifier": "Response3",
                        "optionIdentifier": "Choice2"
                    },
                    {
                        "stemIdentifier": "Response4",
                        "optionIdentifier": "Choice1"
                    }
                ]
            }
        ],
        "mappedCorrectResponses": [
            {
                "answerSetId": 0,
                "mappedResponses": [
                    {
                        "stemIdentifier": "Response1",
                        "optionIdentifier": "Choice1",
                        "mappedKey": "Response1 Choice1",
                        "mappedValue": 5,
                        "isError": false
                    },
                    {
                        "stemIdentifier": "Response2",
                        "optionIdentifier": "Choice2",
                        "mappedKey": "Response2 Choice2",
                        "mappedValue": 5,
                        "isError": false
                    },
                    {
                        "stemIdentifier": "Response3",
                        "optionIdentifier": "Choice1",
                        "mappedKey": "Response3 Choice1",
                        "mappedValue": 5,
                        "isError": false
                    },
                    {
                        "stemIdentifier": "Response4",
                        "optionIdentifier": "Choice2",
                        "mappedKey": "Response4 Choice2",
                        "mappedValue": 5,
                        "isError": false
                    }
                ]
            },
            {
                "answerSetId": 1,
                "mappedResponses": [
                    {
                        "stemIdentifier": "Response1",
                        "optionIdentifier": "Choice2",
                        "mappedKey": "Response1 Choice2",
                        "mappedValue": 6,
                        "isError": false
                    },
                    {
                        "stemIdentifier": "Response2",
                        "optionIdentifier": "Choice1",
                        "mappedKey": "Response2 Choice1",
                        "mappedValue": 6,
                        "isError": false
                    },
                    {
                        "stemIdentifier": "Response3",
                        "optionIdentifier": "Choice2",
                        "mappedKey": "Response3 Choice2",
                        "mappedValue": 6,
                        "isError": false
                    },
                    {
                        "stemIdentifier": "Response4",
                        "optionIdentifier": "Choice1",
                        "mappedKey": "Response4 Choice1",
                        "mappedValue": 6,
                        "isError": false
                    }
                ]
            }
        ]
    },
    "choices": {
        "optionsList": [
            {
                "optionNumber": 1,
                "optionIdentifier": "Response1",
                "text": ""
            },
            {
                "optionNumber": 2,
                "optionIdentifier": "Response2",
                "text": ""
            },
            {
                "optionNumber": 3,
                "optionIdentifier": "Response3",
                "text": ""
            },
            {
                "optionNumber": 4,
                "optionIdentifier": "Response4",
                "text": ""
            }
        ]
    },
    "options": {
        "optionsList": [
            {
                "matchMax": 1,
                "optionNumber": 1,
                "optionIdentifier": "Choice1",
                "text": ""
            },
            {
                "matchMax": 1,
                "optionNumber": 2,
                "optionIdentifier": "Choice2",
                "text": ""
            }
        ]
    },
    "identifier": "choiceMatrix",
    "resIdentifier": "RESPONSE",
    "zeroCorrectRes": true,
    "autoScoredViewMode": "partialScoring",
    "manualSCoredViewMode": "points",
    "scoringType": 1,
    "itemTypeId": 8,
    "additionalOptions": {
        "teacherGuideline": "",
        "customMetadata": {},
        "isExtendedQuestion": false,
        "selectedItemTypeId": 8,
        "fontSize": 1,
        "isCheckAnswerEnabled": false,
        "nonAccessible": false,
        "maxCheckAnswerAllowed": null,
        "acknowledgements": "",
        "sampleAnswer": "",
        "gridStyle": 2,
        "questionStemNumeration": 1,
        "questionStemsTitle": "Question stem",
        "optionsTitle": "",
        "questionStemWidth": null,
        "optionWidth": null,
        "autoScoredViewMode": "defaultScoring",
        "minScoreIfAttempted": 2,
        "minScoreType": 2,
        "penaltyPointType": null,
        "isAutoPenaltySetting": false,
        "isNegativeRounded": true,
        "specificPenaltyType": null,
        "penaltyPointsForEach": null,
        "rowNumeration": 6,
        "numerationStyle": 1,
        "responseAlignment": 2
    },
    "isManualScored": false,
    "activeTabIndex": 1,
    "scoringGuidance": "",
    "sampleResponse": "",
    "toolSettingsResources": {
        "2": {
            "resourceTypeId": 2,
            "resourceLabel": "Simple Calculator",
            "serialNo": 1,
            "metadata": {
                "type": "simpleCalculator",
                "launchByDefault": false,
                "addShowHideBtn": false,
                "customCalculatorSettings": [
                    "History",
                    "Undo/Redo"
                ]
            },
            "isSelected": false,
            "toolOrder": 3
        },
        "3": {
            "resourceTypeId": 3,
            "resourceLabel": "Ruler",
            "serialNo": 1,
            "customRulerImg": {
                "url": "",
                "fileName": "",
                "imageWidth": null,
                "imageHeight": null,
                "scalingWidth": 1,
                "scalingHeight": 1
            },
            "metadata": {
                "type": "Ruler",
                "isAllowToFlip": false,
                "displayOnTop": "centimeter",
                "measurementUnit": "centimeter",
                "rulerLengthDimension": "15cm",
                "rulerDPI": 72,
                "rotation": "allowRotation",
                "isRulerByDefault": false,
                "isShowHideButton": false,
                "rulerColor": "rgba(186, 201, 255, 1)",
                "rulerOpacity": 40,
                "altText": "",
                "lockAspectRatio": false,
                "resetSize": false
            },
            "isSelected": false,
            "toolOrder": 0
        },
        "6": {
            "resourceTypeId": 6,
            "resourceLabel": "Reading ruler",
            "serialNo": 1,
            "metadata": {
                "type": "Line Reader",
                "isButtonVisible": true,
                "isLineReaderVisible": false,
                "isCheckBoxResize": true,
                "lineReaderLines": 4,
                "lineReaderColor": "#707070",
                "lineReaderOpacity": 80,
                "additionalColor": [],
                "rulerStyle": 1
            },
            "isSelected": false,
            "toolOrder": 2
        },
        "7": {
            "resourceTypeId": 7,
            "resourceLabel": "Protractor",
            "serialNo": 1,
            "settings": {},
            "content": {},
            "metadata": {
                "type": "Protractor",
                "displayPointer": false,
                "launchByDefault": false,
                "allowResize": true,
                "addShowHideBtn": false,
                "alternativeText": "",
                "angleType": 2,
                "rotation": "allowRotation",
                "backgroundColor": "rgba(255, 255, 255, 1)",
                "backgroundOpacity": 40
            },
            "isSelected": false,
            "toolOrder": 1
        },
        "10": {
            "resourceTypeId": 10,
            "resourceLabel": "Scientific Calculator",
            "serialNo": 1,
            "metadata": {
                "type": "scientificCalculator",
                "width": 600,
                "height": 400,
                "isShowHideButtonVisible": false,
                "defaultLaunchOfTool": false
            },
            "isSelected": false,
            "toolOrder": 4
        },
        "21": {
            "resourceTypeId": 21,
            "resourceLabel": "Compass",
            "serialNo": 1,
            "metadata": {
                "type": "compass",
                "isShowHideButtonVisible": false,
                "defaultLaunchOfTool": false
            },
            "isSelected": false,
            "toolOrder": 5
        }
    },
    "metadata": {
        "excludeFromPrint": false,
        "instructionsForPrint": "",
        "randomizeOptions": true,
        "shuffleOption": false,
        "isRoundingEnabled": true,
        "roundingType": 1,
        "selectionMatrix": [
            [
                {
                    "cellType": "columnHeader",
                    "contentType": "none",
                    "content": "",
                    "optionIdentifier": ""
                },
                {
                    "cellType": "columnHeader",
                    "contentType": "heading",
                    "content": "Truthy",
                    "optionIdentifier": "Choice1"
                },
                {
                    "cellType": "columnHeader",
                    "contentType": "heading",
                    "content": "Falsey",
                    "optionIdentifier": "Choice2"
                }
            ],
            [
                {
                    "cellType": "rowHeader",
                    "contentType": "text",
                    "content": "this",
                    "responseIdentifier": "Response1"
                },
                {
                    "cellType": "cell",
                    "contentType": "radioButton",
                    "content": "",
                    "responseIdentifier": "Response1",
                    "optionIdentifier": "Choice1"
                },
                {
                    "cellType": "cell",
                    "contentType": "radioButton",
                    "content": "",
                    "responseIdentifier": "Response1",
                    "optionIdentifier": "Choice2"
                }
            ],
            [
                {
                    "cellType": "rowHeader",
                    "contentType": "text",
                    "content": "that",
                    "responseIdentifier": "Response2"
                },
                {
                    "cellType": "cell",
                    "contentType": "radioButton",
                    "content": "",
                    "responseIdentifier": "Response2",
                    "optionIdentifier": "Choice1"
                },
                {
                    "cellType": "cell",
                    "contentType": "radioButton",
                    "content": "",
                    "responseIdentifier": "Response2",
                    "optionIdentifier": "Choice2"
                }
            ],
            [
                {
                    "cellType": "rowHeader",
                    "contentType": "text",
                    "content": "where",
                    "responseIdentifier": "Response3"
                },
                {
                    "cellType": "cell",
                    "contentType": "radioButton",
                    "content": "",
                    "responseIdentifier": "Response3",
                    "optionIdentifier": "Choice1"
                },
                {
                    "cellType": "cell",
                    "contentType": "radioButton",
                    "content": "",
                    "responseIdentifier": "Response3",
                    "optionIdentifier": "Choice2"
                }
            ],
            [
                {
                    "cellType": "rowHeader",
                    "contentType": "text",
                    "content": "why",
                    "responseIdentifier": "Response4"
                },
                {
                    "cellType": "cell",
                    "contentType": "radioButton",
                    "content": "",
                    "responseIdentifier": "Response4",
                    "optionIdentifier": "Choice1"
                },
                {
                    "cellType": "cell",
                    "contentType": "radioButton",
                    "content": "",
                    "responseIdentifier": "Response4",
                    "optionIdentifier": "Choice2"
                }
            ]
        ],
        "gridHeader": [
            {
                "cellType": "gridHeader",
                "contentType": "none",
                "content": "",
                "optionIdentifier": ""
            },
            {
                "cellType": "gridHeader",
                "contentType": "heading",
                "content": "True or False",
                "optionIdentifier": "Choice1"
            }
        ],
        "defaultOption": "radioButton",
        "defaultText": "custom",
        "sameTextInEachColumn": false,
        "enableHeaderRow": true,
        "enableGridHeading": false,
        "minScoreIfAttempted": null,
        "minScoreType": null,
        "penaltyPointType": null,
        "isAutoPenaltySetting": false,
        "isNegativeRounded": false,
        "specificPenaltyType": null,
        "penaltyPointsForEach": null,
        "layoutCustomization": {
            "rowSpacing": 1,
            "columnSpacing": 1,
            "columnDimensions": 1,
            "cellMinHeight": 96,
            "columnWidth": 225,
            "columnWidthConfig": "all",
            "columnWidthForEach": [
                225,
                225,
                225
            ],
            "gridFillColor": [
                {
                    "color": "#FFFFFF",
                    "isSelected": true
                },
                {
                    "color": "NO_COLOR",
                    "isSelected": false
                }
            ],
            "gridBorderColor": [
                {
                    "color": "#5200FF",
                    "isSelected": true
                },
                {
                    "color": "NO_COLOR",
                    "isSelected": false
                }
            ],
            "gridOuterBorder": "outer",
            "innerGridStyle": "inner",
            "innerVerticalGridType": "applyToAll"
        },
        "fitColumnInSinglePage": true,
        "printDropZoneHeight": 58,
        "printDropZoneWidth": 156,
        "shuffledOrder": [
            null,
            null,
            null,
            null
        ],
        "answerSets": [
            {
                "id": 0,
                "points": 20
            },
            {
                "id": 1,
                "points": 24
            }
        ]
    },
    "isAutoScoreViewModeDirty": true,
    "isScoringPointsDirty": false
}

const compactLoaded = {
    correctAnswers: [[
        {
            "mappedKey": "Response1 Choice1",
            "mappedValue": 5,
        },
        {
            "mappedKey": "Response2 Choice2",
            "mappedValue": 5,
        },
        {
            "mappedKey": "Response3 Choice1",
            "mappedValue": 5,
        },
        {
            "mappedKey": "Response4 Choice2",
            "mappedValue": 5,
        }
    ], [
        {
            "mappedKey": "Response1 Choice2",
            "mappedValue": 6,
        },
        {
            "mappedKey": "Response2 Choice1",
            "mappedValue": 6,
        },
        {
            "mappedKey": "Response3 Choice2",
            "mappedValue": 6,
        },
        {
            "mappedKey": "Response4 Choice1",
            "mappedValue": 6,
        }
    ]
    ],
    options: [
        {
            "text": ""
        },
        {
            "text": ""
        },
        {
            "text": ""
        },
        {
            "text": ""
        }
    ],
    matrix: [
        [
            {
                "contentType": "none",
                "content": "",
            },
            {
                "contentType": "heading",
                "content": "Truthy",
            },
            {
                "contentType": "heading",
                "content": "Falsey",
            }
        ],
        [
            {
                "contentType": "text",
                "content": "this",
            },
            {
                "contentType": "radioButton",
                "content": "",
            },
            {
                "contentType": "radioButton",
                "content": "",
            }
        ],
        [
            {
                "contentType": "text",
                "content": "that",
            },
            {
                "contentType": "radioButton",
                "content": "",
            },
            {
                "contentType": "radioButton",
                "content": "",
            }
        ],
        [
            {
                "contentType": "text",
                "content": "where",
            },
            {
                "contentType": "radioButton",
                "content": "",
            },
            {
                "contentType": "radioButton",
                "content": "",
            }
        ],
        [
            {
                "contentType": "text",
                "content": "why",
            },
            {
                "contentType": "radioButton",
                "content": "",
            },
            {
                "contentType": "radioButton",
                "content": "",
            }
        ]
    ],
    headers: {

    }
}