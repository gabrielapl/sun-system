import {
  Avatar,
  Container,
  MessageContainer,
  MessageText,
  Name,
} from "./styles";

interface MessageProps {
  isOwner?: boolean;
}

export function Message({ isOwner = false }: MessageProps) {
  return (
    <Container isOwner={isOwner}>
      <Avatar isOwner={isOwner}>
        <Name>FA</Name>
      </Avatar>
      <MessageContainer>
        <MessageText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, magni.
          At inventore dicta labore fuga! Velit excepturi, sed, rerum odio
          voluptatem, ad neque nemo facilis iure ipsam possimus unde minima?
        </MessageText>
      </MessageContainer>
    </Container>
  );
}
