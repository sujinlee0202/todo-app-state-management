import { twMerge } from "tailwind-merge";

type ButtonType = React.ComponentPropsWithoutRef<"button">;

const Button = ({ children, className, ...rest }: ButtonType) => {
  return (
    <button
      className={twMerge(
        "w-full h-11 flex items-center justify-center border border-gray-500 rounded-lg",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
