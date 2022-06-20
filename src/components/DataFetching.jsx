import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((resp) => setNotes(resp.data))

      .catch((err) => console.log(err.message));
  }, []);
  //   const note = promise.then(response => {
  //     const notes = response.data
  //     console.log(note)
  //     return notes})
  // const noting = notes.map(not => not.content)
  return (
    <div>
      DataFetching
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
