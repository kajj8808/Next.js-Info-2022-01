import { useRouter } from "next/router";

export default function Detail({params}) {
  const router = useRouter();
  const [id, title] = params || [];
  return (
    <div>
      HeadTitle
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}
//http://localhost:3000/movies/1321313132

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
