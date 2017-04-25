import { request, config } from '../utils';

const { api } = config;
const { userLogin, userLogout, userSignup } = api;

export async function login(params) {
  return request({
    url: userLogin,
    method: 'post',
    data: params,
  })
}
