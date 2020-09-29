import React, { useMemo } from "react";
import styled from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";

const getInfoByCountry = country => {
  const defaultOne = [
    "We need to collect this information to send payments to you on your employer's behalf",
    "Once you submit bank information, we'll verify your information before we start sending any payouts there"
  ];

  switch(country) {
    case "DE":
      return (
        <div>
          {defaultOne.map((str, i) => <p key={i}>{str}</p>)}
          <p>
            <StyledLink><ArrowRightOutlined style={{marginRight: "10px"}}/>When will I get paid ?</StyledLink>
            <span>Due to your bank country and currency, payments from your employer will take X business days to complete. You will recieve funds X days after your payday.</span>
          </p>
        </div>
      );
    default:
      return (
        <div>
          {defaultOne.map((str, i) => <p key={i}>{str}</p>)}
        </div>
      )
  }
};


const Description = ({ type = "SWIFT", country = "" }) => {
  const info = useMemo(() => getInfoByCountry(country), [country]);

  return (
    <StyledWrapper className="bank-info-desc">
      <h1>Banking Information</h1>
      {info}
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`
  h1 {
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
  }
`;

const StyledLink = styled.a`
  display: block;
  color: darkorange;
`;

export default Description;