// ** React Imports
import { useState, ElementType, ChangeEvent, SyntheticEvent, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button, { ButtonProps } from '@mui/material/Button'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import { useAppDispatch } from 'src/_redux/hooks'
import { AccountSelector, getAccountInfoAction } from 'src/_redux/features/auth'
import IAccountInfo from 'src/types/account'
import { updateUser } from 'src/apis/user'
import { PersonSelector, getPersonInfoAction } from 'src/_redux/features/person'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = () => {
  // ** State
  const [openAlert, setOpenAlert] = useState<boolean>(true)
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)

      reader.readAsDataURL(files[0])
    }
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAccountInfoAction())
    dispatch(getPersonInfoAction())
  }, [dispatch])
  const accountSelector = AccountSelector()
  const personSelector = PersonSelector()
  const initialData: IAccountInfo = {
    email: '',
    createdAt: '',
    updatedAt: '',
    idAdmin: 0
  }
  // const initialDataPerson: IPersonInfo = {
  //   email: '',
  //   firstName: '',
  //   lastName: '',
  //   createdAt: '',
  //   updatedAt: '',
  //   idPermission: 1,
  //   level: 1,
  //   phone: '',
  //   dateofbirth: '',
  //   address: '',
  //   degree: '',
  //   acedemicrank: '',
  //   armyrank: '',
  //   profilepicture: ''
  // }
  const [data, setData] = useState<IAccountInfo>(initialData)
  const handleUpdate = () => {
    console.log('data')
    console.log(data)
    updateUser(data)
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel shrink={false} htmlFor='my-textfield'>
              First Name
            </InputLabel>
            <TextField
              fullWidth
              placeholder={personSelector.personData?.firstName}
              // placeholder={accountSelector.accountData?.firstName}
              // onChange={e => setData({ ...data, firstName: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel shrink={false} htmlFor='my-textfield'>
              Last Name
            </InputLabel>
            <TextField
              fullWidth
              placeholder={personSelector.personData?.lastName}
              // placeholder={accountSelector.accountData?.lastName}
              // onChange={e => setData({ ...data, lastName: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel shrink={false} htmlFor='my-textfield'>
              Email
            </InputLabel>
            <TextField fullWidth type='email' placeholder={accountSelector.accountData?.email} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel shrink={false} htmlFor='my-textfield'>
              Permission
            </InputLabel>
            <TextField fullWidth placeholder={accountSelector.accountData?.idAdmin.toString() || 'Normal'} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel shrink={false} htmlFor='my-textfield'>
              Level
            </InputLabel>
            <TextField fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel shrink={false} htmlFor='my-textfield'>
              Created At
            </InputLabel>
            <TextField
              fullWidth
              placeholder={accountSelector.accountData?.createdAt}
              value={accountSelector.loading ? 'loading' : accountSelector.accountData?.createdAt}
            />
          </Grid>

          {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert
                severity='warning'
                sx={{ '& a': { fontWeight: 400 } }}
                action={
                  <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                    <Close fontSize='inherit' />
                  </IconButton>
                }
              >
                <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
                <Link href='/' onClick={(e: SyntheticEvent) => e.preventDefault()}>
                  Resend Confirmation
                </Link>
              </Alert>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={handleUpdate}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
