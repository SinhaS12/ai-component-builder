// src/App.tsx
// purpose: main app shell (placeholder for now)
import { useState } from 'react';
import { LeftBar } from './components/LeftBar'
import { MiddleBar } from './components/MiddleBar';
import { RightBar } from './components/RightBar';


export const App = () => {
  const [data, setData] = useState("Preview");
  
  return (
    <div className='flex flex-row bg-black min-h-screen'>
      <div className='basis-64 bg-[#161b22] border-r border-white'>
        <LeftBar setData={setData} />
      </div>
      <div className='bg-[#0d1117] flex-1 overflow-y-auto' >
        <MiddleBar data={data} />
      </div>
      <div className='basis-64 bg-[#161b22] border-l-2 border-white' >
        <RightBar />
      </div>
    </div>

  );
};