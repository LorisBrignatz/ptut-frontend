
const BACKEND = 'https://lescopaings.azurewebsites.net/api';
const BACKENDS = 'http://localhost:8989'

/**
 * Faire un appel AJAX avec l'API fetch
 * Permet de récupérer erreur réseau et erreur de l'API
 * usage :
 * doAjaxRequest(url, options).then(showResult).catch(showError);
 * @param {string} url L'URL de l'API
 * @param {object} options Les options de la requête AJAX
 * @returns {Promise} Une promesse qui sera résolue avec le résultat de l'appel AJAX
 * @throws {object} Une exception qui sera levée si l'API a signalé une erreur
 */
async function doAjaxRequest(url, options) {
    // On fait l'appel AJAX
    const response = await fetch(url, options);
    // On récupère le résultat transmis en format JSON
    // 204 : NO-CONTENT
    const result = response.status == 204 ? null : await response.json() ;
    // L'API a signalé une erreur, on lève une exception
    if (!response.ok) throw result;
    // Tout s'est bien passé, on renvoie le résultat
    return result;
}

export {BACKEND, doAjaxRequest};