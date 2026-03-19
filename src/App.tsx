// src/App.tsx
// purpose: main app shell (placeholder for now)
import { LeftBar } from './components/LeftBar'
import { MiddleBar } from './components/MiddleBar';
import { RightBar } from './components/RightBar';


export const App = () => {
  return (
   
      <div style={{ display: "flex", backgroundColor: "black" ,height:"100vh"}}>
        <div style={{ flex: 1 ,background:"#161b22"}}>
          <LeftBar />
        </div>
        <div style={{ flex: 3,backgroundColor:"#0d1117" }}>
          <MiddleBar />
        </div>
        <div style={{ flex: 0.5,backgroundColor:"#161b22" }}>
          <RightBar />
        </div>
      </div>
    
  );
};