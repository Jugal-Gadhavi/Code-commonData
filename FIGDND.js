const commonData = {
    "responseDeclaration": {
        "correctResponses": [
            {
                "answerSetId": 0,
                "correctAnswers": [
                    {
                        "answerDataId": 0,
                        "responseIdentifier": "Response1",
                        "choiceIdentifier": "choice1",
                        "xmlIdentifier": "Response1",
                        "correctAnswer": "choice1",
                        "alternateId": 1
                    },
                    {
                        "answerDataId": 1,
                        "responseIdentifier": "Response2",
                        "choiceIdentifier": "choice2",
                        "xmlIdentifier": "Response2",
                        "correctAnswer": "choice2",
                        "alternateId": 1
                    }
                ]
            },
            {
                "answerSetId": 1,
                "correctAnswers": [
                    {
                        "answerDataId": 0,
                        "responseIdentifier": "Response1",
                        "choiceIdentifier": "choice2",
                        "xmlIdentifier": "Response1",
                        "correctAnswer": "choice2",
                        "alternateId": 1
                    },
                    {
                        "answerDataId": 1,
                        "responseIdentifier": "Response2",
                        "choiceIdentifier": "choice1",
                        "xmlIdentifier": "Response2",
                        "correctAnswer": "choice1",
                        "alternateId": 1
                    }
                ]
            }
        ],
        "mappedCorrectResponses": [
            {
                "answerSetId": 0,
                "mappedResponses": [
                    {
                        "mappedValue": 10,
                        "answerDataId": 0,
                        "xmlIdentifier": "Response1",
                        "mappedKey": "choice1",
                        "isError": false,
                        "alternateId": 1
                    },
                    {
                        "mappedValue": 20,
                        "answerDataId": 1,
                        "xmlIdentifier": "Response2",
                        "mappedKey": "choice2",
                        "isError": false,
                        "alternateId": 1
                    }
                ]
            },
            {
                "answerSetId": 1,
                "mappedResponses": [
                    {
                        "mappedValue": 15,
                        "answerDataId": 0,
                        "xmlIdentifier": "Response1",
                        "mappedKey": "choice2",
                        "isError": false,
                        "alternateId": 1
                    },
                    {
                        "mappedValue": 25,
                        "answerDataId": 1,
                        "xmlIdentifier": "Response2",
                        "mappedKey": "choice1",
                        "isError": false,
                        "alternateId": 1
                    }
                ]
            }
        ]
    },
    "questionItemInstruction": "this is questiontext",
    "questionItem": "Lorem ipsum dolor sit amet, <clozeWithDragAndDropInteraction identifier='Response1'></clozeWithDragAndDropInteraction> onsectetur adipiscing elit. Ut pellentesque tincidunt ornare. Integer porttitor est quis urna porttitor,eget <clozeWithDragAndDropInteraction identifier='Response2'></clozeWithDragAndDropInteraction> tempus tellus dapibus.",
    "identifier": "clozeWithDragAndDrop",
    "zeroCorrectRes": true,
    "isManualScored": false,
    "isRubricUsed": false,
    "viewMode": "defaultScoring",
    "autoScoredViewMode": "partialScoring",
    "manualSCoredViewMode": "points",
    "scoringType": 1,
    "itemTypeId": 30,
    "additionalOptions": {
        "teacherGuideline": "",
        "customMetadata": {},
        "isExtendedQuestion": false,
        "selectedItemTypeId": 30,
        "height": null,
        "width": null,
        "fontSize": 1,
        "answerNumeration": 2,
        "isCheckAnswerEnabled": false,
        "nonAccessible": false,
        "maxCheckAnswerAllowed": null,
        "responsePlacement": 2,
        "wordWrap": false,
        "autoScoredViewMode": "defaultScoring",
        "textBoxConfig": [],
        "penaltyPoints": null,
        "specificPenaltyType": null,
        "penaltyPointsForEach": null,
        "isAutoPenaltySetting": false,
        "penaltyPointType": null,
        "minScoreType": null,
        "maximumResponsesPerCell": 1,
        "gradingStyle": "withEnumeration",
        "isNegativeRounded": true,
        "responseConfig": [
            {
                "responseDataId": 0,
                "responseNumber": 1,
                "responseIdentifier": "Response1",
                "ariaLabel": "",
                "height": null,
                "width": null,
                "wordWrap": false
            },
            {
                "responseDataId": 1,
                "responseNumber": 2,
                "responseIdentifier": "Response2",
                "ariaLabel": "",
                "height": null,
                "width": null,
                "wordWrap": false
            }
        ]
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
        "reuseOptions": true,
        "hideDragHandle": false,
        "isRoundingEnabled": true,
        "roundingType": 1,
        "outerBorder": true,
        "responseOption": 1,
        "choices": {
            "optionsList": [
                {
                    "optionIdentifier": "choice1",
                    "optionNumber": 1,
                    "text": "this"
                },
                {
                    "optionIdentifier": "choice2",
                    "optionNumber": 2,
                    "text": "that"
                }
            ]
        },
        "choicesGroup": [],
        "layoutCustomization": {
            "dropzoneFillColor": [
                {
                    "color": "#F5F8FF",
                    "isSelected": true
                },
                {
                    "color": "NO_COLOR",
                    "isSelected": false
                }
            ],
            "dropzoneBorderColor": [
                {
                    "color": "#5200FF",
                    "isSelected": true
                },
                {
                    "color": "NO_COLOR",
                    "isSelected": false
                }
            ],
            "dropzoneBorderStyle": "dashed",
            "isSetDropZoneHeightWidth": false,
            "dropzoneHeight": null,
            "dropzoneOptionPlacement": "inline",
            "dropzoneWidth": null,
            "dropzoneOptionAlignment": 1,
            "dragOptionFillColor": [
                {
                    "color": "#FFFFFF",
                    "isSelected": true
                },
                {
                    "color": "NO_COLOR",
                    "isSelected": false
                }
            ],
            "dragOptionBorderColor": [
                {
                    "color": "#6B8BFF",
                    "isSelected": true
                },
                {
                    "color": "NO_COLOR",
                    "isSelected": false
                }
            ],
            "dragHandleIcon": "default",
            "dragOptionBorderStyle": "solid",
            "responsePlacement": 2,
            "responseAlignment": 1,
            "groupDirection": 1,
            "groupAlignment": 1
        },
        "randomizedChoices": {
            "optionsList": [
                null,
                null
            ]
        },
        "randomizedChoicesGroup": [],
        "questionItemInstruction": "this is questiontext",
        "answerSets": [
            {
                "id": 0,
                "points": 30
            },
            {
                "id": 1,
                "points": 40
            }
        ],
        "matchFromAllResponse": false
    },
    "isAutoScoreViewModeDirty": true,
    "isScoringPointsDirty": false
}

const compactLoaded = {
    "questionItemInstruction": "this is questiontext",
    "options": ["this", "that"],
    "questionItem": "Lorem ipsum dolor sit amet, <clozeWithDragAndDropInteraction identifier='Response1'></clozeWithDragAndDropInteraction> onsectetur adipiscing elit. Ut pellentesque tincidunt ornare. Integer porttitor est quis urna porttitor,eget <clozeWithDragAndDropInteraction identifier='Response2'></clozeWithDragAndDropInteraction> tempus tellus dapibus.",
    "fontSize": 1,
    "teacherGuideline": "",
    "nonAccessible": false,
    "wordWrap": true,
    "answer": [[
        {
            "mappedValue": 10,
            "mappedKey": "choice1",
        },
        {
            "mappedValue": 20,
            "mappedKey": "choice2",
        }
    ][
        {
            "mappedValue": 15,
            "mappedKey": "choice2",
        },
        {
            "mappedValue": 25,
            "mappedKey": "choice1",
        }
    ]
    ],
    "layoutCustomization": {
        "dropzoneFillColor": [
            {
                "color": "#F5F8FF",
                "isSelected": true
            },
            {
                "color": "NO_COLOR",
                "isSelected": false
            }
        ],
        "dropzoneBorderColor": [
            {
                "color": "#5200FF",
                "isSelected": true
            },
            {
                "color": "NO_COLOR",
                "isSelected": false
            }
        ],
        "dropzoneBorderStyle": "dashed",
        "isSetDropZoneHeightWidth": false,
        "dropzoneHeight": 80,
        "dropzoneOptionPlacement": "inline",
        "dropzoneWidth": 60,
        "dropzoneOptionAlignment": 1,
        "dragOptionFillColor": [
            {
                "color": "#FFFFFF",
                "isSelected": true
            },
            {
                "color": "NO_COLOR",
                "isSelected": false
            }
        ],
        "dragOptionBorderColor": [
            {
                "color": "#6B8BFF",
                "isSelected": true
            },
            {
                "color": "NO_COLOR",
                "isSelected": false
            }
        ],
        "dragHandleIcon": "default",
        "dragOptionBorderStyle": "solid",
        "Placement": 2,
        "Alignment": 1,
        "Direction": 1,
        "Alignment": 1
    },
}