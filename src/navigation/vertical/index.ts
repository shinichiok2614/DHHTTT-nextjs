// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    // {
    //   title: 'Dashboard',
    //   icon: HomeOutline,
    //   path: '/'
    // },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: false
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: false
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: false
    },
    {
      sectionTitle: 'Nhiệm vụ'
    },
    {
      title: 'Giao nhiệm vụ',
      icon: AccountPlusOutline,
      path: '/giaonhiemvu'
    },
    {
      title: 'Nhận nhiệm vụ',
      icon: AccountPlusOutline,
      path: '/nhannhiemvu'
    },
    {
      title: 'Danh sách nhiệm vụ',
      icon: AccountPlusOutline,
      path: '/danhsachnhiemvu'
    },
    {
      sectionTitle: 'Báo cáo'
    },

    {
      title: 'Báo cáo cấp trên',
      icon: AccountPlusOutline
    },
    {
      sectionTitle: 'Thống kê'
    },
    {
      title: 'Thống kê báo cáo cấp dưới',
      icon: AccountPlusOutline,
      path: '/thongkebaocaocapduoi'
    },
    {
      sectionTitle: 'Cá nhân'
    },
    {
      title: 'Đăng bài',
      icon: AccountPlusOutline,
      path: '/dangbai'
    },
    {
      sectionTitle: 'Admin'
    },
    {
      title: 'Phân quyền',
      icon: AccountPlusOutline
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
