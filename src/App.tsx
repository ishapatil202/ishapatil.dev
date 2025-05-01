import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import Introduction from './components/Introduction';
function App() {
    const [mode, setMode] = useState<string>('dark');
    
    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
                <Main />
                <div id="introduction">
                    <Introduction />
                </div>
                <div id="expertise">
                    <Expertise />
                </div>
                <div id="timeline">
                    <Timeline />
                </div>
                <div id="project">
                    <Project />
                </div>
                <div id="contact">
                    <Contact />
                </div>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;