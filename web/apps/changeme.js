'use strict';

function ChangeMeCtrl($s, $http) {

   d3.select("svg").selectAll("circle")
      .data([5,10,15,20,25,30])
      .enter()
      .append("circle")
      .attr("cx", function(d,i) { return (i*20)+25;})
      .attr("cy", 50)
      .attr("r", 10)
      .attr("fill", function(d,i) { return "#"+(0x100000+ i*100).toString(16);});

} ChangeMeCtrl.$inject = ['$scope', '$http'];




