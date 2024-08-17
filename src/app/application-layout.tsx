'use client'

import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/sidebar'
import { SidebarLayout } from '@/components/sidebar-layout'
import {
  HomeIcon,
  TrashIcon,
  PlusIcon,
  BookOpenIcon
} from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import { DirectoryProvider } from '@/context/DirectoyContex'
import DeleteModal from '@/components/DeleteModal'
import { useState } from 'react'

export function ApplicationLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()

  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <DirectoryProvider>
      <SidebarLayout
        sidebar={
          <Sidebar>
            <SidebarBody>
              <SidebarSection>
                <SidebarItem href="/" current={pathname === '/'}>
                  <HomeIcon />
                  <SidebarLabel>Directorio</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="/addNew" current={pathname === '/addNew'}>
                  <PlusIcon />
                  <SidebarLabel>Añadir</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="/modificar" current={pathname.startsWith('/modificar')}>
                  <BookOpenIcon />
                  <SidebarLabel>Modificar</SidebarLabel>
                </SidebarItem>
              </SidebarSection>

              <SidebarSpacer />

              <SidebarSection>
                <SidebarItem href="#">
                  <TrashIcon />
                  <SidebarLabel onClick={() => setModalOpen(true)}>ELIMINAR TODO</SidebarLabel>
                </SidebarItem>
              </SidebarSection>
            </SidebarBody>
          </Sidebar>
        }
      >
        {children}
      </SidebarLayout>
      <DeleteModal mensaje='¿Seguro que desea eliminar todo?' isModalOpen={isModalOpen} setModalOpen={setModalOpen} toDispatch={{ type: 'delete-all' }} />
    </DirectoryProvider>
  )
}
