import type { GetStaticProps, NextPage } from 'next'
import Layout from '~/layouts/Layout'
import { useRouter } from 'next/router'
import { octokit } from '~/lib/octokit'
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'
import IssueList from '~/components/IssueList'
import { classNames } from '~/utils/classNames'
import Button from '~/components/Button'
import axios from 'axios'

interface Props {
  prefetchedData?: any
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await octokit.request(`GET /repos/vuejs/vue/issues?state=all`, {
    owner: 'vue',
    repo: 'vuejs'
  })
  // const res = await axios.get(`https://api.github.com/repos/vuejs/vue/issues?state=all`)
  const prefetchedData = await res.data

  return {
    props: {
      prefetchedData
    }
  }
}

const Index: NextPage<Props> = (props) => {
  const { prefetchedData } = props
  const router = useRouter()

  const { state = 'all' } = router.query

  const [issuePosts, setIssuePosts] = useState([prefetchedData?.slice(0, 50)])
  const [loading, setLoading] = useState(false)

  const [pageNumber, setPageNumber] = useState(0)

  const issuePerPage = 10
  const pagesVisited = pageNumber * issuePerPage

  const displayIssues = issuePosts?.slice(pagesVisited, pagesVisited + issuePerPage)

  const pageCount = Math.ceil(issuePosts?.length / issuePerPage)

  const changePage = ({ selected }: { selected: number }): void => {
    setPageNumber(selected)
  }

  useEffect(() => {
    const fetchIssuePosts = async () => {
      setLoading(true)
      const res = await octokit.request(`GET /repos/vuejs/vue/issues?state=${state}`, {
        owner: 'vue',
        repo: 'vuejs'
      })
      // const res = await axios.get(`https://api.github.com/repos/vuejs/vue/issues?state=${state}`)
      setIssuePosts(res?.data)
      setLoading(false)
    }

    fetchIssuePosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <Layout>
      <section className="max-w-6xl mx-auto">
        <div className="mt-6">
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => router.push('?state=all')}
              className={
                state === 'all' && router.pathname === '/'
                  ? 'bg-blue-500 focus:bg-blue-500 text-white active:bg-gray-300'
                  : 'focus:bg-gray-200 hover:bg-gray-200 hover:border-gray-300'
              }
            >
              All
            </Button>
            <Button
              onClick={() => router.push('?state=open')}
              className={
                state === 'open'
                  ? 'bg-blue-500 focus:bg-blue-500 text-white '
                  : 'active:bg-gray-300 focus:bg-gray-200 hover:bg-gray-200 hover:border-gray-300'
              }
            >
              Open issues
            </Button>
            <Button
              onClick={() => router.push('?state=closed')}
              className={
                state === 'closed'
                  ? 'bg-blue-500 focus:bg-blue-500 text-white '
                  : 'active:bg-gray-300 focus:bg-gray-200 hover:bg-gray-200 hover:border-gray-300'
              }
            >
              Closed issues
            </Button>
          </div>

          {/* <button onClick={}></button> */}

          {/* <pre>{JSON.stringify(prefetchedData, null, 2)}</pre> */}
          <IssueList issues={displayIssues} loading={loading} />

          {!loading && (
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
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Index
