import{a as c}from"./chunk-XWYQU7EN.js";import{h as l}from"./chunk-3UDTSZZX.js";import{Aa as s,R as a,X as n}from"./chunk-KWKGXFII.js";var v=(()=>{let i=class i{constructor(){this.avacList=s(void 0),this._http=n(l),this.url=c.baseUrl}addAvac(t){return this._http.post(`${this.url}/animalvac`,t)}getAllAvac(){return this._http.get(`${this.url}/animalvac`)}getAllAvacByAccount(t){return this._http.get(`${this.url}/animalvac/${t}`)}getVaccineById(t){return this._http.get(this.url+"/animalvac/view/"+t)}update(t,r){return this._http.put(`${this.url}/animalvac/${t}`,r)}delete(t,r){return this._http.put(`${this.url}/animalvac/delete/${t}`,{data:r})}};i.\u0275fac=function(r){return new(r||i)},i.\u0275prov=a({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();export{v as a};