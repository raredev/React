export default function ResultModal({ result, targetTime, ref }) {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result}</h2>
      <p>
        Your target time was <strong>{targetTime}</strong> seconds!
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
