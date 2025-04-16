import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const ForceGraph = ({ nodes, links, onNodeClick }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous graph

    const width = 1200;
    const height = 800;

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#999");

    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 15)
      .attr("fill", "skyblue")
      .call(drag(simulation))
      .on("click", (event, d) => {
        onNodeClick(d, event.pageX, event.pageY); // <- Pass node and position to parent
      });

    const label = svg.append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text(d => d.label)
      .attr("font-size", 6)
      .attr("dy", 4)
      .attr("text-anchor", "middle");

    simulation.on("tick", () => {
      node.attr("cx", d => d.x).attr("cy", d => d.y);
      link
        .attr("x1", d => d.source.x).attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
      label
        .attr("x", d => d.x)
        .attr("y", d => d.y);
    });

    function drag(simulation) {
      return d3.drag()
        .on("start", event => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        })
        .on("drag", event => {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        })
        .on("end", event => {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
        });
    }

  }, [nodes, links, onNodeClick]);

  return <svg ref={svgRef} width={1200} height={800} />;
};

export default ForceGraph;
