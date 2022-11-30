import React from 'react'

const Selector = ({dataOptions, name, selectorId, disabled, defaultValue, labelTxt, currentValue}) => {
  // const [currentValueSelector, setCurrentValueSelector] = React.useState(null);

  function selector(event) {
    console.log("selector event >>>>>", event)
    // setCurrentValueSelector("")
  }

  return (
    <div>
      <select name={name} id={selectorId} disabled={disabled} defaultValue={defaultValue} onChange={selector} onClick={(event)=>console.log("click event selector", event)}
      
      >
        {dataOptions.map((e,id)=><option key={id} value={e.id} >{e.name}</option>)}
      </select>
      <label htmlFor={selectorId}>{labelTxt}</label>
    </div>
  )
}

export default Selector