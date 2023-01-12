import React, {Suspense} from "react";
import { useNearScreen } from "../hooks/useNearScrenn";
import { Spinner } from '../Spinner'

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

function LazyTrading () {
    const {isNearScreen, fromRef} = useNearScreen({ distance: '200px' })

    return <div style={{width: "100%"}} className="container-list-tendencias" ref={fromRef}>
        <Suspense fallback={<Spinner />}>
            {isNearScreen ? <TrendingSearches /> : <Spinner />}
        </Suspense>
    </div>
}

export { LazyTrading } 