import React from 'react'
import { issues } from '~/mock/issues'
import { classNames } from '~/utils/classNames'
import IssueItem from './IssueItem'
import Pagination from './Pagination'

interface Props {
  issues: any
}

const IssueList: React.FC<Props> = (props) => {
  return (
    <div className="mt-2 mb-24">
      <div className={classNames(
        'bg-gray-50 rounded-md border border-gray-200 text-gray-900 text-sm font-medium divide-y'
      )}>
        {issues?.map((issue, i) => <IssueItem key={i} issue={issue} />)}
      </div>
      <Pagination />
    </div>
  )
}

export default IssueList