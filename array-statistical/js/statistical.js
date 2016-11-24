let mappedValues;
let quartileValue;

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


let sortbyMethods = function (title, method) {
    return showingInput('.container',{title: `${title} of number : `, value: method(mappedValues)});
};

let sortByQuantile = function (title) {
    return showingInput('.container',{title: `${title} of number : `, value: d3.quantile(mappedValues, quartileValue)});
};


let dataStore = function () {
    let storingValues = (document.getElementById('inputNumber').value).split(',');
    mappedValues = storingValues.map(d => (d));
    if (mappedValues != '') {
        showingInput('.value',{title: 'Entered values are : ', value: mappedValues})
        // console.log(mappedValues)
    }
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

let quartileStore = function () {
    quartileValue = (document.getElementById('quartileInput').value).split(',')[0];
    if (quartileValue != '')
        showingInput('.quantile',{title: 'Entered quartile value is : ', value: quartileValue})
};

let clearDataStore = function (fn) {
    fn();
    document.getElementById('inputNumber').value = '';
};

let clearQuantileStore = function (fn) {
    fn();
    document.getElementById('quartileInput').value = '';
};