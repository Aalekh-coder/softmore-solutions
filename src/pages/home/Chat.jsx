import { PhoneOutgoing } from 'lucide-react'
import {motion, scale} from "motion/react"

const Chat = () => {
  return (
    <a
     href="https://wa.me/919266474766?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div className="z-50 fixed bottom-7 right-7 bg-blue-600 px-5 py-5 rounded-full md:bottom-10 md:right-10 lg:right-16 lg:bottom-16 lg:p-7 animate-bounce lg:bg-green-500 border-[3px] border-[#32ff20]">
        <PhoneOutgoing color="white" className=''/>
      </motion.div>
    </a>
  )
}

export default Chat