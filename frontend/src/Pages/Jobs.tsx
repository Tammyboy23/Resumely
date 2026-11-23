import { ArrowRight, BriefcaseBusiness, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

function Jobs() {
    return (
        <div className="mx-auto max-w-[1120px] animate-[page-in_340ms_ease_both]">
            <section className="mb-7 flex items-end justify-between gap-6 max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-[18px]">
                <div>
                    <p className="text-[10px] font-bold tracking-[1.15px] text-[#82908a]">STAY ORGANIZED</p>
                    <h1 className="mt-[10px] wrap-anywhere font-grotesk font-bold text-[38px] leading-[1.12] text-[#202b28] max-[680px]:text-[34px]">Job tracker</h1>
                    <p className="mt-[11px] max-w-[530px] wrap-anywhere text-[13px] leading-[1.7] text-[#78827e] max-[680px]:text-xs">Keep the roles you are interested in all in one place.</p>
                </div>
                <button className="inline-flex min-h-[43px] items-center justify-center gap-[9px] rounded-[5px] bg-[#2e775b] px-4 text-xs font-semibold text-white opacity-60 cursor-not-allowed max-[680px]:w-full" type="button" disabled><Plus size={17} /> Add a job</button>
            </section>
            <section className="min-h-[380px] rounded-md border border-[#e6ebe7] bg-white">
                <div className="grid grid-cols-[2fr_1.4fr_1fr_.8fr] border-b border-[#e8ece8] px-[22px] py-[17px] text-[9px] font-bold tracking-[.8px] text-[#8a938e] max-[680px]:grid-cols-[1.5fr_1fr] max-[680px]:gap-[10px] max-[680px]:p-[15px]"><span>ROLE</span><span>COMPANY</span><span className="max-[680px]:hidden">STATUS</span><span className="max-[680px]:hidden">ADDED</span></div>
                <div className="flex min-h-[315px] flex-col items-center justify-center text-center">
                    <span className="grid size-[43px] place-items-center rounded-full bg-[#edf3ee] text-[#60806e]"><BriefcaseBusiness size={22} /></span>
                    <h2 className="mt-[13px] text-sm font-semibold text-[#35413b]">No jobs tracked yet</h2>
                    <p className="mt-1.5 max-w-[310px] text-[11px] leading-[1.6] text-[#87918b]">Your saved opportunities will show up here.</p>
                    <Link className="mt-[14px] inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#347456] hover:text-[#214f3a]" to="/dashboard/create">Prepare your resume first <ArrowRight size={15} /></Link>
                </div>
            </section>
        </div>
    )
}
export default Jobs