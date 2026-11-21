import { NavLink } from 'react-router-dom'
import { BriefcaseBusiness, FilePlus2, House } from 'lucide-react'

const pages = [
    { name: 'Home', path: '/dashboard', icon: House, end: true },
    { name: 'Jobs', path: '/dashboard/jobs', icon: BriefcaseBusiness, end: false },
    { name: 'Create', path: '/dashboard/create', icon: FilePlus2, end: false },
]

function BottomBar() {
    return (
        <nav className="bottom-nav" aria-label="Mobile navigation">
            {pages.map(({ name, path, icon: Icon, end }) => (
                <NavLink key={name} to={path} end={end} className={({ isActive }) => `bottom-nav-link${isActive ? ' active' : ''}`}>
                    <Icon size={20} strokeWidth={1.8} />
                    <span>{name}</span>
                </NavLink>
            ))}
        </nav>
    )
}
export default BottomBar