var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables //
        var circle;		// variable to hold a single circle when creating circles / iterating
        var circles = [];	// variable to store all circles in one Array

        // TODO 2 : Create a function that draws a circle  //
        function drawCircle() {
                circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
                physikz.addRandomVelocity(circle, canvas);
                view.addChild(circle);
                circles.push(circle);
            }

        // TODO 3 : Call the drawCircle function 5 times //
            drawCircle();
            drawCircle();
            drawCircle();
            drawCircle();
            drawCircle();
            var i = 0;
            for (i = 0; i < 100; i++){
            drawCircle();
        }
        // TODO 7 : Create a Loop to call drawCircle 100 times
        var circle = 0; 
        while (circle < 10) {
            // do something
            circle++;
            }

        for (var circle = 0; circle < 10; circle++) {
        // do something
        }
    
        view.addChild(fps);
        app.addUpdateable(fps);
    
        game.checkCirclePosition = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////
            
            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            } 
            // TODO 5a) if the circle has gone past of the LEFT side of the screen then place it on the RIGHT
            else if ( circle.x < canvas.width ) {
                circle.x = 200;
            } 

            // TODO 5b) if the circle has gone past of the TOP side of the screen then place it on the BOTTOM
            if ( circle.y > canvas.length) {
                circle.y = 200;
            }
            // TODO 5c) if the circle has gone past of the BOTTOM side of the screen then place it OFF-SCREEN TOP
            else if ( circle.y < canvas.length) {
                circle.y = 0;
            }
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        }
    
        function update() {
            // TODO 4 : Update the circle's position //

            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            // TODO 5 : Call game.checkCirclePosition on your circles.
            game.checkCirclePosition(circle);

            // TODO 8 : Iterate over the array
          

        }
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
