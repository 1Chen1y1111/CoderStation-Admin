import { request } from '@umijs/max';

// 获取所有管理员

function getAdminListApi() {
  return request('/api/admin', {
    method: 'GET',
  });
}

export default {
  getAdminListApi,
};
