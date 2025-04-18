import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const ForceGraph = ({ nodes, links, onNodeClick }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 1200;
    const height = 800;

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(120))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#ccc");

    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 20)
      .attr("fill", "#87cefa")
      .call(drag(simulation))
      .on("click", (event, d) => {
        event.stopPropagation();
        onNodeClick(d, event.pageX, event.pageY);
      });

    const label = svg.append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text(d => d.label)
      .attr("font-size", 10)
      .attr("dy", 4)
      .attr("text-anchor", "middle");

    const nodeGroup = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("class", "node-group")
      .call(drag(simulation))
      .on("click", (event, d) => {
        event.stopPropagation();
        onNodeClick(d, event.pageX, event.pageY);
      });

    // Add background circle
    nodeGroup.append("circle")
      .attr("r", d => 20 + d.label.length * 2) // dynamic radius
      .attr("fill", "#6EC6FF");

    // Add wrapped text
    nodeGroup.append("text")
      .text(d => d.label)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .style("font-size", "10px")
      .style("fill", "white")
      .style("pointer-events", "none")
      .each(function (d) {
        const words = d.label.split(" ");
        let line = '';
        const lines = [];
        words.forEach((word) => {
          if ((line + word).length > 15) {
            lines.push(line);
            line = word + ' ';
          } else {
            line += word + ' ';
          }
        });
        lines.push(line);

    const textEl = d3.select(this);
      textEl.text(null);
      lines.forEach((l, i) => {
        textEl.append("tspan")
          .text(l)
          .attr("x", 0)
          .attr("dy", i === 0 ? 0 : "1.2em");
      });
    });


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
