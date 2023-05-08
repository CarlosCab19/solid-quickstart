import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!!</h1>
      <Counter />
      <p>
        <a href="https://www.youtube.com/watch?v=dSqsXku9WaM&ab_channel=RichardAhumada" target="_blank">
          Enlazar RSS
        </a>
      </p>
    </main>
  );
}
