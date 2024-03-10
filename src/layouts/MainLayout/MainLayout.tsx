import { ConfigProvider, Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function MainLayout() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#ea580c",
                    colorText: "var(--gray-700)",
                    borderRadius: 6,
                    fontFamily: "'Inter', sans-serif",
                },
                components: {
                    Layout: {
                        bodyBg: "transparent",
                        headerBg: "white",
                    },
                },
            }}
        >
            <Layout style={{ minHeight: "100vh", overflow: "auto" }}>
                <Header />
                <Sidebar />
                <Layout.Content
                    className='h-full overflow-y-auto transition-all duration-300 ease-in-out px-4 py-4 mt-[var(--header-height)] ml-[var(--sidebar-width)]'
                >
                    <Outlet />
                </Layout.Content>
            </Layout>
        </ConfigProvider>
    )
}
