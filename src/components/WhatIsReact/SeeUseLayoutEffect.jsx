import React from 'react'

function longRunningTask() {
  for (let i = 0; i < 100000; i++) {
    console.log();
  }
}

const SeeUseLayoutEffect = () => {
  console.log("start");

  React.useEffect(()=>{
    console.log("useEffect")
  }, []);

  React.useLayoutEffect(()=>{
    console.log("useLayoutEffect 1");
    longRunningTask();
    console.log("useLayoutEffect 2");
  }, [])


  return (
    <div>SeeUseLayoutEffect</div>
  )
}

export default SeeUseLayoutEffect