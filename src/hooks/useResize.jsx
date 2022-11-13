import React from "react";

function useResize(ref) {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [squareSize, setSquareSize] = React.useState(0);

  const handleResize = React.useCallback(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
    setSquareSize(Math.min(ref.current.offsetWidth, ref.current.offsetHeight));
  }, [ref]);

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return {
    width,
    height,
    squareSize,
  };
}

const useResizeComp = () => {
  const container = React.useRef();
  const { squareSize } = useResize(container);

  return (
    <div ref={container}>
      <div
        className="rounded-full bg-slate-400"
        style={{
          width: `${squareSize}px`,
          height: `${squareSize}px`,
        }}
      ></div>
    </div>
  );
};

export default useResizeComp;
