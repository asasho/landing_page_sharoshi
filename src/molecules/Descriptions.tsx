import React from "react";
import styled from "styled-components";

interface PROPS {
  id: number;
  image: string;
  text1: string;
  text2: string;
}

const Descriptions: React.FC<PROPS> = ({ id, image, text1, text2 }) => {
  return (
    <Box>
      <Icon>
        <Circle>
          <h3 style={{ color: "white", fontSize: 14, paddingTop: "2px" }}>
            {id}
          </h3>
        </Circle>
        <img
          src={image}
          style={{ width: "80px", height: "80px", borderRadius: "40px" }}
        />
      </Icon>
      <Text>
        <h2 style={{ color: "#E66D45", textAlign: "left" }}>{text1}</h2>
        <h2 style={{ color: "black", textAlign: "left" }}>{text2}</h2>
      </Text>
    </Box>
  );
};

export default Descriptions;

const Box = styled.div`
  width: 90%;
  margin: 0 5% 0 5%;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 150px;
  height: 140px;
  @media (max-width: 768px) {
    width: 90px;
    height: 120px;
  }
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  margin-right: auto;
  background-color: #555;
  border-radius: 15px;
`;

const Text = styled.div`
  margin: 0;
  text-align: left;
  align-items: center;
  font-size: 21px;
  @media (max-width: 768px) {
    font-size: 12px;
    padding-left: 10px;
  }
`;
