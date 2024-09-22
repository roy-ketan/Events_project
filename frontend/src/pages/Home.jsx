import { useState, useEffect } from "react";
import api from "../api";
import Event from "../components/Event"
import "../styles/Home.css"




function Home() {
    const [events, setEvents] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getEvents();
    }, []);

    const getEvents = () => {
        api
            .get("/api/events/")
            .then((res) => res.data)
            .then((data) => {
                setEvents(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteEvent = (id) => {
        api
            .delete(`/api/events/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Event deleted!");
                else alert("Failed to delete Event.");
                getEvents();
            })
            .catch((error) => alert(error));
    };

    const createEvent = (e) => {
        e.preventDefault();
        api
            .post("/api/events/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Event created!");
                else alert("Failed to make Event.");
                getEvents();
            })
            .catch((err) => alert(err));
    };

   
    return (
        <div>
            <div>
               
               
              <div className="events-section">
                <h2 >Events</h2>
                <div className="events-container">
                    {events.map((event) => (
                        <div className="event-card" key={event.id}>
                            <Event event={event} onDelete={deleteEvent} />
                        </div>
                    ))}
                </div>
            </div>
               
            </div>
            <h2>Create Your Event</h2>
            <form onSubmit={createEvent}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
               
            </form>
        </div>
    );
}

export default Home;
