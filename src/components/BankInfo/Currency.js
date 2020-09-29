import React from "react";
import { Form, Select } from "antd";
import { currencies } from "../../constants";
import { StyledImg } from "./CountryRow";

const Currency = ({
  onChange,
  currency
}) => (
  <Form.Item label="Currency" name="currency">
    <Select onChange={onChange}>
      {currencies.map(({ code, flag }) => (
        <Select.Option key={code} value={code}>
          <StyledImg src={require(`../../../src/assets/images/currencies/${code.toLowerCase()}.png`)}/>
          {code}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
);

export default Currency;