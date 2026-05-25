function Header() {
  return (
    <header className="hero">

      <div className="hero-text">

        <h1>Little Lemon</h1>

        <h2>Chicago</h2>

        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>

        <button>Reserve a table</button>

      </div>

      <img
        className="hero-image"
        src="https://images.unsplash.com/photo-1544025162-d76694265947"
        alt="Restaurant food"
      />

    </header>
  );
}

export default Header;