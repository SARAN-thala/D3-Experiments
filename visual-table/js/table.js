var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function appendRow(scale, value) {
    var row = d3.select('tbody').append('tr');
    row.append('td').text(value);
    row.selectAll('td')
        .data(data, function (d) {
            return d;
        })
        .enter()
        .append('td')
        .text(function (d) {
            return scale(d).toFixed(2);
        });
        // .classed('table-box',true);
}

var createTable = function () {

    var table = d3.select('body').append('table');

    var tbody = table.append('tbody');

    appendRow(d3.scaleLinear(), 'Title');
    appendRow(d3.scaleLinear(), 'N');
    appendRow(d3.scalePow().exponent(2), 'Square of N');
    appendRow(d3.scaleLog(), 'Log(N)');
    appendRow(d3.scaleLog().rangeRound([0, 1]), 'Log(N) Round');
};

var loadTable = function () {
    return createTable()
};

window.onload = loadTable;
