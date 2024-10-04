'use client'
import React from 'react'
import { Nav } from './nav'
import {
    ChevronRight,
    ChevronLeft,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    UsersRound,
    Binary,
    Boxes,
    Briefcase,
    Layers,
    Monitor,
    Megaphone,
    Cpu,
} from "lucide-react"
import { Button } from './DashButton'

import { useWindowWidth } from '@react-hook/window-size'

type Props = {}

export default function Sidebar({ }: Props) {

    const [isCollapsed, setIsCollapsed] = React.useState(false)

    const onlyWidth = useWindowWidth()
    const mobileWidth = onlyWidth < 450

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed)
    }
    return (
        <div className='sticky top-[20px] min-w-[80px] border-r px-3 pb-10 pt-24'>
            {!mobileWidth &&
                <div className='absolute right-[-20px] top-7'>
                    <Button variant='secondary' className='rounded-full p-2' onClick={toggleSidebar}>
                        {isCollapsed ? <ChevronRight /> : <ChevronLeft />}

                    </Button>
                </div>
            }
            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/dashboard",
                        icon: LayoutDashboard,
                        variant: "default",
                    },
                    {
                        title: "Hackathon Updates",
                        href: "/hackathon",
                        icon: Binary,
                        variant: "default",
                    },
                    {
                        title: "Join Community",
                        href: "/community",
                        icon: Boxes,
                        variant: "ghost",
                    },
                    {
                        title: "Post Jobs",
                        href: "/jobs",
                        icon: Briefcase,
                        variant: "ghost",
                    },
                    {
                        title: "Showcase Projects",
                        href: "/showcase",
                        icon: Layers,
                        variant: "ghost",
                    },
                    {
                        title: "Tech Memes",
                        href: "/memes",
                        icon: Monitor,
                        variant: "ghost",
                    },
                    {
                        title: "Startup News",
                        href: "/news",
                        icon: Megaphone,
                        variant: "ghost",
                    },
                    {
                        title: "AI Feature",
                        href: "/ai",
                        icon: Cpu,
                        variant: "ghost",
                    },
                ]}
            />
        </div>
    )
}

