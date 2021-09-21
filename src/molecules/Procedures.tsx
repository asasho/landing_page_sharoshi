import React from "react";
import styled from "styled-components";

interface PROPS {
  id: number;
  title: string;
  image: any;
  text: string;
}

const Procedures: React.FC<PROPS> = ({ id, title, image, text }) => {
  return (
    <Box>
      <Text>
        {id}．{title}
      </Text>
      {image}
      <Content
        style={{ textAlign: "left", paddingLeft: "20px", fontWeight: 600 }}
      >
        {text}
      </Content>
    </Box>
  );
};

export default Procedures;

const Box = styled.div`
  width: 25%;
  height: 500px;
  margin: 30px 4% 0 4%;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Text = styled.h2`
  font-size: 21px;
`;

const Content = styled.p`
  font-size: 15px;
  color: rgb(51, 51, 51);
`;
