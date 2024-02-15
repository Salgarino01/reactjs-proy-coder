import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import ContainerCardItems from './components/components item/ContainerCardItems';
import DetailsItem from './components/components item/DetailsItem';
import './style.css';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ContainerCardItems />} />
        <Route path="/item/:idItem" element={<DetailsItem />} />
        <Route path="/category/:idCategory" element={<ContainerCardItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
