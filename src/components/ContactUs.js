import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function ContactUs() {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.name, note.email, note.phone, note.message);
    setNote({ name: "", email: "", phone: "", message: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-3">
        <h2>Get in the Touch!!</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              value={note.name}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={note.email}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={note.phone}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>

          <div class="mb-3">
            <label htmlFor="tag" className="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              placeholder="Leave your message here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              className="form-control"
              id="message"
              name="message"
              value={note.message}
              onChange={onChange}
              minLength={5}
              required
            ></textarea>
          </div>

          <button
            disabled={note.message.length < 5 || note.email.length < 5}
            type="submit"
            className="btn btn-dark"
            onClick={handleClick}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
