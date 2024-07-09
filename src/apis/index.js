// extract error message
export function processAxiosError(error) {
  console.error(error);
  let message;
  // has response
  if (error.response) {
    const responseData = error.response.data;
    if (typeof responseData == "string") message = responseData;
    else if (responseData instanceof ArrayBuffer) message = new TextDecoder().decode(responseData);
    else message = JSON.stringify(responseData);
    // note: handle more cases if needed
  } else {
    // doesn't have response
    message = error.message;
  }
  return {
    // note: you can add more fields if needed...
    status: error?.response?.status,
    message,
  };
}

export async function handleResponsePromise(responsePromise) {
  try {
    const response = await responsePromise;
    return { data: response.data };
  } catch (err) {
    return { error: processAxiosError(err) };
  }
}
