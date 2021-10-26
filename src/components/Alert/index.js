import React, { useState } from 'react';
import * as S from './styles';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const Alert = ( {children} ) => {
    const [ copied, setCopied ] = useState(false);

    const copyToClipboard = () =>{
        navigator.clipboard.writeText(children);
        setCopied(true);
    }

    return(
        <S.Wrapper>
            <S.Title>
                Novo URL
            </S.Title>
            <S.Content>
                <S.NewURL href={children}>
                    {children}
                </S.NewURL>
                {!copied
                ?
                    <S.ClipboardIconNotCopied icon={faClipboardCheck} onClick={copyToClipboard} /> 
                :
                    <S.ClipboardIconCopied icon={faClipboardCheck} /> 
                }
                
            </S.Content>
        </S.Wrapper>
    );
}

export default Alert;