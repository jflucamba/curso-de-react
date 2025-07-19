function Button(props) {
  return (
    <button
      {...props}
      className="bg-slate-400 text-white p-2 rounded-md text-white"
    >
      {props.children}
    </button>
  );
}

export default Button;
