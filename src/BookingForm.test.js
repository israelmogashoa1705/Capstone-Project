import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders BookingForm heading", () => {
  const mockDispatch = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={mockDispatch}
      submitForm={jest.fn()}
    />
  );

  const heading = screen.getByText(/Choose date/i);
  expect(heading).toBeInTheDocument();
});