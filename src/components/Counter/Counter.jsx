import React, { useEffect } from "react";
import SubmitBtn from "../forms/ui/SubmitBtn/SubmitBtn";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef();
  
  const [counter, setCounter] = React.useState(0);

  console.log(count);

  React.useEffect(() => {
    // countRef.current=1;
    // setCount(countRef.current);
    // console.log("countRef.current", countRef.current);
    countRef.current=count;
  }, [count]);



  return (
    <div>

      <SubmitBtn
        disabled={false}
        txtBtn={"-"}
        onClick={() => {
          setCount(c=>c-1);
          // countRef.current = 2;
          // alert("h")
          // console.log(first)
        }}
        />
        <h5>{count}</h5>
      <SubmitBtn
        disabled={false}
        txtBtn={"+"}
        onClick={() => {
          setCount(c=>c+1);
          // countRef.current = 2;
          // alert("h")
          // console.log(first)
        }}
      />
    </div>
  );
};

export default Counter;
