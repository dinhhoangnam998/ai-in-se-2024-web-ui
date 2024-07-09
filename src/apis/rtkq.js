import { api } from "../store/api";
import { ChatHistoryTag, SessionsTag } from "../store/api";
import { chat, fetchAllSessionIds, fetchChatHistory } from "./apis";

export const appApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllSessionIds: build.query({
      queryFn: () => fetchAllSessionIds(),
      providesTags: [SessionsTag],
    }),
    getChatHistory: build.query({
      queryFn: (sessionId) => fetchChatHistory(sessionId),
      providesTags: [ChatHistoryTag],
    }),
    chat: build.mutation({
      queryFn: ({ question, sessionId }) => chat(question, sessionId),
      invalidatesTags: [ChatHistoryTag, SessionsTag],
    }),
  }),
});

export const { useGetAllSessionIdsQuery, useGetChatHistoryQuery, useChatMutation } = appApi;
