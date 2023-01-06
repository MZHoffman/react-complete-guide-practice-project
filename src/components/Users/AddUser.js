import React from 'react'

import Card from '../IU/Card'

const AddUser = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefaulet()
  }
  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  )
}

export default AddUser
