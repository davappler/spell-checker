import React,{useState} from "react";
// import { TextField } from '@material-ui/core';
import "./SpellChecker.scss";

export function SpellChecker(){

  const [currentSentence,setCurrentSentence]=useState("")
  // const [correctSentence,setCorrenSentence]=useState("")

  function handleSubmit(e){
    e.preventDefault ();
    console.log(currentSentence)
    checkSpellings(currentSentence)
  }

  function handleChange(e){
    setCurrentSentence(e.target.value)
  }

  function checkWordExistence(word){
    word=word.toLowerCase();
    let arrayOf850words=["a","b","c","d","e"];
    return arrayOf850words.includes(word)
  }

  function checkSpellings(currentSentence){
    let wordsArray=currentSentence.split(" ")
    let indexArray=[]
    let exist
    wordsArray.map((word,index)=>{
      exist=checkWordExistence(word)
      if(!exist)
      {
        indexArray.push(index)
      }
      return
    })
    console.log(wordsArray)
  }

  return( 
  <div className="spell-check-container">
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
    <p></p>
  </div>)
}

export default SpellChecker;