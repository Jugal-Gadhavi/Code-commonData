const commonMapping = {
    'questionInstruction': 'questionItemInstruction',
    'questionType': 'itemTypeId',
    "points": "metadata.answerSets",
    "excludePrint": "excludeFromPrint",
    "guidelines": "additionalOptions.teacherGuideline",
    "fontSize": "additionalOptions.fontSize",
    "nonAccessible": "additionalOptions.nonAccessible",
    "acknowledgements": "additionalOptions.acknowledgements",
    "sampleAnswer": "additionalOptions.sampleAnswer",
    // "tools": "toolSettingsResources"
}

const MCQMapping = {
    djshf: ""
}

const NumberLine = {

}

const loadedSingleSelect = {
    "question": 'hello question',
    "questionItemInstruction": "this is a not ion\n<table border=\"1\" class=\"custom_author_table ie-table-bordered ie-table\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>this is a table</td>\n\t\t\t<td>why</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>test</td>\n\t\t\t<td>is</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>me</td>\n\t\t\t<td>this table here</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>&#160;</p>\n",
    "responseDeclaration": {
        "responseDeclarationIdentifier": "RESPONSE",
        "mappedCorrectResponses": [
            {
                "answerSetId": 0,
                "mappedResponses": [
                    {
                        "mappedKey": "ChoiceB",
                        "mappedValue": ""
                    }
                ]
            },
            {
                "answerSetId": 1,
                "mappedResponses": [
                    {
                        "mappedKey": "ChoiceC",
                        "mappedValue": ""
                    }
                ]
            }
        ],
        "correctResponses": [
            {
                "answerSetId": 0,
                "correctAnswers": [
                    "ChoiceB"
                ]
            },
            {
                "answerSetId": 1,
                "correctAnswers": [
                    "ChoiceC"
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
                "text": "option 1",
                "lockValue": {
                    "isLocked": true,
                    "displayLock": true
                }
            },
            {
                "optionNumber": 2,
                "optionIdentifier": "ChoiceB",
                "text": "option 2",
                "lockValue": {
                    "isLocked": true,
                    "displayLock": true
                }
            },
            {
                "optionNumber": 3,
                "optionIdentifier": "ChoiceC",
                "text": "optin c",
                "lockValue": {
                    "isLocked": false,
                    "displayLock": true
                }
            },
            {
                "optionNumber": 4,
                "optionIdentifier": "ChoiceD",
                "text": "option 4",
                "lockValue": {
                    "isLocked": true,
                    "displayLock": true
                }
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
        "teacherGuideline": "these are guidelines",
        "customMetadata": {},
        "isExtendedQuestion": false,
        "selectedItemTypeId": 3,
        "penaltyPoints": null,
        "minScoreIfAttempted": 2,
        "minScoreType": 3,
        "penaltyPointType": null,
        "isAutoPenaltySetting": false,
        "isNegativeRounded": true,
        "specificPenaltyType": null,
        "penaltyPointsForEach": null,
        "acknowledgements": "haha these are guidelines",
        "sampleAnswer": "so are these the guidelines",
        "optionStyleType": 1,
        "optionNumeration": 2,
        "optionOrientation": 2,
        "optionColumns": 4,
        "isCheckAnswerEnabled": false,
        "maxCheckAnswerAllowed": 0,
        "nonAccessible": true,
        "minAnswersAllowed": null,
        "maxAnswersAllowed": null,
        "optionFontSize": 6,
        "isMultipleColumns": true,
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
            "isSelected": true,
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
        "instructionsForPrint": "jklhkljh",
        "shuffleOption": true,
        "isRoundingEnabled": false,
        "positionLock": true,
        "randomizeOption": false,
        "disablePrevIncorrect": false,
        "roundingType": 1,
        "questionItemInstruction": "this is a question\n<table border=\"1\" class=\"custom_author_table ie-table-bordered ie-table\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>this is a table</td>\n\t\t\t<td>why</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>test</td>\n\t\t\t<td>is</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>me</td>\n\t\t\t<td>this table here</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>&#160;</p>\n",
        "answerSets": [
            {
                "id": 0,
                "points": 10
            },
            {
                "id": 1,
                "points": 10
            }
        ],
        "shuffledOrder": [
            null,
            null,
            null,
            null
        ]
    }
}


// const SingleSelectMCQMapping = {
//     "text": "choices.optionsList"
// }

// const mappedArray = loadedSingleSelect.choices.optionsList.map(option => ({
//     option : option.optionNumber,
//     text : option.text
// }))

// console.log(mappedArray)

const MCQ = {
    ...commonMapping,
    question: "questionItemInstruction",
    options: "choices.optionsList",
};


function mapObjectByMapping(obj, mapping) {
    const mappedObject = {};

    for (let key in mapping) {
        if (mapping.hasOwnProperty(key)) {
            const path = mapping[key].split('.');
            let value = obj;

            for (let prop of path) {
                if (value[prop] !== undefined) {
                    if (prop === "optionsList") {
                        value = value[prop].map(option => ({
                            // ...(option.lockValue.isLocked && {
                            //     isLocked: option.lockValue.isLocked
                            // }),
                            ...(option.lockValue.isLocked && {
                                lockedValue: {
                                    isLocked: option.lockValue.isLocked
                                }
                            }),
                            text: option.text
                        }))
                    }
                    else {
                        value = value[prop];
                    }
                } else {
                    value = undefined;
                    break;
                }
            }

            if (value !== undefined) {
                mappedObject[key] = value;
            }
        }
    }

    return mappedObject;
}

const smallerObject = mapObjectByMapping(loadedSingleSelect, MCQ);

console.log(smallerObject);
