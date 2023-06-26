"use client"
import Image from 'next/image'
import Head from 'next/head'
import styles from './login.module.css'
import React, {useState} from 'react'
export default function Home() {
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  console.log("name: ", name)
  console.log("email: ", email)
  return (
   <>
<Head>
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
    crossOrigin="anonymous"
  />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Poppins:wght@500;600;800&display=swap"
    rel="stylesheet"
  />
</Head>

        
   <div className={styles.container}>
      <button className={styles.btn}>
        <i data-feather="arrow-left"></i> Back Home
      </button>

      <div className={styles.login}>
        <form className={styles.formContainer}>
          <h1>Welcome Back!</h1>
          <p className={styles.para}>Login to your account and start connecting with the world. Your journey begins here.</p>

          <label className={styles.label} htmlFor="email">Username</label>
          <input onChange={(e)=> setName(e.target.value)} placeholder="Username" type="text" name="name" id="email" />


          <label className={styles.label} htmlFor="email">Email</label>
          <input 
          onChange={(e)=> setEmail(e.target.value)} 
          placeholder="Enter Email" type="email" name="email" id="email" />
          <label className={styles.label} htmlFor="pass">Password</label>
          <input placeholder="Enter Password" type="password" name="password" id="pass" />
          <div className={styles.mor}>
            <input className={styles.check} type="checkbox" id="check" />
            <label className={styles.label} htmlFor="check">Remember Me</label>
            <a href="">Forgot Password?</a>
          </div>
          <input className={styles.log} type="submit" value="Update" id="login-btn" />

          <div className={styles.container}>
            <div className={styles.line}></div>
            <p>Or</p>
            <div className={styles.line}></div>
          </div>

          <div className={styles.op}>
            <button>
              <Image src="/google-logo.png" alt="Google Logo" width={15} height={15} className={styles['Google-logo']} />
              <Image src="/google-logo.png" alt="Google Logo" width={15} height={15} className={styles['Google-logo']} />
              Login with Google
            </button>
            <button>
              <Image src="/apple-logo.png" alt="Apple Logo" width={15} height={15} className={styles['Apple-logo']} />
              Login with Apple
            </button>
          </div>
        </form>
      </div>

      <div className={styles.image}>
        {/* <h1>New here? Sign up and unlock amazing features!</h1>
        <button className={styles.sign}>Sign Up</button> */}
      </div>

    </div>
    
    


<script src="https://unpkg.com/feather-icons"></script>
   </>
  )
}
