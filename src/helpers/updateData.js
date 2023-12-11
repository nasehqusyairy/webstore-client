import http from "./http";

export default function updateData({ formData, index, singular, detail, globalState, setGlobalState, setData, setIsCompleted, setIsSending, setError, callback, isUserData = false }) {

  callback = callback || (() => { });

  const axiosConfig = {
    headers: {
      'Authorization': `Bearer ${globalState.token}`,
      'Content-Type': 'multipart/form-data'
    }
  }

  formData.append('_method', 'PUT');
  http.post(`/${index}/` + detail.id, formData, axiosConfig).then(({ data }) => {
    callback()
    setIsCompleted(true)
    const newState = { ...globalState };
    setGlobalState(newState);
    if (isUserData) {
      newState.user[index] = newState.user[index].map((resData) => resData.id === data[singular].id ? data[singular] : resData);
      setData(newState.user[index])
    } else {
      newState[index] = newState[index].map((resData) => resData.id === data[singular].id ? data[singular] : resData);
      setData(newState[index])
    }
  }).catch(err => {
    setError((err.response?.data.message || err.message) + ` (${err.response?.status})`)
  }).finally(() => {
    setIsSending(false);
  })
}