import React from "react";
import EmojiIcon from "./EmojiIcon";
import EmojiMeaning from "./EmojiMeaning";

function Emoji(props) {
    return (
        <dl className="dictionary">
            <div className="term">
                <EmojiIcon icon={props.icon} name={props.name}></EmojiIcon>
                <EmojiMeaning meaning={props.meaning}></EmojiMeaning>
            </div>
        </dl>
    );
}

export default Emoji;