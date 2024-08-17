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
import { getEvents } from '@/data'
import {
  HomeIcon,
  SparklesIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import { DirectoryProvider } from '@/context/DirectoyContex'

export function ApplicationLayout({
  children,
}: {
  events: Awaited<ReturnType<typeof getEvents>>
  children: React.ReactNode
}) {
  let pathname = usePathname()

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
                  <TicketIcon />
                  <SidebarLabel>Añadir</SidebarLabel>
                </SidebarItem>
                <SidebarItem href="/modificar" current={pathname.startsWith('/modificar')}>
                  <HomeIcon />
                  <SidebarLabel>Modificar</SidebarLabel>
                </SidebarItem>
              </SidebarSection>

              <SidebarSpacer />

              <SidebarSection>
                <SidebarItem href="#">
                  <SparklesIcon />
                  <SidebarLabel>REINICIAR</SidebarLabel>
                </SidebarItem>
              </SidebarSection>
            </SidebarBody>
          </Sidebar>
        }
      >
        {children}
      </SidebarLayout>
    </DirectoryProvider>
  )
}
