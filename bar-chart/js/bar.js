var data = [];

for (var i = 0; i < 10; i++) {
    data.push(Math.floor(Math.random(1,100) * 100))
}

var chart = function () {
    var bar = d3.select('.container').selectAll('div')

        .data(data, function (d) {return d;})

    var newBar = bar.enter().append('div');

    newBar.style('width', function (d) {return d * 10 + "px";})
        .style("background-color", function(d) {
            return d3.rgb(d,2*d,120+(2*d),0.85)
        })
        .text(function (d) {return d;})
        .attr('class', 'bar-chart')


    bar.exit().remove();
};

var getLastData = function () {
    setInterval(function () {
        data.shift();
        data.push(Math.floor(Math.random() * 100));
        chart();
    }, 1000)
};

window.onload = getLastData;