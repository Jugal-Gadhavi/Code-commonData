
const MCQCommonSettings = {
    "questionItemInstruction": "",
    "responseDeclaration": {
        "correctResponses": [
            {
                "answerSetId": 0,
                "correctAnswers": []
            }
        ],
        "responseDeclarationIdentifier": "RESPONSE",
        "mappedCorrectResponses": []
    },
    "choices": {
        "responseIdentifier": "RESPONSE",
        "optionsList": [
            {
                "optionNumber": 1,
                "optionIdentifier": "ChoiceA",
                "text": ""
            },
            {
                "optionNumber": 2,
                "optionIdentifier": "ChoiceB",
                "text": ""
            },
            {
                "optionNumber": 3,
                "optionIdentifier": "ChoiceC",
                "text": ""
            },
            {
                "optionNumber": 4,
                "optionIdentifier": "ChoiceD",
                "text": ""
            }
        ]
    },
    "identifier": "choice",
    "resIdentifier": "RESPONSE",
    "autoScoredViewMode": "defaultScoring",
    "manualSCoredViewMode": "points",
    "scoringType": 1,
    "itemTypeId": 3,
    "additionalOptions": {
        "teacherGuideline": "",
        "customMetadata": {},
        "isExtendedQuestion": false,
        "selectedItemTypeId": 3,
        "penaltyPoints": null,
        "minScoreIfAttempted": null,
        "minScoreType": null,
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
        "isMultipleColumns": false,
        "optionAlignment": 1
    },
    "isManualScored": false,
    "activeTabIndex": 0,
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
        "answerSets": [
            {
                "id": 0,
                "points": ""
            }
        ],
        "shuffleOption": false,
        "isRoundingEnabled": false,
        "positionLock": false,
        "randomizeOption": false,
        "disablePrevIncorrect": false,
        "roundingType": 1
    }
}

const compactLoaded = {
    questionText: "this is a question",
    options: [
        { text: 'this is A' },
        { text: 'this is B' },
        { text: 'this is C' },
        { text: 'this is D' }
    ],
    correctAnswers: [
        {
            answer: 'this is B',
            points: 10,
        },
        {
            answer: 'this is D',
            points: 30,
        }
    ],
    "minPoints" : 1,
    "scoring" : "autoScored",
    'questionType': 'Single Select MCQ',
    "excludePrint": true,
    "guidelines": "no guidelines",
    "fontSize": "tiny",
    "nonAccessible": true,
    "acknowledgements": "hello this is ack",
    "sampleAnswer": "hello this is sampleanswer",
    "shuffle": true,
}

const compactDefault = {
    questionText: "",
    options: [
        { text: '' },
        { text: '' },
        { text: '' },
        { text: '' }
    ],
    "scoring" : "autoScored",
    'questionType': 'Single Select MCQ',
}