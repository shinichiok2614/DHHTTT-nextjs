// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { DemoGrid } from 'src/views/typography/TypographyHeadings'

const Dashboard = () => {
  return (
    <Card>
      {/* <CardHeader title='Headings' titleTypographyProps={{ variant: 'h6' }} /> */}
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
            {/* <Typography>H1</Typography> */}
          </Grid>
          <DemoGrid item xs={12} sm={10}>
            <Typography variant='h2' sx={{ marginBottom: 2 }}>
              INFORMATION OPERATING SYSTEM
            </Typography>
            <Typography variant='h3' sx={{ marginBottom: 2 }}>
              HỆ THỐNG ĐIỀU HÀNH THÔNG TIN
            </Typography>
            {/* <Typography variant='body2'>font-size: 96px / line-height: 112px / font-weight: 500</Typography> */}
            <Typography variant='body1'>Giáo viên hướng dẫn: Nguyễn Mạnh Hùng</Typography>
            <Typography variant='body1'>Nhóm 5</Typography>
            <Typography variant='body1'>Học viên thực hiện: Phạm Quang Duẩn - Trần Nguyễn Minh Tuấn</Typography>
            <Typography variant='body1'>Lớp: CNTT12</Typography>
          </DemoGrid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Dashboard
