import { NavLink } from 'react-router-dom'
import { BriefcaseBusiness, FilePlus2, House, Sparkles } from 'lucide-react'

const pages = [
    { name: 'Home', path: '/dashboard', icon: House, end: true },
    { name: 'Jobs', path: '/dashboard/jobs', icon: BriefcaseBusiness, end: false },
    { name: 'Create', path: '/dashboard/create', icon: FilePlus2, end: false },
]

function Sidebar() {
    return (
        <aside className="sidebar">
            <NavLink className="brand" to="/dashboard" aria-label="Resumely home">
                <span className="brand-mark"><Sparkles size={18} strokeWidth={2.2} /></span>
                <span>Resumely</span>
            </NavLink>
            <p className="nav-caption">WORKSPACE</p>
            <nav className="side-nav" aria-label="Main navigation">
                {pages.map(({ name, path, icon: Icon, end }) => (
                    <NavLink key={name} to={path} end={end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                        <Icon size={18} strokeWidth={1.8} />
                        <span>{name}</span>
                    </NavLink>
                ))}
            </nav>
            <div className="sidebar-note">
                <div className="note-icon"><Sparkles size={16} /></div>
                <p className="note-title">A little progress adds up.</p>
                <p className="note-copy">Keep your next opportunity in sight.</p>
            </div>
            <div className="sidebar-account">
                <div className="account-avatar">TN</div>
                <div><p className="account-name">Taylor Nelson</p><p className="account-plan">Personal workspace</p></div>
            </div>
        </aside>
    )
}
export default Sidebar;