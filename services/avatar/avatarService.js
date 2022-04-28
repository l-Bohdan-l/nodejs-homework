const Jimp = require("jimp");

class AvatarService {
    constructor(Storage, file, user) {
        this.storage = new Storage(file, user);
        this.pathfile = file.path;       
    }

    async update() {
        await this.transform(this.pathfile);
        const avatarsUrl = await this.storage.save()
        return avatarsUrl
}

    async transform(pathfile) {
        const pic = await Jimp.read(pathfile);
        await pic.autocrop().cover(
            250,
            250,
            Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE).writeAsync(pathfile)
    }
}

module.exports = AvatarService