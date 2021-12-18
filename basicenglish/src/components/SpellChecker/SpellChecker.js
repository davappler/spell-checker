import React,{useState} from "react";
import "./SpellChecker.scss";
import arrayOf850words from "../../Assets/words.json";

export function SpellChecker(){

  const [currentSentence,setCurrentSentence]=useState("")
  const [correctSentence,setCorrectSentence]=useState()

  /**
   * 
   * @param {*} e 
   */
  function handleChange(e){
    setCurrentSentence(e.target.value)
  }


  /**
   * @description it takes a word and checks if that word is in the list of 850 BASIC words
   * @param {String} word the word to check for
   * @returns {boolean} true if word exists, false if it doesn't
   */
  function checkWordExistence(word){
    let punctuationMarks=[".","?","!",",",":",";","-","[","]","{","}","(",")","'",'"',"...",""]
    let finalWordArray=[] // We will break the word into characters and then store in this array
    let finalWord="" // From the array above we will restore our word.
    word=word.toLowerCase();
    let wordArray=word.split("")

    wordArray.map((character)=>{
      if(!punctuationMarks.includes(character))
        finalWordArray.push(character)  
    })

    finalWord=finalWordArray.join("")
    let result =arrayOf850words.includes(finalWord)
    return result
  }


  /**
   * 
   * @param {*} incorrectWordsArray this is an array that contains the word that will give errors.
   * @param {*} userInput this is user input sentence
   * @returns it returns a string, invalid words will be highlighted.
   */
  function highlightIncorrect(incorrectWordsArray, userInput) {
    let result = userInput;
    incorrectWordsArray.forEach(incorrectWord=>{
        result = result.replaceAll(incorrectWord, `<span className="incorrect-word">${incorrectWord}</span>`);
      })
    return result;
  }



  /**
   * @description breaks our problem to check the spelling one by one.
   * @param {*} currentSentence is the user input
   */
  function checkSpellings(currentSentence){
    let wordsArray=currentSentence.split(" ")
    let incorrectWordsArray=[]
    let exist
    wordsArray.map((word)=>{
      exist=checkWordExistence(word) // This will check if word exists in 850 english words or not.
      if(!exist)
      {
        incorrectWordsArray.push(word)
      }
    })

    let highLightedText=highlightIncorrect(incorrectWordsArray,currentSentence)
    setCorrectSentence(highLightedText)
  }





  function handleSubmit(e){
    e.preventDefault ();
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