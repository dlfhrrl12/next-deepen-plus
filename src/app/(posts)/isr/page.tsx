// app/posts/isr.tsx
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
      <h1>Posts (ISR)</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
};

// ISR을 위한 `revalidate` 설정 (10초마다 페이지를 갱신)
export const metadata = {
  revalidate: 10, // 10초마다 재생성
};

export default PostsPage;
