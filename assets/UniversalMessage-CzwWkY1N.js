import{u as i,r as h,g,P as l,j as t,d as M,b as S,i as F,k as _}from"./index-DB1q4QL7.js";const B=i.li`
  width: 274px;
  position: relative;
`,H=i.button`
  position: absolute;
  top: 16px;
  right: 15px;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 18px;
  height: 18px;
`,W=i.svg`
  stroke: rgba(255, 255, 255, 0.8);
  width: 18px;
  height: 18px;
`,N=i.img`
  margin-bottom: 14px;
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 12px;
`,X=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,C=i.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-text-color);
`;i.span`
  color: var(--primary-accent-color);
`;const D=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 28px;
  height: 40px;
  overflow: hidden;
`,O=i.ul`
  display: flex;
`,x=i.li`
  padding: 0 6px;
  &:not(:last-child) {
    border-right: 1px solid var(--border-color);
  }
`,U=i.button`
  font-family: "Manrope", san-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 12px;
  padding: 12px 99px;
  width: 100%;
  background-color: var(--primary-accent-color);
  color: var(--primary-white-color);
  border: none;
  transition: background-color var(--transition);
  &:hover {
    background-color: var(--secondary-accent-color);
  }
`;function y(){return y=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},y.apply(this,arguments)}function Y(e,s){if(e==null)return{};var o=K(e,s),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(s.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function K(e,s){if(e==null)return{};var o={},n=Object.keys(e),r,a;for(a=0;a<n.length;a++)r=n[a],!(s.indexOf(r)>=0)&&(o[r]=e[r]);return o}var b=h.forwardRef(function(e,s){var o=e.color,n=o===void 0?"currentColor":o,r=e.size,a=r===void 0?24:r,p=Y(e,["color","size"]);return g.createElement("svg",y({ref:s,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),g.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}))});b.propTypes={color:l.string,size:l.oneOfType([l.string,l.number])};b.displayName="Heart";const G=b;function j(){return j=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var o=arguments[s];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},j.apply(this,arguments)}function J(e,s){if(e==null)return{};var o=Q(e,s),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(s.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Q(e,s){if(e==null)return{};var o={},n=Object.keys(e),r,a;for(a=0;a<n.length;a++)r=n[a],!(s.indexOf(r)>=0)&&(o[r]=e[r]);return o}var w=h.forwardRef(function(e,s){var o=e.color,n=o===void 0?"currentColor":o,r=e.size,a=r===void 0?24:r,p=J(e,["color","size"]);return g.createElement("svg",j({ref:s,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),g.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),g.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))});w.propTypes={color:l.string,size:l.oneOfType([l.string,l.number])};w.displayName="X";const V=w,Z=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--secondary-text-color);
  overflow: hidden;
  overflow-y: auto;
  transision: opacity; 0.3s;
  z-index: 999;
`,ee=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 541px;
  display: flex;
  justify-content: center;
  align-itmes: center;
  transform: translateY(-50%) translateX(-50%);
`,te=i.div`
  position: relative;
  width: 100%;
  background-color: var(--primary-white-color);
  border-radius: 24px;
  padding: 40px;
`,re=i.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
`,oe=i.div`
  width: 461px;
  position: relative;
`;i.button`
  position: absolute;
  top: 16px;
  right: 15px;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 18px;
  height: 18px;
`;i.svg`
  stroke: rgba(255, 255, 255, 0.8);
  width: 24px;
  height: 24px;
`;const ne=i.img`
  margin-bottom: 14px;
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 12px;
`,ie=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,se=i.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-text-color);
`,ae=i.span`
  color: var(--primary-accent-color);
`,E=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
  height: 40px;
`,f=i.ul`
  display: flex;
`,c=i.li`
  padding: 0 6px;
  height: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:not(:last-child) {
    border-right: 1px solid var(--border-color);
  }
`,le=i.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: var(--primary-text-color);
  margin-bottom: 24px;
`,z=i.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: var(--primary-text-color);
  margin-bottom: 8px;
`,de=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,m=i.li`
  border-radius: 35px;
  padding: 7px 14px;
  background-color: #f9f9f9;
  letter-spacing: -0.003px;
  color: var(--addit-text-color);
`,v=i.span`
  font-weight: 600;
  color: var(--primary-accent-color);
`,ce=i.a`
  font-family: "Manrope", san-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 12px;
  padding: 12px 50px;
  background-color: var(--primary-accent-color);
  color: var(--primary-white-color);
  border: none;
  transition: background-color var(--transition);
  &:hover,
  &:focus {
    background-color: var(--secondary-accent-color);
  }
`,R=({car:e})=>{const s=e.address.split(", "),o=e.rentalConditions.split(`
`),[n,r]=h.useState(!1),a=()=>{r(!0)},u=n?"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png":e.img;return t.jsxs(oe,{children:[t.jsx(ne,{src:u,alt:e.model,onError:a}),t.jsx(ie,{children:t.jsxs(se,{children:[e.make," ",t.jsx(ae,{children:e.model}),", ",e.year]})}),t.jsxs(E,{children:[t.jsxs(f,{children:[t.jsx(c,{children:s[1]}),t.jsx(c,{children:s[2]}),t.jsxs(c,{children:["Id: ",e.id]}),t.jsxs(c,{children:["Year: ",e.year]}),t.jsxs(c,{children:["Type: ",e.type]})]}),t.jsxs(f,{children:[t.jsxs(c,{children:["Fuel Consumption: ",e.fuelConsumption]}),t.jsxs(c,{children:["Engine size: ",e.engineSize]})]})]}),t.jsx(le,{children:e.description}),t.jsx(z,{children:"Accessories and functionalities:"}),t.jsxs(E,{children:[t.jsx(f,{children:e.accessories.map(d=>t.jsx(c,{children:d},d))}),t.jsx(f,{children:e.functionalities.map(d=>t.jsx(c,{children:d},d))})]}),t.jsx(z,{children:"Rental Conditions:"}),t.jsxs(de,{children:[o.map(d=>t.jsx(m,{children:d.includes(":")?t.jsxs(t.Fragment,{children:[t.jsx("span",{children:d.split(":")[0]}),t.jsx("span",{children:":"}),t.jsx(v,{children:d.split(":")[1]})]}):d},d)),t.jsxs(m,{children:["Mileage:"," ",t.jsx(v,{children:e.mileage.toLocaleString("en-US")})]}),t.jsxs(m,{children:["Price: ",t.jsx(v,{children:e.rentalPrice})]})]}),t.jsx(ce,{href:"tel:+380730000000",children:"Rental Car"})]})};R.propTypes={car:l.object.isRequired};const L=({content:e,onClose:s,isOpen:o})=>{h.useEffect(()=>{const r=p=>{p.key==="Escape"&&s()},a=()=>{document.body.style.overflow=o?"hidden":"auto"};return o&&(a(),window.addEventListener("resize",a)),window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r),window.removeEventListener("resize",a),document.body.style.overflow="auto"}},[s,o]);const n=r=>{r.target===r.currentTarget&&s()};return t.jsx(Z,{onClick:n,children:t.jsx(ee,{children:t.jsxs(te,{children:[t.jsx(re,{type:"button",onClick:s,children:t.jsx(V,{})}),t.jsx(R,{car:e})]})})})};L.propTypes={content:l.object.isRequired,onClose:l.func.isRequired,isOpen:l.bool.isRequired};const pe=e=>e.favorites.favorites,xe=({car:e})=>{const[s,o]=h.useState(!1),r=(M(pe)||[]).some(A=>A.id===e.id),[a,p]=h.useState(!1),u=()=>{p(!0)},P=a?"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png":e.img,k=S(),I=e.address.split(", "),q=e.type.split(", "),T=()=>{o(!0)},$=()=>{k(r?_(e.id):F(e))};return t.jsxs(B,{children:[t.jsx(H,{type:"button",onClick:$,children:t.jsx(W,{as:G,className:r?" favorite":""})}),t.jsx(N,{src:P,alt:e.model,onError:u}),t.jsxs(X,{children:[t.jsxs(C,{children:[e.make,", ",e.year]}),t.jsx(C,{children:e.rentalPrice})]}),t.jsxs(D,{children:[t.jsxs(O,{children:[t.jsx(x,{children:I[1]}),t.jsx(x,{children:I[2]}),t.jsx(x,{children:e.rentalCompany})]}),t.jsxs(O,{children:[t.jsx(x,{children:q[0]}),t.jsx(x,{children:e.model}),t.jsx(x,{children:e.id}),t.jsx(x,{children:e.accessories[0]})]})]}),t.jsx(U,{type:"button",onClick:T,children:"Learn more"}),s&&t.jsx(L,{onClose:()=>o(!1),content:e,isOpen:s})]},e.id)};xe.propTypes={car:l.shape({id:l.number.isRequired,img:l.string.isRequired,make:l.string.isRequired,model:l.string.isRequired,year:l.number.isRequired,rentalPrice:l.string.isRequired,address:l.string.isRequired,rentalCompany:l.string.isRequired,type:l.string.isRequired,accessories:l.arrayOf(l.string).isRequired}).isRequired};const ue=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,me=i.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  justify-content: center;
`,he=i.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: #8a8a89;
  margin: 100px auto;
`,ge=({content:e})=>t.jsx(he,{children:e});ge.propTypes={content:l.string.isRequired};export{ue as A,ge as U,me as a,xe as b,pe as f};
