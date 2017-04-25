module.exports = {
  name: 'AGV Client',
  prefix: 'agvClient',
  forterText: 'Zhu Xi 版权所有 © 2017 由 ZhuXi 支持',
  logo: 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png',
  iconFontUrl: '//at.alicdn.com/t/font_c4y7asse3q1cq5mi.js',
  baseURL: 'http://localhost:8000/api/v1',
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  api: {
    userLogin: '/token',    // post
    userLogout: '/token',   // del
    userSignup: '/user',    // post
  },
}
