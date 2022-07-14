import React from 'react'
import { classNames } from '~/utils/classNames'

interface Props {
  onClick: any
  className?: string
  children: React.ReactNode
}

const Button: React.FC<Props> = (props) => {
  const { onClick, className, children } = props
  
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'bg-gray-100 rounded-md border-gray-200',
        'w-24 border font-semibold w-32 px-2 py-1.5',
        'transition ease-in-out duration-150 text-sm',
        `${className}`
      )}
    >
      {children}
    </button>
  )
}

export default Button