(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{219:function(e,n,t){e.exports=t(524)},243:function(e,n){},245:function(e,n){},247:function(e,n){},251:function(e,n){},278:function(e,n){},280:function(e,n){},290:function(e,n){},292:function(e,n){},302:function(e,n){},304:function(e,n){},423:function(e,n){},425:function(e,n){},432:function(e,n){},433:function(e,n){},523:function(e,n,t){},524:function(e,n,t){"use strict";t.r(n);var a,r,c,o,i,l,s,u,d,p,m,f,g,h,b,x,E=t(0),y=t.n(E),O=t(83),v=t.n(O),C=t(15),w=t.n(C),j=t(41),A=t(67),S=t(13),T=t(54),N=t(65),_=t.n(N),k=t(212),M=t.n(k),D=t(68),I=t(213),L=t(17),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(L.a)(Object(L.a)({},R),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(L.a)(Object(L.a)({},R),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(L.a)(Object(L.a)({},e),{},{account:n.payload.account});default:return e}},P={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(L.a)(Object(L.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(L.a)(Object(L.a)({},P),{},{loading:!1,error:!0,errorMsg:n.payload});default:return e}},F=Object(D.b)({blockchain:K,data:U}),W=[I.a],Y=Object(D.c)(D.a.apply(void 0,W)),z=Object(D.d)(F,Y),B=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},H=function(){return function(){var e=Object(j.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=e.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),n(B("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},G=function(e){return{type:"CONNECTION_FAILED",payload:e}},Q=function(e){return function(){var n=Object(j.a)(w.a.mark((function n(t){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:e}}),t(H());case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},X=t(14),q=X.a.div(a||(a=Object(S.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),J=X.a.div(r||(r=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),V=X.a.div(c||(c=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"]))),Z=X.a.div(o||(o=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),$=X.a.div(i||(i=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ee=X.a.div(l||(l=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var n=e.flex;return n||0}),(function(e){var n=e.fd;return n||"column"}),(function(e){var n=e.jc;return n||"flex-start"}),(function(e){var n=e.ai;return n||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),ne=X.a.p(s||(s=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),te=(X.a.p(u||(u=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),X.a.p(d||(d=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),ae=(X.a.div(p||(p=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),X.a.button(m||(m=Object(S.a)(["\n  padding: 10px;\n  border-radius: 0px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: none);\n  -webkit-box-shadow: none);\n  -moz-box-shadow: none);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"])))),re=X.a.button(f||(f=Object(S.a)(["\n  padding: 10px;\n  border-radius: 0%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: none);\n  -webkit-box-shadow: none);\n  -moz-box-shadow: none);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ce=X.a.div(g||(g=Object(S.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),oe=X.a.img(h||(h=Object(S.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ie=X.a.img(b||(b=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 5px solid var(--secondary);\n  background-color: var(--accent);\n  border-radius: 0%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),le=X.a.a(x||(x=Object(S.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var se=function(){var e,n,t=Object(T.b)(),a=Object(T.c)((function(e){return e.blockchain})),r=Object(T.c)((function(e){return e.data})),c=Object(E.useState)(!1),o=Object(A.a)(c,2),i=o[0],l=o[1],s=Object(E.useState)("Click buy to mint your NFT."),u=Object(A.a)(s,2),d=u[0],p=u[1],m=Object(E.useState)(1),f=Object(A.a)(m,2),g=f[0],h=f[1],b=Object(E.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),x=Object(A.a)(b,2),O=x[0],v=x[1],C=function(){""!==a.account&&null!==a.smartContract&&t(H(a.account))},S=function(){var e=Object(j.a)(w.a.mark((function e(){var n,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,v(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.useEffect)((function(){S()}),[]),Object(E.useEffect)((function(){C()}),[a.account]),y.a.createElement(q,null,y.a.createElement(ee,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:O.SHOW_BACKGROUND?"/config/images/bg.png":null},y.a.createElement(oe,{alt:"logo",src:"/config/images/logo.png"}),y.a.createElement(V,null),y.a.createElement(ce,{flex:1,style:{padding:24},test:!0},y.a.createElement(ee,{flex:1,jc:"center",ai:"center"},y.a.createElement(ie,{alt:"example",src:"/config/images/example.gif"})),y.a.createElement($,null),y.a.createElement(ee,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:0,border:"5px solid var(--secondary)",boxShadow:"none"}},y.a.createElement(ne,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"}},r.totalSupply," / ",O.MAX_SUPPLY),y.a.createElement(te,{style:{textAlign:"center",color:"var(--primary-text)"}},y.a.createElement(le,{target:"_blank",href:O.SCAN_LINK},(e=O.CONTRACT_ADDRESS,n=15,e.length>n?"".concat(e.substring(0,n),"..."):e))),y.a.createElement(V,null),Number(r.totalSupply)>=O.MAX_SUPPLY?y.a.createElement(y.a.Fragment,null,y.a.createElement(ne,{style:{textAlign:"center",color:"var(--accent-text)"}},"The sale has ended."),y.a.createElement(te,{style:{textAlign:"center",color:"var(--accent-text)"}},"You can still find ",O.NFT_NAME," on"),y.a.createElement(V,null),y.a.createElement(le,{target:"_blank",href:O.MARKETPLACE_LINK},O.MARKETPLACE)):y.a.createElement(y.a.Fragment,null,y.a.createElement(ne,{style:{textAlign:"center",color:"var(--accent-text)"}},"1 ",O.SYMBOL," costs ",O.DISPLAY_COST," ",O.NETWORK.SYMBOL,"."),y.a.createElement(J,null),y.a.createElement(te,{style:{textAlign:"center",color:"var(--accent-text)"}},"Excluding gas fees."),y.a.createElement(V,null),""===a.account||null===a.smartContract?y.a.createElement(ee,{ai:"center",jc:"center"},y.a.createElement(te,{style:{textAlign:"center",color:"var(--accent-text)"}},"Connect to the ",O.NETWORK.NAME," network"),y.a.createElement(V,null),y.a.createElement(ae,{onClick:function(e){e.preventDefault(),t(function(){var e=Object(j.a)(w.a.mark((function e(n){var t,a,r,c,o,i,l,s,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(c=e.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){e.next=33;break}return _.a.setProvider(i),l=new M.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return s=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==c.NETWORK.ID?(u=new _.a(a,c.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:s[0],smartContract:u,web3:l}}),i.on("accountsChanged",(function(e){n(Q(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(G("Change network to ".concat(c.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),n(G("Something went wrong."));case 31:e.next=34;break;case 33:n(G("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(n){return e.apply(this,arguments)}}()),C()}},"CONNECT"),""!==a.errorMsg?y.a.createElement(y.a.Fragment,null,y.a.createElement(V,null),y.a.createElement(te,{style:{textAlign:"center",color:"var(--accent-text)"}},a.errorMsg)):null):y.a.createElement(y.a.Fragment,null,y.a.createElement(te,{style:{textAlign:"center",color:"var(--accent-text)"}},d),y.a.createElement(Z,null),y.a.createElement(ee,{ai:"center",jc:"center",fd:"row"},y.a.createElement(re,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=g-1;e<1&&(e=1),h(e)}()}},"-"),y.a.createElement(Z,null),y.a.createElement(te,{style:{textAlign:"center",color:"var(--accent-text)"}},g),y.a.createElement(Z,null),y.a.createElement(re,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=g+1;e>10&&(e=10),h(e)}()}},"+")),y.a.createElement(V,null),y.a.createElement(ee,{ai:"center",jc:"center",fd:"row"},y.a.createElement(ae,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=O.WEI_COST,n=O.GAS_LIMIT,r=String(e*g),c=String(n*g);console.log("Cost: ",r),console.log("Gas limit: ",c),p("Minting your ".concat(O.NFT_NAME,"...")),l(!0),a.smartContract.methods.mint(g).send({gasLimit:String(c),to:O.CONTRACT_ADDRESS,from:a.account,value:r}).once("error",(function(e){console.log(e),p("Sorry, something went wrong please try again later."),l(!1)})).then((function(e){console.log(e),p("WOW, the ".concat(O.NFT_NAME," is yours! go visit Opensea.io to view it.")),l(!1),t(H(a.account))}))}(),C()}},i?"BUSY":"BUY")))),y.a.createElement(Z,null)),y.a.createElement($,null),y.a.createElement(ee,{flex:1,jc:"center",ai:"center"},y.a.createElement(ie,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}}))),y.a.createElement(Z,null),y.a.createElement(ee,{jc:"center",ai:"center",style:{width:"70%"}},y.a.createElement(te,{style:{textAlign:"center",color:"var(--primary-text)"}},"Please make sure you are connected to the right network (",O.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."),y.a.createElement(V,null),y.a.createElement(te,{style:{textAlign:"center",color:"var(--primary-text)"}},"We have set the gas limit to ",O.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."))))},ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,528)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))};t(523);v.a.render(y.a.createElement(T.a,{store:z},y.a.createElement(se,null)),document.getElementById("root")),ue()}},[[219,1,2]]]);
//# sourceMappingURL=main.6c7b90b8.chunk.js.map