function Authenticate({ token }) {
  return (
    <>
      <h2>"Authenticate"</h2>
      <button
        onClick={() => {
          token;
        }}
      >
        Authenticate Token
      </button>
    </>
  );
}

export default Authenticate;
