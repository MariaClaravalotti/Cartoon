import React from "react"
import * as S from "./FooterStyle"
import WB from "./FotosFooter/WB.png"
import Linkedin from "./FotosFooter/Linkedin.png"
import Github from "./FotosFooter/Github.png"

function Footer (){
    return(
        <footer>
            <S.StyledSection>
                <img src={WB} alt="" />

                <S.StyledDiv>
                <h2>Sobre nós</h2>
                <h2>Produtos </h2>
                <h2>Personagens</h2>
                <img src={Github} alt="" /> 
                <img src={Linkedin} alt="" />
                </S.StyledDiv>
            </S.StyledSection> 

            <S.SectionStyled>
            <h2>© 2024 Cartoon Network</h2>
            </S.SectionStyled>
            
        </footer>
    )
}
export default Footer
