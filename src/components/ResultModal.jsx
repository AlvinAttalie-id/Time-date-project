import { useImperativeHandle, useRef } from "react";

export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
}) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && (
        <h2>
          You <strong>Lost</strong>
        </h2>
      )}
      {!userLost && (
        <h2>
          You Score : <strong>{score}</strong>
        </h2>
      )}
      <p>
        The Target Time Was <strong>{targetTime}</strong>
      </p>
      <p>
        You Stop Timer With <strong>{formattedRemainingTime} Time Left.</strong>
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
