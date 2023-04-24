import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Input label="Teste" />
      <Button variant="primary">Botão primário</Button>
      <Button variant="secondary">Botão secundário</Button>
    </div>
  );
}

export default App;
