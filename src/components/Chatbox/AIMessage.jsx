import { Box, Typography } from "@mui/material";

export default function AIMessage({ content }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "start", mb: 2 }}>
      <Box sx={{ bgcolor: "#f0f0f0", maxWidth: "50%", py: 1, px: 2, borderRadius: 4 }}>
        <Typography>{content}</Typography>
      </Box>
    </Box>
  );
}
