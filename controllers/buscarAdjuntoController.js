const buscarAdjuntoController = {
    buscarAdjunto: function(req, res) {
        const folderInJson = req.body
        const foldersToArrayFolders = Object.keys(req.body)
        const folders = []
        let file = ''

        for (let i = 0; i < foldersToArrayFolders.length; i++) {
            if(foldersToArrayFolders[i] !== 'adjunto'){
                folders.push(folderInJson[foldersToArrayFolders[i]])
            } else {
                file = folderInJson[foldersToArrayFolders[i]]
            }
        }

        let url = 'terin/adjuntos'

        folders.map(folder => url += `/${folder}`)

        url = url.concat(`/${file}`)

        console.log(url);
        
        res.status(200).json({
            status: 200,
            msg: "Todo bien por aca mi pana"
        })
    }
}

module.exports = buscarAdjuntoController