import React from "react";
import "./Events.css";

function Events() {
  const events = [
    {
      title: "配信",
      date: "",
      description: ""
    }
  ];

  return (
    <section id="events" className="events-section">
      <h2 className="events-title">イベント出演情報</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3 className="event-name">{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
