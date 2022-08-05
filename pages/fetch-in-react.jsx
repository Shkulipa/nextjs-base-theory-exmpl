import { useState, useEffect } from 'react'

export default function FetchInReact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
    }
    fetchData();
  }, [])

  const renderData = data.map((item, idx) => (
    <div key={item.id}>
      <p>id: {item.id}</p>
      <p>completed: {item.completed}</p>
      <p>title: {item.title}</p>
      <p>userId: {item.userId}</p>
      <hr />
    </div>
  ))

  return (
    <div>
      TODOS: Title for test
      <hr />
      {renderData}
    </div>
  );
}
