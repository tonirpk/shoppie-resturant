import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LogoShoppie from "../../helpers/Logo";
import { styled } from "@mui/material/styles";

const LogoWrapper = styled(Stack)`
  align-items: center;
`;
const LogoText = styled(Typography)`
  text-transform: uppercase;
  font-weight: 600;
`;

const Logo = () => {
  return (
    <LogoWrapper direction="row" spacing={1}>
      <LogoShoppie size={30} />
      <LogoText variant="h6">
        Shop<span style={{ color: "#3bb77e" }}>pie</span>
      </LogoText>
    </LogoWrapper>
  );
};

export default Logo;
