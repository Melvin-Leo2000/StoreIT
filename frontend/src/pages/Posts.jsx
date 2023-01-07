import Admin from "./Admin.jsx";


export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Admin post={p} />
      ))}
    </div>
  );
}