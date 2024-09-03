import { FaMoon, FaSun } from "react-icons/fa";
import Button from "./ui/Button";
import { useState } from "react";

const Header = () => {
  const [darkmode, setDarkmode] = useState(false);

  const handleDarkmode = () => {
    setDarkmode((prev) => !prev);
  };

  return (
    <header className='w-full flex items-center justify-between border-b px-4 py-2 '>
      <div className='h-11 flex items-center font-bold text-xl'>Todo App</div>
      <Button className='w-11 border-none text-xl' onClick={handleDarkmode}>
        {darkmode ? <FaSun /> : <FaMoon />}
      </Button>
    </header>
  );
};
export default Header;
