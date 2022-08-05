import {useRouter} from "next/router";

export default function TodoPre({todo}) {
    const {query} = useRouter()

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

export const getStaticPaths = async () => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
  const todo = await response.json()

  const todoSlice = todo.slice(0, 2)

	const paths = todoSlice.map(todo => ({
		params: { id: String(todo.id) }
	})); 
  
	return {
		paths,
		fallback: false
	};
};

export async function getStaticProps({params}) {
    const { id } = params;
    if (!params || !params.id) return { notFound: true };

    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo = await response.json()

    return {
        props: {todo},
        revalidate: 10, 
    }
}