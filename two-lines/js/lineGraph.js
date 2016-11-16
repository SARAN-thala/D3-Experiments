const data = [{x: 0, y: 5}, {x: 1, y: 9}, {x: 2, y: 7}, {x: 3, y: 5}, {x: 4, y: 3}, {x: 6, y: 4}, {x: 7, y: 2}, {x: 8, y: 3}, {x: 9, y: 2}];

const translate = (x, y) => (`translate (${x}, ${y})`);

const WIDTH = 620;
const HEIGHT = 620;
const MARGIN = 30;
const INNER_WIDTH = WIDTH - (2 * MARGIN);
const INNER_HEIGHT = HEIGHT - (2 * MARGIN);

// const drawLineChart = function (svg, line, datas) {
//     let g = svg.append('g')
//         .attr('transform', translate(MARGIN,MARGIN));
//
//     g.append('path')
//         .attr('d', line(datas))
//         .classed('path', true);
// };
//
// const initiazlizeChart = function (xAxis, yAxis, div) {
//     let svg = d3.select(div).append('svg')
//         .attr('width', WIDTH)
//         .attr('height', HEIGHT);
//
//     svg.append('g')
//         .attr('transform', translate(MARGIN, HEIGHT - MARGIN))
//         .call(xAxis)
//         .classed('xAxis', true);
//
//     svg.append('g')
//         .attr('transform', translate(MARGIN, MARGIN))
//         .call(yAxis)
//         .classed('yAxis', true);
//
//     return svg;
// };

const loadChart = function () {
    let svg = d3.select('.container').append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT);

    let xScale = d3.scaleLinear()
        .domain([0, 1])
        .range([0, INNER_WIDTH]);

    let yScale = d3.scaleLinear()
        .domain([0, 1])
        .range([INNER_HEIGHT, 0]);

    let xAxis = d3.axisBottom(xScale);
    let yAxis = d3.axisLeft(yScale);

    // let svg = initializeChart(xAxis, yAxis, '#line-chart');

    // drawLineChart(svg,line,data)

    svg.append('g')
        .attr('transform', translate(MARGIN, HEIGHT - MARGIN))
        .call(xAxis);

    svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN))
        .call(yAxis);

    let g = svg.append('g')
        .attr('transform', translate(MARGIN,MARGIN));

    let line = d3.line()
        .x((d) => (xScale(d.x/10)))
        .y(d => (yScale(d.y/10)));

    let sine = d3.line()
        .x(d => (xScale(d.x/10)))
        .y(d => (yScale(Math.sin(d.x)/10 + 0.5)));

    g.append('path')
        .attr('d', line(data))
        .classed('line-path', true);

    g.append('path')
        .attr('d', sine(data))
        .classed('line-path', true);

};

window.onload = loadChart;