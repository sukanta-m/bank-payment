import React, { useState, useMemo, useEffect } from "react";
import { Form } from "antd";
import CountryRow from "./CountryRow";
import SwiftIbanRow from "./SwiftIbanRow";
import AccountNumRow from "./AccountNumRow";
import styled from "styled-components";

import { countries, bankMethods } from "../../constants";

const BankForm = ({
  bankDetails,
  loadBankInfo,
  fetchingBankDetails,
  changeCountry
}) => {
  const [type, setType] = useState(bankMethods.SWIFT);
  const [country, setCountry] = useState(countries[0].code);
  const [currency, setCurrency] = useState(countries[0].currencyCode);
  const [routingNum, setRoutingNum] = useState();
  const [accountNum, setAccountNum] = useState();
  const [confirmAccountNum, setConfirmAccountNum] = useState();
  const [swiftNumber, setSwiftNumber] = useState();

  useEffect(() => {
    if (Object.keys(bankDetails).length) {
      onChangeCountry(bankDetails.bank_country);
    }
  }, [bankDetails]);

  const onChangeCountry = value => {
    setCountry(value);
    changeCountry(value);
    const selectedCurr = countries.find(c => c.code === value).currencyCode;
    setCurrency(selectedCurr);
  }

  const onChangeCurrency = value => setCurrency(value);
  const onBlurSwift = e => {
    const { value } = e.target;
    loadBankInfo({[`${type.value.toLowerCase()}`]: value});
    setSwiftNumber(value);
  }
  const onChangeRoutingNum = e => setRoutingNum(e.target.value);
  const onChangeConfirmAccountNumber = e => setConfirmAccountNum(e.target.value);
  const onChangeAccountNumber = e => setAccountNum(e.target.value);
  const onChangeType = type => {
    setType(type);
    setSwiftNumber();

    if (type.value === bankMethods.IBAN.value) {
      changeCountry();
    } else {
      changeCountry(country);
    }
  }

  const fields = useMemo(() => [
    {
      name: ["currency"],
      value: currency
    },
    {
      name: ["country"],
      value: country
    },
    {
      name: ["confirmAccountNum"],
      value: confirmAccountNum
    },
    {
      name: ["accountNum"],
      value: accountNum
    }
  ], [currency, country, confirmAccountNum, accountNum]);

  return (
    <StyledForm
      layout="vertical"
      className="bank-info-form"
      fields={fields}
    >
      { type.value === bankMethods.SWIFT.value && <CountryRow
        onChangeCountry={onChangeCountry}
        onChangeCurrency={onChangeCurrency}
        country={country}
        currency={currency}
      /> }
      <Form.Item label="Select method">
        <StyledBankMethods>
          { Object.values(bankMethods).map(k => {
            const { value, title } = k;
            return <li
                    className={type.value === value ? "active" : "inactive"}
                    key={value}
                    onClick={() => onChangeType(k)}>
                      {title}
                  </li>
          }) }
        </StyledBankMethods>
      </Form.Item>
      <SwiftIbanRow
        country={country}
        type={type}
        onBlurSwift={onBlurSwift}
        onChangeRoutingNum={onChangeRoutingNum}
        onChangeCurrency={onChangeCurrency}
        routingNum={routingNum}
        currency={currency}
        bankDetails={bankDetails}
        fetching={fetchingBankDetails}
        swiftNumber={swiftNumber}
      />
      { type.value === bankMethods.SWIFT.value && <AccountNumRow
        accountNum={accountNum}
        confirmAccountNum={confirmAccountNum}
        onChangeAccountNumber={onChangeAccountNumber}
        onChangeConfirmAccountNumber={onChangeConfirmAccountNumber}
      /> }
    </StyledForm>
  );
};

const StyledBankMethods = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  li {
    padding: 10px 40px;
    cursor: pointer;
  }
  li.active, li:hover {
    background-color: #2CD5C4;
    border: 1px solid #14b7b7;
    color: white;
    font-weight: bold;
  }
  li.inactive {
    color: lightgrey;
  }
`;

const StyledForm = styled(Form)`
  .ant-select-selector, .ant-input {
    background-color: #f2ffff!important;
  }
`;

export default BankForm;