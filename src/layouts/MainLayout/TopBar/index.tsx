import PropTypes from "prop-types";
import React, { FC } from "react";

interface TopBarProps {
  className?: string;
}

const TopBar: FC<TopBarProps> = ({ className, ...rest }) => {
  return <header className="root"></header>;
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
