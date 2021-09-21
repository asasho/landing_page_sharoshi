import React from "react";
import styled from "styled-components";

interface PROPS {
  id: number;
  text: string;
}

const InformationSession: React.FC<PROPS> = ({ id, text }) => {
  return (
    <Box>
      <Num>
        <TextNum style={{ verticalAlign: "middle" }}>{id}</TextNum>
      </Num>
      <Right>
        <Text style={{ verticalAlign: "middle" }}>{text}</Text>
      </Right>
    </Box>
  );
};

export default InformationSession;

const Box = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  height: 80px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

const Num = styled.div`
  width: 80px;
  text-align: center;
  background-color: #f29f1c;
  border: none;
`;

const Right = styled.div`
  border: solid 3px #f29f1c;
  height: auto;
  width: 100%;
`;

const TextNum = styled.h2`
  align-items: center;
  color: white;
`;

const Text = styled.h2`
  font-size: 18px;
  line-height: 27px;
  padding-left: 20px;
  align-items: center;
  text-align: left;
  font-weight: 700;
`;
