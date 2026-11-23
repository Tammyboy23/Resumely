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
                    <h1 className="mt-[10px] wrap-anywhere font-sf font-bold text-[38px] leading-[1.12]  text-[#202b28] max-[680px]:text-[34px]">Create a resume</h1>
                    <p className="mt-[11px] max-w-[530px] wrap-anywhere text-[13px] leading-[1.7] text-[#78827e] max-[680px]:text-xs">Start with the essentials. You can shape the details as you go.</p>
                </div>
                <div className="grid size-[49px] shrink-0 place-items-center rounded-[13px] bg-[#e5f1e7] text-[#498467] max-[680px]:size-[42px]"><FileText size={23} /></div>
            </section>

            
        </div>
    )
}

export default Create