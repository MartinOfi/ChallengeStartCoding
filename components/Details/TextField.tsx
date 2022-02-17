export const TextField = ({title,text="",font="fs-6"}) => {
  return (
    <p>
      <span className={`${font} font-weight-bold`}><strong>{title}:</strong>{text}</span> 
    </p>
  );
};
