import { TodoType } from "../types/todo";
import TodoListItem from "./TodoListItem";

interface TodoListType {
  todos: TodoType[];
  handleTodoCompleted: (id: number) => void;
  handleTodoDelete: (id: number) => void;
}

const TodoList = ({
  todos,
  handleTodoCompleted,
  handleTodoDelete,
}: TodoListType) => {
  return (
    <ul className='flex flex-col gap-2 mx-4 '>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          handleTodoCompleted={handleTodoCompleted}
          handleTodoDelete={handleTodoDelete}
        />
      ))}
    </ul>
  );
};
export default TodoList;
