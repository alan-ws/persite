import React from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../components/modal";
import { ModalStore } from "../../store";
import { Card, Content, Title } from "../../styles";

export function Portfolio() {
  const onClickHandler = ModalStore.useStore((state) => state.triggerModal);
  const bb = useParams();
  console.log(bb);

  const projects = [
    {
      name: "kiroku",
      description: "dental note platform",
    },
    {
      name: "hadean",
      description: "disctributed computation",
    },
    {
      name: "weezy",
      description: "15 minute grocery delivery",
    },
    {
      name: "blurb.it",
      description: "next-gen social platform",
    },
    {
      name: "grounds.gg",
      description: "esports crypto earning",
    },
    {
      name: "dynx.doc",
      description: "dynamic docx",
    },
    {
      name: "cubis.co",
      description: "virtual queuing",
    },
    {
      name: "rozy",
      description: "easy royality program",
    },
    {
      name: "propa.tech",
      description: "clear guidance and help across the buying and selling of properties",
    },
    {
      name: "jots",
      description: "eSports job board",
    },
    {
      name: "chan",
      description: "Vegan recipe and shopping list generator",
    },
    {
      name: "opal",
      description: "Open-Social, never restricted, always governed",
    },
    {
      name: "opad",
      description: "Open-Ads, never restricted, always governed",
    },
    {
      name: "equip",
      description: "Startup equity sale/buy platform. Drive reform via action!",
    },
  ];

  return (
    <>
      <Content>
        {projects.map((value, index) => {
          return (
            <Card key={index} onClick={onClickHandler}>
              <div>
                <h1>{value.name}</h1>
                <p>{value.description}</p>
              </div>
            </Card>
          );
        })}
      </Content>
      <Modal />
    </>
  );
}
