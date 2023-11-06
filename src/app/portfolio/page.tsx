import React, {Suspense} from 'react'
import Loading from './loading'
import Portfolio from '@/views/Portfolio'
import LoadingPage from '@/views/LoadingPage'

const PortfolioPage = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Portfolio />
      </Suspense>
    </>
  )
}

export default PortfolioPage