import React from 'react'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { classNames } from '~/utils/classNames'

const Header: React.FC = () => {
  return (
    <header className="bg-[#24292f] py-4 px-4">
      <nav className="max-w-7xl mx-auto">
        <Link href="/">
          <a className="flex items-center space-x-4">
            <BsGithub
              className={classNames(
                'w-8 h-8 text-white hover:text-gray-300',
                'transition ease-in-out duration-150'
              )}
            />
            <h1 className="font-semibold text-white">GitHub Clone Issue Pages</h1>
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
