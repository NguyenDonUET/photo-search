function PreviousButton({ isDisable = false }) {
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
                    d="M4.06 8L5 7.06L1.94667 4L5 0.94L4.06 8.21774e-08L0.0599996 4L4.06 8Z"
                    fill="black"
                />
            </svg>
        </button>
    );
}

export default PreviousButton;