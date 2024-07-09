import { Box } from "@mui/material";
import { useParams } from "react-router";
import { useGetChatHistoryQuery } from "../../apis/rtkq";
import QueryComponentWrapper from "../QueryComponentWrapper";
import AIMessage from "./AIMessage";
import HumanMessage from "./HumanMessage";
import InputBox from "./InputBox";

export default function Chatbox() {
  let { sessionId } = useParams();
  if (!sessionId) alert("please check sessionId");
  const vars = useGetChatHistoryQuery(sessionId);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", p: 2 }}>
      <Box sx={{ flexGrow: 1, overflow: "scroll" }}>
        {/* chat history */}
        <QueryComponentWrapper
          {...vars}
          render={(chatHistory) => {
            if (!chatHistory || chatHistory.length == 0) return <div></div>;
            const messages = chatHistory.messages;
            return (
              <Box>
                {messages.map((message) => {
                  return message.role === "human" ? <HumanMessage content={message.content} /> : <AIMessage content={message.content} />;
                })}
              </Box>
            );
          }}></QueryComponentWrapper>
      </Box>

      <InputBox />
    </Box>
  );
}
