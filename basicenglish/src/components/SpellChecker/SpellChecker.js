import React,{useState} from "react";
import "./SpellChecker.scss";
import arrayOf850words from "../../Assets/words.json";

export function SpellChecker(){

  const [currentSentence,setCurrentSentence]=useState("")
  const [correctSentence,setCorrectSentence]=useState()

  
  function handleChange(e){
    setCurrentSentence(e.target.value)
  }



  // This is a boolean function, it takes a word and checks if that word is in the list of 850 BASIC words
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



  // This function will hightlight the incorrect words(words that are not in the BASIC 850 words)
  function highlightIncorrect(incorrectWordsArray, userInput) {
    let result = userInput;
    incorrectWordsArray.forEach(incorrectWord=>{
        result = result.replaceAll(incorrectWord, `<span className="incorrect-word">${incorrectWord}</span>`);
      })
    return result;
  }




  // This function takes the user input sentence and breaks our problem to check the spelling one by one.
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