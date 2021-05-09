import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { IUser } from '../types/types'

interface UserItemPageParams {
  id: string
}

const UserItemPage: FC = () => {
  const history = useHistory()

  const [user, setUser] = useState<IUser | null>(null)

  const params = useParams<UserItemPageParams>()

  useEffect(() => {
    fethcUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fethcUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <button onClick={() => history.push('/users')} >Back</button>
      <h1>User Page {user?.name}</h1>
      <div>{user?.email}</div>
      <div>{user?.address.city}</div>
    </div>
  )
}

export default UserItemPage
