import AdminController from '@/services/admin';

export default {
  // 命名空间
  namespace: 'admin',
  // 仓库护具
  state: {
    adminList: [],
    adminInfo: null,
  },
  // 同步更新
  reducers: {
    initAdminList(state: any, { payload }: any) {
      console.log('payload: ', payload);
      const _state = { ...state };
      _state.adminList = payload;
      return _state;
    },
  },
  // 处理异步副作用
  effects: {
    *_initAdminList(_: any, { put, call }: any) {
      const { data } = yield call(AdminController.getAdminListApi);
      yield put({
        type: 'initAdminList',
        payload: data,
      });
    },
  },
};
