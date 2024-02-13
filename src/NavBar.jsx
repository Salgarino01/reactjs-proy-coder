import Brand from "./components/header/Brand";
import ItemListContainer from "./components/header/ItemsListContainer";
import CartWidget from "./components/header/CartWidget";
const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>

      <nav className="containerItemList">
        <ItemListContainer
          itemUno="Combustible"
          itemDos="Motor"
          itemTres="Transmision"
          itemCuatro="Otros"
        />
      </nav>

      <div className="containerCart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
