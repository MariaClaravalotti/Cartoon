import React from "react"
import * as S from "./HeaderStyle"
import Logo from "./FotosHeader/Logo.png"
import Analogico from "./FotosHeader/Analogico.png"
import Relogio from "./FotosHeader/Relogio.png"

function Header() {
    return (
        <S.StyledHeader>
            <S.StyledSection>
                <S.ImgStyled src={Logo} alt="" />
            </S.StyledSection>

            <S.StyledSection>
                <div>
                    <S.ImgStyled src={Analogico} alt="" />
                    <h2>JOGOS</h2>
                </div>
                <div>
                    < S.ImgStyled src={Relogio} alt="" />
                    <h2>PROGRAMÇÃO</h2>
                </div>
            </S.StyledSection>

        </S.StyledHeader>
    )
}
export default Header