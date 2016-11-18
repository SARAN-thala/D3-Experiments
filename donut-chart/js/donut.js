const DATA = [1, 1, 2, 2, 1, 2, 1];

let translate = (x, y) => (`translate (${x}, ${y})`);

const WIDTH = 620;
const HEIGHT = 620;
const MARGIN = 100;
const INNER_WIDTH = WIDTH - (3 * MARGIN);
const INNER_HEIGHT = HEIGHT - (3 * MARGIN);
const RADIUS = Math.min(WIDTH, HEIGHT) / 2;

const colors = d3.scaleOrdinal(d3.schemeCategory20);

const loadPieChart = function () {
    let svg = d3.select('.container').append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT);

    let g = svg.append('g')
        .attr('transform', translate(INNER_WIDTH, INNER_HEIGHT));

    let arc = d3.arc()
        .outerRadius(RADIUS - 100)
        .innerRadius(RADIUS - 200);

    let donut = d3.pie()
        .sort(null)
        .value(d => (d))

    g.selectAll('path')
        .data(donut(DATA))
        .enter().append('path')
        .attr('d', arc)
        .style('fill', (d,i) => (colors(i)))
};

window.onload = loadPieChart;