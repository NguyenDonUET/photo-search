async function downloadImage(imageSrc, fileName = "my-image.png") {
    const response = await fetch(imageSrc);

    const blobImage = await response.blob();

    const href = URL.createObjectURL(blobImage);

    const anchorElement = document.createElement("a");
    anchorElement.href = href;
    anchorElement.download = fileName;

    document.body.appendChild(anchorElement);
    anchorElement.click();

    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
}
export default downloadImage;
