import React from "react";
import "./Events.css";

function Events() {
  const events = [
    {
      title: "サマーショーケース",
      date: "2025年8月12日",
      description: "詳細をお楽しみに"
    },
    {
      title: "文化祭",
      date: "2025年9月10日",
      description: "詳細をお楽しみに"
    },
    // Add more events here
  ];

  return (
    <section className="events-section" id="events">
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
