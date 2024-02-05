import stl from './MainPage.module.scss'
import { useState } from 'react'
import { api } from '../api'

export const MainPage = () => {
    const [isSuccess, setIsSuccess] = useState(false)
    const [email, setEmail] = useState('')
    const [formError, setFormError] = useState(null)
    const [isButtonDisabled, setButtonDisabled] = useState(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const isEmailValid = (email) => {
        return emailRegex.test(email)
    }

    const disableButton = () => {
        setButtonDisabled(true)
    }

    const enableButton = () => {
        setButtonDisabled(false)
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
            enableButton()
        } else {
            setInvalidEmailError()
            disableButton()
        }
    }

    const handleButtonClick = (e) => {
        e.preventDefault()
        if (!isEmailValid(email)) {
            setInvalidEmailError()
            disableButton()
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
        if (isEmailValid(newEmail)) {
            hideError()
            enableButton()
        } else {
            disableButton()
        }
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
                                <h3>Thank You!</h3>
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
                                    <button
                                        onClick={handleButtonClick}
                                        disabled={isButtonDisabled}
                                    >
                                        Notify Me!
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                    <p className={stl.caption}>
                        We respect your privacy. No spam, only exciting news
                        about<span> sqdfy!</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
