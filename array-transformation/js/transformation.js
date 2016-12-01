let mappedValues;
let data = [];
let storingData = [];
let bisectValue;

let showingInput = function (div, data) {
    d3.select(div).html("");
    let divElement = d3.select(div).append('div');
    divElement.append('span')
        .classed('title', true)
        .text(data.title);
    divElement.append('span')
        .classed('value', true)
        .text(data.value);
};

let shuffle = () => (showingInput('.container', {title: 'Shuffle of number : ', value:`[${d3.shuffle(mappedValues)}]`}))

let pairs = () => {
    let getPair = d3.pairs(mappedValues);
    let getPairs =  getPair.map(d => `[ ${d} ]`);
    showingInput('.container', {title: 'Pairs of number : ', value: `[${getPairs}]`});
};

let merge = () => {
    let getPair = d3.merge(data);
    showingInput('.container', {title: 'Merges value is : ', value: `[${getPair}]`});
};

// let sortByDescending = () => (mappedValues.sort(d3.descending));
//
// let sortByScanAscending = () => (d3.scan(mappedValues, (a, b) => (a - b)));
//
// let sortByScanDescending = () => (d3.scan(mappedValues, (a, b) => (b - a)));
//
// let getBisectLeft = () => (d3.bisectLeft(sortByAscending(), bisectValue));
//
// let getBisectRight = () => (d3.bisectRight(sortByAscending(), bisectValue));

// let sortByBisect = function (title, method) {
//     "use strict";
//     if (!bisectValue) {
//         alert('please enter bisect value');
//         d3.select('.container').html("");
//     } else {
//         return showingInput('.container', {title: `${title} value is : `, value: method(bisectValue)});
//     }
// };

let sortbyMethods = function (title, method) {
    if (!mappedValues || mappedValues == '') {
        alert("Please fill the Input box");
    } else {
        return showingInput('.container', {title: `${title} of number : `, value: method(mappedValues)});
    }
};

let dataStore = function () {
    let storingValues = (document.getElementById('inputNumber').value).split(',');
    mappedValues = storingValues.filter(d => { return d;}).map(Number);
    if (mappedValues == '') {
        alert("Please fill the Input box");
        d3.select('.value').html("");
    } else {
        d3.select('.value').html("");
        storingData.push(`[${mappedValues}]`);
        data.push(mappedValues);
        showingInput('.value', {title: 'Entered values are : ', value: storingData})
    }
    document.getElementById('inputNumber').value = '';
};

let bisectData = function () {
    bisectValue = (document.getElementById('bisectValue').value).split(',')[0];
    if (bisectValue == '') {
        alert("Please fill the Bisect box");
        d3.select('.bisectValue').html("");
    } else {
        d3.select('.bisectValue').html("");
        showingInput('.bisectValue', {title: 'Entered values are : ', value: bisectValue})
    }
    document.getElementById('inputNumber').value = '';
};

function validate(evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /[(0-9),]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}