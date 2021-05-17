import { useState } from "react";
const SearchBox = (props) => {
  const { handleClick, isLoading } = props;
  const [number, setNumber] = useState("");
  return (
    <div className="search-box">
      <input
        type="number"
        autoFocus
        value={number}
        placeholder="Enter the value of N  "
        onChange={(event) => {
          const num = Math.abs(event.target.value) || "";
          setNumber(num);
        }}
        name="searchKey"
        id=""
      />
      <button
        className={isLoading ? "button button--loading" : "button"}
        onClick={() => {
          number === "" || number === 0
            ? alert("Number is not Valid")
            : handleClick(number);
        }}
        type="submit"
      >
        <span className="button__text">Submit</span>
      </button>
    </div>
  );
};

export default SearchBox;