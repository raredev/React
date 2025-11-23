// In react older version before v19
// forwardRef is used to pass a ref to a component

import { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return (
    <dialog className="result-modal" ref={dialogRef}>
      <h2>You {result}</h2>
      <p>
        Your target time was <strong>{targetTime}</strong> seconds!
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
