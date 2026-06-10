import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

interface form {
    github: string,
    linkedin: string
}

export default function Form (){

    const [form, setForm] = useState<form>({
        github: "",
        linkedin: ""
    })

    return <div className="container h-screen mx-auto flex justify-center items-center">
            <div className="flex flex-col gap-5">
                <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
                    AI Interviewer kickstart
                </h1>
                <div className="justify-center flex flex-col gap-2">
                    <Input onChange={(e) => setForm((prevData) => ({...prevData, github: e.target.value}))} value={form.github} placeholder="GitHub Link" className="min-w-md" />
                    <Input onChange={(e) => setForm((prevData) => ({...prevData, linkedin: e.target.value}))} value={form.linkedin} placeholder="LinkedIn Link" className="min-w-md" />
                    <Button className="w-fit self-center">Send</Button>
                </div>
            </div>

        </div>
}