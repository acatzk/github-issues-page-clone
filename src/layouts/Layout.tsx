import React from 'react'
import Head from 'next/head'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <React.Fragment>
      <Head>
        <title>GitHub Issue Page Clone</title>
      </Head>
      <Header />
      <main className="antialiased font-inter bg-white text-black min-h-screen px-4">
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
