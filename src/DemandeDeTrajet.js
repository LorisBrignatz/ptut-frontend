export default class DemandeDeTrajet {
    constructor(numTrajet, demandeur, pointdepart, pointarrivee, date, heure) {
        this._numTrajet = numTrajet;
        this._demandeur = demandeur;
        this._pointdepart = pointdepart;
        this._pointarrivee = pointarrivee;
        this._date = date;
        this._heure = heure;
    }

    // Getters
    get numTrajet() {
        return this._numTrajet;
    }

    get demandeur() {
        return this._demandeur;
    }

    get pointdepart() {
        return this._pointdepart;
    }

    get pointarrivee() {
        return this._pointarrivee;
    }

    get date() {
        return this._date;
    }

    get heure() {
        return this._heure;
    }

    get datefin() {
        return this._datefin;
    }
    // Setters
    set numTrajet(value) {
        this._numTrajet = value;
    }

    set demandeur(value) {
        this._demandeur = value;
    }

    set pointdepart(value) {
        this._pointdepart = value;
    }

    set pointarrivee(value) {
        this._pointarrivee = value;
    }

    set date(value) {
        this._date = value;
    }
    set heure(value) {
        this._heure = value;
    }
    set datefin(value) {
        this._datefin = value;
    }
}