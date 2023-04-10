export default class Trajet {
    constructor(numTrajet, conducteur, pointdepart, pointarrivee, date, heure, datefin) {
        this._numTrajet = numTrajet;
        this._conducteur = conducteur;
        this._pointdepart = pointdepart;
        this._pointarrivee = pointarrivee;
        this._date = date;
        this._heure = heure;
        this._datefin = datefin;
    }

    // Getters
    get numTrajet() {
        return this._numTrajet;
    }

    get conducteur() {
        return this._conducteur;
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

    set conducteur(value) {
        this._conducteur = value;
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