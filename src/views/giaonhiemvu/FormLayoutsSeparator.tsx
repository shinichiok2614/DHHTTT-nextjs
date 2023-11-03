// ** React Imports
import { ChangeEvent, forwardRef, MouseEvent, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

interface State {
  password: string
  password2: string
  showPassword: boolean
  showPassword2: boolean
}

const CustomInputNgayGiao = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Ngày giao' autoComplete='off' />
})
const CustomInputHanXuLy = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Hạn xử lý' autoComplete='off' />
})

const FormLayoutsSeparator = () => {
  // ** States
  const [language, setLanguage] = useState<string[]>([])
  const [date, setDate] = useState<Date | null | undefined>(null)
  const [values, setValues] = useState<State>({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Password
  const handlePasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }
  const handleMouseDownConfirmPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle Select
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const handleTopicSelect = (event: SelectChangeEvent<string>) => {
    setSelectedTopics([...selectedTopics, event.target.value as string])
    setOpen(false)
  }
  const handleTopicRemove = (topic: string) => {
    setSelectedTopics(selectedTopics.filter(t => t !== topic))
  }
  const [openUnit, setOpenUnit] = useState(false)
  const [selectedUnits, setSelectedUnits] = useState<string[]>([])
  // Thêm hàm xử lý khi chọn đơn vị
  const handleUnitSelect = (event: SelectChangeEvent<string>) => {
    // Cập nhật đơn vị đã chọn tại đây
    setSelectedUnits([...selectedUnits, event.target.value as string])
    setOpenUnit(false)
  }

  // Thêm hàm xử lý khi đóng modal
  const handleCloseUnit = () => {
    setOpenUnit(false)
  }
  const handleUnitRemove = (unitToRemove: string) => {
    setSelectedUnits(selectedUnits.filter(unit => unit !== unitToRemove))
  }
  return (
    <Card>
      <CardHeader title='Giao nhiệm vụ' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Nhiệm vụ
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Tên nhiệm vụ</InputLabel>
              <TextField fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Người giao</InputLabel>
              <FormControl fullWidth>
                <Select
                  // label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField label='Nội dung' fullWidth multiline minRows={3} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel>Chủ đề</InputLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              {selectedTopics.map(topic => (
                <div key={topic}>
                  <span>{topic}</span>
                  <Button onClick={() => handleTopicRemove(topic)}>Xóa</Button>
                </div>
              ))}
              <Button variant='contained' color='primary' onClick={() => setOpen(true)}>
                Thêm
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Chọn chủ đề</DialogTitle>
                <DialogContent>
                  <FormControl fullWidth>
                    <Select
                      defaultValue=''
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'
                      onChange={handleTopicSelect}
                    >
                      <MenuItem value='Chủ đề 1'>Chủ đề 1</MenuItem>
                      <MenuItem value='Chủ đề 2'>Chủ đề 2</MenuItem>
                      <MenuItem value='Chủ đề 3'>Chủ đề 3</MenuItem>
                    </Select>
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color='primary'>
                    Đóng
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Thời gian nhiệm vụ
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <InputLabel>Ngày giao</InputLabel> */}
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInputNgayGiao />}
                id='form-layouts-separator-date'
                onChange={(date: Date) => setDate(date)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <InputLabel>Hạn xử lý</InputLabel> */}
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInputHanXuLy />}
                id='form-layouts-separator-date'
                onChange={(date: Date) => setDate(date)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                3. Đơn vị nhận:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              {selectedUnits.map((unit, index) => (
                <div key={index}>
                  <span>{unit}</span>
                  <Button onClick={() => handleUnitRemove(unit)}>Xóa</Button>
                </div>
              ))}
              <Button variant='contained' color='primary' onClick={() => setOpenUnit(true)}>
                Thêm
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>
      <Modal
        open={openUnit}
        onClose={handleCloseUnit}
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
            Chọn đơn vị
          </Typography>
          <FormControl fullWidth>
            <Select
              defaultValue=''
              id='form-layouts-separator-select-unit'
              labelId='form-layouts-separator-select-label-unit'
              onChange={handleUnitSelect}
            >
              <MenuItem value='Đơn vị 1'>Đơn vị 1</MenuItem>
              <MenuItem value='Đơn vị 2'>Đơn vị 2</MenuItem>
              <MenuItem value='Đơn vị 3'>Đơn vị 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Modal>
    </Card>
  )
}

export default FormLayoutsSeparator
