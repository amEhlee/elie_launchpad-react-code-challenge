import React from "react";
import axios from "axios";
import { Button, Card, TextField } from "@mui/material";
import AddPost from "../components/AddPost";

const GETURL = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20";

export default function HomePage() {
  function getPosts() {
    axios
      .get(GETURL)
      .then((res) => {
        // handle success
        console.log(res);
      })
      .catch((err) => {
        // handle error
        console.log(err);
      });
  }

  return (
    <div className="mx-[20%]">
      <div>HomePage</div>
      <Button onClick={getPosts}>Get Posts</Button>

      {/* Add Posts */}
      <AddPost/>

      {/* View, Update, Delete posts */}
    </div>
  );
}
