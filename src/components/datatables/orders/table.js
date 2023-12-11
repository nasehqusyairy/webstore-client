import DataTable, { createTheme } from "react-data-table-component";
import { useDataTableState } from "@/context/DataTableContext";
import { DeleteDataTableModalButton } from "@/components/deleteModal";
import RefreshingPage from "../refreshingPage";
import Link from "next/link";
import { toRupiah } from "@/helpers/rupiah";

export default function OrdersTable({ index }) {
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
      name: 'ID',
      sortable: true,
      selector: row => row.id,
    },
    {
      name: 'Card Number',
      sortable: true,
      selector: row => row.card.number,
    },
    {
      name: 'Address',
      sortable: true,
      selector: row => row.address.name,
      cell: row => Object.entries(row.address)
        .filter(([key, value]) => !['user_id', 'id', 'created_at', 'updated_at'].includes(key) && value !== null && value !== undefined)
        .map(([key, value]) => value)
        .join(', ')
    },
    {
      name: 'Shipping',
      sortable: true,
      selector: row => row.shipping.name,
    },
    {
      name: 'Total',
      sortable: true,
      selector: row => row.total,
      cell: row => toRupiah(row.total)
    },
    {
      name: 'Status',
      sortable: true,
      selector: row => row.status,
    },
    {
      name: 'Actions',
      cell: row => (
        <>
          <Link className='btn btn-info btn-sm me-1' href={`/myorders/${row.id}/`}><i className="bi bi-eye"></i></Link>
        </>
      )
    },
  ];

  return <RefreshingPage index={index} isUserData={true}>
    <DataTable columns={columns} data={data?.map((row, index) => { return { ...row, num: index + 1 } }) || []} progressComponent={'Please wait...'} progressPending={isFetching} paginationRowsPerPageOptions={[5, 10, 100]} paginationPerPage={5} theme='weboender' pagination />
  </RefreshingPage>;
}