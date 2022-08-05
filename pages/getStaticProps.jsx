const Users = ({data}) => {
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
};

export default Users;

export async function getStaticProps() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await response.json();

    return {
        props: {data}, 
        revalidate: 10
    }
}