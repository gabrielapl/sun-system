import { Background } from "../../components/Background";
import { Container, Header, MessageList, Title } from "./styles";
import { BackButton } from "../../components/BackButton";
import { Message } from "../../components/Message";
import { ChatInput } from "../../components/ChatInput";

export function Chat() {
  const array = Array(24)
    .fill(0)
    .map((_, index) => {
      const t = Math.floor(Math.random() * 8);

      let isOwner = false;

      if (t == 6) {
        isOwner = true;
      }

      return {
        isOwner,
      };
    });

  return (
    <Background>
      <Container>
        <Header>
          <BackButton />
        </Header>

        <Title>Chat</Title>

        <MessageList
          data={array}
          renderItem={({ item }: any) => <Message isOwner={item.isOwner!} />}
        />

        <ChatInput />
      </Container>
    </Background>
  );
}
