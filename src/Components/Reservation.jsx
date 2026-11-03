import { useState } from "react";

const TIMES = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

function formatTime(value) {
  const [h, m] = value.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, "0")} ${suffix}`;
}

function formatDate(value) {
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function todayISO() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

const EMPTY = { name: "", contact: "", date: "", time: "19:00", guests: "2" };

export default function Reservation() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [booking, setBooking] = useState(null);

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Enter the name for the booking.";
    if (!values.contact.trim()) {
      next.contact = "Enter a phone number or email so we can confirm.";
    }
    if (!values.date) {
      next.date = "Choose a date.";
    } else if (values.date < todayISO()) {
      next.date = "Choose today or a later date.";
    } else if (new Date(`${values.date}T12:00:00`).getDay() === 1) {
      next.date = "We're closed on Mondays. Choose another day.";
    }
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setBooking({ ...values });
    }
  }

  function reset() {
    setValues(EMPTY);
    setErrors({});
    setBooking(null);
  }

  return (
    <section className="section reserve" id="reserve" aria-labelledby="reserve-title">
      <div className="section-inner reserve-grid">
        <div className="reserve-intro">
          <h2 id="reserve-title">Book a table</h2>
          <p>
            Tables hold for 15 minutes past your booking. For groups of more than 10, call us and
            we'll plan the fire around you.
          </p>
        </div>

        {booking ? (
          <div className="confirmation" role="status">
            <h3>Request received</h3>
            <p>
              Table for {booking.guests} {booking.guests === "1" ? "person" : "people"} on{" "}
              {formatDate(booking.date)} at {formatTime(booking.time)}, under the name{" "}
              {booking.name}.
            </p>
            <p>We'll confirm by message to {booking.contact} within a few hours.</p>
            <button className="btn btn-ghost" type="button" onClick={reset}>
              Make another booking
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p className="error" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="contact">Phone or email</label>
              <input
                id="contact"
                type="text"
                autoComplete="email"
                value={values.contact}
                onChange={(e) => update("contact", e.target.value)}
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={errors.contact ? "contact-error" : undefined}
              />
              {errors.contact && (
                <p className="error" id="contact-error">
                  {errors.contact}
                </p>
              )}
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="date">Date</label>
                <input
                  id="date"
                  type="date"
                  min={todayISO()}
                  value={values.date}
                  onChange={(e) => update("date", e.target.value)}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? "date-error" : undefined}
                />
                {errors.date && (
                  <p className="error" id="date-error">
                    {errors.date}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="time">Time</label>
                <select id="time" value={values.time} onChange={(e) => update("time", e.target.value)}>
                  {TIMES.map((t) => (
                    <option key={t} value={t}>
                      {formatTime(t)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="guests">Guests</label>
                <select
                  id="guests"
                  value={values.guests}
                  onChange={(e) => update("guests", e.target.value)}
                >
                  {Array.from({ length: 10 }, (_, i) => String(i + 1)).map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button className="btn btn-wide" type="submit">
              Request this table
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
