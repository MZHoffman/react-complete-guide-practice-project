import React from 'react'
import ReactDOM from 'react-dom'

import classes from './ErrorModal.module.css'
import Card from './Card'
import Button from './Button'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal} />
}
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.closeModal}>OK</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          closeModal={props.closeModal}
          title={props.title}
          message={props.message}
        />,
        document.getElementById('overly-root')
      )}
    </React.Fragment>
  )
}

export default ErrorModal
