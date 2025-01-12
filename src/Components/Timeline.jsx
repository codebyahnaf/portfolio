import React from "react";
import timeline from "../../data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div>
      {timeline.map((item) => (
        <TimelineItem
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
}
export default Timeline;
