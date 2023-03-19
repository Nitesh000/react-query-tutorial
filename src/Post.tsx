import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api/posts";
import { getUser } from "./api/users";

export default function Post({ id }) {
  const postQuery = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPosts(id),
  });

  const userQuery = useQuery({
    queryKey: ["users", postQuery?.data?.userId],
    queryFn: () => getUser(postQuery?.data?.userId),
  });

  if (postQuery.status === "loading") return <h1>loading...</h1>;
  if (postQuery.status === "error")
    return <h1>{JSON.stringify(postQuery.error)}</h1>;

  return (
    <>
      <h1>
        {postQuery?.data.title} <br />
        <small>
          {postQuery.data.userId}
          {/* userQuery.isLoading
            ? "Loading User..."
            : userQuery.isError
            ? "Error loading user"
            : userQuery.data.name */}
        </small>
      </h1>
      <p>{postQuery.data.body}</p>
    </>
  );
}
