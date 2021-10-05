//List of type variabel
export const ADD_AUTHTOKEN = 'ADD_TOKEN'
export const DEL_AUTHTOKEN = 'DEL_TOKEN'
export const SET_USER = 'SET_USER'
export const UNSET_USER = 'UNSET_USER'
export const SET_PATH = 'SET_PATH'
export const UNSET_PATH = 'UNSET_PATH'
export const SET_ALL_USER = 'SET_ALL_USER'
export const UNSET_ALL_USER = 'UNSET_ALL_USER'

export const SET_ALL_SURAT_MASUK = 'SET_ALL_SURAT_MASUK'
export const UNSET_ALL_SURAT_MASUK = 'UNSET_ALL_SURAT_MASUK'
export const SET_ALL_SURAT_KELUAR = 'SET_ALL_SURAT_KELUAR'
export const UNSET_ALL_SURAT_KELUAR = 'UNSET_ALL_SURAT_KELUAR'

export const SET_JENIS_SURAT = 'SET_JENIS_SURAT'
export const UNSET_JENIS_SURAT = 'UNSET_JENIS_SURAT'
export const SET_ALL_USER2 = 'SET_ALL_USER2'

export const SET_ALL_UNIT_KERJA = 'SET_ALL_UNIT_KERJA'
export const UNSET_ALL_UNIT_KERJA = 'UNSET_ALL_UNIT_KERJA'
export const SET_ALL_DERAJAT_SURAT = 'SET_ALL_DERAJAT_SURAT'
export const UNSET_ALL_DERAJAT_SURAT = 'UNSET_ALL_DERAJAT_SURAT'
export const SET_ALL_SIFAT_SURAT = 'SET_ALL_SIFAT_SURAT'
export const UNSET_ALL_SIFAT_SURAT = 'UNSET_ALL_SIFAT_SURAT'
export const SET_ALL_PENGINGAT = 'SET_ALL_PENGINGAT'
export const UNSET_ALL_PENGINGAT = 'UNSET_ALL_PENGINGAT'

export const SET_ALL_DISPOSISI = 'SET_ALL_DISPOSISI'
export const UNSET_ALL_DISPOSISI = 'UNSET_ALL_DISPOSISI'

export const SET_ALL_PENCATATAN = 'SET_ALL_PENCATATAN'
export const UNSET_ALL_PENCATATAN = 'UNSET_ALL_PENCATATAN'
export const SET_KODE_HAL = 'SET_KODE_HAL'
export const UNSET_KODE_HAL = 'UNSET_KODE_HAL'

export const SET_PEMOHON = 'SET_PEMOHON'
export const UNSET_PEMOHON = 'UNSET_PEMOHON'
//list of method actions
//to save current token by user
export function addTokenByID(payload) {
  const action = {
    type: ADD_AUTHTOKEN,
    payload,
  }
  return action
}
//to remove current token
export function removeTokenByID() {
  const action = {
    type: DEL_AUTHTOKEN,
  }
  return action
}
//to set user current info
export function setUser(payload) {
  const action = {
    type: SET_USER,
    payload,
  }
  return action
}

//to unset user current info

export function unsetUser() {
  const action = {
    type: UNSET_USER,
  }
  return action
}
export function setPath(payload) {
  const action = {
    type: SET_PATH,
    payload,
  }
  return action
}
export function unsetPath() {
  const action = {
    type: UNSET_PATH,
  }
  return action
}
export function setAllUser(payload) {
  const action = {
    type: SET_ALL_USER,
    payload,
  }
  return action
}
export function unsetAllUser() {
  const action = {
    type: UNSET_ALL_USER,
  }
  return action
}
export function setAllSuratMasuk(payload) {
  const action = {
    type: SET_ALL_SURAT_MASUK,
    payload,
  }
  return action
}

export function unsetAllSuratMasuk() {
  const action = {
    type: UNSET_ALL_SURAT_MASUK,
  }
  return action
}

export function setJenisSurat(payload) {
  const action = {
    type: SET_JENIS_SURAT,
    payload,
  }
  return action
}
export function unsetJenisSurat() {
  const action = {
    type: UNSET_JENIS_SURAT,
  }
  return action
}
export function setAllUser2(payload) {
  const action = {
    type: SET_ALL_USER2,
    payload,
  }
  return action
}

export function unsetUnitKerja() {
  const action = {
    type: UNSET_ALL_UNIT_KERJA,
  }
  return action
}
export function setUnitKerja(payload) {
  const action = {
    type: SET_ALL_UNIT_KERJA,
    payload,
  }
  return action
}
export function unsetDerajatSurat() {
  const action = {
    type: UNSET_ALL_DERAJAT_SURAT,
  }
  return action
}
export function setDerajatSurat(payload) {
  const action = {
    type: SET_ALL_DERAJAT_SURAT,
    payload,
  }
  return action
}
export function unsetSifatSurat() {
  const action = {
    type: UNSET_ALL_SIFAT_SURAT,
  }
  return action
}
export function setSifatSurat(payload) {
  const action = {
    type: SET_ALL_SIFAT_SURAT,
    payload,
  }
  return action
}

export function setAllPengingat(payload) {
  const action = {
    type: SET_ALL_PENGINGAT,
    payload,
  }
  return action
}

export function setAllDisposisi(payload) {
  const action = {
    type: SET_ALL_DISPOSISI,
    payload,
  }
  return action
}
export function unsetAllPengingat() {
  const action = {
    type: UNSET_ALL_PENGINGAT,
  }
  return action
}
export function unsetAllDisposisi(payload) {
  const action = {
    type: UNSET_ALL_DISPOSISI,
    payload,
  }
  return action
}
export function setAllPencatatan(payload) {
  const action = {
    type: SET_ALL_PENCATATAN,
    payload,
  }
  return action
}
export function unsetAllPencatatan(payload) {
  const action = {
    type: UNSET_ALL_PENCATATAN,
    payload,
  }
}
export function setAllSuratKeluar(payload) {
  const action = {
    type: SET_ALL_SURAT_KELUAR,
    payload,
  }
  return action
}

export function unsetAllSuratKeluar() {
  const action = {
    type: UNSET_ALL_SURAT_KELUAR,
  }
  return action
}

export function setAllKodeHal(payload) {
  const action = {
    type: SET_KODE_HAL,
    payload,
  }
  return action
}
export function unsetAllKodeHal() {
  const action = {
    type: UNSET_KODE_HAL,
  }
  return action
}
export function setAllPemohon(payload) {
  const action = {
    type: SET_PEMOHON,
    payload,
  }
  return action
}
export function unsetAllPemohon() {
  const action = {
    type: UNSET_PEMOHON,
  }
  return action
}
