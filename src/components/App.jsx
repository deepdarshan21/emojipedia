import React from "react";
import Emoji from "./Emoji";
import emojiData from "../emojipedia";

function eachData(data) {
    return (
        <Emoji
            key={data.id}
            name={data.name}
            icon={data.emoji}
            meaning={data.meaning}
        ></Emoji>
    );
}

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            {/* {console.log(emojiData)} */}
            {emojiData.map(eachData)}
        </div>
    );
}

export default App;
