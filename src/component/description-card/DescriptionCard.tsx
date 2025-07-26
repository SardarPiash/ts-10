import React from 'react'

export default function DescriptionCard({ children, type }: { children: any; type: string }) {
    return (
        <div id={type} className="border p-5 flex flex-row items-center rounded-md">
            {
                children
            }
        </div>
    )
}
