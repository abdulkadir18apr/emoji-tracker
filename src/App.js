import "./styles.css";
import React, { useState } from "react";

const emojiiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue"

};

const emojiList = Object.keys(emojiiDictionary);

export default function App() {
  // var meaning="";

  //map function in react is similar to for loop with different values
  // it maps over the array
  // var userInput;
  const [meaning, setMeaning] = useState("");
  const [userInput, setUserInput] = useState("");

  function emojiInputHandler() {
    var userInput = event.target.value;
    var meaning = emojiiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);

    console.log(meaning);
  }
  function listItemClickHandler(emoji) {
    setUserInput(emoji);
    setMeaning(emojiiDictionary[emoji]);
  }
  return (
    <div className="App">

    <header>
    <h1>Feel It</h1>
    <img src="https://media.wired.com/photos/626742b1d59c89e6ded93a0e/4:3/w_2132,h_1599,c_limit/Smiley-Faces-Submit-Own-Emoji-Culture-1207566766.jpg" alt="xyz" className="emoji-img"></img>

    </header>

    <section className="emoji-tracker">

      <h3>Emoji Tracker</h3>
      <input type="text" onChange={emojiInputHandler} value={userInput} className="input-box"></input>
      <div className="output">{meaning}</div>
      <ul className="emojiList">
        {emojiList.map(function (item, index) {
          return (
            <li
              className="inline-list"
              key={item}
              onClick={() => listItemClickHandler(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
   
</div>
  );
}
