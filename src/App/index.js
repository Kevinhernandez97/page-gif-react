import { Link, Route } from 'wouter'

import Header from '../components/Header'
import { SearchResults } from '../pages/SearchResults'
import { Home } from '../pages/Home'
import Detail from '../pages/Detail'
import Login from '../pages/Login'

import { UserContextProvider } from '../context/UserContext'
import { GifsContextProvider } from '../context/GifsContext'

import './App.css'

function App() {
  return (
    <UserContextProvider
      value={{
        name: 'kevin',
        suscribiteAlCanal: true,
      }}
    >
      <div className='App'>
        <Header />
        <section className='App-content'>
          <Link to='/'>
            <h1 className='title'>giffy</h1>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path='/' />
            <Route component={SearchResults} path='/search/:keyword/:rating?' />
            <Route component={Detail} path='/gif/:id' />
            <Route component={Login} path='/login' />
            <Route component={() => <h1>404 ERROR :(</h1>} path='/404' />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  )
}

export { App }
