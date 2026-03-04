// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import Nav from "../components/Nav"

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
        <div className='container-pro pd-t-md pd-b-lg'>
            <Nav />
        </div>
    </motion.footer>
  )
}
