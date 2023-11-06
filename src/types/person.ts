interface IPersonInfo {
  id: number
  firstName: string
  lastName: string
  level: string
  phone: string
  dateofbirth: string
  address: string
  degree: string
  acedemicrank: string
  armyrank: string
  profilepicture: string
  bio: string
  languages: string
  gender: string
  idDonVi: string
  idUser: string
}
interface IPersonRow {
  id: number
  firstName: string
  lastName: string
  level: string
  phone: string
  dateofbirth: string
  address: string
  degree: string
  acedemicrank: string
  armyrank: string
  profilepicture: string
  bio: string
  languages: string
  gender: string
  idDonVi: string
  idUser: string
  DonVi: {
    name: string
  }
  User: {
    email: string
  }
}
export type ListPerson=IPersonInfo[]
export type ListPersonRow = IPersonRow[]
export default IPersonInfo
