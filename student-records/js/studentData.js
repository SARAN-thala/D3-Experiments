const studentData = [
    {name: 'ramesh', subject: 'maths', score: 87},
    {name: 'suresh', subject: 'maths', score: 45},
    {name: 'pokemon', subject: 'english', score: 65},
    {name: 'mary', subject: 'kannada', score: 44},
    {name: 'riya', subject: 'science', score: 72},
    {name: 'katie', subject: 'social studies', score: 82},
    {name: 'katie', subject: 'maths', score: 98},
    {name: 'ramesh', subject: 'bengali', score: 25},
    {name: 'suresh', subject: 'science', score: 55},
    {name: 'riya', subject: 'tamil', score: 75},
    {name: 'pokemon', subject: 'sports', score: 95},
    {name: 'pokemon', subject: 'social studies', score: 32}
];

const subjects = ['maths', 'english', 'kannada', 'science', 'social studies', 'bengali', 'tamil', 'sports']
const colors = d3.scaleOrdinal(d3.schemeCategory10)
    .domain(subjects);

const studentChart = function () {

    let bar = d3.select('.container').selectAll('div')
        .data(studentData, d => ( d.name));

    bar.enter().append('div')
        .style('width', d => ( d.score * 5 + "px"))
        .style("background-color", d => (colors(d.subject)))
        .text(d =>(d.name + " " + d.score))
        .attr('class', 'student-chart');

    bar.exit().remove();
};

const updateData = val => (d3.selectAll('.student-chart')
        .sort((a, b) => (d3.ascending(a[val], b[val])))
);

const sortByName = () =>(updateData('name'));

const sortBySubject = () =>(updateData('subject'));

const sortByScore = () => (updateData('score'));

const legend = () =>(d3.select('.legend').selectAll('div')
        .data(subjects)
        .enter().append('div')
        .style('width', '70px')
        .style('background-color', d => ( colors(d)))
        .text(d =>(d))
        .classed('legends', true)
);

window.onload = () => (studentChart(), legend());