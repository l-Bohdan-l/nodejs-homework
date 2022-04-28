const path = require('path');
const fs = require('fs/promises');
const Users = require('../../models/user');

class LocalStorage {
    constructor(file, user) {
        this.file = file;
        this.user = user;        
    }

    async save() {
        const { path: pathFile } = this.file;
        const { id } = this.user;
        const avatarsUrl = `/avatar/${id}`
        
    }
}

module.exports = LocalStorage