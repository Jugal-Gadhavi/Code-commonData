const commonData = {
    "responseDeclaration": {
        "responseDeclarationIdentifier": "RESPONSE",
        "mappedCorrectResponses": [
            {
                "answerSetId": 0,
                "mappedResponses": [
                    {
                        "xmlIdentifier": "Response 1",
                        "mappedKey": "hello",
                        "mappedValue": 10,
                        "answerDataId": 0,
                        "alternateId": 1
                    },
                    {
                        "xmlIdentifier": "Response 2",
                        "mappedKey": "hii",
                        "mappedValue": 10,
                        "answerDataId": 1,
                        "alternateId": 1
                    }
                ]
            },
            {
                "answerSetId": 1,
                "mappedResponses": [
                    {
                        "xmlIdentifier": "Response 1",
                        "alternateId": 1,
                        "answerDataId": 0,
                        "mappedKey": "15",
                        "mappedValue": 15
                    },
                    {
                        "xmlIdentifier": "Response 2",
                        "alternateId": 1,
                        "answerDataId": 1,
                        "mappedKey": "this is 15 as well",
                        "mappedValue": 15
                    }
                ]
            }
        ],
        "correctResponses": [
            {
                "answerSetId": 0,
                "correctAnswers": [
                    {
                        "xmlIdentifier": "Response 1",
                        "correctAnswer": "hello",
                        "answerDataId": 0,
                        "alternateId": 1,
                        "answerType": 1
                    },
                    {
                        "xmlIdentifier": "Response 2",
                        "correctAnswer": "hii",
                        "answerDataId": 1,
                        "alternateId": 1,
                        "answerType": 1
                    }
                ]
            },
            {
                "answerSetId": 1,
                "correctAnswers": [
                    {
                        "xmlIdentifier": "Response 1",
                        "correctAnswer": "15",
                        "answerDataId": 0,
                        "alternateId": 1,
                        "answerType": 1
                    },
                    {
                        "xmlIdentifier": "Response 2",
                        "correctAnswer": "this is 15 as well",
                        "answerDataId": 1,
                        "alternateId": 1,
                        "answerType": 1
                    }
                ]
            }
        ]
    },
    "questionItemInstruction": "this is question",
    "questionItem": "Lorem ipsum dolor sit amet, {{response0}}onsectetur adipiscing elit. Ut pellentesque tincidunt ornare. Integer porttitor est quis urna porttitor,eget {{response1}}tempus tellus dapibus.",
    "identifier": "clozeWithText",
    "zeroCorrectRes": true,
    "isManualScored": false,
    "isRubricUsed": false,
    "viewMode": "defaultScoring",
    "autoScoredViewMode": "partialScoring",
    "manualSCoredViewMode": "points",
    "scoringType": 1,
    "itemTypeId": 29,
    "additionalOptions": {
        "teacherGuideline": "",
        "customMetadata": {},
        "isExtendedQuestion": false,
        "selectedItemTypeId": 29,
        "placeholder": "",
        "answerType": 1,
        "setCharacterLimit": 20,
        "height": 32,
        "width": 120,
        "fontSize": 1,
        "answerNumeration": 2,
        "multilineResponse": true,
        "spellCheck": true,
        "displaySpecialCharacters": false,
        "maxCheckAnswerAllowed": null,
        "nonAccessible": false,
        "customSpecialCharacters": "",
        "acknowledgements": "",
        "sampleAnswer": "",
        "isNegativeRounded": true,
        "autoScaleResponseHeight": false,
        "autoScoredViewMode": "defaultScoring",
        "gradingStyle": "withEnumeration",
        "customizedPlaceholder": false,
        "responseConfig": [
            {
                "responseDataId": 0,
                "responseNumber": 1,
                "responseIdentifier": "Response 1",
                "ariaLabel": "",
                "placeholder": "",
                "answerType": 1,
                "height": null,
                "width": null
            },
            {
                "responseDataId": 1,
                "responseNumber": 2,
                "responseIdentifier": "Response 2",
                "ariaLabel": "",
                "placeholder": "",
                "answerType": 1,
                "height": null,
                "width": null
            }
        ],
        "textBoxConfig": []
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
        "minCharLimit": 0,
        "maxCharLimit": 50,
        "setLimitRadio": 0,
        "caseSensitive": true,
        "ignoreSpaces": false,
        "isRoundingEnabled": true,
        "roundingType": 1,
        "customizeSpecialCharacters": {
            "show": false,
            "type": 1,
            "specialCharacterLanguages": [
                {
                    "label": "Spanish",
                    "icon": "ES",
                    "text": "Spanish",
                    "identifier": "spanish",
                    "ariaLabel": "Select special character languages grouping Spanish"
                },
                {
                    "label": "French",
                    "icon": "FR",
                    "text": "French",
                    "identifier": "french",
                    "ariaLabel": "Select special character languages grouping French"
                },
                {
                    "label": "German",
                    "icon": "DE",
                    "text": "German",
                    "identifier": "german",
                    "ariaLabel": "Select special character languages grouping German"
                },
                {
                    "label": "Portuguese",
                    "icon": "POR",
                    "text": "Portuguese",
                    "identifier": "portuguese",
                    "ariaLabel": "Select special character languages grouping Portuguese"
                },
                {
                    "label": "Scandinavian",
                    "icon": "SV",
                    "text": "Scandinavian",
                    "identifier": "scandinavian",
                    "ariaLabel": "Select special character languages grouping Scandinavian"
                },
                {
                    "label": "Italian",
                    "icon": "IT",
                    "text": "Italian",
                    "identifier": "italian",
                    "ariaLabel": "Select special character languages grouping Italian"
                },
                {
                    "label": "Icelandic",
                    "icon": "IS",
                    "text": "Icelandic",
                    "identifier": "icelandic",
                    "ariaLabel": "Select special character languages grouping Icelandic"
                }
            ],
            "customSpecialCharacter": "",
            "selectedSpecialCharacterLanguages": [
                "spanish",
                "french",
                "german",
                "portuguese",
                "scandinavian",
                "italian",
                "icelandic"
            ]
        },
        "isAnswerIncludedInResponse": true,
        "layoutCustomization": {
            "responsePlacement": 2,
            "groupDirection": 1,
            "groupAlignment": 1,
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
            "isSetDropZoneHeightWidth": false,
            "dropzoneBorderStyle": "solid",
            "responseAlignment": 1,
            "ignoreSingleLetterMistake": false
        },
        "questionItemInstruction": "this is question",
        "matchFromAllResponse": false,
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
        "ignoreSingleLetterMistake": false
    },
    "isAutoScoreViewModeDirty": true,
    "isScoringPointsDirty": false
}
const compactempty = {
    "questionText": "",
    "QuestionType": "Fill in the gaps over text",
    "scoringType": "AutoScored",
    "questionItem": "Lorem ipsum dolor sit amet, {{response0}}onsectetur adipiscing elit. Ut pellentesque tincidunt ornare. Integer porttitor est quis urna porttitor,eget {{response1}}tempus tellus dapibus.",
    "answers": [
        [
            {
                "mappedKey": "",
                "mappedValue": 0
            },
            {
                "mappedKey": "",
                "mappedValue": 0
            }
        ],
    ],
}

const compactLoaded = {
    "questionText": "this is question",
    "questionItem": "Lorem ipsum dolor sit amet, {{response0}}onsectetur adipiscing elit. Ut pellentesque tincidunt ornare. Integer porttitor est quis urna porttitor,eget {{response1}}tempus tellus dapibus.",
    "Questiontype": "Fill in the gaps over text",
    "scoringType": "AutoScored",
    "teacherGuideline": "guidelines",
    "fontSize": 1,
    "multilineResponse": true,
    "spellCheck": true,
    "nonAccessible": true,
    "acknowledgements": "references",
    "sampleAnswer": "sample",
    "minCharLimit": 0,
    "maxCharLimit": 50,
    "caseSensitive": true,
    "isAnswerIncludedInResponse": true,
    "answers": [
        [
            {
                "mappedKey": "15",
                "mappedValue": 15
            },
            {
                "mappedKey": "this is 15 as well",
                "mappedValue": 15
            }
        ],
        [
            {
                "mappedKey": "hello",
                "mappedValue": 10,
            },
            {
                "mappedKey": "hii",
                "mappedValue": 10,
            }
        ]
    ],
}