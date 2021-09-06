import { styled } from "goober";
import React, { SyntheticEvent, useCallback, useEffect, useRef, useState } from "react";
import { style, svgs, Title } from "../../styles";

const Content = styled("div")`
  width: 100%;
`;

const Form = styled("form", React.forwardRef)`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
  border: 1px solid black;
  padding: 16px;
  box-shadow: -13px 15px 0px 2px rgba(0, 0, 0, 0.21);
  -webkit-box-shadow: -13px 15px 0px 2px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: -13px 15px 0px 2px rgba(0, 0, 0, 0.21);
`;

const TextArea = styled("textarea", React.forwardRef)`
  all: unset;
  height: 100px;
  background-color: rgba(219, 219, 212, 1);
  border-radius: 4px;
  padding: 16px 24px 16px 24px;
`;

const TextAreaCover = styled("div")`
  display: flex;
  background: linear-gradient(
    to left,
    ${style.colors.layer} 0%,
    ${style.colors.layer} 70%,
    rgba(219, 219, 212, 1) 70%,
    rgba(219, 219, 212, 1) 100%
  );
  width: 100%;
  height: ${100 + 32}px;
  border-radius: 4px;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const InputField = styled("input")`
  all: unset;

  padding: 16px 24px 16px 24px;
  border-radius: 4px;
  background-color: rgba(219, 219, 212, 1);
  margin-bottom: 16px;

  &::placeholder {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const Button = styled("button")`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  padding: 16px;
  border: 1px solid ${style.colors.title};
  border-radius: 4px;
  margin-top: 64px;
  margin-bottom: 8px;
  width: 50%;
  background-color: ${style.colors.layer};
  font-weight: bold;
  font-size: 1.75rem;
  color: ${style.colors.title2};

  &:hover {
    cursor: pointer;
  }
`;

const AddIcon = styled("img")`
  width: 15%;
  margin-right: 88px;
  margin-left: 24px;
`;

const IconLable = styled(Title)`
  color: ${style.colors.title2};
  font-weight: bold;
`;

const FormTitle = styled(Title)`
  display: flex;
  width: 40%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 1.5%;
  font-size: 4rem;
`;

interface FocusEvent<T = Element> extends SyntheticEvent<T> {
  relatedTarget: EventTarget | null;
  target: EventTarget & T;
}

export function Contact() {
  const [addNote, setAddNote] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (addNote && textAreaRef.current) textAreaRef.current.focus();
  }, [addNote, textAreaRef.current]);

  const handleNoteCover = useCallback(() => {
    setAddNote((prev) => !prev);
  }, []);

  function blurNoteCover(evt: FocusEvent<HTMLTextAreaElement>) {
    if (evt.target.value === "") handleNoteCover();
    return;
  }

  function submitForm() {}

  return (
    <Content>
      <FormTitle>Contact Us.</FormTitle>
      <Form ref={formRef}>
        <InputField ref={nameRef} placeholder="name" type="text" required />
        <InputField ref={emailRef} placeholder="email" type="email" required />
        <InputField ref={numberRef} placeholder="mobile" type="tel" required />
        {addNote ? (
          <TextArea ref={textAreaRef} placeholder="note" onBlur={blurNoteCover} />
        ) : (
          <TextAreaCover onClick={handleNoteCover}>
            <AddIcon src={`${svgs.icons.addSymbol()}`} />
            <IconLable>Notes</IconLable>
          </TextAreaCover>
        )}
        <Button onClick={submitForm}>Submit</Button>
      </Form>
    </Content>
  );
}
