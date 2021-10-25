import React from 'react';
import * as S from './styles'

const Form = () => {

    return(
        <S.Wrapper>
            <S.FormURL>
                <S.InputURL placeholder="Digite a url que deseja encurtar" />
                <S.ButtonURL>ENCURTAR</S.ButtonURL>
            </S.FormURL>
        </S.Wrapper>
    );
}

export default Form;