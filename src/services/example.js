import request from '../utils/request';
const URL = '/T_ZHWY_SSM'

export function query() {
  return request('/api/users');
}

export function menus(obj) {
  return request(URL+'/MenuManager/getPcMenuManager', {
    method: 'post',
    body: JSON.stringify({account:"kelin"})
  });
}

export function alarmList(obj) {
  return request(URL+'/AlarmManager/getAlarmManagerByParm', {
    method: 'post',
    body: JSON.stringify({account:"kelin"})
  });
}


export function users() {
  return request('/users', {
    method:'GET',                            //请求方式    (可以自己添加header的参数)    
    mode:'cors',// 避免cors攻击
    credentials: 'include'
  });
}