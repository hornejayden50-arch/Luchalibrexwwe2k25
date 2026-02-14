const roster = [
  { name: 'Psycho Clown', style: 'Power Brawler', alignment: 'Técnico', ovr: 93, aerial: 72, power: 90, stamina: 91 },
  { name: 'Hijo del Vikingo', style: 'High Flyer', alignment: 'Técnico', ovr: 95, aerial: 99, power: 72, stamina: 90 },
  { name: 'Alberto El Patrón', style: 'Technician', alignment: 'Rudo', ovr: 89, aerial: 68, power: 82, stamina: 86 },
  { name: 'Nic Nemeth', style: 'Showman Striker', alignment: 'Rudo', ovr: 88, aerial: 76, power: 79, stamina: 89 },
  { name: 'Matt Riddle', style: 'MMA Grappler', alignment: 'Técnico', ovr: 87, aerial: 70, power: 84, stamina: 91 },
  { name: 'Sam Adonis', style: 'Brawler', alignment: 'Rudo', ovr: 85, aerial: 65, power: 83, stamina: 82 },
  { name: 'Cibernético', style: 'Veteran Powerhouse', alignment: 'Rudo', ovr: 84, aerial: 52, power: 90, stamina: 73 },
  { name: 'LA Park', style: 'Hardcore Icon', alignment: 'Rudo', ovr: 90, aerial: 64, power: 88, stamina: 80 },
  { name: 'Rush', style: 'Aggressive Brawler', alignment: 'Rudo', ovr: 91, aerial: 70, power: 92, stamina: 86 },
  { name: 'Laredo Kid', style: 'High Flyer', alignment: 'Técnico', ovr: 88, aerial: 95, power: 68, stamina: 87 },
  { name: 'Octagón Jr.', style: 'Balanced Luchador', alignment: 'Técnico', ovr: 83, aerial: 84, power: 70, stamina: 82 },
  { name: 'Abismo Negro Jr.', style: 'Dark Striker', alignment: 'Rudo', ovr: 82, aerial: 79, power: 78, stamina: 79 },
  { name: 'Dr. Wagner Jr.', style: 'Legend Technician', alignment: 'Técnico', ovr: 88, aerial: 71, power: 82, stamina: 81 },
  { name: 'Blue Demon Jr.', style: 'Legend Grappler', alignment: 'Técnico', ovr: 86, aerial: 65, power: 83, stamina: 80 },
  { name: 'Pagano', style: 'Extreme Brawler', alignment: 'Técnico', ovr: 84, aerial: 58, power: 89, stamina: 77 },
  { name: 'Texano Jr.', style: 'Cowboy Power', alignment: 'Rudo', ovr: 86, aerial: 60, power: 88, stamina: 82 },
  { name: 'Chessman', style: 'Heavy Striker', alignment: 'Rudo', ovr: 83, aerial: 54, power: 86, stamina: 78 },
  { name: 'Aerostar', style: 'Aerial Artist', alignment: 'Técnico', ovr: 84, aerial: 94, power: 60, stamina: 83 },
  { name: 'Argenis', style: 'Lightning Flyer', alignment: 'Técnico', ovr: 80, aerial: 89, power: 58, stamina: 81 },
  { name: 'Taurus', style: 'Monster Powerhouse', alignment: 'Rudo', ovr: 86, aerial: 62, power: 93, stamina: 80 },
  { name: 'Daga', style: 'Hybrid Striker', alignment: 'Rudo', ovr: 82, aerial: 78, power: 74, stamina: 84 },
  { name: 'Lady Flammer', style: 'High Speed', alignment: 'Ruda', ovr: 80, aerial: 88, power: 61, stamina: 82 },
  { name: 'La Hiedra', style: 'Poison Technician', alignment: 'Ruda', ovr: 81, aerial: 76, power: 72, stamina: 83 },
  { name: 'Maravilla', style: 'Underdog Flyer', alignment: 'Técnica', ovr: 77, aerial: 86, power: 58, stamina: 80 },
  { name: 'Lady Shani', style: 'Elite Technician', alignment: 'Técnica', ovr: 84, aerial: 75, power: 70, stamina: 87 },
  { name: 'Faby Apache', style: 'Ring General', alignment: 'Técnica', ovr: 86, aerial: 68, power: 76, stamina: 90 },
  { name: 'Dalys', style: 'Power Queen', alignment: 'Ruda', ovr: 83, aerial: 64, power: 84, stamina: 82 },
  { name: 'Chik Tormenta', style: 'Heavy Aggressor', alignment: 'Ruda', ovr: 82, aerial: 66, power: 86, stamina: 80 },
  { name: 'Nino Hamburguesa', style: 'Crowd Favorite', alignment: 'Técnico', ovr: 78, aerial: 60, power: 82, stamina: 76 },
  { name: 'Mr. Iguana', style: 'Comedy Technician', alignment: 'Técnico', ovr: 77, aerial: 67, power: 65, stamina: 79 },
  { name: 'Murder Clown', style: 'Tank Brawler', alignment: 'Rudo', ovr: 85, aerial: 52, power: 92, stamina: 75 },
  { name: 'Dave The Clown', style: 'Brawler', alignment: 'Rudo', ovr: 80, aerial: 56, power: 84, stamina: 74 },
  { name: 'Myzteziz Jr.', style: 'Masked High Flyer', alignment: 'Técnico', ovr: 87, aerial: 93, power: 66, stamina: 86 },
  { name: 'Komander', style: 'Rope Acrobat', alignment: 'Técnico', ovr: 88, aerial: 98, power: 60, stamina: 84 },
  { name: 'Bandido', style: 'Hybrid Luchador', alignment: 'Técnico', ovr: 90, aerial: 94, power: 78, stamina: 89 },
  { name: 'Flamita', style: 'Quick Striker', alignment: 'Técnico', ovr: 82, aerial: 85, power: 64, stamina: 83 },
  { name: 'Arez', style: 'Futurist Flyer', alignment: 'Rudo', ovr: 81, aerial: 87, power: 66, stamina: 81 },
  { name: 'Latigo', style: 'Counter Technician', alignment: 'Rudo', ovr: 79, aerial: 80, power: 67, stamina: 80 },
  { name: 'Histeria', style: 'Hardcore Brawler', alignment: 'Rudo', ovr: 78, aerial: 55, power: 82, stamina: 75 },
  { name: 'Aramis', style: 'Explosive Flyer', alignment: 'Técnico', ovr: 83, aerial: 90, power: 63, stamina: 84 },
  { name: 'Villano III Jr.', style: 'Legacy Grappler', alignment: 'Rudo', ovr: 80, aerial: 69, power: 79, stamina: 80 },
  { name: 'Sansón', style: 'Dynasty Power', alignment: 'Rudo', ovr: 84, aerial: 62, power: 89, stamina: 82 },
  { name: 'Forastero', style: 'Heavy Rudo', alignment: 'Rudo', ovr: 83, aerial: 61, power: 87, stamina: 81 },
  { name: 'Cuatrero', style: 'Hybrid Enforcer', alignment: 'Rudo', ovr: 84, aerial: 70, power: 85, stamina: 84 },
  { name: 'Cruz Del Toro', style: 'Tag Team Flyer', alignment: 'Técnico', ovr: 82, aerial: 88, power: 64, stamina: 84 },
  { name: 'Joaquin Wilde', style: 'Tag Team Striker', alignment: 'Técnico', ovr: 81, aerial: 84, power: 66, stamina: 84 }
];

const search = document.getElementById('search');
const rosterDiv = document.getElementById('roster');
const teamAList = document.getElementById('teamA');
const teamBList = document.getElementById('teamB');
const simulateBtn = document.getElementById('simulate');
const resetBtn = document.getElementById('reset');
const spotlight = document.getElementById('spotlight');
const commentary = document.getElementById('commentary');
const result = document.getElementById('result');

const state = {
  selected: null,
  teamA: [],
  teamB: []
};

function renderRoster(filter = '') {
  rosterDiv.innerHTML = '';
  roster
    .filter((w) => w.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((wrestler) => {
      const card = document.createElement('button');
      card.className = `card ${state.selected?.name === wrestler.name ? 'active' : ''}`;
      card.innerHTML = `
        <div class="name">${wrestler.name}</div>
        <div class="meta">${wrestler.style}</div>
        <div class="meta">${wrestler.alignment}</div>
        <div class="rating">OVR ${wrestler.ovr}</div>
      `;
      card.onclick = () => {
        state.selected = wrestler;
        renderSpotlight();
        renderRoster(search.value);
      };
      rosterDiv.append(card);
    });
}

function renderSpotlight() {
  if (!state.selected) {
    spotlight.innerHTML = '<h3>Wrestler Spotlight</h3><p>Select a wrestler from the roster.</p>';
    return;
  }

  const canAddA = state.teamA.length < 3 && !state.teamA.includes(state.selected);
  const canAddB = state.teamB.length < 3 && !state.teamB.includes(state.selected);

  spotlight.innerHTML = `
    <h3>${state.selected.name}</h3>
    <p>${state.selected.style} • ${state.selected.alignment}</p>
    <p>OVR ${state.selected.ovr} | Aerial ${state.selected.aerial} | Power ${state.selected.power} | Stamina ${state.selected.stamina}</p>
    <div class="controls">
      <button ${canAddA ? '' : 'disabled'} id="addA">Add to Técnicos</button>
      <button ${canAddB ? '' : 'disabled'} id="addB">Add to Rudos</button>
    </div>
  `;

  document.getElementById('addA')?.addEventListener('click', () => addToTeam('A'));
  document.getElementById('addB')?.addEventListener('click', () => addToTeam('B'));
}

function addToTeam(team) {
  const bucket = team === 'A' ? state.teamA : state.teamB;
  if (state.selected && !bucket.includes(state.selected) && bucket.length < 3) {
    bucket.push(state.selected);
    renderTeams();
    renderSpotlight();
  }
}

function renderTeams() {
  teamAList.innerHTML = state.teamA.map((w) => `<li>${w.name} (OVR ${w.ovr})</li>`).join('');
  teamBList.innerHTML = state.teamB.map((w) => `<li>${w.name} (OVR ${w.ovr})</li>`).join('');
  simulateBtn.disabled = !(state.teamA.length === 3 && state.teamB.length === 3);
}

function weightedChoice(team) {
  const total = team.reduce((acc, w) => acc + w.ovr + w.stamina / 2, 0);
  let roll = Math.random() * total;
  for (const wrestler of team) {
    roll -= wrestler.ovr + wrestler.stamina / 2;
    if (roll <= 0) return wrestler;
  }
  return team[team.length - 1];
}

function simulateMatch() {
  commentary.innerHTML = '';
  result.textContent = '';
  const feed = [];
  let scoreA = 0;
  let scoreB = 0;

  const spots = [
    'springs off the ropes with a breathtaking moonsault',
    'lands a brutal running knee and hooks the leg',
    'counters into a lightning-fast arm drag',
    'hits a thunderous powerbomb in the center of the ring',
    'dives through the ropes with a tope suicida',
    'nails a spinning cutter and fires up the crowd',
    'connects with a top-rope hurricanrana',
    'survives and tags out at the last second'
  ];

  for (let round = 1; round <= 12; round++) {
    const atkA = weightedChoice(state.teamA);
    const atkB = weightedChoice(state.teamB);
    const spotA = spots[Math.floor(Math.random() * spots.length)];
    const spotB = spots[Math.floor(Math.random() * spots.length)];

    const powerA = atkA.ovr + atkA.aerial * 0.2 + atkA.power * 0.2 + Math.random() * 15;
    const powerB = atkB.ovr + atkB.aerial * 0.2 + atkB.power * 0.2 + Math.random() * 15;

    feed.push(`Round ${round}: ${atkA.name} ${spotA}.`);
    feed.push(`Round ${round}: ${atkB.name} ${spotB}.`);

    if (powerA > powerB) {
      scoreA++;
      feed.push(`→ Momentum shifts to Técnicos.`);
    } else {
      scoreB++;
      feed.push(`→ Rudos steal the advantage.`);
    }
  }

  feed.forEach((line, i) => {
    setTimeout(() => {
      const p = document.createElement('p');
      p.textContent = line;
      commentary.append(p);
      commentary.scrollTop = commentary.scrollHeight;
    }, i * 180);
  });

  setTimeout(() => {
    const winners = scoreA >= scoreB ? 'Técnicos' : 'Rudos';
    const team = winners === 'Técnicos' ? state.teamA : state.teamB;
    const mvp = team.reduce((best, w) => (w.ovr > best.ovr ? w : best), team[0]);
    result.textContent = `${winners} win ${Math.max(scoreA, scoreB)}-${Math.min(scoreA, scoreB)}. MVP: ${mvp.name}.`;
  }, feed.length * 180 + 250);
}

function resetAll() {
  state.selected = null;
  state.teamA = [];
  state.teamB = [];
  commentary.innerHTML = '';
  result.textContent = '';
  renderRoster(search.value);
  renderTeams();
  renderSpotlight();
}

search.addEventListener('input', (e) => renderRoster(e.target.value));
simulateBtn.addEventListener('click', simulateMatch);
resetBtn.addEventListener('click', resetAll);

renderRoster();
renderTeams();
renderSpotlight();
