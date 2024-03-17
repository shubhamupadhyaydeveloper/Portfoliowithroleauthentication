import React from 'react'
import { auth } from '@/lib/auth';

const UserPage = async () => {
  const session = await auth()

  return (
    <div>
      <h1>hi this is user page</h1>
    </div>
  )
}

export default UserPage;
