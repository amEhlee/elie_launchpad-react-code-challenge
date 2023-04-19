import React from "react";
import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addPost() {
    const data = {
      title: title,
      description: description,
    };

    console.log(data);
  }

  return (
    <Card className="flex flex-col justify-center items-center gap-4 p-4 text-center ">
      <h1>Add Post</h1>

      {/* Event Project Name */}
      <TextField
        className="w-9/12"
        label="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        InputLabelProps={{ shrink: true }}
      />

      {/* Event Description */}
      <TextField
        multiline
        rows={4}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        label="Description"
        className="w-9/12"
        InputLabelProps={{ shrink: true }}
      />

      <Button onClick={addPost}>Add Post</Button>
    </Card>
  );
}
