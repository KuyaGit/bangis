import{b as G,c as me}from"./chunk-GFZO7XJD.js";import{a as se}from"./chunk-GGJBEORC.js";import{a as q,b as de}from"./chunk-RIZNJ57Q.js";import{a as T,c as V,d as Y,f as P,g as Z,h as ee,i as te,j as ie,k as ne,l as le,m as re,n as oe,o as R,p as ae}from"./chunk-FRRQB3LN.js";import{a as $}from"./chunk-EJILPM2V.js";import{c as F,e as D,f as X,g as A,t as B,u as j,v as O}from"./chunk-ULL2XHBX.js";import{$a as W,Aa as h,Ea as c,Ja as w,Pa as u,Ta as v,Ua as g,Va as L,Wa as k,X as x,Xa as N,Ya as t,Z as C,Za as e,_a as s,ab as J,ca as p,cb as f,da as _,ea as z,f as I,gb as b,hb as m,ib as r,jb as E,kb as y,ob as S,pb as K,sb as Q,tb as U}from"./chunk-KWKGXFII.js";var H=(()=>{let a=class a{constructor(){this.modalEvent=new w,this.getAllMethod=new w,this._fb=x(oe),this.labForm=this._fb.group({sampleIdFrom:[{value:"",disabled:!0}],specimen:[{value:"",disabled:!0}],testMethod:[{value:"",disabled:!0}],fat:[{value:"",disabled:!0}],recommendation:[{value:"",disabled:!0}],diagnosis:[{value:"",disabled:!0}],remarks:[{value:"",disabled:!0}],labAccession:[{value:"",disabled:!0}],dateReported:[{value:"",disabled:!0}],owner:[{value:"",disabled:!0}],address:[{value:"",disabled:!0}],sender:[{value:"",disabled:!0}],senderAddress:[{value:"",disabled:!0}],email:[{value:"",disabled:!0}],contactNumber:[{value:"",disabled:!0}],gender:[{value:"",disabled:!0}],species:[{value:"",disabled:!0}],breed:[{value:"",disabled:!0}],age:[{value:"",disabled:!0}]})}ngOnInit(){this.labForm.patchValue(this.information)}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=C({type:a,selectors:[["app-viewlabresult"]],inputs:{information:"information"},outputs:{modalEvent:"modalEvent",getAllMethod:"getAllMethod"},standalone:!0,features:[S],decls:157,vars:5,consts:[["aria-labelledby","modal-title","role","dialog","aria-modal","true",1,"relative","z-10"],[1,"fixed","inset-0","bg-gray-500","bg-opacity-75","transition-opacity"],[1,"fixed","inset-0","z-10","w-screen","flex","items-center","sm:flex","sm:items-center","sm:justify-center","sm:h-full"],[1,"flex","items-end","justify-center","p-4","text-center","sm:items-center","sm:flex","sm:p-0"],[1,"w-full","flex","justify-center","items-center",3,"formGroup"],[1,"relative","transform","overflow-hidden","rounded-lg","bg-white","text-left","shadow-xl","transition-all","s","sm:my-8","sm:w-90","sm:max-w-6xl","md:max-w-6xl"],[1,"bg-white","h-[90vh]","px-4","pb-4","pt-5","sm:p-6","sm:pb-4","md:overflow-x-scroll","md:h-[70vh]"],[1,"text-2xl","flex","items-start","font-extrabold","text-slate-600","mb-2"],[1,"flex","gap-2"],[1,"sm:flex","sm:items-center","w-full"],[1,"form-control","w-full"],[1,"label"],[1,"label-text"],["type","string","formControlName","labAccession","placeholder","Enter Lab Accession",1,"input","input-bordered","w-full"],["type","text","disabled","",1,"input","input-bordered","w-full",3,"value"],[1,"grid","grid-cols-3","gap-3"],["type","string","formControlName","owner","placeholder","Enter Owner",1,"input","input-bordered","w-full"],["type","string","formControlName","address","placeholder","Enter Address",1,"input","input-bordered","w-full"],["type","string","formControlName","contactNumber","placeholder","Enter Contact Number",1,"input","input-bordered","w-full"],["type","string","formControlName","sender","placeholder","Enter Sender",1,"input","input-bordered","w-full"],["type","string","formControlName","senderAddress","placeholder","Enter Address",1,"input","input-bordered","w-full"],["type","string","formControlName","email","placeholder","Enter Email",1,"input","input-bordered","w-full"],["type","string","formControlName","specimen","placeholder","Enter Specimen",1,"input","input-bordered","w-full"],["type","string","formControlName","species","placeholder","Enter Species",1,"input","input-bordered","w-full"],["type","string","formControlName","breed","placeholder","Enter Breed",1,"input","input-bordered","w-full"],[1,"grid","grid-cols-2","gap-3"],["type","number","formControlName","age","placeholder","Enter Age",1,"input","input-bordered","w-full"],["type","string","formControlName","gender","placeholder","Enter Sex",1,"input","input-bordered","w-full"],["type","string","formControlName","testMethod","placeholder","Enter Species",1,"input","input-bordered","w-full"],[1,"grid","grid-cols-2","gap-2"],["type","string","formControlName","fat","placeholder","Enter  FAT",1,"input","input-bordered","w-full"],["type","string","formControlName","recommendation","placeholder","Enter  Recommendation",1,"input","input-bordered","w-full"],["formControlName","diagnosis",1,"select","select-bordered","w-full"],["value","","disabled","","selected",""],["value","Positive"],["value","Negative"],["type","string","formControlName","remarks","placeholder","Enter  Remarks",1,"input","input-bordered","w-full"],[1,"bg-gray-50","px-4","py-3","sm:flex","sm:flex-row-reverse","sm:px-6"],["type","button",1,"mt-3","inline-flex","w-full","justify-center","rounded-md","bg-white","px-3","py-2","text-sm","font-semibold","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","hover:bg-gray-50","sm:mt-0","sm:w-auto",3,"click"]],template:function(i,d){if(i&1&&(t(0,"div",0),s(1,"div",1),t(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5)(6,"div",6)(7,"h1",7),r(8," Clinical Laboratory Report "),e(),t(9,"div",8)(10,"div",9)(11,"label",10)(12,"div",11)(13,"span",12),r(14,"Lab Accession"),e()(),s(15,"input",13),e()(),t(16,"div")(17,"div",9)(18,"label",10)(19,"div",11)(20,"span",12),r(21,"Date Recieved"),e()(),s(22,"input",14),Q(23,"date"),e()()()(),t(24,"h1",7),r(25," Client Information "),e(),t(26,"div",15)(27,"div")(28,"div",9)(29,"label",10)(30,"div",11)(31,"span",12),r(32,"Owner"),e()(),s(33,"input",16),e()()(),t(34,"div")(35,"div",9)(36,"label",10)(37,"div",11)(38,"span",12),r(39,"Address"),e()(),s(40,"input",17),e()()(),t(41,"div")(42,"div",9)(43,"label",10)(44,"div",11)(45,"span",12),r(46,"Contact Number"),e()(),s(47,"input",18),e()()()(),t(48,"div",15)(49,"div")(50,"div",9)(51,"label",10)(52,"div",11)(53,"span",12),r(54,"Sender"),e()(),s(55,"input",19),e()()(),t(56,"div")(57,"div",9)(58,"label",10)(59,"div",11)(60,"span",12),r(61,"Sender Address"),e()(),s(62,"input",20),e()()(),t(63,"div")(64,"div",9)(65,"label",10)(66,"div",11)(67,"span",12),r(68,"Email"),e()(),s(69,"input",21),e()()()(),t(70,"h1",7),r(71," Specimen Information "),e(),t(72,"div",15)(73,"div")(74,"div",9)(75,"label",10)(76,"div",11)(77,"span",12),r(78,"Specimen"),e()(),s(79,"input",22),e()()(),t(80,"div")(81,"div",9)(82,"label",10)(83,"div",11)(84,"span",12),r(85,"Species"),e()(),s(86,"input",23),e()()(),t(87,"div")(88,"div",9)(89,"label",10)(90,"div",11)(91,"span",12),r(92,"Breed"),e()(),s(93,"input",24),e()()()(),t(94,"div",25)(95,"div")(96,"div",9)(97,"label",10)(98,"div",11)(99,"span",12),r(100,"Age(Months)"),e()(),s(101,"input",26),e()()(),t(102,"div")(103,"div",9)(104,"label",10)(105,"div",11)(106,"span",12),r(107,"Sex"),e()(),s(108,"input",27),e()()()(),t(109,"h1",7),r(110," Result "),e(),t(111,"div")(112,"div",9)(113,"label",10)(114,"div",11)(115,"span",12),r(116,"Test Method"),e()(),s(117,"input",28),e()()(),t(118,"div",29)(119,"div")(120,"div",9)(121,"label",10)(122,"div",11)(123,"span",12),r(124,"Flourescent Antibody Test(FAT):"),e()(),s(125,"input",30),e()()(),t(126,"div")(127,"div",9)(128,"label",10)(129,"div",11)(130,"span",12),r(131,"Recommendation"),e()(),s(132,"input",31),e()()()(),t(133,"div",29)(134,"div")(135,"div",9)(136,"label",10)(137,"div",11)(138,"span",12),r(139,"Diagnosis"),e()(),t(140,"select",32)(141,"option",33),r(142," Please Select Gender "),e(),t(143,"option",34),r(144,"Positive"),e(),t(145,"option",35),r(146,"Negative"),e()()()()(),t(147,"div")(148,"div",9)(149,"label",10)(150,"div",11)(151,"span",12),r(152,"Remarks"),e()(),s(153,"input",36),e()()()()(),t(154,"div",37)(155,"button",38),b("click",function(){return d.modalEvent.emit(!1)}),r(156," Cancel "),e()()()()()()()),i&2){let M;c(4),u("formGroup",d.labForm),c(18),u("value",U(23,2,(M=d.labForm.get("dateReported"))==null?null:M.value,"MMM dd, yyyy"))}},dependencies:[A,X,R,Z,le,re,T,ee,ne,V,Y,ae,te,ie]});let l=a;return l})();function fe(l,a){l&1&&s(0,"app-loadingbutton")}function he(l,a){l&1&&s(0,"i",16)}function ve(l,a){if(l&1){let n=f();t(0,"button",17),b("click",function(){p(n);let i=m();return _(i.closeArchiveTable())}),s(1,"i",18),r(2," Back "),e()}if(l&2){let n=m();u("ngClass",n.themeColor)}}function xe(l,a){if(l&1){let n=f();t(0,"td",23)(1,"div",24)(2,"button",25),b("click",function(){p(n);let i=m().$implicit,d=m();return _(d.openViewModal(i.labId))}),s(3,"i",26),e(),t(4,"button",27),b("click",function(){p(n);let i=m().$implicit,d=m();return _(d.restoreResult(i.labId))}),s(5,"i",28),e()()()}}function ge(l,a){if(l&1){let n=f();t(0,"td",23)(1,"div",24)(2,"button",25),b("click",function(){p(n);let i=m().$implicit,d=m();return _(d.openViewModal(i.labId))}),s(3,"i",26),e()()()}}function Ce(l,a){if(l&1&&(t(0,"tr")(1,"td")(2,"div",19),r(3),e()(),t(4,"td")(5,"div",20),r(6),e()(),t(7,"td")(8,"div",20),r(9),e()(),t(10,"td")(11,"div",21),r(12),e()(),v(13,xe,6,0,"td",22)(14,ge,4,0),e()),l&2){let n=a.$implicit,o=m();c(3),y(" ",n.owner," "),c(3),E(n.email),c(3),E(n.address),c(3),y(" ",n.diagnosis," "),c(1),g(13,(o._authS.userInfo==null?null:o._authS.userInfo.accountType)==="lab"?13:14)}}function we(l,a){l&1&&(t(0,"tr")(1,"td",29),r(2,"No Data"),e()())}function Ee(l,a){if(l&1){let n=f();t(0,"app-viewlabresult",30),b("modalEvent",function(i){p(n);let d=m();return _(d.modalView.set(i))})("getAllMethod",function(){p(n);let i=m();return _(i.getAllLabResults())}),e()}if(l&2){let n=m();u("information",n.labresult)}}var _e=(()=>{let a=class a{constructor(){this.archivedTable=new w,this.getAllMethod=new w,this.fileName="labresults.xlsx",this.themeColor=localStorage.getItem(B.theme)?.toString(),this.modalAdd=h(!1),this.modalEdit=h(!1),this.modalView=h(!1),this.subcription=new I,this._labservice=x(G),this._authS=x(O),this._alert=x(j),this.accountID=this._authS.userInfo?.id,this.searchText="",this.items=[],this.isLoadingButton=h(!1)}openViewModal(o){this._labservice.getRabiesResultById(o).subscribe(i=>{this.labresult=i[0],this.modalView.set(!0)})}getAllLabResults(){this.subcription.add(this._labservice.getAllLabResultsByAccountArchived(Number(this.accountID)).subscribe(o=>{this._labservice.results.set(o),this.items=this._labservice.results()}))}closeArchiveTable(){this.getAllMethod.emit(this.subcription),this.archivedTable.emit(!1)}restoreResult(o){this._alert.simpleAlert("warning","Warning","Are you sure you want to restore this Result?",()=>{this._labservice.restoreRabiesResult(o).subscribe(i=>{i.labId==o?(this._alert.handleSuccess("Result restored successfully"),this.getAllLabResults()):this._alert.handleError("Failed to restore result")},i=>{this._alert.handleError("An error occurred while arhiving Result"),console.error(i)})})}applyFilter(){if(this.isLoadingButton.set(!0),this.searchText===""){this.getAllLabResults(),this.isLoadingButton.set(!1);return}this.items=this.items.filter(o=>o.owner.toLowerCase().includes(this.searchText.toLowerCase())),this.isLoadingButton.set(!1)}ngOnInit(){this.getAllLabResults()}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=C({type:a,selectors:[["app-archive-labresult"]],outputs:{archivedTable:"archivedTable",getAllMethod:"getAllMethod"},standalone:!0,features:[S],decls:29,vars:7,consts:[[1,"table-container","w-full"],[1,"flex","flex-row","justify-between","w-full"],[1,"search","w-full","flex","items-center","justify-start"],[1,"search-input"],["type","text","placeholder","Search Data",1,"input","input-bordered","w-full","max-w-xs",3,"ngModel","ngModelChange"],[1,"btn","btn-square","border-none","text-white","ml-1",3,"ngClass","click"],[4,"ngIf"],["class","fa-solid fa-magnifying-glass",4,"ngIf"],["class","btn border-none text-white ml-3",3,"ngClass","click",4,"ngIf"],[1,"card","max-h-[450px]","overflow-y-scroll"],[1,"table-auto","table"],[1,"text-stone-600"],[1,"sticky","top-0","bg-white"],[1,"py-1","text-center"],[1,"table-body"],[3,"information"],[1,"fa-solid","fa-magnifying-glass"],[1,"btn","border-none","text-white","ml-3",3,"ngClass","click"],[1,"fa-solid","fa-arrow-left"],[1,"font-bold","flex","justify-center","py-1"],[1,"flex","justify-center","py-1"],[1,"flex","flex-row","justify-center","items-center","p-1"],["class","w-2 p-3"],[1,"w-2","p-3"],[1,"flex","justify-center"],[1,"btn","btn-square","btn-sm","ml-1",3,"click"],[1,"fa-solid","fa-eye"],[1,"btn","btn-square","btn-sm","ml-1","mr-1",3,"click"],[1,"fa-solid","fa-rotate-right"],["colspan","6",1,"text-center"],[3,"information","modalEvent","getAllMethod"]],template:function(i,d){i&1&&(s(0,"app-full-page-loader"),t(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"input",4),b("ngModelChange",function(be){return d.searchText=be}),e()(),t(6,"button",5),b("click",function(){return d.applyFilter()}),v(7,fe,1,0,"app-loadingbutton",6)(8,he,1,0,"i",7),e(),v(9,ve,3,1,"button",8),e()(),t(10,"div",9)(11,"table",10)(12,"thead",11)(13,"tr",12)(14,"th",13),r(15,"Name"),e(),t(16,"th",13),r(17,"Email"),e(),t(18,"th",13),r(19,"Address"),e(),t(20,"th",13),r(21,"Diagnosis"),e(),t(22,"th",13),r(23,"Action"),e()()(),t(24,"tbody",14),k(25,Ce,15,5,"tr",null,L,!1,we,3,0),e()()(),v(28,Ee,1,1,"app-viewlabresult",15),e()),i&2&&(c(5),u("ngModel",d.searchText),c(1),u("ngClass",d.themeColor),c(1),u("ngIf",d.isLoadingButton()),c(1),u("ngIf",!d.isLoadingButton()),c(1),u("ngIf",(d._authS.userInfo==null?null:d._authS.userInfo.accountType)=="lab"),c(16),N(d.items),c(3),g(28,d.modalView()?28:-1))},dependencies:[H,$,q,A,F,D,R,T,V,P],styles:[".table-container[_ngcontent-%COMP%]{padding:2rem;width:100%;background-color:#999}.add-button[_ngcontent-%COMP%]{background-color:green;color:#fff;border:none}.user-table[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]{max-height:70vh}.card[_ngcontent-%COMP%]{max-height:80vh}"]});let l=a;return l})();function ye(l,a){if(l&1){let n=f();t(0,"app-archive-labresult",0),b("archivedTable",function(){p(n);let i=m();return _(i.isArchivedTable.set(!1))})("getAllMethod",function(){p(n);let i=m();return _(i.triggerTable())}),e()}}function Se(l,a){l&1&&s(0,"app-loadingbutton")}function Ae(l,a){l&1&&s(0,"i",18)}function Te(l,a){if(l&1){let n=f();W(0),t(1,"button",19),b("click",function(){p(n);let i=m(2);return _(i.modalAdd.set(!0))}),z(),t(2,"svg",20),s(3,"path",21),e(),r(4," Add "),e(),J()}if(l&2){let n=m(2);c(1),u("ngClass",n.themeColor)}}function Ve(l,a){if(l&1){let n=f();t(0,"button",22),b("click",function(){p(n);let i=m(2);return _(i.triggerTable())}),s(1,"i",23),r(2," View Archived Data "),e()}if(l&2){let n=m(2);u("ngClass",n.themeColor)}}function Re(l,a){if(l&1){let n=f();t(0,"td",28)(1,"div",29)(2,"button",30),b("click",function(){p(n);let i=m().$implicit,d=m(2);return _(d.openViewModal(i.labId))}),s(3,"i",31),e(),t(4,"button",32),b("click",function(){p(n);let i=m().$implicit,d=m(2);return _(d.deleteResult(i.labId))}),s(5,"i",33),e()()()}}function Me(l,a){if(l&1){let n=f();t(0,"td",28)(1,"div",29)(2,"button",30),b("click",function(){p(n);let i=m().$implicit,d=m(2);return _(d.openViewModal(i.labId))}),s(3,"i",31),e()()()}}function Ie(l,a){if(l&1&&(t(0,"tr")(1,"td")(2,"div",24),r(3),e()(),t(4,"td")(5,"div",25),r(6),e()(),t(7,"td")(8,"div",25),r(9),e()(),t(10,"td")(11,"div",26),r(12),e()(),v(13,Re,6,0,"td",27)(14,Me,4,0),e()),l&2){let n=a.$implicit,o=m(2);c(3),y(" ",n.owner," "),c(3),E(n.email),c(3),E(n.address),c(3),y(" ",n.diagnosis," "),c(1),g(13,(o._authS.userInfo==null?null:o._authS.userInfo.accountType)==="lab"?13:14)}}function Le(l,a){l&1&&(t(0,"tr")(1,"td",34),r(2,"No Data"),e()())}function ke(l,a){if(l&1){let n=f();t(0,"app-clinicallabresult",35),b("modalEvent",function(i){p(n);let d=m(2);return _(d.modalAdd.set(i))})("getAllMethod",function(){p(n);let i=m(2);return _(i.getAllLabResults())}),e()}}function Ne(l,a){if(l&1){let n=f();t(0,"app-viewlabresult",36),b("modalEvent",function(i){p(n);let d=m(2);return _(d.modalView.set(i))})("getAllMethod",function(){p(n);let i=m(2);return _(i.getAllLabResults())}),e()}if(l&2){let n=m(2);u("information",n.labresult)}}var Fe=()=>["lab"];function De(l,a){if(l&1){let n=f();s(0,"app-full-page-loader"),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"input",5),b("ngModelChange",function(i){p(n);let d=m();return _(d.searchText=i)}),e()(),t(6,"button",6),b("click",function(){p(n);let i=m();return _(i.applyFilter())}),v(7,Se,1,0,"app-loadingbutton",7)(8,Ae,1,0,"i",8),e(),s(9,"app-exportexcelbtn",9),v(10,Te,5,1,"ng-container",10)(11,Ve,3,1,"button",11),e()(),t(12,"div",12)(13,"table",13)(14,"thead",14)(15,"tr",15)(16,"th",16),r(17,"Name"),e(),t(18,"th",16),r(19,"Email"),e(),t(20,"th",16),r(21,"Address"),e(),t(22,"th",16),r(23,"Diagnosis"),e(),t(24,"th",16),r(25,"Action"),e()()(),t(26,"tbody",17),k(27,Ie,15,5,"tr",null,L,!1,Le,3,0),e()()(),v(30,ke,1,0,"app-clinicallabresult")(31,Ne,1,1),e()}if(l&2){let n=m();c(5),u("ngModel",n.searchText),c(1),u("ngClass",n.themeColor),c(1),u("ngIf",n.isLoadingButton()),c(1),u("ngIf",!n.isLoadingButton()),c(1),u("data",n._labservice.results())("fileName",n.fileName)("themeColor",n.themeColor),c(1),u("appHasRole",K(11,Fe)),c(1),u("ngIf",(n._authS.userInfo==null?null:n._authS.userInfo.accountType)=="lab"),c(16),N(n.items),c(3),g(30,n.modalAdd()?30:n.modalView()?31:-1)}}var yt=(()=>{let a=class a{constructor(){this.fileName="labresults.xlsx",this.themeColor=localStorage.getItem(B.theme)?.toString(),this.modalAdd=h(!1),this.modalEdit=h(!1),this.modalView=h(!1),this.subcription=new I,this._labservice=x(G),this._authS=x(O),this._alert=x(j),this.accountID=this._authS.userInfo?.id,this.searchText="",this.items=[],this.isLoadingButton=h(!1),this.isArchivedTable=h(!1)}openViewModal(o){this._labservice.getRabiesResultById(o).subscribe(i=>{this.labresult=i[0],this.modalView.set(!0)})}openEditModal(o){}getAllLabResults(){this._authS.userInfo?.accountType==="agri"?this._labservice.getAllLabResults().subscribe(o=>{this._labservice.results.set(o),this.items=this._labservice.results()}):this.subcription.add(this._labservice.getAllLabResultsByAccount(Number(this.accountID)).subscribe(o=>{this._labservice.results.set(o),this.items=this._labservice.results()}))}deleteResult(o){this._alert.simpleAlert("warning","Warning","Are you sure you want to archived this Result?",()=>{this._labservice.deleteRabiesResult(o).subscribe(i=>{i.labId==o?(this._alert.handleSuccess("Result archived successfully"),this.getAllLabResults()):this._alert.handleError("Failed to archived result")},i=>{this._alert.handleError("An error occurred while arhiving Result"),console.error(i)})})}applyFilter(){if(this.isLoadingButton.set(!0),this.searchText===""){this.getAllLabResults(),this.isLoadingButton.set(!1);return}this.items=this.items.filter(o=>o.owner.toLowerCase().includes(this.searchText.toLowerCase())),this.isLoadingButton.set(!1)}triggerTable(){this.isArchivedTable()==!0&&(this.getAllLabResults(),this.isArchivedTable.set(!1)),this.isArchivedTable()==!1&&this.isArchivedTable.set(!0)}ngOnInit(){this.getAllLabResults()}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=C({type:a,selectors:[["app-resulttable"]],standalone:!0,features:[S],decls:2,vars:1,consts:[[3,"archivedTable","getAllMethod"],[1,"table-container","w-full"],[1,"flex","flex-row","justify-between","w-full"],[1,"search","w-full","flex","items-center","justify-start"],[1,"search-input"],["type","text","placeholder","Search Data",1,"input","input-bordered","w-full","max-w-xs",3,"ngModel","ngModelChange"],[1,"btn","btn-square","border-none","text-white","ml-1",3,"ngClass","click"],[4,"ngIf"],["class","fa-solid fa-magnifying-glass",4,"ngIf"],[3,"data","fileName","themeColor"],[4,"appHasRole"],["class","btn border-none text-white ml-3",3,"ngClass","click",4,"ngIf"],[1,"card","max-h-[450px]","overflow-y-scroll"],[1,"table-auto","table"],[1,"text-stone-600"],[1,"sticky","top-0","bg-white"],[1,"py-1","text-center"],[1,"table-body"],[1,"fa-solid","fa-magnifying-glass"],[1,"btn","text-white","ml-3","border-none",3,"ngClass","click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M12 6v12m6-6H6"],[1,"btn","border-none","text-white","ml-3",3,"ngClass","click"],[1,"fa-solid","fa-trash-can"],[1,"font-bold","flex","justify-center","py-1"],[1,"flex","justify-center","py-1"],[1,"flex","flex-row","justify-center","items-center","p-1"],["class","w-2 p-3"],[1,"w-2","p-3"],[1,"flex","justify-center"],[1,"btn","btn-square","btn-sm","ml-1",3,"click"],[1,"fa-solid","fa-eye"],[1,"btn","btn-square","btn-sm","ml-1","mr-1",3,"click"],[1,"fa-solid","fa-trash"],["colspan","6",1,"text-center"],[3,"modalEvent","getAllMethod"],[3,"information","modalEvent","getAllMethod"]],template:function(i,d){i&1&&v(0,ye,1,0,"app-archive-labresult")(1,De,32,12),i&2&&g(0,d.isArchivedTable()?0:1)},dependencies:[$,A,F,D,de,me,H,R,T,V,P,q,_e,se],styles:[".table-container[_ngcontent-%COMP%]{padding:2rem;width:100%;background-color:#999}.add-button[_ngcontent-%COMP%]{background-color:green;color:#fff;border:none}.user-table[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]{max-height:70vh}.card[_ngcontent-%COMP%]{max-height:80vh}"]});let l=a;return l})();export{yt as ResulttableComponent};
