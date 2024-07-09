import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useGetAllSessionIdsQuery } from "../../apis/rtkq";
import QueryComponentWrapper from "../QueryComponentWrapper";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";

export default function Sidebar() {
  const vars = useGetAllSessionIdsQuery();
  const navigate = useNavigate();

  return (
    <Box>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Create new chat" />
          </ListItemButton>
        </ListItem>
        <QueryComponentWrapper
          {...vars}
          render={(sessionIds) => {
            if (!sessionIds) return <div />;
            return sessionIds.map((sessionId) => (
              <ListItem disablePadding key={sessionId}>
                <ListItemButton
                  onClick={() => {
                    navigate(`/chat/${sessionId}`);
                  }}>
                  <ListItemText primary={sessionId} />
                </ListItemButton>
              </ListItem>
            ));
          }}
        />
      </List>
    </Box>
  );
}
