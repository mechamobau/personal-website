import React from "react";

import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import { COLORS } from "@/utils/ui";

const profile = require("@/assets/img/profile.png");

const columnCSS = css`
  width: 48%;
  display: inline-block;
  margin: 0 1%;
`;

const Wrapper = styled.section`
  display: flex;
  position: relative;
  padding-top: 40px;
`;

const TextColumn = styled.div`
  ${columnCSS}
  text-align: center;
  padding-left: 40px;
`;

const PhotoColumn = styled.div`
  ${columnCSS}
  height: 35.3rem;
`;

const Title = styled.h1`
  margin-top: 3em;
  font-size: 5.875rem;
  color: ${COLORS.orange[0]};
`;

const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 1.7rem;
  margin-top: 0.5em;
`;

const ContainerPhoto = styled.div`
  display: inline-block;
  transform: rotate(45deg);
  border: 8px solid ${COLORS.orange[0]};
  padding: 17px;
  width: 35.3rem;
  height: 35.3rem;
  margin-top: 200px;
  margin-left: 120px;
`;

const BackgroundBox = styled.div`
  display: inline-block;
  background: ${COLORS.orange[0]};
  border: 8px solid ${COLORS.orange[0]};
  outline: 4px;
  width: 32rem;
  height: 32rem;
  overflow: visible;
`;

const Box = styled.div`
  display: inline-block;
  height: 150%;
  vertical-align: bottom;
  width: 150%;
  margin-top: -50%;
  margin-left: -50%;
  overflow: hidden;
`;

const ProfileImage = styled.img.attrs({
  src: profile,
  alt: "My profile photo"
})`
  width: 57.625rem;
  transform: translate(1rem, 0.25rem) rotate(-45deg);
`;

const DiamondButtonOutter = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${COLORS.white[0]};
  position: fixed;
  left: 140px;
  bottom: 100px;
  transform: rotate(45deg);
  border: 4px solid ${COLORS.white[0]};
  height: 10.6875rem;
  width: 10.6875rem;
  outline: 0;

  &:hover {
    cursor: pointer;
  }

  & > span {
    display: block;
    transform: rotate(-45deg);
    font-size: 1.5rem;
  }

  @media (min-width: 960px) {
    display: inline-block;
  }
`;

const Content = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TextColumn>
        <Title>{t("content:title")}</Title>
        <Subtitle>{t("content:subtitle")}</Subtitle>
      </TextColumn>
      <PhotoColumn>
        <ContainerPhoto>
          <BackgroundBox>
            <Box>
              <ProfileImage />
            </Box>
          </BackgroundBox>
        </ContainerPhoto>
      </PhotoColumn>
      <DiamondButtonOutter>
        <span>{t("content:cta-button")}</span>
      </DiamondButtonOutter>
    </Wrapper>
  );
};

export default Content;
