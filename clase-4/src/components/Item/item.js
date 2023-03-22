import './item.css';

// const Item = (props) => {
//   return <div className={`item ${props.visible}`}>Item</div>
// }

const Item = ({isSelected, name, onSelectedChange}) => {
  const clsIsSelected = isSelected ? " item-selected" : "";
  return <div 
          className={`item${clsIsSelected}`}
          onClick = {() => onSelectedChange(!isSelected)}
          >
            {name}
          </div>
}

export default Item;