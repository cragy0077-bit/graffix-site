const products = [
  {name:'Signal Logo Tee — Bone',category:'apparel',price:39000,concept:'tee',tag:'NEW'},
  {name:'GFX Distressed Cap — Acid',category:'headwear',price:36000,concept:'cap',tag:'DROP 001'},
  {name:'Noise Unit Hoodie — Black',category:'apparel',price:79000,concept:'tee',tag:'LIMITED'},
  {name:'그래픽스 호러 프레임 맥세이프 케이스',category:'cases',price:24900,image:'https://www.m-peakmall.com/web/product/big/202606/6badf4b8717aaeb5e746b91739c64ecf.webp',url:'https://www.m-peakmall.com/product/엠픽-그래픽스-호러-프레임-맥세이프-케이스-uv/10093/category/3249/display/1/'},
  {name:'그래픽스 레이스 프레임 맥세이프 케이스',category:'cases',price:24900,image:'https://www.m-peakmall.com/web/product/big/202605/08603424da988fb26a67d9145536f0b8.webp',url:'https://www.m-peakmall.com/product/엠픽-그래픽스-레이스-프레임-맥세이프-케이스-uv/10059/category/3249/display/1/'},
  {name:'그래픽스 반사경 맥세이프 아크릴 스마트톡',category:'accessories',price:19900,image:'https://www.m-peakmall.com/web/product/big/202604/94be205919dfd2c0c38c1f58be897ec6.webp',url:'https://www.m-peakmall.com/product/엠픽-그래픽스-반사경-맥세이프-투명-디스크-아크릴-스마트톡-단품/10054/category/3249/display/1/'},
  {name:'그래픽스 카툰아트 맥세이프 젤하드 케이스',category:'cases',price:24900,image:'https://www.m-peakmall.com/web/product/big/202604/3b7f17fd24ca6c30b270b9b44e2420fb.webp',url:'https://www.m-peakmall.com/product/엠픽-그래픽스-카툰아트-맥세이프-호환-젤하드-케이스-uv/10052/category/3249/display/1/'},
  {name:'그래픽스 리틀보이 프레임 맥세이프 케이스',category:'cases',price:24900,image:'https://www.m-peakmall.com/web/product/big/202603/be4f2532ae4951afb7db116b3203e658.webp',url:'https://www.m-peakmall.com/product/엠픽-그래픽스-리틀보이-프레임-맥세이프-케이스-uv/10040/category/3249/display/1/'},
  {name:'그래픽스 Ver.2 프레임 맥세이프 케이스',category:'cases',price:24900,image:'https://www.m-peakmall.com/web/product/big/202601/3ad64d3609300cf94a19ea298a05d286.webp',url:'https://www.m-peakmall.com/product/엠픽-그래픽스ver2-프레임-맥세이프-케이스-uv/9971/category/3249/display/1/'},
  {name:'그래픽스 맥세이프 아크릴 스마트톡',category:'accessories',price:19900,image:'https://www.m-peakmall.com/web/product/big/202512/f8117e889e14f32e4b5a96afb69d1138.webp',url:'https://www.m-peakmall.com/product/엠픽-그래픽스-맥세이프-투명-디스크-아크릴-스마트톡-단품-uv/9939/category/3249/display/1/'},
  {name:'그래픽스 스티커 프레임 맥세이프 케이스',category:'cases',price:24900,image:'https://www.m-peakmall.com/web/product/big/202512/4193461319871b16f3c80a257d64db48.webp',url:'https://www.m-peakmall.com/product/엠픽-그래픽스-스티커-프레임-맥세이프-케이스-uv/9938/category/3249/display/1/'},
  {name:'그래픽스 Y3K 프레임 맥세이프 케이스',category:'cases',price:24900,image:'https://www.m-peakmall.com/web/product/big/202512/8bc6707ffcc62b4c20b12414bd4bd749.webp',url:'https://www.m-peakmall.com/product/엠픽-그래픽스-y3k-프레임-맥세이프-케이스-uv/9937/category/3249/display/1/'}
];

const grid = document.querySelector('#productGrid');
const count = document.querySelector('#resultCount');
const formatPrice = value => `₩${value.toLocaleString('ko-KR')}`;

function render(filter='all'){
  const list=products.filter(p=>filter==='all'||p.category===filter);
  count.textContent=String(list.length).padStart(2,'0');
  grid.innerHTML=list.map((p,i)=>`<article class="product-card" data-category="${p.category}">
    <div class="product-media ${p.concept?'concept '+p.concept:''}">
      <span class="product-index">${String(i+1).padStart(2,'0')} / ${p.tag||p.category.toUpperCase()}</span>
      ${p.image?`<img src="${p.image}" alt="${p.name}" loading="lazy">`:`<div class="concept-logo"><img src="grafix-logo.png" alt="Graffix."></div>`}
      <button class="quick-add" type="button" aria-label="${p.name} 쇼핑백에 담기">+</button>
    </div>
    <div class="product-info"><div><h3>${p.url?`<a href="${p.url}" target="_blank" rel="noopener">${p.name}</a>`:p.name}</h3><p>${p.category.toUpperCase()} / GRAFFIX</p></div><strong>${formatPrice(p.price)}</strong></div>
  </article>`).join('');
}

document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelector('.filters .active').classList.remove('active');button.classList.add('active');render(button.dataset.filter);
}));

let bag=0;
grid.addEventListener('click',e=>{if(e.target.matches('.quick-add')){bag++;document.querySelector('#bagCount').textContent=bag;e.target.textContent='✓';setTimeout(()=>e.target.textContent='+',900)}});
document.querySelector('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();document.querySelector('#formMessage').textContent='SIGNAL RECEIVED — 다음 드롭에서 만나요.';e.target.reset()});
render();

