// const NhanNhiemVuPage = () => {
//   return <div>sasdfasdf</div>

import Grid from '@mui/material/Grid'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import FormLayoutsSeparator from 'src/views/nhannhiemvu/FormLayoutsSeparator'

// }
const NhanNhiemVuPage = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FormLayoutsSeparator />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}
export default NhanNhiemVuPage
