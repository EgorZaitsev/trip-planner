import { SyntheticEvent, useState } from "react";

type ItemsArray = {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
};

type FormType = {
  onAddItems: (item: ItemsArray) => void;
};

function Form({ onAddItems }: FormType) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        name=""
        placeholder="Item..."
        value={description}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
