import request from '@/utils/request'
// 1.舒眠减压首页
export function codeList() {
  return request({
    url: 'https://api.psy-1.com/web/v1/cosleep/func/code',
    method: 'get',
  })
}

// export function getInfo(token) {
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/user/logout',
//     method: 'post'
//   })
// }