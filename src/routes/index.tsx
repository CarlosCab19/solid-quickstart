import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!!</h1>
      <Counter />
      <p>
        <a href="/components/routes/consulta.xml" target="_blank">
          Enlazar RSS
        </a>
      </p>
    </main>
  );
}
