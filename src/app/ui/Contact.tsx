import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import Image from "next/image";
import { Icon } from "../components";

export function Contact() {
  return (
    <Container sx={{ py: 32, position: "relative" }}>
      <Image
        src="/images/contact.svg"
        alt="Contact"
        sizes="100vw"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <Grid container spacing={6}>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <Typography
            fontWeight="bold"
            variant="h2"
            lineHeight={1}
            maxWidth={586}
            mb={2}
            id="contact"
            component="h2"
          >
            Got a project in{" "}
            <Box component="span" color="primary.main">
              mind?
            </Box>
          </Typography>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <Grid container spacing={3}>
            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
            >
              <TextField
                variant="standard"
                fullWidth
                label="Your name"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                id="name"
                placeholder="Name"
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
            >
              <TextField
                variant="standard"
                fullWidth
                label="Your name"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                id="name"
                placeholder="Name"
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                variant="standard"
                label="Your message"
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                id="message"
                placeholder="Message"
                multiline
                rows={10}
              />
            </Grid>
            <Grid size={12}>
              <Button variant="contained" endIcon={<Icon name="send" />}>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
