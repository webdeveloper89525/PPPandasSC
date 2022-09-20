import React from "react";
import styled from "styled-components";
import P1 from "../assets/imgs/sq-panda-1.png";
import P2 from "../assets/imgs/sq-panda-2.png";
import P3 from "../assets/imgs/sq-panda-3.png";
import P4 from "../assets/imgs/sq-panda-4.png";
import P5 from "../assets/imgs/sq-panda-5.png";
import P6 from "../assets/imgs/sq-panda-6.png";
import P7 from "../assets/imgs/sq-panda-7.png";
import P8 from "../assets/imgs/sq-panda-8.png";
import RarityTable from "../components/RarityTable";

const Wrap = styled.div`
  background: #ff9a80;
  padding: 4vw 10vw;
`;

const Heading = styled.h2`
  margin-top: 1.5rem;
  font-size: 1.7vw;
  color: #292929;
  text-align: center;
  font-weight: bold;
  @media (max-width: 764px) {
    font-size: 5.5vw;
  }
`;

const PandasWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  @media (max-width: 756px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CollectionWrap = styled.div`
  padding: 1rem;
  background: #d3b0f2;
`;

const CollectionHeading = styled.h2`
  margin-top: 1.5rem;
  font-size: 1.7vw;
  color: #292929;
  text-align: center;
  font-weight: bold;
  @media (max-width: 764px) {
    font-size: 5.5vw;
  }
`;

const CollectionListWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  margin-top: 2rem;
  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`;

const CollectionImg = styled.img`
  width: 65%;
  border-radius: 1rem;
  margin: 0 auto;
`;

const CollectionItem = styled.div``;

const CollectionTitle = styled.div`
  font-size: 1vw;
  margin-top: 2rem;
  color: #292929;
  text-align: center;
  @media (max-width: 765px) {
    font-size: 3vw;
  }
`;

const CounterWrap = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`;

const PandaImg = styled.img``;

export default function Rarity() {

  return (
    <>
    <div id="rarity">
      <Wrap>
        <Heading>Rarity</Heading>
        <RarityTable />
      </Wrap>
     
    </div>
    <CollectionWrap>
    <CollectionHeading>Your Pandas</CollectionHeading>
    <CollectionListWrap>
      {/* {yourCollectibles &&
        yourCollectibles.map(item => {
          return (
            <CollectionItem key={item.id}>
              <CollectionImg src={item.imageWithPath} alt={item.name} />
              <CollectionTitle>{item.name}</CollectionTitle>
            </CollectionItem>
          );
        })} */}
    </CollectionListWrap>
   
  </CollectionWrap>
  <PandasWrap>
        <PandaImg src={P1} />
        <PandaImg src={P2} />
        <PandaImg src={P3} />
        <PandaImg src={P4} />
        <PandaImg src={P5} />
        <PandaImg src={P6} />
        <PandaImg src={P7} />
        <PandaImg src={P8} />
    </PandasWrap>
  </>
  );
}
