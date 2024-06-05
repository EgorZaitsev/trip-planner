import Item from "./Item";

type items = {
  items: {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  }[];
};

function ItemList({ items }: items) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
