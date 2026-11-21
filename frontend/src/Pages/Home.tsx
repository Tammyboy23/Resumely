import { ArrowRight, BriefcaseBusiness, FilePlus2, FileText, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="page-content">
            <section className="welcome-row">
                <div>
                    <p className="eyebrow">YOUR CAREER WORKSPACE</p>
                    <h1>Make your next move <span>count.</span></h1>
                    <p className="welcome-copy">Build a resume you feel good about, then keep every opportunity organized.</p>
                </div>
                <Link className="button button-primary" to="/dashboard/create"><FilePlus2 size={17} /> Create a resume</Link>
            </section>

            <section className="stats-grid" aria-label="Workspace summary">
                <article className="stat-tile">
                    <span className="stat-icon stat-icon-green"><FileText size={18} /></span>
                    <p className="stat-label">Resumes</p>
                    <p className="stat-value">0 <span>created</span></p>
                </article>
                <article className="stat-tile">
                    <span className="stat-icon stat-icon-peach"><BriefcaseBusiness size={18} /></span>
                    <p className="stat-label">Jobs tracked</p>
                    <p className="stat-value">0 <span>saved</span></p>
                </article>
                <article className="stat-tile stat-feature">
                    <span className="stat-icon stat-icon-lilac"><Sparkles size={18} /></span>
                    <p className="stat-label">Your next step</p>
                    <p className="stat-value stat-next">Start with your resume</p>
                </article>
            </section>

            <section className="home-lower-grid">
                <article className="section-panel recent-panel">
                    <div className="section-heading">
                        <div><p className="eyebrow">KEEP IT MOVING</p><h2>Recent resumes</h2></div>
                        <Link className="text-link" to="/dashboard/create">Create new <ArrowRight size={15} /></Link>
                    </div>
                    <div className="empty-state">
                        <span className="empty-icon"><FileText size={22} /></span>
                        <h3>Your resume workspace starts here</h3>
                        <p>Create a first draft and keep it ready for the right opportunity.</p>
                        <Link className="button button-outline" to="/dashboard/create">Get started <ArrowRight size={16} /></Link>
                    </div>
                </article>
                <article className="next-panel">
                    <div className="next-panel-art"><Sparkles size={21} /></div>
                    <p className="eyebrow">A GOOD PLACE TO BEGIN</p>
                    <h2>One clear story can open doors.</h2>
                    <p className="next-copy">Bring your experience together in a resume that feels like you.</p>
                    <Link className="next-link" to="/dashboard/create">Start creating <ArrowRight size={16} /></Link>
                </article>
            </section>
        </div>
    )
}
export default Home