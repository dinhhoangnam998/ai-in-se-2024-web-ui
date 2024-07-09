import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SessionsTag = "Sessions";
export const ChatHistoryTag = "ChatHistory";

export const api = createApi({
  reducerPath: "rtkq/apis",
  baseQuery: fetchBaseQuery,
  tagTypes: [SessionsTag, ChatHistoryTag],
  endpoints: () => ({}),
});
