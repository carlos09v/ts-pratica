
import { Title, Title2, Title3, Title4 } from './components/Titles'
import { Paragraph } from './components/Paragraph'
import { useState } from 'react';

// Generic = Prop Typescript
// Definem a tipagem por inferencia
function List<ItemType>({ items, render }: {
  items: ItemType[];
  render: (item: ItemType, index: number) => React.ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => {
        return render(item, index);
      })}
    </ul>
  );
}


function App() {
  const items = [
    {
      code: 1,
      name: "John Doe",
    },
    {
      code: 2,
      name: "Jane Doe",
    },
  ];

  // Mais exemplos de inferencia
  const [count, setCount] = useState<number | null>(null)
  if(count !== null) {
    return <div>{count}</div>
  }

  return (
    <div className="App">
      <Title text='Hello World'></Title>
      <Title2>Hello World</Title2>
      <Title3>
        <span>Hello <b>World</b></span>
      </Title3>
      <Title4>Hello World</Title4>

      <Paragraph color='red'>Eu sou um parágrafo</Paragraph>

      <List
        items={items}
        render={(item, index) => {
          if (item.code === 1) {
            return <p>{item.name}</p>;
          }

          return <h3>{item.name}</h3>;
        }}
      />
    </div>
  )
}

export default App
