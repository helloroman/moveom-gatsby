import React from 'react';
import styled from 'styled-components';
import VerticalPhoto from 'components/Atoms/VerticalPhoto';
import Header from 'components/Organisms/Header';
import HeroImagePhoto from 'assets/img/heroimage.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImage = () => {
  return (
    <Wrapper>
      <VerticalPhoto photo={HeroImagePhoto} />
    </Wrapper>
  );
};

export default HeroImage;
