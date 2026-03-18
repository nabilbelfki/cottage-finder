import React from 'react'

export default function Spacer({ height, width }: { height: number, width: number }) {
    return (
        <div style={{ height: height, width: width }}></div>
    )
}