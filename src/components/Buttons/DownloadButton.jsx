import React, { useState, useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";
import downloadImage from "../../utils/downloadImage";

const DownloadButton = ({ imageUrl = "", fileName }) => {
    const handleDownload = () => {
        downloadImage(imageUrl, fileName)
            .then(() => {
                console.log("The image has been downloaded");
            })
            .catch((err) => {
                console.log("Error downloading image: ", err);
            });
    };
    return (
        <a
            className="absolute top-0 right-0 px-2 py-1 text-gray-200 text-sm bg-[rgba(0,0,0,0.4)] cursor-pointer hidden rounded-tr-lg rounded-bl-lg"
            onClick={() => handleDownload()}
        >
            <div className="flex items-center gap-1">
                <FiDownload />
                <span>Download</span>
            </div>
        </a>
    );
};

export default DownloadButton;
