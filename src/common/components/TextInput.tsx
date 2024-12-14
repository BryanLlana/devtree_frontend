import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import MsgError from "./MsgError";

interface IProps<T extends FieldValues> {
  label: string;
  field: ControllerRenderProps<T, Path<T>>;
  placeholder?: string;
  msgError?: string;
  typeInput?: "text" | "password" | "email";
}

const TextInput = <T extends FieldValues>({
  label,
  field,
  placeholder,
  msgError,
  typeInput = "text",
}: IProps<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        className="bg-gray-100 p-2 rounded-md"
        type={typeInput}
        placeholder={placeholder}
        {...field}
        value={typeof field.value === "string" ? field.value : ""}
      />
      {msgError && <MsgError>{msgError}</MsgError>}
    </div>
  );
};

export default TextInput;
