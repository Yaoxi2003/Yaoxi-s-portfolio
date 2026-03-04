import buttons from "../assets/componentClasses/allClasses"
import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function About() {

const [isError, setIsError] = useState(false)
// check if recieve a request successfully
const [send, setSend] = useState(false)

async function signUp(e) {
  e.preventDefault()
  const formData = new FormData(e.target)
  const email = formData.get('email')
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(String(email).toLowerCase())) {
      setIsError(true)
      return
    }

  setIsError(false)

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
    if (response.ok) {
      setSend(true)
    }
  } catch (error) {
    console.error('Form submission error:', error)
  }
}

  return (
    <motion.section
      className="bg-gray400" id="About"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
        <div className="relative container-pro pd-t-lg pd-b-lg flex justify-center items-center border-b-2 border-gray200/40
                        flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-5">

          {/* context */}
            <article className="flex flex-col gap-5 text-center text-left max-w-[445px]">
              <h1>Contact</h1>
              <p>I'm currently seeking junior frontend or internship opportunities in Sydney. If you're looking for a developer who values clean design and accessible code, I'd love to connect. Drop me a message, and I'll get back to you shortly.</p>
            </article>

            <form onSubmit={signUp}
            name="contact"
            method="POST"
            data-netlify="true"
            className="w-full max-w-[445px] flex flex-col items-end gap-4">

              {/* receive message to netifly */}
              <input type="hidden" name="form-name" value="contact" />

              {/* input wrap */}
              <div className="relative w-full">
                <input type="text" name="fullname" className={`input-style border-gray200`} required placeholder="NAME" aria-label="your name"/>
              </div>

              <div className="relative w-full">
                <input type="text" name="email" className={`input-style ${isError ? 'border-[#FF6F5B]' : 'border-gray200'}`} required placeholder="EMAIL" aria-label="your email"/>
                {
                  isError && 
                  <>
                  <svg className="absolute top-1/2 -translate-y-1/2 right-0 z-10" 
                  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF6F5B">
                  <path d="M508.5-291.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  <p className="text-[#FF6F5B] absolute bottom-0 translate-y-[35px] right-0 z-10 text-[14px]">Sorry, invalid format here</p>
                  </>
                }
              </div>

              <textarea name="message" placeholder="MESSAGE" className={`input-style textarea-style z-10`} aria-label="message box" required></textarea>

              <button type="submit" className={`uppercase ${buttons.linetransitionBtn.btn}`}>
                <p className={buttons.linetransitionBtn.text}>
                 send message
                </p>
              </button>

              {/* Successful message for the request */}
              {send && (
                <div className="w-full text-green-600
                                flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="oklch(62.7% 0.194 149.214)"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  <p>Thank you for your message!</p>
                </div>
              )}
            </form>
           
        </div>
    </motion.section>
  )
}

