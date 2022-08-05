import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function FetchSwr () {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/1', fetcher)
  // const { data, error } = useSWR('api/todo', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return (
    <div key={data.id}>
      <p>id: {data.id}</p>
      <p>completed: {data.completed}</p>
      <p>title: {data.title}</p>
      <p>userId: {data.userId}</p>
      <hr />
    </div>
  )
}