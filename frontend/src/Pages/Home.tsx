import { ArrowRight, BriefcaseBusiness, FilePlus2, FileText, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="mx-auto max-w-[1120px] animate-[page-in_340ms_ease_both]">
            <section className="flex items-end justify-between gap-6 max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-[18px]">
                <div>
                    <p className="text-[10px] font-bold tracking-[1.15px] text-[#82908a]">YOUR CAREER WORKSPACE</p>
                    <h1 className="mt-[10px] wrap-anywhere font-[family-name:var(--font-display)] text-[clamp(32px,3.2vw,43px)] leading-[1.12] font-normal text-[#202b28] max-[680px]:max-w-[460px] max-[680px]:text-4xl max-[380px]:text-[32px]">Make your next move <span className="text-[#498467]">count.</span></h1>
                    <p className="mt-[11px] max-w-[530px] wrap-anywhere text-[13px] leading-[1.7] text-[#78827e] max-[680px]:text-xs">Build a resume you feel good about, then keep every opportunity organized.</p>
                </div>
                <Link className="inline-flex min-h-[43px] items-center justify-center gap-[9px] rounded-[5px] bg-[#2e775b] px-4 text-xs font-semibold text-white transition hover:-translate-y-px hover:bg-[#24674d] max-[680px]:self-stretch" to="/dashboard/create"><FilePlus2 size={17} /> Create a resume</Link>
            </section>

            <section className="mt-[34px] grid grid-cols-3 gap-[15px] max-[680px]:mt-6 max-[680px]:grid-cols-2 max-[680px]:gap-[10px]" aria-label="Workspace summary">
                <article className="min-h-[134px] rounded-md border border-[#e6ebe7] bg-white p-[18px] max-[680px]:min-h-[122px] max-[680px]:p-[14px]">
                    <span className="grid size-[33px] place-items-center rounded-[9px] bg-[#e4f2e8] text-[#34745a]"><FileText size={18} /></span>
                    <p className="mt-[13px] text-[11px] text-[#75817b]">Resumes</p>
                    <p className="mt-1 text-[21px] font-bold text-[#26332e]">0 <span className="text-[11px] font-normal text-[#8a938e]">created</span></p>
                </article>
                <article className="min-h-[134px] rounded-md border border-[#e6ebe7] bg-white p-[18px] max-[680px]:min-h-[122px] max-[680px]:p-[14px]">
                    <span className="grid size-[33px] place-items-center rounded-[9px] bg-[#fbe9e2] text-[#bd644c]"><BriefcaseBusiness size={18} /></span>
                    <p className="mt-[13px] text-[11px] text-[#75817b]">Jobs tracked</p>
                    <p className="mt-1 text-[21px] font-bold text-[#26332e]">0 <span className="text-[11px] font-normal text-[#8a938e]">saved</span></p>
                </article>
                <article className="min-h-[134px] rounded-md border border-[#e6ebe7] bg-white p-[18px] max-[680px]:col-span-full max-[680px]:min-h-[100px] max-[680px]:p-[14px]">
                    <span className="grid size-[33px] place-items-center rounded-[9px] bg-[#edf0df] text-[#627858] max-[680px]:float-left max-[680px]:mr-[11px]"><Sparkles size={18} /></span>
                    <p className="mt-[13px] text-[11px] text-[#75817b] max-[680px]:mt-0">Your next step</p>
                    <p className="mt-1 text-[15px] font-bold text-[#26332e] max-[680px]:mt-[6px]">Start with your resume</p>
                </article>
            </section>

            <section className="mt-5 grid grid-cols-[minmax(0,1.65fr)_minmax(230px,.9fr)] gap-4 max-[900px]:grid-cols-[minmax(0,1.4fr)_minmax(205px,.9fr)] max-[680px]:mt-[13px] max-[680px]:grid-cols-1 max-[680px]:gap-3">
                <article className="min-h-[310px] rounded-md border border-[#e6ebe7] bg-white p-[22px] max-[680px]:min-h-[290px] max-[680px]:p-[18px]">
                    <div className="flex items-center justify-between gap-3 max-[380px]:items-start">
                        <div><p className="text-[10px] font-bold tracking-[1.15px] text-[#82908a]">KEEP IT MOVING</p><h2 className="mt-1.5 text-base font-semibold text-[#27332e]">Recent resumes</h2></div>
                        <Link className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#347456] hover:text-[#214f3a] max-[380px]:text-[10px]" to="/dashboard/create">Create new <ArrowRight size={15} /></Link>
                    </div>
                    <div className="flex min-h-[210px] flex-col items-center justify-center p-5 text-center">
                        <span className="grid size-[43px] place-items-center rounded-full bg-[#edf3ee] text-[#60806e]"><FileText size={22} /></span>
                        <h3 className="mt-[13px] text-sm font-semibold text-[#35413b]">Your resume workspace starts here</h3>
                        <p className="mt-1.5 max-w-[310px] text-[11px] leading-[1.6] text-[#87918b]">Create a first draft and keep it ready for the right opportunity.</p>
                        <Link className="mt-[15px] inline-flex min-h-[37px] items-center justify-center gap-[9px] rounded-[5px] border border-[#cbd9d0] bg-white px-4 text-[11px] font-semibold text-[#2d654e]" to="/dashboard/create">Get started <ArrowRight size={16} /></Link>
                    </div>
                </article>
                <article className="relative min-h-[310px] overflow-hidden rounded-md bg-[#3b6552] px-[22px] py-[25px] text-white max-[900px]:px-[18px] max-[900px]:py-[22px] max-[680px]:min-h-[245px]">
                    <span aria-hidden="true" className="pointer-events-none absolute -right-[39px] -bottom-[72px] size-[190px] rounded-full border border-white/15" />
                    <div className="relative z-[1] mb-[25px] grid size-[39px] place-items-center rounded-[11px] bg-[#d4e5cf] text-[#355544] max-[680px]:mb-[17px]"><Sparkles size={21} /></div>
                    <p className="relative z-[1] text-[10px] font-bold tracking-[1.15px] text-[#c6dbcd]">A GOOD PLACE TO BEGIN</p>
                    <h2 className="relative z-[1] mt-[9px] max-w-[230px] font-[family-name:var(--font-display)] text-2xl leading-[1.2] font-normal">One clear story can open doors.</h2>
                    <p className="relative z-[1] mt-[10px] max-w-[230px] text-[11px] leading-[1.65] text-[#d2e0d7]">Bring your experience together in a resume that feels like you.</p>
                    <Link className="relative z-[1] mt-[21px] inline-flex items-center gap-[7px] text-[11px] font-semibold text-[#f3f8f2] hover:text-[#c6dbcd]" to="/dashboard/create">Start creating <ArrowRight size={16} /></Link>
                </article>
            </section>
        </div>
    )
}
export default Home