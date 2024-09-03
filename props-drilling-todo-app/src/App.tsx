import { useCallback, useState } from "react";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";
import { TodoType } from "./types/todo";

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random(),
        text: text,
        isCompleted: false,
      },
    ]);
  };

  const handleTodoCompleted = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      })
    );
  }, []);

  const handleTodoDelete = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <main className='item-middle m-auto '>
      <div className='w-[500px] h-[700px] flex flex-col bg-gray-100 border border-gray-500 rounded-xl'>
        <Header />
        <InputBox addTodo={addTodo} />
        <TodoList
          todos={todos}
          handleTodoCompleted={handleTodoCompleted}
          handleTodoDelete={handleTodoDelete}
        />
      </div>
    </main>
  );
};
export default App;
