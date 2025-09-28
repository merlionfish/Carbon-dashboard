"use client";
import { useEffect, useState } from "react";
import { fetchPosts } from "@/lib/api";
import { Post } from "@/lib/types";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then(setPosts).finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <ul className="space-y-2">
      {posts.map(p => (
        <li key={p.id} className="p-2 border rounded">{p.title}</li>
      ))}
    </ul>
  );
}
