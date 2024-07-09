import { Box, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router";
import Chatbox from "./components/Chatbox";

export default function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/chat/:sessionId"
          element={
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <Box sx={{ height: "100%", minHeight: "100vh", borderRight: "2px solid grey" }}>
                  <Sidebar />
                </Box>
              </Grid>
              <Grid item xs={9}>
                <Chatbox />
              </Grid>
            </Grid>
          }></Route>
      </Routes>
    </div>
  );
}
