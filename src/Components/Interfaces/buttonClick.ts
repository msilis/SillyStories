import React from "react";

export interface ButtonClick {
  (event?: React.MouseEvent<HTMLButtonElement>): void;
}
