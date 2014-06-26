var mm  = (function () {
    var my = {},
        container,
        //circle variables
        allCircles = [],
        trajectory = {
            center: {
                x: 100,
                y: 130
            },
            radius: 90,
            angle: []
        },
        angle = 0.05,
        currentCircleElement = 0,
        //rect variables
        allRects = [],
        positionRect = [],
        speedRect = 5,
        directionRect = [],
        currentRectElement = 0,

        startedMovingAutomatically = false;

    var createMovingElement = function createMovingElement(option) {

        var element = document.createElement('div');

        element.style.backgroundColor = getRandomColor();
        element.style.borderColor = getRandomColor();

        container = document.getElementById('mmContainer');
        container.appendChild(element);

        if (option === 'circle') {
            element.classList.add('circle');
            allCircles.push(element);
        }
        else {
            element.classList.add('rect');
            allRects.push(element);
            positionRect.push({
                x: 260,
                y: 10
            });
            directionRect.push('down');
        }

        if (!startedMovingAutomatically) {
            startedMovingAutomatically = true;

            moveCircles();
            moveRect();
        }

    };

    var moveCircles = function moveCircles() {
        trajectory.angle[currentCircleElement] = 0; //starting angle of current element

        for (currentCircleElement = 0; currentCircleElement < allCircles.length; currentCircleElement += 1) {

            var currentY = trajectory.center.y + trajectory.radius * Math.sin(trajectory.angle[currentCircleElement]),
                currentX = trajectory.center.x + trajectory.radius * Math.cos(trajectory.angle[currentCircleElement]);

            allCircles[currentCircleElement].style.top = currentY + 'px';
            allCircles[currentCircleElement].style.left = currentX + 'px';

            trajectory.angle[currentCircleElement] += angle;
        }
        setTimeout(moveCircles, 60);
    };

    var moveRect = function moveRect() {

        for (currentRectElement = 0; currentRectElement < allRects.length; currentRectElement += 1) {

            //MOVE ACORDING TO DIRECTIONS
            if (directionRect[currentRectElement] === 'down') {
                positionRect[currentRectElement].y += speedRect;
            }
            else if (directionRect[currentRectElement] === 'right') {
                positionRect[currentRectElement].x += speedRect;
            }
            else if (directionRect[currentRectElement] === 'up') {
                positionRect[currentRectElement].y -= speedRect;
            }
            else if (directionRect[currentRectElement] === 'left') {
                positionRect[currentRectElement].x -= speedRect;
            }

            //CHANGE DIRECTIONS
			// to do optimize directions or if outside ot boundies move to static positions
            if (directionRect[currentRectElement] == 'down' && positionRect[currentRectElement].y > 240) {
                directionRect[currentRectElement] = 'right';
            }
            else if (directionRect[currentRectElement] == 'right' && positionRect[currentRectElement].x > 540) {
                directionRect[currentRectElement] = 'up'
            }
            else if (directionRect[currentRectElement] == 'up' && positionRect[currentRectElement].y < 20 ) {
                directionRect[currentRectElement] = 'left'
            }
            else if (directionRect[currentRectElement] == 'left' && positionRect[currentRectElement].x < 250) {
                directionRect[currentRectElement] = 'down'
            }

            allRects[currentRectElement].style.top = positionRect[currentRectElement].y + 'px';
            allRects[currentRectElement].style.left = positionRect[currentRectElement].x + 'px';
        }

        setTimeout(moveRect, 60);
    };

    var moveCirclesFaster = function moveCirclesFaster() {
        angle += 0.05;
    };

    var moveRectsFaster = function moveRectsFaster(){
        speedRect += 2;
    };

    function getRandomColor() {
        var red = getRandomNumber(),
            green = getRandomNumber(),
            blue = getRandomNumber();

        return 'rgb('+ red +', '+ green +', '+ blue +')';
    }

    function getRandomNumber() {
        return Math.random()*255 | 0;
    }

    my.createMovingElement = createMovingElement;
    my.move = moveCircles;
    my.move = moveRect;
    my.moveCirclesFaster = moveCirclesFaster;
    my.moveRectsFaster = moveRectsFaster;

    return my;
})();