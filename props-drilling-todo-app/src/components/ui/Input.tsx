import { twMerge } from "tailwind-merge";

interface InputType extends React.ComponentPropsWithoutRef<"input"> {
  type: "text";
}

const Input = ({ children, className, ...rest }: InputType) => {
  return (
    <input
      className={twMerge(
        "w-full h-11 border border-gray-500 py-1 px-2 rounded-lg",
        className
      )}
      {...rest}
    />
  );
};
export default Input;
