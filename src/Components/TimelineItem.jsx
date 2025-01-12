import React from "react";

function TimelineItem({ year, title, duration, details }) {
  return (
    <div>
      {/* <h1 className="timelinetitle">TIMELINE{">>>"}</h1>  */}
      <div className="card">
        <h3 className="year">{year} </h3>
        <h4 className="jobtitle">{title} </h4>
        <h4 className="jobduration">{duration} </h4>
        <p className="jobdetail">{details} </p>
      </div>
    </div>
  );
}
export default TimelineItem;
