import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../features/postSlice";
import { getPosts } from "../features/postSlice";
import AddPostModal from "../components/posts/AddPostModal";
import EditPostModal from "../components/posts/EditPostModal";

export default function HomePage() {
  // current number of entities
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // modal states and adding / editing posts
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  return (
    <>
      <Card className="flex flex-col items-center p-4 text-center my-5 gap-2">
        <h1>Posts</h1>
        <Button
          variant="outlined"
          onClick={() => {
            setShowAddModal(true);
          }}
        >
          Add New Post
        </Button>

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
                      variant="outlined"
                      color="warning"
                      onClick={() => {
                        setCurrentPost(i);
                        setShowEditModal(true);
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
                      variant="outlined"
                      color="error"
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

      {/* Respective Modals */}
      <AddPostModal
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
      />

      <EditPostModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        currentPost={currentPost}
      />
    </>
  );
}
