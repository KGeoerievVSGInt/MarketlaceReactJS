import { InventoryInputDivProps } from "../../../types";
const InventoryModalInputDiv = ({
  id,
  type,
  data,
  name,
  text,
}: InventoryInputDivProps) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        placeholder=" "
        name={name}
        value={data != null ? data : ""}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default InventoryModalInputDiv;
