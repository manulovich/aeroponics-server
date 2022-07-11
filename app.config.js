const bcryptSaltRounds = 8;
const port = process.env.port || 8080;
const url = `http://localhost:${port}`;
const secretKey = 'aohwdo adj poawjdju awpawjdiajd a';
const gmailUser = 'vgshalabs@gmail.com';
const gmailPass = 'tYtiU_poGY22';

export {
    bcryptSaltRounds,
    url,
    secretKey,
    gmailUser,
    gmailPass,
    port
}