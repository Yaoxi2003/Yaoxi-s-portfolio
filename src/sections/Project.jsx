import { projects } from "../assets/images/Img"
import buttons from '../assets/componentClasses/allClasses'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import Card from '../components/Card'


export default function Project() {

  const projectData = [
    {
      CardImgSm: projects.thumbnailProject1Small,
      CardImgLg: projects.thumbnailProject1Large,
      title: 'Recipes Finder',
      skills: ['html', 'tailwindcss', 'react'],
      link: 'https://yaoxidetailproject.netlify.app/'
    },
    { 
      CardImgSm: projects.thumbnailProject2Small,
      CardImgLg: projects.thumbnailProject2Large,
      title: 'tic tac toe',
      skills: ['html', 'tailwindcss', 'react'],
      link: 'https://tacticgames.netlify.app/'
    },

  ]

  const cards = projectData.map(
    (card, index) => (
      <Card key={index} cardImgSm={card.CardImgSm} cardImgLg={card.CardImgLg} skills={card.skills} link={card.link}>
        {card.title}
      </Card>
    )
  )

  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
        <div className="container-pro pd-t-xl pd-b-xl">
          <div className="flex items-center justify-between gap-5 mb-20">
            <h1>Projects</h1>
            <a className={buttons.linetransitionBtn.btn} href="#About">
              <p className={buttons.linetransitionBtn.text}>CONTACT ME</p>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 sm:gap-y-13">
            {cards}
          </div>
        </div>
    </motion.section>
  )
}

