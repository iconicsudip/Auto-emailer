import { Layout, Menu } from 'antd'
import { TbHome2, TbMail } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.scss'
import { useDispatch } from 'react-redux'
import { setHeader } from '../../../../store/slices/headerSlice'
import { useEffect } from 'react'

const dashboardMenu = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    icon: <TbHome2 />,
    url: '/dashboard'
  },
  {
    key: 'autoEmailer',
    title: 'Auto Emailer',
    icon: <TbMail />,
    url: '/dashboard/auto-emailer'
  }
]

export default function Sidebar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleChangePage = (name:string) => {
    dispatch(setHeader(name));
  }

  useEffect(() => {
    const headerName = dashboardMenu.filter(menu => menu.url === pathname)[0].title
    handleChangePage(headerName)
  },[])
  return (
    <Layout.Sider
      className='bg-[black!important] text-[white!important] border-r border-[#333!important] overflow-y-auto fixed h-full z-50 left-0 top-0 w-[var(--sidebar-width)] transition-all duration-300 ease-in-out'
      width={`var(--sidebar-width)`}
    >
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={[pathname]}
        className='border-[#333!important] border-r'
      >
        {dashboardMenu.map((menu) => (
          <Menu.Item key={menu.url} icon={menu.icon}
            onClick={()=>handleChangePage(menu.title)}
          >
            <Link to={menu.url}>
              {menu.title}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  )
}
