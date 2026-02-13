import Image from 'next/image'
import React from 'react'

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 py-10 text-center">
            <Image
                src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
                alt="Loading"
                width={150}
                height={150}
                className="mx-auto"
            />

            <p className="text-lg font-medium">
                Initializing server, please wait...
            </p>

            <p className="text-sm text-gray-600 max-w-md">
                The frontend is hosted on Vercel, while the backend API is deployed on Render.
                Since Render may spin down inactive services, the server can take
                30–60 seconds to respond on first request.
            </p>

            <p className="text-sm text-gray-600 max-w-md">
                The database is powered by Neon (PostgreSQL).
                Thank you for your patience while the backend wakes up.
            </p>
        </div>
    )
}

export default Loading
