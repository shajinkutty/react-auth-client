import React from "react";
import Card from "../components/Card";
import { posts } from "../data";

function Home({ loading }) {
  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="home">
          {posts.map((post) => (
            <Card key={post.id} {...post} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
