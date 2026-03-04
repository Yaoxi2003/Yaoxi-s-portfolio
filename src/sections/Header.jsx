// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import Nav from "../components/Nav"

export default function Header() {

  return (
    <motion.header
      className="container-pro pd-t-sm pd-b-sm"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
        <Nav />
    </motion.header>
  )
}
