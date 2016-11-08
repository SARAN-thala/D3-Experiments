const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const appendRow = (scale, value) => {
    let row = d3.select('tbody').append('tr');
    row.append('td').text(value);
    row.selectAll('td')
        .data(data, d => (d))
        .enter()
        .append('td')
        .text( d => (scale(d)))
};

const createTable = () => {

    let table = d3.select('body').append('table');

    let tbody = table.append('tbody');

    let log = (d) => (d3.scaleLog()(d).toFixed(2))

    appendRow(d3.scaleLinear(), 'Title');
    appendRow(d3.scaleLinear(), 'N');
    appendRow(d3.scalePow().exponent(2), 'Square of N');
    appendRow(log, 'Log(N)');
    appendRow(d3.scaleLog().rangeRound([0, 1]), 'Log(N) Round');
};

const loadTable = () => (createTable());

window.onload = loadTable;