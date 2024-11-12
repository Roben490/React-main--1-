import React from 'react'
import './SnackBar.css'

interface Props {
    message: string, 
}

export default function SnackBar(props: Props) {
  return (
    <div className="snackbar">
      <h1>{props.message}</h1>
      {/* <button className="close-btn" onClick={onClose}>×</button> */}
    </div>
  )
}



