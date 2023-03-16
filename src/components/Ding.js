const Ding = ({ text, display }) => {
  const show = () => {
    if (display) {
      return <>{text}</>;
    }
  };

  return <div>{show()}</div>;
};

export default Ding;
