export default class Trajet {
    constructor(id, pointdepart, pointpassage, pointarrivee, date, heure) {
        this._pointdepart = pointdepart;
        this._pointpassage = pointpassage;
        this._id = id;
        this._pointarrivee = pointarrivee;
        this._date = date;
        this._heure = heure;
    }
    get pointdepart() {
        return this._pointdepart;
    }
    get id() {
        return this._id;
    }
    get pointpassage() {
        return this._pointpassage;
    }
    get pointarrivee() {
        return this._pointarrivee;
    }
    get date(){
        return this._date;
    }
    get heure(){
        return this._heure;
    }
    set pointdepart(pointdepart){
        this._pointdepart = pointdepart;
    }
    set pointpassage(pointpassage){
        this._pointpassage = pointpassage;
    }
    set pointarrivee(pointarrivee){
        this._pointarrivee = pointarrivee;
    }
    set date(date){
        this._date = date;
    }
    set heure(heure){
        this._heure = heure;
    }
    pourAfficher() {
        return `${this._pointdepart} ${this._pointpassage} ${this._pointarrivee} ${this._date} ${this._heure}`;
    }
}