import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import BottomBar from '../components/Bottombar'

const pageTitles: Record<string, string> = {
    '/dashboard': 'Overview',
    '/dashboard/jobs': 'Job tracker',
    '/dashboard/create': 'Create resume',
}

function DashboardLayout() {
    const location = useLocation()

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="ml-[248px] min-h-screen w-[calc(100%-248px)] max-[900px]:ml-[214px] max-[900px]:w-[calc(100%-214px)] max-[680px]:ml-0 max-[680px]:w-full">
                <header className="flex h-[72px] items-center justify-between border-b border-[#e8ece8] bg-white/70 px-[45px] max-[900px]:px-7 max-[680px]:h-[58px] max-[680px]:px-5 max-[380px]:px-[15px]">
                    <p className="text-xs text-[#7d8782] max-[680px]:text-[11px]">Workspace <span className="px-2 text-[#b7c0bb]">/</span> {pageTitles[location.pathname] ?? 'Overview'}</p>
                    <div className="grid size-[33px] shrink-0 place-items-center rounded-full bg-[#d3e4d7] text-[11px] font-bold text-[#264333]" aria-label="Signed in as Taylor Nelson">TN</div>
                </header>
                <main className="mx-auto w-full max-w-[1440px] px-[45px] pt-10 pb-14 max-[900px]:px-7 max-[900px]:pt-8 max-[900px]:pb-11 max-[680px]:px-5 max-[680px]:pt-7 max-[680px]:pb-[100px] max-[380px]:px-[15px]">
                    <Outlet />
                </main>
            </div>
            <BottomBar />
        </div>
    )
}
export default DashboardLayout