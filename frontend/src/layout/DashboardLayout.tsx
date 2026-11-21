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
        <div className="layout">
            <Sidebar />
            <div className="workspace">
                <header className="topbar">
                    <p className="topbar-context">Workspace <span>/</span> {pageTitles[location.pathname] ?? 'Overview'}</p>
                    <div className="topbar-profile" aria-label="Signed in as Taylor Nelson">TN</div>
                </header>
                <main className="main">
                    <Outlet />
                </main>
            </div>
            <BottomBar />
        </div>
    )
}
export default DashboardLayout