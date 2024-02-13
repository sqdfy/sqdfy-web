import './App.css'
import { Header } from '../Header/Header'
import { MainPage } from '../../pages/MainPage/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Unsubscribe } from '../../pages/Unsubscribe/Unsubscribe'

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  )
}
