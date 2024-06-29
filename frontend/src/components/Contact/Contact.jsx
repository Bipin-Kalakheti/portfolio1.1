import { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Contact = () => {
  const Form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_jfglvbv',
        'template_nf76g9h',
        Form.current,
        'u7_RXBKHjKtr3e1Om'
      )
      .then(
        () => {
          alert('Message sent!')
          window.location.reload(false)
        },
        () => {
          alert('Oops! There was an error.')
        }
      )
  }

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Return a cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section className="contact" id="Contact">
        <div className="container">
          <div className="contactTitle sectionTitle">
            <h1 className="sectionTitle scroll-animate">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
          </div>
          <div className="contactForm">
            <form onSubmit={sendEmail} ref={Form}>
              <div className="inputBox left-scrollAnimate">
                <input
                  type="text"
                  name="user_name"
                  className="block block-focus"
                  required
                />
                <span>Full Name</span>
              </div>
              <div className="inputBox right-scrollAnimate ">
                <input
                  type="email"
                  name="user_email"
                  className="block block-focus"
                  required
                />
                <span>Email</span>
              </div>
              <div className="inputBox left-scrollAnimate">
                <input
                  type="text"
                  name="subject"
                  className="block block-focus"
                  required
                />
                <span>Subject</span>
              </div>
              <div className="inputBox right-scrollAnimate ">
                <textarea
                  name="message"
                  className="block block-focus"
                  required
                ></textarea>
                <span>Message</span>
              </div>
              <button type="submit" value="SEND">
                <span className="button_top ">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p>Send</p>
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
