import {
  CheckOutlined, HomeOutlined, LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined, PlusOutlined, PlusSquareOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


const DefaultLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {collapsed ? (<h1> JP </h1>) : (<h1> Job Portal </h1> )}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key="/profile" icon={<UserOutlined />}>
            <Link to='/profile'>Profile</Link>
          </Menu.Item>
          <Menu.Item key='/appliedJobs' icon={<PlusSquareOutlined />}>
            <Link to='/appliedJobs'>Applied Jobs</Link>
          </Menu.Item>

          <Menu.Item key="/postjob" icon={<PlusOutlined />}>
            <Link to='/postjob'>Post Job</Link>
          </Menu.Item>

          <Menu.Item key="/posted" icon={<CheckOutlined />}>
            <Link to='/posted'>Posted</Link>
          </Menu.Item>

        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;