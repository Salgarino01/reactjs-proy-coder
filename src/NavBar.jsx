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
          itemUno="combustible"
          itemDos="motor"
          itemTres="transmision"
          itemCuatro="otros"
        />
      </nav>

      <div className="containerCart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
