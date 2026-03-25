import React from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

/**
 * LogoIcon Component - Wrapper around Iconify Icon component
 * Provides a simple interface for displaying icons from the Iconify library
 */
export default function LogoIcon({ name, size = 24, color, style, ...props }) {
  return (
    <Icon
      icon={name}
      width={size}
      height={size}
      color={color}
      style={{
        display: "inline-flex",
        verticalAlign: "middle",
        ...style,
      }}
      {...props}
    />
  );
}

LogoIcon.propTypes = {
  /** Iconify icon name (e.g., "logos:react", "vscode-icons:file-type-js") */
  name: PropTypes.string.isRequired,
  /** Icon size in pixels */
  size: PropTypes.number,
  /** Icon color (optional, uses icon default if not specified) */
  color: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
};
