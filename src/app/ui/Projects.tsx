import { Box, Container, Typography, Stack, Button, Grid } from "@mui/material";
import Image from "next/image";
import { Card } from "../components";

export function Projects() {
  return (
    <Box position="relative" mt={20}>
      <Image
        src="/images/project.svg"
        alt="Project"
        sizes="100vw"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <Container sx={{ py: 32 }}>
        <Box mb={6}>
          <Typography
            fontWeight="bold"
            variant="h2"
            lineHeight={1}
            maxWidth={586}
            mb={2}
            id="projects"
            component="h2"
          >
            My recent{" "}
            <Box component="span" color="primary.main">
              works
            </Box>
          </Typography>
          <Stack spacing={2} direction="row">
            <Button variant="contained">All</Button>
            <Button variant="contained" color="secondary">
              UI
            </Button>
            <Button variant="contained" color="secondary">
              UX
            </Button>
            <Button variant="contained" color="secondary">
              Web Design
            </Button>
          </Stack>
        </Box>
        <Grid container spacing={6}>
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Card>
              <Image
                src="/images/project-1.png"
                alt="Project 1"
                fill
                sizes="30vw"
                style={{ objectFit: "contain" }}
              />
            </Card>
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Card>
              <Image
                src="/images/project-2.png"
                alt="Project 2"
                fill
                sizes="30vw"
                style={{ objectFit: "contain" }}
              />
            </Card>
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Card>
              <Image
                src="/images/project-3.png"
                alt="Project 3"
                fill
                sizes="30vw"
                style={{ objectFit: "contain" }}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
