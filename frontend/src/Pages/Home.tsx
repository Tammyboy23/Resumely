import { ArrowRight, BriefcaseBusiness, FileText, Sparkles, Upload , Gauge ,Send, UploadCloud, X} from 'lucide-react'
import { useState } from 'react'
import { data, Link } from 'react-router-dom'



function Home() {
    const [popup, setpopup] = useState(false)
    const [resumeFile, setResumeFile] = useState<File | null>(null)
    const boardStats = [
    {
        label: 'Resumes',
        value: '0',
        detail: 'created',
        icon: FileText,
        iconClass: 'bg-[#e4f2e8] text-[#34745a]',
    },
    {
        label: 'Jobs tracked',
        value: '0',
        detail: 'saved',
        icon: BriefcaseBusiness,
        iconClass: 'bg-[#fbe9e2] text-[#bd644c]',
    },
    {
        label: 'Overall Score',
        value: '0',
        detail: '/100',
        icon: Gauge,
        iconClass: 'bg-[#b1dcfa] text-[#0095ff]',
    },
    {
        label: 'Applications',
        value: '0',
        detail : 'Jobs Applied to ',
        icon: Send,
        iconClass: 'bg-[#edf0df] text-[#627858]',
    },
]
    const submit_Resume = () => {
        fetch("http://localhost:3000/upload",{
            method: 'POST',
            body: resumeFile
        })
        .then((res) => {
            if(!res.ok) throw new Error("Failed to Upload");
            return res.json();
        })
        .then(data => console.log(data))
    }
    return (
        <>
        <div className="mx-auto max-w-[1120px] animate-[page-in_340ms_ease_both]">
            <section className="flex items-end justify-between gap-6 max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-[18px]">
                <div>
                    <p className="text-[10px] font-bold tracking-[1.15px] text-[#82908a]">YOUR CAREER WORKSPACE</p>
                    <h1 className="mt-[10px] wrap-anywhere font-[family-name:var(--font-display)] text-[clamp(32px,3.2vw,43px)] leading-[1.12] text-[#202b28] max-[680px]:max-w-[460px] max-[680px]:text-4xl max-[380px]:text-[32px] font-grotesk font-bold">One Click Away From Your <span className="text-[#498467]">Dream Job.</span></h1>
                    <p className="mt-[11px] max-w-[530px] wrap-anywhere text-[13px] leading-[1.7] text-[#78827e] max-[680px]:text-xs">Build a resume you feel good about, then keep every opportunity organized.</p>
                </div>
                <button className=" flex inline-flex min-h-[43px] items-center justify-center gap-[9px] rounded-xl bg-[#2e775b] px-4 text-xs font-semibold text-white transition hover:-translate-y-px hover:bg-[#24674d] max-[680px]:self-stretch" type="button" onClick={() => setpopup(true)}><Upload size={17} /> Upload resume</button>
            </section>
{/* Boards Stats */}
            <section className="mt-[34px] grid grid-cols-4 gap-[15px] max-[680px]:mt-6 max-[680px]:grid-cols-2 max-[680px]:gap-[10px]" aria-label="Workspace summary">
                {boardStats.map(({ label, value, detail, icon: Icon, iconClass, isNextStep }) => (
                    <article key={label} className={`min-h-[134px] rounded-md border border-[#e6ebe7] bg-white p-[18px] max-[680px]:min-h-[122px] max-[680px]:p-[14px] ${isNextStep ? 'max-[680px]:col-span-full max-[680px]:min-h-[100px]' : ''}`}>
                        <span className={`grid size-[33px] place-items-center rounded-[9px] ${iconClass} ${isNextStep ? 'max-[680px]:float-left max-[680px]:mr-[11px]' : ''}`}><Icon size={18} /></span>
                        <p className={`mt-[13px] text-[11px] text-[#75817b] ${isNextStep ? 'max-[680px]:mt-0' : ''}`}>{label}</p>
                        <p className={`mt-1 font-bold text-[#26332e] ${isNextStep ? 'text-[15px] max-[680px]:mt-[6px]' : 'text-[21px]'}`}>
                            {value} {detail && <span className="text-[11px] font-normal text-[#8a938e]">{detail}</span>}
                        </p>
                    </article>
                ))}
            </section>

            <section className="mt-5 grid grid-cols-[minmax(0,1.65fr)_minmax(230px,.9fr)] gap-4 max-[900px]:grid-cols-[minmax(0,1.4fr)_minmax(205px,.9fr)] max-[680px]:mt-[13px] max-[680px]:grid-cols-1 max-[680px]:gap-3">
                <article className="min-h-[310px] rounded-md border border-[#e6ebe7] bg-white p-[22px] max-[680px]:min-h-[290px] max-[680px]:p-[18px]">
                    <div className="flex items-center justify-between gap-3 max-[380px]:items-start">
                        <div><p className="text-[10px] font-bold tracking-[1.15px] text-[#82908a]">KEEP IT MOVING</p><h2 className="mt-1.5 text-base font-semibold text-[#27332e]">Recent Stats</h2></div>
                        <Link className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#347456] hover:text-[#214f3a] max-[380px]:text-[10px]" to="/dashboard/create">Create new <ArrowRight size={15} /></Link>
                    </div>
                    <div className="flex min-h-[210px] flex-col items-center justify-center p-5 text-center">
                        <span className="grid size-[43px] place-items-center rounded-full bg-[#edf3ee] text-[#60806e]"><FileText size={22} /></span>
                        <h3 className="mt-[13px] text-sm font-semibold text-[#35413b]">Your resume workspace starts here</h3>
                        <p className="mt-1.5 max-w-[310px] text-[11px] leading-[1.6] text-[#87918b]">Upload Your Resume & Lets Help You Get That Dream Job.</p>
                        <Link className="mt-[15px] inline-flex min-h-[37px] items-center justify-center gap-[9px] rounded-[5px] border border-[#cbd9d0] bg-white px-4 text-[11px] font-semibold text-[#2d654e]" to="/dashboard/create">Get started <ArrowRight size={16} /></Link>
                    </div>
                </article>
                <article className="relative min-h-[310px] overflow-hidden rounded-md bg-[#3b6552] px-[22px] py-[25px] text-white max-[900px]:px-[18px] max-[900px]:py-[22px] max-[680px]:min-h-[245px]">
                    <span aria-hidden="true" className="pointer-events-none absolute -right-[39px] -bottom-[72px] size-[190px] rounded-full border border-white/15" />
                    <div className="relative z-[1] mb-[25px] grid size-[39px] place-items-center rounded-[11px] bg-[#d4e5cf] text-[#355544] max-[680px]:mb-[17px]"><Sparkles size={21} /></div>
                    <p className="relative z-[1] text-[10px] font-bold tracking-[1.15px] text-[#c6dbcd]">A GOOD PLACE TO BEGIN</p>
                    <h2 className="relative z-[1] mt-[9px] max-w-[230px] font-[family-name:var(--font-display)] text-2xl leading-[1.2] font-normal font-lexend">One clear story can open doors.</h2>
                    <p className="relative z-[1] mt-[10px]  max-w-[230px] text-[11px] leading-[1.65] text-[#d2e0d7]">Bring your experience together in a resume that feels like you.</p>
                    <Link className="relative z-[1] mt-[21px] inline-flex items-center gap-[7px] text-[11px] font-semibold text-[#f3f8f2] hover:text-[#c6dbcd]" to="/dashboard/create">Start creating <ArrowRight size={16} /></Link>
                </article>
            </section>
        </div>
        {popup && (
            <div className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setpopup(false) }}>
                <section className="relative flex w-full max-w-[460px] flex-col gap-5 rounded-xl bg-white p-6 shadow-2xl max-[480px]:p-5" role="dialog" aria-modal="true" aria-labelledby="upload-title">
                    <button type="button" onClick={() => setpopup(false)} aria-label="Close upload dialog" className="absolute right-4 top-4 grid size-8 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"><X size={18} /></button>
                    <div className="mt-1 flex items-center gap-3 pr-9">
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#e8f3ec] text-[#34745a]"><UploadCloud size={21} /></span>
                        <div><h2 id="upload-title" className="text-lg font-semibold text-[#26332e]">Upload your resume</h2><p className="mt-1 text-xs text-[#78827e]">Choose a file from your device to get started.</p></div>
                    </div>
                    <form onSubmit={submit_Resume}>
                    <label className="group flex min-h-[176px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#cbd9d0] bg-[#f8fbf8] px-5 py-6 text-center transition hover:border-[#579174] hover:bg-[#f1f7f2] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#ef9a78]">
                        <input className="sr-only" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(event) => setResumeFile(event.target.files?.[0] ?? null)} />
                        <span className="mb-3 grid size-12 place-items-center rounded-full bg-white text-[#4c8064] shadow-sm"><UploadCloud size={22} /></span>
                        {resumeFile ? (
                            <>
                                <span className="max-w-full break-all text-sm font-semibold text-[#31443a]">{resumeFile.name}</span>
                                <span className="mt-1 text-xs text-[#78827e]">{(resumeFile.size / (1024 * 1024)).toFixed(2)} MB · Click to choose another file</span>
                            </>
                        ) : (
                            <>
                                <span className="text-sm font-semibold text-[#31443a]">Choose a file <span className="font-normal text-[#78827e]">or browse</span></span>
                                <span className="mt-2 text-xs text-[#87918b]">PDF or DOCX</span>
                            </>
                        )}
                    </label>
                    <div className="flex items-center justify-between gap-3 mt-2">
                        {resumeFile ? <button className="text-xs font-medium text-[#78827e] underline decoration-[#c5cec8] underline-offset-4 hover:text-[#31443a]" type="button" onClick={() => setResumeFile(null)}>Remove file</button> : <span className="text-[11px] text-[#9aa39e]">Choose a resume file to continue.</span>}
                        <button className="inline-flex min-h-10 items-center justify-center rounded-md bg-[#2e775b] px-5 text-xs font-semibold text-white transition hover:bg-[#24674d] disabled:cursor-not-allowed disabled:opacity-45" type="submit" disabled={!resumeFile} onClick={submit_Resume}>Done</button>
                    </div>
                    </form>
                </section>
                </div>
        )}
            </>
    )
}
export default Home