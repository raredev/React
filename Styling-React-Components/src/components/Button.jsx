export default function Button({ children, ...props }) {
  return (
    <button
      className="px-3 py-2 font-semibold uppercase rounded text-stone-800 bg-amber-600 hover:bg-amber-500"
      {...props}
    >
      {children}
    </button>
  );
}
