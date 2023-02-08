import { useState } from 'react'
import './styles.scss'


const Contact = () => {

  return (

    <div className='contact-container'>
      <h2 id='contact'>Contact</h2>

      <form className='contact-container--form' action='https://getform.io/f/5e6367df-df86-46d2-b7f5-6f650bc44e8e' method='POST' encType="multipart/form-data">
      <div className="contact-container--form--item">
        <br/>
        <input type="text" name='nom' className="inputText" required/>
        <span className="floating-label">Nom & Prénom</span>
      </div>
      <div className="contact-container--form--item">
        <br/>
        <input type="text" name='mail' className="inputText" required/>
        <span className="floating-label">E-mail</span>
      </div>
      <div className="contact-container--form--item">
        <br/>
        <input type="text" name='objet' className="inputText" required/>
        <span className="floating-label">Objet</span>
      </div>
      <div className="contact-container--form--item contact-container--form--item-textarea">
        <br/>
        <textarea type="text" name='message' className="inputText" required rows="10" cols="10"/>
        <span className="floating-label">Message...</span>
      </div>
      <div className="contact-container--form--item contact-container--form--item-file">
        <label className="file">
          <input type="file"/>
           Un fichier ?
        </label>
      </div>
      <button  className="contact-container--form--button" type='submit'>Envoyer</button>
      </form>
    </div>
  )
}

export default Contact
