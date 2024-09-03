import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

interface InputBoxType {
  addTodo: (text: string) => void;
}

const InputBox = ({ addTodo }: InputBoxType) => {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form className='flex items-center p-4 gap-2' onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='할 일을 입력하세요'
        value={text}
        onChange={onChangeInput}
      />
      <Button className='w-20 bg-gray-500 text-white'>추가</Button>
    </form>
  );
};
export default InputBox;
