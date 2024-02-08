import stl from './MainPage.module.scss'
import { useState } from 'react'
import { api } from '../api'

const emailRegex = /^[\p{L}0-9_.+~-]+@[\p{L}0-9-]+\.[a-zA-Z0-9-.]+$/u

export const MainPage = () => {
    const [isSuccess, setIsSuccess] = useState(false)
    const [email, setEmail] = useState('')
    const [formError, setFormError] = useState(null)

    const isEmailValid = (email) => {
        return emailRegex.test(email)
    }

    const setInvalidEmailError = () => {
        setFormError('Invalid email format')
    }

    const setServerError = () => {
        setFormError('Please try again later')
    }

    const hideError = () => {
        setFormError(null)
    }

    const handleEmailInputBlur = (e) => {
        if (isEmailValid(email) || email.length === 0) {
            hideError()
        } else {
            setInvalidEmailError()
        }
    }

    const handleEmailInputFocus = (e) => {
        hideError()
    }

    const handleButtonClick = (e) => {
        e.preventDefault()
        if (!isEmailValid(email)) {
            setInvalidEmailError()
            return
        }
        api.sendEmail(email)
            .then(() => setIsSuccess(true))
            .catch(() => {
                setServerError()
            })
    }

    const handleEmailInputChange = (e) => {
        const newEmail = e.target.value
        setEmail(newEmail)
        hideError()
    }

    return (
        <section id="mainInfo">
            <div className={stl.mainPage}>
                <div className={stl.headerBox}>
                    <h1 className={stl.header}>
                        Get ready for<span className={stl.sqdfy}> Sqdfy</span>
                    </h1>
                    <p className={stl.description}>
                        Discover, create, and enjoy social events like never
                        before with<span> sqdfy</span>
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
                                <div className={stl.letter} />
                                <h3 className={stl.letterHeader}>Thank You!</h3>
                                <p className={stl.successedEmailSpan}>
                                    Check your inbox for updates and exclusive
                                    insights about our app
                                </p>
                            </div>
                        ) : (
                            <div>
                                <h3>Sign up for early access</h3>
                                <p className={stl.formBoxSpan}>
                                    and be one of the first to experience
                                    <br />a new world of social possibilities
                                </p>
                                <form className={stl.form} noValidate>
                                    <div
                                        className={
                                            formError
                                                ? `${stl.at} ${stl.atPlace}`
                                                : `${stl.at} ${stl.atPlace} ${stl.erorrPlace}`
                                        }
                                    >
                                        <input
                                            className={
                                                formError
                                                    ? `${stl.inputError}`
                                                    : `${stl.inputEmail}`
                                            }
                                            type="email"
                                            placeholder="Enter you email"
                                            onChange={handleEmailInputChange}
                                            onBlur={handleEmailInputBlur}
                                            onFocus={handleEmailInputFocus}
                                            value={email}
                                            required
                                        ></input>
                                    </div>
                                    {formError ? (
                                        <span className={stl.errorText}>
                                            {formError}
                                        </span>
                                    ) : (
                                        ''
                                    )}
                                    <button onClick={handleButtonClick}>
                                        Notify Me!
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                    <p className={stl.caption}>
                        We respect your privacy. No spam, opt-out anytime.
                    </p>
                </div>
            </div>
        </section>
    )
}
