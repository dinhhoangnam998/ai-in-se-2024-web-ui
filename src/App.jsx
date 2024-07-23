import { Box, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import Chatbox from "./components/Chatbox";
import { useEffect } from "react";
import { v4 } from "uuid";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == "/") {
      const randomSessionId = v4();
      navigate(`/chat/${randomSessionId}`);
    }
  }, [location.pathname]);

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
