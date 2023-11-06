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
import { Box, Button, Chip, FormControl, MenuItem, Modal, Select, Typography } from '@mui/material'
import { IRowsNhiemVu } from 'src/types/nhiemvu'
import { setSelectedNhiemvuId } from 'src/_redux/features/nhiemvuSelect'
import { PersonAllSelector, personAllAction } from 'src/_redux/features/personAll'
import { ListPersonRow } from 'src/types/person'
import { UserAllSelector, userAllAction } from 'src/_redux/features/userAll'
import { setSelectedUserAllId } from 'src/_redux/features/userAllSelect'
interface Column {
  id: 'name' | 'idDonVi' | 'idUser' | 'select' | 'update'
  label: string
  minWidth?: number
  align?: 'center'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  {
    id: 'name',
    label: 'Họ tên',
    minWidth: 100,
    align: 'center'
    // format: (value: number) => value.toFixed(2)
  },
  { id: 'idDonVi', label: 'Đơn vị', minWidth: 100, align: 'center' },
  {
    id: 'idUser',
    label: 'Tài khoản',
    minWidth: 100,
    align: 'center'
    // format: (value: number) => value.toLocaleString('en-US')
  },
  { id: 'select', label: 'Chọn tài khoản', minWidth: 100, align: 'center' },
  { id: 'update', label: 'Lưu', minWidth: 100, align: 'center' }
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
    dispatch(personAllAction())
    dispatch(userAllAction())
  }, [dispatch])
  const nhiemvuSelector = NhiemVuSelector()
  // console.log('nhiemvuSelector.data')
  // console.log(nhiemvuSelector.data)
  // const rows: IRowsNhiemVu[] = nhiemvuSelector.data
  const nhiemvuSelect = useAppSelector((state: any) => state.nhiemvuSelect.selectedNhiemvuId)
  const handleNhan = (id: number) => {
    dispatch(setSelectedNhiemvuId(id))
  }

  const personAllSelector = PersonAllSelector()
  // console.log('personAllSelector')
  // console.log(personAllSelector)
  // console.log(personAllSelector.data)

  const userAllSelector = UserAllSelector()
  // console.log('userAllSelector.data')
  // console.log(userAllSelector.data)

  const rows: ListPersonRow = personAllSelector.data

  const [openModal, setOpenModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const handleSelectUser = user => {
    console.log(user)
    setSelectedUser(user)
    dispatch(setSelectedUserAllId(user))
  }
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
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
              // console.log('row')
              // console.log(row)
              return (
                <TableRow hover role='checkbox' tabIndex={-1}>
                  <TableCell>
                    {row.firstName}/{row.lastName}
                  </TableCell>
                  <TableCell align='center'>{row.DonVi.name}</TableCell>
                  <TableCell align='center'>
                    {row.User?.email} {selectedUser?.email}
                  </TableCell>
                  <TableCell>
                    <Button onClick={handleOpenModal} variant='contained'>Chọn tài khoản</Button>
                  </TableCell>
                  <TableCell>
                    <Button variant='contained'>Cập nhật</Button>
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
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Chọn tài khoản
          </Typography>
          <FormControl fullWidth>
            <Select
              defaultValue=''
              id='form-layouts-separator-select-unit'
              labelId='form-layouts-separator-select-label-unit'
              onChange={e => handleSelectUser(userAllSelector.data.find(user => user.id === e.target.value))}
            >
              {userAllSelector.data.map(user => (
                <MenuItem key={user.id} value={user.id}>
                  {user.email}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Modal>
    </Paper>
  )
}

export default TableStickyHeader
