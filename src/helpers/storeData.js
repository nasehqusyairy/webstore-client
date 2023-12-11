import http from "./http";

export default function storeData({ formData, index, singular, globalState, setGlobalState, setData, setIsCompleted, setIsSending, setError, resetForm, isUserData = false }) {

  const axiosConfig = {
    headers: {
      'Authorization': `Bearer ${globalState.token}`,
      'Content-Type': 'multipart/form-data'
    }
  }

  http.post(`/${index}`, formData, axiosConfig).then(({ data }) => {
    setIsCompleted(true)
    resetForm()
    const newState = { ...globalState };
    setGlobalState(newState);
    if (isUserData) {
      newState.user[index].push(data[singular]);
      setData(newState.user[index])
    } else {
      newState[index].push(data[singular]);
      setData(newState[index])
    }
  }).catch(err => {
    setError((err.response?.data.message || err.message) + ` (${err.response?.status})`)
  }).finally(() => {
    setIsSending(false);
  })
}
