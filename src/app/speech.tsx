import React, { useEffect, useRef, useState } from 'react';

interface SpeechProps {
  response: string;
}

const Speech: React.FC<SpeechProps> = ({ response }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateSpeechBlob = async (inputText: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Speech generation failed: ${errorData}`);
      }

      const audioBlob = await response.blob();
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      return url;
    } catch (error) {
      console.error('Error generating speech:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (response) {
      const initializeAudio = async () => {
        const url = await generateSpeechBlob(response);
        if (url && audioRef.current) {
          audioRef.current.src = url;
          try {
            await audioRef.current.play();
          } catch (error) {
            console.error('Error playing audio:', error);
          }
        }
      };

      initializeAudio();
    }
    
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [response]);

  return (
    <div className="flex flex-col items-center">
     
      <div className='w-[150px] h-[150px] rounded-full object-cover text-center text-white shadow-2xl bg-yellow-500 shadow-yellow-700/60 hover:shadow-yelow-600/70 transition-shadow duration-300 mb-4 flex justify-center items-center'>
      {isLoading ? <span className="loading loading-dots loading-lg"></span> : <div>shaah1d</div> }
     </div>
   
      <audio 
        ref={audioRef} 
        style={{ display: 'none' }} 
      />
    
    </div>
  );
};

export default Speech;
