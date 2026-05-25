import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>

      {/* HERO SECTION */}
      <section style={styles.hero}>

        <div style={styles.heroText}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            Fresh Mediterranean cuisine made with love.
            Book your table and enjoy a modern dining experience.
          </p>

          <Link to="/booking" style={styles.button}>
            Book a Table
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1541542684-4a3b3c2c3a5f"
          alt="Food"
          style={styles.heroImage}
        />
      </section>

      {/* FEATURED SECTION */}
      <section style={styles.section}>
        <h2>Our Specials</h2>

        <div style={styles.cardContainer}>

          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              alt="Greek Salad"
              style={styles.cardImg}
            />
            <h3>Greek Salad</h3>
            <p>Fresh lettuce, olives, feta cheese.</p>
          </div>

          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Bruschetta"
              style={styles.cardImg}
            />
            <h3>Bruschetta</h3>
            <p>Grilled bread with garlic and tomatoes.</p>
          </div>

          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb"
              alt="Lemon Dessert"
              style={styles.cardImg}
            />
            <h3>Lemon Dessert</h3>
            <p>Homemade traditional dessert.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

const styles = {
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#495E57",
    color: "white",
    flexWrap: "wrap"
  },
  heroText: {
    maxWidth: "400px"
  },
  heroImage: {
    width: "300px",
    borderRadius: "10px"
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#F4CE14",
    color: "black",
    textDecoration: "none",
    borderRadius: "20px",
    fontWeight: "bold"
  },
  section: {
    padding: "30px"
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  },
  card: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  cardImg: {
    width: "100%",
    borderRadius: "10px"
  }
};

export default Homepage;