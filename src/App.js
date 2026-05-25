import './App.css';
import { Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Footer from './Footer';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;