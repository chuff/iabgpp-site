var kt=Object.defineProperty;var Rt=(n,t,e)=>t in n?kt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var l=(n,t,e)=>Rt(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();class ft{constructor(t,e,s,i){l(this,"eventName");l(this,"listenerId");l(this,"data");l(this,"pingData");this.eventName=t,this.listenerId=e,this.data=s,this.pingData=i}}class mt{constructor(t){l(this,"gppVersion");l(this,"cmpStatus");l(this,"cmpDisplayStatus");l(this,"signalStatus");l(this,"supportedAPIs");l(this,"cmpId");l(this,"sectionList");l(this,"applicableSections");l(this,"gppString");l(this,"parsedSections");this.gppVersion=t.gppVersion,this.cmpStatus=t.cmpStatus,this.cmpDisplayStatus=t.cmpDisplayStatus,this.signalStatus=t.signalStatus,this.supportedAPIs=t.supportedAPIs,this.cmpId=t.cmpId,this.sectionList=t.gppModel.getSectionIds(),this.applicableSections=t.applicableSections,this.gppString=t.gppModel.encode(),this.parsedSections=t.gppModel.toObject()}}class qe{constructor(t,e,s){l(this,"callback");l(this,"parameter");l(this,"success",!0);l(this,"cmpApiContext");this.cmpApiContext=t,Object.assign(this,{callback:e,parameter:s})}execute(){try{return this.respond()}catch{return this.invokeCallback(null),null}}invokeCallback(t){const e=t!==null;this.callback&&this.callback(t,e)}}class Gt extends qe{respond(){let t=this.cmpApiContext.eventQueue.add({callback:this.callback,parameter:this.parameter}),e=new ft("listenerRegistered",t,!0,new mt(this.cmpApiContext));this.invokeCallback(e)}}class xt extends qe{respond(){let t=new mt(this.cmpApiContext);this.invokeCallback(t)}}class Bt extends qe{respond(){if(!this.parameter||this.parameter.length===0)throw new Error("<section>.<field> parameter required");let t=this.parameter.split(".");if(t.length!=2)throw new Error("Field name must be in the format <section>.<fieldName>");let e=t[0],s=t[1],i=null;this.parameter!="tcfeuv2"&&(i=this.cmpApiContext.gppModel.getFieldValue(e,s)),this.invokeCallback(i)}}class Lt extends qe{respond(){if(!this.parameter||this.parameter.length===0)throw new Error("<section> parameter required");let t=null;this.parameter!="tcfeuv2"&&this.cmpApiContext.gppModel.hasSection(this.parameter)&&(t=this.cmpApiContext.gppModel.getSection(this.parameter)),this.invokeCallback(t)}}class Ft extends qe{respond(){if(!this.parameter||this.parameter.length===0)throw new Error("<section>[.version] parameter required");let t=this.cmpApiContext.gppModel.hasSection(this.parameter);this.invokeCallback(t)}}var Se;(function(n){n.ADD_EVENT_LISTENER="addEventListener",n.GET_FIELD="getField",n.GET_SECTION="getSection",n.HAS_SECTION="hasSection",n.PING="ping",n.REMOVE_EVENT_LISTENER="removeEventListener"})(Se||(Se={}));class Ut extends qe{respond(){let t=this.parameter,e=this.cmpApiContext.eventQueue.remove(t),s=new ft("listenerRemoved",t,e,new mt(this.cmpApiContext));this.invokeCallback(s)}}var yt,Vt,Pt,Ct,Dt,wt;wt=Se.ADD_EVENT_LISTENER,Dt=Se.GET_FIELD,Ct=Se.GET_SECTION,Pt=Se.HAS_SECTION,Vt=Se.PING,yt=Se.REMOVE_EVENT_LISTENER;class Oe{}l(Oe,wt,Gt),l(Oe,Dt,Bt),l(Oe,Ct,Lt),l(Oe,Pt,Ft),l(Oe,Vt,xt),l(Oe,yt,Ut);var nt;(function(n){n.STUB="stub",n.LOADING="loading",n.LOADED="loaded",n.ERROR="error"})(nt||(nt={}));var st;(function(n){n.VISIBLE="visible",n.HIDDEN="hidden",n.DISABLED="disabled"})(st||(st={}));var It;(function(n){n.GPP_LOADED="gpploaded",n.CMP_UI_SHOWN="cmpuishown",n.USER_ACTION_COMPLETE="useractioncomplete"})(It||(It={}));var it;(function(n){n.NOT_READY="not ready",n.READY="ready"})(it||(it={}));class jt{constructor(t,e){l(this,"callQueue");l(this,"customCommands");l(this,"cmpApiContext");if(this.cmpApiContext=t,e){let s=Se.ADD_EVENT_LISTENER;if(e!=null&&e[s])throw new Error(`Built-In Custom Commmand for ${s} not allowed`);if(s=Se.REMOVE_EVENT_LISTENER,e!=null&&e[s])throw new Error(`Built-In Custom Commmand for ${s} not allowed`);this.customCommands=e}try{this.callQueue=window.__gpp()||[]}catch{this.callQueue=[]}finally{window.__gpp=this.apiCall.bind(this),this.purgeQueuedCalls()}}apiCall(t,e,s,i){if(typeof t!="string")e(null,!1);else{if(e&&typeof e!="function")throw new Error("invalid callback function");this.isCustomCommand(t)?this.customCommands[t](e,s):this.isBuiltInCommand(t)?new Oe[t](this.cmpApiContext,e,s).execute():e&&e(null,!1)}}purgeQueuedCalls(){const t=this.callQueue;this.callQueue=[],t.forEach(e=>{window.__gpp(...e)})}isCustomCommand(t){return this.customCommands&&typeof this.customCommands[t]=="function"}isBuiltInCommand(t){return Oe[t]!==void 0}}class Ht{constructor(t){l(this,"eventQueue",new Map);l(this,"queueNumber",1e3);l(this,"cmpApiContext");this.cmpApiContext=t;try{let s=window.__gpp("events")||[];for(var e=0;e<s.length;e++){let i=s[e];this.eventQueue.set(i.id,{callback:i.callback,parameter:i.parameter})}}catch(s){console.log(s)}}add(t){return this.eventQueue.set(this.queueNumber,t),this.queueNumber++}get(t){return this.eventQueue.get(t)}remove(t){return this.eventQueue.delete(t)}exec(t,e){this.eventQueue.forEach((s,i)=>{let a=new ft(t,i,e,new mt(this.cmpApiContext));s.callback(a,!0)})}clear(){this.queueNumber=1e3,this.eventQueue.clear()}get size(){return this.eventQueue.size}}class et extends Error{constructor(t){super(t),this.name="InvalidFieldError"}}class K{constructor(){l(this,"segments");l(this,"encodedString",null);l(this,"dirty",!1);l(this,"decoded",!0);this.segments=this.initializeSegments()}hasField(t){this.decoded||(this.segments=this.decodeSection(this.encodedString),this.dirty=!1,this.decoded=!0);for(let e=0;e<this.segments.length;e++){let s=this.segments[e];if(s.getFieldNames().includes(t))return s.hasField(t)}return!1}getFieldValue(t){this.decoded||(this.segments=this.decodeSection(this.encodedString),this.dirty=!1,this.decoded=!0);for(let e=0;e<this.segments.length;e++){let s=this.segments[e];if(s.hasField(t))return s.getFieldValue(t)}throw new et("Invalid field: '"+t+"'")}setFieldValue(t,e){this.decoded||(this.segments=this.decodeSection(this.encodedString),this.dirty=!1,this.decoded=!0);for(let s=0;s<this.segments.length;s++){let i=this.segments[s];if(i.hasField(t)){i.setFieldValue(t,e);return}}throw new et("Invalid field: '"+t+"'")}toObj(){let t={};for(let e=0;e<this.segments.length;e++){let s=this.segments[e].toObj();for(const[i,a]of Object.entries(s))t[i]=a}return t}encode(){return(this.encodedString==null||this.encodedString.length===0||this.dirty)&&(this.encodedString=this.encodeSection(this.segments),this.dirty=!1,this.decoded=!0),this.encodedString}decode(t){this.encodedString=t,this.segments=this.decodeSection(this.encodedString),this.dirty=!1,this.decoded=!1}setIsDirty(t){this.dirty=t}}class m extends Error{constructor(t){super(t),this.name="DecodingError"}}class W extends Error{constructor(t){super(t),this.name="EncodingError"}}class R{static encode(t,e){let s=[];if(t>=1)for(s.push(1);t>=s[0]*2;)s.unshift(s[0]*2);let i="";for(let a=0;a<s.length;a++){let o=s[a];t>=o?(i+="1",t-=o):i+="0"}if(i.length>e)throw new W("Numeric value '"+t+"' is too large for a bit string length of '"+e+"'");for(;i.length<e;)i="0"+i;return i}static decode(t){if(!/^[0-1]*$/.test(t))throw new m("Undecodable FixedInteger '"+t+"'");let e=0,s=[];for(let i=0;i<t.length;i++)i===0?s[t.length-(i+1)]=1:s[t.length-(i+1)]=s[t.length-i]*2;for(let i=0;i<t.length;i++)t.charAt(i)==="1"&&(e+=s[i]);return e}}const We=class We{encode(t){if(!/^[0-1]*$/.test(t))throw new W("Unencodable Base64Url '"+t+"'");t=this.pad(t);let e="",s=0;for(;s<=t.length-6;){let i=t.substring(s,s+6);try{let a=R.decode(i),o=We.DICT.charAt(a);e+=o,s+=6}catch{throw new W("Unencodable Base64Url '"+t+"'")}}return e}decode(t){if(!/^[A-Za-z0-9\-_]*$/.test(t))throw new m("Undecodable Base64URL string '"+t+"'");let e="";for(let s=0;s<t.length;s++){let i=t.charAt(s),a=We.REVERSE_DICT.get(i),o=R.encode(a,6);e+=o}return e}};l(We,"DICT","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),l(We,"REVERSE_DICT",new Map([["A",0],["B",1],["C",2],["D",3],["E",4],["F",5],["G",6],["H",7],["I",8],["J",9],["K",10],["L",11],["M",12],["N",13],["O",14],["P",15],["Q",16],["R",17],["S",18],["T",19],["U",20],["V",21],["W",22],["X",23],["Y",24],["Z",25],["a",26],["b",27],["c",28],["d",29],["e",30],["f",31],["g",32],["h",33],["i",34],["j",35],["k",36],["l",37],["m",38],["n",39],["o",40],["p",41],["q",42],["r",43],["s",44],["t",45],["u",46],["v",47],["w",48],["x",49],["y",50],["z",51],["0",52],["1",53],["2",54],["3",55],["4",56],["5",57],["6",58],["7",59],["8",60],["9",61],["-",62],["_",63]]));let at=We;const rt=class rt extends at{constructor(){super()}static getInstance(){return this.instance}pad(t){for(;t.length%8>0;)t+="0";for(;t.length%6>0;)t+="0";return t}};l(rt,"instance",new rt);let A=rt;const ut=class ut{constructor(){}static getInstance(){return this.instance}encode(t,e){let s="";for(let i=0;i<e.length;i++){let a=e[i];if(t.containsKey(a)){let o=t.get(a);s+=o.encode()}else throw new Error("Field not found: '"+a+"'")}return s}decode(t,e,s){let i=0;for(let a=0;a<e.length;a++){let o=e[a];if(s.containsKey(o)){let d=s.get(o);try{let r=d.substring(t,i);d.decode(r),i+=r.length}catch(r){if(r.name==="SubstringError"&&!d.getHardFailIfMissing())return;throw new m("Unable to decode field '"+o+"'")}}else throw new Error("Field not found: '"+o+"'")}}};l(ut,"instance",new ut);let f=ut;class Ye{static encode(t){let e=[];if(t>=1&&(e.push(1),t>=2)){e.push(2);let i=2;for(;t>=e[i-1]+e[i-2];)e.push(e[i-1]+e[i-2]),i++}let s="1";for(let i=e.length-1;i>=0;i--){let a=e[i];t>=a?(s="1"+s,t-=a):s="0"+s}return s}static decode(t){if(!/^[0-1]*$/.test(t)||t.length<2||t.indexOf("11")!==t.length-2)throw new m("Undecodable FibonacciInteger '"+t+"'");let e=0,s=[];for(let i=0;i<t.length-1;i++)i===0?s.push(1):i===1?s.push(2):s.push(s[i-1]+s[i-2]);for(let i=0;i<t.length-1;i++)t.charAt(i)==="1"&&(e+=s[i]);return e}}class Qe{static encode(t){if(t===!0)return"1";if(t===!1)return"0";throw new W("Unencodable Boolean '"+t+"'")}static decode(t){if(t==="1")return!0;if(t==="0")return!1;throw new m("Undecodable Boolean '"+t+"'")}}class Ot{static encode(t){t=t.sort((o,d)=>o-d);let e=[],s=0,i=0;for(;i<t.length;){let o=i;for(;o<t.length-1&&t[o]+1===t[o+1];)o++;e.push(t.slice(i,o+1)),i=o+1}let a=R.encode(e.length,12);for(let o=0;o<e.length;o++)if(e[o].length==1){let d=e[o][0]-s;s=e[o][0],a+="0"+Ye.encode(d)}else{let d=e[o][0]-s;s=e[o][0];let r=e[o][e[o].length-1]-s;s=e[o][e[o].length-1],a+="1"+Ye.encode(d)+Ye.encode(r)}return a}static decode(t){if(!/^[0-1]*$/.test(t)||t.length<12)throw new m("Undecodable FibonacciIntegerRange '"+t+"'");let e=[],s=R.decode(t.substring(0,12)),i=0,a=12;for(let o=0;o<s;o++){let d=Qe.decode(t.substring(a,a+1));if(a++,d===!0){let r=t.indexOf("11",a),E=Ye.decode(t.substring(a,r+2))+i;i=E,a=r+2,r=t.indexOf("11",a);let p=Ye.decode(t.substring(a,r+2))+i;i=p,a=r+2;for(let v=E;v<=p;v++)e.push(v)}else{let r=t.indexOf("11",a),E=Ye.decode(t.substring(a,r+2))+i;i=E,e.push(E),a=r+2}}return e}}class Kt extends Error{constructor(t){super(t),this.name="ValidationError"}}class Ee{constructor(t=!0){l(this,"hardFailIfMissing");l(this,"validator");l(this,"value");this.hardFailIfMissing=t}withValidator(t){return this.validator=t,this}hasValue(){return this.value!==void 0&&this.value!==null}getValue(){return this.value}setValue(t){if(!this.validator||this.validator.test(t))this.value=t;else throw new Kt("Invalid value '"+t+"'")}getHardFailIfMissing(){return this.hardFailIfMissing}}class he extends m{constructor(t){super(t),this.name="SubstringError"}}class Y{static substring(t,e,s){if(s>t.length||e<0||e>s)throw new he("Invalid substring indexes "+e+":"+s+" for string of length "+t.length);return t.substring(e,s)}}class zt extends Ee{constructor(t,e=!0){super(e),this.setValue(t)}encode(){try{return Ot.encode(this.value)}catch(t){throw new W(t)}}decode(t){try{this.value=Ot.decode(t)}catch(e){throw new m(e)}}substring(t,e){try{let s=R.decode(Y.substring(t,e,e+12)),i=e+12;for(let a=0;a<s;a++)t.charAt(i)==="1"?i=t.indexOf("11",t.indexOf("11",i+1)+2)+2:i=t.indexOf("11",i+1)+2;return Y.substring(t,e,i)}catch(s){throw new he(s)}}getValue(){return[...super.getValue()]}setValue(t){super.setValue(Array.from(new Set(t)).sort((e,s)=>e-s))}}class c extends Ee{constructor(e,s,i=!0){super(i);l(this,"bitStringLength");this.bitStringLength=e,this.setValue(s)}encode(){try{return R.encode(this.value,this.bitStringLength)}catch(e){throw new W(e)}}decode(e){try{this.value=R.decode(e)}catch(s){throw new m(s)}}substring(e,s){try{return Y.substring(e,s,s+this.bitStringLength)}catch(i){throw new he(i)}}}class O{constructor(){l(this,"fields",new Map)}containsKey(t){return this.fields.has(t)}put(t,e){this.fields.set(t,e)}get(t){return this.fields.get(t)}getAll(){return new Map(this.fields)}reset(t){this.fields.clear(),t.getAll().forEach((e,s)=>{this.fields.set(s,e)})}}var Ie;(function(n){n.ID="Id",n.VERSION="Version",n.SECTION_IDS="SectionIds"})(Ie||(Ie={}));const Yt=[Ie.ID,Ie.VERSION,Ie.SECTION_IDS];class I{constructor(){l(this,"fields");l(this,"encodedString",null);l(this,"dirty",!1);l(this,"decoded",!0);this.fields=this.initializeFields()}validate(){}hasField(t){return this.fields.containsKey(t)}getFieldValue(t){if(this.decoded||(this.decodeSegment(this.encodedString,this.fields),this.dirty=!1,this.decoded=!0),this.fields.containsKey(t))return this.fields.get(t).getValue();throw new et("Invalid field: '"+t+"'")}setFieldValue(t,e){if(this.decoded||(this.decodeSegment(this.encodedString,this.fields),this.dirty=!1,this.decoded=!0),this.fields.containsKey(t))this.fields.get(t).setValue(e),this.dirty=!0;else throw new et(t+" not found")}toObj(){let t={},e=this.getFieldNames();for(let s=0;s<e.length;s++){let i=e[s],a=this.getFieldValue(i);t[i]=a}return t}encode(){return(this.encodedString==null||this.encodedString.length===0||this.dirty)&&(this.validate(),this.encodedString=this.encodeSegment(this.fields),this.dirty=!1,this.decoded=!0),this.encodedString}decode(t){this.encodedString=t,this.dirty=!1,this.decoded=!1}}class Wt extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Yt}initializeFields(){let e=new O;return e.put(Ie.ID.toString(),new c(6,fe.ID)),e.put(Ie.VERSION.toString(),new c(6,fe.VERSION)),e.put(Ie.SECTION_IDS.toString(),new zt([])),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode HeaderV1CoreSegment '"+e+"'")}}}const Ae=class Ae extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Ae.ID}getName(){return Ae.NAME}getVersion(){return Ae.VERSION}initializeSegments(){let t=[];return t.push(new Wt),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");for(let i=0;i<e.length;i++)s.length>i&&e[i].decode(s[i])}return e}encodeSection(t){let e=[];for(let s=0;s<t.length;s++){let i=t[s];e.push(i.encode())}return e.join(".")}};l(Ae,"ID",3),l(Ae,"VERSION",1),l(Ae,"NAME","header");let fe=Ae;var g;(function(n){n.VERSION="Version",n.CREATED="Created",n.LAST_UPDATED="LastUpdated",n.CMP_ID="CmpId",n.CMP_VERSION="CmpVersion",n.CONSENT_SCREEN="ConsentScreen",n.CONSENT_LANGUAGE="ConsentLanguage",n.VENDOR_LIST_VERSION="VendorListVersion",n.POLICY_VERSION="PolicyVersion",n.IS_SERVICE_SPECIFIC="IsServiceSpecific",n.USE_NON_STANDARD_STACKS="UseNonStandardStacks",n.SPECIAL_FEATURE_OPTINS="SpecialFeatureOptins",n.PURPOSE_CONSENTS="PurposeConsents",n.PURPOSE_LEGITIMATE_INTERESTS="PurposeLegitimateInterests",n.PURPOSE_ONE_TREATMENT="PurposeOneTreatment",n.PUBLISHER_COUNTRY_CODE="PublisherCountryCode",n.VENDOR_CONSENTS="VendorConsents",n.VENDOR_LEGITIMATE_INTERESTS="VendorLegitimateInterests",n.PUBLISHER_RESTRICTIONS="PublisherRestrictions",n.PUBLISHER_PURPOSES_SEGMENT_TYPE="PublisherPurposesSegmentType",n.PUBLISHER_CONSENTS="PublisherConsents",n.PUBLISHER_LEGITIMATE_INTERESTS="PublisherLegitimateInterests",n.NUM_CUSTOM_PURPOSES="NumCustomPurposes",n.PUBLISHER_CUSTOM_CONSENTS="PublisherCustomConsents",n.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS="PublisherCustomLegitimateInterests",n.VENDORS_ALLOWED_SEGMENT_TYPE="VendorsAllowedSegmentType",n.VENDORS_ALLOWED="VendorsAllowed",n.VENDORS_DISCLOSED_SEGMENT_TYPE="VendorsDisclosedSegmentType",n.VENDORS_DISCLOSED="VendorsDisclosed"})(g||(g={}));const $t=[g.VERSION,g.CREATED,g.LAST_UPDATED,g.CMP_ID,g.CMP_VERSION,g.CONSENT_SCREEN,g.CONSENT_LANGUAGE,g.VENDOR_LIST_VERSION,g.POLICY_VERSION,g.IS_SERVICE_SPECIFIC,g.USE_NON_STANDARD_STACKS,g.SPECIAL_FEATURE_OPTINS,g.PURPOSE_CONSENTS,g.PURPOSE_LEGITIMATE_INTERESTS,g.PURPOSE_ONE_TREATMENT,g.PUBLISHER_COUNTRY_CODE,g.VENDOR_CONSENTS,g.VENDOR_LEGITIMATE_INTERESTS,g.PUBLISHER_RESTRICTIONS],Jt=[g.PUBLISHER_PURPOSES_SEGMENT_TYPE,g.PUBLISHER_CONSENTS,g.PUBLISHER_LEGITIMATE_INTERESTS,g.NUM_CUSTOM_PURPOSES,g.PUBLISHER_CUSTOM_CONSENTS,g.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS],Qt=[g.VENDORS_ALLOWED_SEGMENT_TYPE,g.VENDORS_ALLOWED],Zt=[g.VENDORS_DISCLOSED_SEGMENT_TYPE,g.VENDORS_DISCLOSED],pt=class pt extends at{constructor(){super()}static getInstance(){return this.instance}pad(t){for(;t.length%24>0;)t+="0";return t}};l(pt,"instance",new pt);let Ke=pt;class Ze{static encode(t){t.sort((a,o)=>a-o);let e=[],s=0;for(;s<t.length;){let a=s;for(;a<t.length-1&&t[a]+1===t[a+1];)a++;e.push(t.slice(s,a+1)),s=a+1}let i=R.encode(e.length,12);for(let a=0;a<e.length;a++)e[a].length===1?i+="0"+R.encode(e[a][0],16):i+="1"+R.encode(e[a][0],16)+R.encode(e[a][e[a].length-1],16);return i}static decode(t){if(!/^[0-1]*$/.test(t)||t.length<12)throw new m("Undecodable FixedIntegerRange '"+t+"'");let e=[],s=R.decode(t.substring(0,12)),i=12;for(let a=0;a<s;a++){let o=Qe.decode(t.substring(i,i+1));if(i++,o===!0){let d=R.decode(t.substring(i,i+16));i+=16;let r=R.decode(t.substring(i,i+16));i+=16;for(let E=d;E<=r;E++)e.push(E)}else{let d=R.decode(t.substring(i,i+16));e.push(d),i+=16}}return e}}class Et extends Ee{constructor(t,e=!0){super(e),this.setValue(t)}encode(){try{return Ze.encode(this.value)}catch(t){throw new W(t)}}decode(t){try{this.value=Ze.decode(t)}catch(e){throw new m(e)}}substring(t,e){try{let s=R.decode(Y.substring(t,e,e+12)),i=e+12;for(let a=0;a<s;a++)t.charAt(i)==="1"?i+=33:i+=17;return Y.substring(t,e,i)}catch(s){throw new he(s)}}getValue(){return[...super.getValue()]}setValue(t){super.setValue(Array.from(new Set(t)).sort((e,s)=>e-s))}}class Xt{constructor(t,e,s){l(this,"key");l(this,"type");l(this,"ids");this.key=t,this.type=e,this.ids=s}getKey(){return this.key}setKey(t){this.key=t}getType(){return this.type}setType(t){this.type=t}getIds(){return this.ids}setIds(t){this.ids=t}}class Mt extends Ee{constructor(e,s,i,a=!0){super(a);l(this,"keyBitStringLength");l(this,"typeBitStringLength");this.keyBitStringLength=e,this.typeBitStringLength=s,this.setValue(i)}encode(){try{let e=this.value,s="";s+=R.encode(e.length,12);for(let i=0;i<e.length;i++){let a=e[i];s+=R.encode(a.getKey(),this.keyBitStringLength),s+=R.encode(a.getType(),this.typeBitStringLength),s+=Ze.encode(a.getIds())}return s}catch(e){throw new W(e)}}decode(e){try{let s=[],i=R.decode(Y.substring(e,0,12)),a=12;for(let o=0;o<i;o++){let d=R.decode(Y.substring(e,a,a+this.keyBitStringLength));a+=this.keyBitStringLength;let r=R.decode(Y.substring(e,a,a+this.typeBitStringLength));a+=this.typeBitStringLength;let E=new Et([]).substring(e,a),p=Ze.decode(E);a+=E.length,s.push(new Xt(d,r,p))}this.value=s}catch(s){throw new m(s)}}substring(e,s){try{let i="";i+=Y.substring(e,s,s+12);let a=R.decode(i.toString()),o=s+i.length;for(let d=0;d<a;d++){let r=Y.substring(e,o,o+this.keyBitStringLength);o+=r.length,i+=r;let E=Y.substring(e,o,o+this.typeBitStringLength);o+=E.length,i+=E;let p=new Et([]).substring(e,o);o+=p.length,i+=p}return i}catch(i){throw new he(i)}}}class B extends Ee{constructor(t,e=!0){super(e),this.setValue(t)}encode(){try{return Qe.encode(this.value)}catch(t){throw new W(t)}}decode(t){try{this.value=Qe.decode(t)}catch(e){throw new m(e)}}substring(t,e){try{return Y.substring(t,e,e+1)}catch(s){throw new he(s)}}}class At{static encode(t){return t?R.encode(Math.round(t.getTime()/100),36):R.encode(0,36)}static decode(t){if(!/^[0-1]*$/.test(t)||t.length!==36)throw new m("Undecodable Datetime '"+t+"'");return new Date(R.decode(t)*100)}}class ot extends Ee{constructor(t,e=!0){super(e),this.setValue(t)}encode(){try{return At.encode(this.value)}catch(t){throw new W(t)}}decode(t){try{this.value=At.decode(t)}catch(e){throw new m(e)}}substring(t,e){try{return Y.substring(t,e,e+36)}catch(s){throw new he(s)}}}class Xe{static encode(t,e){if(t.length>e)throw new W("Too many values '"+t.length+"'");let s="";for(let i=0;i<t.length;i++)s+=Qe.encode(t[i]);for(;s.length<e;)s+="0";return s}static decode(t){if(!/^[0-1]*$/.test(t))throw new m("Undecodable FixedBitfield '"+t+"'");let e=[];for(let s=0;s<t.length;s++)e.push(Qe.decode(t.substring(s,s+1)));return e}}class be extends Ee{constructor(e,s=!0){super(s);l(this,"numElements");this.numElements=e.length,this.setValue(e)}encode(){try{return Xe.encode(this.value,this.numElements)}catch(e){throw new W(e)}}decode(e){try{this.value=Xe.decode(e)}catch(s){throw new m(s)}}substring(e,s){try{return Y.substring(e,s,s+this.numElements)}catch(i){throw new he(i)}}getValue(){return[...super.getValue()]}setValue(e){let s=[...e];for(let i=s.length;i<this.numElements;i++)s.push(!1);s.length>this.numElements&&(s=s.slice(0,this.numElements)),super.setValue(s)}}class Nt{static encode(t,e){for(;t.length<e;)t+=" ";let s="";for(let i=0;i<t.length;i++){let a=t.charCodeAt(i);if(a===32)s+=R.encode(63,6);else if(a>=65)s+=R.encode(t.charCodeAt(i)-65,6);else throw new W("Unencodable FixedString '"+t+"'")}return s}static decode(t){if(!/^[0-1]*$/.test(t)||t.length%6!==0)throw new m("Undecodable FixedString '"+t+"'");let e="";for(let s=0;s<t.length;s+=6){let i=R.decode(t.substring(s,s+6));i===63?e+=" ":e+=String.fromCharCode(i+65)}return e.trim()}}class St extends Ee{constructor(e,s,i=!0){super(i);l(this,"stringLength");this.stringLength=e,this.setValue(s)}encode(){try{return Nt.encode(this.value,this.stringLength)}catch(e){throw new W(e)}}decode(e){try{this.value=Nt.decode(e)}catch(s){throw new m(s)}}substring(e,s){try{return Y.substring(e,s,s+this.stringLength*6)}catch(i){throw new he(i)}}}class ze extends Ee{constructor(t,e=!0){super(e),this.setValue(t)}encode(){try{let t=this.value.length>0?this.value[this.value.length-1]:0,e=Ze.encode(this.value),s=e.length,i=t;if(s<=i)return R.encode(t,16)+"1"+e;{let a=[],o=0;for(let d=0;d<t;d++)d===this.value[o]-1?(a[d]=!0,o++):a[d]=!1;return R.encode(t,16)+"0"+Xe.encode(a,i)}}catch(t){throw new W(t)}}decode(t){try{if(t.charAt(16)==="1")this.value=Ze.decode(t.substring(17));else{let e=[],s=Xe.decode(t.substring(17));for(let i=0;i<s.length;i++)s[i]===!0&&e.push(i+1);this.value=e}}catch(e){throw new m(e)}}substring(t,e){try{let s=R.decode(Y.substring(t,e,e+16));return t.charAt(e+16)==="1"?Y.substring(t,e,e+17)+new Et([]).substring(t,e+17):Y.substring(t,e,e+17+s)}catch(s){throw new he(s)}}getValue(){return[...super.getValue()]}setValue(t){super.setValue(Array.from(new Set(t)).sort((e,s)=>e-s))}}class qt extends I{constructor(e){super();l(this,"base64UrlEncoder",Ke.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return $t}initializeFields(){let e=new Date,s=new O;return s.put(g.VERSION.toString(),new c(6,Q.VERSION)),s.put(g.CREATED.toString(),new ot(e)),s.put(g.LAST_UPDATED.toString(),new ot(e)),s.put(g.CMP_ID.toString(),new c(12,0)),s.put(g.CMP_VERSION.toString(),new c(12,0)),s.put(g.CONSENT_SCREEN.toString(),new c(6,0)),s.put(g.CONSENT_LANGUAGE.toString(),new St(2,"EN")),s.put(g.VENDOR_LIST_VERSION.toString(),new c(12,0)),s.put(g.POLICY_VERSION.toString(),new c(6,5)),s.put(g.IS_SERVICE_SPECIFIC.toString(),new B(!0)),s.put(g.USE_NON_STANDARD_STACKS.toString(),new B(!1)),s.put(g.SPECIAL_FEATURE_OPTINS.toString(),new be([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),s.put(g.PURPOSE_CONSENTS.toString(),new be([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),s.put(g.PURPOSE_LEGITIMATE_INTERESTS.toString(),new be([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),s.put(g.PURPOSE_ONE_TREATMENT.toString(),new B(!1)),s.put(g.PUBLISHER_COUNTRY_CODE.toString(),new St(2,"AA")),s.put(g.VENDOR_CONSENTS.toString(),new ze([])),s.put(g.VENDOR_LEGITIMATE_INTERESTS.toString(),new ze([])),s.put(g.PUBLISHER_RESTRICTIONS.toString(),new Mt(6,2,[],!1)),s}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode TcfEuV2CoreSegment '"+e+"'")}}}class lt extends Ee{constructor(e,s,i=!0){super(i);l(this,"getLength");this.getLength=e,this.setValue(s)}encode(){try{return Xe.encode(this.value,this.getLength())}catch(e){throw new W(e)}}decode(e){try{this.value=Xe.decode(e)}catch(s){throw new m(s)}}substring(e,s){try{return Y.substring(e,s,s+this.getLength())}catch(i){throw new he(i)}}getValue(){return[...super.getValue()]}setValue(e){let s=this.getLength(),i=[...e];for(let a=i.length;a<s;a++)i.push(!1);i.length>s&&(i=i.slice(0,s)),super.setValue([...i])}}class en extends I{constructor(e){super();l(this,"base64UrlEncoder",Ke.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Jt}initializeFields(){let e=new O;e.put(g.PUBLISHER_PURPOSES_SEGMENT_TYPE.toString(),new c(3,3)),e.put(g.PUBLISHER_CONSENTS.toString(),new be([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),e.put(g.PUBLISHER_LEGITIMATE_INTERESTS.toString(),new be([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]));let s=new c(6,0);return e.put(g.NUM_CUSTOM_PURPOSES.toString(),s),e.put(g.PUBLISHER_CUSTOM_CONSENTS.toString(),new lt(()=>s.getValue(),[])),e.put(g.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS.toString(),new lt(()=>s.getValue(),[])),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode TcfEuV2PublisherPurposesSegment '"+e+"'")}}}class tn extends I{constructor(e){super();l(this,"base64UrlEncoder",Ke.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Qt}initializeFields(){let e=new O;return e.put(g.VENDORS_ALLOWED_SEGMENT_TYPE.toString(),new c(3,2)),e.put(g.VENDORS_ALLOWED.toString(),new ze([])),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode TcfEuV2VendorsAllowedSegment '"+e+"'")}}}class nn extends I{constructor(e){super();l(this,"base64UrlEncoder",Ke.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Zt}initializeFields(){let e=new O;return e.put(g.VENDORS_DISCLOSED_SEGMENT_TYPE.toString(),new c(3,1)),e.put(g.VENDORS_DISCLOSED.toString(),new ze([])),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode TcfEuV2VendorsDisclosedSegment '"+e+"'")}}}const Ne=class Ne extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Ne.ID}getName(){return Ne.NAME}getVersion(){return Ne.VERSION}initializeSegments(){let t=[];return t.push(new qt),t.push(new en),t.push(new tn),t.push(new nn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");for(let i=0;i<s.length;i++){let a=s[i];if(a.length!==0){let o=a.charAt(0);if(o>="A"&&o<="H")e[0].decode(s[i]);else if(o>="I"&&o<="P")e[3].decode(s[i]);else if(o>="Q"&&o<="X")e[2].decode(s[i]);else if(o>="Y"&&o<="Z"||o>="a"&&o<="f")e[1].decode(s[i]);else throw new m("Unable to decode TcfEuV2 segment '"+a+"'")}}}return e}encodeSection(t){let e=[];if(t.length>=1){e.push(t[0].encode());let s=this.getFieldValue(g.IS_SERVICE_SPECIFIC);if(s)t.length>=2&&e.push(t[3].encode()),t.length>=3&&e.push(t[1].encode());else throw new W("Unable to encode TcfEuV2 segment with isServiceSpecific = '"+s+"'")}return e.join(".")}setFieldValue(t,e){t===g.PURPOSE_LEGITIMATE_INTERESTS&&(e[0]=!1,e[2]=e[3]=e[4]=e[5]=!1),t===g.CREATED||t===g.LAST_UPDATED?t===g.CREATED?super.setFieldValue(g.LAST_UPDATED,e):super.setFieldValue(g.CREATED,e):this.updateDateStamp(),super.setFieldValue(t,e)}updateDateStamp(){const t=new Date,e=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()));super.setFieldValue(g.CREATED,e),super.setFieldValue(g.LAST_UPDATED,e)}};l(Ne,"ID",2),l(Ne,"VERSION",2),l(Ne,"NAME","tcfeuv2");let Q=Ne;var h;(function(n){n.VERSION="Version",n.CREATED="Created",n.LAST_UPDATED="LastUpdated",n.CMP_ID="CmpId",n.CMP_VERSION="CmpVersion",n.CONSENT_SCREEN="ConsentScreen",n.CONSENT_LANGUAGE="ConsentLanguage",n.VENDOR_LIST_VERSION="VendorListVersion",n.TCF_POLICY_VERSION="TcfPolicyVersion",n.USE_NON_STANDARD_STACKS="UseNonStandardStacks",n.SPECIAL_FEATURE_EXPRESS_CONSENT="SpecialFeatureExpressConsent",n.PUB_PURPOSES_SEGMENT_TYPE="PubPurposesSegmentType",n.PURPOSES_EXPRESS_CONSENT="PurposesExpressConsent",n.PURPOSES_IMPLIED_CONSENT="PurposesImpliedConsent",n.VENDOR_EXPRESS_CONSENT="VendorExpressConsent",n.VENDOR_IMPLIED_CONSENT="VendorImpliedConsent",n.PUB_RESTRICTIONS="PubRestrictions",n.PUB_PURPOSES_EXPRESS_CONSENT="PubPurposesExpressConsent",n.PUB_PURPOSES_IMPLIED_CONSENT="PubPurposesImpliedConsent",n.NUM_CUSTOM_PURPOSES="NumCustomPurposes",n.CUSTOM_PURPOSES_EXPRESS_CONSENT="CustomPurposesExpressConsent",n.CUSTOM_PURPOSES_IMPLIED_CONSENT="CustomPurposesImpliedConsent",n.DISCLOSED_VENDORS_SEGMENT_TYPE="DisclosedVendorsSegmentType",n.DISCLOSED_VENDORS="DisclosedVendors"})(h||(h={}));const sn=[h.VERSION,h.CREATED,h.LAST_UPDATED,h.CMP_ID,h.CMP_VERSION,h.CONSENT_SCREEN,h.CONSENT_LANGUAGE,h.VENDOR_LIST_VERSION,h.TCF_POLICY_VERSION,h.USE_NON_STANDARD_STACKS,h.SPECIAL_FEATURE_EXPRESS_CONSENT,h.PURPOSES_EXPRESS_CONSENT,h.PURPOSES_IMPLIED_CONSENT,h.VENDOR_EXPRESS_CONSENT,h.VENDOR_IMPLIED_CONSENT,h.PUB_RESTRICTIONS],an=[h.PUB_PURPOSES_SEGMENT_TYPE,h.PUB_PURPOSES_EXPRESS_CONSENT,h.PUB_PURPOSES_IMPLIED_CONSENT,h.NUM_CUSTOM_PURPOSES,h.CUSTOM_PURPOSES_EXPRESS_CONSENT,h.CUSTOM_PURPOSES_IMPLIED_CONSENT],on=[h.DISCLOSED_VENDORS_SEGMENT_TYPE,h.DISCLOSED_VENDORS];class ln extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return sn}initializeFields(){let e=new Date,s=new O;return s.put(h.VERSION.toString(),new c(6,Z.VERSION)),s.put(h.CREATED.toString(),new ot(e)),s.put(h.LAST_UPDATED.toString(),new ot(e)),s.put(h.CMP_ID.toString(),new c(12,0)),s.put(h.CMP_VERSION.toString(),new c(12,0)),s.put(h.CONSENT_SCREEN.toString(),new c(6,0)),s.put(h.CONSENT_LANGUAGE.toString(),new St(2,"EN")),s.put(h.VENDOR_LIST_VERSION.toString(),new c(12,0)),s.put(h.TCF_POLICY_VERSION.toString(),new c(6,2)),s.put(h.USE_NON_STANDARD_STACKS.toString(),new B(!1)),s.put(h.SPECIAL_FEATURE_EXPRESS_CONSENT.toString(),new be([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),s.put(h.PURPOSES_EXPRESS_CONSENT.toString(),new be([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),s.put(h.PURPOSES_IMPLIED_CONSENT.toString(),new be([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),s.put(h.VENDOR_EXPRESS_CONSENT.toString(),new ze([])),s.put(h.VENDOR_IMPLIED_CONSENT.toString(),new ze([])),s.put(h.PUB_RESTRICTIONS.toString(),new Mt(6,2,[],!1)),s}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode TcfCaV1CoreSegment '"+e+"'")}}}class cn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return an}initializeFields(){let e=new O;e.put(h.PUB_PURPOSES_SEGMENT_TYPE.toString(),new c(3,3)),e.put(h.PUB_PURPOSES_EXPRESS_CONSENT.toString(),new be([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),e.put(h.PUB_PURPOSES_IMPLIED_CONSENT.toString(),new be([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]));let s=new c(6,0);return e.put(h.NUM_CUSTOM_PURPOSES.toString(),s),e.put(h.CUSTOM_PURPOSES_EXPRESS_CONSENT.toString(),new lt(()=>s.getValue(),[])),e.put(h.CUSTOM_PURPOSES_IMPLIED_CONSENT.toString(),new lt(()=>s.getValue(),[])),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode TcfCaV1PublisherPurposesSegment '"+e+"'")}}}class dn extends I{constructor(e){super();l(this,"base64UrlEncoder",Ke.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return on}initializeFields(){let e=new O;return e.put(h.DISCLOSED_VENDORS_SEGMENT_TYPE.toString(),new c(3,1)),e.put(h.DISCLOSED_VENDORS.toString(),new ze([])),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode HeaderV1CoreSegment '"+e+"'")}}}const Te=class Te extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Te.ID}getName(){return Te.NAME}getVersion(){return Te.VERSION}initializeSegments(){let t=[];return t.push(new ln),t.push(new cn),t.push(new dn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");for(let i=0;i<s.length;i++){let a=s[i];if(a.length!==0){let o=a.charAt(0);if(o>="A"&&o<="H")e[0].decode(s[i]);else if(o>="I"&&o<="P")e[2].decode(s[i]);else if(o>="Y"&&o<="Z"||o>="a"&&o<="f")e[1].decode(s[i]);else throw new m("Unable to decode TcfCaV1 segment '"+a+"'")}}}return e}encodeSection(t){let e=[];return e.push(t[0].encode()),e.push(t[1].encode()),this.getFieldValue(h.DISCLOSED_VENDORS).length>0&&e.push(t[2].encode()),e.join(".")}setFieldValue(t,e){if(super.setFieldValue(t,e),t!==h.CREATED&&t!==h.LAST_UPDATED){let s=new Date;super.setFieldValue(h.CREATED,s),super.setFieldValue(h.LAST_UPDATED,s)}}};l(Te,"ID",5),l(Te,"VERSION",1),l(Te,"NAME","tcfcav1");let Z=Te;class gt{constructor(t,e){l(this,"validator");l(this,"value",null);e?this.validator=e:this.validator=new class{test(s){return!0}},this.setValue(t)}hasValue(){return this.value!=null}getValue(){return this.value}setValue(t){t?this.value=t.charAt(0):t=null}}class rn{constructor(t,e){l(this,"validator");l(this,"value",null);e?this.validator=e:this.validator=new class{test(s){return!0}},this.setValue(t)}hasValue(){return this.value!=null}getValue(){return this.value}setValue(t){this.value=t}}class un{constructor(){l(this,"fields",new Map)}containsKey(t){return this.fields.has(t)}put(t,e){this.fields.set(t,e)}get(t){return this.fields.get(t)}getAll(){return new Map(this.fields)}reset(t){this.fields.clear(),t.getAll().forEach((e,s)=>{this.fields.set(s,e)})}}var J;(function(n){n.VERSION="Version",n.NOTICE="Notice",n.OPT_OUT_SALE="OptOutSale",n.LSPA_COVERED="LspaCovered"})(J||(J={}));const pn=[J.VERSION,J.NOTICE,J.OPT_OUT_SALE,J.LSPA_COVERED];class mn extends I{constructor(t){super(),t&&this.decode(t)}getFieldNames(){return pn}initializeFields(){const t=new class{test(s){return s==="-"||s==="Y"||s==="N"}};let e=new un;return e.put(J.VERSION,new rn(X.VERSION)),e.put(J.NOTICE,new gt("-",t)),e.put(J.OPT_OUT_SALE,new gt("-",t)),e.put(J.LSPA_COVERED,new gt("-",t)),e}encodeSegment(t){let e="";return e+=t.get(J.VERSION).getValue(),e+=t.get(J.NOTICE).getValue(),e+=t.get(J.OPT_OUT_SALE).getValue(),e+=t.get(J.LSPA_COVERED).getValue(),e}decodeSegment(t,e){if(t==null||t.length!=4)throw new m("Unable to decode UspV1CoreSegment '"+t+"'");try{e.get(J.VERSION).setValue(parseInt(t.substring(0,1))),e.get(J.NOTICE).setValue(t.charAt(1)),e.get(J.OPT_OUT_SALE).setValue(t.charAt(2)),e.get(J.LSPA_COVERED).setValue(t.charAt(3))}catch{throw new m("Unable to decode UspV1CoreSegment '"+t+"'")}}}const _e=class _e extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return _e.ID}getName(){return _e.NAME}getVersion(){return _e.VERSION}initializeSegments(){let t=[];return t.push(new mn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");for(let i=0;i<e.length;i++)s.length>i&&e[i].decode(s[i])}return e}encodeSection(t){let e=[];for(let s=0;s<t.length;s++){let i=t[s];e.push(i.encode())}return e.join(".")}};l(_e,"ID",6),l(_e,"VERSION",1),l(_e,"NAME","uspv1");let X=_e;var b;(function(n){n.VERSION="Version",n.SHARING_NOTICE="SharingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.SHARING_OPT_OUT_NOTICE="SharingOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE="SensitiveDataProcessingOptOutNotice",n.SENSITIVE_DATA_LIMIT_USE_NOTICE="SensitiveDataLimitUseNotice",n.SALE_OPT_OUT="SaleOptOut",n.SHARING_OPT_OUT="SharingOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.PERSONAL_DATA_CONSENTS="PersonalDataConsents",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(b||(b={}));const vn=[b.VERSION,b.SHARING_NOTICE,b.SALE_OPT_OUT_NOTICE,b.SHARING_OPT_OUT_NOTICE,b.TARGETED_ADVERTISING_OPT_OUT_NOTICE,b.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE,b.SENSITIVE_DATA_LIMIT_USE_NOTICE,b.SALE_OPT_OUT,b.SHARING_OPT_OUT,b.TARGETED_ADVERTISING_OPT_OUT,b.SENSITIVE_DATA_PROCESSING,b.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,b.PERSONAL_DATA_CONSENTS,b.MSPA_COVERED_TRANSACTION,b.MSPA_OPT_OUT_OPTION_MODE,b.MSPA_SERVICE_PROVIDER_MODE],gn=[b.GPC_SEGMENT_TYPE,b.GPC];class Tt{static encode(t,e,s){if(t.length>s)throw new W("Too many values '"+t.length+"'");let i="";for(let a=0;a<t.length;a++)i+=R.encode(t[a],e);for(;i.length<e*s;)i+="0";return i}static decode(t,e,s){if(!/^[0-1]*$/.test(t))throw new m("Undecodable FixedInteger '"+t+"'");if(t.length>e*s)throw new m("Undecodable FixedIntegerList '"+t+"'");if(t.length%e!=0)throw new m("Undecodable FixedIntegerList '"+t+"'");for(;t.length<e*s;)t+="0";t.length>e*s&&(t=t.substring(0,e*s));let i=[];for(let a=0;a<t.length;a+=e)i.push(R.decode(t.substring(a,a+e)));for(;i.length<s;)i.push(0);return i}}class U extends Ee{constructor(e,s,i=!0){super(i);l(this,"elementBitStringLength");l(this,"numElements");this.elementBitStringLength=e,this.numElements=s.length,this.setValue(s)}encode(){try{return Tt.encode(this.value,this.elementBitStringLength,this.numElements)}catch(e){throw new W(e)}}decode(e){try{this.value=Tt.decode(e,this.elementBitStringLength,this.numElements)}catch(s){throw new m(s)}}substring(e,s){try{return Y.substring(e,s,s+this.elementBitStringLength*this.numElements)}catch(i){throw new he(i)}}getValue(){return[...super.getValue()]}setValue(e){let s=[...e];for(let i=s.length;i<this.numElements;i++)s.push(0);s.length>this.numElements&&(s=s.slice(0,this.numElements)),super.setValue(s)}}class hn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return vn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(b.VERSION.toString(),new c(6,q.VERSION)),a.put(b.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(b.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(b.SHARING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(b.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(b.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(b.SENSITIVE_DATA_LIMIT_USE_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(b.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(b.SHARING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(b.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(b.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]).withValidator(i)),a.put(b.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(b.PERSONAL_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(b.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(b.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(b.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);i.length==66&&(i=i.substring(0,48)+"00000000"+i.substring(48,52)+"00"+i.substring(52,62)),this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsNatCoreSegment '"+e+"'")}}}class En extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return gn}initializeFields(){let e=new O;return e.put(b.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(b.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(b.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsNatGpcSegment '"+e+"'")}}}const ye=class ye extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return ye.ID}getName(){return ye.NAME}getVersion(){return ye.VERSION}initializeSegments(){let t=[];return t.push(new hn),t.push(new En),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(b.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(b.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(b.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(ye,"ID",7),l(ye,"VERSION",1),l(ye,"NAME","usnat");let q=ye;var N;(function(n){n.VERSION="Version",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.SHARING_OPT_OUT_NOTICE="SharingOptOutNotice",n.SENSITIVE_DATA_LIMIT_USE_NOTICE="SensitiveDataLimitUseNotice",n.SALE_OPT_OUT="SaleOptOut",n.SHARING_OPT_OUT="SharingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.PERSONAL_DATA_CONSENTS="PersonalDataConsents",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(N||(N={}));const Sn=[N.VERSION,N.SALE_OPT_OUT_NOTICE,N.SHARING_OPT_OUT_NOTICE,N.SENSITIVE_DATA_LIMIT_USE_NOTICE,N.SALE_OPT_OUT,N.SHARING_OPT_OUT,N.SENSITIVE_DATA_PROCESSING,N.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,N.PERSONAL_DATA_CONSENTS,N.MSPA_COVERED_TRANSACTION,N.MSPA_OPT_OUT_OPTION_MODE,N.MSPA_SERVICE_PROVIDER_MODE],bn=[N.GPC_SEGMENT_TYPE,N.GPC];class fn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Sn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(N.VERSION.toString(),new c(6,ee.VERSION)),a.put(N.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(N.SHARING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(N.SENSITIVE_DATA_LIMIT_USE_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(N.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(N.SHARING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(N.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0,0]).withValidator(i)),a.put(N.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0]).withValidator(i)),a.put(N.PERSONAL_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(N.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(N.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(N.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsCaCoreSegment '"+e+"'")}}}class In extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return bn}initializeFields(){let e=new O;return e.put(N.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(N.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(N.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsCaGpcSegment '"+e+"'")}}}const Ve=class Ve extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Ve.ID}getName(){return Ve.NAME}getVersion(){return Ve.VERSION}initializeSegments(){let t=[];return t.push(new fn),t.push(new In),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(N.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(N.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(N.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Ve,"ID",8),l(Ve,"VERSION",1),l(Ve,"NAME","usca");let ee=Ve;var j;(function(n){n.VERSION="Version",n.SHARING_NOTICE="SharingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode"})(j||(j={}));const On=[j.VERSION,j.SHARING_NOTICE,j.SALE_OPT_OUT_NOTICE,j.TARGETED_ADVERTISING_OPT_OUT_NOTICE,j.SALE_OPT_OUT,j.TARGETED_ADVERTISING_OPT_OUT,j.SENSITIVE_DATA_PROCESSING,j.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,j.MSPA_COVERED_TRANSACTION,j.MSPA_OPT_OUT_OPTION_MODE,j.MSPA_SERVICE_PROVIDER_MODE];class An extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return On}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(j.VERSION.toString(),new c(6,te.VERSION)),a.put(j.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(j.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(j.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(j.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(j.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(j.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(j.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(j.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(j.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(j.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsVaCoreSegment '"+e+"'")}}}const Pe=class Pe extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Pe.ID}getName(){return Pe.NAME}getVersion(){return Pe.VERSION}initializeSegments(){let t=[];return t.push(new An),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");for(let i=0;i<e.length;i++)s.length>i&&e[i].decode(s[i])}return e}encodeSection(t){let e=[];for(let s=0;s<t.length;s++){let i=t[s];e.push(i.encode())}return e.join(".")}};l(Pe,"ID",9),l(Pe,"VERSION",1),l(Pe,"NAME","usva");let te=Pe;var G;(function(n){n.VERSION="Version",n.SHARING_NOTICE="SharingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(G||(G={}));const Nn=[G.VERSION,G.SHARING_NOTICE,G.SALE_OPT_OUT_NOTICE,G.TARGETED_ADVERTISING_OPT_OUT_NOTICE,G.SALE_OPT_OUT,G.TARGETED_ADVERTISING_OPT_OUT,G.SENSITIVE_DATA_PROCESSING,G.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,G.MSPA_COVERED_TRANSACTION,G.MSPA_OPT_OUT_OPTION_MODE,G.MSPA_SERVICE_PROVIDER_MODE],Tn=[G.GPC_SEGMENT_TYPE,G.GPC];class _n extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Nn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(G.VERSION.toString(),new c(6,ne.VERSION)),a.put(G.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(G.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(G.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(G.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(G.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(G.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0]).withValidator(i)),a.put(G.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(G.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(G.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(G.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsCoCoreSegment '"+e+"'")}}}class yn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Tn}initializeFields(){let e=new O;return e.put(G.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(G.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(G.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsCoGpcSegment '"+e+"'")}}}const Ce=class Ce extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Ce.ID}getName(){return Ce.NAME}getVersion(){return Ce.VERSION}initializeSegments(){let t=[];return t.push(new _n),t.push(new yn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(G.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(G.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(G.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Ce,"ID",10),l(Ce,"VERSION",1),l(Ce,"NAME","usco");let ne=Ce;var L;(function(n){n.VERSION="Version",n.SHARING_NOTICE="SharingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE="SensitiveDataProcessingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode"})(L||(L={}));const Vn=[L.VERSION,L.SHARING_NOTICE,L.SALE_OPT_OUT_NOTICE,L.TARGETED_ADVERTISING_OPT_OUT_NOTICE,L.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE,L.SALE_OPT_OUT,L.TARGETED_ADVERTISING_OPT_OUT,L.SENSITIVE_DATA_PROCESSING,L.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,L.MSPA_COVERED_TRANSACTION,L.MSPA_OPT_OUT_OPTION_MODE,L.MSPA_SERVICE_PROVIDER_MODE];class Pn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Vn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(L.VERSION.toString(),new c(6,se.VERSION)),a.put(L.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(L.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(L.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(L.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(L.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(L.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(L.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(L.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(L.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(L.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(L.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsUtCoreSegment '"+e+"'")}}}const De=class De extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return De.ID}getName(){return De.NAME}getVersion(){return De.VERSION}initializeSegments(){let t=[];return t.push(new Pn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");for(let i=0;i<e.length;i++)s.length>i&&e[i].decode(s[i])}return e}encodeSection(t){let e=[];for(let s=0;s<t.length;s++){let i=t[s];e.push(i.encode())}return e.join(".")}};l(De,"ID",11),l(De,"VERSION",1),l(De,"NAME","usut");let se=De;var x;(function(n){n.VERSION="Version",n.SHARING_NOTICE="SharingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(x||(x={}));const Cn=[x.VERSION,x.SHARING_NOTICE,x.SALE_OPT_OUT_NOTICE,x.TARGETED_ADVERTISING_OPT_OUT_NOTICE,x.SALE_OPT_OUT,x.TARGETED_ADVERTISING_OPT_OUT,x.SENSITIVE_DATA_PROCESSING,x.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,x.MSPA_COVERED_TRANSACTION,x.MSPA_OPT_OUT_OPTION_MODE,x.MSPA_SERVICE_PROVIDER_MODE],Dn=[x.GPC_SEGMENT_TYPE,x.GPC];class wn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Cn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(x.VERSION.toString(),new c(6,ie.VERSION)),a.put(x.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(x.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(x.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(x.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(x.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(x.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(x.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(x.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(x.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(x.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsCtCoreSegment '"+e+"'")}}}class Mn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Dn}initializeFields(){let e=new O;return e.put(x.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(x.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(x.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsCtGpcSegment '"+e+"'")}}}const we=class we extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return we.ID}getName(){return we.NAME}getVersion(){return we.VERSION}initializeSegments(){let t=[];return t.push(new wn),t.push(new Mn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(x.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(x.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(x.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(we,"ID",12),l(we,"VERSION",1),l(we,"NAME","usct");let ie=we;var F;(function(n){n.VERSION="Version",n.PROCESSING_NOTICE="ProcessingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode"})(F||(F={}));const kn=[F.VERSION,F.PROCESSING_NOTICE,F.SALE_OPT_OUT_NOTICE,F.TARGETED_ADVERTISING_OPT_OUT_NOTICE,F.SALE_OPT_OUT,F.TARGETED_ADVERTISING_OPT_OUT,F.SENSITIVE_DATA_PROCESSING,F.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,F.ADDITIONAL_DATA_PROCESSING_CONSENT,F.MSPA_COVERED_TRANSACTION,F.MSPA_OPT_OUT_OPTION_MODE,F.MSPA_SERVICE_PROVIDER_MODE];class Rn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return kn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(F.VERSION.toString(),new c(6,ae.VERSION)),a.put(F.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(F.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(F.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(F.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(F.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(F.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(F.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(F.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(F.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(F.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(F.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsFlCoreSegment '"+e+"'")}}}const Me=class Me extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Me.ID}getName(){return Me.NAME}getVersion(){return Me.VERSION}initializeSegments(){let t=[];return t.push(new Rn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");for(let i=0;i<e.length;i++)s.length>i&&e[i].decode(s[i])}return e}encodeSection(t){let e=[];for(let s=0;s<t.length;s++){let i=t[s];e.push(i.encode())}return e.join(".")}};l(Me,"ID",13),l(Me,"VERSION",1),l(Me,"NAME","usfl");let ae=Me;var T;(function(n){n.VERSION="Version",n.SHARING_NOTICE="SharingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(T||(T={}));const Gn=[T.VERSION,T.SHARING_NOTICE,T.SALE_OPT_OUT_NOTICE,T.TARGETED_ADVERTISING_OPT_OUT_NOTICE,T.SALE_OPT_OUT,T.TARGETED_ADVERTISING_OPT_OUT,T.SENSITIVE_DATA_PROCESSING,T.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,T.ADDITIONAL_DATA_PROCESSING_CONSENT,T.MSPA_COVERED_TRANSACTION,T.MSPA_OPT_OUT_OPTION_MODE,T.MSPA_SERVICE_PROVIDER_MODE],xn=[T.GPC_SEGMENT_TYPE,T.GPC];class Bn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Gn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(T.VERSION.toString(),new c(6,oe.VERSION)),a.put(T.SHARING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(T.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(T.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(T.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(T.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(T.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(T.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(T.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(T.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(T.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(T.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsMtCoreSegment '"+e+"'")}}}class Ln extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return xn}initializeFields(){let e=new O;return e.put(T.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(T.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(T.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsMtGpcSegment '"+e+"'")}}}const ke=class ke extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return ke.ID}getName(){return ke.NAME}getVersion(){return ke.VERSION}initializeSegments(){let t=[];return t.push(new Bn),t.push(new Ln),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(T.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(T.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(T.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(ke,"ID",14),l(ke,"VERSION",1),l(ke,"NAME","usmt");let oe=ke;var _;(function(n){n.VERSION="Version",n.PROCESSING_NOTICE="ProcessingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(_||(_={}));const Fn=[_.VERSION,_.PROCESSING_NOTICE,_.SALE_OPT_OUT_NOTICE,_.TARGETED_ADVERTISING_OPT_OUT_NOTICE,_.SALE_OPT_OUT,_.TARGETED_ADVERTISING_OPT_OUT,_.SENSITIVE_DATA_PROCESSING,_.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,_.ADDITIONAL_DATA_PROCESSING_CONSENT,_.MSPA_COVERED_TRANSACTION,_.MSPA_OPT_OUT_OPTION_MODE,_.MSPA_SERVICE_PROVIDER_MODE],Un=[_.GPC_SEGMENT_TYPE,_.GPC];class jn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Fn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(_.VERSION.toString(),new c(6,le.VERSION)),a.put(_.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(_.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(_.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(_.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(_.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(_.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0,0,0,0]).withValidator(i)),a.put(_.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(_.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(_.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(_.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(_.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsOrCoreSegment '"+e+"'")}}}class Hn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Un}initializeFields(){let e=new O;return e.put(_.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(_.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(_.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsOrGpcSegment '"+e+"'")}}}const Re=class Re extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Re.ID}getName(){return Re.NAME}getVersion(){return Re.VERSION}initializeSegments(){let t=[];return t.push(new jn),t.push(new Hn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(_.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(_.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(_.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Re,"ID",15),l(Re,"VERSION",1),l(Re,"NAME","usor");let le=Re;var y;(function(n){n.VERSION="Version",n.PROCESSING_NOTICE="ProcessingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(y||(y={}));const Kn=[y.VERSION,y.PROCESSING_NOTICE,y.SALE_OPT_OUT_NOTICE,y.TARGETED_ADVERTISING_OPT_OUT_NOTICE,y.SALE_OPT_OUT,y.TARGETED_ADVERTISING_OPT_OUT,y.SENSITIVE_DATA_PROCESSING,y.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,y.ADDITIONAL_DATA_PROCESSING_CONSENT,y.MSPA_COVERED_TRANSACTION,y.MSPA_OPT_OUT_OPTION_MODE,y.MSPA_SERVICE_PROVIDER_MODE],zn=[y.GPC_SEGMENT_TYPE,y.GPC];class Yn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Kn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(y.VERSION.toString(),new c(6,ce.VERSION)),a.put(y.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(y.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(y.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(y.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(y.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(y.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(y.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(y.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(y.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(y.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(y.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsTxCoreSegment '"+e+"'")}}}class Wn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return zn}initializeFields(){let e=new O;return e.put(y.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(y.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(y.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsTxGpcSegment '"+e+"'")}}}const Ge=class Ge extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Ge.ID}getName(){return Ge.NAME}getVersion(){return Ge.VERSION}initializeSegments(){let t=[];return t.push(new Yn),t.push(new Wn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(y.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(y.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(y.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Ge,"ID",16),l(Ge,"VERSION",1),l(Ge,"NAME","ustx");let ce=Ge;var V;(function(n){n.VERSION="Version",n.PROCESSING_NOTICE="ProcessingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(V||(V={}));const $n=[V.VERSION,V.PROCESSING_NOTICE,V.SALE_OPT_OUT_NOTICE,V.TARGETED_ADVERTISING_OPT_OUT_NOTICE,V.SALE_OPT_OUT,V.TARGETED_ADVERTISING_OPT_OUT,V.SENSITIVE_DATA_PROCESSING,V.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,V.ADDITIONAL_DATA_PROCESSING_CONSENT,V.MSPA_COVERED_TRANSACTION,V.MSPA_OPT_OUT_OPTION_MODE,V.MSPA_SERVICE_PROVIDER_MODE],Jn=[V.GPC_SEGMENT_TYPE,V.GPC];class Qn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return $n}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(V.VERSION.toString(),new c(6,de.VERSION)),a.put(V.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(V.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(V.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(V.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(V.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(V.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0,0]).withValidator(i)),a.put(V.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0,0,0]).withValidator(i)),a.put(V.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(V.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(V.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(V.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsDeCoreSegment '"+e+"'")}}}class Zn extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Jn}initializeFields(){let e=new O;return e.put(V.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(V.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(V.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsDeGpcSegment '"+e+"'")}}}const xe=class xe extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return xe.ID}getName(){return xe.NAME}getVersion(){return xe.VERSION}initializeSegments(){let t=[];return t.push(new Qn),t.push(new Zn),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(V.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(V.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(V.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(xe,"ID",17),l(xe,"VERSION",1),l(xe,"NAME","usde");let de=xe;var P;(function(n){n.VERSION="Version",n.PROCESSING_NOTICE="ProcessingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SENSITIVE_DATA_OPT_OUT_NOTICE="SensitiveDataOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(P||(P={}));const Xn=[P.VERSION,P.PROCESSING_NOTICE,P.SALE_OPT_OUT_NOTICE,P.TARGETED_ADVERTISING_OPT_OUT_NOTICE,P.SENSITIVE_DATA_OPT_OUT_NOTICE,P.SALE_OPT_OUT,P.TARGETED_ADVERTISING_OPT_OUT,P.SENSITIVE_DATA_PROCESSING,P.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,P.MSPA_COVERED_TRANSACTION,P.MSPA_OPT_OUT_OPTION_MODE,P.MSPA_SERVICE_PROVIDER_MODE],qn=[P.GPC_SEGMENT_TYPE,P.GPC];class es extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Xn}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(P.VERSION.toString(),new c(6,re.VERSION)),a.put(P.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(P.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(P.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(P.SENSITIVE_DATA_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(P.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(P.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(P.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(P.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(P.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(P.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(P.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsIaCoreSegment '"+e+"'")}}}class ts extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return qn}initializeFields(){let e=new O;return e.put(P.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(P.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(P.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsIaGpcSegment '"+e+"'")}}}const Be=class Be extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Be.ID}getName(){return Be.NAME}getVersion(){return Be.VERSION}initializeSegments(){let t=[];return t.push(new es),t.push(new ts),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(P.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(P.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(P.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Be,"ID",18),l(Be,"VERSION",1),l(Be,"NAME","usia");let re=Be;var C;(function(n){n.VERSION="Version",n.PROCESSING_NOTICE="ProcessingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(C||(C={}));const ns=[C.VERSION,C.PROCESSING_NOTICE,C.SALE_OPT_OUT_NOTICE,C.TARGETED_ADVERTISING_OPT_OUT_NOTICE,C.SALE_OPT_OUT,C.TARGETED_ADVERTISING_OPT_OUT,C.SENSITIVE_DATA_PROCESSING,C.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,C.ADDITIONAL_DATA_PROCESSING_CONSENT,C.MSPA_COVERED_TRANSACTION,C.MSPA_OPT_OUT_OPTION_MODE,C.MSPA_SERVICE_PROVIDER_MODE],ss=[C.GPC_SEGMENT_TYPE,C.GPC];class is extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return ns}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(C.VERSION.toString(),new c(6,ue.VERSION)),a.put(C.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(C.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(C.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(C.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(C.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(C.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(C.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(C.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(C.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(C.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(C.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsNeCoreSegment '"+e+"'")}}}class as extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return ss}initializeFields(){let e=new O;return e.put(C.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(C.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(C.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsNeGpcSegment '"+e+"'")}}}const Le=class Le extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Le.ID}getName(){return Le.NAME}getVersion(){return Le.VERSION}initializeSegments(){let t=[];return t.push(new is),t.push(new as),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(C.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(C.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(C.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Le,"ID",19),l(Le,"VERSION",1),l(Le,"NAME","usne");let ue=Le;var D;(function(n){n.VERSION="Version",n.PROCESSING_NOTICE="ProcessingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(D||(D={}));const os=[D.VERSION,D.PROCESSING_NOTICE,D.SALE_OPT_OUT_NOTICE,D.TARGETED_ADVERTISING_OPT_OUT_NOTICE,D.SALE_OPT_OUT,D.TARGETED_ADVERTISING_OPT_OUT,D.SENSITIVE_DATA_PROCESSING,D.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,D.ADDITIONAL_DATA_PROCESSING_CONSENT,D.MSPA_COVERED_TRANSACTION,D.MSPA_OPT_OUT_OPTION_MODE,D.MSPA_SERVICE_PROVIDER_MODE],ls=[D.GPC_SEGMENT_TYPE,D.GPC];class cs extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return os}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(D.VERSION.toString(),new c(6,pe.VERSION)),a.put(D.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(D.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(D.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(D.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(D.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(D.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(D.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0]).withValidator(i)),a.put(D.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(D.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(D.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(D.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsNhCoreSegment '"+e+"'")}}}class ds extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return ls}initializeFields(){let e=new O;return e.put(D.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(D.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(D.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsNhGpcSegment '"+e+"'")}}}const Fe=class Fe extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Fe.ID}getName(){return Fe.NAME}getVersion(){return Fe.VERSION}initializeSegments(){let t=[];return t.push(new cs),t.push(new ds),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(D.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(D.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(D.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Fe,"ID",20),l(Fe,"VERSION",1),l(Fe,"NAME","usnh");let pe=Fe;var w;(function(n){n.VERSION="Version",n.PROCESSING_NOTICE="ProcessingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(w||(w={}));const rs=[w.VERSION,w.PROCESSING_NOTICE,w.SALE_OPT_OUT_NOTICE,w.TARGETED_ADVERTISING_OPT_OUT_NOTICE,w.SALE_OPT_OUT,w.TARGETED_ADVERTISING_OPT_OUT,w.SENSITIVE_DATA_PROCESSING,w.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,w.ADDITIONAL_DATA_PROCESSING_CONSENT,w.MSPA_COVERED_TRANSACTION,w.MSPA_OPT_OUT_OPTION_MODE,w.MSPA_SERVICE_PROVIDER_MODE],us=[w.GPC_SEGMENT_TYPE,w.GPC];class ps extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return rs}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(w.VERSION.toString(),new c(6,me.VERSION)),a.put(w.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(w.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(w.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(w.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(w.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(w.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0,0,0]).withValidator(i)),a.put(w.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new U(2,[0,0,0,0,0]).withValidator(i)),a.put(w.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(w.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(w.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(w.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsNjCoreSegment '"+e+"'")}}}class ms extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return us}initializeFields(){let e=new O;return e.put(w.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(w.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(w.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsNjGpcSegment '"+e+"'")}}}const Ue=class Ue extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return Ue.ID}getName(){return Ue.NAME}getVersion(){return Ue.VERSION}initializeSegments(){let t=[];return t.push(new ps),t.push(new ms),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(w.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(w.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(w.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(Ue,"ID",21),l(Ue,"VERSION",1),l(Ue,"NAME","usnj");let me=Ue;var M;(function(n){n.VERSION="Version",n.PROCESSING_NOTICE="ProcessingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(M||(M={}));const vs=[M.VERSION,M.PROCESSING_NOTICE,M.SALE_OPT_OUT_NOTICE,M.TARGETED_ADVERTISING_OPT_OUT_NOTICE,M.SALE_OPT_OUT,M.TARGETED_ADVERTISING_OPT_OUT,M.SENSITIVE_DATA_PROCESSING,M.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,M.ADDITIONAL_DATA_PROCESSING_CONSENT,M.MSPA_COVERED_TRANSACTION,M.MSPA_OPT_OUT_OPTION_MODE,M.MSPA_SERVICE_PROVIDER_MODE],gs=[M.GPC_SEGMENT_TYPE,M.GPC];class hs extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return vs}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(M.VERSION.toString(),new c(6,ve.VERSION)),a.put(M.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(M.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(M.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(M.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(M.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(M.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(M.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(M.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(M.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(M.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(M.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsTnCoreSegment '"+e+"'")}}}class Es extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return gs}initializeFields(){let e=new O;return e.put(M.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(M.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(M.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsTnGpcSegment '"+e+"'")}}}const je=class je extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return je.ID}getName(){return je.NAME}getVersion(){return je.VERSION}initializeSegments(){let t=[];return t.push(new hs),t.push(new Es),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(M.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(M.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(M.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(je,"ID",22),l(je,"VERSION",1),l(je,"NAME","ustn");let ve=je;var k;(function(n){n.VERSION="Version",n.PROCESSING_NOTICE="ProcessingNotice",n.SALE_OPT_OUT_NOTICE="SaleOptOutNotice",n.TARGETED_ADVERTISING_OPT_OUT_NOTICE="TargetedAdvertisingOptOutNotice",n.SALE_OPT_OUT="SaleOptOut",n.TARGETED_ADVERTISING_OPT_OUT="TargetedAdvertisingOptOut",n.SENSITIVE_DATA_PROCESSING="SensitiveDataProcessing",n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS="KnownChildSensitiveDataConsents",n.ADDITIONAL_DATA_PROCESSING_CONSENT="AdditionalDataProcessingConsent",n.MSPA_COVERED_TRANSACTION="MspaCoveredTransaction",n.MSPA_OPT_OUT_OPTION_MODE="MspaOptOutOptionMode",n.MSPA_SERVICE_PROVIDER_MODE="MspaServiceProviderMode",n.GPC_SEGMENT_TYPE="GpcSegmentType",n.GPC_SEGMENT_INCLUDED="GpcSegmentIncluded",n.GPC="Gpc"})(k||(k={}));const Ss=[k.VERSION,k.PROCESSING_NOTICE,k.SALE_OPT_OUT_NOTICE,k.TARGETED_ADVERTISING_OPT_OUT_NOTICE,k.SALE_OPT_OUT,k.TARGETED_ADVERTISING_OPT_OUT,k.SENSITIVE_DATA_PROCESSING,k.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS,k.ADDITIONAL_DATA_PROCESSING_CONSENT,k.MSPA_COVERED_TRANSACTION,k.MSPA_OPT_OUT_OPTION_MODE,k.MSPA_SERVICE_PROVIDER_MODE],bs=[k.GPC_SEGMENT_TYPE,k.GPC];class fs extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return Ss}initializeFields(){const e=new class{test(o){return o>=0&&o<=2}},s=new class{test(o){return o>=1&&o<=2}},i=new class{test(o){for(let d=0;d<o.length;d++){let r=o[d];if(r<0||r>2)return!1}return!0}};let a=new O;return a.put(k.VERSION.toString(),new c(6,ge.VERSION)),a.put(k.PROCESSING_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(k.SALE_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(k.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(),new c(2,0).withValidator(e)),a.put(k.SALE_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(k.TARGETED_ADVERTISING_OPT_OUT.toString(),new c(2,0).withValidator(e)),a.put(k.SENSITIVE_DATA_PROCESSING.toString(),new U(2,[0,0,0,0,0,0,0,0]).withValidator(i)),a.put(k.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(),new c(2,0).withValidator(e)),a.put(k.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(),new c(2,0).withValidator(e)),a.put(k.MSPA_COVERED_TRANSACTION.toString(),new c(2,1).withValidator(s)),a.put(k.MSPA_OPT_OUT_OPTION_MODE.toString(),new c(2,0).withValidator(e)),a.put(k.MSPA_SERVICE_PROVIDER_MODE.toString(),new c(2,0).withValidator(e)),a}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsMnCoreSegment '"+e+"'")}}}class Is extends I{constructor(e){super();l(this,"base64UrlEncoder",A.getInstance());l(this,"bitStringEncoder",f.getInstance());e&&this.decode(e)}getFieldNames(){return bs}initializeFields(){let e=new O;return e.put(k.GPC_SEGMENT_TYPE.toString(),new c(2,1)),e.put(k.GPC_SEGMENT_INCLUDED.toString(),new B(!0)),e.put(k.GPC.toString(),new B(!1)),e}encodeSegment(e){let s=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(s)}decodeSegment(e,s){(e==null||e.length===0)&&this.fields.reset(s);try{let i=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(i,this.getFieldNames(),s)}catch{throw new m("Unable to decode UsMnGpcSegment '"+e+"'")}}}const He=class He extends K{constructor(t){super(),t&&t.length>0&&this.decode(t)}getId(){return He.ID}getName(){return He.NAME}getVersion(){return He.VERSION}initializeSegments(){let t=[];return t.push(new fs),t.push(new Is),t}decodeSection(t){let e=this.initializeSegments();if(t!=null&&t.length!==0){let s=t.split(".");s.length>0&&e[0].decode(s[0]),s.length>1?(e[1].setFieldValue(k.GPC_SEGMENT_INCLUDED,!0),e[1].decode(s[1])):e[1].setFieldValue(k.GPC_SEGMENT_INCLUDED,!1)}return e}encodeSection(t){let e=[];return t.length>=1&&(e.push(t[0].encode()),t.length>=2&&t[1].getFieldValue(k.GPC_SEGMENT_INCLUDED)===!0&&e.push(t[1].encode())),e.join(".")}};l(He,"ID",23),l(He,"VERSION",1),l(He,"NAME","usmn");let ge=He;class H{}l(H,"SECTION_ID_NAME_MAP",new Map([[Q.ID,Q.NAME],[Z.ID,Z.NAME],[X.ID,X.NAME],[q.ID,q.NAME],[ee.ID,ee.NAME],[te.ID,te.NAME],[ne.ID,ne.NAME],[se.ID,se.NAME],[ie.ID,ie.NAME],[ae.ID,ae.NAME],[oe.ID,oe.NAME],[le.ID,le.NAME],[ce.ID,ce.NAME],[de.ID,de.NAME],[re.ID,re.NAME],[ue.ID,ue.NAME],[pe.ID,pe.NAME],[me.ID,me.NAME],[ve.ID,ve.NAME],[ge.ID,ge.NAME]])),l(H,"SECTION_ORDER",[Q.NAME,Z.NAME,X.NAME,q.NAME,ee.NAME,te.NAME,ne.NAME,se.NAME,ie.NAME,ae.NAME,oe.NAME,le.NAME,ce.NAME,de.NAME,re.NAME,ue.NAME,pe.NAME,me.NAME,ve.NAME,ge.NAME]);class _t{constructor(t){l(this,"sections",new Map);l(this,"encodedString",null);l(this,"decoded",!0);l(this,"dirty",!1);t&&this.decode(t)}setFieldValue(t,e,s){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let i=null;if(this.sections.has(t)?i=this.sections.get(t):t===Z.NAME?(i=new Z,this.sections.set(Z.NAME,i)):t===Q.NAME?(i=new Q,this.sections.set(Q.NAME,i)):t===X.NAME?(i=new X,this.sections.set(X.NAME,i)):t===q.NAME?(i=new q,this.sections.set(q.NAME,i)):t===ee.NAME?(i=new ee,this.sections.set(ee.NAME,i)):t===te.NAME?(i=new te,this.sections.set(te.NAME,i)):t===ne.NAME?(i=new ne,this.sections.set(ne.NAME,i)):t===se.NAME?(i=new se,this.sections.set(se.NAME,i)):t===ie.NAME?(i=new ie,this.sections.set(ie.NAME,i)):t===ae.NAME?(i=new ae,this.sections.set(ae.NAME,i)):t===oe.NAME?(i=new oe,this.sections.set(oe.NAME,i)):t===le.NAME?(i=new le,this.sections.set(le.NAME,i)):t===ce.NAME?(i=new ce,this.sections.set(ce.NAME,i)):t===de.NAME?(i=new de,this.sections.set(de.NAME,i)):t===re.NAME?(i=new re,this.sections.set(re.NAME,i)):t===ue.NAME?(i=new ue,this.sections.set(ue.NAME,i)):t===pe.NAME?(i=new pe,this.sections.set(pe.NAME,i)):t===me.NAME?(i=new me,this.sections.set(me.NAME,i)):t===ve.NAME?(i=new ve,this.sections.set(ve.NAME,i)):t===ge.NAME&&(i=new ge,this.sections.set(ge.NAME,i)),i)i.setFieldValue(e,s),this.dirty=!0,i.setIsDirty(!0);else throw new et(t+"."+e+" not found")}setFieldValueBySectionId(t,e,s){this.setFieldValue(H.SECTION_ID_NAME_MAP.get(t),e,s)}getFieldValue(t,e){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(t)?this.sections.get(t).getFieldValue(e):null}getFieldValueBySectionId(t,e){return this.getFieldValue(H.SECTION_ID_NAME_MAP.get(t),e)}hasField(t,e){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(t)?this.sections.get(t).hasField(e):!1}hasFieldBySectionId(t,e){return this.hasField(H.SECTION_ID_NAME_MAP.get(t),e)}hasSection(t){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(t)}hasSectionId(t){return this.hasSection(H.SECTION_ID_NAME_MAP.get(t))}deleteSection(t){!this.decoded&&this.encodedString!=null&&this.encodedString.length>0&&this.decode(this.encodedString),this.sections.delete(t),this.dirty=!0}deleteSectionById(t){this.deleteSection(H.SECTION_ID_NAME_MAP.get(t))}clear(){this.sections.clear(),this.encodedString="DBAA",this.decoded=!1,this.dirty=!1}getHeader(){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let t=new fe;return t.setFieldValue("SectionIds",this.getSectionIds()),t.toObj()}getSection(t){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(t)?this.sections.get(t).toObj():null}getSectionIds(){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let t=[];for(let e=0;e<H.SECTION_ORDER.length;e++){let s=H.SECTION_ORDER[e];if(this.sections.has(s)){let i=this.sections.get(s);t.push(i.getId())}}return t}encodeModel(t){let e=[],s=[];for(let a=0;a<H.SECTION_ORDER.length;a++){let o=H.SECTION_ORDER[a];if(t.has(o)){let d=t.get(o);d.setIsDirty(!0),e.push(d.encode()),s.push(d.getId())}}let i=new fe;return i.setFieldValue("SectionIds",s),e.unshift(i.encode()),e.join("~")}decodeModel(t){if(!t||t.length==0||t.startsWith("DB")){let e=t.split("~"),s=new Map;if(e[0].startsWith("D")){let a=new fe(e[0]).getFieldValue("SectionIds");if(a.length!==e.length-1)throw new m("Unable to decode '"+t+"'. The number of sections does not match the number of sections defined in the header.");for(let o=0;o<a.length;o++){if(e[o+1].trim()==="")throw new m("Unable to decode '"+t+"'. Section "+(o+1)+" is blank.");if(a[o]===Z.ID){let r=new Z(e[o+1]);s.set(Z.NAME,r)}else if(a[o]===Q.ID){let r=new Q(e[o+1]);s.set(Q.NAME,r)}else if(a[o]===X.ID){let r=new X(e[o+1]);s.set(X.NAME,r)}else if(a[o]===q.ID){let r=new q(e[o+1]);s.set(q.NAME,r)}else if(a[o]===ee.ID){let r=new ee(e[o+1]);s.set(ee.NAME,r)}else if(a[o]===te.ID){let r=new te(e[o+1]);s.set(te.NAME,r)}else if(a[o]===ne.ID){let r=new ne(e[o+1]);s.set(ne.NAME,r)}else if(a[o]===se.ID){let r=new se(e[o+1]);s.set(se.NAME,r)}else if(a[o]===ie.ID){let r=new ie(e[o+1]);s.set(ie.NAME,r)}else if(a[o]===ae.ID){let r=new ae(e[o+1]);s.set(ae.NAME,r)}else if(a[o]===oe.ID){let r=new oe(e[o+1]);s.set(oe.NAME,r)}else if(a[o]===le.ID){let r=new le(e[o+1]);s.set(le.NAME,r)}else if(a[o]===ce.ID){let r=new ce(e[o+1]);s.set(ce.NAME,r)}else if(a[o]===de.ID){let r=new de(e[o+1]);s.set(de.NAME,r)}else if(a[o]===re.ID){let r=new re(e[o+1]);s.set(re.NAME,r)}else if(a[o]===ue.ID){let r=new ue(e[o+1]);s.set(ue.NAME,r)}else if(a[o]===pe.ID){let r=new pe(e[o+1]);s.set(pe.NAME,r)}else if(a[o]===me.ID){let r=new me(e[o+1]);s.set(me.NAME,r)}else if(a[o]===ve.ID){let r=new ve(e[o+1]);s.set(ve.NAME,r)}else if(a[o]===ge.ID){let r=new ge(e[o+1]);s.set(ge.NAME,r)}}}return s}else if(t.startsWith("C")){let e=new Map,s=new Q(t);return e.set(Q.NAME,s),new fe().setFieldValue(Ie.SECTION_IDS,[2]),e.set(fe.NAME,s),e}else throw new m("Unable to decode '"+t+"'")}encodeSection(t){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(t)?this.sections.get(t).encode():null}encodeSectionById(t){return this.encodeSection(H.SECTION_ID_NAME_MAP.get(t))}decodeSection(t,e){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let s=null;this.sections.has(t)?s=this.sections.get(t):t===Z.NAME?(s=new Z,this.sections.set(Z.NAME,s)):t===Q.NAME?(s=new Q,this.sections.set(Q.NAME,s)):t===X.NAME?(s=new X,this.sections.set(X.NAME,s)):t===q.NAME?(s=new q,this.sections.set(q.NAME,s)):t===ee.NAME?(s=new ee,this.sections.set(ee.NAME,s)):t===te.NAME?(s=new te,this.sections.set(te.NAME,s)):t===ne.NAME?(s=new ne,this.sections.set(ne.NAME,s)):t===se.NAME?(s=new se,this.sections.set(se.NAME,s)):t===ie.NAME?(s=new ie,this.sections.set(ie.NAME,s)):t===ae.NAME?(s=new ae,this.sections.set(ae.NAME,s)):t===oe.NAME?(s=new oe,this.sections.set(oe.NAME,s)):t===le.NAME?(s=new le,this.sections.set(le.NAME,s)):t===ce.NAME?(s=new ce,this.sections.set(ce.NAME,s)):t===de.NAME?(s=new de,this.sections.set(de.NAME,s)):t===re.NAME?(s=new re,this.sections.set(re.NAME,s)):t===ue.NAME?(s=new ue,this.sections.set(ue.NAME,s)):t===pe.NAME?(s=new pe,this.sections.set(pe.NAME,s)):t===me.NAME?(s=new me,this.sections.set(me.NAME,s)):t===ve.NAME?(s=new ve,this.sections.set(ve.NAME,s)):t===ge.NAME&&(s=new ge,this.sections.set(ge.NAME,s)),s&&(s.decode(e),this.dirty=!0)}decodeSectionById(t,e){this.decodeSection(H.SECTION_ID_NAME_MAP.get(t),e)}toObject(){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let t={};for(let e=0;e<H.SECTION_ORDER.length;e++){let s=H.SECTION_ORDER[e];this.sections.has(s)&&(t[s]=this.sections.get(s).toObj())}return t}encode(){return(this.encodedString==null||this.encodedString.length===0||this.dirty)&&(this.encodedString=this.encodeModel(this.sections),this.dirty=!1,this.decoded=!0),this.encodedString}decode(t){this.encodedString=t,this.dirty=!1,this.decoded=!1}}class Os{constructor(){l(this,"gppVersion","1.1");l(this,"supportedAPIs",[]);l(this,"eventQueue",new Ht(this));l(this,"cmpStatus",nt.LOADING);l(this,"cmpDisplayStatus",st.HIDDEN);l(this,"signalStatus",it.NOT_READY);l(this,"applicableSections",[]);l(this,"gppModel",new _t);l(this,"cmpId");l(this,"cmpVersion");l(this,"eventStatus")}reset(){this.eventQueue.clear(),this.cmpStatus=nt.LOADING,this.cmpDisplayStatus=st.HIDDEN,this.signalStatus=it.NOT_READY,this.applicableSections=[],this.supportedAPIs=[],this.gppModel=new _t,delete this.cmpId,delete this.cmpVersion,delete this.eventStatus}}class ht{static absCall(t,e,s,i){return new Promise((a,o)=>{const d=new XMLHttpRequest,r=()=>{if(d.readyState==XMLHttpRequest.DONE)if(d.status>=200&&d.status<300){let u=d.response;if(typeof u=="string")try{u=JSON.parse(u)}catch{}a(u)}else o(new Error(`HTTP Status: ${d.status} response type: ${d.responseType}`))},E=()=>{o(new Error("error"))},p=()=>{o(new Error("aborted"))},v=()=>{o(new Error("Timeout "+i+"ms "+t))};d.withCredentials=s,d.addEventListener("load",r),d.addEventListener("error",E),d.addEventListener("abort",p),e===null?d.open("GET",t,!0):d.open("POST",t,!0),d.responseType="json",d.timeout=i,d.ontimeout=v,d.send(e)})}static post(t,e,s=!1,i=0){return this.absCall(t,JSON.stringify(e),s,i)}static fetch(t,e=!1,s=0){return this.absCall(t,null,e,s)}}class tt extends Error{constructor(t){super(t),this.name="GVLError"}}const $e=class $e{has(t){return $e.langSet.has(t)}forEach(t){$e.langSet.forEach(t)}get size(){return $e.langSet.size}};l($e,"langSet",new Set(["AR","BG","BS","CA","CS","CY","DA","DE","EL","EN","ES","ET","EU","FI","FR","GL","HE","HI","HR","HU","ID","IS","IT","JA","KA","KO","LT","LV","MK","MS","MT","NL","NO","PL","PT-BR","PT-PT","RO","RU","SK","SL","SQ","SR-LATN","SR-CYRL","SV","SW","TH","TL","TR","UK","VI","ZH","ZH-HANT"]));let bt=$e;const Je=class Je{constructor(){l(this,"vendors");l(this,"consentLanguages",new bt);l(this,"gvlSpecificationVersion");l(this,"vendorListVersion");l(this,"tcfPolicyVersion");l(this,"lastUpdated");l(this,"purposes");l(this,"specialPurposes");l(this,"features");l(this,"specialFeatures");l(this,"stacks");l(this,"dataCategories");l(this,"language",Je.DEFAULT_LANGUAGE);l(this,"vendorIds");l(this,"ready",!1);l(this,"fullVendorList");l(this,"byPurposeVendorMap");l(this,"bySpecialPurposeVendorMap");l(this,"byFeatureVendorMap");l(this,"bySpecialFeatureVendorMap");l(this,"baseUrl");l(this,"languageFilename","purposes-[LANG].json")}static fromVendorList(t){let e=new Je;return e.populate(t),e}static async fromUrl(t){let e=t.baseUrl;if(!e||e.length===0)throw new tt("Invalid baseUrl: '"+e+"'");if(/^https?:\/\/vendorlist\.consensu\.org\//.test(e))throw new tt("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");e.length>0&&e[e.length-1]!=="/"&&(e+="/");let s=new Je;if(s.baseUrl=e,t.languageFilename?s.languageFilename=t.languageFilename:s.languageFilename="purposes-[LANG].json",t.version>0){let i=t.versionedFilename;i||(i="archives/vendor-list-v[VERSION].json");let a=e+i.replace("[VERSION]",String(t.version));s.populate(await ht.fetch(a))}else{let i=t.latestFilename;i||(i="vendor-list.json");let a=e+i;s.populate(await ht.fetch(a))}return s}async changeLanguage(t){const e=t.toUpperCase();if(this.consentLanguages.has(e)){if(e!==this.language){this.language=e;const s=this.baseUrl+this.languageFilename.replace("[LANG]",t);try{this.populate(await ht.fetch(s))}catch(i){throw new tt("unable to load language: "+i.message)}}}else throw new tt(`unsupported language ${t}`)}getJson(){return JSON.parse(JSON.stringify({gvlSpecificationVersion:this.gvlSpecificationVersion,vendorListVersion:this.vendorListVersion,tcfPolicyVersion:this.tcfPolicyVersion,lastUpdated:this.lastUpdated,purposes:this.purposes,specialPurposes:this.specialPurposes,features:this.features,specialFeatures:this.specialFeatures,stacks:this.stacks,dataCategories:this.dataCategories,vendors:this.fullVendorList}))}isVendorList(t){return t!==void 0&&t.vendors!==void 0}populate(t){this.purposes=t.purposes,this.specialPurposes=t.specialPurposes,this.features=t.features,this.specialFeatures=t.specialFeatures,this.stacks=t.stacks,this.dataCategories=t.dataCategories,this.isVendorList(t)&&(this.gvlSpecificationVersion=t.gvlSpecificationVersion,this.tcfPolicyVersion=t.tcfPolicyVersion,this.vendorListVersion=t.vendorListVersion,this.lastUpdated=t.lastUpdated,typeof this.lastUpdated=="string"&&(this.lastUpdated=new Date(this.lastUpdated)),this.vendors=t.vendors,this.fullVendorList=t.vendors,this.mapVendors(),this.ready=!0)}mapVendors(t){this.byPurposeVendorMap={},this.bySpecialPurposeVendorMap={},this.byFeatureVendorMap={},this.bySpecialFeatureVendorMap={},Object.keys(this.purposes).forEach(e=>{this.byPurposeVendorMap[e]={legInt:new Set,impCons:new Set,consent:new Set,flexible:new Set}}),Object.keys(this.specialPurposes).forEach(e=>{this.bySpecialPurposeVendorMap[e]=new Set}),Object.keys(this.features).forEach(e=>{this.byFeatureVendorMap[e]=new Set}),Object.keys(this.specialFeatures).forEach(e=>{this.bySpecialFeatureVendorMap[e]=new Set}),Array.isArray(t)||(t=Object.keys(this.fullVendorList).map(e=>+e)),this.vendorIds=new Set(t),this.vendors=t.reduce((e,s)=>{const i=this.vendors[String(s)];return i&&i.deletedDate===void 0&&(i.purposes.forEach(a=>{this.byPurposeVendorMap[String(a)].consent.add(s)}),i.specialPurposes.forEach(a=>{this.bySpecialPurposeVendorMap[String(a)].add(s)}),i.legIntPurposes&&i.legIntPurposes.forEach(a=>{this.byPurposeVendorMap[String(a)].legInt.add(s)}),i.impConsPurposes&&i.impConsPurposes.forEach(a=>{this.byPurposeVendorMap[String(a)].impCons.add(s)}),i.flexiblePurposes&&i.flexiblePurposes.forEach(a=>{this.byPurposeVendorMap[String(a)].flexible.add(s)}),i.features.forEach(a=>{this.byFeatureVendorMap[String(a)].add(s)}),i.specialFeatures.forEach(a=>{this.bySpecialFeatureVendorMap[String(a)].add(s)}),e[s]=i),e},{})}getFilteredVendors(t,e,s,i){const a=t.charAt(0).toUpperCase()+t.slice(1);let o;const d={};return t==="purpose"&&s?o=this["by"+a+"VendorMap"][String(e)][s]:o=this["by"+(i?"Special":"")+a+"VendorMap"][String(e)],o.forEach(r=>{d[String(r)]=this.vendors[String(r)]}),d}getVendorsWithConsentPurpose(t){return this.getFilteredVendors("purpose",t,"consent")}getVendorsWithLegIntPurpose(t){return this.getFilteredVendors("purpose",t,"legInt")}getVendorsWithFlexiblePurpose(t){return this.getFilteredVendors("purpose",t,"flexible")}getVendorsWithSpecialPurpose(t){return this.getFilteredVendors("purpose",t,void 0,!0)}getVendorsWithFeature(t){return this.getFilteredVendors("feature",t)}getVendorsWithSpecialFeature(t){return this.getFilteredVendors("feature",t,void 0,!0)}narrowVendorsTo(t){this.mapVendors(t)}get isReady(){return this.ready}static isInstanceOf(t){return typeof t=="object"&&typeof t.narrowVendorsTo=="function"}};l(Je,"DEFAULT_LANGUAGE","EN");let ct=Je;class As{constructor(t,e,s){l(this,"callResponder");l(this,"cmpApiContext");this.cmpApiContext=new Os,this.cmpApiContext.cmpId=t,this.cmpApiContext.cmpVersion=e,this.callResponder=new jt(this.cmpApiContext,s)}fireEvent(t,e){this.cmpApiContext.eventQueue.exec(t,e)}fireErrorEvent(t){this.cmpApiContext.eventQueue.exec("error",t)}fireSectionChange(t){this.cmpApiContext.eventQueue.exec("sectionChange",t)}getEventStatus(){return this.cmpApiContext.eventStatus}setEventStatus(t){this.cmpApiContext.eventStatus=t}getCmpStatus(){return this.cmpApiContext.cmpStatus}setCmpStatus(t){this.cmpApiContext.cmpStatus=t,this.cmpApiContext.eventQueue.exec("cmpStatus",t)}getCmpDisplayStatus(){return this.cmpApiContext.cmpDisplayStatus}setCmpDisplayStatus(t){this.cmpApiContext.cmpDisplayStatus=t,this.cmpApiContext.eventQueue.exec("cmpDisplayStatus",t)}getSignalStatus(){return this.cmpApiContext.signalStatus}setSignalStatus(t){this.cmpApiContext.signalStatus=t,this.cmpApiContext.eventQueue.exec("signalStatus",t)}getApplicableSections(){return this.cmpApiContext.applicableSections}setApplicableSections(t){this.cmpApiContext.applicableSections=t}getSupportedAPIs(){return this.cmpApiContext.supportedAPIs}setSupportedAPIs(t){this.cmpApiContext.supportedAPIs=t}setGppString(t){this.cmpApiContext.gppModel.decode(t)}getGppString(){return this.cmpApiContext.gppModel.encode()}setSectionString(t,e){this.cmpApiContext.gppModel.decodeSection(t,e)}setSectionStringById(t,e){this.setSectionString(H.SECTION_ID_NAME_MAP.get(t),e)}getSectionString(t){return this.cmpApiContext.gppModel.encodeSection(t)}getSectionStringById(t){return this.getSectionString(H.SECTION_ID_NAME_MAP.get(t))}setFieldValue(t,e,s){this.cmpApiContext.gppModel.setFieldValue(t,e,s)}setFieldValueBySectionId(t,e,s){this.setFieldValue(H.SECTION_ID_NAME_MAP.get(t),e,s)}getFieldValue(t,e){return this.cmpApiContext.gppModel.getFieldValue(t,e)}getFieldValueBySectionId(t,e){return this.getFieldValue(H.SECTION_ID_NAME_MAP.get(t),e)}getSection(t){return this.cmpApiContext.gppModel.getSection(t)}getSectionById(t){return this.getSection(H.SECTION_ID_NAME_MAP.get(t))}hasSection(t){return this.cmpApiContext.gppModel.hasSection(t)}hasSectionId(t){return this.hasSection(H.SECTION_ID_NAME_MAP.get(t))}deleteSection(t){this.cmpApiContext.gppModel.deleteSection(t)}deleteSectionById(t){this.deleteSection(H.SECTION_ID_NAME_MAP.get(t))}clear(){this.cmpApiContext.gppModel.clear()}getObject(){return this.cmpApiContext.gppModel.toObject()}getGvlFromVendorList(t){return ct.fromVendorList(t)}async getGvlFromUrl(t){return ct.fromUrl(t)}}const Ns=`  <div class="mb-3">
    <label for="header-version" class="form-label">Version</label>
    <input type="text" id="header-version" class="form-control" placeholder="1" value="1" disabled />
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-tcfeuv2"
      onclick="disableTcfEuV2(!this.checked)"
    />
    <label class="form-check-label" for="header-tcfeuv2">tcfeu</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-tcfcav1"
      onclick="disableTcfCaV1(!this.checked)"
    />
    <label class="form-check-label" for="header-tcfcav1">tcfca</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-uspv1"
      onclick="disableUspV1(!this.checked)"
    />
    <label class="form-check-label" for="header-uspv1">usp</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usnat"
      onclick="disableusnat(!this.checked)"
    />
    <label class="form-check-label" for="header-usnat">usnat</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usca"
      onclick="disableusca(!this.checked)"
    />
    <label class="form-check-label" for="header-usca">usca</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usva"
      onclick="disableusva(!this.checked)"
    />
    <label class="form-check-label" for="header-usva">usva</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usco"
      onclick="disableusco(!this.checked)"
    />
    <label class="form-check-label" for="header-usco">usco</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usut"
      onclick="disableusut(!this.checked)"
    />
    <label class="form-check-label" for="header-usut">usut</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usct"
      onclick="disableusct(!this.checked)"
    />
    <label class="form-check-label" for="header-usct">usct</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usfl"
      onclick="disableusfl(!this.checked)"
    />
    <label class="form-check-label" for="header-usfl">usfl</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usmt"
      onclick="disableusmt(!this.checked)"
    />
    <label class="form-check-label" for="header-usmt">usmt</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usor"
      onclick="disableusor(!this.checked)"
    />
    <label class="form-check-label" for="header-usor">usor</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-ustx"
      onclick="disableustx(!this.checked)"
    />
    <label class="form-check-label" for="header-ustx">ustx</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usde"
      onclick="disableusde(!this.checked)"
    />
    <label class="form-check-label" for="header-usde">usde</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usia"
      onclick="disableusia(!this.checked)"
    />
    <label class="form-check-label" for="header-usia">usia</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usne"
      onclick="disableusne(!this.checked)"
    />
    <label class="form-check-label" for="header-usne">usne</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usnh"
      onclick="disableusnh(!this.checked)"
    />
    <label class="form-check-label" for="header-usnh">usnh</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usnj"
      onclick="disableusnj(!this.checked)"
    />
    <label class="form-check-label" for="header-usnj">usnj</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-ustn"
      onclick="disableustn(!this.checked)"
    />
    <label class="form-check-label" for="header-ustn">ustn</label>
  </div>

  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="header-usmn"
      onclick="disableusmn(!this.checked)"
    />
    <label class="form-check-label" for="header-usmn">usmn</label>
  </div>
`,Ts=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="tcfeuv2-included"
      onclick="disableTcfEuV2(!this.checked)"
    />
    <label class="form-check-label" for="tcfeuv2-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-version" class="form-label">Version</label>
    <input type="text" id="tcfeuv2-version" class="form-control" placeholder="2" value="2" disabled />
  </div>
  <div class="mb-3">
    <label class="radio-inline control-label">Policy Version</label>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="tcfeuv2-policy-version" id="tcfeuv2-policy-version-2" value="2" onclick="tcfEuV2PolicyVersionChanged(2)" disabled>
      <label class="form-check-label" for="tcfeuv2-policy-version-2">2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="tcfeuv2-policy-version" id="tcfeuv2-policy-version-4" value="4" onclick="tcfEuV2PolicyVersionChanged(4)" disabled checked>
      <label class="form-check-label" for="tcfeuv2-policy-version-4">4</label>
    </div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-vendor-list-version" class="form-label">Vendor List Version</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfeuv2-vendor-list-version"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="tcfeuv2-vendor-list-version-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-created" class="form-label">Created</label>
    <input
      type="date"
      id="tcfeuv2-created"
      class="form-control"
      disabled
    />
    <div id="tcfeuv2-created-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-last-updated" class="form-label">Last Updated</label>
    <input
      type="date"
      id="tcfeuv2-last-updated"
      class="form-control"
      disabled
    />
    <div id="tcfeuv2-last-updated-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-cmp-id" class="form-label">CMP ID</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfeuv2-cmp-id"
      class="form-control"
      placeholder="1000"
      value="1000"
      disabled
    />
    <div id="tcfeuv2-cmp-id-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-cmp-version" class="form-label">CMP Version</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfeuv2-cmp-version"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="tcfeuv2-cmp-version-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-consent-screen" class="form-label">Consent Screen</label>
    <input
      type="number"
      min="0"
      max="63"
      id="tcfeuv2-consent-screen"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="tcfeuv2-consent-screen-feedback" class="invalid-feedback">Valid values are 0-63</div>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-consent-language" class="form-label">Consent Language</label>
    <select id="tcfeuv2-consent-language" class="form-select" disabled>
    </select>
  </div>
  <div class="mb-3">
    <input class="form-check-input" type="checkbox" value="" id="tcfeuv2-is-service-specific" checked disabled />
    <label class="form-check-label" for="tcfeuv2-is-service-specific">Is Service Specific</label>
  </div>
  <div class="mb-3">
    <input class="form-check-input" type="checkbox" value="" id="tcfeuv2-use-non-standard-stacks" disabled />
    <label class="form-check-label" for="tcfeuv2-use-non-standard-stacks">Publisher Uses Non-Standard Stacks</label>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-special-feature-optins" class="form-label">Special Feature Optins</label>
    <select id="tcfeuv2-special-feature-optins" class="form-select" multiple disabled>
    </select>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-purpose-consents" class="form-label">Purpose Consents</label>
    <select id="tcfeuv2-purpose-consents" class="form-select" size="11" multiple disabled>
    </select>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-purpose-legitimate-interests" class="form-label">Purpose Legitimate Interests</label>
    <select id="tcfeuv2-purpose-legitimate-interests" class="form-select" size="11" multiple disabled>
    </select>
  </div>
  <div class="mb-3">
    <input class="form-check-input" type="checkbox" value="" id="tcfeuv2-purpose-one-treatment" disabled />
    <label class="form-check-label" for="tcfeuv2-purpose-one-treatment">Special Purpose One Treatment</label>
  </div>
  <div class="mb-3">
    <label for="tcfeuv2-publisher-country-code" class="form-label">Publisher Country Code</label>
    <select id="tcfeuv2-publisher-country-code" class="form-select" disabled>
      <option value="AA">AA</option>
      <option value="AD">AD</option>
      <option value="AE">AE</option>
      <option value="AF">AF</option>
      <option value="AG">AG</option>
      <option value="AI">AI</option>
      <option value="AL">AL</option>
      <option value="AM">AM</option>
      <option value="AO">AO</option>
      <option value="AQ">AQ</option>
      <option value="AR">AR</option>
      <option value="AS">AS</option>
      <option value="AT">AT</option>
      <option value="AU">AU</option>
      <option value="AW">AW</option>
      <option value="AX">AX</option>
      <option value="AZ">AZ</option>
      <option value="BA">BA</option>
      <option value="BB">BB</option>
      <option value="BD">BD</option>
      <option value="BE">BE</option>
      <option value="BF">BF</option>
      <option value="BG">BG</option>
      <option value="BH">BH</option>
      <option value="BI">BI</option>
      <option value="BJ">BJ</option>
      <option value="BL">BL</option>
      <option value="BM">BM</option>
      <option value="BN">BN</option>
      <option value="BO">BO</option>
      <option value="BQ">BQ</option>
      <option value="BR">BR</option>
      <option value="BS">BS</option>
      <option value="BT">BT</option>
      <option value="BV">BV</option>
      <option value="BW">BW</option>
      <option value="BY">BY</option>
      <option value="BZ">BZ</option>
      <option value="CA">CA</option>
      <option value="CC">CC</option>
      <option value="CD">CD</option>
      <option value="CF">CF</option>
      <option value="CG">CG</option>
      <option value="CH">CH</option>
      <option value="CI">CI</option>
      <option value="CK">CK</option>
      <option value="CL">CL</option>
      <option value="CM">CM</option>
      <option value="CN">CN</option>
      <option value="CO">CO</option>
      <option value="CR">CR</option>
      <option value="CU">CU</option>
      <option value="CV">CV</option>
      <option value="CW">CW</option>
      <option value="CX">CX</option>
      <option value="CY">CY</option>
      <option value="CZ">CZ</option>
      <option value="DE">DE</option>
      <option value="DJ">DJ</option>
      <option value="DK">DK</option>
      <option value="DM">DM</option>
      <option value="DO">DO</option>
      <option value="DZ">DZ</option>
      <option value="EC">EC</option>
      <option value="EE">EE</option>
      <option value="EG">EG</option>
      <option value="EH">EH</option>
      <option value="ER">ER</option>
      <option value="ES">ES</option>
      <option value="ET">ET</option>
      <option value="FI">FI</option>
      <option value="FJ">FJ</option>
      <option value="FK">FK</option>
      <option value="FM">FM</option>
      <option value="FO">FO</option>
      <option value="FR">FR</option>
      <option value="GA">GA</option>
      <option value="GB">GB</option>
      <option value="GD">GD</option>
      <option value="GE">GE</option>
      <option value="GF">GF</option>
      <option value="GG">GG</option>
      <option value="GH">GH</option>
      <option value="GI">GI</option>
      <option value="GL">GL</option>
      <option value="GM">GM</option>
      <option value="GN">GN</option>
      <option value="GP">GP</option>
      <option value="GQ">GQ</option>
      <option value="GR">GR</option>
      <option value="GS">GS</option>
      <option value="GT">GT</option>
      <option value="GU">GU</option>
      <option value="GW">GW</option>
      <option value="GY">GY</option>
      <option value="HK">HK</option>
      <option value="HM">HM</option>
      <option value="HN">HN</option>
      <option value="HR">HR</option>
      <option value="HT">HT</option>
      <option value="HU">HU</option>
      <option value="ID">ID</option>
      <option value="IE">IE</option>
      <option value="IL">IL</option>
      <option value="IM">IM</option>
      <option value="IN">IN</option>
      <option value="IO">IO</option>
      <option value="IQ">IQ</option>
      <option value="IR">IR</option>
      <option value="IS">IS</option>
      <option value="IT">IT</option>
      <option value="JE">JE</option>
      <option value="JM">JM</option>
      <option value="JO">JO</option>
      <option value="JP">JP</option>
      <option value="KE">KE</option>
      <option value="KG">KG</option>
      <option value="KH">KH</option>
      <option value="KI">KI</option>
      <option value="KM">KM</option>
      <option value="KN">KN</option>
      <option value="KP">KP</option>
      <option value="KR">KR</option>
      <option value="KW">KW</option>
      <option value="KY">KY</option>
      <option value="KZ">KZ</option>
      <option value="LA">LA</option>
      <option value="LB">LB</option>
      <option value="LC">LC</option>
      <option value="LI">LI</option>
      <option value="LK">LK</option>
      <option value="LR">LR</option>
      <option value="LS">LS</option>
      <option value="LT">LT</option>
      <option value="LU">LU</option>
      <option value="LV">LV</option>
      <option value="LY">LY</option>
      <option value="MA">MA</option>
      <option value="MC">MC</option>
      <option value="MD">MD</option>
      <option value="ME">ME</option>
      <option value="MF">MF</option>
      <option value="MG">MG</option>
      <option value="MH">MH</option>
      <option value="MK">MK</option>
      <option value="ML">ML</option>
      <option value="MM">MM</option>
      <option value="MN">MN</option>
      <option value="MO">MO</option>
      <option value="MP">MP</option>
      <option value="MQ">MQ</option>
      <option value="MR">MR</option>
      <option value="MS">MS</option>
      <option value="MT">MT</option>
      <option value="MU">MU</option>
      <option value="MV">MV</option>
      <option value="MW">MW</option>
      <option value="MX">MX</option>
      <option value="MY">MY</option>
      <option value="MZ">MZ</option>
      <option value="NA">NA</option>
      <option value="NC">NC</option>
      <option value="NE">NE</option>
      <option value="NF">NF</option>
      <option value="NG">NG</option>
      <option value="NI">NI</option>
      <option value="NL">NL</option>
      <option value="NO">NO</option>
      <option value="NP">NP</option>
      <option value="NR">NR</option>
      <option value="NU">NU</option>
      <option value="NZ">NZ</option>
      <option value="OM">OM</option>
      <option value="PA">PA</option>
      <option value="PE">PE</option>
      <option value="PF">PF</option>
      <option value="PG">PG</option>
      <option value="PH">PH</option>
      <option value="PK">PK</option>
      <option value="PL">PL</option>
      <option value="PM">PM</option>
      <option value="PN">PN</option>
      <option value="PR">PR</option>
      <option value="PS">PS</option>
      <option value="PT">PT</option>
      <option value="PW">PW</option>
      <option value="PY">PY</option>
      <option value="QA">QA</option>
      <option value="RE">RE</option>
      <option value="RO">RO</option>
      <option value="RS">RS</option>
      <option value="RU">RU</option>
      <option value="RW">RW</option>
      <option value="SA">SA</option>
      <option value="SB">SB</option>
      <option value="SC">SC</option>
      <option value="SD">SD</option>
      <option value="SE">SE</option>
      <option value="SG">SG</option>
      <option value="SH">SH</option>
      <option value="SI">SI</option>
      <option value="SJ">SJ</option>
      <option value="SK">SK</option>
      <option value="SL">SL</option>
      <option value="SM">SM</option>
      <option value="SN">SN</option>
      <option value="SO">SO</option>
      <option value="SR">SR</option>
      <option value="SS">SS</option>
      <option value="ST">ST</option>
      <option value="SV">SV</option>
      <option value="SX">SX</option>
      <option value="SY">SY</option>
      <option value="SZ">SZ</option>
      <option value="TC">TC</option>
      <option value="TD">TD</option>
      <option value="TF">TF</option>
      <option value="TG">TG</option>
      <option value="TH">TH</option>
      <option value="TJ">TJ</option>
      <option value="TK">TK</option>
      <option value="TL">TL</option>
      <option value="TM">TM</option>
      <option value="TN">TN</option>
      <option value="TO">TO</option>
      <option value="TR">TR</option>
      <option value="TT">TT</option>
      <option value="TV">TV</option>
      <option value="TW">TW</option>
      <option value="TZ">TZ</option>
      <option value="UA">UA</option>
      <option value="UG">UG</option>
      <option value="UM">UM</option>
      <option value="US">US</option>
      <option value="UY">UY</option>
      <option value="UZ">UZ</option>
      <option value="VA">VA</option>
      <option value="VC">VC</option>
      <option value="VE">VE</option>
      <option value="VG">VG</option>
      <option value="VI">VI</option>
      <option value="VN">VN</option>
      <option value="VU">VU</option>
      <option value="WF">WF</option>
      <option value="WS">WS</option>
      <option value="YE">YE</option>
      <option value="YT">YT</option>
      <option value="ZA">ZA</option>
      <option value="ZM">ZM</option>
      <option value="ZW">ZW</option>
    </select>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendor Consents</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfeuv2-vendor-consents-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfeuv2-vendor-consents-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfeuv2-vendor-consents-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfeuv2-vendor-consents')" disabled>&gt;&gt;</button>
        <button id="tcfeuv2-vendor-consents-remove-button" cclass="btn btn-light" style="width:90%" onclick="removeVendors('tcfeuv2-vendor-consents')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfeuv2-vendor-consents-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfeuv2-vendor-consents-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendor Legitimate Interests</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfeuv2-vendor-legitimate-interests-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfeuv2-vendor-legitimate-interests-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfeuv2-vendor-legitimate-interests-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfeuv2-vendor-legitimate-interests')" disabled>&gt;&gt;</button>
        <button id="tcfeuv2-vendor-legitimate-interests-remove-button" class="btn btn-light" style="width:90%" onclick="removeVendors('tcfeuv2-vendor-legitimate-interests')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfeuv2-vendor-legitimate-interests-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfeuv2-vendor-legitimate-interests-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendors Allowed</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfeuv2-vendors-allowed-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfeuv2-vendors-allowed-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfeuv2-vendors-allowed-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfeuv2-vendors-allowed')" disabled>&gt;&gt;</button>
        <button id="tcfeuv2-vendors-allowed-remove-button" class="btn btn-light" style="width:90%" onclick="removeVendors('tcfeuv2-vendors-allowed')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfeuv2-vendors-allowed-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfeuv2-vendors-allowed-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendors Disclosed</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfeuv2-vendors-disclosed-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfeuv2-vendors-disclosed-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfeuv2-vendors-disclosed-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfeuv2-vendors-disclosed')" disabled>&gt;&gt;</button>
        <button id="tcfeuv2-vendors-disclosed-remove-button" class="btn btn-light" style="width:90%" onclick="removeVendors('tcfeuv2-vendors-disclosed')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfeuv2-vendors-disclosed-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfeuv2-vendors-disclosed-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <span id="tcfeuv2-publisher-restrictions-container" hidden="hidden">
    <div class="mb-0">
      <label class="form-label">Publisher Restrictions</label>
    </div>
    <div class="mb-3">
      <table class="table" id="tcfeuv2-publisher-restrictions-table">
        <thead>
          <th scope="col">Purpose ID</th>
          <th scope="col">Type</th>
          <th scope="col">Vendor Ids</th>
        </thead>
        <tbody id="tcfeuv2-publisher-restrictions-tbody">

        </tbody>
      </table>
    </div>
  </span>
`,_s=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="tcfcav1-included"
      onclick="disableTcfCaV1(!this.checked)"
    />
    <label class="form-check-label" for="tcfcav1-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-version" class="form-label">Version</label>
    <input type="text" id="tcfcav1-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label class="radio-inline control-label">Policy Version</label>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="tcfcav1-tcf-policy-version" id="tcfcav1-tcf-policy-version-2" value="2" onclick="tcfCaV1PolicyVersionChanged(2)" disabled checked>
      <label class="form-check-label" for="tcfcav1-tcf-policy-version-2">2</label>
    </div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-vendor-list-version" class="form-label">Vendor List Version</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfcav1-vendor-list-version"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="tcfcav1-vendor-list-version-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-created" class="form-label">Created</label>
    <input
      type="date"
      id="tcfcav1-created"
      class="form-control"
      disabled
    />
    <div id="tcfcav1-created-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-last-updated" class="form-label">Last Updated</label>
    <input
      type="date"
      id="tcfcav1-last-updated"
      class="form-control"
      disabled
    />
    <div id="tcfcav1-last-updated-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-cmp-id" class="form-label">CMP ID</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfcav1-cmp-id"
      class="form-control"
      placeholder="1000"
      value="1000"
      disabled
    />
    <div id="tcfcav1-cmp-id-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-cmp-version" class="form-label">CMP Version</label>
    <input
      type="number"
      min="0"
      max="4095"
      id="tcfcav1-cmp-version"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="tcfcav1-cmp-version-feedback" class="invalid-feedback">Valid values are 0-4095</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-consent-screen" class="form-label">Consent Screen</label>
    <input
      type="number"
      min="0"
      max="63"
      id="tcfcav1-consent-screen"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="tcfcav1-consent-screen-feedback" class="invalid-feedback">Valid values are 0-63</div>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-consent-language" class="form-label">Consent Language</label>
    <select id="tcfcav1-consent-language" class="form-select" disabled>
    </select>
  </div>
  <div class="mb-3">
    <input class="form-check-input" type="checkbox" value="" id="tcfcav1-use-non-standard-stacks" disabled />
    <label class="form-check-label" for="tcfcav1-use-non-standard-stacks">Publisher Uses Non-Standard Stacks</label>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-special-feature-express-consent" class="form-label">Special Feature Express Consent</label>
    <select id="tcfcav1-special-feature-express-consent" class="form-select" multiple disabled>
    </select>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-purposes-express-consent" class="form-label">Purposes Express Consents</label>
    <select id="tcfcav1-purposes-express-consent" class="form-select" size="11" multiple disabled>
    </select>
  </div>
  <div class="mb-3">
    <label for="tcfcav1-purposes-implied-consent" class="form-label">Purposes Implied Consents</label>
    <select id="tcfcav1-purposes-implied-consent" class="form-select" size="11" multiple disabled>
    </select>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendor Express Consent</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfcav1-vendor-express-consent-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfcav1-vendor-express-consent-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfcav1-vendor-express-consent-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfcav1-vendor-express-consent')" disabled>&gt;&gt;</button>
        <button id="tcfcav1-vendor-express-consent-remove-button" class="btn btn-light" style="width:90%" onclick="removeVendors('tcfcav1-vendor-express-consent')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfcav1-vendor-express-consent-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfcav1-vendor-express-consent-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <div class="mb-0">
    <label class="form-label">Vendor Implied Consent</label>
  </div>
  <div class="mb-3">
    <div class="row">
      <div class="col-5">
        <label for="tcfcav1-vendor-implied-consent-available" class="form-label" style="width:100%; text-align:center">Available</label>
        <select id="tcfcav1-vendor-implied-consent-available" class="form-select" size="20" multiple disabled>
        </select>
      </div>
      <div class="col-2 d-flex flex-column justify-content-center">
        <button id="tcfcav1-vendor-implied-consent-include-button" class="btn btn-light" style="width:90%" onclick="includeVendors('tcfcav1-vendor-implied-consent')" disabled>&gt;&gt;</button>
        <button id="tcfcav1-vendor-implied-consent-remove-button" class="btn btn-light" style="width:90%" onclick="removeVendors('tcfcav1-vendor-implied-consent')" disabled>&lt;&lt;</button>
      </div>
      <div class="col-5">
        <label for="tcfcav1-vendor-implied-consent-included" class="form-label float-right" style="width:100%; text-align:center">Included</label>
        <select id="tcfcav1-vendor-implied-consent-included" class="form-select" size="20" multiple disabled>
        </select>
      </div>
    </div>
  </div>
  <span id="tcfcav1-pub-restrictions-container" hidden="hidden">
    <div class="mb-0">
      <label class="form-label">Publisher Restrictions</label>
    </div>
    <div class="mb-3">
      <table class="table" id="tcfcav1-pub-restrictions-table">
        <thead>
          <th scope="col">Purpose ID</th>
          <th scope="col">Type</th>
          <th scope="col">Vendor Ids</th>
        </thead>
        <tbody id="tcfcav1-pub-restrictions-tbody">

        </tbody>
      </table>
    </div>
  </span>
`,ys=`  <div class="mt-3 mb-3">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="uspv1-included"
        onclick="disableUspV1(!this.checked)"
      />
      <label class="form-check-label" for="uspv1-included">Included</label>
    </div>
  </div>
  <div class="mb-3">
    <label for="uspv1-version" class="form-label">Version</label>
    <input type="number" id="uspv1-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="uspv1-notice" class="form-label">Notice</label>
    <select id="uspv1-notice" class="form-select" disabled>
      <option value="-">-</option>
      <option value="Y">Y</option>
      <option value="N">N</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="uspv1-opt-out-sale" class="form-label">Opt Out Sale</label>
    <select id="uspv1-opt-out-sale" class="form-select" disabled>
      <option value="-">-</option>
      <option value="Y">Y</option>
      <option value="N">N</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="uspv1-lspa-covered" class="form-label">LSPA Covered</label>
    <select id="uspv1-lspa-covered" class="form-select" disabled>
      <option value="-">-</option>
      <option value="Y">Y</option>
      <option value="N">N</option>
    </select>
  </div>
`,Vs=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usnat-included"
      onclick="disableusnat(!this.checked)"
    />
    <label class="form-check-label" for="usnat-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usnat-version" class="form-label">Version</label>
    <input type="number" id="usnat-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usnat-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-sharing-opt-out-notice" class="form-label">Sharing Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sharing-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sharing-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-sensitive-data-processing-opt-out-notice" class="form-label"
      >Sensitive Data Processing Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sensitive-data-processing-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sensitive-data-processing-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-sensitive-data-limit-use-notice" class="form-label"
      >Sensitive Data Limit Use Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sensitive-data-limit-use-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sensitive-data-limit-use-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-sharing-opt-out" class="form-label">Sharing Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-sharing-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-sharing-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-8"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-9"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-10"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-11"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-12"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-13"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-14"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-sensitive-data-processing-15"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnat-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnat-personal-data-consents" class="form-label">Personal Data Consents</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-personal-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-personal-data-consents-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usnat-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usnat-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnat-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnat-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnat-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnat-gpc-segment-included" checked disabled/>
    <label class="form-check-label" for="usnat-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnat-gpc" disabled />
    <label class="form-check-label" for="usnat-gpc">GPC Enabled</label>
  </div>
`,Ps=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usca-included"
      onclick="disableusca(!this.checked)"
    />
    <label class="form-check-label" for="usca-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usca-version" class="form-label">Version</label>
    <input type="text" id="usca-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usca-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-sharing-opt-out-notice" class="form-label">Sharing Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-sharing-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-sharing-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-sensitive-data-limit-use-notice" class="form-label"
      >Sensitive Data Limit Use Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usca-sensitive-data-limit-use-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-sensitive-data-limit-use-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usca-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-sharing-opt-out" class="form-label">Sharing Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-sharing-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-sharing-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-sensitive-data-processing-8"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usca-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usca-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usca-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usca-personal-data-consents" class="form-label">Personal Data Consents</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-personal-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-personal-data-consents-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usca-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usca-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usca-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usca-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usca-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usca-gpc-segment-included" checked disabled/>
    <label class="form-check-label" for="usca-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usca-gpc" disabled />
    <label class="form-check-label" for="usca-gpc">GPC Enabled</label>
  </div>
`,Cs=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usva-included"
      onclick="disableusva(!this.checked)"
    />
    <label class="form-check-label" for="usva-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usva-version" class="form-label">Version</label>
    <input type="text" id="usva-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usva-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usva-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usva-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usva-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usva-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usva-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usva-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usva-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usva-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usva-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usva-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usva-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usva-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usva-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usva-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usva-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usva-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usva-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usva-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usva-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usva-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usva-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
`,Ds=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usco-included"
      onclick="disableusco(!this.checked)"
    />
    <label class="form-check-label" for="usco-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usco-version" class="form-label">Version</label>
    <input type="text" id="usco-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usco-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usco-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usco-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usco-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usco-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usco-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usco-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usco-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usco-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usco-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usco-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usco-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usco-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usco-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usco-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usco-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usco-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usco-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usco-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usco-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usco-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usco-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usco-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usco-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usco-gpc" disabled />
    <label class="form-check-label" for="usco-gpc">GPC Enabled</label>
  </div>
`,ws=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usut-included"
      onclick="disableusut(!this.checked)"
    />
    <label class="form-check-label" for="usut-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usut-version" class="form-label">Version</label>
    <input type="text" id="usut-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usut-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usut-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usut-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usut-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usut-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usut-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usut-sensitive-data-processing-opt-out-notice" class="form-label"
      >Sensitive Data Processing Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usut-sensitive-data-processing-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-sensitive-data-processing-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usut-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usut-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usut-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usut-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usut-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usut-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usut-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usut-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usut-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usut-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usut-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usut-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usut-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usut-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usut-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usut-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
`,Ms=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usct-included"
      onclick="disableusct(!this.checked)"
    />
    <label class="form-check-label" for="usct-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usct-version" class="form-label">Version</label>
    <input type="text" id="usct-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usct-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usct-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usct-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usct-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usct-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usct-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usct-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usct-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usct-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usct-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usct-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usct-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usct-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usct-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usct-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usct-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usct-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usct-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usct-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usct-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usct-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usct-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usct-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usct-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usct-gpc" disabled />
    <label class="form-check-label" for="usct-gpc">GPC Enabled</label>
  </div>
`,ks=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usfl-included"
      onclick="disableusfl(!this.checked)"
    />
    <label class="form-check-label" for="usfl-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usfl-version" class="form-label">Version</label>
    <input type="text" id="usfl-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usfl-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usfl-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usfl-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usfl-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usfl-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usfl-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usfl-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usfl-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usfl-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usfl-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usfl-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usfl-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usfl-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
`,Rs=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usmt-included"
      onclick="disableusmt(!this.checked)"
    />
    <label class="form-check-label" for="usmt-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usmt-version" class="form-label">Version</label>
    <input type="text" id="usmt-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usmt-sharing-notice" class="form-label">Sharing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-sharing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-sharing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usmt-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usmt-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usmt-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usmt-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usmt-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usmt-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usmt-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usmt-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usmt-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usmt-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usmt-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usmt-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usmt-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usmt-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usmt-gpc" disabled />
    <label class="form-check-label" for="usmt-gpc">GPC Enabled</label>
  </div>
`,Gs=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usor-included"
      onclick="disableusor(!this.checked)"
    />
    <label class="form-check-label" for="usor-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usor-version" class="form-label">Version</label>
    <input type="text" id="usor-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usor-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usor-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usor-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usor-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usor-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usor-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usor-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usor-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-8"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-9"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-sensitive-data-processing-10"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usor-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usor-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usor-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usor-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usor-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usor-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usor-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usor-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usor-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usor-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usor-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usor-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usor-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usor-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usor-gpc" disabled />
    <label class="form-check-label" for="usor-gpc">GPC Enabled</label>
  </div>
`,xs=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="ustx-included"
      onclick="disableustx(!this.checked)"
    />
    <label class="form-check-label" for="ustx-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="ustx-version" class="form-label">Version</label>
    <input type="text" id="ustx-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="ustx-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustx-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustx-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustx-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="ustx-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustx-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="ustx-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="ustx-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="ustx-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="ustx-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustx-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustx-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustx-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="ustx-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="ustx-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="ustx-gpc" disabled />
    <label class="form-check-label" for="ustx-gpc">GPC Enabled</label>
  </div>
`,Bs=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usde-included"
      onclick="disableusde(!this.checked)"
    />
    <label class="form-check-label" for="usde-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usde-version" class="form-label">Version</label>
    <input type="text" id="usde-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usde-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usde-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usde-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usde-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usde-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usde-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usde-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usde-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-sensitive-data-processing-8"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usde-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usde-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-known-child-sensitive-data-consents-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usde-known-child-sensitive-data-consents-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usde-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usde-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usde-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usde-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usde-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usde-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usde-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usde-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usde-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usde-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usde-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usde-gpc" disabled />
    <label class="form-check-label" for="usde-gpc">GPC Enabled</label>
  </div>
`,Ls=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usia-included"
      onclick="disableusia(!this.checked)"
    />
    <label class="form-check-label" for="usia-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usia-version" class="form-label">Version</label>
    <input type="text" id="usia-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usia-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usia-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usia-sensitive-data-opt-out-notice" class="form-label">Sensitive Data Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-sensitive-data-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-sensitive-data-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usia-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usia-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usia-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usia-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usia-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usia-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usia-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usia-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usia-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usia-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usia-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usia-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usia-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usia-gpc" disabled />
    <label class="form-check-label" for="usia-gpc">GPC Enabled</label>
  </div>
`,Fs=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usne-included"
      onclick="disableusne(!this.checked)"
    />
    <label class="form-check-label" for="usne-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usne-version" class="form-label">Version</label>
    <input type="text" id="usne-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usne-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usne-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usne-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usne-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usne-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usne-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usne-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usne-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usne-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usne-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usne-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usne-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usne-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usne-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usne-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usne-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usne-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usne-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usne-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usne-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usne-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usne-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usne-gpc" disabled />
    <label class="form-check-label" for="usne-gpc">GPC Enabled</label>
  </div>
`,Us=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usnh-included"
      onclick="disableusnh(!this.checked)"
    />
    <label class="form-check-label" for="usnh-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usnh-version" class="form-label">Version</label>
    <input type="text" id="usnh-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usnh-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnh-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnh-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnh-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnh-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnh-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usnh-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usnh-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usnh-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usnh-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnh-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnh-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnh-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnh-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usnh-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnh-gpc" disabled />
    <label class="form-check-label" for="usnh-gpc">GPC Enabled</label>
  </div>
`,js=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="usnj-included"
      onclick="disableusnj(!this.checked)"
    />
    <label class="form-check-label" for="usnj-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="usnj-version" class="form-label">Version</label>
    <input type="text" id="usnj-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="usnj-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnj-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="usnj-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-8"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-sensitive-data-processing-9"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnj-known-child-sensitive-data-consents-0" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-known-child-sensitive-data-consents-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-known-child-sensitive-data-consents-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-known-child-sensitive-data-consents-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-known-child-sensitive-data-consents-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="usnj-known-child-sensitive-data-consents-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="usnj-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="usnj-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="usnj-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="usnj-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="usnj-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="usnj-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="usnj-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="usnj-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnj-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="usnj-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="usnj-gpc" disabled />
    <label class="form-check-label" for="usnj-gpc">GPC Enabled</label>
  </div>
`,Hs=`  <div class="mt-3 mb-3 form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="ustn-included"
      onclick="disableustn(!this.checked)"
    />
    <label class="form-check-label" for="ustn-included">Included</label>
  </div>
  <div class="mb-3">
    <label for="ustn-version" class="form-label">Version</label>
    <input type="text" id="ustn-version" class="form-control" placeholder="1" value="1" disabled />
  </div>
  <div class="mb-3">
    <label for="ustn-processing-notice" class="form-label">Processing Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-processing-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-sale-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-targeted-advertising-opt-out-notice" class="form-label"
      >Targeted Advertising Opt Out Notice</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-targeted-advertising-opt-out-notice"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustn-sale-opt-out" class="form-label">Sale Opt Out</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-sale-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-targeted-advertising-opt-out" class="form-label"
      >Targeted Advertising Opt Out</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-targeted-advertising-opt-out"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-targeted-advertising-opt-out-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustn-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
    <div class="input-group">
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-0"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-1"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-2"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-3"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-4"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-5"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-6"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
      <input
        type="number"
        min="0"
        max="2"
        id="ustn-sensitive-data-processing-7"
        class="form-control"
        placeholder="0"
        value="0"
        disabled
      />
    </div>
  </div>
  <div class="mb-3">
    <label for="ustn-known-child-sensitive-data-consents" class="form-label"
      >Known Child Sensitive Data Consents</label
    >
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-known-child-sensitive-data-consents"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3">
    <label for="ustn-additional-data-processing-consent" class="form-label">Additional Data Processing Consent</label>
    <input type="number" min="0" max="2" id="ustn-additional-data-processing-consent" class="form-control" placeholder="0" value="0" disabled />
    <div id="ustn-additional-data-processing-consent-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
    <input
      type="number"
      min="1"
      max="2"
      id="ustn-mspa-covered-transaction"
      class="form-control"
      placeholder="1"
      value="1"
      disabled
    />
    <div id="ustn-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-mspa-opt-out-option-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
  </div>
  <div class="mb-3">
    <label for="ustn-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
    <input
      type="number"
      min="0"
      max="2"
      id="ustn-mspa-service-provider-mode"
      class="form-control"
      placeholder="0"
      value="0"
      disabled
    />
    <div id="ustn-mspa-service-provider-mode-feedback" class="invalid-feedback">
      Valid values are 0-2
    </div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="ustn-gpc-segment-included" checked disabled />
    <label class="form-check-label" for="ustn-gpc-segment-included">GPC Segment Included</label>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="ustn-gpc" disabled />
    <label class="form-check-label" for="ustn-gpc">GPC Enabled</label>
  </div>
`,Ks=`<div class="mt-3 mb-3 form-check">
  <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="usmn-included"
    onclick="disableusmn(!this.checked)"
  />
  <label class="form-check-label" for="usmn-included">Included</label>
</div>
<div class="mb-3">
  <label for="usmn-version" class="form-label">Version</label>
  <input type="text" id="usmn-version" class="form-control" placeholder="1" value="1" disabled />
</div>
<div class="mb-3">
  <label for="usmn-processing-notice" class="form-label">Processing Notice</label>
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-processing-notice"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-processing-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
</div>
<div class="mb-3">
  <label for="usmn-sale-opt-out-notice" class="form-label">Sale Opt Out Notice</label>
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-sale-opt-out-notice"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-sale-opt-out-notice-feedback" class="invalid-feedback">Valid values are 0-2</div>
</div>
<div class="mb-3">
  <label for="usmn-targeted-advertising-opt-out-notice" class="form-label"
    >Targeted Advertising Opt Out Notice</label
  >
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-targeted-advertising-opt-out-notice"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-targeted-advertising-opt-out-notice-feedback" class="invalid-feedback">
    Valid values are 0-2
  </div>
</div>
<div class="mb-3">
  <label for="usmn-sale-opt-out" class="form-label">Sale Opt Out</label>
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-sale-opt-out"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-sale-opt-out-feedback" class="invalid-feedback">Valid values are 0-2</div>
</div>
<div class="mb-3">
  <label for="usmn-targeted-advertising-opt-out" class="form-label"
    >Targeted Advertising Opt Out</label
  >
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-targeted-advertising-opt-out"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-targeted-advertising-opt-out-feedback" class="invalid-feedback">
    Valid values are 0-2
  </div>
</div>
<div class="mb-3">
  <label for="usmn-sensitive-data-processing-0" class="form-label">Sensitive Data Processing</label>
  <div class="input-group">
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-0" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-1" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-2" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-3" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-4" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-5" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-6" class="form-control" placeholder="0" value="0" disabled />
    <input type="number" min="0" max="2" id="usmn-sensitive-data-processing-7" class="form-control" placeholder="0" value="0" disabled />
  </div>
</div>
<div class="mb-3">
  <label for="usmn-known-child-sensitive-data-consents" class="form-label"
    >Known Child Sensitive Data Consents</label
  >
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-known-child-sensitive-data-consents"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-known-child-sensitive-data-consents-feedback" class="invalid-feedback">
    Valid values are 0-2
  </div>
</div>
<div class="mb-3">
  <label for="usmn-additional-data-processing-consent" class="form-label"
    >Additional Data Processing Consent</label
  >
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-additional-data-processing-consent"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-additional-data-processing-consent-feedback" class="invalid-feedback">
    Valid values are 0-2
  </div>
</div>
<div class="mb-3">
  <label for="usmn-mspa-covered-transaction" class="form-label">MSPA Covered Transaction</label>
  <input
    type="number"
    min="1"
    max="2"
    id="usmn-mspa-covered-transaction"
    class="form-control"
    placeholder="1"
    value="1"
    disabled
  />
  <div id="usmn-mspa-covered-transaction-feedback" class="invalid-feedback">Valid values are 1-2</div>
</div>
<div class="mb-3">
  <label for="usmn-mspa-opt-out-option-mode" class="form-label">MSPA Opt Out Option Mode</label>
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-mspa-opt-out-option-mode"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-mspa-opt-out-option-mode-feedback" class="invalid-feedback">Valid values are 0-2</div>
</div>
<div class="mb-3">
  <label for="usmn-mspa-service-provider-mode" class="form-label">MSPA Service Provider Mode</label>
  <input
    type="number"
    min="0"
    max="2"
    id="usmn-mspa-service-provider-mode"
    class="form-control"
    placeholder="0"
    value="0"
    disabled
  />
  <div id="usmn-mspa-service-provider-mode-feedback" class="invalid-feedback">
    Valid values are 0-2
  </div>
</div>
<div class="mb-3 form-check">
  <input class="form-check-input" type="checkbox" value="" id="usmn-gpc-segment-included" checked disabled />
  <label class="form-check-label" for="usmn-gpc-segment-included">GPC Segment Included</label>
</div>
<div class="mb-3 form-check">
  <input class="form-check-input" type="checkbox" value="" id="usmn-gpc" disabled />
  <label class="form-check-label" for="usmn-gpc">GPC Enabled</label>
</div>
`;function zs(n,t,e){let s=[],i=document.getElementById(n),a=i.value,o=parseInt(i.min),d=parseInt(i.max);return isNaN(a)?(s.push(n),i.classList.contains("is-invalid")||i.classList.add("is-invalid")):(a=parseInt(a),a>=o&&a<=d?(cmpApi.setFieldValue(t,e,a),i.classList.contains("is-invalid")&&i.classList.remove("is-invalid")):(s.push(n),i.classList.contains("is-invalid")||i.classList.add("is-invalid"))),s}function Ys(n,t,e){let s=[],i=[];for(let a=0;a<n.length;a++){let o=n[a],d=document.getElementById(o),r=d.value,E=parseInt(d.min),p=parseInt(d.max);isNaN(r)?(s.push(o),d.classList.contains("is-invalid")||d.classList.add("is-invalid")):(r=parseInt(r),r>=E&&r<=p?(i.push(r),d.classList.contains("is-invalid")&&d.classList.remove("is-invalid")):(s.push(o),d.classList.contains("is-invalid")||d.classList.add("is-invalid")))}return s.length==0&&cmpApi.setFieldValue(t,e,i),s}function Ws(n,t,e){let s=[],a=document.getElementById(n).valueAsDate;return cmpApi.setFieldValue(t,e,a),s}function $s(n,t,e){let s=[],i=document.getElementById(n),a=parseInt(i.value);return cmpApi.setFieldValue(t,e,a),s}function Js(n,t,e){let s=[],a=document.getElementById(n).value;return cmpApi.setFieldValue(t,e,a),s}function Qs(n,t,e){let s=[],i=Array.from(document.getElementById(n).options).map(({value:a})=>parseInt(a));return cmpApi.setFieldValue(t,e,i),s}function Zs(n,t,e){let s=[],i=[],a=document.getElementById(n);for(let o=0;o<a.length;o++){let d=a[o];i.push(d.selected)}return cmpApi.setFieldValue(t,e,i),s}function Xs(n,t,e){let s=[],a=document.getElementById(n).checked;return cmpApi.setFieldValue(t,e,a),s}function qs(n,t,e){let s=[],i=0;for(let a=0;a<n.length;a++){let o=n[a],d=document.getElementById(o);d.checked&&(i=parseInt(d.value))}return cmpApi.setFieldValue(t,e,i),s}window.processNumericInput=zs;window.processNumericInputs=Ys;window.processDateInput=Ws;window.processNumericSelect=$s;window.processStringSelect=Js;window.processMultipleNumericIncludedSelect=Qs;window.processBitfieldSelect=Zs;window.processCheckbox=Xs;window.processNumericRadio=qs;function ei(n){let t=document.getElementById(n+"-available"),e=document.getElementById(n+"-included"),s=[],i=[];for(let a=0;a<t.options.length;a++)t.options[a].selected===!0&&(s.push(a),i.push({label:t.options[a].innerHTML,value:t.options[a].value}));for(let a=0;a<e.options.length;a++)i.push({label:e.options[a].innerHTML,value:e.options[a].value});i.sort(function(a,o){return a.value-o.value});for(let a=0;a<i.length;a++)e.options[a]=new Option(i[a].label,i[a].value);for(let a=s.length-1;a>=0;a--)t.remove(s[a])}function ti(n){let t=document.getElementById(n+"-available"),e=document.getElementById(n+"-included"),s=[],i=[];for(let a=0;a<t.options.length;a++)s.push(a),i.push({label:t.options[a].innerHTML,value:t.options[a].value});for(let a=0;a<e.options.length;a++)i.push({label:e.options[a].innerHTML,value:e.options[a].value});i.sort(function(a,o){return a.value-o.value});for(let a=0;a<i.length;a++)e.options[a]=new Option(i[a].label,i[a].value);for(let a=s.length-1;a>=0;a--)t.remove(s[a])}function ni(n){let t=document.getElementById(n+"-available"),e=document.getElementById(n+"-included"),s=[],i=[];for(let a=0;a<e.options.length;a++)e.options[a].selected===!0&&(s.push(a),i.push({label:e.options[a].innerHTML,value:e.options[a].value}));for(let a=0;a<t.options.length;a++)i.push({label:t.options[a].innerHTML,value:t.options[a].value});i.sort(function(a,o){return a.value-o.value});for(let a=0;a<i.length;a++)t.options[a]=new Option(i[a].label,i[a].value);for(let a=s.length-1;a>=0;a--)e.remove(s[a])}function si(n){let t=document.getElementById(n+"-available"),e=document.getElementById(n+"-included"),s=[],i=[];for(let a=0;a<e.options.length;a++)s.push(a),i.push({label:e.options[a].innerHTML,value:e.options[a].value});for(let a=0;a<t.options.length;a++)i.push({label:t.options[a].innerHTML,value:t.options[a].value});i.sort(function(a,o){return a.value-o.value});for(let a=0;a<i.length;a++)t.options[a]=new Option(i[a].label,i[a].value);for(let a=s.length-1;a>=0;a--)e.remove(s[a])}window.includeVendors=ei;window.includeAllVendors=ti;window.removeVendors=ni;window.removeAllVendors=si;function ii(n){let t=document.getElementById("tcfeuv2-vendor-list-version"),e=[document.getElementById("tcfeuv2-vendor-consents-available"),document.getElementById("tcfeuv2-vendor-legitimate-interests-available"),document.getElementById("tcfeuv2-vendors-allowed-available"),document.getElementById("tcfeuv2-vendors-disclosed-available")],s=[document.getElementById("tcfeuv2-vendor-consents-included"),document.getElementById("tcfeuv2-vendor-legitimate-interests-included"),document.getElementById("tcfeuv2-vendors-allowed-included"),document.getElementById("tcfeuv2-vendors-disclosed-included")],i=[document.getElementById("tcfeuv2-purpose-consents"),document.getElementById("tcfeuv2-purpose-legitimate-interests")],a=[document.getElementById("tcfeuv2-special-feature-optins")];n===2?dt(gvlV2,t,e,s,i,a):n===4&&dt(gvlV3,t,e,s,i,a)}function ai(n){let t=document.getElementById("tcfcav1-vendor-list-version"),e=[document.getElementById("tcfcav1-vendor-express-consent-available"),document.getElementById("tcfcav1-vendor-implied-consent-available")],s=[document.getElementById("tcfcav1-vendor-express-consent-included"),document.getElementById("tcfcav1-vendor-implied-consent-included")],i=[document.getElementById("tcfcav1-purposes-express-consent"),document.getElementById("tcfcav1-purposes-implied-consent")],a=[document.getElementById("tcfcav1-special-feature-express-consent")];n===2&&dt(gvlV2Ca,t,e,s,i,a)}function dt(n,t,e,s,i,a){t.value=n.vendorListVersion;for(let E=0;E<s.length;E++){let p=s[E];for(let v=p.options.length-1;v>=0;v--)p.remove(v)}let o=Object.values(n.vendors);for(let E=0;E<e.length;E++){let p=e[E];for(let v=0;v<o.length;v++){let u=o[v];p.options[v]=new Option("["+u.id+"] "+u.name,u.id)}for(let v=p.options.length-1;v>=o.length;v--)p.remove(v)}let d=Object.values(n.purposes);for(let E=0;E<i.length;E++){let p=i[E];for(let v=0;v<d.length;v++){let u=d[v];p.options[v]=new Option("["+u.id+"] "+u.name,u.id)}for(let v=p.options.length-1;v>=d.length;v--)p.remove(v)}let r=Object.values(n.specialFeatures);for(let E=0;E<a.length;E++){let p=a[E];for(let v=0;v<r.length;v++){let u=r[v];p.options[v]=new Option("["+u.id+"] "+u.name,u.id)}for(let v=p.options.length-1;v>=r.length;v--)p.remove(v)}}window.tcfEuV2PolicyVersionChanged=ii;window.tcfCaV1PolicyVersionChanged=ai;window.updateGvlRelatedElements=dt;function z(n,t){for(let e=0;e<n.length;e++)document.getElementById(n[e]).disabled=t}function oi(n){document.getElementById("header-tcfeuv2").checked=!n,document.getElementById("tcfeuv2-included").checked=!n,z(["tcfeuv2-created","tcfeuv2-last-updated","tcfeuv2-cmp-id","tcfeuv2-cmp-version","tcfeuv2-consent-screen","tcfeuv2-consent-language","tcfeuv2-vendor-list-version","tcfeuv2-policy-version-2","tcfeuv2-policy-version-4","tcfeuv2-is-service-specific","tcfeuv2-use-non-standard-stacks","tcfeuv2-special-feature-optins","tcfeuv2-purpose-consents","tcfeuv2-purpose-legitimate-interests","tcfeuv2-purpose-one-treatment","tcfeuv2-publisher-country-code","tcfeuv2-vendor-consents-available","tcfeuv2-vendor-consents-included","tcfeuv2-vendor-consents-include-button","tcfeuv2-vendor-consents-remove-button","tcfeuv2-vendor-legitimate-interests-available","tcfeuv2-vendor-legitimate-interests-included","tcfeuv2-vendor-legitimate-interests-include-button","tcfeuv2-vendor-legitimate-interests-remove-button","tcfeuv2-vendors-allowed-available","tcfeuv2-vendors-allowed-included","tcfeuv2-vendors-allowed-include-button","tcfeuv2-vendors-allowed-remove-button","tcfeuv2-vendors-disclosed-available","tcfeuv2-vendors-disclosed-included","tcfeuv2-vendors-disclosed-include-button","tcfeuv2-vendors-disclosed-remove-button"],n)}function li(n){document.getElementById("header-tcfcav1").checked=!n,document.getElementById("tcfcav1-included").checked=!n,z(["tcfcav1-created","tcfcav1-last-updated","tcfcav1-cmp-id","tcfcav1-cmp-version","tcfcav1-consent-screen","tcfcav1-consent-language","tcfcav1-vendor-list-version","tcfcav1-tcf-policy-version-2","tcfcav1-use-non-standard-stacks","tcfcav1-special-feature-express-consent","tcfcav1-purposes-express-consent","tcfcav1-purposes-implied-consent","tcfcav1-vendor-express-consent-available","tcfcav1-vendor-express-consent-included","tcfcav1-vendor-express-consent-include-button","tcfcav1-vendor-express-consent-remove-button","tcfcav1-vendor-implied-consent-available","tcfcav1-vendor-implied-consent-included","tcfcav1-vendor-implied-consent-include-button","tcfcav1-vendor-implied-consent-remove-button"],n)}function ci(n){document.getElementById("header-uspv1").checked=!n,document.getElementById("uspv1-included").checked=!n,z(["uspv1-notice","uspv1-opt-out-sale","uspv1-lspa-covered"],n)}function di(n){document.getElementById("header-usnat").checked=!n,document.getElementById("usnat-included").checked=!n,z(["usnat-sharing-notice","usnat-sale-opt-out-notice","usnat-sharing-opt-out-notice","usnat-targeted-advertising-opt-out-notice","usnat-sensitive-data-processing-opt-out-notice","usnat-sensitive-data-limit-use-notice","usnat-sale-opt-out","usnat-sharing-opt-out","usnat-targeted-advertising-opt-out","usnat-sensitive-data-processing-0","usnat-sensitive-data-processing-1","usnat-sensitive-data-processing-2","usnat-sensitive-data-processing-3","usnat-sensitive-data-processing-4","usnat-sensitive-data-processing-5","usnat-sensitive-data-processing-6","usnat-sensitive-data-processing-7","usnat-sensitive-data-processing-8","usnat-sensitive-data-processing-9","usnat-sensitive-data-processing-10","usnat-sensitive-data-processing-11","usnat-sensitive-data-processing-12","usnat-sensitive-data-processing-13","usnat-sensitive-data-processing-14","usnat-sensitive-data-processing-15","usnat-known-child-sensitive-data-consents-0","usnat-known-child-sensitive-data-consents-1","usnat-known-child-sensitive-data-consents-2","usnat-personal-data-consents","usnat-mspa-covered-transaction","usnat-mspa-opt-out-option-mode","usnat-mspa-service-provider-mode","usnat-gpc-segment-included","usnat-gpc"],n)}function ri(n){document.getElementById("header-usca").checked=!n,document.getElementById("usca-included").checked=!n,z(["usca-sale-opt-out-notice","usca-sharing-opt-out-notice","usca-sensitive-data-limit-use-notice","usca-sale-opt-out","usca-sharing-opt-out","usca-sensitive-data-processing-0","usca-sensitive-data-processing-1","usca-sensitive-data-processing-2","usca-sensitive-data-processing-3","usca-sensitive-data-processing-4","usca-sensitive-data-processing-5","usca-sensitive-data-processing-6","usca-sensitive-data-processing-7","usca-sensitive-data-processing-8","usca-known-child-sensitive-data-consents-0","usca-known-child-sensitive-data-consents-1","usca-personal-data-consents","usca-mspa-covered-transaction","usca-mspa-opt-out-option-mode","usca-mspa-service-provider-mode","usca-gpc-segment-included","usca-gpc"],n)}function ui(n){document.getElementById("header-usva").checked=!n,document.getElementById("usva-included").checked=!n,z(["usva-sharing-notice","usva-sale-opt-out-notice","usva-targeted-advertising-opt-out-notice","usva-sale-opt-out","usva-targeted-advertising-opt-out","usva-sensitive-data-processing-0","usva-sensitive-data-processing-1","usva-sensitive-data-processing-2","usva-sensitive-data-processing-3","usva-sensitive-data-processing-4","usva-sensitive-data-processing-5","usva-sensitive-data-processing-6","usva-sensitive-data-processing-7","usva-known-child-sensitive-data-consents","usva-mspa-covered-transaction","usva-mspa-opt-out-option-mode","usva-mspa-service-provider-mode"],n)}function pi(n){document.getElementById("header-usco").checked=!n,document.getElementById("usco-included").checked=!n,z(["usco-sharing-notice","usco-sale-opt-out-notice","usco-targeted-advertising-opt-out-notice","usco-sale-opt-out","usco-targeted-advertising-opt-out","usco-sensitive-data-processing-0","usco-sensitive-data-processing-1","usco-sensitive-data-processing-2","usco-sensitive-data-processing-3","usco-sensitive-data-processing-4","usco-sensitive-data-processing-5","usco-sensitive-data-processing-6","usco-known-child-sensitive-data-consents","usco-mspa-covered-transaction","usco-mspa-opt-out-option-mode","usco-mspa-service-provider-mode","usco-gpc-segment-included","usco-gpc"],n)}function mi(n){document.getElementById("header-usut").checked=!n,document.getElementById("usut-included").checked=!n,z(["usut-sharing-notice","usut-sale-opt-out-notice","usut-targeted-advertising-opt-out-notice","usut-sensitive-data-processing-opt-out-notice","usut-sale-opt-out","usut-targeted-advertising-opt-out","usut-sensitive-data-processing-0","usut-sensitive-data-processing-1","usut-sensitive-data-processing-2","usut-sensitive-data-processing-3","usut-sensitive-data-processing-4","usut-sensitive-data-processing-5","usut-sensitive-data-processing-6","usut-sensitive-data-processing-7","usut-known-child-sensitive-data-consents","usut-mspa-covered-transaction","usut-mspa-opt-out-option-mode","usut-mspa-service-provider-mode"],n)}function vi(n){document.getElementById("header-usct").checked=!n,document.getElementById("usct-included").checked=!n,z(["usct-sharing-notice","usct-sale-opt-out-notice","usct-targeted-advertising-opt-out-notice","usct-sale-opt-out","usct-targeted-advertising-opt-out","usct-sensitive-data-processing-0","usct-sensitive-data-processing-1","usct-sensitive-data-processing-2","usct-sensitive-data-processing-3","usct-sensitive-data-processing-4","usct-sensitive-data-processing-5","usct-sensitive-data-processing-6","usct-sensitive-data-processing-7","usct-known-child-sensitive-data-consents-0","usct-known-child-sensitive-data-consents-1","usct-known-child-sensitive-data-consents-2","usct-mspa-covered-transaction","usct-mspa-opt-out-option-mode","usct-mspa-service-provider-mode","usct-gpc-segment-included","usct-gpc"],n)}function gi(n){document.getElementById("header-usfl").checked=!n,document.getElementById("usfl-included").checked=!n,z(["usfl-processing-notice","usfl-sale-opt-out-notice","usfl-targeted-advertising-opt-out-notice","usfl-sale-opt-out","usfl-targeted-advertising-opt-out","usfl-sensitive-data-processing-0","usfl-sensitive-data-processing-1","usfl-sensitive-data-processing-2","usfl-sensitive-data-processing-3","usfl-sensitive-data-processing-4","usfl-sensitive-data-processing-5","usfl-sensitive-data-processing-6","usfl-sensitive-data-processing-7","usfl-known-child-sensitive-data-consents-0","usfl-known-child-sensitive-data-consents-1","usfl-known-child-sensitive-data-consents-2","usfl-additional-data-processing-consent","usfl-mspa-covered-transaction","usfl-mspa-opt-out-option-mode","usfl-mspa-service-provider-mode"],n)}function hi(n){document.getElementById("header-usmt").checked=!n,document.getElementById("usmt-included").checked=!n,z(["usmt-sharing-notice","usmt-sale-opt-out-notice","usmt-targeted-advertising-opt-out-notice","usmt-sale-opt-out","usmt-targeted-advertising-opt-out","usmt-sensitive-data-processing-0","usmt-sensitive-data-processing-1","usmt-sensitive-data-processing-2","usmt-sensitive-data-processing-3","usmt-sensitive-data-processing-4","usmt-sensitive-data-processing-5","usmt-sensitive-data-processing-6","usmt-sensitive-data-processing-7","usmt-known-child-sensitive-data-consents-0","usmt-known-child-sensitive-data-consents-1","usmt-known-child-sensitive-data-consents-2","usmt-additional-data-processing-consent","usmt-mspa-covered-transaction","usmt-mspa-opt-out-option-mode","usmt-mspa-service-provider-mode","usmt-gpc-segment-included","usmt-gpc"],n)}function Ei(n){document.getElementById("header-usor").checked=!n,document.getElementById("usor-included").checked=!n,z(["usor-processing-notice","usor-sale-opt-out-notice","usor-targeted-advertising-opt-out-notice","usor-sale-opt-out","usor-targeted-advertising-opt-out","usor-sensitive-data-processing-0","usor-sensitive-data-processing-1","usor-sensitive-data-processing-2","usor-sensitive-data-processing-3","usor-sensitive-data-processing-4","usor-sensitive-data-processing-5","usor-sensitive-data-processing-6","usor-sensitive-data-processing-7","usor-sensitive-data-processing-8","usor-sensitive-data-processing-9","usor-sensitive-data-processing-10","usor-known-child-sensitive-data-consents-0","usor-known-child-sensitive-data-consents-1","usor-known-child-sensitive-data-consents-2","usor-additional-data-processing-consent","usor-mspa-covered-transaction","usor-mspa-opt-out-option-mode","usor-mspa-service-provider-mode","usor-gpc-segment-included","usor-gpc"],n)}function Si(n){document.getElementById("header-ustx").checked=!n,document.getElementById("ustx-included").checked=!n,z(["ustx-processing-notice","ustx-sale-opt-out-notice","ustx-targeted-advertising-opt-out-notice","ustx-sale-opt-out","ustx-targeted-advertising-opt-out","ustx-sensitive-data-processing-0","ustx-sensitive-data-processing-1","ustx-sensitive-data-processing-2","ustx-sensitive-data-processing-3","ustx-sensitive-data-processing-4","ustx-sensitive-data-processing-5","ustx-sensitive-data-processing-6","ustx-sensitive-data-processing-7","ustx-known-child-sensitive-data-consents","ustx-additional-data-processing-consent","ustx-mspa-covered-transaction","ustx-mspa-opt-out-option-mode","ustx-mspa-service-provider-mode","ustx-gpc-segment-included","ustx-gpc"],n)}function bi(n){document.getElementById("header-usde").checked=!n,document.getElementById("usde-included").checked=!n,z(["usde-processing-notice","usde-sale-opt-out-notice","usde-targeted-advertising-opt-out-notice","usde-sale-opt-out","usde-targeted-advertising-opt-out","usde-sensitive-data-processing-0","usde-sensitive-data-processing-1","usde-sensitive-data-processing-2","usde-sensitive-data-processing-3","usde-sensitive-data-processing-4","usde-sensitive-data-processing-5","usde-sensitive-data-processing-6","usde-sensitive-data-processing-7","usde-sensitive-data-processing-8","usde-known-child-sensitive-data-consents-0","usde-known-child-sensitive-data-consents-1","usde-known-child-sensitive-data-consents-2","usde-known-child-sensitive-data-consents-3","usde-known-child-sensitive-data-consents-4","usde-additional-data-processing-consent","usde-mspa-covered-transaction","usde-mspa-opt-out-option-mode","usde-mspa-service-provider-mode","usde-gpc-segment-included","usde-gpc"],n)}function fi(n){document.getElementById("header-usia").checked=!n,document.getElementById("usia-included").checked=!n,z(["usia-processing-notice","usia-sale-opt-out-notice","usia-targeted-advertising-opt-out-notice","usia-sensitive-data-opt-out-notice","usia-sale-opt-out","usia-targeted-advertising-opt-out","usia-sensitive-data-processing-0","usia-sensitive-data-processing-1","usia-sensitive-data-processing-2","usia-sensitive-data-processing-3","usia-sensitive-data-processing-4","usia-sensitive-data-processing-5","usia-sensitive-data-processing-6","usia-sensitive-data-processing-7","usia-known-child-sensitive-data-consents","usia-mspa-covered-transaction","usia-mspa-opt-out-option-mode","usia-mspa-service-provider-mode","usia-gpc-segment-included","usia-gpc"],n)}function Ii(n){document.getElementById("header-usne").checked=!n,document.getElementById("usne-included").checked=!n,z(["usne-processing-notice","usne-sale-opt-out-notice","usne-targeted-advertising-opt-out-notice","usne-sale-opt-out","usne-targeted-advertising-opt-out","usne-sensitive-data-processing-0","usne-sensitive-data-processing-1","usne-sensitive-data-processing-2","usne-sensitive-data-processing-3","usne-sensitive-data-processing-4","usne-sensitive-data-processing-5","usne-sensitive-data-processing-6","usne-sensitive-data-processing-7","usne-known-child-sensitive-data-consents","usne-additional-data-processing-consent","usne-mspa-covered-transaction","usne-mspa-opt-out-option-mode","usne-mspa-service-provider-mode","usne-gpc-segment-included","usne-gpc"],n)}function Oi(n){document.getElementById("header-usnh").checked=!n,document.getElementById("usnh-included").checked=!n,z(["usnh-processing-notice","usnh-sale-opt-out-notice","usnh-targeted-advertising-opt-out-notice","usnh-sale-opt-out","usnh-targeted-advertising-opt-out","usnh-sensitive-data-processing-0","usnh-sensitive-data-processing-1","usnh-sensitive-data-processing-2","usnh-sensitive-data-processing-3","usnh-sensitive-data-processing-4","usnh-sensitive-data-processing-5","usnh-sensitive-data-processing-6","usnh-sensitive-data-processing-7","usnh-known-child-sensitive-data-consents-0","usnh-known-child-sensitive-data-consents-1","usnh-known-child-sensitive-data-consents-2","usnh-additional-data-processing-consent","usnh-mspa-covered-transaction","usnh-mspa-opt-out-option-mode","usnh-mspa-service-provider-mode","usnh-gpc-segment-included","usnh-gpc"],n)}function Ai(n){document.getElementById("header-usnj").checked=!n,document.getElementById("usnj-included").checked=!n,z(["usnj-processing-notice","usnj-sale-opt-out-notice","usnj-targeted-advertising-opt-out-notice","usnj-sale-opt-out","usnj-targeted-advertising-opt-out","usnj-sensitive-data-processing-0","usnj-sensitive-data-processing-1","usnj-sensitive-data-processing-2","usnj-sensitive-data-processing-3","usnj-sensitive-data-processing-4","usnj-sensitive-data-processing-5","usnj-sensitive-data-processing-6","usnj-sensitive-data-processing-7","usnj-sensitive-data-processing-8","usnj-sensitive-data-processing-9","usnj-known-child-sensitive-data-consents-0","usnj-known-child-sensitive-data-consents-1","usnj-known-child-sensitive-data-consents-2","usnj-known-child-sensitive-data-consents-3","usnj-known-child-sensitive-data-consents-4","usnj-additional-data-processing-consent","usnj-mspa-covered-transaction","usnj-mspa-opt-out-option-mode","usnj-mspa-service-provider-mode","usnj-gpc-segment-included","usnj-gpc"],n)}function Ni(n){document.getElementById("header-ustn").checked=!n,document.getElementById("ustn-included").checked=!n,z(["ustn-processing-notice","ustn-sale-opt-out-notice","ustn-targeted-advertising-opt-out-notice","ustn-sale-opt-out","ustn-targeted-advertising-opt-out","ustn-sensitive-data-processing-0","ustn-sensitive-data-processing-1","ustn-sensitive-data-processing-2","ustn-sensitive-data-processing-3","ustn-sensitive-data-processing-4","ustn-sensitive-data-processing-5","ustn-sensitive-data-processing-6","ustn-sensitive-data-processing-7","ustn-known-child-sensitive-data-consents","ustn-additional-data-processing-consent","ustn-mspa-covered-transaction","ustn-mspa-opt-out-option-mode","ustn-mspa-service-provider-mode","ustn-gpc-segment-included","ustn-gpc"],n)}window.disableAll=z;window.disableTcfEuV2=oi;window.disableTcfCaV1=li;window.disableUspV1=ci;window.disableusnat=di;window.disableusca=ri;window.disableusva=ui;window.disableusco=pi;window.disableusut=mi;window.disableusct=vi;window.disableusfl=gi;window.disableusmt=hi;window.disableusor=Ei;window.disableustx=Si;window.disableusde=bi;window.disableusia=fi;window.disableusne=Ii;window.disableusnh=Oi;window.disableusnj=Ai;window.disableustn=Ni;function Ti(n){document.getElementById("header-usmn").checked=!n,document.getElementById("usmn-included").checked=!n,z(["usmn-processing-notice","usmn-sale-opt-out-notice","usmn-targeted-advertising-opt-out-notice","usmn-sale-opt-out","usmn-targeted-advertising-opt-out","usmn-sensitive-data-processing-0","usmn-sensitive-data-processing-1","usmn-sensitive-data-processing-2","usmn-sensitive-data-processing-3","usmn-sensitive-data-processing-4","usmn-sensitive-data-processing-5","usmn-sensitive-data-processing-6","usmn-sensitive-data-processing-7","usmn-known-child-sensitive-data-consents","usmn-additional-data-processing-consent","usmn-mspa-covered-transaction","usmn-mspa-opt-out-option-mode","usmn-mspa-service-provider-mode","usmn-gpc-segment-included","usmn-gpc"],n)}window.disableusmn=Ti;function _i(){let n=[];cmpApi.clear();let t=[];if(document.getElementById("tcfeuv2-included").checked==!0&&(t.push(2),Array.prototype.push.apply(n,processNumericInput("tcfeuv2-cmp-id","tcfeuv2","CmpId")),Array.prototype.push.apply(n,processNumericInput("tcfeuv2-cmp-version","tcfeuv2","CmpVersion")),Array.prototype.push.apply(n,processNumericInput("tcfeuv2-consent-screen","tcfeuv2","ConsentScreen")),Array.prototype.push.apply(n,processStringSelect("tcfeuv2-consent-language","tcfeuv2","ConsentLanguage")),Array.prototype.push.apply(n,processNumericInput("tcfeuv2-vendor-list-version","tcfeuv2","VendorListVersion")),Array.prototype.push.apply(n,processNumericRadio(["tcfeuv2-policy-version-2","tcfeuv2-policy-version-4"],"tcfeuv2","PolicyVersion")),Array.prototype.push.apply(n,processCheckbox("tcfeuv2-is-service-specific","tcfeuv2","IsServiceSpecific")),Array.prototype.push.apply(n,processCheckbox("tcfeuv2-use-non-standard-stacks","tcfeuv2","UseNonStandardStacks")),Array.prototype.push.apply(n,processBitfieldSelect("tcfeuv2-special-feature-optins","tcfeuv2","SpecialFeatureOptins")),Array.prototype.push.apply(n,processBitfieldSelect("tcfeuv2-purpose-consents","tcfeuv2","PurposeConsents")),Array.prototype.push.apply(n,processBitfieldSelect("tcfeuv2-purpose-legitimate-interests","tcfeuv2","PurposeLegitimateInterests")),Array.prototype.push.apply(n,processCheckbox("tcfeuv2-purpose-one-treatment","tcfeuv2","PurposeOneTreatment")),Array.prototype.push.apply(n,processStringSelect("tcfeuv2-publisher-country-code","tcfeuv2","PublisherCountryCode")),Array.prototype.push.apply(n,processMultipleNumericIncludedSelect("tcfeuv2-vendor-consents-included","tcfeuv2","VendorConsents")),Array.prototype.push.apply(n,processMultipleNumericIncludedSelect("tcfeuv2-vendor-legitimate-interests-included","tcfeuv2","VendorLegitimateInterests")),Array.prototype.push.apply(n,processMultipleNumericIncludedSelect("tcfeuv2-vendors-allowed-included","tcfeuv2","VendorsAllowed")),Array.prototype.push.apply(n,processMultipleNumericIncludedSelect("tcfeuv2-vendors-disclosed-included","tcfeuv2","VendorsDisclosed")),Array.prototype.push.apply(n,processDateInput("tcfeuv2-created","tcfeuv2","Created")),Array.prototype.push.apply(n,processDateInput("tcfeuv2-last-updated","tcfeuv2","LastUpdated"))),document.getElementById("tcfcav1-included").checked==!0&&(t.push(5),Array.prototype.push.apply(n,processNumericInput("tcfcav1-cmp-id","tcfcav1","CmpId")),Array.prototype.push.apply(n,processNumericInput("tcfcav1-cmp-version","tcfcav1","CmpVersion")),Array.prototype.push.apply(n,processNumericInput("tcfcav1-consent-screen","tcfcav1","ConsentScreen")),Array.prototype.push.apply(n,processStringSelect("tcfcav1-consent-language","tcfcav1","ConsentLanguage")),Array.prototype.push.apply(n,processNumericInput("tcfcav1-vendor-list-version","tcfcav1","VendorListVersion")),Array.prototype.push.apply(n,processNumericRadio(["tcfcav1-tcf-policy-version-2"],"tcfcav1","TcfPolicyVersion")),Array.prototype.push.apply(n,processCheckbox("tcfcav1-use-non-standard-stacks","tcfcav1","UseNonStandardStacks")),Array.prototype.push.apply(n,processBitfieldSelect("tcfcav1-special-feature-express-consent","tcfcav1","SpecialFeatureExpressConsent")),Array.prototype.push.apply(n,processBitfieldSelect("tcfcav1-purposes-express-consent","tcfcav1","PurposesExpressConsent")),Array.prototype.push.apply(n,processBitfieldSelect("tcfcav1-purposes-implied-consent","tcfcav1","PurposesImpliedConsent")),Array.prototype.push.apply(n,processMultipleNumericIncludedSelect("tcfcav1-vendor-express-consent-included","tcfcav1","VendorExpressConsent")),Array.prototype.push.apply(n,processMultipleNumericIncludedSelect("tcfcav1-vendor-implied-consent-included","tcfcav1","VendorImpliedConsent")),Array.prototype.push.apply(n,processDateInput("tcfcav1-created","tcfcav1","Created")),Array.prototype.push.apply(n,processDateInput("tcfcav1-last-updated","tcfcav1","LastUpdated"))),document.getElementById("uspv1-included").checked==!0&&(t.push(6),Array.prototype.push.apply(n,processStringSelect("uspv1-notice","uspv1","Notice")),Array.prototype.push.apply(n,processStringSelect("uspv1-opt-out-sale","uspv1","OptOutSale")),Array.prototype.push.apply(n,processStringSelect("uspv1-lspa-covered","uspv1","LspaCovered"))),document.getElementById("usnat-included").checked==!0&&(t.push(7),Array.prototype.push.apply(n,processNumericInput("usnat-sharing-notice","usnat","SharingNotice")),Array.prototype.push.apply(n,processNumericInput("usnat-sale-opt-out-notice","usnat","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usnat-sharing-opt-out-notice","usnat","SharingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usnat-targeted-advertising-opt-out-notice","usnat","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usnat-sensitive-data-processing-opt-out-notice","usnat","SensitiveDataProcessingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usnat-sensitive-data-limit-use-notice","usnat","SensitiveDataLimitUseNotice")),Array.prototype.push.apply(n,processNumericInput("usnat-sale-opt-out","usnat","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usnat-sharing-opt-out","usnat","SharingOptOut")),Array.prototype.push.apply(n,processNumericInput("usnat-targeted-advertising-opt-out","usnat","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usnat-sensitive-data-processing-0","usnat-sensitive-data-processing-1","usnat-sensitive-data-processing-2","usnat-sensitive-data-processing-3","usnat-sensitive-data-processing-4","usnat-sensitive-data-processing-5","usnat-sensitive-data-processing-6","usnat-sensitive-data-processing-7","usnat-sensitive-data-processing-8","usnat-sensitive-data-processing-9","usnat-sensitive-data-processing-10","usnat-sensitive-data-processing-11","usnat-sensitive-data-processing-12","usnat-sensitive-data-processing-13","usnat-sensitive-data-processing-14","usnat-sensitive-data-processing-15"],"usnat","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInputs(["usnat-known-child-sensitive-data-consents-0","usnat-known-child-sensitive-data-consents-1","usnat-known-child-sensitive-data-consents-2"],"usnat","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usnat-personal-data-consents","usnat","PersonalDataConsents")),Array.prototype.push.apply(n,processNumericInput("usnat-mspa-covered-transaction","usnat","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usnat-mspa-opt-out-option-mode","usnat","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usnat-mspa-service-provider-mode","usnat","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usnat-gpc-segment-included","usnat","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usnat-gpc","usnat","Gpc"))),document.getElementById("usca-included").checked==!0&&(t.push(8),Array.prototype.push.apply(n,processNumericInput("usca-sale-opt-out-notice","usca","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usca-sharing-opt-out-notice","usca","SharingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usca-sensitive-data-limit-use-notice","usca","SensitiveDataLimitUseNotice")),Array.prototype.push.apply(n,processNumericInput("usca-sale-opt-out","usca","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usca-sharing-opt-out","usca","SharingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usca-sensitive-data-processing-0","usca-sensitive-data-processing-1","usca-sensitive-data-processing-2","usca-sensitive-data-processing-3","usca-sensitive-data-processing-4","usca-sensitive-data-processing-5","usca-sensitive-data-processing-6","usca-sensitive-data-processing-7","usca-sensitive-data-processing-8"],"usca","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInputs(["usca-known-child-sensitive-data-consents-0","usca-known-child-sensitive-data-consents-1"],"usca","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usca-personal-data-consents","usca","PersonalDataConsents")),Array.prototype.push.apply(n,processNumericInput("usca-mspa-covered-transaction","usca","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usca-mspa-opt-out-option-mode","usca","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usca-mspa-service-provider-mode","usca","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usca-gpc-segment-included","usca","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usca-gpc","usca","Gpc"))),document.getElementById("usva-included").checked==!0&&(t.push(9),Array.prototype.push.apply(n,processNumericInput("usva-sharing-notice","usva","SharingNotice")),Array.prototype.push.apply(n,processNumericInput("usva-sale-opt-out-notice","usva","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usva-targeted-advertising-opt-out-notice","usva","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usva-sale-opt-out","usva","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usva-targeted-advertising-opt-out","usva","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usva-sensitive-data-processing-0","usva-sensitive-data-processing-1","usva-sensitive-data-processing-2","usva-sensitive-data-processing-3","usva-sensitive-data-processing-4","usva-sensitive-data-processing-5","usva-sensitive-data-processing-6","usva-sensitive-data-processing-7"],"usva","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInput("usva-known-child-sensitive-data-consents","usva","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usva-mspa-covered-transaction","usva","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usva-mspa-opt-out-option-mode","usva","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usva-mspa-service-provider-mode","usva","MspaServiceProviderMode"))),document.getElementById("usco-included").checked==!0&&(t.push(10),Array.prototype.push.apply(n,processNumericInput("usco-sharing-notice","usco","SharingNotice")),Array.prototype.push.apply(n,processNumericInput("usco-sale-opt-out-notice","usco","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usco-targeted-advertising-opt-out-notice","usco","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usco-sale-opt-out","usco","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usco-targeted-advertising-opt-out","usco","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usco-sensitive-data-processing-0","usco-sensitive-data-processing-1","usco-sensitive-data-processing-2","usco-sensitive-data-processing-3","usco-sensitive-data-processing-4","usco-sensitive-data-processing-5","usco-sensitive-data-processing-6"],"usco","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInput("usco-known-child-sensitive-data-consents","usco","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usco-mspa-covered-transaction","usco","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usco-mspa-opt-out-option-mode","usco","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usco-mspa-service-provider-mode","usco","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usco-gpc-segment-included","usco","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usco-gpc","usco","Gpc"))),document.getElementById("usut-included").checked==!0&&(t.push(11),Array.prototype.push.apply(n,processNumericInput("usut-sharing-notice","usut","SharingNotice")),Array.prototype.push.apply(n,processNumericInput("usut-sale-opt-out-notice","usut","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usut-targeted-advertising-opt-out-notice","usut","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usut-sensitive-data-processing-opt-out-notice","usut","SensitiveDataProcessingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usut-sale-opt-out","usut","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usut-targeted-advertising-opt-out","usut","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usut-sensitive-data-processing-0","usut-sensitive-data-processing-1","usut-sensitive-data-processing-2","usut-sensitive-data-processing-3","usut-sensitive-data-processing-4","usut-sensitive-data-processing-5","usut-sensitive-data-processing-6","usut-sensitive-data-processing-7"],"usut","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInput("usut-known-child-sensitive-data-consents","usut","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usut-mspa-covered-transaction","usut","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usut-mspa-opt-out-option-mode","usut","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usut-mspa-service-provider-mode","usut","MspaServiceProviderMode"))),document.getElementById("usct-included").checked==!0&&(t.push(12),Array.prototype.push.apply(n,processNumericInput("usct-sharing-notice","usct","SharingNotice")),Array.prototype.push.apply(n,processNumericInput("usct-sale-opt-out-notice","usct","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usct-targeted-advertising-opt-out-notice","usct","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usct-sale-opt-out","usct","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usct-targeted-advertising-opt-out","usct","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usct-sensitive-data-processing-0","usct-sensitive-data-processing-1","usct-sensitive-data-processing-2","usct-sensitive-data-processing-3","usct-sensitive-data-processing-4","usct-sensitive-data-processing-5","usct-sensitive-data-processing-6","usct-sensitive-data-processing-7"],"usct","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInputs(["usct-known-child-sensitive-data-consents-0","usct-known-child-sensitive-data-consents-1","usct-known-child-sensitive-data-consents-2"],"usct","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usct-mspa-covered-transaction","usct","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usct-mspa-opt-out-option-mode","usct","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usct-mspa-service-provider-mode","usct","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usct-gpc-segment-included","usct","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usct-gpc","usct","Gpc"))),document.getElementById("usfl-included").checked==!0&&(t.push(13),Array.prototype.push.apply(n,processNumericInput("usfl-processing-notice","usfl","ProcessingNotice")),Array.prototype.push.apply(n,processNumericInput("usfl-sale-opt-out-notice","usfl","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usfl-targeted-advertising-opt-out-notice","usfl","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usfl-sale-opt-out","usfl","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usfl-targeted-advertising-opt-out","usfl","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usfl-sensitive-data-processing-0","usfl-sensitive-data-processing-1","usfl-sensitive-data-processing-2","usfl-sensitive-data-processing-3","usfl-sensitive-data-processing-4","usfl-sensitive-data-processing-5","usfl-sensitive-data-processing-6","usfl-sensitive-data-processing-7"],"usfl","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInputs(["usfl-known-child-sensitive-data-consents-0","usfl-known-child-sensitive-data-consents-1","usfl-known-child-sensitive-data-consents-2"],"usfl","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usfl-additional-data-processing-consent","usfl","AdditionalDataProcessingConsent")),Array.prototype.push.apply(n,processNumericInput("usfl-mspa-covered-transaction","usfl","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usfl-mspa-opt-out-option-mode","usfl","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usfl-mspa-service-provider-mode","usfl","MspaServiceProviderMode"))),document.getElementById("usmt-included").checked==!0&&(t.push(14),Array.prototype.push.apply(n,processNumericInput("usmt-sharing-notice","usmt","SharingNotice")),Array.prototype.push.apply(n,processNumericInput("usmt-sale-opt-out-notice","usmt","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usmt-targeted-advertising-opt-out-notice","usmt","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usmt-sale-opt-out","usmt","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usmt-targeted-advertising-opt-out","usmt","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usmt-sensitive-data-processing-0","usmt-sensitive-data-processing-1","usmt-sensitive-data-processing-2","usmt-sensitive-data-processing-3","usmt-sensitive-data-processing-4","usmt-sensitive-data-processing-5","usmt-sensitive-data-processing-6","usmt-sensitive-data-processing-7"],"usmt","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInputs(["usmt-known-child-sensitive-data-consents-0","usmt-known-child-sensitive-data-consents-1","usmt-known-child-sensitive-data-consents-2"],"usmt","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usmt-additional-data-processing-consent","usmt","AdditionalDataProcessingConsent")),Array.prototype.push.apply(n,processNumericInput("usmt-mspa-covered-transaction","usmt","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usmt-mspa-opt-out-option-mode","usmt","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usmt-mspa-service-provider-mode","usmt","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usmt-gpc-segment-included","usmt","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usmt-gpc","usmt","Gpc"))),document.getElementById("usor-included").checked==!0&&(t.push(15),Array.prototype.push.apply(n,processNumericInput("usor-processing-notice","usor","ProcessingNotice")),Array.prototype.push.apply(n,processNumericInput("usor-sale-opt-out-notice","usor","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usor-targeted-advertising-opt-out-notice","usor","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usor-sale-opt-out","usor","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usor-targeted-advertising-opt-out","usor","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usor-sensitive-data-processing-0","usor-sensitive-data-processing-1","usor-sensitive-data-processing-2","usor-sensitive-data-processing-3","usor-sensitive-data-processing-4","usor-sensitive-data-processing-5","usor-sensitive-data-processing-6","usor-sensitive-data-processing-7","usor-sensitive-data-processing-8","usor-sensitive-data-processing-9","usor-sensitive-data-processing-10"],"usor","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInputs(["usor-known-child-sensitive-data-consents-0","usor-known-child-sensitive-data-consents-1","usor-known-child-sensitive-data-consents-2"],"usor","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usor-additional-data-processing-consent","usor","AdditionalDataProcessingConsent")),Array.prototype.push.apply(n,processNumericInput("usor-mspa-covered-transaction","usor","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usor-mspa-opt-out-option-mode","usor","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usor-mspa-service-provider-mode","usor","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usor-gpc-segment-included","usor","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usor-gpc","usor","Gpc"))),document.getElementById("ustx-included").checked==!0&&(t.push(16),Array.prototype.push.apply(n,processNumericInput("ustx-processing-notice","ustx","ProcessingNotice")),Array.prototype.push.apply(n,processNumericInput("ustx-sale-opt-out-notice","ustx","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("ustx-targeted-advertising-opt-out-notice","ustx","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("ustx-sale-opt-out","ustx","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("ustx-targeted-advertising-opt-out","ustx","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["ustx-sensitive-data-processing-0","ustx-sensitive-data-processing-1","ustx-sensitive-data-processing-2","ustx-sensitive-data-processing-3","ustx-sensitive-data-processing-4","ustx-sensitive-data-processing-5","ustx-sensitive-data-processing-6","ustx-sensitive-data-processing-7"],"ustx","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInput("ustx-known-child-sensitive-data-consents","ustx","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("ustx-additional-data-processing-consent","ustx","AdditionalDataProcessingConsent")),Array.prototype.push.apply(n,processNumericInput("ustx-mspa-covered-transaction","ustx","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("ustx-mspa-opt-out-option-mode","ustx","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("ustx-mspa-service-provider-mode","ustx","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("ustx-gpc-segment-included","ustx","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("ustx-gpc","ustx","Gpc"))),document.getElementById("usde-included").checked==!0&&(t.push(17),Array.prototype.push.apply(n,processNumericInput("usde-processing-notice","usde","ProcessingNotice")),Array.prototype.push.apply(n,processNumericInput("usde-sale-opt-out-notice","usde","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usde-targeted-advertising-opt-out-notice","usde","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usde-sale-opt-out","usde","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usde-targeted-advertising-opt-out","usde","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usde-sensitive-data-processing-0","usde-sensitive-data-processing-1","usde-sensitive-data-processing-2","usde-sensitive-data-processing-3","usde-sensitive-data-processing-4","usde-sensitive-data-processing-5","usde-sensitive-data-processing-6","usde-sensitive-data-processing-7","usde-sensitive-data-processing-8"],"usde","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInputs(["usde-known-child-sensitive-data-consents-0","usde-known-child-sensitive-data-consents-1","usde-known-child-sensitive-data-consents-2","usde-known-child-sensitive-data-consents-3","usde-known-child-sensitive-data-consents-4"],"usde","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usde-additional-data-processing-consent","usde","AdditionalDataProcessingConsent")),Array.prototype.push.apply(n,processNumericInput("usde-mspa-covered-transaction","usde","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usde-mspa-opt-out-option-mode","usde","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usde-mspa-service-provider-mode","usde","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usde-gpc-segment-included","usde","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usde-gpc","usde","Gpc"))),document.getElementById("usia-included").checked==!0&&(t.push(18),Array.prototype.push.apply(n,processNumericInput("usia-processing-notice","usia","ProcessingNotice")),Array.prototype.push.apply(n,processNumericInput("usia-sale-opt-out-notice","usia","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usia-targeted-advertising-opt-out-notice","usia","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usia-sensitive-data-opt-out-notice","usia","SensitiveDataOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usia-sale-opt-out","usia","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usia-targeted-advertising-opt-out","usia","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usia-sensitive-data-processing-0","usia-sensitive-data-processing-1","usia-sensitive-data-processing-2","usia-sensitive-data-processing-3","usia-sensitive-data-processing-4","usia-sensitive-data-processing-5","usia-sensitive-data-processing-6","usia-sensitive-data-processing-7"],"usia","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInput("usia-known-child-sensitive-data-consents","usia","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usia-mspa-covered-transaction","usia","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usia-mspa-opt-out-option-mode","usia","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usia-mspa-service-provider-mode","usia","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usia-gpc-segment-included","usia","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usia-gpc","usia","Gpc"))),document.getElementById("usne-included").checked==!0&&(t.push(19),Array.prototype.push.apply(n,processNumericInput("usne-processing-notice","usne","ProcessingNotice")),Array.prototype.push.apply(n,processNumericInput("usne-sale-opt-out-notice","usne","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usne-targeted-advertising-opt-out-notice","usne","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usne-sale-opt-out","usne","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usne-targeted-advertising-opt-out","usne","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usne-sensitive-data-processing-0","usne-sensitive-data-processing-1","usne-sensitive-data-processing-2","usne-sensitive-data-processing-3","usne-sensitive-data-processing-4","usne-sensitive-data-processing-5","usne-sensitive-data-processing-6","usne-sensitive-data-processing-7"],"usne","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInput("usne-known-child-sensitive-data-consents","usne","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usne-additional-data-processing-consent","usne","AdditionalDataProcessingConsent")),Array.prototype.push.apply(n,processNumericInput("usne-mspa-covered-transaction","usne","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usne-mspa-opt-out-option-mode","usne","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usne-mspa-service-provider-mode","usne","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usne-gpc-segment-included","usne","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usne-gpc","usne","Gpc"))),document.getElementById("usnh-included").checked==!0&&(t.push(20),Array.prototype.push.apply(n,processNumericInput("usnh-processing-notice","usnh","ProcessingNotice")),Array.prototype.push.apply(n,processNumericInput("usnh-sale-opt-out-notice","usnh","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usnh-targeted-advertising-opt-out-notice","usnh","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usnh-sale-opt-out","usnh","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usnh-targeted-advertising-opt-out","usnh","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usnh-sensitive-data-processing-0","usnh-sensitive-data-processing-1","usnh-sensitive-data-processing-2","usnh-sensitive-data-processing-3","usnh-sensitive-data-processing-4","usnh-sensitive-data-processing-5","usnh-sensitive-data-processing-6","usnh-sensitive-data-processing-7"],"usnh","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInputs(["usnh-known-child-sensitive-data-consents-0","usnh-known-child-sensitive-data-consents-1","usnh-known-child-sensitive-data-consents-2"],"usnh","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usnh-additional-data-processing-consent","usnh","AdditionalDataProcessingConsent")),Array.prototype.push.apply(n,processNumericInput("usnh-mspa-covered-transaction","usnh","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usnh-mspa-opt-out-option-mode","usnh","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usnh-mspa-service-provider-mode","usnh","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usnh-gpc-segment-included","usnh","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usnh-gpc","usnh","Gpc"))),document.getElementById("usnj-included").checked==!0&&(t.push(21),Array.prototype.push.apply(n,processNumericInput("usnj-processing-notice","usnj","ProcessingNotice")),Array.prototype.push.apply(n,processNumericInput("usnj-sale-opt-out-notice","usnj","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usnj-targeted-advertising-opt-out-notice","usnj","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usnj-sale-opt-out","usnj","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usnj-targeted-advertising-opt-out","usnj","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usnj-sensitive-data-processing-0","usnj-sensitive-data-processing-1","usnj-sensitive-data-processing-2","usnj-sensitive-data-processing-3","usnj-sensitive-data-processing-4","usnj-sensitive-data-processing-5","usnj-sensitive-data-processing-6","usnj-sensitive-data-processing-7","usnj-sensitive-data-processing-8","usnj-sensitive-data-processing-9"],"usnj","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInputs(["usnj-known-child-sensitive-data-consents-0","usnj-known-child-sensitive-data-consents-1","usnj-known-child-sensitive-data-consents-2","usnj-known-child-sensitive-data-consents-3","usnj-known-child-sensitive-data-consents-4"],"usnj","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usnj-additional-data-processing-consent","usnj","AdditionalDataProcessingConsent")),Array.prototype.push.apply(n,processNumericInput("usnj-mspa-covered-transaction","usnj","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usnj-mspa-opt-out-option-mode","usnj","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usnj-mspa-service-provider-mode","usnj","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usnj-gpc-segment-included","usnj","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usnj-gpc","usnj","Gpc"))),document.getElementById("ustn-included").checked==!0&&(t.push(22),Array.prototype.push.apply(n,processNumericInput("ustn-processing-notice","ustn","ProcessingNotice")),Array.prototype.push.apply(n,processNumericInput("ustn-sale-opt-out-notice","ustn","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("ustn-targeted-advertising-opt-out-notice","ustn","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("ustn-sale-opt-out","ustn","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("ustn-targeted-advertising-opt-out","ustn","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["ustn-sensitive-data-processing-0","ustn-sensitive-data-processing-1","ustn-sensitive-data-processing-2","ustn-sensitive-data-processing-3","ustn-sensitive-data-processing-4","ustn-sensitive-data-processing-5","ustn-sensitive-data-processing-6","ustn-sensitive-data-processing-7"],"ustn","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInput("ustn-known-child-sensitive-data-consents","ustn","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("ustn-additional-data-processing-consent","ustn","AdditionalDataProcessingConsent")),Array.prototype.push.apply(n,processNumericInput("ustn-mspa-covered-transaction","ustn","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("ustn-mspa-opt-out-option-mode","ustn","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("ustn-mspa-service-provider-mode","ustn","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("ustn-gpc-segment-included","ustn","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("ustn-gpc","ustn","Gpc"))),document.getElementById("usmn-included").checked==!0&&(t.push(23),Array.prototype.push.apply(n,processNumericInput("usmn-processing-notice","usmn","ProcessingNotice")),Array.prototype.push.apply(n,processNumericInput("usmn-sale-opt-out-notice","usmn","SaleOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usmn-targeted-advertising-opt-out-notice","usmn","TargetedAdvertisingOptOutNotice")),Array.prototype.push.apply(n,processNumericInput("usmn-sale-opt-out","usmn","SaleOptOut")),Array.prototype.push.apply(n,processNumericInput("usmn-targeted-advertising-opt-out","usmn","TargetedAdvertisingOptOut")),Array.prototype.push.apply(n,processNumericInputs(["usmn-sensitive-data-processing-0","usmn-sensitive-data-processing-1","usmn-sensitive-data-processing-2","usmn-sensitive-data-processing-3","usmn-sensitive-data-processing-4","usmn-sensitive-data-processing-5","usmn-sensitive-data-processing-6","usmn-sensitive-data-processing-7"],"usmn","SensitiveDataProcessing")),Array.prototype.push.apply(n,processNumericInput("usmn-known-child-sensitive-data-consents","usmn","KnownChildSensitiveDataConsents")),Array.prototype.push.apply(n,processNumericInput("usmn-additional-data-processing-consent","usmn","AdditionalDataProcessingConsent")),Array.prototype.push.apply(n,processNumericInput("usmn-mspa-covered-transaction","usmn","MspaCoveredTransaction")),Array.prototype.push.apply(n,processNumericInput("usmn-mspa-opt-out-option-mode","usmn","MspaOptOutOptionMode")),Array.prototype.push.apply(n,processNumericInput("usmn-mspa-service-provider-mode","usmn","MspaServiceProviderMode")),Array.prototype.push.apply(n,processCheckbox("usmn-gpc-segment-included","usmn","GpcSegmentIncluded")),Array.prototype.push.apply(n,processCheckbox("usmn-gpc","usmn","Gpc"))),cmpApi.setApplicableSections(t),n.length==0)try{let e=cmpApi.getGppString();console.log(e),document.getElementById("gpp-string").value=e,document.getElementById("tcfeu-string").value=cmpApi.getSectionString("tcfeuv2");let s=e;document.getElementById("tcfeu-string-tab").getAttribute("class").indexOf("active")>=0&&(s=cmpApi.hasSection("tcfeuv2")?cmpApi.getSectionString("tcfeuv2"):""),s||(s="");let a=window.location.href.indexOf("#");a>-1?window.location.href=window.location.href.substring(0,a+1)+s:window.location.href=window.location.href+"#"+s;let o=cmpApi.getObject();o.tcfeuv2&&(o.tcfeuv2.Created=o.tcfeuv2.Created.toJSON(),o.tcfeuv2.LastUpdated=o.tcfeuv2.LastUpdated.toJSON()),o.tcfcav1&&(o.tcfcav1.Created=o.tcfcav1.Created.toJSON(),o.tcfcav1.LastUpdated=o.tcfcav1.LastUpdated.toJSON()),console.log(JSON.stringify(o)),$("#jsonview").JSONView(o,{collapsed:!0})}catch(e){console.log(e),toastr.error(e,"Error")}else toastr.error(n.join("</br>"),"Error")}window.encode=_i;function yi(){let n,t,e;try{if(removeAllVendors("tcfeuv2-vendor-consents"),removeAllVendors("tcfeuv2-vendor-legitimate-interests"),removeAllVendors("tcfeuv2-vendors-allowed"),removeAllVendors("tcfeuv2-vendors-disclosed"),removeAllVendors("tcfcav1-vendor-express-consent"),removeAllVendors("tcfcav1-vendor-implied-consent"),document.getElementById("gpp-string-tab").getAttribute("class").indexOf("active")>=0){let E=document.getElementById("gpp-string").value;E.startsWith("C")&&(document.getElementById("tcfeu-string").value=E,document.getElementById("gpp-string").value="",$("#tcfeu-string-tab").tab("show"))}let i=document.getElementById("tcfeu-string-tab").getAttribute("class").indexOf("active")>=0;if(i){let E=document.getElementById("tcfeu-string").value;E.startsWith("D")?(document.getElementById("gpp-string").value=E,document.getElementById("tcfeu-string").value="",$("#gpp-string-tab").tab("show")):(E.length>0?document.getElementById("gpp-string").value="DBABMA~"+document.getElementById("tcfeu-string").value:document.getElementById("gpp-string").value="",$("#tcfeuv2-tab").tab("show"))}let a=document.getElementById("gpp-string").value.trim();if(a===""&&(a="",document.getElementById("gpp-string").value=a),console.log(a),cmpApi.setGppString(a),cmpApi.hasSection("tcfeuv2")){document.getElementById("tcfeuv2-included").checked=!0,disableTcfEuV2(!1);let E=cmpApi.getFieldValue("tcfeuv2","PolicyVersion");E===2&&!document.getElementById("tcfeuv2-policy-version-2").checked&&(document.getElementById("tcfeuv2-policy-version-2").checked=!0,tcfEuV2PolicyVersionChanged(E)),E===4&&!document.getElementById("tcfeuv2-policy-version-4").checked&&(document.getElementById("tcfeuv2-policy-version-2").checked=!0,tcfEuV2PolicyVersionChanged(E)),document.getElementById("tcfeuv2-vendor-list-version").value=cmpApi.getFieldValue("tcfeuv2","VendorListVersion"),document.getElementById("tcfeuv2-created").valueAsDate=cmpApi.getFieldValue("tcfeuv2","Created"),document.getElementById("tcfeuv2-last-updated").valueAsDate=cmpApi.getFieldValue("tcfeuv2","LastUpdated"),document.getElementById("tcfeuv2-cmp-id").value=cmpApi.getFieldValue("tcfeuv2","CmpId"),document.getElementById("tcfeuv2-cmp-version").value=cmpApi.getFieldValue("tcfeuv2","CmpVersion"),document.getElementById("tcfeuv2-consent-screen").value=cmpApi.getFieldValue("tcfeuv2","ConsentScreen"),document.getElementById("tcfeuv2-consent-language").value=cmpApi.getFieldValue("tcfeuv2","ConsentLanguage"),document.getElementById("tcfeuv2-is-service-specific").checked=cmpApi.getFieldValue("tcfeuv2","IsServiceSpecific"),document.getElementById("tcfeuv2-use-non-standard-stacks").checked=cmpApi.getFieldValue("tcfeuv2","UseNonStandardStacks");let p=cmpApi.getFieldValue("tcfeuv2","SpecialFeatureOptins"),v=document.getElementById("tcfeuv2-special-feature-optins");for(let u=0;u<v.length;u++){let S=v[u];u<p.length&&p[u]===!0?S.selected=!0:S.selected=!1}p=cmpApi.getFieldValue("tcfeuv2","PurposeConsents"),v=document.getElementById("tcfeuv2-purpose-consents");for(let u=0;u<v.length;u++){let S=v[u];u<p.length&&p[u]===!0?S.selected=!0:S.selected=!1}p=cmpApi.getFieldValue("tcfeuv2","PurposeLegitimateInterests"),v=document.getElementById("tcfeuv2-purpose-legitimate-interests");for(let u=0;u<v.length;u++){let S=v[u];u<p.length&&p[u]===!0?S.selected=!0:S.selected=!1}document.getElementById("tcfeuv2-purpose-one-treatment").checked=cmpApi.getFieldValue("tcfeuv2","PurposeOneTreatment"),document.getElementById("tcfeuv2-publisher-country-code").value=cmpApi.getFieldValue("tcfeuv2","PublisherCountryCode"),p=cmpApi.getFieldValue("tcfeuv2","VendorConsents"),v=document.getElementById("tcfeuv2-vendor-consents-available");for(let u=0;u<v.length;u++){let S=v[u];p.includes(parseInt(S.value))?S.selected=!0:S.selected=!1}includeVendors("tcfeuv2-vendor-consents"),p=cmpApi.getFieldValue("tcfeuv2","VendorLegitimateInterests"),v=document.getElementById("tcfeuv2-vendor-legitimate-interests-available");for(let u=0;u<v.length;u++){let S=v[u];p.includes(parseInt(S.value))?S.selected=!0:S.selected=!1}includeVendors("tcfeuv2-vendor-legitimate-interests"),p=cmpApi.getFieldValue("tcfeuv2","VendorsAllowed"),v=document.getElementById("tcfeuv2-vendors-allowed-available");for(let u=0;u<v.length;u++){let S=v[u];p.includes(parseInt(S.value))?S.selected=!0:S.selected=!1}includeVendors("tcfeuv2-vendors-allowed"),p=cmpApi.getFieldValue("tcfeuv2","VendorsDisclosed"),v=document.getElementById("tcfeuv2-vendors-disclosed-available");for(let u=0;u<v.length;u++){let S=v[u];p.includes(parseInt(S.value))?S.selected=!0:S.selected=!1}for(includeVendors("tcfeuv2-vendors-disclosed"),n=document.getElementById("tcfeuv2-publisher-restrictions-tbody");n.hasChildNodes();)n.removeChild(n.lastChild);if(p=cmpApi.getFieldValue("tcfeuv2","PublisherRestrictions"),p.length>0){for(let u=0;u<p.length;u++){switch(t=n.insertRow(),e=t.insertCell(0),e.innerHTML=p[u].key,e=t.insertCell(1),p[u].type){case 1:e.innerHTML=p[u].type+" - Require Consent";break;case 2:e.innerHTML=p[u].type+" - Require Legitimate Interest";break;case 3:e.innerHTML=p[u].type+" - Undefined";break;default:e.innerHTML=p[u].type+" - Not Allowed"}e=t.insertCell(2),e.innerHTML=p[u].ids}document.getElementById("tcfeuv2-publisher-restrictions-container").removeAttribute("hidden")}else document.getElementById("tcfeuv2-publisher-restrictions-container").setAttribute("hidden","hidden")}else document.getElementById("tcfeuv2-included").checked=!1,document.getElementById("tcfeuv2-publisher-restrictions-container").setAttribute("hidden","hidden"),disableTcfEuV2(!0);if(cmpApi.hasSection("tcfcav1")){document.getElementById("tcfcav1-included").checked=!0,disableTcfCaV1(!1);let E=cmpApi.getFieldValue("tcfcav1","TcfPolicyVersion");E===2&&!document.getElementById("tcfcav1-tcf-policy-version-2").checked&&(document.getElementById("tcfcav1-tcf-policy-version-2").checked=!0,tcfCaV1PolicyVersionChanged(E)),document.getElementById("tcfcav1-vendor-list-version").value=cmpApi.getFieldValue("tcfcav1","VendorListVersion"),document.getElementById("tcfcav1-created").valueAsDate=cmpApi.getFieldValue("tcfcav1","Created"),document.getElementById("tcfcav1-last-updated").valueAsDate=cmpApi.getFieldValue("tcfcav1","LastUpdated"),document.getElementById("tcfcav1-cmp-id").value=cmpApi.getFieldValue("tcfcav1","CmpId"),document.getElementById("tcfcav1-cmp-version").value=cmpApi.getFieldValue("tcfcav1","CmpVersion"),document.getElementById("tcfcav1-consent-screen").value=cmpApi.getFieldValue("tcfcav1","ConsentScreen"),document.getElementById("tcfcav1-consent-language").value=cmpApi.getFieldValue("tcfcav1","ConsentLanguage"),document.getElementById("tcfcav1-use-non-standard-stacks").checked=cmpApi.getFieldValue("tcfcav1","UseNonStandardStacks"),document.getElementById("tcfcav1-special-feature-express-consent").checked=cmpApi.getFieldValue("tcfcav1","SpecialFeatureExpressConsent");let p=cmpApi.getFieldValue("tcfcav1","PurposesExpressConsent"),v=document.getElementById("tcfcav1-purposes-express-consent");for(let u=0;u<v.length;u++){let S=v[u];u<p.length&&p[u]===!0?S.selected=!0:S.selected=!1}p=cmpApi.getFieldValue("tcfcav1","PurposesImpliedConsent"),v=document.getElementById("tcfcav1-purposes-implied-consent");for(let u=0;u<v.length;u++){let S=v[u];u<p.length&&p[u]===!0?S.selected=!0:S.selected=!1}p=cmpApi.getFieldValue("tcfcav1","VendorExpressConsent"),v=document.getElementById("tcfcav1-vendor-express-consent-available");for(let u=0;u<v.length;u++){let S=v[u];p.includes(parseInt(S.value))?S.selected=!0:S.selected=!1}includeVendors("tcfcav1-vendor-express-consent"),p=cmpApi.getFieldValue("tcfcav1","VendorImpliedConsent"),v=document.getElementById("tcfcav1-vendor-implied-consent-available");for(let u=0;u<v.length;u++){let S=v[u];p.includes(parseInt(S.value))?S.selected=!0:S.selected=!1}for(includeVendors("tcfcav1-vendor-implied-consent"),n=document.getElementById("tcfcav1-pub-restrictions-tbody");n.hasChildNodes();)n.removeChild(n.lastChild);if(p=cmpApi.getFieldValue("tcfcav1","PubRestrictions"),p.length>0){for(let u=0;u<p.length;u++){switch(t=n.insertRow(),e=t.insertCell(0),e.innerHTML=p[u].key,e=t.insertCell(1),p[u].type){case 1:e.innerHTML=p[u].type+" - Require Consent";break;case 2:e.innerHTML=p[u].type+" - Require Legitimate Interest";break;case 3:e.innerHTML=p[u].type+" - Undefined";break;default:e.innerHTML=p[u].type+" - Not Allowed"}e=t.insertCell(2),e.innerHTML=p[u].ids}document.getElementById("tcfcav1-pub-restrictions-container").removeAttribute("hidden")}else document.getElementById("tcfcav1-pub-restrictions-container").setAttribute("hidden","hidden")}else document.getElementById("tcfcav1-included").checked=!1,document.getElementById("tcfcav1-pub-restrictions-container").setAttribute("hidden","hidden"),disableTcfCaV1(!0);cmpApi.hasSection("uspv1")?(document.getElementById("uspv1-included").checked=!0,disableUspV1(!1),document.getElementById("uspv1-notice").value=cmpApi.getFieldValue("uspv1","Notice"),document.getElementById("uspv1-opt-out-sale").value=cmpApi.getFieldValue("uspv1","OptOutSale"),document.getElementById("uspv1-lspa-covered").value=cmpApi.getFieldValue("uspv1","LspaCovered")):(document.getElementById("uspv1-included").checked=!1,disableUspV1(!0)),cmpApi.hasSection("usnat")?(document.getElementById("usnat-included").checked=!0,disableusnat(!1),document.getElementById("usnat-sharing-notice").value=cmpApi.getFieldValue("usnat","SharingNotice"),document.getElementById("usnat-sale-opt-out-notice").value=cmpApi.getFieldValue("usnat","SaleOptOutNotice"),document.getElementById("usnat-sharing-opt-out-notice").value=cmpApi.getFieldValue("usnat","SharingOptOutNotice"),document.getElementById("usnat-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usnat","TargetedAdvertisingOptOutNotice"),document.getElementById("usnat-sensitive-data-processing-opt-out-notice").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessingOptOutNotice"),document.getElementById("usnat-sensitive-data-limit-use-notice").value=cmpApi.getFieldValue("usnat","SensitiveDataLimitUseNotice"),document.getElementById("usnat-sale-opt-out").value=cmpApi.getFieldValue("usnat","SaleOptOut"),document.getElementById("usnat-sharing-opt-out").value=cmpApi.getFieldValue("usnat","SharingOptOut"),document.getElementById("usnat-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usnat","TargetedAdvertisingOptOut"),document.getElementById("usnat-sensitive-data-processing-0").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[0],document.getElementById("usnat-sensitive-data-processing-1").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[1],document.getElementById("usnat-sensitive-data-processing-2").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[2],document.getElementById("usnat-sensitive-data-processing-3").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[3],document.getElementById("usnat-sensitive-data-processing-4").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[4],document.getElementById("usnat-sensitive-data-processing-5").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[5],document.getElementById("usnat-sensitive-data-processing-6").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[6],document.getElementById("usnat-sensitive-data-processing-7").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[7],document.getElementById("usnat-sensitive-data-processing-8").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[8],document.getElementById("usnat-sensitive-data-processing-9").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[9],document.getElementById("usnat-sensitive-data-processing-10").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[10],document.getElementById("usnat-sensitive-data-processing-11").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[11],document.getElementById("usnat-sensitive-data-processing-12").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[12],document.getElementById("usnat-sensitive-data-processing-13").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[13],document.getElementById("usnat-sensitive-data-processing-14").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[14],document.getElementById("usnat-sensitive-data-processing-15").value=cmpApi.getFieldValue("usnat","SensitiveDataProcessing")[15],document.getElementById("usnat-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usnat","KnownChildSensitiveDataConsents")[0],document.getElementById("usnat-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usnat","KnownChildSensitiveDataConsents")[1],document.getElementById("usnat-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usnat","KnownChildSensitiveDataConsents")[2],document.getElementById("usnat-personal-data-consents").value=cmpApi.getFieldValue("usnat","PersonalDataConsents"),document.getElementById("usnat-mspa-covered-transaction").value=cmpApi.getFieldValue("usnat","MspaCoveredTransaction"),document.getElementById("usnat-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usnat","MspaOptOutOptionMode"),document.getElementById("usnat-mspa-service-provider-mode").value=cmpApi.getFieldValue("usnat","MspaServiceProviderMode"),document.getElementById("usnat-gpc-segment-included").checked=cmpApi.getFieldValue("usnat","GpcSegmentIncluded"),document.getElementById("usnat-gpc").checked=cmpApi.getFieldValue("usnat","Gpc")):(document.getElementById("usnat-included").checked=!1,disableusnat(!0)),cmpApi.hasSection("usca")?(document.getElementById("usca-included").checked=!0,disableusca(!1),document.getElementById("usca-sale-opt-out-notice").value=cmpApi.getFieldValue("usca","SaleOptOutNotice"),document.getElementById("usca-sharing-opt-out-notice").value=cmpApi.getFieldValue("usca","SharingOptOutNotice"),document.getElementById("usca-sensitive-data-limit-use-notice").value=cmpApi.getFieldValue("usca","SensitiveDataLimitUseNotice"),document.getElementById("usca-sale-opt-out").value=cmpApi.getFieldValue("usca","SaleOptOut"),document.getElementById("usca-sharing-opt-out").value=cmpApi.getFieldValue("usca","SharingOptOut"),document.getElementById("usca-sensitive-data-processing-0").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[0],document.getElementById("usca-sensitive-data-processing-1").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[1],document.getElementById("usca-sensitive-data-processing-2").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[2],document.getElementById("usca-sensitive-data-processing-3").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[3],document.getElementById("usca-sensitive-data-processing-4").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[4],document.getElementById("usca-sensitive-data-processing-5").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[5],document.getElementById("usca-sensitive-data-processing-6").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[6],document.getElementById("usca-sensitive-data-processing-7").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[7],document.getElementById("usca-sensitive-data-processing-8").value=cmpApi.getFieldValue("usca","SensitiveDataProcessing")[8],document.getElementById("usca-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usca","KnownChildSensitiveDataConsents")[0],document.getElementById("usca-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usca","KnownChildSensitiveDataConsents")[1],document.getElementById("usca-personal-data-consents").value=cmpApi.getFieldValue("usca","PersonalDataConsents"),document.getElementById("usca-mspa-covered-transaction").value=cmpApi.getFieldValue("usca","MspaCoveredTransaction"),document.getElementById("usca-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usca","MspaOptOutOptionMode"),document.getElementById("usca-mspa-service-provider-mode").value=cmpApi.getFieldValue("usca","MspaServiceProviderMode"),document.getElementById("usca-gpc-segment-included").checked=cmpApi.getFieldValue("usca","GpcSegmentIncluded"),document.getElementById("usca-gpc").checked=cmpApi.getFieldValue("usca","Gpc")):(document.getElementById("usca-included").checked=!1,disableusca(!0)),cmpApi.hasSection("usva")?(document.getElementById("usva-included").checked=!0,disableusva(!1),document.getElementById("usva-sharing-notice").value=cmpApi.getFieldValue("usva","SharingNotice"),document.getElementById("usva-sale-opt-out-notice").value=cmpApi.getFieldValue("usva","SaleOptOutNotice"),document.getElementById("usva-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usva","TargetedAdvertisingOptOutNotice"),document.getElementById("usva-sale-opt-out").value=cmpApi.getFieldValue("usva","SaleOptOut"),document.getElementById("usva-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usva","TargetedAdvertisingOptOut"),document.getElementById("usva-sensitive-data-processing-0").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[0],document.getElementById("usva-sensitive-data-processing-1").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[1],document.getElementById("usva-sensitive-data-processing-2").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[2],document.getElementById("usva-sensitive-data-processing-3").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[3],document.getElementById("usva-sensitive-data-processing-4").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[4],document.getElementById("usva-sensitive-data-processing-5").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[5],document.getElementById("usva-sensitive-data-processing-6").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[6],document.getElementById("usva-sensitive-data-processing-7").value=cmpApi.getFieldValue("usva","SensitiveDataProcessing")[7],document.getElementById("usva-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usva","KnownChildSensitiveDataConsents"),document.getElementById("usva-mspa-covered-transaction").value=cmpApi.getFieldValue("usva","MspaCoveredTransaction"),document.getElementById("usva-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usva","MspaOptOutOptionMode"),document.getElementById("usva-mspa-service-provider-mode").value=cmpApi.getFieldValue("usva","MspaServiceProviderMode")):(document.getElementById("usva-included").checked=!1,disableusva(!0)),cmpApi.hasSection("usco")?(document.getElementById("usco-included").checked=!0,disableusco(!1),document.getElementById("usco-sharing-notice").value=cmpApi.getFieldValue("usco","SharingNotice"),document.getElementById("usco-sale-opt-out-notice").value=cmpApi.getFieldValue("usco","SaleOptOutNotice"),document.getElementById("usco-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usco","TargetedAdvertisingOptOutNotice"),document.getElementById("usco-sale-opt-out").value=cmpApi.getFieldValue("usco","SaleOptOut"),document.getElementById("usco-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usco","TargetedAdvertisingOptOut"),document.getElementById("usco-sensitive-data-processing-0").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[0],document.getElementById("usco-sensitive-data-processing-1").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[1],document.getElementById("usco-sensitive-data-processing-2").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[2],document.getElementById("usco-sensitive-data-processing-3").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[3],document.getElementById("usco-sensitive-data-processing-4").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[4],document.getElementById("usco-sensitive-data-processing-5").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[5],document.getElementById("usco-sensitive-data-processing-6").value=cmpApi.getFieldValue("usco","SensitiveDataProcessing")[6],document.getElementById("usco-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usco","KnownChildSensitiveDataConsents"),document.getElementById("usco-mspa-covered-transaction").value=cmpApi.getFieldValue("usco","MspaCoveredTransaction"),document.getElementById("usco-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usco","MspaOptOutOptionMode"),document.getElementById("usco-mspa-service-provider-mode").value=cmpApi.getFieldValue("usco","MspaServiceProviderMode"),document.getElementById("usco-gpc-segment-included").checked=cmpApi.getFieldValue("usco","GpcSegmentIncluded"),document.getElementById("usco-gpc").checked=cmpApi.getFieldValue("usco","Gpc")):(document.getElementById("usco-included").checked=!1,disableusco(!0)),cmpApi.hasSection("usut")?(document.getElementById("usut-included").checked=!0,disableusut(!1),document.getElementById("usut-sharing-notice").value=cmpApi.getFieldValue("usut","SharingNotice"),document.getElementById("usut-sale-opt-out-notice").value=cmpApi.getFieldValue("usut","SaleOptOutNotice"),document.getElementById("usut-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usut","TargetedAdvertisingOptOutNotice"),document.getElementById("usut-sensitive-data-processing-opt-out-notice").value=cmpApi.getFieldValue("usut","SensitiveDataProcessingOptOutNotice"),document.getElementById("usut-sale-opt-out").value=cmpApi.getFieldValue("usut","SaleOptOut"),document.getElementById("usut-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usut","TargetedAdvertisingOptOut"),document.getElementById("usut-sensitive-data-processing-0").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[0],document.getElementById("usut-sensitive-data-processing-1").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[1],document.getElementById("usut-sensitive-data-processing-2").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[2],document.getElementById("usut-sensitive-data-processing-3").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[3],document.getElementById("usut-sensitive-data-processing-4").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[4],document.getElementById("usut-sensitive-data-processing-5").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[5],document.getElementById("usut-sensitive-data-processing-6").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[6],document.getElementById("usut-sensitive-data-processing-7").value=cmpApi.getFieldValue("usut","SensitiveDataProcessing")[7],document.getElementById("usut-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usut","KnownChildSensitiveDataConsents"),document.getElementById("usut-mspa-covered-transaction").value=cmpApi.getFieldValue("usut","MspaCoveredTransaction"),document.getElementById("usut-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usut","MspaOptOutOptionMode"),document.getElementById("usut-mspa-service-provider-mode").value=cmpApi.getFieldValue("usut","MspaServiceProviderMode")):(document.getElementById("usut-included").checked=!1,disableusut(!0)),cmpApi.hasSection("usct")?(document.getElementById("usct-included").checked=!0,disableusct(!1),document.getElementById("usct-sharing-notice").value=cmpApi.getFieldValue("usct","SharingNotice"),document.getElementById("usct-sale-opt-out-notice").value=cmpApi.getFieldValue("usct","SaleOptOutNotice"),document.getElementById("usct-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usct","TargetedAdvertisingOptOutNotice"),document.getElementById("usct-sale-opt-out").value=cmpApi.getFieldValue("usct","SaleOptOut"),document.getElementById("usct-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usct","TargetedAdvertisingOptOut"),document.getElementById("usct-sensitive-data-processing-0").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[0],document.getElementById("usct-sensitive-data-processing-1").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[1],document.getElementById("usct-sensitive-data-processing-2").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[2],document.getElementById("usct-sensitive-data-processing-3").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[3],document.getElementById("usct-sensitive-data-processing-4").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[4],document.getElementById("usct-sensitive-data-processing-5").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[5],document.getElementById("usct-sensitive-data-processing-6").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[6],document.getElementById("usct-sensitive-data-processing-7").value=cmpApi.getFieldValue("usct","SensitiveDataProcessing")[7],document.getElementById("usct-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usct","KnownChildSensitiveDataConsents")[0],document.getElementById("usct-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usct","KnownChildSensitiveDataConsents")[1],document.getElementById("usct-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usct","KnownChildSensitiveDataConsents")[2],document.getElementById("usct-mspa-covered-transaction").value=cmpApi.getFieldValue("usct","MspaCoveredTransaction"),document.getElementById("usct-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usct","MspaOptOutOptionMode"),document.getElementById("usct-mspa-service-provider-mode").value=cmpApi.getFieldValue("usct","MspaServiceProviderMode"),document.getElementById("usct-gpc-segment-included").checked=cmpApi.getFieldValue("usct","GpcSegmentIncluded"),document.getElementById("usct-gpc").checked=cmpApi.getFieldValue("usct","Gpc")):(document.getElementById("usct-included").checked=!1,disableusct(!0)),cmpApi.hasSection("usfl")?(document.getElementById("usfl-included").checked=!0,disableusfl(!1),document.getElementById("usfl-processing-notice").value=cmpApi.getFieldValue("usfl","ProcessingNotice"),document.getElementById("usfl-sale-opt-out-notice").value=cmpApi.getFieldValue("usfl","SaleOptOutNotice"),document.getElementById("usfl-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usfl","TargetedAdvertisingOptOutNotice"),document.getElementById("usfl-sale-opt-out").value=cmpApi.getFieldValue("usfl","SaleOptOut"),document.getElementById("usfl-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usfl","TargetedAdvertisingOptOut"),document.getElementById("usfl-sensitive-data-processing-0").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[0],document.getElementById("usfl-sensitive-data-processing-1").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[1],document.getElementById("usfl-sensitive-data-processing-2").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[2],document.getElementById("usfl-sensitive-data-processing-3").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[3],document.getElementById("usfl-sensitive-data-processing-4").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[4],document.getElementById("usfl-sensitive-data-processing-5").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[5],document.getElementById("usfl-sensitive-data-processing-6").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[6],document.getElementById("usfl-sensitive-data-processing-7").value=cmpApi.getFieldValue("usfl","SensitiveDataProcessing")[7],document.getElementById("usfl-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usfl","KnownChildSensitiveDataConsents")[0],document.getElementById("usfl-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usfl","KnownChildSensitiveDataConsents")[1],document.getElementById("usfl-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usfl","KnownChildSensitiveDataConsents")[2],document.getElementById("usfl-additional-data-processing-consent").value=cmpApi.getFieldValue("usfl","AdditionalDataProcessingConsent"),document.getElementById("usfl-mspa-covered-transaction").value=cmpApi.getFieldValue("usfl","MspaCoveredTransaction"),document.getElementById("usfl-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usfl","MspaOptOutOptionMode"),document.getElementById("usfl-mspa-service-provider-mode").value=cmpApi.getFieldValue("usfl","MspaServiceProviderMode")):(document.getElementById("usfl-included").checked=!1,disableusfl(!0)),cmpApi.hasSection("usmt")?(document.getElementById("usmt-included").checked=!0,disableusmt(!1),document.getElementById("usmt-sharing-notice").value=cmpApi.getFieldValue("usmt","SharingNotice"),document.getElementById("usmt-sale-opt-out-notice").value=cmpApi.getFieldValue("usmt","SaleOptOutNotice"),document.getElementById("usmt-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usmt","TargetedAdvertisingOptOutNotice"),document.getElementById("usmt-sale-opt-out").value=cmpApi.getFieldValue("usmt","SaleOptOut"),document.getElementById("usmt-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usmt","TargetedAdvertisingOptOut"),document.getElementById("usmt-sensitive-data-processing-0").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[0],document.getElementById("usmt-sensitive-data-processing-1").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[1],document.getElementById("usmt-sensitive-data-processing-2").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[2],document.getElementById("usmt-sensitive-data-processing-3").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[3],document.getElementById("usmt-sensitive-data-processing-4").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[4],document.getElementById("usmt-sensitive-data-processing-5").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[5],document.getElementById("usmt-sensitive-data-processing-6").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[6],document.getElementById("usmt-sensitive-data-processing-7").value=cmpApi.getFieldValue("usmt","SensitiveDataProcessing")[7],document.getElementById("usmt-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usmt","KnownChildSensitiveDataConsents")[0],document.getElementById("usmt-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usmt","KnownChildSensitiveDataConsents")[1],document.getElementById("usmt-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usmt","KnownChildSensitiveDataConsents")[2],document.getElementById("usmt-additional-data-processing-consent").value=cmpApi.getFieldValue("usmt","AdditionalDataProcessingConsent"),document.getElementById("usmt-mspa-covered-transaction").value=cmpApi.getFieldValue("usmt","MspaCoveredTransaction"),document.getElementById("usmt-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usmt","MspaOptOutOptionMode"),document.getElementById("usmt-mspa-service-provider-mode").value=cmpApi.getFieldValue("usmt","MspaServiceProviderMode"),document.getElementById("usmt-gpc-segment-included").checked=cmpApi.getFieldValue("usmt","GpcSegmentIncluded"),document.getElementById("usmt-gpc").checked=cmpApi.getFieldValue("usmt","Gpc")):(document.getElementById("usmt-included").checked=!1,disableusmt(!0)),cmpApi.hasSection("usor")?(document.getElementById("usor-included").checked=!0,disableusor(!1),document.getElementById("usor-processing-notice").value=cmpApi.getFieldValue("usor","ProcessingNotice"),document.getElementById("usor-sale-opt-out-notice").value=cmpApi.getFieldValue("usor","SaleOptOutNotice"),document.getElementById("usor-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usor","TargetedAdvertisingOptOutNotice"),document.getElementById("usor-sale-opt-out").value=cmpApi.getFieldValue("usor","SaleOptOut"),document.getElementById("usor-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usor","TargetedAdvertisingOptOut"),document.getElementById("usor-sensitive-data-processing-0").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[0],document.getElementById("usor-sensitive-data-processing-1").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[1],document.getElementById("usor-sensitive-data-processing-2").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[2],document.getElementById("usor-sensitive-data-processing-3").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[3],document.getElementById("usor-sensitive-data-processing-4").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[4],document.getElementById("usor-sensitive-data-processing-5").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[5],document.getElementById("usor-sensitive-data-processing-6").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[6],document.getElementById("usor-sensitive-data-processing-7").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[7],document.getElementById("usor-sensitive-data-processing-8").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[8],document.getElementById("usor-sensitive-data-processing-9").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[9],document.getElementById("usor-sensitive-data-processing-10").value=cmpApi.getFieldValue("usor","SensitiveDataProcessing")[10],document.getElementById("usor-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usor","KnownChildSensitiveDataConsents")[0],document.getElementById("usor-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usor","KnownChildSensitiveDataConsents")[1],document.getElementById("usor-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usor","KnownChildSensitiveDataConsents")[2],document.getElementById("usor-additional-data-processing-consent").value=cmpApi.getFieldValue("usor","AdditionalDataProcessingConsent"),document.getElementById("usor-mspa-covered-transaction").value=cmpApi.getFieldValue("usor","MspaCoveredTransaction"),document.getElementById("usor-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usor","MspaOptOutOptionMode"),document.getElementById("usor-mspa-service-provider-mode").value=cmpApi.getFieldValue("usor","MspaServiceProviderMode"),document.getElementById("usor-gpc-segment-included").checked=cmpApi.getFieldValue("usor","GpcSegmentIncluded"),document.getElementById("usor-gpc").checked=cmpApi.getFieldValue("usor","Gpc")):(document.getElementById("usor-included").checked=!1,disableusor(!0)),cmpApi.hasSection("ustx")?(document.getElementById("ustx-included").checked=!0,disableustx(!1),document.getElementById("ustx-processing-notice").value=cmpApi.getFieldValue("ustx","ProcessingNotice"),document.getElementById("ustx-sale-opt-out-notice").value=cmpApi.getFieldValue("ustx","SaleOptOutNotice"),document.getElementById("ustx-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("ustx","TargetedAdvertisingOptOutNotice"),document.getElementById("ustx-sale-opt-out").value=cmpApi.getFieldValue("ustx","SaleOptOut"),document.getElementById("ustx-targeted-advertising-opt-out").value=cmpApi.getFieldValue("ustx","TargetedAdvertisingOptOut"),document.getElementById("ustx-sensitive-data-processing-0").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[0],document.getElementById("ustx-sensitive-data-processing-1").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[1],document.getElementById("ustx-sensitive-data-processing-2").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[2],document.getElementById("ustx-sensitive-data-processing-3").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[3],document.getElementById("ustx-sensitive-data-processing-4").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[4],document.getElementById("ustx-sensitive-data-processing-5").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[5],document.getElementById("ustx-sensitive-data-processing-6").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[6],document.getElementById("ustx-sensitive-data-processing-7").value=cmpApi.getFieldValue("ustx","SensitiveDataProcessing")[7],document.getElementById("ustx-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("ustx","KnownChildSensitiveDataConsents"),document.getElementById("ustx-additional-data-processing-consent").value=cmpApi.getFieldValue("ustx","AdditionalDataProcessingConsent"),document.getElementById("ustx-mspa-covered-transaction").value=cmpApi.getFieldValue("ustx","MspaCoveredTransaction"),document.getElementById("ustx-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("ustx","MspaOptOutOptionMode"),document.getElementById("ustx-mspa-service-provider-mode").value=cmpApi.getFieldValue("ustx","MspaServiceProviderMode"),document.getElementById("ustx-gpc-segment-included").checked=cmpApi.getFieldValue("ustx","GpcSegmentIncluded"),document.getElementById("ustx-gpc").checked=cmpApi.getFieldValue("ustx","Gpc")):(document.getElementById("ustx-included").checked=!1,disableustx(!0)),cmpApi.hasSection("usde")?(document.getElementById("usde-included").checked=!0,disableusde(!1),document.getElementById("usde-processing-notice").value=cmpApi.getFieldValue("usde","ProcessingNotice"),document.getElementById("usde-sale-opt-out-notice").value=cmpApi.getFieldValue("usde","SaleOptOutNotice"),document.getElementById("usde-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usde","TargetedAdvertisingOptOutNotice"),document.getElementById("usde-sale-opt-out").value=cmpApi.getFieldValue("usde","SaleOptOut"),document.getElementById("usde-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usde","TargetedAdvertisingOptOut"),document.getElementById("usde-sensitive-data-processing-0").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[0],document.getElementById("usde-sensitive-data-processing-1").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[1],document.getElementById("usde-sensitive-data-processing-2").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[2],document.getElementById("usde-sensitive-data-processing-3").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[3],document.getElementById("usde-sensitive-data-processing-4").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[4],document.getElementById("usde-sensitive-data-processing-5").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[5],document.getElementById("usde-sensitive-data-processing-6").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[6],document.getElementById("usde-sensitive-data-processing-7").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[7],document.getElementById("usde-sensitive-data-processing-8").value=cmpApi.getFieldValue("usde","SensitiveDataProcessing")[8],document.getElementById("usde-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usde","KnownChildSensitiveDataConsents")[0],document.getElementById("usde-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usde","KnownChildSensitiveDataConsents")[1],document.getElementById("usde-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usde","KnownChildSensitiveDataConsents")[2],document.getElementById("usde-known-child-sensitive-data-consents-3").value=cmpApi.getFieldValue("usde","KnownChildSensitiveDataConsents")[3],document.getElementById("usde-known-child-sensitive-data-consents-4").value=cmpApi.getFieldValue("usde","KnownChildSensitiveDataConsents")[4],document.getElementById("usde-additional-data-processing-consent").value=cmpApi.getFieldValue("usde","AdditionalDataProcessingConsent"),document.getElementById("usde-mspa-covered-transaction").value=cmpApi.getFieldValue("usde","MspaCoveredTransaction"),document.getElementById("usde-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usde","MspaOptOutOptionMode"),document.getElementById("usde-mspa-service-provider-mode").value=cmpApi.getFieldValue("usde","MspaServiceProviderMode"),document.getElementById("usde-gpc-segment-included").checked=cmpApi.getFieldValue("usde","GpcSegmentIncluded"),document.getElementById("usde-gpc").checked=cmpApi.getFieldValue("usde","Gpc")):(document.getElementById("usde-included").checked=!1,disableusde(!0)),cmpApi.hasSection("usia")?(document.getElementById("usia-included").checked=!0,disableusia(!1),document.getElementById("usia-processing-notice").value=cmpApi.getFieldValue("usia","ProcessingNotice"),document.getElementById("usia-sale-opt-out-notice").value=cmpApi.getFieldValue("usia","SaleOptOutNotice"),document.getElementById("usia-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usia","TargetedAdvertisingOptOutNotice"),document.getElementById("usia-sensitive-data-opt-out-notice").value=cmpApi.getFieldValue("usia","SensitiveDataOptOutNotice"),document.getElementById("usia-sale-opt-out").value=cmpApi.getFieldValue("usia","SaleOptOut"),document.getElementById("usia-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usia","TargetedAdvertisingOptOut"),document.getElementById("usia-sensitive-data-processing-0").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[0],document.getElementById("usia-sensitive-data-processing-1").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[1],document.getElementById("usia-sensitive-data-processing-2").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[2],document.getElementById("usia-sensitive-data-processing-3").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[3],document.getElementById("usia-sensitive-data-processing-4").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[4],document.getElementById("usia-sensitive-data-processing-5").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[5],document.getElementById("usia-sensitive-data-processing-6").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[6],document.getElementById("usia-sensitive-data-processing-7").value=cmpApi.getFieldValue("usia","SensitiveDataProcessing")[7],document.getElementById("usia-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usia","KnownChildSensitiveDataConsents"),document.getElementById("usia-mspa-covered-transaction").value=cmpApi.getFieldValue("usia","MspaCoveredTransaction"),document.getElementById("usia-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usia","MspaOptOutOptionMode"),document.getElementById("usia-mspa-service-provider-mode").value=cmpApi.getFieldValue("usia","MspaServiceProviderMode"),document.getElementById("usia-gpc-segment-included").checked=cmpApi.getFieldValue("usia","GpcSegmentIncluded"),document.getElementById("usia-gpc").checked=cmpApi.getFieldValue("usia","Gpc")):(document.getElementById("usia-included").checked=!1,disableusia(!0)),cmpApi.hasSection("usne")?(document.getElementById("usne-included").checked=!0,disableusne(!1),document.getElementById("usne-processing-notice").value=cmpApi.getFieldValue("usne","ProcessingNotice"),document.getElementById("usne-sale-opt-out-notice").value=cmpApi.getFieldValue("usne","SaleOptOutNotice"),document.getElementById("usne-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usne","TargetedAdvertisingOptOutNotice"),document.getElementById("usne-sale-opt-out").value=cmpApi.getFieldValue("usne","SaleOptOut"),document.getElementById("usne-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usne","TargetedAdvertisingOptOut"),document.getElementById("usne-sensitive-data-processing-0").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[0],document.getElementById("usne-sensitive-data-processing-1").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[1],document.getElementById("usne-sensitive-data-processing-2").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[2],document.getElementById("usne-sensitive-data-processing-3").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[3],document.getElementById("usne-sensitive-data-processing-4").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[4],document.getElementById("usne-sensitive-data-processing-5").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[5],document.getElementById("usne-sensitive-data-processing-6").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[6],document.getElementById("usne-sensitive-data-processing-7").value=cmpApi.getFieldValue("usne","SensitiveDataProcessing")[7],document.getElementById("usne-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usne","KnownChildSensitiveDataConsents"),document.getElementById("usne-additional-data-processing-consent").value=cmpApi.getFieldValue("usne","AdditionalDataProcessingConsent"),document.getElementById("usne-mspa-covered-transaction").value=cmpApi.getFieldValue("usne","MspaCoveredTransaction"),document.getElementById("usne-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usne","MspaOptOutOptionMode"),document.getElementById("usne-mspa-service-provider-mode").value=cmpApi.getFieldValue("usne","MspaServiceProviderMode"),document.getElementById("usne-gpc-segment-included").checked=cmpApi.getFieldValue("usne","GpcSegmentIncluded"),document.getElementById("usne-gpc").checked=cmpApi.getFieldValue("usne","Gpc")):(document.getElementById("usne-included").checked=!1,disableusne(!0)),cmpApi.hasSection("usnh")?(document.getElementById("usnh-included").checked=!0,disableusnh(!1),document.getElementById("usnh-processing-notice").value=cmpApi.getFieldValue("usnh","ProcessingNotice"),document.getElementById("usnh-sale-opt-out-notice").value=cmpApi.getFieldValue("usnh","SaleOptOutNotice"),document.getElementById("usnh-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usnh","TargetedAdvertisingOptOutNotice"),document.getElementById("usnh-sale-opt-out").value=cmpApi.getFieldValue("usnh","SaleOptOut"),document.getElementById("usnh-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usnh","TargetedAdvertisingOptOut"),document.getElementById("usnh-sensitive-data-processing-0").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[0],document.getElementById("usnh-sensitive-data-processing-1").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[1],document.getElementById("usnh-sensitive-data-processing-2").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[2],document.getElementById("usnh-sensitive-data-processing-3").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[3],document.getElementById("usnh-sensitive-data-processing-4").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[4],document.getElementById("usnh-sensitive-data-processing-5").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[5],document.getElementById("usnh-sensitive-data-processing-6").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[6],document.getElementById("usnh-sensitive-data-processing-7").value=cmpApi.getFieldValue("usnh","SensitiveDataProcessing")[7],document.getElementById("usnh-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usnh","KnownChildSensitiveDataConsents")[0],document.getElementById("usnh-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usnh","KnownChildSensitiveDataConsents")[1],document.getElementById("usnh-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usnh","KnownChildSensitiveDataConsents")[2],document.getElementById("usnh-additional-data-processing-consent").value=cmpApi.getFieldValue("usnh","AdditionalDataProcessingConsent"),document.getElementById("usnh-mspa-covered-transaction").value=cmpApi.getFieldValue("usnh","MspaCoveredTransaction"),document.getElementById("usnh-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usnh","MspaOptOutOptionMode"),document.getElementById("usnh-mspa-service-provider-mode").value=cmpApi.getFieldValue("usnh","MspaServiceProviderMode"),document.getElementById("usnh-gpc-segment-included").checked=cmpApi.getFieldValue("usnh","GpcSegmentIncluded"),document.getElementById("usnh-gpc").checked=cmpApi.getFieldValue("usnh","Gpc")):(document.getElementById("usnh-included").checked=!1,disableusnh(!0)),cmpApi.hasSection("usnj")?(document.getElementById("usnj-included").checked=!0,disableusnj(!1),document.getElementById("usnj-processing-notice").value=cmpApi.getFieldValue("usnj","ProcessingNotice"),document.getElementById("usnj-sale-opt-out-notice").value=cmpApi.getFieldValue("usnj","SaleOptOutNotice"),document.getElementById("usnj-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usnj","TargetedAdvertisingOptOutNotice"),document.getElementById("usnj-sale-opt-out").value=cmpApi.getFieldValue("usnj","SaleOptOut"),document.getElementById("usnj-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usnj","TargetedAdvertisingOptOut"),document.getElementById("usnj-sensitive-data-processing-0").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[0],document.getElementById("usnj-sensitive-data-processing-1").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[1],document.getElementById("usnj-sensitive-data-processing-2").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[2],document.getElementById("usnj-sensitive-data-processing-3").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[3],document.getElementById("usnj-sensitive-data-processing-4").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[4],document.getElementById("usnj-sensitive-data-processing-5").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[5],document.getElementById("usnj-sensitive-data-processing-6").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[6],document.getElementById("usnj-sensitive-data-processing-7").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[7],document.getElementById("usnj-sensitive-data-processing-8").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[8],document.getElementById("usnj-sensitive-data-processing-9").value=cmpApi.getFieldValue("usnj","SensitiveDataProcessing")[9],document.getElementById("usnj-known-child-sensitive-data-consents-0").value=cmpApi.getFieldValue("usnj","KnownChildSensitiveDataConsents")[0],document.getElementById("usnj-known-child-sensitive-data-consents-1").value=cmpApi.getFieldValue("usnj","KnownChildSensitiveDataConsents")[1],document.getElementById("usnj-known-child-sensitive-data-consents-2").value=cmpApi.getFieldValue("usnj","KnownChildSensitiveDataConsents")[2],document.getElementById("usnj-known-child-sensitive-data-consents-3").value=cmpApi.getFieldValue("usnj","KnownChildSensitiveDataConsents")[3],document.getElementById("usnj-known-child-sensitive-data-consents-4").value=cmpApi.getFieldValue("usnj","KnownChildSensitiveDataConsents")[4],document.getElementById("usnj-additional-data-processing-consent").value=cmpApi.getFieldValue("usnj","AdditionalDataProcessingConsent"),document.getElementById("usnj-mspa-covered-transaction").value=cmpApi.getFieldValue("usnj","MspaCoveredTransaction"),document.getElementById("usnj-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usnj","MspaOptOutOptionMode"),document.getElementById("usnj-mspa-service-provider-mode").value=cmpApi.getFieldValue("usnj","MspaServiceProviderMode"),document.getElementById("usnj-gpc-segment-included").checked=cmpApi.getFieldValue("usnj","GpcSegmentIncluded"),document.getElementById("usnj-gpc").checked=cmpApi.getFieldValue("usnj","Gpc")):(document.getElementById("usnj-included").checked=!1,disableusnj(!0)),cmpApi.hasSection("ustn")?(document.getElementById("ustn-included").checked=!0,disableustn(!1),document.getElementById("ustn-processing-notice").value=cmpApi.getFieldValue("ustn","ProcessingNotice"),document.getElementById("ustn-sale-opt-out-notice").value=cmpApi.getFieldValue("ustn","SaleOptOutNotice"),document.getElementById("ustn-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("ustn","TargetedAdvertisingOptOutNotice"),document.getElementById("ustn-sale-opt-out").value=cmpApi.getFieldValue("ustn","SaleOptOut"),document.getElementById("ustn-targeted-advertising-opt-out").value=cmpApi.getFieldValue("ustn","TargetedAdvertisingOptOut"),document.getElementById("ustn-sensitive-data-processing-0").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[0],document.getElementById("ustn-sensitive-data-processing-1").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[1],document.getElementById("ustn-sensitive-data-processing-2").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[2],document.getElementById("ustn-sensitive-data-processing-3").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[3],document.getElementById("ustn-sensitive-data-processing-4").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[4],document.getElementById("ustn-sensitive-data-processing-5").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[5],document.getElementById("ustn-sensitive-data-processing-6").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[6],document.getElementById("ustn-sensitive-data-processing-7").value=cmpApi.getFieldValue("ustn","SensitiveDataProcessing")[7],document.getElementById("ustn-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("ustn","KnownChildSensitiveDataConsents"),document.getElementById("ustn-additional-data-processing-consent").value=cmpApi.getFieldValue("ustn","AdditionalDataProcessingConsent"),document.getElementById("ustn-mspa-covered-transaction").value=cmpApi.getFieldValue("ustn","MspaCoveredTransaction"),document.getElementById("ustn-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("ustn","MspaOptOutOptionMode"),document.getElementById("ustn-mspa-service-provider-mode").value=cmpApi.getFieldValue("ustn","MspaServiceProviderMode"),document.getElementById("ustn-gpc-segment-included").checked=cmpApi.getFieldValue("ustn","GpcSegmentIncluded"),document.getElementById("ustn-gpc").checked=cmpApi.getFieldValue("ustn","Gpc")):(document.getElementById("ustn-included").checked=!1,disableustn(!0)),cmpApi.hasSection("usmn")?(document.getElementById("usmn-included").checked=!0,disableusmn(!1),document.getElementById("usmn-processing-notice").value=cmpApi.getFieldValue("usmn","ProcessingNotice"),document.getElementById("usmn-sale-opt-out-notice").value=cmpApi.getFieldValue("usmn","SaleOptOutNotice"),document.getElementById("usmn-targeted-advertising-opt-out-notice").value=cmpApi.getFieldValue("usmn","TargetedAdvertisingOptOutNotice"),document.getElementById("usmn-sale-opt-out").value=cmpApi.getFieldValue("usmn","SaleOptOut"),document.getElementById("usmn-targeted-advertising-opt-out").value=cmpApi.getFieldValue("usmn","TargetedAdvertisingOptOut"),document.getElementById("usmn-sensitive-data-processing-0").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[0],document.getElementById("usmn-sensitive-data-processing-1").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[1],document.getElementById("usmn-sensitive-data-processing-2").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[2],document.getElementById("usmn-sensitive-data-processing-3").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[3],document.getElementById("usmn-sensitive-data-processing-4").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[4],document.getElementById("usmn-sensitive-data-processing-5").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[5],document.getElementById("usmn-sensitive-data-processing-6").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[6],document.getElementById("usmn-sensitive-data-processing-7").value=cmpApi.getFieldValue("usmn","SensitiveDataProcessing")[7],document.getElementById("usmn-known-child-sensitive-data-consents").value=cmpApi.getFieldValue("usmn","KnownChildSensitiveDataConsents"),document.getElementById("usmn-additional-data-processing-consent").value=cmpApi.getFieldValue("usmn","AdditionalDataProcessingConsent"),document.getElementById("usmn-mspa-covered-transaction").value=cmpApi.getFieldValue("usmn","MspaCoveredTransaction"),document.getElementById("usmn-mspa-opt-out-option-mode").value=cmpApi.getFieldValue("usmn","MspaOptOutOptionMode"),document.getElementById("usmn-mspa-service-provider-mode").value=cmpApi.getFieldValue("usmn","MspaServiceProviderMode"),document.getElementById("usmn-gpc-segment-included").checked=cmpApi.getFieldValue("usmn","GpcSegmentIncluded"),document.getElementById("usmn-gpc").checked=cmpApi.getFieldValue("usmn","Gpc")):(document.getElementById("usmn-included").checked=!1,disableusmn(!0));let o=cmpApi.getObject();o.tcfeuv2&&(o.tcfeuv2.Created=o.tcfeuv2.Created.toJSON(),o.tcfeuv2.LastUpdated=o.tcfeuv2.LastUpdated.toJSON()),o.tcfcav1&&(o.tcfcav1.Created=o.tcfcav1.Created.toJSON(),o.tcfcav1.LastUpdated=o.tcfcav1.LastUpdated.toJSON()),console.log(JSON.stringify(o));let d=a;i&&(d=cmpApi.hasSection("tcfeuv2")?cmpApi.getSectionString("tcfeuv2"):""),d||(d="");let r=window.location.href.indexOf("#");r>-1?window.location.href=window.location.href.substring(0,r+1)+d:window.location.href=window.location.href+"#"+d,$("#jsonview").JSONView(o,{collapsed:!0})}catch(s){throw toastr.error(s),s}}window.decode=yi;const Vi=[{id:"header-tab-pane",html:Ns},{id:"tcfeuv2-tab-pane",html:Ts},{id:"tcfcav1-tab-pane",html:_s},{id:"uspv1-tab-pane",html:ys},{id:"usnat-tab-pane",html:Vs},{id:"usca-tab-pane",html:Ps},{id:"usva-tab-pane",html:Cs},{id:"usco-tab-pane",html:Ds},{id:"usut-tab-pane",html:ws},{id:"usct-tab-pane",html:Ms},{id:"usfl-tab-pane",html:ks},{id:"usmt-tab-pane",html:Rs},{id:"usor-tab-pane",html:Gs},{id:"ustx-tab-pane",html:xs},{id:"usde-tab-pane",html:Bs},{id:"usia-tab-pane",html:Ls},{id:"usne-tab-pane",html:Fs},{id:"usnh-tab-pane",html:Us},{id:"usnj-tab-pane",html:js},{id:"ustn-tab-pane",html:Hs},{id:"usmn-tab-pane",html:Ks}];function Pi(){for(const n of Vi){const t=document.getElementById(n.id);t&&(t.innerHTML=n.html)}}async function Ci(){window.cmpApi=new As(100,1),window.gvlV2=await cmpApi.getGvlFromUrl({baseUrl:"/vendorlist/v2"}),console.log(gvlV2),window.gvlV3=await cmpApi.getGvlFromUrl({baseUrl:"/vendorlist/v3"}),console.log(gvlV3),window.gvlV2Ca=await cmpApi.getGvlFromUrl({baseUrl:"/vendorlist/v2/ca"}),console.log(gvlV2Ca),tcfEuV2PolicyVersionChanged(4),tcfCaV1PolicyVersionChanged(2);let n=[document.getElementById("tcfeuv2-consent-language"),document.getElementById("tcfcav1-consent-language")],t=["BG","CA","CS","DA","DE","EL","EN","ES","ET","FI","FR","HR","HU","IT","LT","LV","MT","NL","NO","PL","PT","RO","RU","SK","SL","SV","ZH"];for(let s=0;s<t.length;s++){let i=t[s];for(let a=0;a<n.length;a++){let o=n[a];o.options[o.options.length]=new Option(i,i)}}let e=window.location.href.indexOf("#");if(e>-1){let s=window.location.href.substring(e+1,window.location.href.length);s.startsWith("D")?(document.getElementById("gpp-string").value=s,decode(),document.getElementById("tcfeu-string").value=cmpApi.getSectionString("tcfeuv2")):s.startsWith("C")&&($("#tcfeu-string-tab").tab("show"),$("#tcfeuv2-tab").tab("show"),document.getElementById("tcfeu-string").value=s,document.getElementById("gpp-string").value="DBABMA~"+s,decode())}else window.location.href+="#";document.getElementById("decode-spinner").style.display="none",document.getElementById("encode-spinner").style.display="none",document.getElementById("decode-button").style.display="inline",document.getElementById("encode-button").style.display="inline"}Date.prototype.toJSON=function(){return this.toUTCString()};Pi();let vt=new Date;document.getElementById("tcfeuv2-created").valueAsDate=vt;document.getElementById("tcfeuv2-last-updated").valueAsDate=vt;document.getElementById("tcfcav1-created").valueAsDate=vt;document.getElementById("tcfcav1-last-updated").valueAsDate=vt;toastr.options={positionClass:"toast-top-full-width"};$("#jsonview").JSONView({},{collapsed:!0});Ci();
