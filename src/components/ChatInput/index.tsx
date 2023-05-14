import { PaperPlaneRight } from "phosphor-react-native";
import { Container, Input, MessageSend } from "./styles";

export function ChatInput() {
  return (
    <Container>
      <Input placeholder="Digite sua mensagem" placeholderTextColor={"#fff"} />
      <MessageSend>
        <PaperPlaneRight size={28} color="#FFF" />
      </MessageSend>
    </Container>
  );
}
