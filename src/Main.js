import { useReducer } from "react";
import BookingForm from "./BookingForm";

function fetchAPI(date) {
  let result = [];

  for (let i = 17; i <= 23; i++) {
    if (Math.random() < 0.5) result.push(i + ":00");
    if (Math.random() < 0.5) result.push(i + ":30");
  }

  return result;
}

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.date));
  }
  return state;
}

function Main({ submitForm }) {

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main>
      <h1>Book a Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Main;