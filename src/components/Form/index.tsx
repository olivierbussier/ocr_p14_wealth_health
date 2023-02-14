import "./style.scss"

type mops = {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler;
};
export const Form: React.FC<mops> = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};
