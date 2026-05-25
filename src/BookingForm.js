import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // ✅ NEW: error state
  const [error, setError] = useState("");

  // DATE CHANGE HANDLER
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate
    });
  };

  // SUBMIT HANDLER WITH VALIDATION
  const handleSubmit = (e) => {
    e.preventDefault();

    // ❌ VALIDATION 1: empty date
    if (!date) {
      setError("Please select a date");
      return;
    }

    // ❌ VALIDATION 2: past date
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setError("You cannot select a past date");
      return;
    }

    // ✅ clear error if everything is valid
    setError("");

    // form data object
    const formData = {
      date,
      time,
      guests,
      occasion
    };

    // send to Main.js
    submitForm(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        maxWidth: "250px",
        gap: "15px"
      }}
    >

      {/* DATE */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      {/* TIME */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      {/* GUESTS */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      {/* OCCASION */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* ERROR MESSAGE */}
      {error && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          {error}
        </p>
      )}

      {/* SUBMIT */}
      <input type="submit" value="Make Your reservation" />

    </form>
  );
}

export default BookingForm;