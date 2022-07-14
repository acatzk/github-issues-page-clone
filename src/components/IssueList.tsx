import React from 'react'
import IssueItem from './IssueItem'
import { classNames } from '~/utils/classNames'

interface Props {
  issues: any
  loading: boolean
}

const IssueList: React.FC<Props> = (props) => {
  const { issues, loading } = props

  return (
    <div className="mt-2">
      <ul
        className={classNames(
          'bg-gray-50 rounded-md border border-gray-200 text-gray-900 text-sm font-medium divide-y'
        )}
      >
        {loading ? (
          <div className="flex items-center justify-center py-2 min-h-[20vh]">Loading...</div>
        ) : (
          issues?.map((issue: string[], i: number) => <IssueItem key={i} issue={issue} />)
        )}
      </ul>
    </div>
  )
}

export default IssueList
