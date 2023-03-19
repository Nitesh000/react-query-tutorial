import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import type { SinglePostType } from "../vite-env";

export default function PostList2() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (postQuery.status === "loading") return <h1>loading...</h1>;
  if (postQuery.status === "error")
    return <h1>{JSON.stringify(postQuery.error)}</h1>;

  return (
    <div>
      <h1>Posts List 2</h1>
      <ol>
        {postQuery.data.map((post: SinglePostType) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}
