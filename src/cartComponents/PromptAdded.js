import React from 'react'

export default function PromptAdded({ prompt }) {

    if (prompt) {
        return (
            <div className="bg-warning prompt">
                Kirja lisätty ostoskoriin.
            </div>
        )
    } else {
        return (
            null
        )
    }
}
