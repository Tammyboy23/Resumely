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
        <div className="mx-auto max-w-[1120px] animate-[page-in_340ms_ease_both]">
            <section className="mb-7 flex items-center justify-between gap-6 max-[680px]:mb-7 max-[680px]:flex-row max-[680px]:items-center">
                <div>
                    <p className="text-[10px] font-bold tracking-[1.15px] text-[#82908a]">A FRESH START</p>
                    <h1 className="mt-[10px] wrap-anywhere font-[family-name:var(--font-display)] text-[38px] leading-[1.12] font-normal text-[#202b28] max-[680px]:text-[34px]">Create a resume</h1>
                    <p className="mt-[11px] max-w-[530px] wrap-anywhere text-[13px] leading-[1.7] text-[#78827e] max-[680px]:text-xs">Start with the essentials. You can shape the details as you go.</p>
                </div>
                <div className="grid size-[49px] shrink-0 place-items-center rounded-[13px] bg-[#e5f1e7] text-[#498467] max-[680px]:size-[42px]"><Sparkles size={23} /></div>
            </section>

            <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(240px,.8fr)] items-start gap-[17px] max-[680px]:grid-cols-1 max-[680px]:gap-3">
                <section className="min-h-[394px] rounded-md border border-[#e6ebe7] bg-white p-[27px] max-[680px]:min-h-[360px] max-[680px]:p-5">
                    {created ? (
                        <div className="flex min-h-[330px] flex-col items-start justify-center" role="status">
                            <span className="mb-[22px] grid size-[43px] place-items-center rounded-full bg-[#3d835e] text-white"><Check size={23} /></span>
                            <p className="text-[10px] font-bold tracking-[1.15px] text-[#82908a]">DRAFT STARTED</p>
                            <h2 className="mt-[9px] font-[family-name:var(--font-display)] text-[25px] font-normal text-[#202b28]">Good beginning, {fullName.trim()}.</h2>
                            <p className="mt-[9px] text-xs leading-[1.6] text-[#7d8982]">Your {role.trim()} resume draft is ready for its next details.</p>
                            <button className="mt-5 inline-flex min-h-[43px] items-center justify-center gap-[9px] rounded-[5px] border border-[#cbd9d0] bg-white px-4 text-xs font-semibold text-[#2d654e]" type="button" onClick={() => setCreated(false)}>Edit details</button>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-[10px] bg-[#e5f1e7] text-[#387454]"><FileText size={19} /></span><div><h2 className="text-base font-semibold text-[#27332e]">Start from scratch</h2><p className="mt-1 text-[11px] text-[#89928d]">Set up the basics for your new resume.</p></div></div>
                            <form className="mt-[29px] grid" onSubmit={handleSubmit}>
                                <label className="mb-[7px] text-[11px] font-semibold text-[#52615a]" htmlFor="full-name">Your name</label>
                                <input className="mb-[18px] h-[43px] w-full rounded border border-[#dfe6e1] bg-white px-3 text-xs text-[#28362f] placeholder:text-[#a6afaa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef9a78]" id="full-name" value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="e.g. Taylor Nelson" required />
                                <label className="mb-[7px] text-[11px] font-semibold text-[#52615a]" htmlFor="target-role">Target role</label>
                                <input className="mb-[18px] h-[43px] w-full rounded border border-[#dfe6e1] bg-white px-3 text-xs text-[#28362f] placeholder:text-[#a6afaa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef9a78]" id="target-role" value={role} onChange={(event) => setRole(event.target.value)} placeholder="e.g. Product Designer" required />
                                <button className="mt-1 inline-flex min-h-[43px] min-w-[145px] items-center justify-center gap-[9px] justify-self-start rounded-[5px] bg-[#2e775b] px-4 text-xs font-semibold text-white transition hover:-translate-y-px hover:bg-[#24674d]" type="submit">Create draft <span className="text-lg leading-none" aria-hidden="true">&rarr;</span></button>
                            </form>
                        </>
                    )}
                </section>
                <aside className="rounded-md border border-[#e6ebe7] bg-white px-5 py-[23px] max-[680px]:p-[19px]">
                    <p className="text-[10px] font-bold tracking-[1.15px] text-[#82908a]">YOUR FIRST STEPS</p>
                    <ol className="mt-5 grid list-none gap-0">
                        <li className="relative flex min-h-[66px] gap-[11px] text-[#9aa39e] after:absolute after:top-[29px] after:left-[13px] after:h-9 after:w-px after:bg-[#e5eae6] after:content-[''] last:after:hidden"><span className="grid size-[27px] shrink-0 place-items-center rounded-full border border-[#397759] bg-[#397759] text-[10px] font-semibold text-white">1</span><div><strong className="block pt-0.5 text-[11px] font-semibold text-[#2c4437]">Start with the basics</strong><p className="mt-1 text-[10px] text-[#9aa39e]">Name and target role</p></div></li>
                        <li className="relative flex min-h-[66px] gap-[11px] text-[#9aa39e] after:absolute after:top-[29px] after:left-[13px] after:h-9 after:w-px after:bg-[#e5eae6] after:content-[''] last:after:hidden"><span className="grid size-[27px] shrink-0 place-items-center rounded-full border border-[#dfe6e1] text-[10px] font-semibold">2</span><div><strong className="block pt-0.5 text-[11px] font-semibold text-[#69756e]">Add your experience</strong><p className="mt-1 text-[10px] text-[#9aa39e]">Roles, projects, and impact</p></div></li>
                        <li className="relative flex min-h-[66px] gap-[11px] text-[#9aa39e] after:absolute after:top-[29px] after:left-[13px] after:h-9 after:w-px after:bg-[#e5eae6] after:content-[''] last:after:hidden"><span className="grid size-[27px] shrink-0 place-items-center rounded-full border border-[#dfe6e1] text-[10px] font-semibold">3</span><div><strong className="block pt-0.5 text-[11px] font-semibold text-[#69756e]">Polish your story</strong><p className="mt-1 text-[10px] text-[#9aa39e]">Review and refine your details</p></div></li>
                    </ol>
                    <div className="mt-[9px] flex gap-[9px] rounded-[5px] bg-[#f0f5eb] p-3 text-[#5e785f]"><Sparkles className="shrink-0" size={16} /><p className="text-[10px] leading-[1.5] text-[#677b64]">A focused resume is easier to tailor for each role.</p></div>
                </aside>
            </div>
        </div>
    )
}

export default Create