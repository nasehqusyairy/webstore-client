import http from "./http";

export default function refreshData(index, globalState, setData, setIsFetching, setError, callback) {
  if (globalState[index] === undefined) {
    setIsFetching(true);
    http.get('/' + index, {
      headers: {
        Authorization: `Bearer ${globalState.token}`
      }
    }).then(({ data }) => {
      callback(data)
    }).catch(err => {
      setError((err.response?.data.message || err.message) + ` (${err.response?.status})`)
    }).finally(() => {
      setIsFetching(false);
    })
  } else {
    setIsFetching(false);
    setData(globalState[index]);
  }
}

export function refreshUser(index, globalState, setData, setIsFetching, setError, callback) {

  if (globalState.user) {
    if (globalState.user[index] === undefined) {
      setIsFetching(true);
      http.get('/user/' + index, {
        headers: {
          Authorization: `Bearer ${globalState.token}`
        }
      }).then(({ data }) => {
        callback(data)
      }).catch(err => {
        setError((err.response?.data.message || err.message) + ` (${err.response?.status})`)
      }).finally(() => {
        setIsFetching(false);
      })
    } else {
      setIsFetching(false);
      setData(globalState.user[index]);
    }
  } else {
    setIsFetching(false);
    setData([]);
    setError('User data not found');
  }

}