import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = (props) => {
  const { randomData, width, height, padding } = props;
  const ref = useRef(null);

  function colorGradient(v) {
    return "rgb(0, " + v * 5 + ", 0";
  }

  const group = d3.select(ref.current);
  group.append("g");

  //insert & remove elements using D3
  useEffect(() => {
    if (randomData.length > 0 && ref.current) {
      // const group = d3.select(ref.current);

      const updateRect = group.selectAll("rect").data(randomData);

      updateRect
        .enter() // create new dom elements for added data items
        .append("rect")
        .merge(updateRect)
        .attr("x", (d, i) => i * (width / randomData.length))
        .attr("y", (d) => height - d * 5)
        .attr("width", width / randomData.length - padding)
        .attr("height", (d) => d * 5)
        .attr("fill", (d) => colorGradient(d))
        .transition()
        .duration(300);

      const updateText = group.selectAll("text").data(randomData);

      updateText
        .enter()
        .append("text")
        .merge(updateText)
        .text((d) => d)
        .attr("text-anchor", "middle")
        .attr(
          "x",
          (d, i) =>
            i * (width / randomData.length) +
            (width / randomData.length - padding) / 2
        )
        .attr("y", (d) => height - d * 5 + 12)
        .style("font-family", "sans-serif")
        .style("font-size", 12)
        .style("fill", "#fff");

      updateRect.exit().remove();
      updateText.exit().remove();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomData, height, padding, width]);

  return (
    <svg width={width} height={height}>
      <g ref={ref} />
    </svg>
  );
};

export default BarChart;
