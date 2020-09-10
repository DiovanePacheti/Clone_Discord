import React,{ useRef, useEffect } from 'react';
import { Container , Messages, InputWrapper, Input, InputIcon} from './styles'
import ChannelMessage , {Mention} from '../CannelMessage';

const ChannelData: React.FC = () =>{
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
    useEffect(() =>{
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    },[messagesRef]);
    return(
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) =>(
                    <ChannelMessage
                    author="Diovane Nunes"
                    date="22/08/2020"
                    content="Madrugada codando"
                />    
                ))}
                <ChannelMessage
                    author="Diovane Nunes"
                    date="22/08/2020"
                    content="Madrugada codando"
                />

                <ChannelMessage
                    author="Luis Pacheti"
                    date="31/07/2020"
                    content={
                        <>
                            <Mention>@Diovane Nunes</Mention>,me passa o codigo pra eu dar uma olhada.
                        </>
                    }   
                    hasMention
                    isBot    
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversarem #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;