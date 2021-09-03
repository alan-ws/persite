import React from "react";
import { keyframes, styled } from "goober";
import { ModalStore } from "../../store";
import { Title } from "../../styles";

const buttonUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(40%);
    }
    to { opacity: 1; }
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const fadeOut = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
`;

const zoomOut = keyframes`
    0% { scale(1, 1); }
    100% { scale(0, 0); }
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
  animation: ${fadeIn} 0.2s linear;
`;

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: 10% auto; /* 15% from the top and centered */
  border-radius: 16px;
  width: 30%;
  height: 350px;
  animation: ${buttonUp} 0.3s ease-in-out;
  box-shadow: -3px 10px 29px -10px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: -3px 10px 29px -10px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: -3px 10px 29px -10px rgba(0, 0, 0, 0.62);
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
  const { isOpen, triggerModal } = ModalStore.useStore((state) => state);

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
