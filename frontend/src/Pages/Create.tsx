import { useState, type FormEvent } from 'react'
import { Check, FileText, Sparkles } from 'lucide-react'

function Create() {
    const [fullName, setFullName] = useState('')
    const [role, setRole] = useState('')
    const [created, setCreated] = useState(false)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setCreated(true)
    }

    return (
        <div className="page-content">
            <section className="page-heading-row create-heading">
                <div>
                    <p className="eyebrow">A FRESH START</p>
                    <h1>Create a resume</h1>
                    <p className="welcome-copy">Start with the essentials. You can shape the details as you go.</p>
                </div>
                <div className="create-heading-mark"><Sparkles size={23} /></div>
            </section>

            <div className="create-grid">
                <section className="section-panel create-form-panel">
                    {created ? (
                        <div className="created-state" role="status">
                            <span className="created-check"><Check size={23} /></span>
                            <p className="eyebrow">DRAFT STARTED</p>
                            <h2>Good beginning, {fullName.trim()}.</h2>
                            <p>Your {role.trim()} resume draft is ready for its next details.</p>
                            <button className="button button-outline" type="button" onClick={() => setCreated(false)}>Edit details</button>
                        </div>
                    ) : (
                        <>
                            <div className="form-title-row"><span className="form-title-icon"><FileText size={19} /></span><div><h2>Start from scratch</h2><p>Set up the basics for your new resume.</p></div></div>
                            <form className="create-form" onSubmit={handleSubmit}>
                                <label htmlFor="full-name">Your name</label>
                                <input id="full-name" value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="e.g. Taylor Nelson" required />
                                <label htmlFor="target-role">Target role</label>
                                <input id="target-role" value={role} onChange={(event) => setRole(event.target.value)} placeholder="e.g. Product Designer" required />
                                <button className="button button-primary create-submit" type="submit">Create draft <span aria-hidden="true">&rarr;</span></button>
                            </form>
                        </>
                    )}
                </section>
                <aside className="create-aside">
                    <p className="eyebrow">YOUR FIRST STEPS</p>
                    <ol className="steps-list">
                        <li className="step-current"><span>1</span><div><strong>Start with the basics</strong><p>Name and target role</p></div></li>
                        <li><span>2</span><div><strong>Add your experience</strong><p>Roles, projects, and impact</p></div></li>
                        <li><span>3</span><div><strong>Polish your story</strong><p>Review and refine your details</p></div></li>
                    </ol>
                    <div className="aside-tip"><Sparkles size={16} /><p>A focused resume is easier to tailor for each role.</p></div>
                </aside>
            </div>
        </div>
    )
}

export default Create