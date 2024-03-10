import { Avatar, Layout } from 'antd'
import { useSelector } from 'react-redux'

export default function Header() {
  const headerDetails = useSelector((state: any) => state.headerDetails)
  return (
    <Layout.Header
          className='w-[calc(100%-var(--sidebar-width))] fixed z-50 top-0 right-0 bg-white h-[var(--header-height)] border border-border-on-light transition-all duration-300 ease-in-out flex items-center justify-between px-4 shadow-sm' 
    >
      <div className="flex justify-between w-full">
        <h2>{headerDetails.name}</h2>
        <div className='flex gap-2 items-center'>
          <Avatar size={40} src="https://api.dicebear.com/7.x/lorelei/svg" />
          <div className='flex flex-col' style={{lineHeight:1.5}}>
            <h3>John Doe</h3>
            <p className="text-gray-500">Admin</p>
          </div>
        </div>
      </div>
      
    </Layout.Header>
  )
}
