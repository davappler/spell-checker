import React,{useState} from "react";
// import { TextField } from '@material-ui/core';
import "./SpellChecker.scss";

export function SpellChecker(){

  const [currentSentence,setCurrentSentence]=useState("")

  function handleSubmit(e){
    e.preventDefault ();
    console.log(currentSentence)
    checkSpellings(currentSentence)
  }

  function handleChange(e){
    setCurrentSentence(e.target.value)
  }

  function checkSpellings(currentSentence){
    let wordsArray=currentSentence.split(" ")
    console.log(wordsArray)
  }

  return( <div className="spell-check-container">
    <form className="spell-check-container__form" onSubmit={handleSubmit}>
      <label>
        <textarea
          className="spell-check-container__form__input"
          value={currentSentence}
          onChange={handleChange
          }
        />
      </label>
      <input className="spell-check-container__form__btn" type="submit" value="Submit" />
    </form>
  </div>)
}

export default SpellChecker;