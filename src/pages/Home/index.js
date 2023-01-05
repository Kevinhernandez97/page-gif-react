import { Link } from "wouter";
import './Home.css'


const POPULAR_GIFS = ['Matrix','Cr7','HarryPotter','Colombia','Brasil','Annita','Badbunny','Coding']
function Home () {

    return (
        <div className="listGif">
            <h2 className="subTitle">Most popular</h2>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>
                        {popularGif}
                    </Link>
                </li>
                ))}
            </ul>
        </div>
       )
}

export { Home }