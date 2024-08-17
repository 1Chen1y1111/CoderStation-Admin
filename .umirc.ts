import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'CoderStation Admin',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      icon: 'HomeOutlined',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
      icon: 'UserOutlined',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: '管理员',
      path: '/admin',
      component: './Admin',
      icon: 'UserOutlined',
      routes: [
        {
          path: 'adminList',
          name: '管理员列表',
          component: './Admin',
        },
        {
          path: 'addAdmin',
          name: '添加管理员',
          component: './Admin/addAdmin',
        },
      ],
    },
    {
      name: '用户',
      path: '/user',
      component: './User',
      icon: 'TeamOutlined',
      routes: [
        {
          path: 'user',
          name: '用户列表',
          component: './User',
        },
        {
          path: 'addUser',
          name: '添加用户',
          component: './User/addUser',
        },
      ],
    },
    {
      name: '书籍',
      path: '/book',
      component: './Book',
      icon: 'ReadOutlined',
    },
    {
      name: '面试题',
      path: '/interview',
      component: './Interview',
      icon: 'EditOutlined',
    },
    {
      name: '问答',
      path: '/issue',
      component: './Issue',
      icon: 'ProfileOutlined',
    },
    {
      name: '评论',
      path: '/comment',
      component: './Comment',
      icon: 'CalendarOutlined',
    },
    {
      name: '类型',
      path: '/type',
      component: './Type',
      icon: 'AppstoreOutlined',
    },
  ],
  dva: {},
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
    },
    '/static': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
    },
    '/res': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
    },
  },
  npmClient: 'pnpm',
});
