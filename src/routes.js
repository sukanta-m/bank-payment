/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, lazy } from "react";
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { Layout } from "antd";
import Progress from "./components/sharedComponents/Progress";
import styled from "styled-components";
const { Content } = Layout;

const BankInfo = lazy(() => import("./container/BankInfo"));

const Router = () => {
  return (
    <Suspense fallback={<Progress />}>
      <StyledLayout isMobile={window.isMobile}>
        <Layout className="site-layout">
          <div className="main-container">
            <StyledContent
              className="site-layout-background"
              isMobile={window.isMobile}
            >
              <Switch>
                <Route exact path="/" component={BankInfo} />
              </Switch>
            </StyledContent>
          </div>
        </Layout>
      </StyledLayout>
    </Suspense>
  );
};

const StyledLayout = styled(Layout)`
  .site-layout-background {
    background: #fff;
  }
  .main-container {
    height: 100vh;
  overflow: auto;
  }
`;

const StyledContent = styled(Content)`
  margin: ${({isMobile}) => isMobile ? "88px auto 24px auto" : "88px auto 24px auto"};
  padding: ${({isMobile}) => isMobile ? "5px" : "24px"};
  width: ${({isMobile}) => isMobile ? "90%" : "80%"};
`;

export default Router;