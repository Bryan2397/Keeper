import React, { useState } from "react";

function CreateArea(props) {
  const [card, setCard] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCard((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={card.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={card.content}
        />
        <button
          onClick={(e) => {
            props.Add(card, e);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
