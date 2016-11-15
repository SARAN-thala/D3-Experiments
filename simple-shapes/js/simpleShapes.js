const createShapes = function () {
    const svg = d3.select('div')
        .append('svg')
        .attr('width', 600)
        .attr('height', 102);

    svg.append('line')
        .attr('x1', 110)
        .attr('y1', 1)
        .attr('x2', 10)
        .attr('y2', 101)
        .classed('slope',true);

    svg.append('circle')
        .attr('cx',210)
        .attr('cy',51)
        .attr('r',50);

    svg.append('rect')
        .attr('x',310)
        .attr('y',1)
        .attr('rx',5)
        .attr('ry',5)
        .attr('width',100)
        .attr('height',100)
        .classed('square',true);

    svg.append('polygon')
        .attr('points', "460,100,460,100,510,1,560,101")
        .classed('triangle',true);
};

window.onload = createShapes;