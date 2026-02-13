import Image from 'next/image'
import React from 'react'

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 py-10">
            <Image
                src={'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700'}
                alt="Loading..."
                width={150}
                height={150}
                className="mx-auto"
            />
            <p>🚀 Backend is waking up on Render... Please wait 40–50 seconds.</p>
            <p>⏳ The server is deployed on Render and may take a moment to start.</p>
            <p>🙏 Thanks for your patience!</p>
        </div>
    )
}

export default Loading
