import './images/logo.svg';
export const LeftBar = () => {
    
    return (
        <div>
            <div style={{display:"flex",gap:"12px",borderBottom:"1px solid black"}}>
                <div style={{marginLeft:"12px"}}>
                <img src="./images/logo.svg" width="40" height="40" alt="Logo" />
                </div>
                <h4 style={{color:"white"}}>AI Component Builder</h4>
            </div>
            <div style={{borderBottom:"1px solid black"}} >
                <h5 style={{color:"#2d3748",marginTop:"25px",marginBottom:"25px",marginLeft:"25px"}}>OpenAI API key</h5>
                <div style={{display:"flex",gap:"8px"}}>
                    <input placeholder='sk-......' type='text' style={{border:"2px solid #30363d",color:"#8b949e",marginLeft:"25px",borderRadius:"6px",height:"35px",backgroundColor:"0d1117"}}/>
                    <button style={{border:"2px solid black", borderRadius:"6px",cursor:"pointer",width:"55px"}}>Show</button>
                    <button style={{border:"0 solid black", borderRadius:"6px",cursor:"pointer",width:"55px",backgroundColor:"#6d28d9",color:"#e6edf3"}}>Save</button>
                </div>
               
            </div>
            <div >
                
                <div style={{paddingTop:"20px",paddingBottom:"20px"}}>
                <input style={{height:"150px",border:"1px solid #6d28d9",width:"90%",borderRadius:"6px",marginLeft:"20px",color:"#8b949e",background:"#0d1117"}} placeholder='Describe a UI component'/>
                </div>
                <button style={{backgroundColor:"#6d28d9",color:"#ffff", width:"90%" ,border:"1px solid #6d28d9",cursor:"pointer",marginLeft:"20px",borderRadius:"6px",height:"45px"}}>Generate Component</button>
            </div>
            <div>
                <div style={{marginLeft:"25px",color:"#8b949e",marginTop:"20px",marginBottom:"20px"}}>
                <p>Try an example:</p>
                </div>
                <div>
                    <div className='hardcoded'>
                        <p>A dark pricing card with monthly/annual toggle</p>
                    </div>
                    <div className='hardcoded'>
                        <p>A user Profile</p>
                    </div>
                    <div className='hardcoded'>
                        <p>A notification toast</p>
                    </div>
                    <div className='hardcoded'>
                        <p>A login form with email</p>
                    </div>
                    <div className='hardcoded'>
                        <p>A testmonial card with start rating</p>
                    </div>
                    <div className='hardcoded'>
                        <p>A state dashboard</p>
                    </div>
                </div>
               
            </div>
            <div>
            
            </div>
        </div>
    )
}