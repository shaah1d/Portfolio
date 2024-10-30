"use client"
import React, { useEffect, useState } from 'react';
import Speech from './speech';

interface InfoDisplayProps {
    info: string;
}

const Firstchain: React.FC<InfoDisplayProps> = ({ info }) => {
    const [res, setRes] = useState("Hello, and welcome! I’m Shaahid, here to assist you with any questions you may have. This model is trained using RAG on my resume. Feel free to ask about my skills, projects, or anything else you’d like to know!");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if (!info) return;

        const generateResponse = async () => {
            setIsLoading(true);
            setError(null);
            
            try {
                const response = await fetch('/api/chain', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question: info }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'An error occurred while processing your request');
                }

                if (!data.success) {
                    throw new Error(data.error || 'Failed to get a valid response');
                }

                setRes(data.response);
            } catch (error: any) {
                console.error('Error:', error);
                setError(error.message || 'An error occurred while processing your request.');
                setRes(''); // Clear any previous response
            } finally {
                setIsLoading(false);
            }
        };

        generateResponse();
    }, [info]);
    
    return (
        <main className=" flex-grow flex justify-center items-center overflow-auto">
            <div className="w-[80%]">
                {isLoading && (
                    <div className="text-center text-gray-600">Analysing..</div>
                )}
                
                {error && (
                    <div className="text-red-600 text-center mb-4">
                        {error}
                    </div>
                )}
                
               
                    <>
                        <Speech response={res} />
                        
                        <div className="mt-4 text-yellow-500 font-mono text-lg">
                            {res}
                        </div>

                        <h1 className="text-yellow-500 font-bold text-sm text-center mt-5 ">
                       Resume.

                        </h1>
                    </>
             
            </div>
        </main>
    );
}

export default Firstchain;
