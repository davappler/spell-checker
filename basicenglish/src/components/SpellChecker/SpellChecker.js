import React,{useState} from "react";
// import { TextField } from '@material-ui/core';
import "./SpellChecker.scss";

export function SpellChecker(){

  const [currentSentence,setCurrentSentence]=useState("")
  const [correctSentence,setCorrectSentence]=useState("")


  function handleChange(e){
    setCurrentSentence(e.target.value)
  }

  function checkWordExistence(word){
    let punctuationMarks=[".","?","!",",",":",";","-","[","]","{","}","(",")","'",'"',"...",""]
    let finalWordArray=[]
    let finalWord=""
    word=word.toLowerCase();
    let wordArray=word.split("")

    wordArray.map((character,index)=>{
      if(!punctuationMarks.includes(character))
        finalWordArray.push(character)  
    })

    let arrayOf850words=["my","name","is","davinder","singh"];
    finalWord=finalWordArray.join("")
    let value =arrayOf850words.includes(finalWord)
    return value
  }

  function checkSpellings(currentSentence){
    let wordsArray=currentSentence.split(" ")
    let incorrectWordsArray=[]
    let exist
    wordsArray.map((word,index)=>{
      exist=checkWordExistence(word) // This will check if word exists in 850 english words or not
      if(!exist)
      {
        incorrectWordsArray.push(word)
      }
    })

      console.log(incorrectWordsArray)
      incorrectWordsArray.map(incorrectWord=>{
      let temporarySentence
      if(correctSentence)
        temporarySentence=correctSentence
      else
        temporarySentence=currentSentence
      console.log(incorrectWord)
      let abc =temporarySentence.replace(incorrectWord, `<span className="incorrect-word">${incorrectWord}</span>`);
      console.log(abc)
      setCorrectSentence(abc)
      })

  }

      function handleSubmit(e){
      e.preventDefault ();
      setCorrectSentence(currentSentence)
      checkSpellings(currentSentence)
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
    <div className="spell-check-container__correct-sentence" dangerouslySetInnerHTML={{ __html: correctSentence }} />
  </div>)
}

export default SpellChecker;