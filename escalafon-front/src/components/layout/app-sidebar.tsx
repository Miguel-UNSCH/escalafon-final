"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartNetwork,
  Command,
  Frame,
  GalleryVerticalEnd,
  House,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  UserCog,
  UserPlus,
  Users,
} from "lucide-react"

import { NavMultiLink } from "@/components/layout/nav-multi-link"
import { NavOnlyLink } from "@/components/layout/nav-only-link"
import { NavUser } from "@/components/layout/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Administrador",
    email: "admin@admin.com",
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "Gobierno Regional de",
      logo: GalleryVerticalEnd,
      plan: "Ayacucho",
    }
  ],
  navMain: [
    {
      title: "Trabajadores",
      url: "#",
      icon: Users,
      isActive: true,
      items: [
        {
          title: "Gestionar",
          url: "/dashboard/gestionar",
          icon: UserCog,
        },
        {
          title: "Nuevo",
          url: "/dashboard/nuevo",
          icon: UserPlus
        },
      ],
    },
  ],
  projects: [
    {
      name: "Inicio",
      url: "/dashboard",
      icon: House,
    },
    {
      name: "Reportes",
      url: "/dashboard/reportes",
      icon: ChartNetwork
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavOnlyLink projects={data.projects} title="Inicio"/>
        {/* <NavOnlyLink projects={data.projects} title="Escalafón"/> */}
        <NavMultiLink items={data.navMain} title="Escalafón"/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
