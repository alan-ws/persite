import React from "react";
import { keyframes, styled } from "goober";
import { useModalStore } from "../../store";

const rotate = keyframes`
    from {
      opacity: 0;
      transform: translateY(40%);
    }
    to { opacity: 1 }
`;

const ModalContainer = styled("div")<{ display: boolean }>`
  ${(props) => (props.display ? `` : `display: none;`)}
  position: fixed;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: 10% auto; /* 15% from the top and centered */
  border-radius: 16px;
  width: 30%;
  height: 350px;
  animation: ${rotate} 0.3s ease-in-out;
`;

const Header = styled("header")`
  height: inherit;
  background: url("https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F3-martin-adams-764547-unsplash-1200x300.jpg")
    no-repeat;
  border-radius: 16px;
`;
const Section = styled("section")``;
const Close = styled("div")``;

export function Modal() {
  const { isOpen, triggerModal } = useModalStore((state) => state);

  return (
    <ModalContainer display={isOpen}>
      <Content>
        <Header>
          <Close onClick={triggerModal}>X</Close>
        </Header>
        <Section></Section>
      </Content>
    </ModalContainer>
  );
}
