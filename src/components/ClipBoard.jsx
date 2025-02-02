"use client";

const ClipBoard = ({ address, currencyName }) => {
    return (
        <li
            className="cursor-pointer hover:text-white"
            onClick={() => {
                navigator.clipboard.writeText(address);
                alert("Address copied to clipboard");
            }}
        >
            {currencyName}
        </li>
    );
};

export default ClipBoard;
