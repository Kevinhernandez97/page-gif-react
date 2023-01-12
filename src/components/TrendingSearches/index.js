import React, {Suspense} from "react";
import { useNearScreen } from "../hooks/useNearScrenn";

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

function LazyTrading () {
    const {isNearScreen, fromRef} = useNearScreen({ distance: '200px' })

    return <div ref={fromRef}>
        <Suspense fallback={'loading...'}>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}

export { LazyTrading } 