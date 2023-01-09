import React from 'react'

import classes from './UsersList.module.css'
import Card from '../IU/Card'

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.userList.map((user) => (
          <li key={user.id}>
            <span>
              Name: {user.username} Age: {user.age}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList
