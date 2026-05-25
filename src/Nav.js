import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={styles.nav}>
      <h2>Little Lemon</h2>

      <ul style={styles.ul}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Book</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#333",
    color: "white"
  },
  ul: {
    display: "flex",
    gap: "15px",
    listStyle: "none"
  }
};

export default Nav;