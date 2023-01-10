import { useEffect, useState } from "react";
import { getTrendingTerms } from "../../services/getTrendingTermsServices";
import { Category } from "../Category";

function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTerms().then(setTrends)
    }, [])

    return (
    <Category
    name="Tendencias"
    options={trends}
    />
    )
}

export { TrendingSearches }