import React, { useMemo } from "react";
import { Form, Row, Col, Input } from "antd";
import Curreny from "./Currency";
import Spinner from "../sharedComponents/Spinner"

import { bankMethods } from "../../constants";
import styled from "styled-components";

const SwiftIbanRow = ({
  country,
  type,
  onBlurSwift,
  onChangeRoutingNum,
  onChangeCurrency,
  routingNum,
  currency,
  bankDetails,
  fetching,
  swiftNumber
}) => {
  const getExtraField = () => {
    if (type.value === bankMethods.IBAN.value) {
      return <Curreny onChange={onChangeCurrency} currency={currency} />
    } else if (country === "GB") {
      return (
        <Form.Item label="Routing number">
          <Input onChange={onChangeRoutingNum} value={routingNum} />
        </Form.Item>
      );
    }
    return null;
  }

  const spinnerStyle = useMemo(() => (
    {
      position: 'absolute',
      display: 'inline-block',
      width: 0,
      right: '21px',
      top: '5px'
    }
  ));

  const { bank_name, branch_name, bank_address1, bank_address2, bank_city, bank_postal_code, bank_state_province, bank_country } = bankDetails;

  return (
    <Row>
      <Col span={11}>
        <Form.Item label={type.title} validateStatus="validating">
          <Input onBlur={onBlurSwift} value={swiftNumber}/>
          {fetching && <Spinner size="small" style={spinnerStyle}/>}
        </Form.Item>
        {!!Object.keys(bankDetails).length && swiftNumber && !fetching && (
          <Form.Item>
            <StyledBankDetails>
              <p>{bank_name}{branch_name ? `(${branch_name})` : ""}</p>
              <p>{bank_address1}</p>
              <p>{bank_address2}</p>
              <p>{bank_city}, {bank_postal_code}, {bank_state_province}, {bank_country}</p>
            </StyledBankDetails>
          </Form.Item>
        )}
      </Col>
      <Col span={11} offset={2}>
        {getExtraField()}
      </Col>
    </Row>
  )
}

const StyledBankDetails = styled.div`
  p {
    margin: 0;
    font-size: 12px;
    color: grey;
  }
`;

export default SwiftIbanRow;