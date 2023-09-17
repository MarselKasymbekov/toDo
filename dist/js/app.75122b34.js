(function(){"use strict";var t={9024:function(t,e,n){var o=n(9242),a=n(3396);function i(t,e,n,i,l,s){const r=(0,a.up)("Header"),d=(0,a.up)("Notes"),c=(0,a.up)("Modal"),u=(0,a.up)("AddButton");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r,{onGetSearch:e[0]||(e[0]=t=>l.search=t),lang:l.lang,onChangeLang:s.changeLang},null,8,["lang","onChangeLang"]),(0,a.Wm)(d,{notes:s.filterNotes,onDelNote:s.delNote,onChangeNote:s.changeNote,lang:l.lang},null,8,["notes","onDelNote","onChangeNote","lang"]),(0,a.wy)((0,a.Wm)(c,{onCloseModal:s.closeModal,currentId:l.currentId,onAddNote:s.addNote,edit:l.edit,editNote:l.editNote,onEditedNote:s.editedNote,lang:l.lang},null,8,["onCloseModal","currentId","onAddNote","edit","editNote","onEditedNote","lang"]),[[o.F8,l.modalOpen]]),(0,a.Wm)(u,{onOpenModal:s.openModal},null,8,["onOpenModal"])])}n(7658);var l=n(7139),s=n.p+"img/search.2c9e71ed.svg",r=n.p+"img/back.014b4ff1.svg",d=n.p+"img/close.1d4d165f.svg";const c={class:"header"},u={class:"header__content"},g={class:"header__title"},h=(0,a._)("img",{src:s,alt:""},null,-1),_=[h],p={class:"header__form"},m=(0,a._)("img",{src:r,alt:""},null,-1),w=[m],f=["placeholder"],b=(0,a._)("img",{src:d,alt:""},null,-1),v=[b];function N(t,e,n,i,s,r){return(0,a.wg)(),(0,a.iD)("header",c,[(0,a.Wm)(o.uT,{name:"header"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",u,["ru"==n.lang?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"header__lang",onClick:e[0]||(e[0]=(...t)=>r.changeLang&&r.changeLang(...t))},"uz")):(0,a.kq)("",!0),"uz"==n.lang?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"header__lang",onClick:e[1]||(e[1]=(...t)=>r.changeLang&&r.changeLang(...t))},"ru")):(0,a.kq)("",!0),(0,a._)("h1",g,(0,l.zw)(r.words.appbartitle[n.lang]),1),(0,a._)("button",{onClick:e[2]||(e[2]=t=>s.header=!1),class:"header__search"},_)],512),[[o.F8,1==s.header]])])),_:1}),(0,a.Wm)(o.uT,{name:"header"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",p,[(0,a._)("button",{onClick:e[3]||(e[3]=t=>s.header=!0),class:"header__back"},w),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>s.search=t),type:"text",class:"input container",placeholder:r.words.appbarseacrch[n.lang]},null,8,f),[[o.nr,s.search]]),(0,a._)("button",{onClick:e[5]||(e[5]=t=>s.search=""),class:"header__clear"},v)],512),[[o.F8,0==s.header]])])),_:1})])}var k={props:{lang:String},data(){return{header:!0,search:""}},methods:{changeLang(){let t="ru"==this.lang?"uz":"ru";this.$emit("changeLang",t)}},watch:{search(t){this.$emit("getSearch",t)}},inject:["words"]},C=n(89);const z=(0,C.Z)(k,[["render",N]]);var y=z,O=n.p+"img/list.4ed3d4be.svg",D=n.p+"img/grid.dbae4039.svg";const M={class:"notes"},L={class:"container"},S={class:"notes__top"},j={class:"notes__title"},I={key:0,src:O,alt:""},T={key:1,src:D,alt:""};function x(t,e,n,o,i,s){const r=(0,a.up)("NotesCard");return(0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("div",L,[(0,a._)("div",S,[(0,a._)("h2",j,(0,l.zw)(n.notes.length?s.words.infobar[n.lang]:s.words.noinfobar[n.lang]),1),(0,a._)("button",{onClick:e[0]||(e[0]=t=>i.grid=!i.grid),class:"notes__btn"},[i.grid?((0,a.wg)(),(0,a.iD)("img",I)):((0,a.wg)(),(0,a.iD)("img",T)),(0,a._)("span",null,(0,l.zw)(i.grid?s.words.list[n.lang]:s.words.grid[n.lang]),1)])]),(0,a._)("div",{class:(0,l.C_)(["notes__list",{active:!i.grid}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.notes,(e=>((0,a.wg)(),(0,a.j4)(r,{key:t.index,grid:i.grid,note:e,onDelNote:n=>t.$emit("delNote",e.id),onChangeNote:n=>t.$emit("changeNote",e.id),lang:n.lang},null,8,["grid","note","onDelNote","onChangeNote","lang"])))),128))],2)])])}var $=n.p+"img/edit.092f5b23.svg",E=n.p+"img/delete.f04c87ff.svg";const Z={class:"card"},A={class:"card__title"},B={class:"card__time"},W={class:"card__desc"},q={class:"card__controls"},H=(0,a._)("img",{src:$,alt:""},null,-1),F=(0,a._)("img",{src:E,alt:""},null,-1);function R(t,e,n,o,i,s){return(0,a.wg)(),(0,a.iD)("div",Z,[(0,a._)("div",{class:(0,l.C_)({card__content:!n.grid})},[(0,a._)("h3",A,(0,l.zw)(n.note.title),1),(0,a._)("p",B,(0,l.zw)(n.note.date),1)],2),(0,a._)("p",W,(0,l.zw)(n.note.desc),1),(0,a._)("div",q,[(0,a._)("button",{onClick:e[0]||(e[0]=e=>t.$emit("changeNote")),class:"card__btn"},[H,(0,a._)("span",null,(0,l.zw)(s.words.editbtn[n.lang]),1)]),(0,a._)("button",{onClick:e[1]||(e[1]=e=>t.$emit("delNote")),class:"card__btn card__btn_red"},[F,(0,a._)("span",null,(0,l.zw)(s.words.deledit[n.lang]),1)])])])}var V={props:{grid:Boolean,note:Object,lang:String},inject:["words"]};const U=(0,C.Z)(V,[["render",R]]);var G=U,J={components:{NotesCard:G},props:{notes:{type:Array,default:[]},lang:String},data(){return{grid:!0}},inject:["words"]};const P=(0,C.Z)(J,[["render",x]]);var Q=P;const K={class:"modal__title"},Y={class:"modal__content"},X=(0,a._)("span",null,"Title",-1),tt=(0,a._)("span",null,"Content",-1),et={class:"modal__controls"};function nt(t,e,n,i,s,r){return(0,a.wg)(),(0,a.j4)(o.uT,{name:"modal"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"modal",onClick:e[6]||(e[6]=(...t)=>r.closeModal&&r.closeModal(...t))},[(0,a._)("div",{class:"modal__form",onClick:e[5]||(e[5]=(0,o.iM)((()=>{}),["stop"]))},[(0,a._)("h3",K,(0,l.zw)(n.edit?r.words.titlewindowedit[n.lang]:r.words.titlewindow[n.lang]),1),(0,a._)("div",Y,[(0,a._)("label",null,[X,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.title=t),type:"text",placeholder:"Title"},null,512),[[o.nr,s.title]])]),(0,a._)("label",null,[tt,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>s.desc=t),rows:"1",placeholder:"Content"},null,512),[[o.nr,s.desc]])])]),(0,a._)("div",et,[(0,a._)("button",{onClick:e[2]||(e[2]=(...t)=>r.closeModal&&r.closeModal(...t)),class:"modal__btn modal__btn_red"},(0,l.zw)(r.words.closebtn[n.lang]),1),n.edit?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:e[3]||(e[3]=(...t)=>r.changeNote&&r.changeNote(...t)),class:"modal__btn"},(0,l.zw)(r.words.editwindowbtn[n.lang]),1)):((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:e[4]||(e[4]=(...t)=>r.addNote&&r.addNote(...t)),class:"modal__btn"},(0,l.zw)(r.words.addbtn[n.lang]),1))])])])])),_:1})}var ot={props:{currentId:Number,edit:Boolean,editNote:Object,lang:String},data(){return{title:"",desc:"",id:this.currentId}},methods:{closeModal(){this.$emit("closeModal"),this.title="",this.desc=""},addNote(){let t=this.title.trim(),e=this.desc.trim();if(t.length>0&&e.length>0){let n={id:this.id++,title:t,desc:e,date:(new Date).toLocaleDateString()};this.$emit("addNote",n),this.closeModal()}},changeNote(){let t=this.title.trim(),e=this.desc.trim();if(t.length>0&&e.length>0){let n={id:this.editNote.id,title:t,desc:e,date:(new Date).toLocaleDateString()};this.$emit("editedNote",n),this.closeModal()}}},watch:{edit(t){t?(this.title=this.editNote.title,this.desc=this.editNote.desc):(this.title="",this.desc="")}},inject:["words"]};const at=(0,C.Z)(ot,[["render",nt]]);var it=at;const lt=(0,a._)("img",{src:$,alt:""},null,-1),st=[lt];function rt(t,e,n,o,i,l){return(0,a.wg)(),(0,a.iD)("button",{class:"add-btn",onClick:e[0]||(e[0]=e=>t.$emit("openModal"))},st)}var dt={};const ct=(0,C.Z)(dt,[["render",rt]]);var ut=ct;const gt={appbartitle:{ru:"Заметки",uz:"Eslatmalar"},appbarseacrch:{ru:"Поиск...",uz:"Qidirish..."},infobar:{ru:"Все заметки",uz:"Barcha eslatmalar"},noinfobar:{ru:"Нет заметок",uz:"Еslatmalar yoq"},list:{ru:"Список",uz:"Roʻyxat"},grid:{ru:"Сетка",uz:"Setka"},titlewindow:{ru:"Добавить заметку",uz:"Eslatma qo’shish"},titlewindowedit:{ru:"Изменить заметку",uz:"Elsatmani tahrirlash"},editbtn:{ru:"РЕДАКТИРОВАТЬ",uz:"O`ZGARTIRISH"},deledit:{ru:"Удалить",uz:"o'chirish"},closebtn:{ru:"Отмена",uz:"Bekor qilish"},addbtn:{ru:"Добавить",uz:"Qo’shish"},editwindowbtn:{ru:"изменить",uz:"o'zgartirish"}};var ht=gt;var _t={components:{Header:y,Notes:Q,Modal:it,AddButton:ut},data(){return{notes:[{id:1,title:"Vue",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",date:"07.03.2022"},{id:2,title:"React",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",date:"13.13.20122"},{id:3,title:"HTML",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",date:"00.00.0022"}],modalOpen:!1,currentId:4,edit:!1,editNote:{},search:"",lang:"ru",langwords:{}}},computed:{filterNotes(){const t=this.notes.filter((t=>{let e=t.title.toLowerCase().includes(this.search.toLowerCase());return e}));return t}},methods:{openModal(){this.modalOpen=!0},closeModal(){this.modalOpen=!1,setTimeout((()=>{this.edit=!1}),500)},addNote(t){this.notes.push(t)},delNote(t){let e=this.notes.findIndex((e=>e.id==t));this.notes.splice(e,1)},getNotes(){const t=localStorage.getItem("notes");let e=JSON.parse(t);if(e){this.notes=e;let t=this.notes.length-1;this.currentId=t>=0?this.notes[t].id+1:1}},changeNote(t){let e=this.notes.find((e=>e.id==t));this.editNote=e,this.edit=!0,this.modalOpen=!0},editedNote(t){this.notes.forEach((e=>{e.id==t.id&&(e.title=t.title,e.desc=t.desc,e.date=t.date)}))},changeLang(t){this.lang=t,localStorage.setItem("lang",t)}},watch:{notes:{handler(t,e){localStorage.setItem("notes",JSON.stringify(this.notes))},deep:!0}},created(){this.getNotes(),this.landwords=ht,this.lang=localStorage.getItem("lang")||"ru"},provide:{words:ht}};const pt=(0,C.Z)(_t,[["render",i]]);var mt=pt;(0,o.ri)(mt).mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,i){if(!o){var l=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],i=t[c][2];for(var s=!0,r=0;r<o.length;r++)(!1&i||l>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[r])}))?o.splice(r--,1):(s=!1,i<l&&(l=i));if(s){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,i,l=o[0],s=o[1],r=o[2],d=0;if(l.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(r)var c=r(n)}for(e&&e(o);d<l.length;d++)i=l[d],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunkToDo"]=self["webpackChunkToDo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9024)}));o=n.O(o)})();
//# sourceMappingURL=app.75122b34.js.map