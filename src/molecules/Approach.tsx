import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

interface PROPS {
  id: number;
  text: string;
  image: string;
  impact: string;
  content: string;
}

const Approach: React.FC<PROPS> = ({ id, text, image, impact, content }) => {
  return (
    <ApproachBox>
      <Text>{text}</Text>
      <Box>
        <Empty></Empty>
        <ImgBox>
          <Num>
            <H1 style={{ color: "white" }}>{id}</H1>
          </Num>
          <Img src={image} />
          <MediaQuery maxWidth={768}>
            <Impact src={impact} />
          </MediaQuery>
        </ImgBox>
        <MediaQuery minWidth={768}>
          <Impact src={impact} />
        </MediaQuery>
      </Box>
      <Content>{content}</Content>
    </ApproachBox>
  );
};

export default Approach;

const ApproachBox = styled.div`
  height: 500px;
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Text = styled.h2`
  color: white;
  text-align: center;
  padding: 0 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Num = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #f29f1c;
  z-index: 1;
  @media (max-width: 768px) {
    width: 47px;
    height: 47px;
    top: 0px;
    left: -20px;
  }
`;

const H1 = styled.h1`
  color: white;
  margin: 0;
  padding-top: 10px;
  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 250px;
  height: 250px;
  border-radius: 145px;
  border: solid 20px #f29f1c;
  z-index: 2;
  @media (max-width: 768px) {
    top: 5px;
    left: -10px;
    width: 167px;
    height: 167px;
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 300px;
  padding-top: 0px;
  margin-left: 10%;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: 768px) {
    height: 230px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Impact = styled.img`
  margin-left: 10%;
  border-radius: 50%;
  @media (max-width: 768px) {
    position: absolute;
    top: -20px;
    right: -30px;
    width: 150px;
    height: 150px;
    z-index: 1;
  }
`;

const Empty = styled.div`
  width: 300px;
  @media (max-width: 768px) {
    width: 0px;
  }
`;

const Content = styled.h3`
  color: white;
  padding: 0 20px;
  @media (max-width: 768px) {
    text-align: left;
    font-size: 14px;
  }
`;
