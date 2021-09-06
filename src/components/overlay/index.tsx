import { keyframes, styled } from "goober";
import { ModalStore } from "../../store";

const buttonUp = keyframes`
    from {
      opacity: 0;
      transform: translateX(-40%);
    }
    to { opacity: 1; }
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
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
  background-color: #fefefe;
  width: 60%;
  height: 100%;
  animation: ${buttonUp} 0.3s ease-in-out;
  box-shadow: -3px 10px 29px -10px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: -3px 10px 29px -10px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: -3px 10px 29px -10px rgba(0, 0, 0, 0.62);
`;

const Header = styled("header")`
  height: inherit;
`;
const Section = styled("section")``;
const Summary = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 0.2;
`;
const Main = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 0.8;
`;
const Close = styled("div")``;

export function Overlay() {
  const { isOpen, triggerModal } = ModalStore.useStore((state) => state);

  return (
    <ModalContainer display={isOpen} onClick={triggerModal}>
      <Content>
        <Summary>
          <p>fsef</p>
          <p>fsef</p>
          <p>fsef</p>
          <p>fsef</p>
        </Summary>
        <Main>
          <p>fsef</p>
          <p>fsef</p>
          <p>fsef</p>
          <p>fsef</p>
        </Main>
      </Content>
    </ModalContainer>
  );
}
