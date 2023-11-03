// ** React Imports
import { useState, ChangeEvent, useEffect } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { useAppDispatch } from 'src/_redux/hooks'
import { NhiemVuSelector, nhiemvuAction } from 'src/_redux/features/nhiemvu'

interface Column {
  id: 'tenNhiemVu' | 'idNoiDung' | 'idNguoiGiao' | 'ngayGiao' | 'thoiHan' | 'idTinhTrang' | 'idChuDe'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'tenNhiemVu', label: 'Tên nhiệm vụ', minWidth: 170 },
  { id: 'idNoiDung', label: 'Nội dung', minWidth: 100 },
  {
    id: 'idNguoiGiao',
    label: 'Người giao',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'ngayGiao',
    label: 'Ngày giao',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'thoiHan',
    label: 'Thời hạn',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2)
  },
  {
    id: 'idTinhTrang',
    label: 'Tình trạng',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2)
  },
  {
    id: 'idChuDe',
    label: 'Chủ đề',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2)
  }
]

interface Data {
  tenNhiemVu: string
  idNoiDung: string
  idNguoiGiao: string
  ngayGiao: string
  thoiHan: string
  idTinhTrang: string
  idChuDe: string
}

// function createData(name: string, code: string, population: number, size: number): Data {
//   const density = population / size

//   return { name, code, population, size, density }
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767)
// ]

const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(nhiemvuAction())
  }, [dispatch])
  const nhiemvuSelector = NhiemVuSelector()
  console.log('nhiemvuSelector.data')
  console.log(nhiemvuSelector.data)
  const rows = nhiemvuSelector.data

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody> */}
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1}>
                  <TableCell>{row.tenNhiemVu}</TableCell>
                  <TableCell>{row.idNoiDung}</TableCell>
                  <TableCell>{row.idNguoiGiao}</TableCell>
                  <TableCell>{row.ngayGiao}</TableCell>
                  <TableCell>{row.thoiHan}</TableCell>
                  <TableCell>{row.loaiTin}</TableCell>
                  <TableCell>{row.idTinhTrang}</TableCell>
                  <TableCell>{row.idChuDe}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickyHeader
