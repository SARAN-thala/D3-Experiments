const DATA = [{x: 0, y: 5}, {x: 1, y: 9}, {x: 2, y: 7}, {x: 3, y: 5}, {x: 4, y: 3}, {x: 6, y: 4}, {x: 7, y: 2}, {x: 8, y: 3}, {x: 9, y: 2}];
const SIN_DATA = [0,1,2,3,4,5,6,7,8,9];

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

const X_SCALE = d => ( xScale(d.x / 10));
const Y_SCALE = d => ( yScale(d.y / 10));

const SIN_X_SCALE = d => ( xScale(d/10));
const SIN_Y_SCALE = d => (yScale(Math.sin(d)/10+ 0.5));

let generateCircles = function (xVal, yVal, data, conatiner) {
    conatiner.append('g').selectAll('circle')
        .data(data)
        .enter().append('circle')
        .attr('r', 5)
        .attr('cx', xVal)
        .attr('cy', yVal)
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

    let line = d3.line()
        .x(X_SCALE)
        .y(Y_SCALE)
        .curve(x.d3Curve);

    let sine = d3.line()
        .x(SIN_X_SCALE)
        .y(SIN_Y_SCALE)
        .curve(x.d3Curve);

    g.append('path')
        .attr('d', line(DATA))
        .classed('line-path', true);

    g.append('path')
        .attr('d', sine(SIN_DATA))
        .classed('line-sine-path', true);

    generateCircles(X_SCALE, Y_SCALE, DATA, g);
    generateCircles(SIN_X_SCALE, SIN_Y_SCALE, SIN_DATA, g);

    g.selectAll('circle').exit().remove();

};

let curveArray = [
    {'d3Curve': d3.curveLinear},
    {'d3Curve': d3.curveLinearClosed},
    {'d3Curve': d3.curveStepAfter},
    {'d3Curve': d3.curveBasis},
    {'d3Curve': d3.curveBundle},
    {'d3Curve': d3.curveCardinalClosed},
    {'d3Curve': d3.curveCardinal},
    {'d3Curve': d3.curveCatmullRom}
];

const curveInterpolate = () => (curveArray.forEach(x=>loadChart(x)));

window.onload = curveInterpolate;