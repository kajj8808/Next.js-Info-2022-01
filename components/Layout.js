import NavBar from "./NavBar";

//children 하나의 component 를 또 다른 component 안에 넣기위해 사용.
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
