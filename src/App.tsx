import Form from "./components/Form";
import ItemList from "./components/ItemList";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import { useState } from "react";

type ItemsArray = {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
};

function App() {
  const [items, setItems] = useState<ItemsArray[]>([]);

  function handleAddItems(item: ItemsArray) {
    setItems((prevItems) => [...prevItems, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} items={items} />
      <ItemList items={items} />
      <Stats />
    </div>
  );
}

export default App;
