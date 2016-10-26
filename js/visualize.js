var newData = function () {
    var data = [];
    for(var i=0;i<=100;i++){
        data[i] =i;
    }
    return _.sampleSize(data,10);
};

const WIDTH = 1420;
const HEIGHT = 650;
const MARGIN = 50;

const INNER_WIDTH = WIDTH - (2 * MARGIN);
const INNER_HEIGHT = HEIGHT - (2 * MARGIN);

const loadChart = function (data) {

    d3.select('svg').remove();
    let svg = d3.select('.container').append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT);

    let xScale = d3.scaleLinear()
        .domain([0, data.length])
        .range([0, INNER_WIDTH]);

    let yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([INNER_HEIGHT, 0]);

    let xAxis = d3.axisBottom(xScale);
    let yAxis = d3.axisLeft(yScale)

    let g = svg.append('g')
        .attr('transform', `translate(${MARGIN - 8}, ${MARGIN})`);

    svg.append('g')
        .attr('transform', `translate(${MARGIN - 10}, ${HEIGHT - MARGIN})`)
        .call(xAxis)

    svg.append('g')
        .attr('transform', `translate(${MARGIN - 10}, ${MARGIN})`)
        .call(yAxis)

    svg.selectAll('.yAxis .tick')
        .append('line')
        .attr('x1', 0)
        .attr('y1', 0.5)
        .attr('x2', INNER_WIDTH)
        .attr('y2', 0.5)
        .classed('grid', true);

    let line = d3.line()
        .x(function (d,i) {return xScale(i)})
        .y(function (d) {return yScale(d)});

    g.append('path')
        .classed('data', true)
        .attr('d', line(data));

};

var updateChart = function () {
    newData().shift()
    newData().push(0,_.random(1,100))
    loadChart(newData());
}

window.onload = function() {loadChart(newData())};

setInterval(function () {
    updateChart();
},1000)