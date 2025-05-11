import { useRef, useLayoutEffect } from 'react';

export default function Layouteffect() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    const { height } = boxRef.current.getBoundingClientRect();
    console.log('Box height:', height);
  }, []);

  return <div ref={boxRef} style={{ height: 100 }}>Box</div>;
}
