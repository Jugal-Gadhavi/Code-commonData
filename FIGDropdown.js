const commonData = {
    "responseDeclaration": {
        "correctResponses": [
            {
                "answerSetId": 0,
                "correctAnswers": [
                    {
                        "xmlIdentifier": "Response 1",
                        "correctAnswer": "d1 o1",
                        "answerDataId": 0
                    },
                    {
                        "xmlIdentifier": "Response 2",
                        "correctAnswer": "d2 o4",
                        "answerDataId": 1
                    }
                ]
            },
            {
                "answerSetId": 1,
                "correctAnswers": [
                    {
                        "xmlIdentifier": "Response 1",
                        "correctAnswer": "d1 o2",
                        "answerDataId": 0
                    },
                    {
                        "xmlIdentifier": "Response 2",
                        "correctAnswer": "d2 o3",
                        "answerDataId": 1
                    }
                ]
            }
        ],
        "mappedCorrectResponses": [
            {
                "answerSetId": 0,
                "mappedResponses": [
                    {
                        "xmlIdentifier": "Response 1",
                        "mappedKey": "d1 o1",
                        "mappedValue": 10,
                        "answerDataId": 0,
                        "isError": false
                    },
                    {
                        "xmlIdentifier": "Response 2",
                        "mappedKey": "d2 o4",
                        "mappedValue": 10,
                        "answerDataId": 1,
                        "isError": false
                    }
                ]
            },
            {
                "answerSetId": 1,
                "mappedResponses": [
                    {
                        "xmlIdentifier": "Response 1",
                        "mappedKey": "d1 o2",
                        "mappedValue": 15,
                        "isError": false
                    },
                    {
                        "xmlIdentifier": "Response 2",
                        "mappedKey": "d2 o3",
                        "mappedValue": 15,
                        "isError": false
                    }
                ]
            }
        ]
    },
    "choices": [
        {
            "responseIdentifier": "Response 1",
            "responseDataId": 0,
            "optionsList": [
                {
                    "optionNumber": 1,
                    "optionIdentifier": "TeacherChoice1",
                    "text": "d1 o1"
                },
                {
                    "optionNumber": 2,
                    "optionIdentifier": "TeacherChoice2",
                    "text": "d1 o2"
                },
                {
                    "optionNumber": 3,
                    "optionIdentifier": "TeacherChoice3",
                    "text": "d1 o3"
                },
                {
                    "optionNumber": 4,
                    "optionIdentifier": "TeacherChoice4",
                    "text": "d1 o4"
                }
            ]
        },
        {
            "responseIdentifier": "Response 2",
            "responseDataId": 1,
            "optionsList": [
                {
                    "optionNumber": 1,
                    "optionIdentifier": "TeacherChoice1",
                    "text": "d2 o1"
                },
                {
                    "optionNumber": 2,
                    "optionIdentifier": "TeacherChoice2",
                    "text": "d2 o2"
                },
                {
                    "optionNumber": 3,
                    "optionIdentifier": "TeacherChoice3",
                    "text": "d2 o3"
                },
                {
                    "optionNumber": 4,
                    "optionIdentifier": "TeacherChoice4",
                    "text": "d2 o4"
                }
            ]
        }
    ],
    "questionItemInstruction": "this is question text instructions etc",
    "questionItem": "Lorem ipsum dolor sit amet, {{response0}}onsectetur adipiscing elit. Ut pellentesque tinciduntornare. Integer porttitor est quis urna porttitor, eget tempus tellus dapibus {{response1}}",
    "identifier": "clozeWithDropdown",
    "zeroCorrectRes": true,
    "isManualScored": false,
    "isRubricUsed": false,
    "viewMode": "defaultScoring",
    "autoScoredViewMode": "partialScoring",
    "manualSCoredViewMode": "points",
    "scoringType": 1,
    "itemTypeId": 31,
    "additionalOptions": {
        "teacherGuideline": "",
        "customMetadata": {},
        "isExtendedQuestion": false,
        "selectedItemTypeId": 31,
        "setCharacterLimit": 20,
        "placeholder": "",
        "height": 32,
        "width": 120,
        "fontSize": 1,
        "answerNumeration": 2,
        "isCheckAnswerEnabled": false,
        "nonAccessible": false,
        "maxCheckAnswerAllowed": null,
        "acknowledgements": "",
        "sampleAnswer": "",
        "autoScoredViewMode": "defaultScoring",
        "isNegativeRounded": true,
        "isAutoPenaltySetting": false,
        "penaltyPoints": null,
        "penaltyPointType": null,
        "specificPenaltyType": null,
        "penaltyPointsForEach": null,
        "minScoreIfAttempted": 2,
        "minScoreType": 2,
        "gradingStyle": "withEnumeration",
        "customizedPlaceholder": false,
        "textBoxConfig": [],
        "responseConfig": [
            {
                "responseDataId": 0,
                "responseNumber": 1,
                "responseIdentifier": "Response 1",
                "ariaLabel": "",
                "placeholder": "",
                "height": null,
                "width": null
            },
            {
                "responseDataId": 1,
                "responseNumber": 2,
                "responseIdentifier": "Response 2",
                "ariaLabel": "",
                "placeholder": "",
                "height": null,
                "width": null
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
        "caseSensitive": false,
        "randomizeOptions": true,
        "isRoundingEnabled": true,
        "roundingType": 1,
        "penaltyPointType": null,
        "isNegativeRounded": true,
        "penaltyPointsForEach": null,
        "dropdownWidth": 1,
        "isMultilineText": false,
        "isWordWrapInMenu": true,
        "layoutCustomization": {
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
            "dropzoneBorderStyle": "solid"
        },
        "questionItemInstruction": "this is question text instructions etc",
        "answerSets": [
            {
                "id": 0,
                "points": 20
            },
            {
                "id": 1,
                "points": 30
            }
        ],
        "matchFromAllResponse": false,
        "randomizedChoices": [
            {
                "responseIdentifier": "Response 1",
                "responseDataId": 0,
                "optionsList": [
                    null,
                    null,
                    null,
                    null
                ]
            },
            {
                "responseIdentifier": "Response 2",
                "responseDataId": 1,
                "optionsList": [
                    null,
                    null,
                    null,
                    null
                ]
            }
        ]
    },
    "isAutoScoreViewModeDirty": true,
    "isScoringPointsDirty": false
}

const emptyCompact = {
    "scoringType": "Autoscored",
    "QuestionType": "Fill in the gaps with dropdown",
    "questionItemInstruction": "",
    "questionItem": "Lorem ipsum dolor sit amet, {{response0}}onsectetur adipiscing elit. Ut pellentesque tinciduntornare. Integer porttitor est quis urna porttitor, eget tempus tellus dapibus {{response1}}",
    options: [
        [
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
        ], [
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
        ]
    ],
}

const loadedCompact = {
    answers: [
        [
            {
                "mappedKey": "d1 o2",
                "mappedValue": 15,
            },
            {
                "mappedKey": "d2 o3",
                "mappedValue": 15,
            }
        ], [
            {
                "mappedKey": "d1 o1",
                "mappedValue": 10,
            },
            {
                "mappedKey": "d2 o4",
                "mappedValue": 10,
            }
        ]
    ],
    "scoringType": "Autoscored",
    "QuestionType": "Fill in the gaps with dropdown",
    "questionItemInstruction": "this is question text instructions etc",
    "questionItem": "Lorem ipsum dolor sit amet, {{response0}}onsectetur adipiscing elit. Ut pellentesque tinciduntornare. Integer porttitor est quis urna porttitor, eget tempus tellus dapibus {{response1}}",
    options: [
        [
            {
                "text": "d1 o1"
            },
            {
                "text": "d1 o2"
            },
            {
                "text": "d1 o3"
            },
            {
                "text": "d1 o4"
            }
        ], [
            {
                "text": "d2 o1"
            },
            {
                "text": "d2 o2"
            },
            {
                "text": "d2 o3"
            },
            {
                "text": "d2 o4"
            }
        ]
    ],
    "teacherGuideline": "",
    "nonAccessible": true,
    "acknowledgements": "dummy",
    "sampleAnswer": "dummy",
    "minScoreIfAttempted": 2,
    "randomizeOptions": true,
    "isRoundingEnabled": true,
    "isWordWrapInMenu": true,
}