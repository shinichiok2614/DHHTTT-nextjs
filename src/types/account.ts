interface ILoginParam {
  username: string
  password: string
}
interface IAccountInfo {
  username: string
  active: boolean
  role: string
  email: string
}
export default IAccountInfo
export type { ILoginParam }
