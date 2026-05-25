import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders BookingForm heading text", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
    />
  );

  // Test a visible static label from your form
  const dateLabel = screen.getByText(/choose date/i);
  expect(dateLabel).toBeInTheDocument();
});

test("renders time label", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
    />
  );

  const timeLabel = screen.getByText(/choose time/i);
  expect(timeLabel).toBeInTheDocument();
});

test("renders number of guests label", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
    />
  );

  const guestsLabel = screen.getByText(/number of guests/i);
  expect(guestsLabel).toBeInTheDocument();
});