const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const createTable = () => {

    let box = d3.select('body').append('div');

    let scale = d3.scaleLinear()
        .domain([0, 10])
        .range(['italic bold 12px/30px Georgia, serif', 'italic bold 120px/300px Georgia, serif']);

    box.selectAll('div')
        .data(data)
        .enter()
        .append('div')
        .style('font', d => (scale(d)))
        .classed('box', true)
        .text(d => d)
};

window.onload = createTable;