import stl from './MainPage.module.scss'
import {useState} from "react";

const MainPage = () => {
    const [isSuccess, setIsSuccess] = useState(false)

    const changeSuccess = () => {
        setIsSuccess(true)
    }

    return (
        <section id='mainInfo'>
            <div className={stl.mainPage}>
                <div className={stl.headerBox}>
                    <h1 className={stl.header}>Get ready for<span className={stl.sqdfy}> Sqdfy</span></h1>
                    <p className={stl.span}>Discover, create, and enjoy social events like <br/> never before
                        with<span> sqdfy</span>
                    </p>
                </div>
                <div className={stl.box}>
                    <div className={stl.circles}>
                        <div className={stl.circle}></div>
                        <div className={stl.circle}></div>
                        <div className={stl.circle}></div>
                    </div>
                    <div className={stl.formBox}>
                        {isSuccess ? (
                            <div className={stl.successedEmail}>
                                <div className={stl.letter}/>
                                <h3>Thank You!</h3>
                                <p className={stl.successedEmailSpan}>Check your inbox for updates and exclusive insights about our app</p>
                            </div>
                        ) : (<div>
                            <h3>Sign up for early access</h3>
                            <p className={stl.formBoxSpan}>and be one of the first to experience<br/>
                                a new world of social possibilities</p>
                            <form className={stl.form}>
                                <div className={`${stl.at} ${stl.atPlace}`}>
                                    <input type='email' placeholder='Enter you email'>
                                    </input>
                                </div>
                                <button onClick={changeSuccess}>Notify Me!</button>
                            </form>
                        </div>)}
                    </div>
                    <p className={stl.caption}>We respect your privacy. No spam, only exciting news
                        about<span> sqdfy!</span></p>
                </div>
            </div>
        </section>
    )
}
export default MainPage