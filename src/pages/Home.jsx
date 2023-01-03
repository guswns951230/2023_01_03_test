import Product from "../components/Product";

import "../css/home.css";

const Home = () => {
  return (
    <div>
      <img
        src="/img/homepageImg.jpg"
        alt="homepage-img"
        className="homepage-img"
      />
      <div className="product-section">
        <Product />
      </div>
    </div>
  );
};

export default Home;
