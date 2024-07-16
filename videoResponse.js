const commonData = {
    "responseDeclaration": {
        "correctResponses": [],
        "mappedCorrectResponses": []
    },
    "questionItemInstruction": "",
    "identifier": "videoResponse",
    "uploadInteraction": {
        "responseIdentifier": "RESPONSE",
        "placeholderText": "Your Answer"
    },
    "zeroCorrectRes": true,
    "isManualScored": false,
    "isRubricUsed": false,
    "viewMode": "defaultScoring",
    "autoScoredViewMode": "defaultScoring",
    "manualSCoredViewMode": "points",
    "scoringType": 2,
    "itemTypeId": 39,
    "additionalOptions": {
        "teacherGuideline": "",
        "customMetadata": {},
        "isExtendedQuestion": false,
        "selectedItemTypeId": 39,
        "minScoreIfAttempted": null,
        "minScoreType": null,
        "penaltyPointType": null,
        "isAutoPenaltySetting": false,
        "isNegativeRounded": true,
        "specificPenaltyType": null,
        "penaltyPointsForEach": null,
        "fontSize": 1,
        "acknowledgements": "",
        "sampleAnswer": "",
        "nonAccessible": false
    },
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
        "defaultPoints": "",
        "uiStyle": {
            "playSpeed": true,
            "fullScreen": true,
            "recordAgain": true,
            "progressBar": true,
            "timer": true,
            "allowDownload": true,
            "volumeControl": true,
            "seek": true,
            "play": true,
            "pause": true,
            "forwardBackward": true,
            "fontSize": 1
        },
        "record": {
            "maxAllowedFiles": 1,
            "maxRecordingLength": 300,
            "silentStopDuration": null
        },
        "videoPlaybackControls": [
            "play",
            "pause",
            "seek",
            "recordAgain",
            "volumeControl",
            "playSpeed",
            "fullScreen",
            "forwardBackward"
        ],
        "advancePlayerOptions": [
            "timer",
            "progressBar"
        ],
        "showStopRecording": true,
        "showMaxRecordingLength": true,
        "maxFilesPermitted": 1,
        "showFontSizeDropdown": true,
        "playbackWithRecording": false,
        "recordingDurationType": 0,
        "videoRecorderStyle": 0,
        "limitNoOfRetake": true,
        "retakeLimit": 5,
        "showRetakeLimit": true,
        "resizeVideo": true,
        "repositionVideo": true,
        "videoDefaultWidth": 324
    }
}

const compactData = {
    "questionText": "",
    "questionType": "videoResponse",
    "scoringType": "manually scored",
    //common fields
    "videoPlaybackControls": [
        "play",
        "pause",
        "seek",
        "recordAgain",
        "volumeControl",
        "playSpeed",
        "fullScreen",
        "forwardBackward"
    ],
    "advancePlayerOptions": [
        "timer",
        "progressBar"
    ],
    "showStopRecording": true,
    "showMaxRecordingLength": true,
    "maxFilesPermitted": 1,
    "limitNoOfRetake": true,
    "retakeLimit": 5,
    "videoDefaultWidth": 324,
    "showRetakeLimit": true,
}