async function loadData(){
 const res = await fetch('./data/mock.json');
 const data = await res.json();
 document.getElementById('sessionsValue').innerText = data.sessions;
 document.getElementById('playersValue').innerText = data.players;
 document.getElementById('revenueValue').innerText = '£'+data.revenue;
 document.getElementById('fillRateValue').innerText = data.fillRate+'%';
 buildAlerts(data);
 buildSchedule(data.schedule);
}

function buildAlerts(data){
 const list = document.getElementById('alertsList');
 list.innerHTML='';
 if(data.fillRate<70){ addAlert(list,'Low fill rate'); }
 if(data.players<60){ addAlert(list,'Low bookings'); }
}

function addAlert(list,text){
 const li=document.createElement('li');
 li.innerText='⚠️ '+text;
 list.appendChild(li);
}

function buildSchedule(schedule){
 const container=document.getElementById('scheduleTable');
 container.innerHTML='';
 schedule.forEach(s=>{
 const row=document.createElement('div');
 row.innerText=s.day+' - '+s.venue+' (£'+s.price+')';
 container.appendChild(row);
 });
}

loadData();
