import { ArrowRight, BriefcaseBusiness, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

function Jobs() {
    return (
        <div className="page-content">
            <section className="page-heading-row">
                <div>
                    <p className="eyebrow">STAY ORGANIZED</p>
                    <h1>Job tracker</h1>
                    <p className="welcome-copy">Keep the roles you are interested in all in one place.</p>
                </div>
                <button className="button button-primary" type="button" disabled><Plus size={17} /> Add a job</button>
            </section>
            <section className="section-panel jobs-panel">
                <div className="jobs-table-head"><span>ROLE</span><span>COMPANY</span><span>STATUS</span><span>ADDED</span></div>
                <div className="jobs-empty">
                    <span className="empty-icon"><BriefcaseBusiness size={22} /></span>
                    <h2>No jobs tracked yet</h2>
                    <p>Your saved opportunities will show up here.</p>
                    <Link className="text-link" to="/dashboard/create">Prepare your resume first <ArrowRight size={15} /></Link>
                </div>
            </section>
        </div>
    )
}
export default Jobs