import SendIcon from "@mui/icons-material/Send";
import { Box, CircularProgress, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import { useChatMutation } from "../../apis/rtkq";
import useHandleError from "../../hooks/useHandleError";

export default function InputBox() {
  let { sessionId } = useParams();
  const [sendChat, { isLoading }] = useChatMutation();
  const [question, setQuestion] = useState("");
  const { handleError } = useHandleError();

  async function sendChatToServer() {
    sendChat({ question, sessionId }).unwrap().then(setQuestion("")).catch(handleError);
  }

  return (
    <div>
      {/* chat input */}
      <Box sx={{ p: 2 }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <TextField
            fullWidth
            placeholder="Enter text"
            value={question}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendChatToServer();
            }}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton color="primary" onClick={sendChatToServer}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}></TextField>
        )}
      </Box>
    </div>
  );
}
