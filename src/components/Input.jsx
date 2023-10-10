export default function Input(props) {
    return (
      <div className="Input">
        <input type="text" placeholder="Enter Task Here..." className="input-field" />
        <button onClick={props.addItem} className="btn btn-primary btn-sm">Add</button>
      </div>
    );
  }
  