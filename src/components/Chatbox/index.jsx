import { useParams } from "react-router";
import { useGetChatHistoryQuery } from "../../apis/rtkq";
import QueryComponentWrapper from "../QueryComponentWrapper";
import AIMessage from "./AIMessage";
import HumanMessage from "./HumanMessage";
import { Box } from "@mui/material";

export default function Chatbox() {
  let { sessionId } = useParams();
  if (!sessionId) alert("please check sessionId");
  const vars = useGetChatHistoryQuery(sessionId);

  return (
    <div>
      <QueryComponentWrapper
        {...vars}
        render={(chatHistory) => {
          const messages = chatHistory.messages;
          return (
            <Box>
              {messages.map((message) => {
                return message.role === "human" ? <HumanMessage content={message.content} /> : <AIMessage content={message.content} />;
              })}
            </Box>
          );
        }}></QueryComponentWrapper>
    </div>
  );
}
