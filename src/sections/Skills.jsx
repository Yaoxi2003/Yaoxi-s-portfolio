// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function Skills() {

  const arry = [
    {
      name: 'HTML',
      experience: '2 years Experience'
    }, 
    {
      name: 'CSS',
      experience: '2 years Experience'
    }, 
    {
      name: 'JavaScript',
      experience: '2 years Experience'
    }, 
    {
      name: 'Python',
      experience: '2 years Experience'
    }, 
    {
      name: 'React',
      experience: '1 years Experience'
    }, 
    {
      name: 'Figma',
      experience: '3 years Experience'
    }, 
  ]

  const keySkills = arry.map(
    (item, index) => (
      <div key={index} className="flex flex-col gap-6 justify-self-center sm:justify-self-start">
        <h2>{item.name}</h2>
        <p>{item.experience}</p>
      </div>
    )
  )

  return (
    <motion.section
      className="container-pro pt-30 lg:pt-50"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
        <div className='pd-t-lg pd-b-lg border-y-2 border-white/40'>
          {/* content*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12
                          text-center sm:text-start">
            {keySkills}
          </div>
        </div>
    </motion.section>
  )
}
