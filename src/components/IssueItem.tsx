import React from 'react'
import moment from 'moment'
import { BiComment } from 'react-icons/bi'
import { classNames } from '~/utils/classNames'
import { IsCloseIcon, IsOpenIcon } from '~/utils/Icons'

interface IssueProps {
  issue: any
}

type Label = {
  id: number
  name: string
  color: string
}

const IssueItem: React.FC<IssueProps> = (props) => {
  const { issue } = props

  return (
    <li
      className={classNames(
        'flex flex-col py-2.5 hover:bg-gray-100 cursor-default',
        'transition ease-in-out duration-150'
      )}
    >
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">
            {issue?.state === 'open' ? (
              <IsOpenIcon className="text-green-500 fill-current" />
            ) : (
              <IsCloseIcon className="text-indigo-500 fill-current" />
            )}
          </div>
          <a
            href="#"
            className={classNames(
              'w-full text-base font-bold hover:text-blue-600',
              'transition ease-in-out duration-150 line-clamp-1'
            )}
          >
            {issue?.title}
          </a>
          {issue.labels?.map(({ id, name, color }: Label) => (
            <span
              key={id}
              className={classNames(
                'px-2 text-white rounded-full text-xs font-light border flex-shrink-0'
              )}
              style={{ backgroundColor: `#${color}` }}
            >
              {name}
            </span>
          ))}
        </div>
        <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
          <BiComment className="w-4 h-4 fill-current" />
          <span className="text-xs font-bold">{issue?.comments}</span>
        </a>
      </div>
      <div className="ml-10">
        <span className="text-xs font-normal text-gray-500">
          #{issue?.number} {issue?.state === 'open' ? 'opened ' : 'closed '} 
          {moment(issue?.created_at, 'YYYYMMDD').fromNow()} by
          <a href="#" className="ml-0.5 hover:text-blue-500">
            {issue?.user?.login}
          </a>
        </span>
      </div>
    </li>
  )
}

export default IssueItem
