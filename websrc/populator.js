remote_metafile = "https://deloachcd.github.io/websrc/meta.json"

fetch(remote_metafile)
    .then((response) => {
        return response.json();
    })
    .then((json_metadata) => {
        console.log(json_metadata)
        collection = json_metadata.collection;
        collection.forEach((entry, index) => {
            console.log(`${entry.album} - ${entry.artist}`)
        })
    });
