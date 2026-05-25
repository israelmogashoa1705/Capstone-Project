import Main from "./Main";

function BookingPage() {

  // temporary submit function (prevents crash)
  const submitForm = (formData) => {
    console.log("Form submitted:", formData);
    return true;
  };

  return (
    <div>
      <Main submitForm={submitForm} />
    </div>
  );
}

export default BookingPage;