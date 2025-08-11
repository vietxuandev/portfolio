"use client";
import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import NextLink from "next/link";
import { cloneElement, useEffect, useState } from "react";
import { MENU_ITEMS } from "../constants";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export function Header(props: Props) {
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    setActiveHash(window.location.hash || "#home");
  }, []);
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          color="transparent"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Container sx={{ py: 6 }}>
            <Divider
              orientation="vertical"
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "35%",
                zIndex: -1,
              }}
            />
            <Box
              display="flex"
              flex={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Link component={NextLink} href="#home">
                <Typography variant="h6" color="textPrimary" fontWeight="bold">
                  My Portfolio
                </Typography>
              </Link>
              <Stack direction="row" spacing={6}>
                {MENU_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    component={NextLink}
                    href={item.href}
                    className={activeHash === item.href ? "active" : ""}
                    onClick={() => setActiveHash(item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </Box>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
