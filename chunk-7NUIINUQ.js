import{a}from"./chunk-XWYQU7EN.js";import{h as s}from"./chunk-3UDTSZZX.js";import{A as c,Aa as n,R as u,X as o,p as h}from"./chunk-KWKGXFII.js";var g=(()=>{let r=class r{constructor(){this.HVacs=n([]),this.HVacInfo=n(void 0),this.http=o(s),this.url=a.baseUrl}getAllHumanVaccine(){return this.http.get(this.url+"/humanvac")}getAllHumanVaccineByAccount(t){return this.http.get(`${this.url}/humanvac/${t}`)}getVaccineById(t){return this.http.get(`${this.url}/humanvac/view/${t}`)}addHVac(t){return this.http.post(this.url+"/humanvac",t)}getAllHumanVaccineArchived(t){return this.http.get(`${this.url}/humanvac/archived/${t}`).pipe(c(this.handleError))}update(t,e){return this.http.put(`${this.url}/humanvac/${t}`,e)}delete(t,e){return this.http.put(`${a.baseUrl}/humanvac/archive/${t}`,e)}handleError(t){return console.log(t),h(()=>t)}};r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();export{g as a};