import React from 'react'
import { issues } from '~/mock/issues'
import { classNames } from '~/utils/classNames'
import IssueItem from './IssueItem'
import Pagination from './Pagination'

interface Props {
  issues: unknown
}

const IssueList: React.FC<Props> = (props) => {
  return (
    <div className="mt-2 mb-24">
      <ul
        className={classNames(
          'bg-gray-50 rounded-md border border-gray-200 text-gray-900 text-sm font-medium divide-y'
        )}
      >
        {issues?.map((issue, i) => (
          <IssueItem key={i} issue={issue} />
        ))}
      </ul>
      <Pagination />
    </div>
  )
}

export default IssueList
