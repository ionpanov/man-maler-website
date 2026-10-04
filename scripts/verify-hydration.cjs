const { JSDOM, VirtualConsole } = require(process.cwd()+'/node_modules/jsdom');
const fs=require('fs');const assert=require('assert/strict');
(async()=>{
for(const route of ['/', '/maler-koebenhavn','/kontakt']){
 const html=fs.readFileSync(route==='/'?'dist/index.html':`dist${route}/index.html`,'utf8');
 const errors=[]; const vc=new VirtualConsole();vc.on('error',(...args)=>errors.push(args.join(' ')));vc.on('jsdomError',e=>errors.push(e.message));
 const dom=new JSDOM(html,{url:'https://manmaler.dk'+route,runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:vc}); const w=dom.window;
 w.scrollTo=()=>{};w.matchMedia=()=>({matches:false,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}});
 w.ResizeObserver=class{observe(){}unobserve(){}disconnect(){}};
 w.IntersectionObserver=class{observe(){}unobserve(){}disconnect(){}};
 const heading=w.document.querySelector('h1').textContent;
 const src=w.document.querySelector('script[type="module"]').getAttribute('src');
 w.eval(fs.readFileSync('dist'+src,'utf8'));
 await new Promise(r=>setTimeout(r,500));
 assert.equal(w.document.querySelector('h1').textContent,heading);
 assert.ok(!errors.some(e=>/hydration|Hydration|Minified React error|Uncaught/.test(e)),errors.join('\n'));
 const reject=[...w.document.querySelectorAll('button')].find(x=>x.textContent==='Reject');assert.ok(reject,'interactive cookie banner');reject.click();
 await new Promise(r=>setTimeout(r,50));assert.equal(w.localStorage.getItem('cookie-consent'),'rejected');
 console.log(route, 'hydration and consent interaction passed');
 if(errors.length)console.log('Non-blocking console messages:',errors);
 dom.window.close();
}
})().catch(e=>{console.error(e);process.exit(1)});
