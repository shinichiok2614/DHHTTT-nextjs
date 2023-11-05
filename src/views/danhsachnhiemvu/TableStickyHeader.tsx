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
import { useAppDispatch, useAppSelector } from 'src/_redux/hooks'
import { NhiemVuSelector, nhiemvuAction } from 'src/_redux/features/nhiemvu'
import React from 'react'
import { Button, Chip } from '@mui/material'
import { IRowsNhiemVu } from 'src/types/nhiemvu'
import { setSelectedNhiemvuId } from 'src/_redux/features/nhiemvuSelect'
interface Column {
  id:
    | 'action'
    | 'tenNhiemVu'
    | 'idNoiDung'
    | 'idNguoiGiao'
    | 'ngayGiao'
    | 'thoiHan'
    | 'idTinhTrang'
    | 'idChuDe'
    | 'idDonViNhan'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  {
    id: 'action',
    label: 'Action',
    minWidth: 100,
    align: 'right'
    // format: (value: number) => value.toFixed(2)
  },
  { id: 'tenNhiemVu', label: 'Tên nhiệm vụ', minWidth: 100, align: 'right' },
  { id: 'idNoiDung', label: 'Nội dung', minWidth: 100, align: 'right' },
  {
    id: 'idNguoiGiao',
    label: 'Người giao',
    minWidth: 100,
    align: 'right'
    // format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'ngayGiao',
    label: 'Ngày giao',
    minWidth: 100,
    align: 'right'
    // format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'thoiHan',
    label: 'Thời hạn',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toFixed(2)
  },
  {
    id: 'idTinhTrang',
    label: 'Tình trạng',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toFixed(2)
  },
  {
    id: 'idChuDe',
    label: 'Chủ đề',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toFixed(2)
  },
  {
    id: 'idDonViNhan',
    label: 'Đơn vị nhận',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toFixed(2)
  }
]

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
  const rows: IRowsNhiemVu[] = nhiemvuSelector.data
  const nhiemvuSelect = useAppSelector((state: any) => state.nhiemvuSelect.selectedNhiemvuId)
  const handleNhan = (id: number) => {
    dispatch(setSelectedNhiemvuId(id))
  }
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
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1}>
                  <TableCell>
                    <Button variant='contained' sx={{ color: 'white' }} onClick={() => handleNhan(row.id)}>
                      Nhận
                    </Button>
                  </TableCell>
                  <TableCell>{row.tenNhiemVu}</TableCell>
                  <TableCell>{row.NoiDung.tenBaiDang}</TableCell>
                  <TableCell>
                    {row.Person.firstName} <br /> {row.Person.lastName}
                  </TableCell>
                  {/* <TableCell>{row.ngayGiao}</TableCell> */}
                  <TableCell>
                    {`${new Date(row.ngayGiao).toLocaleDateString()}`}
                    <br />
                    {`${new Date(row.ngayGiao).toLocaleTimeString()}`}
                  </TableCell>

                  <TableCell>
                    {`${new Date(row.thoiHan).toLocaleDateString()}`}
                    <br />
                    {`${new Date(row.thoiHan).toLocaleTimeString()}`}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={row.TinhTrang.name}
                      color={'warning'}
                      sx={{
                        'height': 24,
                        'fontSize': '0.75rem',
                        'textTransform': 'capitalize',
                        '& .MuiChip-label': { fontWeight: 500 }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    {row.ChuDeNhan.map((chuDeNhan, index) => (
                      // <React.Fragment key={index}>
                      //   {chuDeNhan.ChuDe.name}
                      //   <br />
                      // </React.Fragment>
                      <Chip
                        label={chuDeNhan.ChuDe.name}
                        color={'info'}
                        sx={{
                          'height': 24,
                          'fontSize': '0.75rem',
                          'textTransform': 'capitalize',
                          '& .MuiChip-label': { fontWeight: 500 }
                        }}
                      />
                    ))}
                  </TableCell>
                  <TableCell>
                    {row.DonViNhan.map((donViNhan, index) => (
                      <React.Fragment key={index}>
                        {donViNhan.DonVi.name}
                        <br />
                      </React.Fragment>
                    ))}
                  </TableCell>
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
