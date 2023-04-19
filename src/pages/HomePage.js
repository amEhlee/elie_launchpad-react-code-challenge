import React from "react";
import PostContainer from "../components/PostContainer";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {/* View, Edit, Delete posts */}
      <PostContainer />
    </div>
  );
}
