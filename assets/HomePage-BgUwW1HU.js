import{u as r,j as e,L as a}from"./index-Bn94uVW7.js";import{m as n}from"./makes-DCESgvo9.js";const i=r.div`
  width: 100%;
  height: 400px;
  background-color: var(--secondary-text-color);
  background-image: linear-gradient(
      rgba(18, 20, 23, 0.2),
      rgba(18, 20, 23, 0.2)
    ),
    url("rent-car-goit-test/src/assets/images/hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 151px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  color: var(--primary-white-color);
  border-radius: 24px;
  margin-bottom: 30px;
`,s=r.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: 1px;
  text-align: center;
`,c=r.a`
  display: block;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 1px;
  &:hover {
    font-weight: 600;
  }
`,l=r.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.42857;
  color: var(--primary-accent-color);
  margin-bottom: 30px;
  text-align: center;
`,p=r.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 24px;
`,g=r.li`
  border-radius: 35px;
  font-size: 16px;
  padding: 7px 14px;
  background-color: #f9f9f9;
  letter-spacing: -0.003px;
  color: var(--addit-text-color);
`,x="/rent-car-goit-test/assets/hero-Cjs6Pcc4.jpg",m=()=>e.jsxs("div",{className:"container container-page",children:[e.jsxs(i,{style:{backgroundImage:`linear-gradient(
      rgba(18, 20, 23, 0.2),
      rgba(18, 20, 23, 0.2)
    ), url(${x})`},children:[e.jsx(s,{children:"Take control of your car rent"}),e.jsx(c,{as:a,to:"/catalog",children:"Find your car to rent"})]}),e.jsx(l,{children:"We have cars for you"}),e.jsx(p,{children:n.map((t,o)=>e.jsx(g,{children:t},o))})]});export{m as default};
