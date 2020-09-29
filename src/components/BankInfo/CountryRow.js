import React from "react";
import { Form, Select, Row, Col } from "antd";
import { countries } from "../../constants";
import styled from "styled-components";

import Currency from "./Currency";

const CountryRow = ({
  onChangeCountry,
  onChangeCurrency,
  country,
  currency
}) => {
  return (
    <Row>
      <Col span={11}>
        <Form.Item label="Bank country" name="country">
          <Select onChange={onChangeCountry}>
            {countries.map(({ name, code, flag }) => (
              <Select.Option key={name} value={code}>
                <StyledImg src={require(`../../../src/assets/images/country/${flag}.png`)}/>{name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col span={11} offset={2}>
        <Currency onChange={onChangeCurrency} currency={currency} />
      </Col>
    </Row>
  )
};

export const StyledImg = styled.img`
  width: 30px;
  margin-right: 10px;
`;

export default CountryRow;