import React from "react";

import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import { COLORS } from "@/utils/ui";

import ProfileBox from "./components/ProfileBox";

const columnCSS = css`
  width: 100%;
  display: flex;

  @media (min-width: 992px) {
    width: 48%;
    margin: 0 1%;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 40px;
  z-index: 2;
`;

const TextColumn = styled.div`
  ${columnCSS}
  text-align: center;
  flex-direction: column;

  @media (min-width: 992px) {
    padding-left: 40px;
  }
`;

const PhotoColumn = styled.div`
  ${columnCSS}
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: 992px) {
    padding-top: 0;
  }
`;

const Title = styled.h1`
  margin-top: 3em;
  font-size: 1.875rem;
  color: ${COLORS.orange[0]};

  @media (min-width: 992px) {
    margin-top: 0;
    font-size: 5.875rem;
  }
`;

const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 1rem;
  margin-top: 0.5em;

  @media (min-width: 992px) {
    font-size: 1.7rem;
  }
`;

const DiamondButtonOutter = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${COLORS.white[0]};
  position: absolute;
  left: 140px;
  bottom: 80px;
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
        <ProfileBox />
      </PhotoColumn>
      <DiamondButtonOutter>
        <span>{t("content:cta-button")}</span>
      </DiamondButtonOutter>
    </Wrapper>
  );
};

export default Content;
