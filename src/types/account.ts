interface ILoginParam {
  username: string
  password: string
}
interface IAccountInfo {
  // username: string
  // active: boolean
  // role: string
  email: string
  createdAt: string
  updatedAt: string
  idAdmin: number
}
export default IAccountInfo
export type { ILoginParam }
