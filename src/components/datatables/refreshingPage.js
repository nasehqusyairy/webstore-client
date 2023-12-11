import { useDataTableState } from "@/context/DataTableContext";
import { useRootState } from "@/context/RootStateContext";
import refreshData, { refreshUser } from "@/helpers/refresh";
import { useEffect } from "react";

function RefreshingPage({ children, index, isUserData }) {

  const { globalState, setGlobalState, setError } = useRootState();
  const { setIsFetching, setData } = useDataTableState();


  useEffect(() => {
    if (!isUserData) {
      refreshData(index, globalState, setData, setIsFetching, setError, (resData) => {
        const newState = { ...globalState };
        newState[index] = resData[index];
        setGlobalState(newState)
        setData(resData[index]);
      });
    } else {
      refreshUser(index, globalState, setData, setIsFetching, setError, (resData) => {
        const newState = { ...globalState };
        newState.user[index] = resData[index];
        setGlobalState(newState)
        setData(resData[index]);
      });
    }
  }, [globalState]);

  return (<>{children}</>);
}

export default RefreshingPage;