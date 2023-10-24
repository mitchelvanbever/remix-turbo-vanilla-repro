import { forwardRef } from "react";
import * as styles from "./styles.css";

export const Button = forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <button
        {...props}
        className={styles.root}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
