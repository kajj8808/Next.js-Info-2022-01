import Link from "next/link";
import { useRouter } from "next/router";
import HeadTitle from "../components/headTitle";
import style from "./index.module.css";

export default function Home({ results: movies }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${id}/${title}`);
  };
  return (
    <div className={style.movie_container}>
      <HeadTitle title="Home" />
      {movies?.map((movie) => (
        <div
          key={movie.id}
          className={style.movie}
          onClick={() => onClick(movie.id, movie.title)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <Link
            key={movie.id}
            href={`/movies/${movie.id}/${movie.title}`}
            as={`/movies/${movie.id}`}
          >
            <a>
              <h4>{movie.title}</h4>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

// 이 함수명은 바꾸면안됨. 그리고 항상 servrside 에서 작동함.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
