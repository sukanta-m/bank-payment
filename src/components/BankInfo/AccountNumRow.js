import React from "react";
import { Form, Input, Row, Col } from "antd";

const AccountNumRow = ({
  onChangeConfirmAccountNumber,
  onChangeAccountNumber,
  accountNum,
  confirmAccountNum
}) => {
  return (
    <Row>
      <Col span={11}>
        <Form.Item label="Account number" name="accountNum">
          <Input value={accountNum} onChange={onChangeAccountNumber} />
        </Form.Item>
      </Col>
      <Col span={11} offset={2}>
        <Form.Item label="Confirm account number" name="confirmAccountNum">
          <Input value={confirmAccountNum} onChange={onChangeConfirmAccountNumber} />
        </Form.Item>
      </Col>
    </Row>
  )
};

export default AccountNumRow;