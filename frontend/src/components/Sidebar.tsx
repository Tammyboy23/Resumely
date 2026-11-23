import { NavLink } from 'react-router-dom'
import { BriefcaseBusiness, FilePlus2, FileText, House, Sparkles } from 'lucide-react'

const pages = [
    { name: 'Home', path: '/dashboard', icon: House, end: true },
    { name: 'Find Jobs', path: '/dashboard/jobs', icon: BriefcaseBusiness, end: false },
    { name: 'Resumes', path: '/dashboard/create', icon: FileText, end: false },
]

function Sidebar() {
    return (
        <aside className="fixed inset-y-0 left-0 z-[3] flex w-[248px] flex-col bg-[#20342e] px-[18px] pt-[29px] pb-[17px] text-[#f7faf7] max-[900px]:w-[214px] max-[680px]:hidden">
            <NavLink className="flex items-center gap-[10px] px-[10px] text-[19px] font-bold" to="/dashboard" aria-label="Resumely home">
                <span className="grid size-8 place-items-center rounded-[10px] bg-[#c9e6d3] text-[#20342e]"><Sparkles size={18} strokeWidth={2.2} /></span>
                <span>Resumely</span>
            </NavLink>
            <p className="mt-[46px] mb-3 px-[10px] text-[10px] font-bold tracking-[1.1px] text-[#91a69c]">WORKSPACE</p>
            <nav className="grid gap-[5px]" aria-label="Main navigation">
                {pages.map(({ name, path, icon: Icon, end }) => (
                    <NavLink key={name} to={path} end={end} className={({ isActive }) => `flex min-h-11 items-center gap-3 rounded-[7px] px-3 text-[13px] font-medium transition-colors duration-200 ${isActive ? 'bg-[#365447] text-white shadow-[inset_3px_0_#9cdbb5]' : 'text-[#c0cec7] hover:bg-[#2b433a] hover:text-white'}`}>
                        <Icon size={18} strokeWidth={1.8} />
                        <span>{name}</span>
                    </NavLink>
                ))}
            </nav>
            <div className="mt-auto rounded-[7px] border border-[#3a5148] bg-[#293e35] px-[14px] py-[17px]">
                <div className="mb-[13px] grid size-[29px] place-items-center rounded-lg bg-[#c9e6d3] text-[#20342e]"><Sparkles size={16} /></div>
                <p className="text-xs font-bold">A little progress adds up.</p>
                <p className="mt-[5px] text-[11px] leading-[1.5] text-[#b6c4bd]">Keep your next opportunity in sight.</p>
            </div>
            <div className="mt-4 flex items-center gap-[10px] border-t border-[#3a5148] px-[5px] pt-[18px]">
                <div className="grid size-[34px] shrink-0 place-items-center rounded-full bg-[#d3e4d7] text-[11px] font-bold text-[#264333]">TN</div>
                <div><p className="text-[11px] font-semibold">Taylor Nelson</p><p className="mt-[3px] text-[10px] text-[#aabbb2]">Personal workspace</p></div>
            </div>
        </aside>
    )
}
export default Sidebar;