import Item from './Item';

export default function List(props) {
  return (
    <div className="List row">
    
    

    {props.list.map((item, index)=>{
        return (<Item key={index} index={index} content={item} deleteItem={props.deleteItem}/>);
    })}

  

    </div>
  )
}
