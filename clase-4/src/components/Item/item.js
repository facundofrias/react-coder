import './item.css';

// const Item = (props) => {
//   return <div className={`item ${props.visible}`}>Item</div>
// }

const Item = ({seleccionado, nombre}) => {
  const classSeleccionado = seleccionado ? " item-selected" : "";
  return <div className={`item${classSeleccionado}`}>{nombre}</div>
}

export default Item;