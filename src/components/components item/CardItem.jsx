import '../../styles/cardItem.css';
import ButtonAddCart from './ButtonAddCart';
import Description from './Description';
import Image from './Image';

const CardItem = (props) => {
  return (
    <div className="cardItem">
      <Image imagen={props.imagen} />
      <Description title={props.title} cantidad={props.cantidad} precio={props.precio} />

      <div className="buttons">
        <button id="detalles">
          <a href={`/item/${props.id}`}>Ver detalles</a>
        </button>
        <ButtonAddCart />
      </div>
    </div>
  );
};

export default CardItem;
