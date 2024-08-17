import { PageContainer, ProTable } from '@ant-design/pro-components';
import { useDispatch, useSelector } from '@umijs/max';
import { Button, Switch, Tag } from 'antd';
import { useEffect } from 'react';

function Admin() {
  const dispatch = useDispatch();
  const { adminList } = useSelector((state) => state.admin);

  useEffect(() => {
    // 初始化管理员列表
    dispatch({
      type: 'admin/_initAdminList',
    });
  }, []);

  const columns = [
    {
      title: '登录账号',
      dataIndex: 'loginId',
    },
    {
      title: '登录密码',
      dataIndex: 'loginPwd',
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      valueType: 'avatar',
    },
    {
      title: '权限',
      dataIndex: 'permission',
      render: (_: any, row: any) => {
        let tag =
          row.permission === 1 ? (
            <Tag key={row._id} color="red">
              超级管理员
            </Tag>
          ) : (
            <Tag key={row._id} color="orange">
              普通管理员
            </Tag>
          );
        return tag;
      },
    },
    {
      title: '账号状态',
      dataIndex: 'enabled',
      render: (_: any, row: any) => {
        return (
          <Switch
            key={row._id}
            size="small"
            defaultChecked={row.enabled ? true : false}
            onChange={() => {}}
          />
        );
      },
    },
    {
      title: '操作',
      width: 150,
      render: (_: any, row: any) => {
        return (
          <div key={row._id}>
            <Button type="link" size="small">
              编辑
            </Button>
            <Button type="link" size="small">
              删除
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <PageContainer>
        <ProTable
          headerTitle="管理员列表"
          dataSource={adminList}
          rowKey="_id"
          columns={columns}
          search={false}
          pagination={{
            pageSize: 5,
          }}
        />
      </PageContainer>
    </div>
  );
}

export default Admin;
