import type { NextPage } from 'next'
import Layout from '~/layouts/Layout'
import { issues } from '~/mock/issues'
import IssueList from '~/components/IssueList'
import { classNames } from '~/utils/classNames'

const Index: NextPage = () => {
  return (
    <Layout>
      <section className='max-w-6xl mx-auto'>
        <div className='mt-10'>
          <div className='flex items-center space-x-2'>
            <button className={classNames(
              'bg-gray-100 rounded-md border-gray-200 px-2 py-1.5',
              'w-24 border font-normal hover:bg-gray-200 hover:border-gray-300',
              'transition ease-in-out duration-150 text-sm',
              'active:bg-gray-300 focus:bg-gray-200'
            )}>All</button>
            <button className={classNames(
              'bg-gray-100 rounded-md border-gray-200 px-2 py-1.5',
              'w-32 border font-normal hover:bg-gray-200 hover:border-gray-300',
              'transition ease-in-out duration-150 text-sm',
              'active:bg-gray-300 focus:bg-gray-200'
            )}>Open issues</button>
            <button className={classNames(
              'bg-gray-100 rounded-md border-gray-200 px-2 py-1.5',
              'w-32 border font-normal hover:bg-gray-200 hover:border-gray-300',
              'transition ease-in-out duration-150 text-sm',
              'active:bg-gray-300 focus:bg-gray-200'
            )}>Closed issues</button>
          </div>

          <IssueList issues={issues} />
        </div>
      </section>
    </Layout>
  )
}

export default Index
