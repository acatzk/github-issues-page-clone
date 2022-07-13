import React from 'react'
import { classNames } from '~/utils/classNames'

interface Props {
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button
      type="button"
      className={classNames(
        'bg-gray-100 rounded-md border-gray-200 px-2 py-1.5',
        'w-24 border font-semibold hover:bg-gray-200 hover:border-gray-300',
        'transition ease-in-out duration-150 text-sm',
        'active:bg-gray-300 focus:bg-gray-200 w-32'
      )}
    >
      {children}
    </button>
  )
}

export default Button
