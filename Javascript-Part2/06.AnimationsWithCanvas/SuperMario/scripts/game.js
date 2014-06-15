var paper = Raphael(10, 10, 800, 400);
var background = paper.image('images/SM-background.png', 0, 0, 800, 400);

var stage = new Kinetic.Stage({
    container: 'canvas-container',
    width: 800,
    height: 400
}),
    layer = new Kinetic.Layer(),
    os = 7;

var imageObj = new Image();
imageObj.onload = function () {
    var mario = new Kinetic.Sprite({
        x: 200,
        y: 100,
        image: imageObj,
        animation: 'idle',
        animations: {
            idle: [
              // x, y, width, height (1 frames)
              178, 20, 20, 40,
              7, 37, 20, 40,
               0 + 4, 0, 20, 40,
            ],
            walkLeft: [
              // x, y, width, height (8 frames)
              7,  37, 20, 40,
              27, 37, 20, 40,
              47, 37, 20, 40,
              67, 37, 20, 40,
              87, 37, 20, 40,
              107, 37, 20, 40,
              127, 37, 20, 40,
              147, 37, 20, 40,
            ],
            walkRight: [
                // x, y, width, height (8 frames)
               3, 0, 20 -3 , 40,
               23, 0, 25 -3 , 40,
               43, 0, 25 - 3, 40,
               63, 0, 25 - 3, 40,
               83, 0, 25 - 3, 40,
               103, 0, 25 - 3, 40,
               123, 0, 25 - 3, 40,
               145, 0, 25 - 3, 40,
            ],
        },
        frameRate: 7,
    });

    layer.add(mario);
    stage.add(layer);
    mario.start();

    var frameCount = 0;

    mario.on('frameIndexChange', function (evt) {
        if (mario.animation() === 'walkLeft' && ++frameCount < 8) {
            mario.setX(mario.attrs.x -= 6);
            if (mario.getX() < 0) {
                mario.setX(stage.getWidth());
            }
        }
        if (mario.animation() === 'walkLeft' && ++frameCount > 8) {
            frameCount = 0;
        }
        if (mario.animation() === 'walkRight' && ++frameCount < 8) {
            mario.setX(mario.attrs.x += 6);
            if (mario.getX() > stage.getWidth()) {
                mario.setX(0);
            }
        }
        if (mario.animation() === 'walkRight' && ++frameCount > 8) {
            frameCount = 0;
        }
    });

    //document.addEventListener('keyup', function (e) {

    //    if (e.keyCode === 39) {
    //        mario.animation('idle');
    //    }
    //    if (e.keyCode === 37) {
    //        mario.animation('idle');
    //    }
    //});

    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 39) {
            mario.animation('walkRight');
        }
        if (e.keyCode === 37) {
            mario.animation('walkLeft');
        }
    });
};
imageObj.src = 'images/Mario-walking-sprite.png';

