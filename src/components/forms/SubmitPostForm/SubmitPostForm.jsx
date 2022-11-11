import React from 'react'
import Input from '../ui/Input/Input'
import SubmitBtn from '../ui/SubmitBtn/SubmitBtn'
import SubmitFile from '../ui/SubmitFile/SubmitFile'
import TextArea from '../ui/TextArea/TextArea'

const SubmitPostForm = () => {
  return (
    <div className='submit__post_form' >
        <form className="submit__post_form">
        <div className="submit__post_form-file__container">
            <SubmitFile />
        </div>
        <div className="submit__post_form--title">
            <Input />
        </div>
        <div className="submit__post_form--txt_content">
            <TextArea />
        </div>
        <div className="submit__post_form--submit_btn__container">
            <SubmitBtn />
        </div>
        </form>
    </div>
  )
}

export default SubmitPostForm