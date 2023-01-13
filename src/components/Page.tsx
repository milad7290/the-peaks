import React, { forwardRef } from "react";
import type { HTMLProps, ReactNode } from "react";
import PropTypes from "prop-types";
import { Helmet } from 'react-helmet-async';

interface PageProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, title = "", ...rest }, ref) => {
    return (
      <div ref={ref as any} {...rest}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    );
  }
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
