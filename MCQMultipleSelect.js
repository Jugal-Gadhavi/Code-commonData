const MCQCommonSettings = {
    "questionItemInstruction": "this is me",
    "responseDeclaration": {
        "correctResponses": [
            {
                "answerSetId": 0,
                "correctAnswers": [
                    "ChoiceD",
                    "ChoiceB"
                ]
            },
            {
                "answerSetId": 1,
                "correctAnswers": [
                    "ChoiceA",
                    "ChoiceC"
                ]
            }
        ],
        "mappedCorrectResponses": [
            {
                "answerSetId": 0,
                "mappedResponses": [
                    {
                        "mappedKey": "ChoiceD",
                        "mappedValue": 10,
                        "isError": false
                    },
                    {
                        "mappedKey": "ChoiceB",
                        "mappedValue": 10,
                        "isError": false
                    }
                ]
            },
            {
                "answerSetId": 1,
                "mappedResponses": [
                    {
                        "mappedKey": "ChoiceA",
                        "mappedValue": 15,
                        "isError": false
                    },
                    {
                        "mappedKey": "ChoiceC",
                        "mappedValue": 15,
                        "isError": false
                    }
                ]
            }
        ]
    },
    "choices": {
        "responseIdentifier": "RESPONSE",
        "optionsList": [
            {
                "optionNumber": 1,
                "optionIdentifier": "ChoiceA",
                "text": "option 1"
            },
            {
                "optionNumber": 2,
                "optionIdentifier": "ChoiceB",
                "text": "option 2"
            },
            {
                "optionNumber": 3,
                "optionIdentifier": "ChoiceC",
                "text": "option 3"
            },
            {
                "optionNumber": 4,
                "optionIdentifier": "ChoiceD",
                "text": "option 4"
            }
        ]
    },
    "identifier": "choiceMultiple",
    "resIdentifier": "RESPONSE",
    "autoScoredViewMode": "partialScoring",
    "manualSCoredViewMode": "points",
    "scoringType": 1,
    "itemTypeId": 5,
    "additionalOptions": {
        "teacherGuideline": "",
        "customMetadata": {},
        "isExtendedQuestion": false,
        "selectedItemTypeId": 5,
        "penaltyPoints": null,
        "minScoreIfAttempted": 2,
        "minScoreType": 2,
        "penaltyPointType": null,
        "isAutoPenaltySetting": false,
        "isNegativeRounded": true,
        "specificPenaltyType": null,
        "penaltyPointsForEach": null,
        "acknowledgements": "",
        "sampleAnswer": "",
        "optionStyleType": 1,
        "optionNumeration": 2,
        "optionOrientation": 2,
        "optionColumns": 1,
        "isCheckAnswerEnabled": false,
        "maxCheckAnswerAllowed": 0,
        "nonAccessible": false,
        "minAnswersAllowed": null,
        "maxAnswersAllowed": null,
        "optionFontSize": 1,
        "autoScoredViewMode": "defaultScoring",
        "isMultipleColumns": false,
        "optionAlignment": 1
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
        "shuffleOption": false,
        "isRoundingEnabled": true,
        "positionLock": false,
        "randomizeOption": false,
        "disablePrevIncorrect": false,
        "roundingType": 1,
        "setMinimumOrMaximumNumberOfAnswers": false,
        "questionItemInstruction": "this is me",
        "answerSets": [
            {
                "id": 0,
                "points": 20
            },
            {
                "id": 1,
                "points": 30
            }
        ]
    },
    "isAutoScoreViewModeDirty": true,
    "isScoringPointsDirty": false
}

const loadedCompact = {
    questionText: "this is a question",
    options: [
        { text: 'option 1' },
        { text: 'option 2' },
        { text: 'option 3' },
        { text: 'option 4' }
    ],
    correctAnswers: [
        [
            {
                "Choice": "ChoiceD",
                "points": 10,
            },
            {
                "choice": "ChoiceB",
                "points": 10,
            },
        ],
        [
            {
                "choice": "ChoiceA",
                "points": 15,
            },
            {
                "choice": "ChoiceC",
                "points": 15,
            },
        ],
    ],
    "minPoints": 2,
    "scoring": "autoScored",
    'questionType': 'Single Select MCQ',
    "excludePrint": true,
    "guidelines": "no guidelines",
    "fontSize": "tiny",
    "nonAccessible": true,
    "acknowledgements": "hello this is ack",
    "sampleAnswer": "hello this is sampleanswer",
    "shuffle": true,
    "excludeFromPrint": false,
    "instructionsForPrint": "",
    "shuffleOption": false,
    "isRoundingEnabled": true,
    "positionLock": false,
    "randomizeOption": false,
}

const compactDefault = {
    questionText: "",
    options: [
        { text: '' },
        { text: '' },
        { text: '' },
        { text: '' }
    ],
    "scoring": "autoScored",
    'questionType': 'Multiple Select MCQ',
}