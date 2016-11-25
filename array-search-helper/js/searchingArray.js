let mappedValues;

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

let sortByAscending = () => (mappedValues.sort(d3.ascending));

let sortByDescending = () => (mappedValues.sort(d3.descending));

let sortByScanAscending = () => (d3.scan(mappedValues,(a,b)=>(a-b)));

let sortByScanDescending = () => (d3.scan(mappedValues,(a,b)=>(b-a)));

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
        showingInput('.value', {title: 'Entered values are : ', value: mappedValues})
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