const createShapes = function () {
    const svg = d3.select('div')
        .append('svg')
        .attr('width', 600)
        .attr('height', 100);

    const slope = svg.append('line')
        .attr('x1', 110)
        .attr('y1', 0)
        .attr('x2', 10)
        .attr('y2', 100);

    const circle = svg.append('circle')
        .attr('cx',210)
        .attr('cy',50)
        .attr('r',50);

    const square = svg.append('rect')
        .attr('x',310)
        .attr('y',0)
        .attr('rx',5)
        .attr('ry',5)
        .attr('width',100)
        .attr('height',100);

    const triangle = svg.append('polygon')
        .attr('points', "460,100,460,100,510,0,560,100")
};

window.onload = createShapes;