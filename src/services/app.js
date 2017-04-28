'use strict';

import request from '../utils/request';
import { storageTokenKey } from '../utils/constant';
import { stringify } from 'qs';

export function auth(payload) {
  return request('/api/token', {
    method: 'POST',
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    }),
    body: stringify({
      ...payload,
      grant_type: 'password'
    })
  });
}


export function fetchUser() {
  const token = window.localStorage.getItem(storageTokenKey);
  return request(`/api/user`, {
    method: 'GET',
    headers: new Headers({
       //"Authorization": `Bearer ${token}`
    })
  });
}
