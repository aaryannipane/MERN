import React from 'react'
import { useState } from 'react'
import { User } from './User'

export const App = () => {

    const [userName, setUserName] = useState("first user")
    
  return (
    <>
        <User userName={userName} />
    </>
  )
}
