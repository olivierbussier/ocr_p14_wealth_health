import "./style.scss"

import "./style.scss"

/**
 *
 * @param param0
 * @returns
 */
export const FieldSet = ({ children, legend }) => {
  return <fieldset className="address">
    {legend ? <legend>{legend}</legend> : null}
    {children}</fieldset>;
};

/**
 *
 * @param param0
 * @returns
 */
export const Form = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};
