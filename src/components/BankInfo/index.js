import React, { useState } from "react";
import styled from "styled-components";
import Description from "./Description";
import BankForm from "./Form";
import { countries } from "../../constants";

const BankInfo = ({
  bankDetails,
  loadBankInfo,
  fetchingBankDetails
}) => {
  const [country, setCountry] = useState(countries[0].code);
  const changeCountry = v => setCountry(v);

  return (
    <StyledWrapper isMobile={window.isMobile}>
      <Description country={country}/>
      <BankForm
        bankDetails={bankDetails}
        loadBankInfo={loadBankInfo}
        fetchingBankDetails={fetchingBankDetails}
        changeCountry={changeCountry}
      />
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${({isMobile}) => isMobile ? "column" : "row"};
  .bank-info-desc {
    width: ${({isMobile}) => isMobile ? "100%" : "40%"};
    padding-right: ${({isMobile}) => isMobile ? "0" : "100px"};
  }
  .bank-info-form {
    width: ${({isMobile}) => isMobile ? "100%" : "60%"};
  }
`;

export default BankInfo;