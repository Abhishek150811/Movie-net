import React from 'react'

export default function Message() {
  return (
    <div className='message-box' >
      <div>

        <h1>We welcome your suggestions</h1>
        <form action="">
          <label htmlFor=""> Name</label>
          <input type="text" name="" id="" />
          <br /><br />
          <label htmlFor="">Email id</label>
          <input type="text" name="" id="" />
          <br /><br />
          <label htmlFor="">Any Suggestions</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="" />
          
        </form>
      </div>
    </div>
  )
}
