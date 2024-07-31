import BooksList from "./components/BookList";

export default function Root(props) {
  return <section>{props.name} is mounted!
  <BooksList/>
  </section>;
}
