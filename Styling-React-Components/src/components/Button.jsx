export default function Button({ children, ...props }) {
  return (
    <button
      className="px-3 py-2 font-semibold uppercase rounded text-stone-800 hover:bg-amber-600"
      {...props}
    >
      {children}
    </button>
  );
}
