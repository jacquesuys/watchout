// start slingin' some d3 here.


// Params
var gameOptions = {
  height: 450,
  width: 700,
  nEnemies: 30,
  padding: 20
};

var enemies = [1, 2, 3];

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

    $board
    .selectAll('.board')
    .data(enemies)
    .enter()
    .append('svg')
    .attr('class', 'enemies');

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


