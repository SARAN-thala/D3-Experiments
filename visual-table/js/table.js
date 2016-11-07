var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

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
            return scale(d);
        });
}

var createTable = function () {

    var table = d3.select('body').append('table');

    var tbody = table.append('tbody');

    appendRow(d3.scaleLinear(), 'Title');
    appendRow(d3.scaleLinear(), 'N');
    appendRow(d3.scalePow().exponent(2), 'Square');
    appendRow(d3.scaleLog(), 'Log');
    appendRow(d3.scaleLog().domain([1, 10]).base(10).rangeRound([0, 1]), 'Range Round');
};

var loadTable = function () {
    return createTable()
};

window.onload = loadTable;
