import React from "react";
import "./Lessons.css";

function Lessons() {
  return (
    <section className="lessons-section">
      <h2 className="lessons-title">Our Lessons</h2>
      <div className="lessons-grid">
        {/* Card 1 */}
        <div className="lesson-card">
          <h3>___________</h3>
          <p>___________</p>
        </div>

        {/* Card 2 */}
        <div className="lesson-card">
          <h3>___________</h3>
          <p>___________</p>
        </div>

        {/* Card 3 */}
        <div className="lesson-card">
          <h3>___________</h3>
          <p>___________</p>
        </div>
      </div>
    </section>
  );
}

export default Lessons;
