import React from 'react'

const SubmitBtn = React.memo(({txtBtn, onClick, disabled}) => {
  return (
    <button className='m-1 px-4 py-2 rounded text-base bg-gray-100 hover:bg-slate-50 active:bg-zinc-200' disabled={disabled} onClick={onClick} >
      {txtBtn}
    </button>
  )
})

export default SubmitBtn;