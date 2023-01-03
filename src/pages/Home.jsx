import { Link } from "react-router-dom";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link>더보기</Link>
      <div className="product-section">
        <Product />
      </div>
    </div>
  );
};

export default Home;
