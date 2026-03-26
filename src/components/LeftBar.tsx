import { useEffect, useState } from 'react';
import logo from './images/logo.svg';
import OpenAI from 'openai';
import axios from 'axios';
import spinnerLoader from './spinnerLoader';


const Api = import.meta.env.VITE_OPENAI_API_KEY;



const SYSTEM_PROMPT = `You are an expert React component generator. 
When a user describes a UI component, you MUST respond with ONLY a valid JSON object — no markdown, no explanation, no code fences.

The JSON must follow this exact structure:
{
  "Heading":"string(little big like heading)random but relevent.Not same on each call"
  "componentName": "string (PascalCase, e.g. BeautifulButton)",
  "description": "string (one-line summary of what the component does)",
  "dependencies": ["string"] (list of npm packages needed, empty array if only React),
  "code": "string (the full React component as a single self-contained string, using Tailwind for styling)",
  "usageExample": "string (a short JSX snippet showing how to use the component)"
}

Rules:
- Always use functional components with hooks.
- Always use Tailwind CSS for styling or inline styles or CSS modules.
- The "code" field must be a complete, runnable component — import React at the top, export default at the bottom.
- Never include explanation outside the JSON. Return ONLY the JSON object.
- If the user's request is unclear, make reasonable assumptions and build something beautiful.`;



export const LeftBar = ({ setData }: any) => {
    const [Input, setInput] = useState("");
    const [Loading, setLoading] = useState(false);

    const [previw, setPreviw] = useState({});

    const [api, setApi] = useState("");
    const [show, setShow] = useState(false)

    function saveInBrowser() {
        localStorage.setItem("apiKey", api);
    }




    useEffect(() => {
        if (!Loading) return;
        async function callFast() {
            let response = await axios.post("https://api.openai.com/v1/chat/completions", {
                "model": "gpt-4o",
                "messages": [
                    {
                        "role": "system",
                        "content": `${SYSTEM_PROMPT}`
                    },
                    {
                        "role": "user",
                        "content": `${Input}`
                    }
                ],
                "temperature": 0.7,
                "max_tokens": 2000
            }, {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${Api}`
                }
            })

            const raw = response?.data?.choices[0]?.message.content;
            try {
                const parsed = JSON.parse(raw);
                setPreviw(parsed);
                setData(parsed);
            } catch (error) {
                console.log("Invalid Json:", raw)
            } finally {
                setLoading(false);
            }

        }

        callFast()


    }, [
        Loading
    ])

    return (
        <div>
            <div className="flex gap-12 border-b border-black items-center " >
                <div className="ml-1.25 mt-1.25 mb-1.25" >
                    <img src={logo} className='w-8.75 h-8.75' alt="Logo" />
                </div>
                <h4 className='text-white'>AI Component Builder</h4>
            </div>
            <div  >
                <h5 className=' mb-6.25  mt-6.25 ml-6.25 text-white'>OpenAI API key</h5>
                <div className='flex gap-2' >
                    <input placeholder='sk-......' type={show ? "text" : "password"} className='border-2 border-[#30363d] text-[#8b949e] ml-6.25 rounded-md h-8.75 bg-[#0d1117]' value={api} onChange={(e) => setApi(e.target.value)} />
                    <button onClick={() => setShow(prev => !prev)} className='border-2 border-black rounded-md cursor-pointer w-13.75 text-white' >{show ? "Hide" : "Show"}</button>
                    <button onClick={saveInBrowser} className='border border-black rounded-md cursor-pointer w-13.75 bg-[#6d28d9] text-[#e6edf3]'  >Save</button>
                </div>

            </div>
            <div >

                <div className='pt-5 pb-5' >
                    <input className=" h-37.5 border border-[#6d28d9] w-[90%] rounded-md ml-5 text-[#8b949e] bg-[#0d1117] p-4" placeholder='Describe a UI component' value={Input} onChange={(e) => {
                        setInput(e.target.value)
                    }} />
                </div>
                <button onClick={() => setLoading(true)} disabled={Loading} className='bg-[#6d28d9] flex items-center justify-center  text-[#ffff] w-[90%] border border-[#6d28d9] cursor-pointer rounded-md ml-5 h-11.25' >{Loading ? spinnerLoader() : "Generate Component"}</button>
            </div>
            <div>
                <div className='ml-6.25 text-[#8b949e] mt-5 mb-5' >
                    <p>Try an example:</p>
                </div>
                <div>
                    <button className='hardcoded' onClick={() => setInput
                        ("A dark pricing card with monthly/annual toggle")
                    }>
                        <p>A dark pricing card with monthly/annual toggle</p>
                    </button>
                    <button className='hardcoded' onClick={() => {
                        setInput("A user Profile")
                    }}>
                        <p>A user Profile</p>
                    </button>
                    <button className='hardcoded' onClick={() => {
                        setInput("A notification toast")
                    }}>
                        <p>A notification toast</p>
                    </button>
                    <button className='hardcoded' onClick={() => {
                        setInput("A login form with email")
                    }}>
                        <p>A login form with email</p>
                    </button>
                    <button className='hardcoded' onClick={() => {
                        setInput("A testmonial card with start rating")
                    }}>
                        <p>A testmonial card with start rating</p>
                    </button>
                    <button className='hardcoded' onClick={() => {
                        setInput("A state dashboard")
                    }}>
                        <p>A state dashboard</p>
                    </button>
                </div>
                <div className='border-black  text-xs mt-10 text-[#8b949e]' >
                    <p color='grey' >Key stored locally in browser only</p>
                </div>
            </div>
        </div>
    )
}