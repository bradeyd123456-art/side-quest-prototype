// generate-certs.js

const fs = require('fs');
const forge = require('node-forge');

// Generate a self-signed certificate
function generateCertificate() {
    const { pki } = forge;
    const keys = pki.rsa.generateKeyPair(2048);
    const cert = pki.createCertificate();
    cert.publicKey = keys.publicKey;
    cert.serialNumber = '01';
    cert.validFrom = new Date(); // Now
    cert.validTo = new Date(); // 1 year from now
    cert.validTo.setFullYear(cert.validTo.getFullYear() + 1);

    // Self-sign the certificate
    cert.sign(keys.privateKey);

    const pem = pki.certificateToPem(cert);
    const keyPem = pki.privateKeyToPem(keys.privateKey);

    // Write the PEM files to disk with improved security
    fs.writeFileSync('cert.pem', pem, { mode: 0o600 }); // Write cert with permissions
    fs.writeFileSync('key.pem', keyPem, { mode: 0o600 }); // Write key with permissions
    console.log('Certificate and key generated with improved security settings.');
}

generateCertificate();