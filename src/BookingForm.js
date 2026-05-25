import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion
    };

    // ✅ SAFE GUARD (prevents crash)
    if (typeof submitForm === "function") {
      submitForm(formData);
    } else {
      console.error("submitForm is missing!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px" }}>

      <label>Choose date</label>
      <input type="date" value={date} onChange={handleDateChange} />

      <label>Choose time</label>
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label>Number of guests</label>
      <input
        type="number"
        value={guests}
        min="1"
        max="10"
        onChange={(e) => setGuests(e.target.value)}
      />

      <label>Occasion</label>
      <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Make Reservation</button>

    </form>
  );
}

export default BookingForm;