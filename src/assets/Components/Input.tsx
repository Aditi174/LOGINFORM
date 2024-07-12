import "../../CSSfiles/input.css";

interface InputProps {
  placeholder: string;
  type: "text" | "password";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  return (
    <>
      <input
        className="input"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
      />

      <div className="height2"></div>
    </>
  );
}

export default Input;
