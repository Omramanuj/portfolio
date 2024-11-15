import Link from"next/link"
import {FaGithub,FaLinkedinIn,FaTwitter} from "react-icons/fa"

const socials = [
  {
    name: "Github",
    icon: <FaGithub/>,
    path: "https://github.com/Omramanuj"},
{
    name:"LinkedIn",
    icon: <FaLinkedinIn/>,
    path: "https://www.linkedin.com/in/ramanuj-om/",
},
{
    name:"Twitter",
    icon: <FaTwitter/>,
    path:"https://x.com/Om_RRamanuj"}
]


const Socials = ({containerStyles,iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Socials