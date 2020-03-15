import React from "react";

import styled from "styled-components";
import profile from "@/assets/img/profile.png";

import { COLORS } from "@/utils/ui";

/**
 * The sizes used as reference to the component at all based
 * on the viewport
 */
const sizes = {
  sm: "12rem",
  md: "20rem",
};

const Container = styled.div`
  height: calc(${sizes["sm"]} + 7rem);
  width: calc(${sizes["sm"]} + 5.3rem);
  overflow: hidden;

  @media (min-width: 992px) {
    width: calc(${sizes["md"]} + 13rem);
    height: calc(${sizes["md"]} + 15rem);
  }
`;

const OuterBox = styled.div`
  display: inline-block;
  transform: translateY(60px) translateX(45px) rotate(45deg);
  border: 8px solid ${COLORS.orange[0]};
  padding: 9px;
  width: ${sizes["sm"]};
  height: ${sizes["sm"]};

  @media (min-width: 992px) {
    padding: 17px;
    transform: translateY(105px) translateX(80px) rotate(45deg);
    width: calc(${sizes["md"]} + 3.2rem);
    height: calc(${sizes["md"]} + 3.2rem);
    border: 8px solid ${COLORS.orange[0]};
  }
`;

const InnerBox = styled.div`
  display: inline-block;
  background: ${COLORS.orange[0]};
  border: 8px solid ${COLORS.orange[0]};
  outline: 4px;
  overflow: visible;
  width: calc(${sizes["sm"]} - 2.1rem);
  height: calc(${sizes["sm"]} - 2.1rem);

  @media (min-width: 992px) {
    width: ${sizes["md"]};
    height: ${sizes["md"]};
  }
`;

const ContainerPhoto = styled.div`
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
  alt: "My profile photo",
})`
  width: calc(${sizes["sm"]} * 1.7);
  transform: translate(-1rem, -1rem) rotate(-45deg);

  @media (min-width: 992px) {
    transform: translate(1rem, 1rem) rotate(-45deg);
    width: calc(${sizes["md"]} * 1.7);
  }
`;

/**
 * React Component that shows the my profile photo inside a
 * square
 */
const ProfileBox = () => (
  <Container>
    <OuterBox>
      <InnerBox>
        <ContainerPhoto>
          <ProfileImage />
        </ContainerPhoto>
      </InnerBox>
    </OuterBox>
  </Container>
);

export default ProfileBox;
