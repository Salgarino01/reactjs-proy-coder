import brand from "../../img/d&slogo.png";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <Link to="/">
      <img src={brand} alt="Tienda D&S" title="Tienda D&S" width="60px"></img>
    </Link>
  );
};

export default Brand;
