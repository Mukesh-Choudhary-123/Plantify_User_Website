import React from 'react'
import Navbar from '../ui/Navbar'
import Profile from '../features/Profile/components/Profile'

function ProfilePage() {
  return (
      <>
          <Navbar hide={false} />
          <Profile/>
      </>
  )
}

export default ProfilePage