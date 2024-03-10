import React from "react"
import * as S from "./MainStyle"
import scooby from "./FotosMain/scooby.png"
import Bem10 from "./FotosMain/Bem10.png"
import Looney from "./FotosMain/Looney.png"
import gumball from "./FotosMain/gumball.png"
import meninas from "./FotosMain/meninas.png"
import tom from "./FotosMain/tom.png"

function Main(){
    return(
        <main>
            <S.StyledSection>
                <S.StyledImg  src={scooby} alt="" /> 
                <S.StyledImg  src={Bem10} alt="" />
                <S.StyledImg src={Looney}alt="" />
            
           </S.StyledSection>

           <S.StyledSection2>
            <img  src={gumball} alt="" /> 
            <img  src={meninas} alt="" />
            <img  src={tom} alt="" />
           </S.StyledSection2>
        </main>
    )
}
export default Main 