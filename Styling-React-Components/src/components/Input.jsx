export default function Input({ label, isInvalid, ...props }) {
  let labelClass = "block mb-1 text-xs font-bold tracking-wide uppercase ";
  let inputClass = "w-full px-3 py-2 leading-tight border rounded shadow";
  if (isInvalid) {
    labelClass += "text-red-600";
    inputClass += "bg-red-600 text-red-700 border-red-300";
  } else {
    labelClass += "text-stone-300";
    inputClass += "bg-stone-300 text-gray-700";
  }
  return (
    <p>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </p>
  );
}
