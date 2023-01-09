import React, { useState } from 'react'

import Card from '../IU/Card'
import Button from '../IU/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../IU/ErrorModal'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  let message = 'test'
  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid age (Higer then 0)',
      })
      return
    }
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid name and age (No empty values)',
      })
      return
    }
    const newUser = {
      username: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    }
    props.setUser(newUser)

    console.log(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }
  const closeError = () => {
    setError(false)
  }
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closeModal={closeError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor='username'>Username</label>
          <input
            value={enteredUsername}
            id='username'
            type='text'
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            value={enteredAge}
            id='age'
            type='number'
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
