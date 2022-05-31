export async function ImgSaver(metadata, account) {
    return new Promise((resolve, reject) => {
        console.log("Saving");
        let canvas = document.querySelector("canvas");
        let file = null;
        let image_URL;
        let metadata_URL;

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
                    console.log("image response:", response);
                    metadata = {
                        name: metadata.name,
                        description: metadata.description,
                        file_url: response.ipfs_url,
                        custom_fields: metadata.custom_fields,
                    };
                    image_URL = response.ipfs_url;
                    fetch("/api/upload_metadata", {
                        headers: { "Content-Type": "application/json" },
                        method: "POST",
                        body: JSON.stringify({ ...metadata }),
                    })
                        .then((res) => res.json())
                        .then((response) => {
                            metadata_URL = response.metadata_uri;
                            console.log("Metadata response:", response);
                        })
                        .then(() => {
                            console.log(
                                "imgUrl:",
                                image_URL,
                                "metadataURL:",
                                metadata_URL
                            );
                            fetch("/api/insertNft", {
                                headers: { "content-type": "application/json" },
                                method: "POST",
                                body: JSON.stringify({
                                    creator: account.wallet,
                                    image_URL,
                                    metadata_URL,
                                }),
                            })
                                .then((res) => res.json())
                                .then((response) => {
                                    console.log("DONE!", response);
                                    resolve("done");
                                });
                        });
                });
        }, "image/png");
    });
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
