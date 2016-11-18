const SIN_DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let translate = (x, y) => (`translate (${x}, ${y})`);

const WIDTH = 620;
const HEIGHT = 620;
const MARGIN = 90;
const INNER_WIDTH = WIDTH - (2 * MARGIN);
const INNER_HEIGHT = HEIGHT - (2 * MARGIN);

let xScale = d3.scaleLinear()
    .domain([0, 1])
    .range([0, INNER_WIDTH]);

let yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([INNER_HEIGHT, 0]);

const SIN_X_SCALE = d => ( xScale(d / 10));
const SIN_Y_SCALE = d => (yScale((3 * (Math.sin(d)) + 5) / 10));

let generateCircles = function (xVal, yVal, data, conatiner) {
    conatiner.append('g').selectAll('circle')
        .data(data)
        .enter().append('circle')
        .attr('r', 5)
        .attr('cx', xVal)
        .attr('cy', yVal)
        .classed('circle-path', true)
};

const loadChart = function (x) {
    let svg = d3.select('.container').append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT);

    let xAxis = d3.axisBottom(xScale);
    let yAxis = d3.axisLeft(yScale);

    svg.append('g')
        .attr('transform', translate(MARGIN, HEIGHT - MARGIN))
        .call(xAxis);

    svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN))
        .call(yAxis);

    let g = svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN));

    let sineLine = d3.line()
        .x(SIN_X_SCALE)
        .y(SIN_Y_SCALE)
        .curve(x.d3Curve);

    g.append('path')
        .attr('d', sineLine(SIN_DATA))
        .classed('line-sine-path', true);

    let sineArea = d3.area()
        .x(SIN_X_SCALE)
        .y0(INNER_HEIGHT)
        .y1(SIN_Y_SCALE)
        .curve(x.d3Curve);

    g.append('path')
        .attr('d', sineArea(SIN_DATA))
        .classed('area-sine-path', true);

    generateCircles(SIN_X_SCALE, SIN_Y_SCALE, SIN_DATA, g);

    g.selectAll('circle').exit().remove();

};
//todo: need to find the final curve :(
let curveArray = [
    {'d3Curve': d3.curveLinearClosed},
    {'d3Curve': d3.curveStepAfter},
    {'d3Curve': d3.curveBasisOpen},
    {'d3Curve': d3.curveCardinalClosed},
    {'d3Curve': d3.curveBasis}
];

let curveInterpolate = () => (curveArray.forEach(x => loadChart(x)));

window.onload = curveInterpolate;