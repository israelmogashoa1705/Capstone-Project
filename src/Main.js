import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";

// ✅ INITIAL TIMES (must use Date object)
export function initializeTimes() {
  return fetchAPI(new Date());
}

// ✅ REDUCER (FIXED: convert string → Date)
export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.date)); // 🔥 FIX IS HERE
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  // ✅ SUBMIT FUNCTION (used for final booking step)
  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  };

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