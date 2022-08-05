import {useRouter} from "next/router";

export default function Todo({todo}) {
    const {query} = useRouter()
  console.log(todo)
    const renderTodo = (
      <div>
          <p>id Query param: {query.id}</p>
          <p>id: {todo.id}</p>
          <p>completed: {String(todo.completed)}</p>
          <p>title: {todo.title}</p>
          <p>userId: {todo.userId}</p>
      </div>
    );

    return renderTodo;
};

export async function getServerSideProps({params}) {
    const { id } = params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo = await response.json()

    return {
        props: {todo}, // will be passed to the page component as props
    }
}