// start slingin' some d3 here.


  // General game options
  var gameOptions = {
    height: 450,
    width: 700,
    nEnemies: 30,
    padding: 20
  };

  // Store the enemies in the storage array
  var enemies = [];

  // Psuedoclassical approach
  var Unit = function (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  };


  // Move unit for all the enemies
  // Unit.prototype.move = function() {
  //   var randY = Math.floor(0, Math.random() * gameOptions.height);
  //   var randX = Math.floor(0, Math.random() * gameOptions.width);

  // ;(setInterval(function() {
  //     this.x = randX;
  //     this.y = randY;
  //   }, 1000))();  
  // };

  var i = 3;
  while(i > 0) {
    var Enemy = new Unit(50, 50, 40);
    enemies.push(Enemy);
    i--;
  }

// Scores
  // Board config
    // find container
  var $board = d3.select('.board');
    
  $board
  .style('background-color', 'black')
  .style('height', gameOptions.height + 'px')
  .style('width', gameOptions.width + 'px')
  .style('padding', gameOptions.padding + 'px');    
  // append SVG scalable vector graphic
    // add attr

  // Select the board, 
  $board
  .selectAll('.board')
  .data(enemies)
  .enter()
  .append('svg')
  .attr('class', 'enemy')
  .append('circle')
  .attr('cx', function(d){
    return d.x + 'px';
  })
  .attr('cy', function(d){
    return d.y + 'px';
  })
  .attr('cr', function (d) {
    return d.r + 'px';
  });
  

  // d3.selectAll('.enemy')
  //   .transition()
  //   .duration(500)
  //   .attr('x', function (d) { // return object and return property x
  //     return d.x;
  //   })
  //   .attr('y', function (d) { // return the object and return property x;
  //     return d.y;
  //   })


    
  function increment () {
    var i = 0; 
    return function () {
      i++;
      d3.select('.current span')
        .text(i);
      d3.select('.highscore span')
        .text(i);
    };
  };

  setInterval(increment(), 100);

// Update score
  // html span

// Player
  // set up drag, see behaviours https://github.com/mbostock/d3/wiki/Behaviors

  // setup a player class
  // add teardrop SVG as player
  // add attr to player
    // what does r = 5 mean?
  // use default parameters as contructor for class  
  // apply boundaries for player
  // render the player
  // getters and setters to move player within bounds
  // apply transform
  // 


