import "./styles.css";
import React, { useState } from "react";

const emojiiDictionary = {
  "ð": "Grinning Face",
  "ð": "Grinning Face with Big Eyes",
  "ð": "Grinning Face with Smiling Eyes",
  "ð": "Beaming Face with Smiling Eyes",
  "ð": "Grinning Squinting Face",
  "ð": "Grinning Face with Sweat",
  "ðĪĢ": "Rolling on the Floor Laughing",
  "ð": "Face with Tears of Joy",
  "ð": "Slightly Smiling Face",
  "ð": "Upside-Down Face",
  "ð": "Winking Face",
  "ð": "Smiling Face with Smiling Eyes",
  "ð": "Smiling Face with Halo",
  "ðĨ°": "Smiling Face with Hearts",
  "ð": "Smiling Face with Heart-Eyes",
  "ðĪĐ": "Star-Struck",
  "ð": "Face Blowing a Kiss",
  "ð": "Kissing Face",
  "ð": "Kissing Face with Closed Eyes",
  "ð": "Kissing Face with Smiling Eyes",
  "ð": " Face Savoring Food",
  "ð": " Face with Tongue",
  "ð": " Winking Face with Tongue",
  "ðĪŠ": " Zany Face",
  "ð": " Squinting Face with Tongue"

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
