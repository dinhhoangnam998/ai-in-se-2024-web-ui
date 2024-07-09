import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useGetAllSessionIdsQuery } from "../../apis/rtkq";
import QueryComponentWrapper from "../QueryComponentWrapper";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useParams } from "react-router";
import { v4 } from "uuid";

export default function Sidebar() {
  const vars = useGetAllSessionIdsQuery();
  const navigate = useNavigate();
  let { sessionId: currentSessionId } = useParams();

  return (
    <Box>
      <List>
        <ListItem>
          <ListItemButton
            onClick={() => {
              const newSessionId = v4();
              navigate(`/chat/${newSessionId}`);
            }}>
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
                  selected={sessionId === currentSessionId}
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
