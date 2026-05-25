import { useReducer } from "react";
import BookingForm from "./BookingForm";

/* global fetchAPI */

const safeFetchAPI = (date) => {
  return window.fetchAPI ? window.fetchAPI(date) : [];
};

export function initializeTimes() {
  const today = new Date();
  return safeFetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return safeFetchAPI(action.date);
  }
  return state;
}

function Main() {
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
      />
    </main>
  );
}

export default Main;