import { Container, Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import { Icon } from "../components";

export function Home() {
  return (
    <Container
      sx={{
        py: 20,
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Image
        src="/images/home.svg"
        alt="Home"
        sizes="100vw"
        fill
        priority
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <Box display="flex">
        <Box mt={6}>
          <Image
            src="/images/arrow.svg"
            alt="arrow"
            width={79}
            height={235}
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </Box>
        <Box>
          <Typography
            fontWeight="bold"
            variant="h1"
            lineHeight={1}
            maxWidth={586}
            mb={6}
            id="home"
            component="h2"
          >
            CREATIVE UI{" "}
            <Box component="span" color="primary.main">
              DESIGNER
            </Box>
          </Typography>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Hire me</Button>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<Icon name="download" />}
            >
              Download CV
            </Button>
          </Stack>
        </Box>
      </Box>
      {/* <IconButton
          sx={{
            position: "absolute",
            left: "35%",
            top: 864,
            transform: "translateX(-50%)",
            width: 96,
            height: 96,
            borderRadius: 0,
          }}
        >
          <Icon name="arrow" />
        </IconButton> */}
    </Container>
  );
}
