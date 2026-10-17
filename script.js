const records = {
  "NULL-001": {title:"Maya Long Count", category:"NULL / CONCEPTUAL SYSTEMS", type:"PROJECT RECORD", status:"PROTOTYPE", description:"A digital instrument for exploring the arithmetic and temporal structure of the Maya Long Count. The interface treats time as a system to inspect, rather than a calendar to decorate.", action:{label:"MAYA LONG COUNT", href:"https://st311a-gr33n.github.io/NULL-001_Maya-Long-Count/"}},
  "NULL-002": {title:"Mexica Calendar", category:"NULL / CONCEPTUAL SYSTEMS", type:"PROJECT RECORD", status:"PROTOTYPE", description:"An experimental interface for examining the tonalpohualli, xiuhpohualli, and their calendar-round relationship through a restrained, information-first interface.", action:{label:"MEXICA CALENDAR SYSTEM", href:"https://st311a-gr33n.github.io/NULL-002_Mexica-Calendar-System/"}},
  "LAB-001": {title:"NixOS Homelab", category:"LABS / RESEARCH & EXPERIMENTATION", type:"LAB RECORD", status:"PLANNED", description:"A documented migration from Ubuntu Server to NixOS, exploring declarative system configuration, reproducible deployments, service management, and infraestructure maintenance.", action:null},
  "LAB-002": {title:"Model Experiments", category:"LABS / RESEARCH & EXPERIMENTATION", type:"LAB RECORD", status:"PLACEHOLDER", description:"Explorations of computational and AI-assisted methods, including hypotheses, test conditions, observed results, and limitations.", action:null},
  "OPS-001": {title:"Network Analyzer", category:"OPS / TOOLS & OPERATIONAL SYSTEMS", type:"SYSTEM RECORD", status:"IN PROGRESS", description:"An Electron-based network analysis application that consolidates scan results into a unified interface. It uses AI to infer the probable funtion of the network device.", action:null},
  "OPS-002": {title:"Electronic Badge", category:"OPS / TOOLS & OPERATIONAL SYSTEMS", type:"SYSTEM RECORD", status:"IN PROGRESS", description:"An original badge project designed to share personal, professional, or project-related information through QR codes and NFC. It combines a Flipper Zero application with a Raspberry Pi Zero-based implementation.", action:null},
  "OPS-003": {title:"Agent Buddy", category:"OPS / TOOLS & OPERATIONAL SYSTEMS", type:"SYSTEM RECORD", status:"IN PROGRESS", description:"An extension of an existing Flipper Zero AI-agent companion application that enables remote interaction with coding agents running on a computer The project expands the original USB-based workflow with Bluetooth Low Energy connectivity on Linux.", action:null},
  "OPS-004": {title:"Tamagotchi Lock Screen", category:"OPS / TOOLS & OPERATIONAL SYSTEMS", type:"SYSTEM RECORD", status:"IN PROGRESS", description:"A modification of the Flipper Zero Tamagotchi application that introduces a lock-screen mechanism to prevent accidental button presses during everyday carry. The modification allows the virtual pet to remain active throughout the day whitout unintended inputs.", action:null},
  "OPS-005": {title:"Project Vault Skill", category:"OPS / TOOLS & OPERATIONAL SYSTEMS", type:"SYSTEM RECORD", status:"PROTOTYPE", description:"An AI-agent skill designed to initialize, structure, and maintain Obsidian/Tolaria vaults for individual projects. It establishes and tracks project architecture, implementation plans, unresolved gaps, system components, and development progress, providing persistent contextual memory for AI agents.", action:null},
  "BBX-001": {title:"Sombra", category:"BLACKBOX / ADVERSARIAL & HIDDEN SYSTEMS", type:"INVESTIGATION RECORD", status:"IN PROGRESS", description:"An exploration of invisible watermarking, AI poisoning layers, and adversarial design. This record will connect research, experiments, and implementation notes as the project develops.", action:null},
  "REF-001": {title:"Git: Recovery Commands", category:"LOG / REF — REFERENCES", type:"REFERENCE RECORD", status:"PLANNED", description:"A fast, practical reference for recovering work, inspecting repository state, undoing mistakes safely, and understanding the consequences of common Git recovery commands.", action:null},
  "CFG-001": {title:"Linux: Shell Environment", category:"LOG / CFG — CONFIGURATIONS", type:"CONFIGURATION RECORD", status:"PLANNED", description:"A documented shell environment: configuration files, dependencies, setup instructions, rationale, and the trade-offs behind the choices.", action:null},
  "DSP-001": {title:"AI: Beyond the Hype", category:"LOG / DSP — DISPATCHES", type:"DISPATCH RECORD", status:"PLANNED", description:"An editorial space for technical analysis and opinion: what happened, what the evidence supports, what it might mean, and where interpretation begins.", action:null}
};
const buttons = [...document.querySelectorAll(".artifact")];
const record = document.getElementById("record");
let activeButton = null;
let pinned = false;
function territoryFor(id) {
  if (id.startsWith("NULL")) return "NULL";
  if (id.startsWith("LAB")) return "LABS";
  if (id.startsWith("OPS")) return "OPS";
  if (id.startsWith("BBX")) return "BLACKBOX";
  return "LOG";
}
function positionRecord(button) {
  const r = button.getBoundingClientRect();
  const w = Math.min(310, window.innerWidth - 32);
  let left = r.right + 14;
  if (left + w > window.innerWidth - 12) left = Math.max(12, r.left - w - 14);
  let top = r.top + r.height / 2 - 62;
  top = Math.max(12, Math.min(top, window.innerHeight - 190));
  record.style.left = `${left}px`;
  record.style.top = `${top}px`;
}
function showRecord(button) {
  const id = button.dataset.id, item = records[id];
  if (!item) return;
  activeButton = button;
  document.getElementById("recordCode").textContent = id;
  document.getElementById("recordType").textContent = item.type;
  document.getElementById("recordTitle").textContent = item.title;
  document.getElementById("recordDescription").textContent = item.description;
  document.getElementById("recordCategory").textContent = item.category;
  document.getElementById("recordStatus").textContent = item.status;
  positionRecord(button);
  record.classList.add("visible");
  record.setAttribute("aria-hidden", "false");
  buttons.forEach(b => b.setAttribute("aria-expanded", b === button ? "true" : "false"));
}
function hideRecord() {
  if (pinned) return;
  record.classList.remove("visible");
  record.setAttribute("aria-hidden", "true");
  buttons.forEach(b => b.setAttribute("aria-expanded", "false"));
  activeButton = null;
}
buttons.forEach(button => {
  button.addEventListener("mouseenter", () => { if (!pinned) showRecord(button); });
  button.addEventListener("mouseleave", () => { if (!pinned && document.activeElement !== button) hideRecord(); });
  button.addEventListener("focus", () => { if (!pinned) showRecord(button); });
  button.addEventListener("blur", () => { if (!pinned) hideRecord(); });
  button.addEventListener("click", () => {
    if (pinned && activeButton === button) { openDetail(button.dataset.id); return; }
    pinned = true;
    showRecord(button);
    openDetail(button.dataset.id);
  });
});
function renderDetailAction(item) {
  const el = document.getElementById("detailAction");
  el.textContent = "PROJECT PAGE / ";
  if (item.action) {
    const link = document.createElement("a");
    link.href = item.action.href;
    link.textContent = item.action.label;
    el.append(link);
  } else {
    el.append("NOT LINKED YET");
  }
}
function openDetail(id) {
  const item = records[id];
  if (!item) return;
  document.getElementById("detailType").textContent = item.type;
  document.getElementById("detailId").textContent = id;
  document.getElementById("detailTitle").textContent = item.title;
  document.getElementById("detailDescription").textContent = item.description;
  document.getElementById("detailCategory").textContent = item.category;
  document.getElementById("detailStatus").textContent = item.status;
  renderDetailAction(item);
  document.getElementById("detail").classList.add("open");
  document.getElementById("detailClose").focus();
}
function closeDetail() {
  document.getElementById("detail").classList.remove("open");
  pinned = false;
  hideRecord();
  if (activeButton) activeButton.focus();
}
document.getElementById("detailClose").addEventListener("click", closeDetail);
document.getElementById("detail").addEventListener("click", e => { if (e.target.id === "detail") closeDetail(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && document.getElementById("detail").classList.contains("open")) closeDetail(); });
window.addEventListener("resize", () => { if (activeButton && record.classList.contains("visible")) positionRecord(activeButton); });

const filters = [...document.querySelectorAll(".log-filter")];
filters.forEach(filter => filter.addEventListener("click", () => {
  filters.forEach(f => f.classList.toggle("active", f === filter));
  const kind = filter.dataset.filter;
  buttons.filter(b => ["REF","CFG","DSP"].some(prefix => b.dataset.id.startsWith(prefix))).forEach(b => {
    b.style.display = kind === "ALL" || b.dataset.id.startsWith(kind) ? "" : "none";
  });
  // When filtering LOG, keep the content controls and note visible; other territory artifacts remain unchanged.
}));
document.getElementById("aboutLink").addEventListener("click", e => {
  e.preventDefault();
  const item = {title:"TZOMPANTLI", category:"ST3114-GR33N / ABOUT", type:"ABOUT RECORD", status:"IN PROGRESS", description:"A personal systems archive for conceptual projects, experiments, tools, investigations, and the technical knowledge that connects them. The current prototype uses illustrative calavera marks and placeholder records; replace them with the final project assets and destinations.", action:{label:"GITHUB PROFILE", href:"https://github.com/st311a-gr33n"}};
  document.getElementById("detailType").textContent = item.type;
  document.getElementById("detailId").textContent = "ST3114-GR33N";
  document.getElementById("detailTitle").textContent = item.title;
  document.getElementById("detailDescription").textContent = item.description;
  document.getElementById("detailCategory").textContent = item.category;
  document.getElementById("detailStatus").textContent = item.status;
  renderDetailAction(item);
  document.getElementById("detail").classList.add("open");
  document.getElementById("detailClose").focus();
});
