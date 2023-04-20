import React from "react";
import { Button, Card, Modal, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addPost } from "../../features/postSlice";

export default function AddPostModal({ showAddModal, setShowAddModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(1);
  const dispatch = useDispatch();

  function handleAddPost() {
    const data = {
      title: title,
      body: description,
      userId: userId,
    };

    dispatch(addPost(data));

    // reset state
    setTitle("");
    setDescription("");
    setUserId(1);
    setShowAddModal(false);
  }

  return (
    <Modal
      open={showAddModal}
      onClose={() => {
        setShowAddModal(false);
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <Card className="flex flex-col justify-center items-center p-4 gap-4 min-w-[400px]">
          <h1>Add Post</h1>

          <TextField
            className="w-9/12"
            label="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            className="w-9/12"
            label="User ID"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            InputLabelProps={{ shrink: true }}
          />

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

          <div className="flex gap-4">
            <Button onClick={handleAddPost} variant="outlined">
              Add Post
            </Button>

            <Button
              onClick={() => {
                setShowAddModal(false);
              }}
              variant="outlined"
              color="error"
            >
              Cancel
            </Button>
          </div>
        </Card>
      </div>
    </Modal>
  );
}
