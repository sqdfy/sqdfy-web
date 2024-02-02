import stl from './Header.module.scss'
import logo from '../../images/Logo.svg'
import name from '../../images/sqdfy.svg'

const Header = () => {
    return (
        <header>
            <div className={stl.headerBox}>
                <img alt='logo' src={logo}/>
                <img alt='sqdfy' src={name}/>
            </div>
        </header>
    )
}

export default Header