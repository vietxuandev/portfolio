import { Card as MuiCard, CardProps } from "@mui/material";

export function Card(props: CardProps) {
  return (
    <MuiCard
      sx={{ flex: 1, aspectRatio: 46 / 35, position: "relative" }}
      {...props}
    />
  );
}
