import stl from './SubscribedMessage.module.scss'

export const SubscribedMessage = () => {
  return (
    <div className={stl.successedEmail}>
      <div className={stl.letter} />
      <h3 className={stl.letterHeader}>Thank You!</h3>
      <p className={stl.successedEmailSpan}>
        Check your inbox for updates and exclusive insights about our app
      </p>
    </div>
  )
}
