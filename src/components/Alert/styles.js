import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
`

export const Title = styled.h1`
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`

export const NewURL = styled.a`
` 

export const ClipboardIconNotCopied = styled(FontAwesomeIcon)`
    cursor: pointer;
    font-size: 40px;
    margin: 20px 0px 40px 0px;
    &:hover {
        opacity: 0.6;
        transform: scale(1.1);
        transition: 1s ease-out;
      }
      transition: 1s ease-out;
      opacity: 1;
      transform: scale(1);
`

export const ClipboardIconCopied = styled(FontAwesomeIcon)`
    color: green;
    font-size: 40px;
    margin: 20px 0px 40px 0px;
    transform: scale(1.1);
`