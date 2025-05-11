import { useRef, useImperativeHandle, forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));

  return <input ref={inputRef} />;
});

export default function ImperativeHandle() {
  const ref = useRef();

  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>Focus Input</button>
    </>
  );
}
