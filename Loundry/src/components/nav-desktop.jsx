import { routes } from "../utils/routes"
import { Link } from "react-scroll";
import img from "../assets/yasuke-logo.svg";

export const NavDesktop = () => {
  return (
   <nav className="">
  
     <ul className="hidden lg:flex lg:items-center justify-between h-20 text-sm p-5">
      <img src={img} className="h-16 w-16" alt="" />
      {routes.map((route,index) => {
        const { Icon, href, title } = route;
        return (
          <li key={index}>
            <Link
             to={href}
              spy={true}
               smooth={true}
                offset={-150}
                 duration={500} 
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            >
              <Icon />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
   </nav>
  );
};