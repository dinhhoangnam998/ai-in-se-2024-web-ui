import { api } from "../store/api";
import { ChatHistoryTag, SessionsTag } from "../store/api";
import { fetchAllSessionIds, fetchChatHistory } from "./apis";

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
  }),
});

export const { useGetAllSessionIdsQuery, useGetChatHistoryQuery } = appApi;
