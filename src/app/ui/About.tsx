import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";

export function About() {
  return (
    <Container sx={{ py: 32, position: "relative" }}>
      <Image
        src="/images/about.svg"
        alt="About"
        sizes="100vw"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <Box maxWidth="389px">
        <Typography
          fontWeight="bold"
          variant="h2"
          lineHeight={1}
          maxWidth={586}
          id="about"
          component="h2"
        >
          About{" "}
          <Box component="span" color="primary.main">
            me
          </Box>
        </Typography>
        <Typography color="textDisabled">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis....{" "}
          <Box component="span" fontWeight="bold" color="text.primary">
            Read more
          </Box>
        </Typography>
      </Box>
    </Container>
  );
}
