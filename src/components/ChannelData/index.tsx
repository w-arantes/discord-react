import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Wellington Arantes"
            date="01/07/2020"
            content="Message"
          />
        ))}

        <ChannelMessage
          author="Elliot Alderson"
          date="01/06/2020"
          content={
            <>
              <Mention>@Wellington Arantes</Mention> Welcome!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Message #free-chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
