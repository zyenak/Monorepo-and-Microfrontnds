import HomePage from "./components/HomePage";

export default function Root(props) {
  return <section>
    {props.name} is mounted!
    <HomePage/></section>;
}
