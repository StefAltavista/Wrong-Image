export async function ImgSaver(metadata) {
    let canvas = document.querySelector("canvas");
    let file = null;

    canvas.toBlob(function (blob) {
        file = new File([blob], metadata.title, {
            type: "image/png",
        });
        let formData = new FormData();
        formData.append("file", file);

        fetch("/api/upload_file", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                metadata = {
                    name: metadata.name,
                    description: metadata.description,
                    file_url: response.ipfs_url,
                    custom_fields: metadata.custom_fields,
                };
                console.log("Metadata", JSON.stringify(metadata));
                fetch("/api/upload_metadata", {
                    headers: { "Content-Type": "application/json" },
                    method: "POST",
                    body: JSON.stringify({ ...metadata }),
                })
                    .then((res) => res.json())
                    .then((response) => console.log(response));
            });
        console.log(file, "NOthING ABOVE!");
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
