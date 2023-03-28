import './item.css';

// const Item = (props) => {
//   return <div className={`item ${props.visible}`}>Item</div>
// }

const Item = ({isSelected, children, onSelectedChange}) => {
  const clsIsSelected = isSelected ? "item-selected" : "";
  return <div 
          className={`item ${clsIsSelected}`}
          onClick = {() => onSelectedChange(!isSelected)}
          >
            {children}
          </div>
}

export default Item; 