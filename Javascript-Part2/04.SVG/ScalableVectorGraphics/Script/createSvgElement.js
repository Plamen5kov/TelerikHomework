window.onload = function () {

    var svgLink = 'http://www.w3.org/2000/svg';
    var rect = document.createElementNS(svgLink, 'rect');

    //var x = 40,
    //    y = 40;
    //    width = 50,
    //    height = 50,
    //    stroke = 'green',
    //    fill = 'lightblue'

    //rect.setAttribute('x', x);
    //rect.setAttribute('y', y);
    //rect.setAttribute('width', width);
    //rect.setAttribute('height', height);
    //rect.setAttribute('stroke', stroke);
    //rect.setAttribute('fill', fill);

    var svg = document.getElementById('svg-container');
    svg.appendChild(rect);
}