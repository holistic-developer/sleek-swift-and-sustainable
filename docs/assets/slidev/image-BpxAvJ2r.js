import{d as i,y as l,o as r,b as c,f as d,h as u}from"../modules/vue-B3zgJnLn.js";import{b as f}from"../index-BTKMRyVo.js";function a(e){return e.startsWith("/")?"/sleek-swift-and-sustainable"+e.slice(1):e}function m(e,s=!1,n="cover"){const t=e&&(e[0]==="#"||e.startsWith("rgb")),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${a(e)})`:`url("${a(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:n};return o.background||delete o.background,o}const p=i({__name:"image",props:{image:{type:String},backgroundSize:{type:String,default:"cover"}},setup(e){const s=e,n=l(()=>m(s.image,!1,s.backgroundSize));return(t,o)=>(r(),c("div",{class:"slidev-layout w-full h-full",style:u(n.value)},[d(t.$slots,"default")],4))}}),g=f(p,[["__file","/home/andreas/Projects/sleek-swift-and-sustainable/node_modules/.pnpm/@slidev+client@0.48.8_postcss@8.4.38_vite@5.2.8/node_modules/@slidev/client/layouts/image.vue"]]);export{g as I};
