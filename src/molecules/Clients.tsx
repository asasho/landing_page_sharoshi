import React from "react";
import styled from "styled-components";

interface PROPS {
  image: string;
  company: string;
  comment: string;
}

const Clients: React.FC<PROPS> = ({ image, company, comment }) => {
  return (
    <Box>
      <Img src={image} />
      <TextBox>
        <Text>{company}</Text>
        <br />
        <Text>{comment}</Text>
      </TextBox>
    </Box>
  );
};

export default Clients;

const Box = styled.div`
  width: 270px;
  height: 450px;
  margin: auto;
  border-radius: 30px;
  box-shadow: 3px 3px 5px #e3e5ea, -3px -3px 5px #fff;
  position: relative;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Img = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: auto;
  border-radius: 30px 30px 0 0;
`;

const TextBox = styled.div`
  position: absolute;
  top: 190px;
  z-index: 2;
  background-color: white;
`;

const Text = styled.p`
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
`;
