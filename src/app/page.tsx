import { Divider } from "@mui/material";
import { About, Contact, Home, Projects } from "./ui";

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Divider />
      <Projects />
      <Contact />
      <Divider />
    </>
  );
}
