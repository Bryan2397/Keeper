import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItems] = useState([]);

  function AddItem(item, event) {
    event.preventDefault();
    setItems((prevItems) => [...prevItems, item]);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((cur, index) => {
        return id != index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea Add={AddItem} />
      {item.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          delete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
