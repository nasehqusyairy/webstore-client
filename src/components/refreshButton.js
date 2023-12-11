import { useDataTableState } from "@/context/DataTableContext";
import { useRootState } from "@/context/RootStateContext";

export default function RefreshButton({ index, isUserData }) {
  const { globalState, setGlobalState } = useRootState();
  const { isFetching } = useDataTableState();

  const refresh = () => {
    const newState = { ...globalState };
    if (Array.isArray(index)) {
      index.forEach(i => {
        if (isUserData) {
          newState.user[i] = undefined;
        } else {
          newState[i] = undefined;
        }
      });
    } else {
      if (isUserData) {
        newState.user[index] = undefined;
      } else {
        newState[index] = undefined;
      }
    }
    setGlobalState(newState);
  }

  return <button className="btn btn-secondary" disabled={isFetching} onClick={refresh}>{isFetching ? 'Refreshing...' : 'Refresh'}</button>
};