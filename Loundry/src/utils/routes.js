
import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { PiContactlessPayment } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";

export const routes = [
  {
    title: "Contact",
    href: "contact",
    Icon: PiContactlessPayment,
  },
  {
    title: "Services",
    href: "service",
    Icon: FiSearch,
  },
  {
    title: "Pricing",
    href: "price",
    Icon: IoPricetagsOutline,
  },
  {
    title: "About",
    href: "about",
    Icon: PiChatCircleBold,
  },
];