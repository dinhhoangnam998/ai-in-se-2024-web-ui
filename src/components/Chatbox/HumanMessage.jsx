import { Box, Typography } from "@mui/material";

export default function HumanMessage({ content }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "end", mb: 2 }}>
      <Box sx={{ bgcolor: "rgb(0, 132, 255)", maxWidth: "50%", py: 1, px: 2, borderRadius: 4, color: "white" }}>
        <Typography>{content}</Typography>
      </Box>
    </Box>
  );
}
