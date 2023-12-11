import DataTable, { createTheme } from "react-data-table-component";
import { useDataTableState } from "@/context/DataTableContext";
import { DeleteDataTableModalButton } from "@/components/deleteModal";
import { ModalButton } from "@/components/fomModal";
import RefreshingPage from "../refreshingPage";

export default function CardsTable({ index, singular }) {

  const { data, isFetching } = useDataTableState();

  createTheme('weboender', {
    text: {
      primary: '#065758',
      secondary: '#82c3c5',
    },
  })

  const columns = [
    {
      name: '#',
      sortable: true,
      selector: row => row.num,
    },
    {
      name: 'Name',
      sortable: true,
      selector: row => row.name,
    },
    {
      name: 'Card Number',
      sortable: true,
      selector: row => row.number,
    },
    {
      name: 'CVV',
      sortable: true,
      selector: row => row.cvv,
    },
    {
      name: 'Expiry Date',
      sortable: true,
      selector: row => `${row.month} / ${row.year}`,
    },
    {
      name: 'Actions',
      cell: row => (
        <>
          <ModalButton data={row} singular={singular}></ModalButton>
          <DeleteDataTableModalButton data={row} />
        </>
      )
    },
  ];

  return <RefreshingPage index={index} isUserData={true}>
    <DataTable columns={columns} data={data.map((row, index) => { return { ...row, num: index + 1 } })} progressComponent={'Please wait...'} progressPending={isFetching} paginationRowsPerPageOptions={[5, 10, 100]} paginationPerPage={5} theme='weboender' pagination />
  </RefreshingPage>;
}