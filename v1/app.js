async function loadData(){
 const res = await fetch('../data/mock.json');
 const data = await res.json();
 buildFocus(data);
 buildOverview(data.overview);
 buildTabs(data.areas);
}

function buildFocus(data){
 const el=document.getElementById('focusStrip');
 el.innerHTML='';
 const sections=['now','this_week','waiting','delegated','bottlenecks'];
 sections.forEach(s=>{
   const div=document.createElement('div');
   div.className='focus-block';
   div.innerHTML=`<h3>${s.replace('_',' ')}</h3>`;
   (data.focus[s]||[]).forEach(i=>{
     const item=document.createElement('div');
     item.className='focus-item';
     item.innerText=i.title;
     div.appendChild(item);
   });
   el.appendChild(div);
 });
}

function buildOverview(overview){
 const el=document.getElementById('overviewGrid');
 el.innerHTML='';
 Object.entries(overview).forEach(([k,v])=>{
   const card=document.createElement('div');
   card.className='metric';
   card.innerHTML=`<div class="card-label">${k.replaceAll('_',' ')}</div><div class="card-value">${v}</div>`;
   el.appendChild(card);
 });
}

function buildTabs(areas){
 const tabBar=document.getElementById('tabs');
 const content=document.getElementById('tabContents');
 tabBar.innerHTML='';
 content.innerHTML='';

 Object.entries(areas).forEach(([key,val],i)=>{
   const tab=document.createElement('div');
   tab.className='tab'+(i===0?' active':'');
   tab.innerText=key;
   tab.dataset.tab=key;
   tab.onclick=()=>switchTab(key);
   tabBar.appendChild(tab);

   const pane=document.createElement('div');
   pane.className='tab-content'+(i===0?' active':'');
   pane.id=key;
   val.forEach(item=>{
     const div=document.createElement('div');
     div.className='item';
     div.innerHTML=`<div>${item.title}</div><small>${item.owner||''} • ${item.status||''}</small>`;
     pane.appendChild(div);
   });
   content.appendChild(pane);
 });
}

function switchTab(id){
 document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
 document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
 document.querySelector(`[data-tab="${id}"]`).classList.add('active');
 document.getElementById(id).classList.add('active');
}

loadData();
