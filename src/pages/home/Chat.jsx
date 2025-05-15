import { PhoneOutgoing } from 'lucide-react'
import {motion, scale} from "motion"

const Chat = () => {
  return (
    <motion.div  className="z-50 fixed bottom-7 right-7 bg-blue-600 px-5 py-5 rounded-full">
        <PhoneOutgoing color="white"/>
    </motion.div>
  )
}

export default Chat