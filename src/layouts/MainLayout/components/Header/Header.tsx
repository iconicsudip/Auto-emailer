import { Layout } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
  const headerDetails = useSelector((state: any) => state.headerDetails)
  return (
    <Layout.Header
          className='w-[calc(100%-var(--sidebar-width))] fixed z-50 top-0 right-0 bg-white h-[var(--header-height)] border border-border-on-light transition-all duration-300 ease-in-out flex items-center justify-between px-4 shadow-sm' 
    >
      {headerDetails.name}
    </Layout.Header>
  )
}
