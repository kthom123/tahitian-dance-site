import React from "react";
import "./Classes.css";

function Classes() {
  return (
    <section className="classes-section">
      <h2 className="classes-title">クラス紹介</h2>
      <div className="classes-grid">
        {/* Card 1 */}
        <div className="class-card">
          <h3>___________</h3>
          <p>___________</p>
        </div>

        {/* Card 2 */}
        <div className="class-card">
          <h3>___________</h3>
          <p>___________</p>
        </div>

        {/* Card 3 */}
        <div className="class-card">
          <h3>___________</h3>
          <p>___________</p>
        </div>
      </div>
    </section>
  );
}

export default Classes;
