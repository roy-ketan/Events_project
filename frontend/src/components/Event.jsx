import React from "react";
import "../styles/Event.css"

function Event({ event, onDelete }) {
    const formattedDate = new Date(event.created_at).toLocaleDateString("en-US");
    const formattedTime = new Date(event.created_at).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
 

    return (
        <div className="event-container">
            <p className="event-title">{event.title}</p>
            <p className="event-content">{event.content}</p>
            <p className="event-date">{formattedDate}</p>
            <p className="event-time">Time: {formattedTime}</p>
            <button className="delete-button" onClick={() => onDelete(event.id)}>
                Delete
            </button>
        </div>
    );
}

export default Event
