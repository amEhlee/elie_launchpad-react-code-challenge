import React from "react";
import AddPost from "../components/AddPost";
import ViewAllPosts from "../components/ViewAllPosts";
import { useSelector } from "react-redux";
import { Card, CircularProgress } from "@mui/material";

export default function HomePage() {
  const { loading } = useSelector((state) => state.posts);

  // if (loading) {
  //   return (
  //     <Card className="flex flex-col gap-4 justify-center items-center h-screen">
  //       <h1>Loading</h1>
  //       <CircularProgress/>
  //     </Card>
  //   );
  // }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
        {/* Add Posts */}
        <AddPost />

        {/* View, Update, Delete posts */}
        <ViewAllPosts />
    </div>
  );
}
