import React from 'react'
import { BiComment } from 'react-icons/bi'
import { IsOpenIcon } from '~/utils/Icons'
import { classNames } from '~/utils/classNames'
import moment from 'moment'

interface IssueProps {
  issue: any
}

const IssueItem: React.FC<IssueProps> = (props) => {
  const { issue } = props

  return (
    <div className={classNames(
      'flex flex-col py-2.5 hover:bg-gray-100 cursor-default',
      'transition ease-in-out duration-150'
    )}>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center space-x-2'>
          <div className='flex-shrink-0'>
            <IsOpenIcon className='text-green-500 fill-current' />
          </div>
          <a href="#"
            className={classNames(
              'w-full text-base font-bold hover:text-blue-600',
              'transition ease-in-out duration-150'
            )}>
            {issue?.title}
          </a>
          {issue.labels.map(({ id, name, color }: { id: number, name: string, color: string }) => (
            <span key={id} className={classNames(
              `px-2 text-white rounded-full text-xs font-light border`,
              `flex-shrink-0 bg-[#${color}]`
            )}>{name}</span>
          ))}
          {/* <pre>{JSON.stringify(issue?.labels.map(), null, 2)}</pre> */}
        </div>
        <a href="#" className='flex items-center space-x-1 text-gray-600 hover:text-blue-600'>
          <BiComment className='w-4 h-4 fill-current' />
          <span className='text-xs font-bold'>{issue?.comments}</span>
        </a>
      </div>
      <div className='ml-10'>
        <span className='text-xs font-normal text-gray-500'>
          #{issue?.number} open {moment(issue?.created_at, "YYYYMMDD").fromNow()} by
          <a href="#" className='ml-0.5 hover:text-blue-500'>
            {issue?.user?.login}
          </a>
        </span>
      </div>
    </div>
  )
}

export default IssueItem