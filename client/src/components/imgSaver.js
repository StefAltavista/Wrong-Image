export async function ImgSaver(metadata) {
    let canvas = document.querySelector("canvas");
    let file = null;
    console.log("Metadata", JSON.stringify(metadata));

    canvas.toBlob(function (blob) {
        file = new File([blob], metadata.title, {
            type: "image/png",
        });
        let formData = new FormData();
        formData.append("file", file);

        // fetch("/saveimage", {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then((res) => res.json())
        //     .then((response) => {
        //         console.log(response);
        //////////////////////////////////////// add URL to metadata/////////////////////////
        //     });
    }, "image/png");
}
export function ImgDownloader() {
    var canvas = document.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    var a = document.createElement("a");
    a.href = image;
    a.download = "WrongImage.png";
    document.body.appendChild(a);
    a.click();
}
