import { NavLink } from 'react-router-dom'
import { BriefcaseBusiness, FilePlus2, House } from 'lucide-react'

const pages = [
    { name: 'Home', path: '/dashboard', icon: House, end: true },
    { name: 'Jobs', path: '/dashboard/jobs', icon: BriefcaseBusiness, end: false },
    { name: 'Create', path: '/dashboard/create', icon: FilePlus2, end: false },
]

function BottomBar() {
    return (
        <nav className="fixed inset-x-0 bottom-0 z-[5] hidden min-h-[68px] grid-cols-3 border-t border-[#e4e9e5] bg-white/95 px-3 pt-[6px] pb-[max(6px,env(safe-area-inset-bottom))] max-[680px]:grid" aria-label="Mobile navigation">
            {pages.map(({ name, path, icon: Icon, end }) => (
            <NavLink key={name} to={path} end={end} className={({ isActive }) => `flex flex-col items-center justify-center gap-1 text-[9px] font-medium ${isActive ? 'text-[#2f7958]' : 'text-[#818c85]'}`}>
                    <Icon size={20} strokeWidth={1.8} />
                    <span>{name}</span>
                </NavLink>
            ))}
        </nav>
    )
}
export default BottomBar