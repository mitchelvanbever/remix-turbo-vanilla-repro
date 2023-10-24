import { forwardRef } from "react";
import * as styles from "./styles.css";

export const Button = forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <button
        {...props}
        // comment out the next line to see it crash
        className={styles.root}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
