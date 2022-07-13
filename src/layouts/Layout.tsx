import React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <main className='antialiased font-inter bg-white text-black min-h-screen'>{children}</main>
  )
}

export default Layout