// app/posts/page.tsx
import { Post } from "../types";

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:4000/posts");
  const posts = await res.json();
  return posts;
}

const PostsPage = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Posts (SSR)</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
