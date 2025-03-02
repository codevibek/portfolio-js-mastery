import {useState, useRef} from "react"
import {motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../style" 
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s9bvcdk', 'template_peezsfh', formRef.current, {
        publicKey: '6LOkqzCdxTzxDpQ7D',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [message,setMessage] = useState()



  const [loading,setLoading] = useState(false)



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div 
        variants={slideIn("left","tween",0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          
          <form 
            ref={formRef}
            className="mt-12 flex flex-col gap8"
            onSubmit={sendEmail}
          >
            <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>

<input
  type="text"
  name="name"
  value={name}
  onChange={(e)=>setName(e.target.value)}
  placeholder="What's your name?"
  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>

            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
<input
  type="text"
  name="email"
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  placeholder="What's your email?"
  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>

            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Message</span>
<textarea
rows="7"
  type="text"
  name="message"
  value={message}
  onChange={(e)=>setMessage(e.target.value)}
  placeholder="What do you want to say?"
  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>

            </label>
            <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary">
              {loading?"Sending...":"Send"}
            </button>
          </form>
        </motion.div>

        <motion.div 
          variants={slideIn("right","tween",0.2,1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas/>
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")