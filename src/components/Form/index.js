import React from 'react';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Alert from '../Alert'

const Form = () => {
    const { register, handleSubmit } = useForm();
    const MySwal = withReactContent(Swal);

    const generateURL = async (originURL) =>{
        try{
            const response = await api.post(
                `shorten`,{
                    originURL,
            })
            if(response.data.newURL)
                return response.data.newURL.shortURL;
            return response.data.shortURL;
        } catch(error) {
            console.log(error);
        }
    }

    const onSubmit = async (data) => {
        const { URL } = data;
        const newURL = await generateURL(URL);
        return MySwal.fire(
            <Alert>
                {newURL}
            </Alert>
        )
    };

    return(
        <S.Wrapper>
            <S.FormURL onSubmit={handleSubmit(onSubmit)}>
                <S.InputURL 
                    placeholder="Digite a url que deseja encurtar"
                    required
                    {...register('URL', { required: true})}
                 />
                <S.ButtonURL>ENCURTAR</S.ButtonURL>
            </S.FormURL>
        </S.Wrapper>
    );
}

export default Form;