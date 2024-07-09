
import { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
    const { Header, Content, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible theme='light' collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className='flex justify-center my-4 cursor-pointer' onClick={() => navigate('/dash-board')}>
                    <img className="demo-logo-vertical" src='vite.svg' />
                </div>

                <Menu theme='light' defaultSelectedKeys={['dashboard']} mode="inline" items={[
                    {
                        key: 'dashboard', label: 'Dash Board', icon: <PieChartOutlined />, onClick: () => { navigate('/dash-board') }
                    }
                ]} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} ></Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 500,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}
export default DashBoard;