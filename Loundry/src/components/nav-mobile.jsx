import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../utils/routes";
import img from "../assets/yasuke-logo.svg";
import { Link } from "react-scroll";


export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className=" fixed z-50 bg-white w-full lg:hidden ">
      <div className="flex justify-between p-5">
      <img src={img} className="w-10 h-10 lg:hidden" alt="" />
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />

      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem]  p-5 pt-0 bg-teal-900 border-b border-b-white/20  h-screen z-50"
          >
            <ul className="grid gap-2 mt-10">
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <Link
                    to={route.href} spy={true} smooth={true} offset={-150} duration={500}
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-teal-950"
                      }
                      
                    >
                      <span className="flex gap-1 text-lg text-white">{route.title}</span>
                      <Icon className="text-xl text-white" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};