import useSWR from 'swr'
import Layout from '~/layouts/Layout'
import { issues } from '~/mock/issues'
import Button from '~/components/Button'
import IssueList from '~/components/IssueList'
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

  return (
    <Layout>
      <section className="max-w-6xl mx-auto">
        <div className="mt-6">
          <div className="flex items-center space-x-2">
            <Button>All</Button>
            <Button>Open issues</Button>
            <Button> Closed issues</Button>
          </div>
          
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <IssueList issues={data} />
        </div>
      </section>
    </Layout>
  )
}

export default Index
