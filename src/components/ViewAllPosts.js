import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost } from "../features/postSlice";
import { getPosts } from "../features/postSlice";

export default function ViewAllPosts() {
  // current number of entities
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function upupdatePost(_id, _userId) {
    const body = {
      id: _id,
      userId: _userId,
      title: title,
      body: description,
    };

    dispatch(updatePost(body))
  }

  return (
    <Card className="flex flex-col items-center p-4 text-center">
      <h1>Posts</h1>
      <Card className="flex flex-col justify-center items-center gap-4 p-4 text-center max-w-[800px] ">
        <h1>Update Post</h1>

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
      </Card>

      <Card className="mx-4 p-4">
        <Table className="min-w-[800px]">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">User ID</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Body</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entities.map((i) => (
              <TableRow key={i.id}>
                <TableCell align="center">{i.id}</TableCell>
                <TableCell align="center">{i.userId}</TableCell>
                <TableCell>{i.title}</TableCell>
                <TableCell>{i.body}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      upupdatePost(i.id, i.userId);
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      dispatch(deletePost(i.id));
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Card>
  );
}
