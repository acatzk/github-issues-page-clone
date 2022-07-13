import useSWR from 'swr'
import { useState } from 'react'
import Layout from '~/layouts/Layout'
import Button from '~/components/Button'
import ReactPaginate from 'react-paginate'
import IssueList from '~/components/IssueList'
import { classNames } from '~/utils/classNames'
import type { GetStaticProps, NextPage } from 'next'

interface Props {
  prefetchedData?: unknown
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/repos/vuejs/vue/issues')
  const prefetchedData = await res.json()

  return {
    props: {
      prefetchedData
    }
  }
}

const Index: NextPage<Props> = (props) => {
  const { prefetchedData } = props

  const { data } = useSWR(
    'https://api.github.com/repos/vuejs/vue/issues',
    async (query) => await fetch(query).then((res) => res.json()),
    {
      fallbackData: prefetchedData
    }
  )

  const [issues, setIssues] = useState(data?.slice(0, 50))
  const [pageNumber, setPageNumber] = useState(0)

  const issuePerPage = 10
  const pagesVisited = pageNumber * issuePerPage

  const displayIssues = issues?.slice(pagesVisited, pagesVisited + issuePerPage)

  const pageCount = Math.ceil(issues?.length / issuePerPage)

  const changePage = ({ selected }: { selected: number }): void => {
    setPageNumber(selected)
  }

  return (
    <Layout>
      <section className="max-w-6xl mx-auto">
        <div className="mt-6">
          <div className="flex items-center space-x-2">
            <Button>All</Button>
            <Button>Open issues</Button>
            <Button> Closed issues</Button>
          </div>

          <IssueList issues={displayIssues} />
          <div className="mt-6 flex items-center justify-center w-full">
            <ReactPaginate 
              previousLabel="Previous"
              nextLabel="Next"
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName="inline-flex -space-x-px"
              previousLinkClassName={classNames(
                'bg-white border py-2 px-3 rounded-l-lg hover:bg-gray-100',
                'transition ease-in-out duration-150 active:bg-gray-200'
              )}
              pageLinkClassName={classNames(
                'bg-white border py-2 px-3 hover:bg-gray-100',
                'transition ease-in-out duration-150 active:bg-gray-200'
              )}
              activeClassName="text-blue-500 bg-yellow-500"
              nextLinkClassName={classNames(
                'bg-white border py-2 px-3 rounded-r-lg hover:bg-gray-100',
                'transition ease-in-out duration-150 active:bg-gray-200'
              )}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
