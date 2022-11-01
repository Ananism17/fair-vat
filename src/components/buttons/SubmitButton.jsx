import React from "react";

const SubmitButton = (props) => {
  function myFunction() {
    console.log(props.data);
  }

  return (
    <>
      {props.name === undefined ? (
        <button
          type="submit"
          className="btn btn-success mb-3"
          onClick={myFunction}
        >
          Submit
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-success mb-3"
          onClick={myFunction}
        >
          {props.name}
        </button>
      )}
    </>
  );
};

export default SubmitButton;
