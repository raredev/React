import { labelMapping } from "../data.js";

export default function Input({ labelKey, ...props }) {
  const label = labelMapping[labelKey];
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="number" name={label} {...props} />
    </div>
  );
}
