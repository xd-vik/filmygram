import { useParams } from "react-router-dom";

const Movie = () => {
  const { movid } = useParams();

  return (
    <div>
      <h1>Post {movid}</h1>
      <p>Display the post content here.</p>
    </div>
  );
};

export default Movie;
