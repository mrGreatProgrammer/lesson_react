import React from 'react'


function checkIsPrime(n) {
  console.log("n", n);
  for (let i = 2; i < n; i++) {
    if (n%i===0) return false
  }

  return n > 1
}
const IsPrimeChecker = ({num})=>{
const isPrime = React.useMemo(()=>{checkIsPrime(num)}, [num]);

return ( <p>{num} is {isPrime?"prime": "not prime"}</p> )
}

const SeeUseMemo = () => {
  const [visible, setVisible] = React.useState(true);
  const [num, setNum] = React.useState();

  const handleClick = ()=>{
    setVisible()
  }

  return (
    <div>SeeUseMemo</div>
  )
}

export default SeeUseMemo