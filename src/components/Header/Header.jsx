import stl from './Header.module.scss'
import logo from '../../images/sqdfy.svg'
import name from '../../images/sqdfyText.svg'

export const Header = () => {
    return (
        <header>
            <div className={stl.headerBox}>
                <img alt="logo" src={logo} />
                <img alt="sqdfy" src={name} />
            </div>
        </header>
    )
}
