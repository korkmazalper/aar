import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Academics at Risk e.V.</h1>
          <p className="hero-subtitle">
            Supporting scholars whose fundamental rights and freedoms have been violated
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/contact" className="btn btn-secondary">Get Involved</Link>
          </div>
        </div>
      </section>
          <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <h3>Working Groups</h3>
              <p>Join collaborative research groups across various disciplines</p>
            </div>
            <div className="feature-card">
              <h3>Funds & Scholarships</h3>
              <p>Financial support for academics in need</p>
            </div>
            <div className="feature-card">
              <h3>Conferences</h3>
              <p>Participate in academic events and networking opportunities</p>
            </div>
            <div className="feature-card">
              <h3>Reports</h3>
              <p>Research and documentation on academic freedom</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
