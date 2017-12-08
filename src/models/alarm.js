import {alarmList} from '../services/example.js'
export default {
  namespace: 'alarm',
  state: {
  	list:[]
  },
  reducers: {
  	setList(state,{payload}){
  		return{
	  		...state,
	  		list:payload
  		}	
  	}
  },
  effects: {
  	*getList({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield alarmList(payload).then(data=>{
        return data
      })
  		
      yield put({ type: 'setList' ,payload:result.data.obj});
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/7') {
          dispatch({
            type: 'getList'
          });
        }
      });
    }
  },
};
