// src/pages/BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "./BlogData";

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
        <h2 className="text-3xl">Post not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white font-[Poppins] flex flex-col">
      <section className="pt-32 px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold text-emerald-500 mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-2">
          {post.date} • by <span className="text-emerald-300">{post.author}</span>
        </p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-2xl my-6"
        />
        <p className="text-gray-300 text-lg leading-relaxed">{post.content}</p>
        <Link
          to="/blog"
          className="inline-block mt-6 text-emerald-400 hover:text-emerald-300 font-medium"
        >
          ← Back to Blog
        </Link>
      </section>
    </div>
  );
};

export default BlogPost;
