import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <ItemListContainer greeting="Bienvenidos a nuestra pagina" />

        <h1>D&S Spply</h1>

        <img
          src="https://stpimagecdn.imgix.net/wp-content/uploads/sites/3/product-images/E302007200_01.png?auto=format%2Ccompress&fit=crop&w=600&max-h=600"
          alt="aditivo"
        />
        <h2>Anti-humo</h2>

        <p>Aditivo para reducir emisiones de humo</p>

        <p>$50.000</p>
      </div>
    </>
  );
}
export default App;
