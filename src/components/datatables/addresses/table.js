import DataTable, { createTheme } from "react-data-table-component";
import { useDataTableState } from "@/context/DataTableContext";
import { DeleteDataTableModalButton } from "@/components/deleteModal";
import { ModalButton } from "@/components/fomModal";
import RefreshingPage from "../refreshingPage";

export default function AddressesTable({ index, singular }) {

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
      name: 'Place Name',
      sortable: true,
      selector: row => row.name,
    },
    {
      name: 'PO. Box Number',
      sortable: true,
      selector: row => row.number,
    },
    {
      name: 'Street Name',
      sortable: true,
      selector: row => row.street,
    },
    {
      name: 'City',
      sortable: true,
      selector: row => row.city,
    },
    {
      name: 'Province',
      sortable: true,
      selector: row => row.province,
    },
    {
      name: 'Zip Code',
      sortable: true,
      selector: row => row.zip_code,
    },
    {
      name: 'State',
      sortable: true,
      selector: row => row.state,
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
    <DataTable columns={columns} data={data?.map((row, index) => { return { ...row, num: index + 1 } }) || []} progressComponent={'Please wait...'} progressPending={isFetching} paginationRowsPerPageOptions={[5, 10, 100]} paginationPerPage={5} theme='weboender' pagination />
  </RefreshingPage>;
}