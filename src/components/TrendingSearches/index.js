import React, {Suspense} from "react";
import { useNearScreen } from "../hooks/useNearScrenn";
// import { TrendingSearches } from "./TrendingSearches"

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrading () {
    const {isNearScreen, fromRef} = useNearScreen({ distance: '200px' })

    return <div ref={fromRef}>
        <Suspense fallback={null}>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
}

// export { LazyTrading } 