export default class Trajet {
    constructor(id, pointdepart, pointpassage, pointarrivee, date, heure, nbPlaces, recurrent, frequence) {
        this._pointdepart = pointdepart;
        this._pointpassage = pointpassage;
        this._id = id;
        this._pointarrivee = pointarrivee;
        this._date = date;
        this._heure = heure;
        this._nbPlaces = nbPlaces;
        this._recurrent = recurrent;
        this._frequence = frequence;
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
    get nbPlaces(){
        return this._nbPlaces;
    }
    get recurrent(){
        return this._recurrent;
    }
    get frequence(){
        return this._frequence;
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
    set nbPlaces(nbPlaces){
        this._nbPlaces = nbPlaces;
    }
    set recurrent(recurrent){
        this._recurrent = recurrent
    }
    set frequence(frequence){
        this._frequence = frequence;
    }
    pourAfficher() {
        return `${this._pointdepart} ${this._pointpassage} ${this._pointarrivee} ${this._date} ${this._heure}`;
    }
}