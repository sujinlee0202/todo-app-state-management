import { FaTimes } from "react-icons/fa";
import Button from "./ui/Button";
import Checkbox from "./ui/Checkbox";
import { TodoType } from "../types/todo";
import { twMerge } from "tailwind-merge";
import React from "react";

interface TodoListItemType {
  todo: TodoType;
  handleTodoCompleted: (id: number) => void;
  handleTodoDelete: (id: number) => void;
}

const TodoListItem = ({
  todo,
  handleTodoCompleted,
  handleTodoDelete,
}: TodoListItemType) => {
  const { id, text, isCompleted } = todo;

  console.log("rendering", text);

  return (
    <li
      className={twMerge(
        "flex items-center bg-white border border-gray-500 rounded-lg px-2",
        isCompleted && "line-through"
      )}
    >
      <Checkbox
        type='checkbox'
        onChange={() => handleTodoCompleted(id)}
        checked={isCompleted}
      />
      <div className=' w-full h-11 flex items-center px-2'>{text}</div>

      <div className='flex items-center gap-2 h-11'>
        <Button
          className='w-8 h-8 text-gray-700'
          onClick={() => handleTodoDelete(id)}
        >
          <FaTimes />
        </Button>
      </div>
    </li>
  );
};
export default React.memo(TodoListItem);
