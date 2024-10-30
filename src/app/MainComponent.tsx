
import React, { useState } from 'react'
import QuestionPrompt from '@/app/QuestionPrompt'
import Navbar from './Navbar'
import Firstchain from './Firstchain'
function MainComponent() {
  const [info, setInfo] = useState<string>(""); 


    const handleInfoUpdate = (newInfo: string) => {
        setInfo(newInfo); 
      
    };

    return (
        <div className="h-screen flex flex-col justify-between items-center">
     <Navbar />
        <div className="flex-grow flex justify-center items-center">
          <Firstchain info={info} />
         
        </div>

        <div className="w-full flex justify-center mb-5">
          <QuestionPrompt onInfoUpdate={handleInfoUpdate} />
        </div>
      </div>
    )
}

export default MainComponent