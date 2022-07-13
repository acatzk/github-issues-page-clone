import React from 'react'
import { classNames } from '~/utils/classNames'

const Pagination: React.FC = () => {
  return (
    <nav className='flex items-center justify-center mt-6 w-full'>
      <ul className="inline-flex -space-x-px">
        <li>
          <a href="#"
            className={classNames(
              'bg-white border py-2 px-3 rounded-l-lg hover:bg-gray-100',
              'transition ease-in-out duration-150 active:bg-gray-200'
            )}>Previous</a>
        </li>
        <li>
          <a href="#"
            className={classNames(
              'bg-white border py-2 px-3 hover:bg-gray-100',
              'transition ease-in-out duration-150 active:bg-gray-200'
            )}>1</a>
        </li>

        <li>
          <a href="#"
            className={classNames(
              'bg-white border py-2 px-3 hover:bg-gray-100',
              'transition ease-in-out duration-150 active:bg-gray-200'
            )}>2</a>
        </li>

        <li>
          <a href="#"
            className={classNames(
              'bg-white border py-2 px-3 hover:bg-gray-100',
              'transition ease-in-out duration-150 active:bg-gray-200'
            )}>3</a>
        </li>

        <li>
          <a href="#"
            className={classNames(
              'bg-white border py-2 px-3 hover:bg-gray-100',
              'transition ease-in-out duration-150 active:bg-gray-200'
            )}>4</a>
        </li>
        <li>
          <a href="#"
            className={classNames(
              'bg-white border py-2 px-3 rounded-r-lg hover:bg-gray-100',
              'transition ease-in-out duration-150 active:bg-gray-200'
            )}>Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination