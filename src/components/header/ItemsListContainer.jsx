import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
        <li style={{ color: "whiteY"}}>
            <Link to="category/combustible"> 
                {props.itemUno} 
            </Link>
        </li>

        <li>
            <Link to="category/motor">
                {props.itemDos}
            </Link>
        </li>

        <li>
            <Link to="category/transmision">
                {props.itemTres}
            </Link>
        </li>

        <li>
            <Link to="category/otros">
                {props.itemCuatro}
            </Link>
        </li>
    </ul>
    )
}

export default ItemListContainer;