interface Props {
  title: string;
  text?: string;
  font?: string;
}
export const TextField = ({ title, text = "", font = "fs-6" }: Props) => {
  return (
    <p>
      <span className={`${font} font-weight-bold`}>
        <strong>{title}: </strong>
        {text}
      </span>
    </p>
  );
};
