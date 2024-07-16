const commonData = {
    "responseDeclaration": {
        "correctResponses": [
            {
                "answerSetId": 0,
                "correctAnswers": [
                    {
                        "optionIdentifier": "choice1",
                        "choiceIdentifier": "choice1",
                        "correctAnswer": "choice1",
                        "responseIdentifier": "Response1",
                        "xmlIdentifier": "Response1"
                    },
                    {
                        "optionIdentifier": "choice3",
                        "choiceIdentifier": "choice3",
                        "correctAnswer": "choice3",
                        "responseIdentifier": "Response2",
                        "xmlIdentifier": "Response2"
                    },
                    {
                        "optionIdentifier": "choice2",
                        "choiceIdentifier": "choice2",
                        "correctAnswer": "choice2",
                        "responseIdentifier": "Response3",
                        "xmlIdentifier": "Response3"
                    },
                    {
                        "optionIdentifier": "choice4",
                        "choiceIdentifier": "choice4",
                        "correctAnswer": "choice4",
                        "responseIdentifier": "Response4",
                        "xmlIdentifier": "Response4"
                    }
                ]
            },
            {
                "answerSetId": 1,
                "correctAnswers": [
                    {
                        "optionIdentifier": "choice2",
                        "choiceIdentifier": "choice2",
                        "correctAnswer": "choice2",
                        "responseIdentifier": "Response1",
                        "xmlIdentifier": "Response1"
                    },
                    {
                        "optionIdentifier": "choice3",
                        "choiceIdentifier": "choice3",
                        "correctAnswer": "choice3",
                        "responseIdentifier": "Response2",
                        "xmlIdentifier": "Response2"
                    },
                    {
                        "optionIdentifier": "choice4",
                        "choiceIdentifier": "choice4",
                        "correctAnswer": "choice4",
                        "responseIdentifier": "Response3",
                        "xmlIdentifier": "Response3"
                    },
                    {
                        "optionIdentifier": "choice1",
                        "choiceIdentifier": "choice1",
                        "correctAnswer": "choice1",
                        "responseIdentifier": "Response4",
                        "xmlIdentifier": "Response4"
                    }
                ]
            }
        ],
        "mappedCorrectResponses": [
            {
                "answerSetId": 0,
                "mappedResponses": [
                    {
                        "xmlIdentifier": "Response1",
                        "mappedValue": 4,
                        "mappedKey": "choice1",
                        "isError": false
                    },
                    {
                        "xmlIdentifier": "Response2",
                        "mappedValue": 4,
                        "mappedKey": "choice3",
                        "isError": false
                    },
                    {
                        "xmlIdentifier": "Response3",
                        "mappedValue": 4,
                        "mappedKey": "choice2",
                        "isError": false
                    },
                    {
                        "xmlIdentifier": "Response4",
                        "mappedValue": 4,
                        "mappedKey": "choice4",
                        "isError": false
                    }
                ]
            },
            {
                "answerSetId": 1,
                "mappedResponses": [
                    {
                        "xmlIdentifier": "Response1",
                        "mappedValue": 5,
                        "mappedKey": "choice2",
                        "isError": false
                    },
                    {
                        "xmlIdentifier": "Response2",
                        "mappedValue": 5,
                        "mappedKey": "choice3",
                        "isError": false
                    },
                    {
                        "xmlIdentifier": "Response3",
                        "mappedValue": 5,
                        "mappedKey": "choice4",
                        "isError": false
                    },
                    {
                        "xmlIdentifier": "Response4",
                        "mappedValue": 5,
                        "mappedKey": "choice1",
                        "isError": false
                    }
                ]
            }
        ]
    },
    "questionItemInstruction": "this is question",
    "identifier": "orderList",
    "zeroCorrectRes": true,
    "isManualScored": false,
    "isRubricUsed": false,
    "viewMode": "defaultScoring",
    "orderLayout": 1,
    "optionOrientation": 1,
    "enableWrapping": true,
    "autoScoredViewMode": "partialScoring",
    "manualSCoredViewMode": "points",
    "scoringType": 1,
    "itemTypeId": 36,
    "additionalOptions": {
        "teacherGuideline": "",
        "customMetadata": {},
        "isExtendedQuestion": false,
        "selectedItemTypeId": 36,
        "fontSize": 1,
        "answerNumeration": 2,
        "maximumResponsesPerCell": null,
        "isCheckAnswerEnabled": false,
        "nonAccessible": false,
        "maxCheckAnswerAllowed": null,
        "autoScoredViewMode": "defaultScoring",
        "isIncludeLabelEnabled": false,
        "optionStyleType": 1,
        "topLabel": null,
        "bottomLabel": null,
        "minScoreIfAttempted": null,
        "minScoreType": null,
        "penaltyPointType": null,
        "isAutoPenaltySetting": false,
        "isNegativeRounded": true,
        "specificPenaltyType": null,
        "penaltyPointsForEach": null
    },
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
        "outerBorder": true,
        "hideDragHandle": false,
        "isRoundingEnabled": true,
        "roundingType": 1,
        "optionOrientation": 1,
        "enableWrapping": true,
        "orderLayout": 1,
        "optionLayout": 1,
        "dropDownMenuOption": 1,
        "choices": {
            "optionsList": [
                {
                    "optionIdentifier": "choice1",
                    "optionNumber": 1,
                    "text": "o1"
                },
                {
                    "optionIdentifier": "choice2",
                    "optionNumber": 2,
                    "text": "o2"
                },
                {
                    "optionIdentifier": "choice3",
                    "optionNumber": 3,
                    "text": "o3"
                },
                {
                    "optionIdentifier": "choice4",
                    "optionNumber": 4,
                    "text": "o4"
                }
            ]
        },
        "layoutCustomization": {
            "responsePlacement": 1,
            "dropzoneFillColor": [
                {
                    "color": "rgba(245, 248, 255, 1)",
                    "isSelected": true
                },
                {
                    "color": "NO_COLOR",
                    "isSelected": false
                }
            ],
            "dropzoneBorderColor": [
                {
                    "color": "rgba(82, 0, 255, 1)",
                    "isSelected": true
                },
                {
                    "color": "NO_COLOR",
                    "isSelected": false
                }
            ],
            "dropzoneBorderStyle": "dotted",
            "dropdownBorderStyle": "solid",
            "responseAlignment": 1,
            "dropzoneOptionAlignment": 1,
            "dropzoneOptionPlacement": "inline",
            "dragOptionFillColor": [
                {
                    "color": "rgba(255, 255, 255, 1)",
                    "isSelected": true
                },
                {
                    "color": "NO_COLOR",
                    "isSelected": false
                }
            ],
            "dragOptionBorderColor": [
                {
                    "color": "rgba(107, 139, 255, 1)",
                    "isSelected": true
                },
                {
                    "color": "NO_COLOR",
                    "isSelected": false
                }
            ],
            "dragOptionBorderStyle": "solid",
            "dragOptionBorderSelection": "withBorder",
            "connectorSettingsSelection": "noConnector",
            "dragHandleIcon": "default",
            "dropzoneConnectorShape": "line"
        },
        "questionItemInstruction": "this is question",
        "shuffledOrder": [
            null,
            null,
            null,
            null
        ],
        "answerSets": [
            {
                "id": 0,
                "points": 16
            },
            {
                "id": 1,
                "points": 20
            }
        ]
    },
    "isAutoScoreViewModeDirty": true,
    "isScoringPointsDirty": false
}

const compactData = {
    "answer": [[
        {
            "mappedValue": 4,
            "mappedKey": "choice1",
        },
        {
            "mappedValue": 4,
            "mappedKey": "choice3",
        },
        {
            "mappedValue": 4,
            "mappedKey": "choice2",
        },
        {
            "mappedValue": 4,
            "mappedKey": "choice4",
        }
    ],
    [
        {
            "mappedValue": 5,
            "mappedKey": "choice2",
        },
        {
            "mappedValue": 5,
            "mappedKey": "choice3",
        },
        {
            "mappedValue": 5,
            "mappedKey": "choice4",
        },
        {
            "mappedValue": 5,
            "mappedKey": "choice1",
        }
    ]
    ],
    "questionText": "this is question",
    "orderLayout": 1,
    "optionOrientation": 1,
    "enableWrapping": true,
    "questionType": "orderList",
    "teacherGuideline": "",
    "fontSize": "huge",
    "answerNumeration": 2,
    "nonAccessible": false,
    "minScoreIfAttempted": 3,
    "scoringGuidance": "",
    "sampleResponse": "",
    "options": [
        {
            "text": "o1"
        },
        {
            "text": "o2"
        },
        {
            "text": "o3"
        },
        {
            "text": "o4"
        }
    ],
    "layoutConfig": {
        "responsePlacement": 1,
        "dropzoneFillColor": [
            {
                "color": "rgba(245, 248, 255, 1)",
                "isSelected": true
            },
            {
                "color": "NO_COLOR",
                "isSelected": false
            }
        ],
        "dropzoneBorderColor": [
            {
                "color": "rgba(82, 0, 255, 1)",
                "isSelected": true
            },
            {
                "color": "NO_COLOR",
                "isSelected": false
            }
        ],
        "dropzoneBorderStyle": "dotted",
        "dropdownBorderStyle": "solid",
        "responseAlignment": 1,
        "dropzoneOptionAlignment": 1,
        "dropzoneOptionPlacement": "inline",
        "dragOptionFillColor": [
            {
                "color": "rgba(255, 255, 255, 1)",
                "isSelected": true
            },
            {
                "color": "NO_COLOR",
                "isSelected": false
            }
        ],
        "dragOptionBorderColor": [
            {
                "color": "rgba(107, 139, 255, 1)",
                "isSelected": true
            },
            {
                "color": "NO_COLOR",
                "isSelected": false
            }
        ],
        "dragOptionBorderStyle": "solid",
        "dragOptionBorderSelection": "withBorder",
        "connectorSettingsSelection": "noConnector",
        "dragHandleIcon": "default",
        "dropzoneConnectorShape": "line"
    },

}
