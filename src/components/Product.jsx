import { Link } from "react-router-dom";
import "../css/product.css";
const Product = () => {
  const productImages = [
    { name: "반팔티", image: "/img/옷1.png" },
    { name: "긴팔티", image: "/img/옷2.png" },
    { name: "프린팅티", image: "/img/옷3.png" },
  ];

  return (
    <div className="product-container">
      <Link>더보기</Link>
      <div className="product-form">
        {productImages.map((product) => (
          <div className="product-card">
            <img
              src={product.image}
              alt="product-img"
              className="product-img"
            />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
