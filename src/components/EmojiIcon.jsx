import React from "react";

function EmojiIcon(proprs) {
    return (
        <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
                {proprs.icon}
            </span>
            <span>{proprs.name}</span>
        </dt>
    );
}

export default EmojiIcon;
