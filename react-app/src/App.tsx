import ListGroup from "./components/ListGroup";

let items = ["Integra", "Alucard", "Seras", "Pip"];
const handleSelectItem = (item: string) => {
  console.log(item);
}

function App() {
  return <div><ListGroup items={items} heading="Characters" onSelectItem={handleSelectItem}/></div>
}

export default App;