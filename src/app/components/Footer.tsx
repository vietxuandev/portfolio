"use client";
import {
  Button,
  Container,
  ContainerProps,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { MENU_ITEMS } from "../constants";
import { Icon } from "./Icon";

export function Footer({ sx, ...props }: ContainerProps) {
  return (
    <Container
      component="footer"
      sx={{
        pt: 10,
        pb: 6,
        ...sx,
      }}
      {...props}
    >
      <Stack direction="row" spacing={2} justifyContent="center" mb={5}>
        {MENU_ITEMS.map((item) => (
          <Button
            key={item.href}
            component={Link}
            href={item.href}
            {...(item.icon && { startIcon: <Icon name={item.icon} /> })}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
      <Stack direction="row" spacing={3} justifyContent="center" mb={5}>
        <IconButton>
          <Icon name="facebook" />
        </IconButton>
        <IconButton>
          <Icon name="instagram" />
        </IconButton>
        <IconButton>
          <Icon name="twitter" />
        </IconButton>
        <IconButton>
          <Icon name="youtube" />
        </IconButton>
      </Stack>
      <Typography color="textDisabled" textAlign="right">
        Terms of Service - Privacy Policy
      </Typography>
    </Container>
  );
}
