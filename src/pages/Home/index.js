import React from 'react';
import * as S from './styles'
import Form from '../../components/Form'

const Home = () =>{
    return (
        <S.Wrapper>
            <S.InfoWrapper>    
                <S.InfoContent>
                    <S.Title>
                        ENCURTADOR DE URL NG
                    </S.Title>
                    <S.Description>
                        Encurtador de URL NG é uma ferramenta poderosa para encurtar links. 
                        Use o Encurtador de Link para diminuir uma URL longa e gerar um link curto. Encurte
                        o link que você quiser.
                    </S.Description>
                </S.InfoContent>
            </S.InfoWrapper>

            <S.FormWrapper>
                <Form />
            </S.FormWrapper>
            
        </S.Wrapper>
    )
} 

export default Home;