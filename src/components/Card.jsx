import { Link } from "react-router-dom"
import buttons from "../assets/componentClasses/allClasses"

export default function Card({children, cardImgSm, cardImgLg, skills, link}) {

    const skillset = skills.map(
        skill => (
            <h4 key={skill} className="uppercase text-gray200">{skill}</h4>
        )
    )
  return (
    <div className="flex flex-col gap-4">

        <picture className="relative group h-100 max-h-100">
            <source media="(min-width: 1024px)" srcSet={cardImgLg} />
            <img src={cardImgSm} alt="The project image"
                className="w-full h-full object-cover" />

            {/* Desktop links */}
            <div className="absolute z-10 top-0 left-0 w-full h-full
            hidden group-hover:lg:flex flex-col gap-4 items-center justify-center bg-gray900/40">
                <a className={buttons.bottomLineBtn} href={link} target="_blank">VIEW PROJECT</a>
                <Link className={buttons.bottomLineBtn} >VIEW CODE</Link>
            </div>

        </picture>
        {/* card content */}
        <h3 className="uppercase">{children}</h3>
        <div className="flex items-center gap-3">
            {skillset}
        </div>
        {/* Links in mobile and tablet screen*/}
        <div className="flex items-center gap-4
                        lg:hidden">
            <a className={buttons.bottomLineBtn} href={link} target="_blank">VIEW PROJECT</a>
            <Link className={buttons.bottomLineBtn} >VIEW CODE</Link>
        </div>

    </div>
  )
}

