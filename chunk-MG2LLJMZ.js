import{a as D}from"./chunk-EJMP5IMM.js";import"./chunk-BYXBJQAS.js";import{a as J,b as ve}from"./chunk-RIZNJ57Q.js";import{a as M,b as q,c as F,d as O,f as ae,g as $,h as oe,i as H,j as z,n as W,o as T,p as U}from"./chunk-FRRQB3LN.js";import{a as le}from"./chunk-EJILPM2V.js";import"./chunk-UK7KSWGE.js";import{c as Q,e as G,f as A,g as S,t as R,u as k,v as P}from"./chunk-ULL2XHBX.js";import{A as pe,Aa as x,Ea as s,Ja as C,Pa as d,Ta as h,Ua as B,Va as Z,Wa as ee,X as f,Xa as te,Ya as a,Z as w,Za as e,_a as p,ca as _,cb as g,da as v,ea as ue,f as y,fa as _e,gb as u,hb as m,ib as c,jb as ie,kb as V,lb as ne,ob as E,qb as j,sb as I,tb as N}from"./chunk-KWKGXFII.js";function ge(n,r){n&1&&(a(0,"span",21),c(1,"Required"),e())}function xe(n,r){n&1&&(a(0,"span",21),c(1,"Required"),e())}function be(n,r){n&1&&(a(0,"span",21),c(1,"Required"),e())}function Ce(n,r){n&1&&(a(0,"span",21),c(1,"Required"),e())}function Ae(n,r){n&1&&(a(0,"span",21),c(1,"Required"),e())}function ye(n,r){n&1&&p(0,"app-loadingbutton")}function we(n,r){n&1&&(a(0,"span"),c(1," Add "),e())}var Y=n=>({"input-error":n}),fe=(()=>{let r=class r{constructor(){this.modalEvent=new C,this.getAllMethod=new C,this.aVac=new y,this._fb=f(W),this._auth=f(P),this._avac=f(D),this._alert=f(k),this.isLoadingButton=x(!1),this.themeColor=localStorage.getItem(R.theme)?.toString(),this.isRequired=!1,this.aVacForm=this._fb.group({AiD:["",q.required],vacName:["",q.required],brandName:["",q.required],stockQuantity:["",q.required],dosage:["",q.required],expiryDate:["",q.required],aVacID:this._auth.userInfo?.id})}setExpiryDate(o){this.aVacForm.controls.expiryDate.setValue(o)}addAvac(){if(!this.aVacForm.controls.vacName.value||!this.aVacForm.controls.brandName.value||!this.aVacForm.controls.stockQuantity.value||!this.aVacForm.controls.dosage.value||!this.aVacForm.controls.expiryDate.value){this._alert.handleError("All fields are required"),this.isRequired=!0;return}this._avac.addAvac(this.aVacForm.value).pipe(pe(o=>{throw o.status===400&&this._alert.handleError(o.error.message),o})).subscribe(o=>{o&&(this._alert.handleSuccess("Vaccine Added Successfully"),this.aVacForm.reset(),this.modalEvent.emit(!1),this.emitGetAllHumanVaccine())})}emitGetAllHumanVaccine(){this.aVac.add(this.getAllMethod.emit(this.aVac))}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=w({type:r,selectors:[["app-add"]],outputs:{modalEvent:"modalEvent",getAllMethod:"getAllMethod"},standalone:!0,features:[ne([A]),E],decls:48,vars:24,consts:[["aria-labelledby","modal-title","role","dialog","aria-modal","true",1,"relative","z-10"],[1,"fixed","inset-0","bg-gray-500","bg-opacity-75","transition-opacity"],[1,"fixed","inset-0","z-10","w-screen"],[1,"flex","min-h-full","items-end","justify-center","p-4","text-center","sm:items-center","sm:p-0"],[1,"w-full","flex","justify-center","items-center",3,"formGroup"],[1,"relative","transform","overflow-hidden","rounded-lg","bg-white","text-left","shadow-xl","transition-all","sm:my-8","sm:w-full","sm:max-w-lg"],[1,"bg-white","px-4","pb-4","pt-5","sm:p-6","sm:pb-4","overflow-auto"],[1,"sm:flex","sm:items-center","w-full"],[1,"form-control","w-full"],[1,"label"],[1,"label-text"],["class","label-text text-error",4,"ngIf"],["type","text","formControlName","vacName","placeholder","Vaccine Name",1,"input","input-bordered","w-full",3,"ngClass"],["type","text","formControlName","brandName","placeholder","Brand Name",1,"input","input-bordered","w-full",3,"ngClass"],["type","number","formControlName","stockQuantity","placeholder","Quantity",1,"input","input-bordered","w-full",3,"ngClass"],["type","text","formControlName","dosage","placeholder","Dosage",1,"input","input-bordered","w-full",3,"ngClass"],["type","date","formControlName","expiryDate","placeholder","Expiry Date",1,"input","input-bordered","w-full",3,"ngClass"],[1,"bg-gray-50","px-4","py-3","sm:flex","sm:flex-row-reverse","sm:px-6"],["type","button",1,"inline-flex","w-full","justify-center","rounded-md","px-3","py-2","text-sm","font-semibold","text-white","shadow-sm","sm:ml-3","sm:w-auto",3,"ngClass","click"],[4,"ngIf"],["type","button",1,"mt-3","inline-flex","w-full","justify-center","rounded-md","bg-white","px-3","py-2","text-sm","font-semibold","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","hover:bg-gray-50","sm:mt-0","sm:w-auto",3,"click"],[1,"label-text","text-error"]],template:function(i,t){i&1&&(a(0,"div",0),p(1,"div",1),a(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"label",8)(9,"div",9)(10,"span",10),c(11,"Vaccine Name"),e(),h(12,ge,2,0,"span",11),e(),p(13,"input",12),e()(),a(14,"div",7)(15,"label",8)(16,"div",9)(17,"span",10),c(18,"Brand Name"),e(),h(19,xe,2,0,"span",11),e(),p(20,"input",13),e()(),a(21,"div",7)(22,"label",8)(23,"div",9)(24,"span",10),c(25,"Quantity"),e(),h(26,be,2,0,"span",11),e(),p(27,"input",14),e()(),a(28,"div",7)(29,"label",8)(30,"div",9)(31,"span",10),c(32,"Dosage"),e(),h(33,Ce,2,0,"span",11),e(),p(34,"input",15),e()(),a(35,"div",7)(36,"label",8)(37,"div",9)(38,"span",10),c(39,"Expiry Date"),e(),h(40,Ae,2,0,"span",11),e(),p(41,"input",16),e()()(),a(42,"div",17)(43,"button",18),u("click",function(){return t.addAvac()}),h(44,ye,1,0,"app-loadingbutton",19)(45,we,2,0,"span",19),e(),a(46,"button",20),u("click",function(){return t.modalEvent.emit(!1),t.aVacForm.reset()}),c(47," Cancel "),e()()()()()()()),i&2&&(s(4),d("formGroup",t.aVacForm),s(8),d("ngIf",t.aVacForm.controls.vacName.touched&&!t.aVacForm.controls.vacName.value||t.isRequired),s(1),d("ngClass",j(14,Y,t.aVacForm.controls.vacName.touched&&!t.aVacForm.controls.vacName.value||t.isRequired)),s(6),d("ngIf",t.aVacForm.controls.brandName.touched&&!t.aVacForm.controls.brandName.value||t.isRequired),s(1),d("ngClass",j(16,Y,t.aVacForm.controls.brandName.touched&&!t.aVacForm.controls.brandName.value||t.isRequired)),s(6),d("ngIf",t.aVacForm.controls.stockQuantity.touched&&!t.aVacForm.controls.stockQuantity.value||t.isRequired),s(1),d("ngClass",j(18,Y,t.aVacForm.controls.stockQuantity.touched&&!t.aVacForm.controls.stockQuantity.value||t.isRequired)),s(6),d("ngIf",t.aVacForm.controls.dosage.touched&&!t.aVacForm.controls.dosage.value||t.isRequired),s(1),d("ngClass",j(20,Y,t.aVacForm.controls.dosage.touched&&!t.aVacForm.controls.dosage.value||t.isRequired)),s(6),d("ngIf",t.aVacForm.controls.expiryDate.touched&&!t.aVacForm.controls.expiryDate.value||t.isRequired),s(1),d("ngClass",j(22,Y,t.aVacForm.controls.expiryDate.touched&&!t.aVacForm.controls.expiryDate.value||t.isRequired)),s(2),d("ngClass",t.themeColor),s(1),d("ngIf",t.isLoadingButton()),s(1),d("ngIf",!t.isLoadingButton()))},dependencies:[T,$,M,oe,F,O,U,H,z,S,Q,G,J]});let n=r;return n})();var de=(()=>{let r=class r{constructor(){this.modalEvent=new C,this.getAllMethod=new C,this._alert=f(k),this._avac=f(D),this.fb=f(W)}thisaVacForm(){this.aVacForm=this.fb.group({Aid:[""],vacName:[""],brandName:[""],stockQuantity:[""],dosage:[""],expiryDate:[""]})}updateAvacStocks(){this._avac.update(this.animalVacInfo.Aid,this.aVacForm.value).subscribe(o=>{this._alert.handleSuccess("Vaccine Stocks updated successfully"),this.emitGetAllHumanVaccine(),this.closeModalEdit()},o=>{this._alert.handleError("An error occurred while updating the vaccine"),console.error(o)})}closeModalEdit(){this.modalEvent.emit(!1),this.emitGetAllHumanVaccine()}emitGetAllHumanVaccine(){this.getAllMethod.emit(new y)}ngOnInit(){this.thisaVacForm(),this.aVacForm.patchValue(this.animalVacInfo)}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=w({type:r,selectors:[["app-edit"]],inputs:{animalVacInfo:"animalVacInfo"},outputs:{modalEvent:"modalEvent",getAllMethod:"getAllMethod"},standalone:!0,features:[ne([A]),E],decls:43,vars:8,consts:[["aria-labelledby","modal-title","role","dialog","aria-modal","true",1,"relative","z-10"],[1,"fixed","inset-0","bg-gray-500","bg-opacity-75","transition-opacity"],[1,"fixed","inset-0","z-10","w-screen"],[1,"flex","min-h-full","items-end","justify-center","p-4","text-center","sm:items-center","sm:p-0"],[1,"w-full","flex","justify-center","items-center",3,"formGroup"],[1,"relative","transform","overflow-hidden","rounded-lg","bg-white","text-left","shadow-xl","transition-all","sm:my-8","sm:w-full","sm:max-w-lg"],[1,"bg-white","px-4","pb-4","pt-5","sm:p-6","sm:pb-4","overflow-auto"],[1,"sm:flex","sm:items-center","w-full"],[1,"form-control","w-full"],[1,"label"],[1,"label-text"],["type","text","placeholder","Vaccine Name","disabled","",1,"input","input-bordered","w-full",3,"value"],["type","text","placeholder","Brand Name","disabled","",1,"input","input-bordered","w-full",3,"value"],["type","number","formControlName","stockQuantity","placeholder","Quantity",1,"input","input-bordered","w-full"],["type","number","placeholder","Dosage","disabled","",1,"input","input-bordered","w-full",3,"value"],["type","text","placeholder","Dosage","disabled","",1,"input","input-bordered","w-full",3,"value"],[1,"bg-gray-50","px-4","py-3","sm:flex","sm:flex-row-reverse","sm:px-6"],["type","button",1,"inline-flex","w-full","justify-center","rounded-md","bg-red-600","px-3","py-2","text-sm","font-semibold","text-white","shadow-sm","hover:bg-red-700","sm:ml-3","sm:w-auto",3,"click"],["type","button",1,"mt-3","inline-flex","w-full","justify-center","rounded-md","bg-white","px-3","py-2","text-sm","font-semibold","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","hover:bg-gray-50","sm:mt-0","sm:w-auto",3,"click"]],template:function(i,t){if(i&1&&(a(0,"div",0),p(1,"div",1),a(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"label",8)(9,"div",9)(10,"span",10),c(11,"Vaccine Name"),e()(),p(12,"input",11),e()(),a(13,"div",7)(14,"label",8)(15,"div",9)(16,"span",10),c(17,"Brand Name"),e()(),p(18,"input",12),e()(),a(19,"div",7)(20,"label",8)(21,"div",9)(22,"span",10),c(23,"Quantity"),e()(),p(24,"input",13),e()(),a(25,"div",7)(26,"label",8)(27,"div",9)(28,"span",10),c(29,"Dosage"),e()(),p(30,"input",14),e()(),a(31,"div",7)(32,"label",8)(33,"div",9)(34,"span",10),c(35,"Expiry Date"),e()(),p(36,"input",15),I(37,"date"),e()()(),a(38,"div",16)(39,"button",17),u("click",function(){return t.updateAvacStocks()}),c(40," Update Animal Vaccine Stocks "),e(),a(41,"button",18),u("click",function(){return t.closeModalEdit()}),c(42," Cancel "),e()()()()()()()),i&2){let b,L,K,X;s(4),d("formGroup",t.aVacForm),s(8),d("value",(b=t.aVacForm.get("vacName"))==null?null:b.value),s(6),d("value",(L=t.aVacForm.get("brandName"))==null?null:L.value),s(12),d("value",(K=t.aVacForm.get("dosage"))==null?null:K.value),s(6),d("value",N(37,5,(X=t.aVacForm.get("expiryDate"))==null?null:X.value,"MMM dd, yyyy"))}},dependencies:[T,$,M,oe,F,O,U,H,z,S,A]});let n=r;return n})();var me=(()=>{let r=class r{constructor(){this.modalEvent=new C,this.getAllMethod=new C,this.fb=f(W)}ngOnInit(){console.log(this.aVacInfo),this.thisaVacForm(),this.aVacForm.patchValue(this.aVacInfo)}thisaVacForm(){this.aVacForm=this.fb.group({AiD:[{value:"",disabled:!0}],vacName:[{value:"",disabled:!0}],brandName:[{value:"",disabled:!0}],stockQuantity:[{value:"",disabled:!0}],dosage:[{value:"",disabled:!0}],expiryDate:[{value:"",disabled:!0}],aVacID:[{value:"",disabled:!0}]})}closemodalview(){this.modalEvent.emit(!1),this.emitGetAllHumanVaccine()}emitGetAllHumanVaccine(){this.getAllMethod.emit(new y)}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=w({type:r,selectors:[["app-view"]],inputs:{aVacInfo:"aVacInfo"},outputs:{modalEvent:"modalEvent",getAllMethod:"getAllMethod"},standalone:!0,features:[E],decls:41,vars:8,consts:[["aria-labelledby","modal-title","role","dialog","aria-modal","true",1,"relative","z-10"],[1,"fixed","inset-0","bg-gray-500","bg-opacity-75","transition-opacity"],[1,"fixed","inset-0","z-10","w-screen"],[1,"flex","min-h-full","items-end","justify-center","p-4","text-center","sm:items-center","sm:p-0"],[1,"w-full","flex","justify-center","items-center",3,"formGroup"],[1,"relative","transform","overflow-hidden","rounded-lg","bg-white","text-left","shadow-xl","transition-all","sm:my-8","sm:w-full","sm:max-w-lg"],[1,"bg-white","px-4","pb-4","pt-5","sm:p-6","sm:pb-4","overflow-auto"],[1,"sm:flex","sm:items-center","w-full"],[1,"form-control","w-full"],[1,"label"],[1,"label-text"],["type","text","formControlName","vacName","placeholder","Vaccine Name",1,"input","input-bordered","w-full"],["type","text","placeholder","Brand Name","disabled","",1,"input","input-bordered","w-full",3,"value"],["type","number","placeholder","Quantity","disabled","",1,"input","input-bordered","w-full",3,"value"],["type","number","placeholder","Dosage","disabled","",1,"input","input-bordered","w-full",3,"value"],["type","text","placeholder","Dosage","disabled","",1,"input","input-bordered","w-full",3,"value"],[1,"bg-gray-50","px-4","py-3","sm:flex","sm:flex-row-reverse","sm:px-6"],["type","button",1,"mt-3","inline-flex","w-full","justify-center","rounded-md","bg-white","px-3","py-2","text-sm","font-semibold","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","hover:bg-gray-50","sm:mt-0","sm:w-auto",3,"click"]],template:function(i,t){if(i&1&&(a(0,"div",0),p(1,"div",1),a(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"label",8)(9,"div",9)(10,"span",10),c(11,"Vaccine Name"),e()(),p(12,"input",11),e()(),a(13,"div",7)(14,"label",8)(15,"div",9)(16,"span",10),c(17,"Brand Name"),e()(),p(18,"input",12),e()(),a(19,"div",7)(20,"label",8)(21,"div",9)(22,"span",10),c(23,"Quantity"),e()(),p(24,"input",13),e()(),a(25,"div",7)(26,"label",8)(27,"div",9)(28,"span",10),c(29,"Dosage"),e()(),p(30,"input",14),e()(),a(31,"div",7)(32,"label",8)(33,"div",9)(34,"span",10),c(35,"Expiry Date"),e()(),p(36,"input",15),I(37,"date"),e()()(),a(38,"div",16)(39,"button",17),u("click",function(){return t.closemodalview()}),c(40," Cancel "),e()()()()()()()),i&2){let b,L,K,X;s(4),d("formGroup",t.aVacForm),s(14),d("value",(b=t.aVacForm.get("brandName"))==null?null:b.value),s(6),d("value",(L=t.aVacForm.get("stockQuantity"))==null?null:L.value),s(6),d("value",(K=t.aVacForm.get("dosage"))==null?null:K.value),s(6),d("value",N(37,5,(X=t.aVacForm.get("expiryDate"))==null?null:X.value,"MMM dd, yyyy"))}},dependencies:[T,$,M,F,O,U,H,z,S,A]});let n=r;return n})();function Ve(n,r){n&1&&p(0,"app-loadingbutton")}function Ee(n,r){n&1&&p(0,"i",16)}function Se(n,r){if(n&1){let l=g();a(0,"button",17),u("click",function(){_(l);let i=m();return v(i.triggerTable())}),p(1,"i",18),c(2," View Archived Data "),e()}if(n&2){let l=m();d("ngClass",l.themeColor)}}function Me(n,r){if(n&1){let l=g();a(0,"td",23)(1,"div",20)(2,"button",24),u("click",function(){_(l);let i=m().$implicit,t=m();return v(t.openAvacViewModal(i.Aid))}),p(3,"i",25),e(),a(4,"button",24),u("click",function(){_(l);let i=m().$implicit,t=m();return v(t.openAvacEditModal(i.Aid))}),p(5,"i",26),e(),a(6,"button",27),u("click",function(){_(l);let i=m().$implicit,t=m();return v(t.delete(i.Aid))}),p(7,"i",28),e()()()}}function Fe(n,r){if(n&1){let l=g();a(0,"td",23)(1,"div",20)(2,"button",24),u("click",function(){_(l);let i=m().$implicit,t=m();return v(t.openAvacViewModal(i.Aid))}),p(3,"i",25),e()()()}}function Te(n,r){if(n&1&&(a(0,"tr")(1,"td")(2,"div",19),c(3),e()(),a(4,"td")(5,"div",19),c(6),e()(),a(7,"td")(8,"div",20),c(9),e()(),a(10,"td")(11,"div",20),c(12),e()(),a(13,"td")(14,"div",21),c(15),I(16,"date"),e()(),h(17,Me,8,0,"td",22)(18,Fe,4,0),e()),n&2){let l=r.$implicit,o=m();s(3),V(" ",l.vacName," "),s(3),V(" ",l.brandName," "),s(3),V(" ",l.dosage," "),s(3),ie(l.stockQuantity),s(3),V(" ",N(16,6,l.expiryDate,"MMM, dd, yyyy")," "),s(2),B(17,(o._auth.userInfo==null?null:o._auth.userInfo.accountType)=="agri"?17:18)}}function Ie(n,r){n&1&&(a(0,"tr")(1,"td",29),c(2,"No Data"),e()())}function Ne(n,r){if(n&1){let l=g();a(0,"app-view",30),u("modalEvent",function(i){_(l);let t=m();return v(t.avacModalView.set(i))})("getAllMethod",function(){_(l);let i=m();return v(i.getAllAvac())}),e()}if(n&2){let l=m();d("aVacInfo",l.vacInfo)}}function ke(n,r){if(n&1){let l=g();a(0,"app-edit",31),u("modalEvent",function(i){_(l);let t=m();return v(t.aVacModalEdit.set(i))})("getAllMethod",function(){_(l);let i=m();return v(i.getAllAvac())}),e()}if(n&2){let l=m();d("animalVacInfo",l.vacInfo)}}var he=(()=>{let r=class r{constructor(){this.archivedTable=new C,this.getAllMethod=new C,this.aVacModalEdit=x(!1),this.avacModalAdd=x(!1),this.avacModalView=x(!1),this.isLoadingButton=x(!1),this.isArchivedTable=x(!1),this.fileName="vaccineinventory.xlsx",this.datatoExport="",this.themeColor=localStorage.getItem(R.theme)?.toString(),this.subAvac=new y,this._avac=f(D),this._auth=f(P),this._alert=f(k),this.searchText="",this.items=[]}getAllAvac(){this._auth.userInfo?.accountType=="agri"?this.subAvac.add(this._avac.getAllAvacByAccount(this._auth.userInfo?.id).subscribe(o=>{o.sort((i,t)=>i.AiD-t.AiD),this._avac.avacList.set(o),this.items=this._avac.avacList()})):this.subAvac.add(this._avac.getAllAvac().subscribe(o=>{this._avac.avacList.set(o),this.items=this._avac.avacList()}))}triggerTable(){this.isArchivedTable()==!0&&(this.getAllAvac(),this.isArchivedTable.set(!1)),this.isArchivedTable()==!1&&this.isArchivedTable.set(!0)}openAvacViewModal(o){this.subAvac.add(this._avac.getVaccineById(o).subscribe(i=>{console.log(i),this.vacInfo=i,this.avacModalView.set(!0)}))}openAvacEditModal(o){this.subAvac.add(this._avac.getVaccineById(o).subscribe(i=>{this.vacInfo=i,this.aVacModalEdit.set(!0)}))}applyFilter(){if(this.isLoadingButton.set(!0),this.searchText===""){this.getAllAvac(),this.isLoadingButton.set(!1);return}this.items=this.items.filter(o=>o.vacName.toLowerCase().includes(this.searchText.toLowerCase())),this.isLoadingButton.set(!1)}ngOnInit(){this.getAllAvac()}delete(o){this._alert.simpleAlert("warning","Warning","Are you sure you want to archived this Data?",()=>{console.log(o),this._avac.delete(o,"Dummy").subscribe(i=>{i.Aid==o?(this._alert.handleSuccess("Data archived successfully"),this.getAllAvac()):this._alert.handleError("Failed to archived Data")},i=>{this._alert.handleError("An error occurred while arhiving Data"),console.error(i)})})}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=w({type:r,selectors:[["app-archive-avac-list"]],outputs:{archivedTable:"archivedTable",getAllMethod:"getAllMethod"},standalone:!0,features:[E],decls:32,vars:7,consts:[[1,"table-container","w-full"],[1,"flex","flex-row","justify-between","w-full"],[1,"search","w-full","flex","items-center","justify-start"],[1,"search-input"],["type","text","placeholder","Search Data",1,"input","input-bordered","w-full","max-w-xs",3,"ngModel","ngModelChange"],[1,"btn","btn-square","border-none","text-white","ml-1",3,"ngClass","click"],[4,"ngIf"],["class","fa-solid fa-magnifying-glass",4,"ngIf"],["class","btn border-none text-white ml-3",3,"ngClass","click",4,"ngIf"],[1,"card","overflow-y-scroll","overflow-x-hidden"],[1,"table","user-table"],[1,"text-stone-600","text-center"],[1,"sticky","top-0","bg-white"],[1,"py-1"],[1,"py-2"],[3,"aVacInfo"],[1,"fa-solid","fa-magnifying-glass"],[1,"btn","border-none","text-white","ml-3",3,"ngClass","click"],[1,"fa-solid","fa-trash-can"],[1,"font-bold","flex","justify-center"],[1,"flex","justify-center"],[1,"flex","flex-row","justify-center","items-center"],["class","w-2 p-3"],[1,"w-2","p-3"],[1,"btn","btn-square","btn-sm","ml-1",3,"click"],[1,"fa-solid","fa-eye"],[1,"fa-solid","fa-pen"],[1,"btn","btn-square","btn-sm","ml-1","mr-1",3,"click"],[1,"fa-solid","fa-trash"],["colspan","6",1,"text-center"],[3,"aVacInfo","modalEvent","getAllMethod"],[3,"animalVacInfo","modalEvent","getAllMethod"]],template:function(i,t){i&1&&(p(0,"app-full-page-loader"),a(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"input",4),u("ngModelChange",function(L){return t.searchText=L}),e()(),a(6,"button",5),u("click",function(){return t.applyFilter()}),h(7,Ve,1,0,"app-loadingbutton",6)(8,Ee,1,0,"i",7),e(),h(9,Se,3,1,"button",8),e()(),a(10,"div",9)(11,"table",10)(12,"thead",11)(13,"tr",12)(14,"th",13),c(15,"Vaccine Name"),e(),a(16,"th",14),c(17,"Brand Name"),e(),a(18,"th",14),c(19,"Dosage"),e(),a(20,"th",14),c(21,"Stock Quantity"),e(),a(22,"th",14),c(23,"Date Expired"),e(),a(24,"th",14),c(25,"Action"),e()()(),a(26,"tbody"),ee(27,Te,19,9,"tr",null,Z,!1,Ie,3,0),e()()()(),h(30,Ne,1,1,"app-view",15)(31,ke,1,1)),i&2&&(s(5),d("ngModel",t.searchText),s(1),d("ngClass",t.themeColor),s(1),d("ngIf",t.isLoadingButton()),s(1),d("ngIf",!t.isLoadingButton()),s(1),d("ngIf",(t._auth.userInfo==null?null:t._auth.userInfo.accountType)=="agri"),s(18),te(t.items),s(3),B(30,t.avacModalView()?30:t.aVacModalEdit()?31:-1))},dependencies:[le,T,M,F,ae,S,Q,G,A,J,me,de],styles:[".table-container[_ngcontent-%COMP%]{padding:2rem;width:100%;background-color:#999}.add-button[_ngcontent-%COMP%]{background-color:green;color:#fff;border:none}.user-table[_ngcontent-%COMP%]{max-height:79vh}.table-body[_ngcontent-%COMP%]{overflow-y:auto}"]});let n=r;return n})();function De(n,r){if(n&1){let l=g();a(0,"app-archive-avac-list",0),u("archivedTable",function(){_(l);let i=m();return v(i.isArchivedTable.set(!1))})("getAllMethod",function(){_(l);let i=m();return v(i.triggerTable())}),e()}}function Le(n,r){n&1&&p(0,"app-loadingbutton")}function Be(n,r){n&1&&p(0,"i",20)}function qe(n,r){if(n&1){let l=g();a(0,"button",21),u("click",function(){_(l);let i=m(2);return v(i.triggerTable())}),p(1,"i",22),c(2," View Archived Data "),e()}if(n&2){let l=m(2);d("ngClass",l.themeColor)}}function je(n,r){if(n&1){let l=g();a(0,"td",27)(1,"div",24)(2,"button",28),u("click",function(){_(l);let i=m().$implicit,t=m(2);return v(t.openAvacViewModal(i.Aid))}),p(3,"i",29),e(),a(4,"button",28),u("click",function(){_(l);let i=m().$implicit,t=m(2);return v(t.openAvacEditModal(i.Aid))}),p(5,"i",30),e(),a(6,"button",31),u("click",function(){_(l);let i=m().$implicit,t=m(2);return v(t.delete(i.Aid))}),p(7,"i",32),e()()()}}function Qe(n,r){if(n&1){let l=g();a(0,"td",27)(1,"div",24)(2,"button",28),u("click",function(){_(l);let i=m().$implicit,t=m(2);return v(t.openAvacViewModal(i.Aid))}),p(3,"i",29),e()()()}}function Ge(n,r){if(n&1&&(a(0,"tr")(1,"td")(2,"div",23),c(3),e()(),a(4,"td")(5,"div",23),c(6),e()(),a(7,"td")(8,"div",24),c(9),e()(),a(10,"td")(11,"div",24),c(12),e()(),a(13,"td")(14,"div",25),c(15),I(16,"date"),e()(),h(17,je,8,0,"td",26)(18,Qe,4,0),e()),n&2){let l=r.$implicit,o=m(2);s(3),V(" ",l.vacName," "),s(3),V(" ",l.brandName," "),s(3),V(" ",l.dosage," "),s(3),ie(l.stockQuantity),s(3),V(" ",N(16,6,l.expiryDate,"MMM, dd, yyyy")," "),s(2),B(17,(o._auth.userInfo==null?null:o._auth.userInfo.accountType)=="agri"?17:18)}}function Re(n,r){n&1&&(a(0,"tr")(1,"td",33),c(2,"No Data"),e()())}function Pe(n,r){if(n&1){let l=g();a(0,"app-add",34),u("modalEvent",function(i){_(l);let t=m(2);return v(t.avacModalAdd.set(i))})("getAllMethod",function(){_(l);let i=m(2);return v(i.getAllAvac())}),e()}}function Oe(n,r){if(n&1){let l=g();a(0,"app-view",35),u("modalEvent",function(i){_(l);let t=m(2);return v(t.avacModalView.set(i))})("getAllMethod",function(){_(l);let i=m(2);return v(i.getAllAvac())}),e()}if(n&2){let l=m(2);d("aVacInfo",l.vacInfo)}}function $e(n,r){if(n&1){let l=g();a(0,"app-edit",36),u("modalEvent",function(i){_(l);let t=m(2);return v(t.aVacModalEdit.set(i))})("getAllMethod",function(){_(l);let i=m(2);return v(i.getAllAvac())}),e()}if(n&2){let l=m(2);d("animalVacInfo",l.vacInfo)}}function He(n,r){if(n&1){let l=g();p(0,"app-full-page-loader"),a(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"input",5),u("ngModelChange",function(i){_(l);let t=m();return v(t.searchText=i)}),e()(),a(6,"button",6),u("click",function(){_(l);let i=m();return v(i.applyFilter())}),h(7,Le,1,0,"app-loadingbutton",7)(8,Be,1,0,"i",8),e(),a(9,"button",9),u("click",function(){_(l);let i=m();return v(i.avacModalAdd.set(!0))}),ue(),a(10,"svg",10),p(11,"path",11),e(),c(12," Add Data "),e(),_e(),p(13,"app-exportexcelbtn",12),h(14,qe,3,1,"button",13),e()(),a(15,"div",14)(16,"table",15)(17,"thead",16)(18,"tr",17)(19,"th",18),c(20,"Vaccine Name"),e(),a(21,"th",19),c(22,"Brand Name"),e(),a(23,"th",19),c(24,"Dosage"),e(),a(25,"th",19),c(26,"Stock Quantity"),e(),a(27,"th",19),c(28,"Date Expired"),e(),a(29,"th",19),c(30,"Action"),e()()(),a(31,"tbody"),ee(32,Ge,19,9,"tr",null,Z,!1,Re,3,0),e()()()(),h(35,Pe,1,0,"app-add")(36,Oe,1,1)(37,$e,1,1)}if(n&2){let l=m();s(5),d("ngModel",l.searchText),s(1),d("ngClass",l.themeColor),s(1),d("ngIf",l.isLoadingButton()),s(1),d("ngIf",!l.isLoadingButton()),s(1),d("ngClass",l.themeColor),s(4),d("data",l._avac.avacList())("fileName",l.fileName)("themeColor",l.themeColor),s(1),d("ngIf",(l._auth.userInfo==null?null:l._auth.userInfo.accountType)=="agri"),s(18),te(l.items),s(3),B(35,l.avacModalAdd()?35:l.avacModalView()?36:l.aVacModalEdit()?37:-1)}}var ni=(()=>{let r=class r{constructor(){this.aVacModalEdit=x(!1),this.avacModalAdd=x(!1),this.avacModalView=x(!1),this.isLoadingButton=x(!1),this.isArchivedTable=x(!1),this.fileName="vaccineinventory.xlsx",this.datatoExport="",this.themeColor=localStorage.getItem(R.theme)?.toString(),this.subAvac=new y,this._avac=f(D),this._auth=f(P),this._alert=f(k),this.searchText="",this.items=[]}getAllAvac(){this._auth.userInfo?.accountType=="agri"?this.subAvac.add(this._avac.getAllAvacByAccount(this._auth.userInfo?.id).subscribe(o=>{o.sort((i,t)=>i.AiD-t.AiD),this._avac.avacList.set(o),this.items=this._avac.avacList()})):this.subAvac.add(this._avac.getAllAvac().subscribe(o=>{this._avac.avacList.set(o),this.items=this._avac.avacList()}))}triggerTable(){this.isArchivedTable()==!0&&(this.getAllAvac(),this.isArchivedTable.set(!1)),this.isArchivedTable()==!1&&this.isArchivedTable.set(!0)}openAvacViewModal(o){this.subAvac.add(this._avac.getVaccineById(o).subscribe(i=>{console.log(i),this.vacInfo=i,this.avacModalView.set(!0)}))}openAvacEditModal(o){this.subAvac.add(this._avac.getVaccineById(o).subscribe(i=>{this.vacInfo=i,this.aVacModalEdit.set(!0)}))}applyFilter(){if(this.isLoadingButton.set(!0),this.searchText===""){this.getAllAvac(),this.isLoadingButton.set(!1);return}this.items=this.items.filter(o=>o.vacName.toLowerCase().includes(this.searchText.toLowerCase())),this.isLoadingButton.set(!1)}ngOnInit(){this.getAllAvac()}delete(o){this._alert.simpleAlert("warning","Warning","Are you sure you want to archived this Data?",()=>{console.log(o),this._avac.delete(o,"Dummy").subscribe(i=>{i.Aid==o?(this._alert.handleSuccess("Data archived successfully"),this.getAllAvac()):this._alert.handleError("Failed to archived Data")},i=>{this._alert.handleError("An error occurred while arhiving Data"),console.error(i)})})}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=w({type:r,selectors:[["app-a-vaclist"]],standalone:!0,features:[E],decls:2,vars:1,consts:[[3,"archivedTable","getAllMethod"],[1,"table-container","w-full"],[1,"flex","flex-row","justify-between","w-full"],[1,"search","w-full","flex","items-center","justify-start"],[1,"search-input"],["type","text","placeholder","Search Data",1,"input","input-bordered","w-full","max-w-xs",3,"ngModel","ngModelChange"],[1,"btn","btn-square","border-none","text-white","ml-1",3,"ngClass","click"],[4,"ngIf"],["class","fa-solid fa-magnifying-glass",4,"ngIf"],[1,"btn","border-none","text-white","ml-1",3,"ngClass","click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M12 6v12m6-6H6"],[3,"data","fileName","themeColor"],["class","btn border-none text-white ml-3",3,"ngClass","click",4,"ngIf"],[1,"card","overflow-y-scroll","overflow-x-hidden"],[1,"table","user-table"],[1,"text-stone-600","text-center"],[1,"sticky","top-0","bg-white"],[1,"py-1"],[1,"py-2"],[1,"fa-solid","fa-magnifying-glass"],[1,"btn","border-none","text-white","ml-3",3,"ngClass","click"],[1,"fa-solid","fa-trash-can"],[1,"font-bold","flex","justify-center"],[1,"flex","justify-center"],[1,"flex","flex-row","justify-center","items-center"],["class","w-2 p-3"],[1,"w-2","p-3"],[1,"btn","btn-square","btn-sm","ml-1",3,"click"],[1,"fa-solid","fa-eye"],[1,"fa-solid","fa-pen"],[1,"btn","btn-square","btn-sm","ml-1","mr-1",3,"click"],[1,"fa-solid","fa-trash"],["colspan","6",1,"text-center"],[3,"modalEvent","getAllMethod"],[3,"aVacInfo","modalEvent","getAllMethod"],[3,"animalVacInfo","modalEvent","getAllMethod"]],template:function(i,t){i&1&&h(0,De,1,0,"app-archive-avac-list")(1,He,38,11),i&2&&B(0,t.isArchivedTable()?0:1)},dependencies:[fe,de,me,S,Q,G,A,ve,le,T,M,F,ae,J,he],styles:[".table-container[_ngcontent-%COMP%]{padding:2rem;width:100%;background-color:#999}.add-button[_ngcontent-%COMP%]{background-color:green;color:#fff;border:none}.user-table[_ngcontent-%COMP%]{max-height:79vh}.table-body[_ngcontent-%COMP%]{overflow-y:auto}"]});let n=r;return n})();export{ni as AVaclistComponent};