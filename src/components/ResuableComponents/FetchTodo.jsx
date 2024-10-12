import "./fetch.css";

const FetchTodo = () => {
  return (
    <div className="todoBox">
      {async function getTodos() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        console.log(data);
        return data;
      }}
      const todos = getTodos(); const printTodos = todos.json();
      {this.printTodos.map((todo) => (
        // eslint-disable-next-line react/jsx-key
        <div className="card">
          <p>Todo Number: {todo.id}</p>
          <p>Title of Todo:{todo.title}</p>
          <p>Status of Todo:{todo.completed}</p>
          <p>Posted By User with Id:{todo.userId}</p>
        </div>
      ))}
      );
    </div>
  );
};

export default FetchTodo;
