let state = null;

function loadState(){
  const saved = localStorage.getItem('ffa_os');
  if(saved){
    state = JSON.parse(saved);
    render();
  } else {
    fetch('../data/mock.json')
      .then(r => r.json())
      .then(d => {
        state = d;
        saveState();
        render();
      });
  }
}

function saveState(){
  localStorage.setItem('ffa_os', JSON.stringify(state));
}

function render(){
  buildFocus(state);
  buildOverview(state.overview);
  buildTabs(state.areas);
}

function addTask(area){
  const title = prompt('Task name');
  if(!title) return;

  state.areas[area].push({
    title,
    owner: 'Johnson',
    status: 'next'
  });

  saveState();
  render();
}

function updateTask(area, index){
  const item = state.areas[area][index];

  const status = prompt(
    'Status (next/in_progress/waiting/delegated/done)',
    item.status
  );

  if(status) item.status = status;

  saveState();
  render();
}

function buildTabs(areas){
  const tabBar = document.getElementById('tabs');
  const content = document.getElementById('tabContents');

  tabBar.innerHTML = '';
  content.innerHTML = '';

  Object.entries(areas).forEach(([key, val], i) => {
    const tab = document.createElement('div');
    tab.className = 'tab' + (i === 0 ? ' active' : '');
    tab.innerText = key;
    tab.dataset.tab = key;
    tab.onclick = () => switchTab(key);
    tabBar.appendChild(tab);

    const pane = document.createElement('div');
    pane.className = 'tab-content' + (i === 0 ? ' active' : '');
    pane.id = key;

    const addBtn = document.createElement('button');
    addBtn.innerText = '+ add';
    addBtn.onclick = () => addTask(key);
    pane.appendChild(addBtn);

    val.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'item';
      div.onclick = () => updateTask(key, idx);

      div.innerHTML = `
        <div>${item.title}</div>
        <small>${item.owner} • ${item.status}</small>
      `;

      pane.appendChild(div);
    });

    content.appendChild(pane);
  });
}

function buildFocus(data){
  const el = document.getElementById('focusStrip');
  el.innerHTML = '';

  Object.entries(data.focus).forEach(([k, v]) => {
    const div = document.createElement('div');
    div.className = 'focus-block';
    div.innerHTML = `<h3>${k.replaceAll('_', ' ')}</h3>`;

    v.forEach(i => {
      const item = document.createElement('div');
      item.className = 'focus-item';
      item.innerText = i.title;
      div.appendChild(item);
    });

    el.appendChild(div);
  });
}

function buildOverview(o){
  const el = document.getElementById('overviewGrid');
  el.innerHTML = '';

  Object.entries(o).forEach(([k, v]) => {
    const c = document.createElement('div');
    c.className = 'metric';
    c.innerHTML = `<div class="card-label">${k.replaceAll('_', ' ')}</div><div class="card-value">${v}</div>`;
    el.appendChild(c);
  });
}

function switchTab(id){
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  document.querySelector(`[data-tab="${id}"]`).classList.add('active');
  document.getElementById(id).classList.add('active');
}

loadState();