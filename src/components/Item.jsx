export default function Item(props) {
    return (
      <div className="Item">
        <button className="btn btn-sm btn-success done" onClick={()=>{
          props.deleteItem(props.index);
        }}>Done!</button>
  
        <h5 className="item-text">{props.content}</h5>
      </div>
    )
  }
  