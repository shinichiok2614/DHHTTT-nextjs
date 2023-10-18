interface ILoginParam {
  username: string
  password: string
}
interface IAccountInfo {

  // username: string
  // active: boolean
  // role: string
  email: string
  firstName: string
  lastName: string
  createdAt: string
  updatedAt: string
  idPermission: number
  level: number
  phone: string
  dateofbirth: string
  address: string
  degree: string
  acedemicrank: string
  armyrank: string
  profilepicture: string
  bio:string
}
export default IAccountInfo
export type { ILoginParam }
