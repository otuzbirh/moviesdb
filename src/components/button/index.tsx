import s from "./Button.module.scss";

interface propTypes {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}

export default function Button({
  children,
  onClick,
  active = false,
}: propTypes): JSX.Element {
  return (
    <button
      className={`${s.button} ${active ? s.active : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
