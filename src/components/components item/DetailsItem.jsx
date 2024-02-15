import Image from './Image';
import Description from './Description';
import '../../styles/detailsItem.css';
import fetchSimultion from '../../utils/fetchSimulation';
import productos from '../../utils/Products';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ButtonDetalles from './Buttondetalles';
import AddCantCart from './AddCantCart';

const DetailsItem = () => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    setDatos([]);

    fetchSimultion(
      productos.filter((flt) => flt.id == idItem),
      2000
    )
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="detailsItem">
      {datos.map((items) => (
        <>
          <div className="containerLeft">
            <img src={items.imageProduct.firtsImage} alt="" />
          </div>

          <div className="containerRigth">
            <Description title={items.title} parrafo={items.description} cantidad={items.stock} precio={items.price} />

            <div className="butons">
              <AddCantCart cant={items.stock} />
              <button id="detalles">Agregar al carrito</button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default DetailsItem;
