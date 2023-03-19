import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import type { SinglePostType } from "../vite-env";

export default function PostList1() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    // refetchInterval: 1000, // refetches the data every single second.
  });

  if (postQuery.status === "loading") return <h1>loading...</h1>;
  if (postQuery.status === "error")
    return <h1>{JSON.stringify(postQuery.error)}</h1>;

  return (
    <div>
      <h1>Posts List 1</h1>
      <ol>
        {postQuery.data.map((post: SinglePostType) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}
