   // svg selector
  var svg = d3.select('.board').append('svg');
  // css margin
  var margin = {top: 20, right: 20, bottom: 20, left: 20};
  // returns margin object value
  var w = 500 - margin.left - margin.right,
      h = 400 - margin.top - margin.bottom;
  var enemies = [];

  var Unit = function (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  };

  var Enemy = function () {
    var ran1 = Math.floor(Math.random() * 100);
    var ran2 = Math.floor(Math.random() * 100);
    Unit.call(this, ran1, ran2, 20);
  };

  var enemyMaker = function(n) {
    while (n) {
      var enemy = new Enemy();
      enemies.push(enemy);
      n--;
    }    
  };

  enemyMaker(15);

  var Hero = function() {
    var r = 10;
    var x = w / 2 - r;
    var y = h / 2 - r;
    
    Unit.call(this, x, y, r);
  };
  
  // x scale size    
  var xScale = d3.scale.linear()
      .domain([0, 100])
      .range([0, w]);
  // y scale size    
  var yScale = d3.scale.linear()
      .domain([0, 100])
      .range([h, 0]);

  // select svg    
  svg.attr('width', w + margin.left + margin.right)
  .attr('height', h + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

  
  // selects the circles in the board, use data to append the circles with the attribute of cx, cy, and r.
  svg.selectAll('circle')
  .data(enemies)
  .enter()
  .append('circle')
  .attr('class', 'enemy')
  .attr('fill', 'black')
  .attr('cx', function (d) {
      return xScale(d.x);
  })
  .attr('cy', function (d) {
      return yScale(d.y);
  })
  .attr('r', function (d) {
      return d.r;
  });

  // Create custom tween (animation term) for each enemies created
  setInterval(function() {
      _.each(enemies, function (datum) {
          datum.x = Math.round(Math.random() * 100);
          datum.y = Math.round(Math.random() * 100);
      })

      svg.selectAll('circle')
          .transition()
          .duration(1000)
          .attr('cx', function (d) {
              return xScale(d.x);
          })
          .attr('cy', function (d) {
              return yScale(d.y);
          });
  }, 1000);















