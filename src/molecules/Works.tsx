import React from "react";
import styled from "styled-components";

interface PROPS {
  image: string;
  category: string;
  title: string;
}

const Clients: React.FC<PROPS> = ({ image, category, title }) => {
  return (
    <Box>
      <Img src={image} />
      <TextBox>
        <Text1>{category}</Text1>
        <br />
        <Text2>{title}</Text2>
      </TextBox>
    </Box>
  );
};

export default Clients;

const Box = styled.div`
  width: 300px;
  height: 400px;
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
  top: 160px;
  z-index: 2;
  background-color: white;
  width: 100%;
`;

const Text1 = styled.p`
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  color: red;
`;

const Text2 = styled.p`
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  font-size: 20px;
`;
