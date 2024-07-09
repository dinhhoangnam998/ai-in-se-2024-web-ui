import { Box, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router";
import Chatbox from "./components/Chatbox";

export default function App() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box sx={{ height: "100vh", borderRight: "2px solid grey" }}>
            <Sidebar />
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route path="/chat/:sessionId" element={<Chatbox />}></Route>
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}
