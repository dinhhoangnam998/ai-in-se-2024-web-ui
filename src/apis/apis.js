import { handleResponsePromise } from ".";
import { axs } from "../config/axios";

export async function fetchAllSessionIds() {
  const promise = axs.get(`/all-session-ids`);
  return handleResponsePromise(promise);
}

export async function fetchChatHistory(sessionId) {
  const promise = axs.get(`/chat-history?session_id=${sessionId}`);
  return handleResponsePromise(promise);
}

export async function chat(question, sessionId) {
  const promise = axs.get(`/chat?session_id=${sessionId}&question=${question}`);
  return handleResponsePromise(promise);
}