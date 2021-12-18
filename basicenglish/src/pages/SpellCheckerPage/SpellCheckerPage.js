import React from "react";
import {NavBar} from "../../components/NavBar/Navbar";
import {SpellChecker} from "../../components/SpellChecker/SpellChecker";

export function SpellCheckerPage(){
  return(
    <div>
      <NavBar />
      <SpellChecker />
    </div>
  )
}

export default SpellCheckerPage();