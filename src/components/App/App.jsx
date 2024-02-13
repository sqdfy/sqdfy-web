import './App.css'
import { Header } from '../Header/Header'
import { MainPage } from '../../pages/MainPage/MainPage'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Unsubscribe } from '../../pages/Unsubscribe/Unsubscribe'

export const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MainPage />
              </>
            }
          />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Routes>
      </HashRouter>
    </div>
  )
}
