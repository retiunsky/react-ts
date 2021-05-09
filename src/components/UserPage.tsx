import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import List from './List'
import UserItem from './UserItem'
import { useHistory } from 'react-router-dom';

const UserPage: FC = () => {
  const history = useHistory()

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fethcUsers()
  }, [])

  async function fethcUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <List items={users} renderItem={(user: IUser) => (
      <UserItem onClick={(user) => history.push('/user/' + user.id)} user={user} key={user.id} />
    )} />
  )
}

export default UserPage
