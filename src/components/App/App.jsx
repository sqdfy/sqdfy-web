import './App.css'
import { Header } from '../Header/Header'
import { MainPage } from '../../pages/MainPage'

export const App = () => {
    return (
        <div className="App">
            <Header />
            <MainPage />
        </div>
    )
}
