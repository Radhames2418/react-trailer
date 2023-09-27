import React from 'react'

export default function ({trailer}) {
    return (
        <>
            <div className="relative h-1/2 w-full bg-red-100 overflow-hidden shadow-inner">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src={trailer} type="video/mp4" />
                    Tu navegador no admite el elemento de video.
                </video>

                <div className="absolute inset-x-5 inset-y-16 md:inset-y-20 md:inset-x-5 lg:inset-16 flex flex-col justify-end items-start text-white w-2/3 md:w-3/6 lg:w-1/3">
                    <h2 className="md:text-2xl lg:text-4xl font-bold md:mb-3 mb-0">Spider-Man: A través del Spider-Verso</h2>
                    <p className="text-justify md:text-md line-clamp-1 md:line-clamp-3	lg:line-clamp-none	">
                        Miles Morales se embarca en una aventura épica que transportará al simpático Spiderman de Brooklyn a través del Multiverso para unir fuerzas con Gwen Stacy y un nuevo equipo.
                    </p>
                </div>
            </div>
        </>
    )
}
