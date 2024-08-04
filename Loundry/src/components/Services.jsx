import Reveal from "../utils/Reveal"
import { motion } from "framer-motion"
import {LazyLoadImage} from "react-lazy-load-image-component"
import img2 from "../assets/img (2).jpg";
import img3 from "../assets/img (3).webp";
import img5 from "../assets/img (5).jpg";
import img7 from "../assets/About.jpg";

function Services() {
  
  const fadeInAnimationVariants = {
    initial:{
      opacity:0,
      y:100
    },
    animate:(index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index
      }
    })
  }
  
  const skills = [
    {
        id: 1,
        title: "Wash & Dry",
        img: img2
    },
    {
        id: 2,
        title: "Wash & Dry",
        img: img3
    },
    {
        id: 3,
        title: "Wash & Dry",
        img: img5
    },
    {
        id: 4,
        title: "Wash & Dry",
        img: img5
    },
    {
        id: 5,
        title: "Wash & Dry",
        img: img5
    },
  ]

  return (
    <div className="p-5 " id="about">
      <div className="text-justify">
      <h1 className="font-bold mb-2 text-center  text-teal-600">ABOUT US</h1>
      <LazyLoadImage src={img7} className="w-full h-4/6 lg:h-60 object-cover" alt="" />
       
          <h2 className="text-2xl font-bold text-teal-600 mb-5 mt-5">We help you shine bright with our best performance.</h2>
        <Reveal>
       

        <div className="flex-col items-center">
        <p>We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics.
        
        </p>
        </div>
        </Reveal>
      </div>
      
      <div id="service">
      <h1 className="font-bold text-center text-teal-600 mt-5">SERVICES</h1>
      <h2 className="text-center">
        Take a look at our professional laundry and dry cleaning services
        </h2>
      </div>
      <div className=" bg-teal-300 w-full h-4/6 rounded-md p-5">
        
      
        <div className="max-w-7xl mx-auto p-6 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => {
            return (
              <motion.span key={skill.id} className="badge badge-secondary justify-around text-white p-2 rounded-full m-1 ml-5"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={skill.id}
              >
                <LazyLoadImage src={skill.img} className="w-24 h-24 rounded-full object-cover" alt="" />
                {skill.title}
              </motion.span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
