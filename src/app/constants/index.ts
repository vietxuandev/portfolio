import { IconName } from "../components";

export const MENU_ITEMS: Array<{
  label: string;
  href: string;
  icon?: IconName;
}> = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "About me", href: "#about", icon: "user" },
  { label: "My projects", href: "#projects" },
  { label: "Contact", href: "#contact", icon: "phone" },
];
