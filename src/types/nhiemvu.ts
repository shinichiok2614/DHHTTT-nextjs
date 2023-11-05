export interface INhiemVu {
  tenNhiemVu: string
  idNoiDung: number
  idNguoiGiao: number
  ngayGiao: string
  thoiHan: string
  loaiTin: string
  idTinhTrang: number
  idChuDe: number
}
export interface IRowsNhiemVu {
  id: number
  action: number
  tenNhiemVu: string
  idNoiDung: string
  idNguoiGiao: number
  ngayGiao: string
  thoiHan: number
  idTinhTrang: number
  idChuDe: number
  idDonViNhan: number
  NoiDung: {
    tenBaiDang: string
  }
  Person: {
    firstName: string
    lastName: string
  }
  TinhTrang: {
    name: string
  }
  ChuDeNhan: {
    ChuDe: {
      name: string
    }
  }[]
  DonViNhan: {
    DonVi: {
      name: string
    }
  }[]
}
export type ListNhiemVu = INhiemVu[]
