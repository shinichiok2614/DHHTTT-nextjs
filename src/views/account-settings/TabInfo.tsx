// ** React Imports
import { forwardRef, useEffect, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { useAppDispatch } from 'src/_redux/hooks'
import { AccountSelector, getAccountInfoAction } from 'src/_redux/features/auth'
import IAccountInfo from 'src/types/account'
import { updateUser } from 'src/apis/user'
import { PersonSelector, getPersonInfoAction } from 'src/_redux/features/person'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const TabInfo = () => {
  // ** State
  const [date, setDate] = useState<Date | null | undefined>(null)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAccountInfoAction())
  }, [dispatch])
  const accountSelector = AccountSelector()

  const initialData: IAccountInfo = {
    email: '',
    firstName: '',
    lastName: '',
    createdAt: '',
    updatedAt: '',
    idPermission: 1,
    level: 1,
    phone: '',
    dateofbirth: '',
    address: '',
    degree: '',
    acedemicrank: '',
    armyrank: '',
    profilepicture: '',
    bio: ''
  }
  const [data, setData] = useState<IAccountInfo>(initialData)
  const handleUpdate = () => {
    console.log('data')
    console.log(data)
    updateUser(data)
  }
  useEffect(() => {
    dispatch(getPersonInfoAction())
  }, [])
  const personSelector = PersonSelector()
  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8 }}>
            <InputLabel>Bio</InputLabel>
            <TextField
              fullWidth
              multiline
              // label='Bio'
              minRows={2}
              placeholder={personSelector.personData?.bio}
              // placeholder={accountSelector.accountData?.bio}

              // placeholder='Bio'
              // defaultValue='The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant 😎, scalable 😀, and lightning 😍 fast search and discovery experiences.'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePickerWrapper>
              <InputLabel>Birth Date</InputLabel>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                id='account-settings-date'
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                onChange={(date: Date) => setDate(date)}
              />
            </DatePickerWrapper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Phone</InputLabel>
            <TextField fullWidth type='number' placeholder={personSelector.personData?.phone} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Address</InputLabel>
            <TextField
              fullWidth
              // label='Website'
              placeholder={personSelector.personData?.address}
              // placeholder='https://example.com/'
              // defaultValue='https://themeselection.com/'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <FormControl fullWidth> */}
            <InputLabel>Degree</InputLabel>
            <TextField
              fullWidth
              // label='Website'
              placeholder={personSelector.personData?.address}
              // placeholder='https://example.com/'
              // defaultValue='https://themeselection.com/'
            />
            {/* <Select label='Country' defaultValue='USA'>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='Australia'>Australia</MenuItem>
                <MenuItem value='Germany'>Germany</MenuItem>
              </Select> */}
            {/* </FormControl> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Acedemic Rank</InputLabel>
            <TextField fullWidth placeholder={personSelector.personData?.acedemicrank} />
            <Select
              multiple
              defaultValue={['Professor']}
              // defaultValue={[personSelector.personData?.acedemicrank]}
              id='account-settings-multiple-select'
              labelId='account-settings-multiple-select-label'
              input={<OutlinedInput label='Languages' id='select-multiple-language' />}
            >
              <MenuItem value='Professor'>Professor</MenuItem>
              <MenuItem value='French'>French</MenuItem>
              <MenuItem value='Spanish'>Spanish</MenuItem>
              <MenuItem value='Portuguese'>Portuguese</MenuItem>
              <MenuItem value='Italian'>Italian</MenuItem>
              <MenuItem value='German'>German</MenuItem>
              <MenuItem value='Arabic'>Arabic</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-multiple-select-label'>Languages</InputLabel>
              <Select
                multiple
                defaultValue={['English']}
                id='account-settings-multiple-select'
                labelId='account-settings-multiple-select-label'
                input={<OutlinedInput label='Languages' id='select-multiple-language' />}
              >
                <MenuItem value='English'>English</MenuItem>
                <MenuItem value='French'>French</MenuItem>
                <MenuItem value='Spanish'>Spanish</MenuItem>
                <MenuItem value='Portuguese'>Portuguese</MenuItem>
                <MenuItem value='Italian'>Italian</MenuItem>
                <MenuItem value='German'>German</MenuItem>
                <MenuItem value='Arabic'>Arabic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel sx={{ fontSize: '0.875rem' }}>Gender</FormLabel>
              <RadioGroup row defaultValue='male' aria-label='gender' name='account-settings-info-radio'>
                <FormControlLabel value='male' label='Male' control={<Radio />} />
                <FormControlLabel value='female' label='Female' control={<Radio />} />
                <FormControlLabel value='other' label='Other' control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={handleUpdate}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={() => setDate(null)}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabInfo
