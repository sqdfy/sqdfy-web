import style from './Unsubscribe.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useMemo, useCallback, useState } from 'react'
import { api } from '../../api'
import { SubscribedMessage } from '../../components/SubscribedMessage/SubscribedMessage'
import { isEmailValid } from '../../utils/isEmailValid'

const useIdAndEmail = () => {
  const [params] = useSearchParams()
  return useMemo(
    () => Object.fromEntries(Array.from(params.entries())),
    [params]
  )
}

export const Unsubscribe = () => {
  const { id = '', email = '' } = useIdAndEmail()

  const [isResubscribed, setIsResubscribed] = useState(false)

  useEffect(() => {
    if (id) api.unsubscribeFromNewsletter(id)
  }, [id])

  const onResubscribe = useCallback(
    (e) => {
      e.preventDefault()
      if (isEmailValid(email)) {
        api.subscribeForNewsletter(email).then(() => setIsResubscribed(true))
      }
    },
    [email]
  )

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {isResubscribed ? (
          <SubscribedMessage />
        ) : (
          <>
            <div className={style.icon}>😔</div>
            <div className={style.header}>You've been unsubscribed</div>
            <p className={style.message}>
              We're sorry to see you go! You will no longer receive emails from
              us.
              <br />
              If you change your mind, you can always re-subscribe.
            </p>
            <div className={style.buttons}>
              <a
                href="https://sqdfy.app"
                className={`${style.button} ${style.buttonSecondary}`}
              >
                Visit website
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className={style.button} onClick={onResubscribe}>
                Re-subscribe
              </a>
            </div>
            <div className={style.footer}>
              If you have any questions or need further assistance, please
              contact us at{' '}
              <a href="mailto:sqdfy.app@gmail.com">sqdfy.app@gmail.com</a>.
            </div>
          </>
        )}
      </div>
    </div>
  )
}
