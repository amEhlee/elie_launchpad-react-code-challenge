import React from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../features/postSlice";
import { Button, Card, Modal, TextField } from "@mui/material";
import { useState } from "react";

export default function EditPostModal({
  showEditModal,
  setShowEditModal,
  currentPost,
}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleEditPost() {
    const body = {
      id: currentPost.id,
      userId: currentPost.userId,
      title: title,
      body: description,
    };

    dispatch(editPost(body));
    setShowEditModal(false);
  }

  return (
    <Modal
      open={showEditModal}
      onClose={() => {
        setShowEditModal(false);
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <Card className="flex flex-col justify-center items-center p-4 gap-4 min-w-[400px]">
          <h1>Edit Post</h1>

          {/* Event Project Name */}
          <TextField
            className="w-9/12"
            label="Title"
            defaultValue={currentPost.title}
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
            defaultValue={currentPost.body}
            label="Description"
            className="w-9/12"
            InputLabelProps={{ shrink: true }}
          />

          <div className="flex gap-4">
            <Button onClick={handleEditPost} variant="outlined">
              Edit Post
            </Button>

            <Button
              onClick={() => {
                setShowEditModal(false);
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
