import React, {Suspense} from 'react'
import Loading from './loading'
import Portfolio from '@/views/Portfolio'

const PortfolioPage = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Portfolio />
      </Suspense>
    </div>
  )
}

export default PortfolioPage