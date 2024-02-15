import { useState } from 'react';

const AddCantCart = (props) => {
  const [cant, setCant] = useState(1);

  const handleQuitar = () => {
    if (cant > 1) {
      setCant(cant - 1);
    }
  };

  const handleAumentar = () => {
    if (cant < props.cant) {
      setCant(cant + 1);
    }
  };

  return (
    <div className="addCantCart">
      <span>Quiero:</span>
      <div>
        <button
          id="quitar"
          onClick={() => {
            handleQuitar();
          }}
        >
          -
        </button>
        <span className="cantTxt"> {cant} unidades</span>
        <button
          id="aumentar"
          onClick={() => {
            handleAumentar();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AddCantCart;
