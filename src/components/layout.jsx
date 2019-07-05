/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import '../styles/index.scss';
import LayoutStyle from "./layout.module.scss";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className={LayoutStyle.container}>
      <div className={LayoutStyle.content}>
        <Header/>
        <main>
          {children}
        </main>
      </div>
      <Footer />  
    </div>
  )
}

export default Layout
