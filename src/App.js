import React, { useState } from "react";
import "./styles.css";

var shopMan = {
  KEKW:
    " https://yt3.ggpht.com/ytc/AKedOLRc_LJeSrh2Mo5PUSgGRnVmQ776qAhrzTzGsVho=s900-c-k-c0x00ffffff-no-rj",
  Sadge: "https://i.kym-cdn.com/photos/images/facebook/001/857/750/4ab.png",
  widePeepoHappy:
    "https://static-cdn.jtvnw.net/jtv_user_pictures/37e7599f-250f-41d6-9d69-4019200f0a08-profile_image-300x300.png",
  xqcL: "https://i.redd.it/ltfut493uyq41.jpg"
};

var shopList = Object.keys(shopMan);
export default function App() {
  var [userInput, setUserInput] = useState("");
  var [meaning, setMeaning] = useState(
    "https://cdn0.iconfinder.com/data/icons/social-network-7/50/16-512.png"
  );

  function changeHandler(event) {
    var userInput = event.target.value;

    setUserInput(userInput);
    clickHandler(userInput);
  }

  function clickHandler(item) {
    var meaning = shopMan[item];
    console.log(item);
    if (meaning === undefined) {
      meaning =
        "https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "purple" }}>TWITCH EMOTE DICTIONARY</h1>
      <input onChange={changeHandler}></input>

      <div>
        <img
          src={meaning}
          style={{ height: "50px", width: "50px", padding: "1.5rem" }}
        />
      </div>
      <h3>Emotes we know</h3>
      {shopList.map((item) => {
        return (
          <span
            key={item}
            onClick={() => clickHandler(item)}
            style={{ cursor: "pointer", padding: "0.5rem" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
