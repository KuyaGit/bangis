import{a as H}from"./chunk-RIZNJ57Q.js";import{a as $,b as h,c as M,d as L,g as k,h as B,i as j,j as D,k as G,l as O,m as P,n as V,o as x,p as z}from"./chunk-FRRQB3LN.js";import{c as w,e as A,g as I,h as C,t as g,u as N,v as T}from"./chunk-ULL2XHBX.js";import{A as d,Aa as v,Ea as a,Ja as S,Pa as o,R as F,Ta as m,X as f,Ya as n,Z as _,Za as t,_a as p,f as R,gb as y,ib as r,ob as q,p as E,qb as u}from"./chunk-KWKGXFII.js";var J=(()=>{let l=class l{constructor(){this.http=f(C),this.rabiesList=v([]),this.rabiesInfo=v([]),this.url=g.baseUrl}addRabiesSampleSubmission(s,b,e){return this.http.post(`${this.url}/rabiessample`,{data:s,behaviorChanges:b,otherIllness:e}).pipe(d(this.handleError))}getAllRabiesSampleSubmissionByAccount(s){return this.http.get(`${this.url}/rabiessample/${s}`).pipe(d(this.handleError))}getRabiesSampleSubmissionById(s){return this.http.get(`${this.url}/rabiessample/view/${s}`).pipe(d(this.handleError))}getAllRabiesSampleSubmission(){return this.http.get(`${this.url}/rabiessample`).pipe(d(this.handleError))}getAllRabiesSampleSubmissionArchived(){return this.http.get(`${this.url}/rabiessample/archived`).pipe(d(this.handleError))}getAllRabiesSampleSubmissionByAccountArchived(s){return this.http.get(`${this.url}/rabiessample/archived/${s}`).pipe(d(this.handleError))}delete(s,b){return this.http.put(`${this.url}/rabiessample/delete/${s}`,{data:b}).pipe(d(this.handleError))}restore(s,b){return this.http.put(`${this.url}/rabiessample/restore/${s}`,{data:b}).pipe(d(this.handleError))}handleError(s){return console.error(s),E(()=>s)}};l.\u0275fac=function(b){return new(b||l)},l.\u0275prov=F({token:l,factory:l.\u0275fac,providedIn:"root"});let i=l;return i})();var K=(()=>{let l=class l{constructor(){this.url=g.baseUrl,this.http=f(C),this.results=v([])}addRabiesResult(s){return this.http.post(`${this.url}/clinicallab/add/result`,s).pipe(d(this.handleError))}getAllLabResults(){return this.http.get(`${this.url}/clinicallab`).pipe(d(this.handleError))}getAllLabResultsArchived(){return this.http.get(`${this.url}/clinicallab/archived/all`).pipe(d(this.handleError))}getAllLabResultsByAccount(s){return this.http.get(`${this.url}/clinicallab/${s}`).pipe(d(this.handleError))}getAllLabResultsByAccountArchived(s){return this.http.get(`${this.url}/clinicallab/archived/${s}`).pipe(d(this.handleError))}getRabiesResultById(s){return this.http.get(`${this.url}/clinicallab/view/${s}`).pipe(d(this.handleError))}deleteRabiesResult(s){return this.http.put(`${this.url}/clinicallab/archive/${s}`,null).pipe(d(this.handleError))}restoreRabiesResult(s){return this.http.put(`${this.url}/clinicallab/restore/${s}`,null).pipe(d(this.handleError))}handleError(s){return console.error(s),E(()=>s)}};l.\u0275fac=function(b){return new(b||l)},l.\u0275prov=F({token:l,factory:l.\u0275fac,providedIn:"root"});let i=l;return i})();function X(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function Y(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function Z(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function ee(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function te(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function ie(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function ne(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function re(i,l){i&1&&(n(0,"span",43),r(1," Required "),t())}function le(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function ae(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function oe(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function se(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function de(i,l){i&1&&(n(0,"span",43),r(1," Required "),t())}function me(i,l){i&1&&(n(0,"span",43),r(1,"Required "),t())}function pe(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function ue(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function ce(i,l){i&1&&(n(0,"span",43),r(1,"Required"),t())}function be(i,l){i&1&&p(0,"app-loadingbutton")}function he(i,l){i&1&&(n(0,"span"),r(1,"Add Result"),t())}var c=i=>({"input-error":i}),Q=i=>({"select-error":i}),ze=(()=>{let l=class l{constructor(){this.modalEvent=new S,this.getAllMethod=new S,this.subscription=new R,this._fb=f(V),this._rabiesS=f(J),this._alertS=f(N),this.themeColor=localStorage.getItem(g.theme),this.isLoadingButton=v(!1),this._authS=f(T),this._labS=f(K),this.accountID=this._authS.userInfo?.id,this.isRequired=!1,this.labForm=this._fb.group({accountFromID:this.accountID,sampleIdFrom:[""],specimen:["",h.required],testMethod:["",h.required],fat:["",h.required],recommendation:["",h.required],diagnosis:["",h.required],remarks:["",h.required],labAccession:["",h.required],dateRecieved:[],owner:["",h.required],address:["",h.required],sender:["",h.required],senderAddress:["",h.required],email:["",h.required],contactNumber:["",h.required],gender:[""],species:[""],breed:[""],age:[""]})}addLabResult(){this.isLoadingButton.set(!0),!this.labForm.get("specimen")?.value||!this.labForm.get("testMethod")?.value||!this.labForm.get("fat")?.value||!this.labForm.get("recommendation")?.value||!this.labForm.get("diagnosis")?.value||!this.labForm.get("remarks")?.value||!this.labForm.get("labAccession")?.value||!this.labForm.get("owner")?.value||!this.labForm.get("address")?.value||!this.labForm.get("sender")?.value||!this.labForm.get("senderAddress")?.value||!this.labForm.get("email")?.value||!this.labForm.get("contactNumber")?.value?(console.log("Error",this.labForm.value),this._alertS.handleError("Please fill in all required fields"),this.isRequired=!0,this.isLoadingButton.set(!1)):this._labS.addRabiesResult(this.labForm.value).pipe(d(s=>{throw s.status===404&&(this.isLoadingButton.set(!1),this._alertS.handleError("An error occurred while deleting the user profile")),s})).subscribe(s=>{s.labId&&(this.isLoadingButton.set(!1),this.modalEvent.emit(!1),this._alertS.handleSuccess("Lab result added successfully"),this.getAllMethod.emit(this.subscription))})}};l.\u0275fac=function(b){return new(b||l)},l.\u0275cmp=_({type:l,selectors:[["app-clinicallabresult"]],inputs:{information:"information"},outputs:{modalEvent:"modalEvent",getAllMethod:"getAllMethod"},standalone:!0,features:[q],decls:174,vars:72,consts:[["aria-labelledby","modal-title","role","dialog","aria-modal","true",1,"relative","z-10"],[1,"fixed","inset-0","bg-gray-500","bg-opacity-75","transition-opacity"],[1,"fixed","inset-0","z-10","w-screen","flex","items-center","sm:flex","sm:items-center","sm:justify-center","sm:h-full"],[1,"flex","items-end","justify-center","p-4","text-center","sm:items-center","sm:flex","sm:p-0"],[1,"w-full","flex","justify-center","items-center",3,"formGroup"],[1,"relative","transform","overflow-hidden","rounded-lg","bg-white","text-left","shadow-xl","transition-all","s","sm:my-8","sm:w-90","sm:max-w-6xl","md:max-w-6xl"],[1,"bg-white","h-[90vh]","px-4","pb-4","pt-5","sm:p-6","sm:pb-4","md:overflow-x-scroll","md:h-[70vh]"],[1,"text-2xl","flex","items-start","font-extrabold","text-slate-600","mb-2"],[1,"flex","gap-2"],[1,"sm:flex","sm:items-center","w-full"],[1,"form-control","w-full"],[1,"label"],[1,"label-text"],["class","label-text text-error",4,"ngIf"],["type","string","formControlName","labAccession","placeholder","Enter Lab Accession",1,"input","input-bordered","w-full",3,"ngClass"],[1,"grid","grid-cols-3","gap-3"],["type","string","formControlName","owner","placeholder","Enter Owner",1,"input","input-bordered","w-full",3,"ngClass"],["type","string","formControlName","address","placeholder","Enter Address",1,"input","input-bordered","w-full",3,"ngClass"],["type","string","formControlName","contactNumber","placeholder","Enter Contact Number",1,"input","input-bordered","w-full",3,"ngClass"],["type","string","formControlName","sender","placeholder","Enter Sender",1,"input","input-bordered","w-full",3,"ngClass"],["type","string","formControlName","senderAddress","placeholder","Enter Address",1,"input","input-bordered","w-full",3,"ngClass"],["type","string","formControlName","email","placeholder","Enter Email",1,"input","input-bordered","w-full",3,"ngClass"],["type","string","formControlName","specimen","placeholder","Enter Specimen",1,"input","input-bordered","w-full",3,"ngClass"],["type","string","formControlName","species","placeholder","Enter Species",1,"input","input-bordered","w-full",3,"ngClass"],["type","string","formControlName","breed","placeholder","Enter Breed",1,"input","input-bordered","w-full",3,"ngClass"],[1,"grid","grid-cols-2","gap-3"],["type","number","formControlName","age","placeholder","Enter Age",1,"input","input-bordered","w-full",3,"ngClass"],["formControlName","gender",1,"select","select-bordered","w-full",3,"ngClass"],["value","","disabled","","selected",""],["value","Male"],["value","Female"],["type","string","formControlName","testMethod","placeholder","Enter Species",1,"input","input-bordered","w-full",3,"ngClass"],[1,"grid","grid-cols-2","gap-2"],["type","string","formControlName","fat","placeholder","Enter  FAT",1,"input","input-bordered","w-full",3,"ngClass"],["type","string","formControlName","recommendation","placeholder","Enter  Recommendation",1,"input","input-bordered","w-full",3,"ngClass"],["formControlName","diagnosis",1,"select","select-bordered","w-full",3,"ngClass"],["value","Positive"],["value","Negative"],["type","string","formControlName","remarks","placeholder","Enter  Remarks",1,"input","input-bordered","w-full",3,"ngClass"],[1,"bg-gray-50","px-4","py-3","sm:flex","sm:flex-row-reverse","sm:px-6"],["type","submit",1,"inline-flex","w-full","justify-center","rounded-md","px-3","py-2","text-sm","font-semibold","text-white","shadow-sm","sm:ml-3","sm:w-auto",3,"ngClass","click"],[4,"ngIf"],["type","button",1,"mt-3","mr-3","inline-flex","w-full","justify-center","rounded-md","bg-white","px-3","py-2","text-sm","font-semibold","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","hover:bg-gray-50","sm:mt-0","sm:w-auto",3,"click"],[1,"label-text","text-error"]],template:function(b,e){b&1&&(n(0,"div",0),p(1,"div",1),n(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5)(6,"div",6)(7,"h1",7),r(8," Clinical Laboratory Report "),t(),n(9,"div",8)(10,"div",9)(11,"label",10)(12,"div",11)(13,"span",12),r(14,"Lab Accession"),t(),m(15,X,2,0,"span",13),t(),p(16,"input",14),t()()(),n(17,"h1",7),r(18," Client Information "),t(),n(19,"div",15)(20,"div")(21,"div",9)(22,"label",10)(23,"div",11)(24,"span",12),r(25,"Owner"),t(),m(26,Y,2,0,"span",13),t(),p(27,"input",16),t()()(),n(28,"div")(29,"div",9)(30,"label",10)(31,"div",11)(32,"span",12),r(33,"Address"),t(),m(34,Z,2,0,"span",13),t(),p(35,"input",17),t()()(),n(36,"div")(37,"div",9)(38,"label",10)(39,"div",11)(40,"span",12),r(41,"Contact Number"),t(),m(42,ee,2,0,"span",13),t(),p(43,"input",18),t()()()(),n(44,"div",15)(45,"div")(46,"div",9)(47,"label",10)(48,"div",11)(49,"span",12),r(50,"Sender"),t(),m(51,te,2,0,"span",13),t(),p(52,"input",19),t()()(),n(53,"div")(54,"div",9)(55,"label",10)(56,"div",11)(57,"span",12),r(58,"Sender Address"),t(),m(59,ie,2,0,"span",13),t(),p(60,"input",20),t()()(),n(61,"div")(62,"div",9)(63,"label",10)(64,"div",11)(65,"span",12),r(66,"Email"),t(),m(67,ne,2,0,"span",13),t(),p(68,"input",21),t()()()(),n(69,"h1",7),r(70," Specimen Information "),t(),n(71,"div",15)(72,"div")(73,"div",9)(74,"label",10)(75,"div",11)(76,"span",12),r(77,"Specimen"),t(),m(78,re,2,0,"span",13),t(),p(79,"input",22),t()()(),n(80,"div")(81,"div",9)(82,"label",10)(83,"div",11)(84,"span",12),r(85,"Species"),t(),m(86,le,2,0,"span",13),t(),p(87,"input",23),t()()(),n(88,"div")(89,"div",9)(90,"label",10)(91,"div",11)(92,"span",12),r(93,"Breed"),t(),m(94,ae,2,0,"span",13),t(),p(95,"input",24),t()()()(),n(96,"div",25)(97,"div")(98,"div",9)(99,"label",10)(100,"div",11)(101,"span",12),r(102,"Age(Months)"),t(),m(103,oe,2,0,"span",13),t(),p(104,"input",26),t()()(),n(105,"div",9)(106,"label",10)(107,"div",11)(108,"span",12),r(109,"Sex"),t(),m(110,se,2,0,"span",13),t(),n(111,"select",27)(112,"option",28),r(113," Please Select Gender "),t(),n(114,"option",29),r(115,"Male"),t(),n(116,"option",30),r(117,"Female"),t()()()()(),n(118,"h1",7),r(119," Result "),t(),n(120,"div")(121,"div",9)(122,"label",10)(123,"div",11)(124,"span",12),r(125,"Test Method"),t(),m(126,de,2,0,"span",13),t(),p(127,"input",31),t()()(),n(128,"div",32)(129,"div")(130,"div",9)(131,"label",10)(132,"div",11)(133,"span",12),r(134,"Flourescent Antibody Test(FAT):"),t(),m(135,me,2,0,"span",13),t(),p(136,"input",33),t()()(),n(137,"div")(138,"div",9)(139,"label",10)(140,"div",11)(141,"span",12),r(142,"Recommendation"),t(),m(143,pe,2,0,"span",13),t(),p(144,"input",34),t()()()(),n(145,"div",32)(146,"div")(147,"div",9)(148,"label",10)(149,"div",11)(150,"span",12),r(151,"Diagnosis"),t(),m(152,ue,2,0,"span",13),t(),n(153,"select",35)(154,"option",28),r(155," Please Select Gender "),t(),n(156,"option",36),r(157,"Positive"),t(),n(158,"option",37),r(159,"Negative"),t()()()()(),n(160,"div")(161,"div",9)(162,"label",10)(163,"div",11)(164,"span",12),r(165,"Remarks"),t(),m(166,ce,2,0,"span",13),t(),p(167,"input",38),t()()()()(),n(168,"div",39)(169,"button",40),y("click",function(){return e.addLabResult()}),m(170,be,1,0,"app-loadingbutton",41)(171,he,2,0,"span",41),t(),n(172,"button",42),y("click",function(){return e.modalEvent.emit(!1)}),r(173," Cancel "),t()()()()()()()),b&2&&(a(4),o("formGroup",e.labForm),a(11),o("ngIf",e.labForm.controls.labAccession.touched&&!e.labForm.controls.labAccession.value||e.isRequired),a(1),o("ngClass",u(38,c,e.labForm.controls.labAccession.touched&&!e.labForm.controls.labAccession.value||e.isRequired)),a(10),o("ngIf",e.labForm.controls.owner.touched&&!e.labForm.controls.owner.value||e.isRequired),a(1),o("ngClass",u(40,c,e.labForm.controls.owner.touched&&!e.labForm.controls.owner.value||e.isRequired)),a(7),o("ngIf",e.labForm.controls.address.touched&&!e.labForm.controls.address.value||e.isRequired),a(1),o("ngClass",u(42,c,e.labForm.controls.address.touched&&!e.labForm.controls.address.value||e.isRequired)),a(7),o("ngIf",e.labForm.controls.contactNumber.touched&&!e.labForm.controls.contactNumber.value||e.isRequired),a(1),o("ngClass",u(44,c,e.labForm.controls.contactNumber.touched&&!e.labForm.controls.contactNumber.value||e.isRequired)),a(8),o("ngIf",e.labForm.controls.sender.touched&&!e.labForm.controls.sender.value||e.isRequired),a(1),o("ngClass",u(46,c,e.labForm.controls.sender.touched&&!e.labForm.controls.sender.value||e.isRequired)),a(7),o("ngIf",e.labForm.controls.senderAddress.touched&&!e.labForm.controls.senderAddress.value||e.isRequired),a(1),o("ngClass",u(48,c,e.labForm.controls.senderAddress.touched&&!e.labForm.controls.senderAddress.value||e.isRequired)),a(7),o("ngIf",e.labForm.controls.email.touched&&!e.labForm.controls.email.value||e.isRequired),a(1),o("ngClass",u(50,c,e.labForm.controls.email.touched&&!e.labForm.controls.email.value||e.isRequired)),a(10),o("ngIf",e.labForm.controls.specimen.touched&&!e.labForm.controls.specimen.value||e.isRequired),a(1),o("ngClass",u(52,c,e.labForm.controls.specimen.touched&&!e.labForm.controls.specimen.value||e.isRequired)),a(7),o("ngIf",e.labForm.controls.species.touched&&!e.labForm.controls.species.value||e.isRequired),a(1),o("ngClass",u(54,c,e.labForm.controls.species.touched&&!e.labForm.controls.species.value||e.isRequired)),a(7),o("ngIf",e.labForm.controls.breed.touched&&!e.labForm.controls.breed.value||e.isRequired),a(1),o("ngClass",u(56,c,e.labForm.controls.breed.touched&&!e.labForm.controls.breed.value||e.isRequired)),a(8),o("ngIf",e.labForm.controls.age.touched&&!e.labForm.controls.age.value||e.isRequired),a(1),o("ngClass",u(58,c,e.labForm.controls.age.touched&&!e.labForm.controls.age.value||e.isRequired)),a(6),o("ngIf",e.isRequired||!e.labForm.controls.gender.value&&e.labForm.controls.gender.touched),a(1),o("ngClass",u(60,Q,e.labForm.controls.gender.touched&&!e.labForm.controls.gender.value||e.isRequired)),a(15),o("ngIf",e.labForm.controls.testMethod.touched&&!e.labForm.controls.testMethod.value||e.isRequired),a(1),o("ngClass",u(62,c,e.labForm.controls.testMethod.touched&&!e.labForm.controls.testMethod.value||e.isRequired)),a(8),o("ngIf",e.labForm.controls.fat.touched&&!e.labForm.controls.fat.value||e.isRequired),a(1),o("ngClass",u(64,c,e.labForm.controls.fat.touched&&!e.labForm.controls.fat.value||e.isRequired)),a(7),o("ngIf",e.labForm.controls.recommendation.touched&&!e.labForm.controls.recommendation.value||e.isRequired),a(1),o("ngClass",u(66,c,e.labForm.controls.recommendation.touched&&!e.labForm.controls.recommendation.value||e.isRequired)),a(8),o("ngIf",e.isRequired||!e.labForm.controls.diagnosis.value&&e.labForm.controls.diagnosis.touched),a(1),o("ngClass",u(68,Q,e.labForm.controls.diagnosis.touched&&!e.labForm.controls.diagnosis.value||e.isRequired)),a(13),o("ngIf",e.labForm.controls.remarks.touched&&!e.labForm.controls.remarks.value||e.isRequired),a(1),o("ngClass",u(70,c,e.labForm.controls.remarks.touched&&!e.labForm.controls.remarks.value||e.isRequired)),a(2),o("ngClass",e.themeColor),a(1),o("ngIf",e.isLoadingButton()),a(1),o("ngIf",!e.isLoadingButton()))},dependencies:[H,z,k,O,P,$,B,G,M,L,j,D,x,I,w,A]});let i=l;return i})();export{J as a,K as b,ze as c};