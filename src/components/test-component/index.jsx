import { useEffect, useState } from "react";

export default function TestComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      <span>{windowWidth}</span>
    </>
  );
}
