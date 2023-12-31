import React from "react";

export default function NextButton({ isDisable = false }) {
    return (
        <button disabled={isDisable}>
            <svg
                width="16"
                height="16"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.94 0L0 0.94L3.05333 4L0 7.06L0.94 8L4.94 4L0.94 0Z"
                    fill="black"
                />
            </svg>
        </button>
    );
}
