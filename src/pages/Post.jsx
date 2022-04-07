import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data";

function Post() {
  let params = useParams();

  const post = posts.find((p) => p.id.toString() === params.id);
  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongdesc">{post.longDesc}</p>
    </div>
  );
}

export default Post;
