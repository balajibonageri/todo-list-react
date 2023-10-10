import { useState } from "react";
import "./App.css";

import Input from "./components/Input";
import Navbar from "./components/Navbar";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);

  function addItem() {
    let text = document.getElementsByTagName("input")[0].value;

    if (text === "") 
      alert("Task Cannot be Empty!");
    else
      setList((prevList) => {
        let newList = [...prevList];
        newList.push(text);
        return newList;
      });

    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[0].placeholder = "Enter Task Here...";
  }

  function deleteItem(pos)
  {
    setList((prevList)=>{
      let newList = [...prevList];
      return newList.filter((item, index)=>{
          return pos !== index
      });
    });

  }


  return (
    <div className="App">
      <Navbar />
      <Input addItem={addItem}/>
      <List list={list} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
