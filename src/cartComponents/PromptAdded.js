import React from 'react'

export default function PromptAdded({ prompt }) {

    if (prompt) {
        return (
            <div className="prompt shadow">
                Lisätty ostoskoriin.
            </div>
        )
    } else {
        return null
    }
}
