import { useDataTableState } from "@/context/DataTableContext";
import { useRootState } from "@/context/RootStateContext";
import { useEffect, useState } from "react";

export default function FilterForm({ index, keys = 'name', isUserData }) {
  const { globalState } = useRootState()
  const { setData } = useDataTableState();
  const [term, setTerm] = useState('');

  useEffect(() => {
    const searchKeys = Array.isArray(keys) ? keys : [keys];
    if (!isUserData) {
      setData(globalState[index]?.filter(item =>
        searchKeys.some(key => item[key].toLowerCase().includes(term.toLowerCase()))
      ) || []);
    } else {
      if (globalState.user) {
        setData(globalState.user[index]?.filter(item =>
          searchKeys.some(key => item[key].toLowerCase().includes(term.toLowerCase()))
        ) || []);
      } else {
        setData([]);
      }
    }
  }, [term]);

  return (
    <form className="input-group mb-3">
      <input type="search" value={term} onChange={e => setTerm(e.target.value)} className="form-control" placeholder="Type to search..." />
    </form>
  );
}