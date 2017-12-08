import {menus , users} from '../services/example.js'

export default {
  namespace: 'menu',
  state: {
  	open:false,
  	menuList:[
                {
                    "hasChild": 0,
                    "isAppMenu": 0,
                    "menuId": 1,
                    "menuName": "首页",
                    "pId": 0,
                    "viewRoleId": 1
                }
    ],
  	sidebarList:[],
    routeUrl:''
  },
  reducers: {
  	setSidebar(state,{ payload }){
  		return {
        ...state,
        sidebarList : payload
      }
  	},
    isSidebar(state,{ payload }){
      return{
        ...state,
        open : payload
      }
    },
    setNav(state,{ payload }){
      console.log(payload)
      return{
        ...state,
        menuList:payload.data.obj[0].children
      }
    },
  },
  effects: {
    *getNav({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield menus(payload).then(data=>{
        return data
      })
      yield put({ type: 'setNav' ,payload:result});
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'getNav',
            payload:{
              "callback" : "callback",
              "account" : 1
            }
          });
        }
      });
    }
  },
};
