import Image from "./Image";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart";
import ImgPrueba from "../../img/product/antihumo.png"


const CardItem = () => {
    return(
    
    <div className="cardItem">
        <Image imagen={ImgPrueba}
                />
        <Description 
        title="Aditivo anti-humo"
        cantidad ={5}
        precio={25000}
        />

        <div className="buttons">
            <ButtonDetalles/>
            <ButtonAddCart/>
            
        </div>

    </div>
        )
    }
    
    export default CardItem;