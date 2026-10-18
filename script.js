const records = {
  "NULL-001": {
    title: "Maya Long Count",
    category: "NULL / CONCEPTUAL SYSTEMS",
    type: "PROJECT RECORD",
    status: "PROTOTYPE",
    description: "A digital instrument for exploring the arithmetic and temporal structure of the Maya Long Count. The interface treats time as a system to inspect, rather than a calendar to decorate.",
    extended: [
      "The Long Count expresses time as a running total of days, assembled from nested units that move through a fixed arithmetic cycle. This project exposes that structure directly: the counting logic, the relationships between units, and the way a date resolves into a position within the cycle.",
      "The interface is built for inspection rather than decoration. It is a small instrument for testing how the system behaves, comparing inscriptions, and understanding the reasoning behind a date instead of treating it as a finished label."
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: null,
    action: { label: "MAYA LONG COUNT", href: "https://st311a-gr33n.github.io/NULL-001_Maya-Long-Count/" }
  },
  "NULL-002": {
    title: "Mexica Calendar",
    category: "NULL / CONCEPTUAL SYSTEMS",
    type: "PROJECT RECORD",
    status: "PROTOTYPE",
    description: "An experimental interface for examining the tonalpohualli, xiuhpohualli, and their calendar-round relationship through a restrained, information-first interface.",
    extended: [
      "The tonalpohualli and xiuhpohualli describe different rhythms: a ritual count and a solar year. This project examines how the two systems move together and how the calendar round emerges from their relationship.",
      "The interface keeps the underlying structure visible. It is an experiment in presenting a complex calendar system without reducing it to ornament, and in making the connections between cycles legible through interaction."
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: null,
    action: { label: "MEXICA CALENDAR SYSTEM", href: "https://st311a-gr33n.github.io/NULL-002_Mexica-Calendar-System/" }
  },
  "LAB-001": {
    title: "NixOS Homelab",
    category: "LABS / RESEARCH & EXPERIMENTATION",
    type: "LAB RECORD",
    status: "PLANNED",
    description: "A documented migration from Ubuntu Server to NixOS, exploring declarative system configuration, reproducible deployments, service management, and infraestructure maintenance.",
    extended: [
      "Moving a home server from Ubuntu Server to NixOS is less about changing distributions and more about changing how the system is described. The project documents the migration as a declarative configuration: users, services, networking, storage, and the small operational decisions that usually live only in memory.",
      "The goal is a reproducible deployment that can be rebuilt, compared, and rolled back. Notes cover what worked, what had to be adapted, and where the declarative model changes day-to-day maintenance."
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: null,
    action: null
  },
  "LAB-002": {
    title: "Model Experiments",
    category: "LABS / RESEARCH & EXPERIMENTATION",
    type: "LAB RECORD",
    status: "PLANNED",
    description: "Explorations of computational and AI-assisted methods, including hypotheses, test conditions, observed results, and limitations.",
    extended: [
      "Model experiments are treated as investigations rather than demonstrations. Each entry records the hypothesis, the test conditions, the prompt or configuration used, and the observed result, including cases where the output was inconclusive or wrong.",
      "The record also tracks limitations and repeatability. The point is to preserve evidence and reasoning so later work can distinguish a useful result from a fortunate sample."
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: null,
    action: null
  },
  "OPS-001": {
    title: "Network Analyzer",
    category: "OPS / TOOLS & OPERATIONAL SYSTEMS",
    type: "SYSTEM RECORD",
    status: "IN PROGRESS",
    description: "An Electron-based network analysis application that consolidates scan results into a unified interface. It uses AI to infer the probable funtion of the network device.",
    extended: [
      "The AI uses information like MAC addresses, IP addresses, open ports, and hardware vendors to infer the probable function of the device on the network.",
      "Live network discovery through ping-based device checks complements imported scan data, helping users identify devices, interpret network environments, and build a clearer picture of connected infraestructure.",
      "Core objectives:",
      "- Consolidate network scan data from multiple sources.",
      "- Use AI-assisted device fingerprinting to infer probable device roles.",
      "- Discover responsive devices through live network scans.",
      "- Present technical findings in a unified, understandable interface.",
      "- Works with local LLMs"
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: null,
    action: null
  },
  "OPS-002": {
    title: "Electronic Badge",
    category: "OPS / TOOLS & OPERATIONAL SYSTEMS",
    type: "SYSTEM RECORD",
    status: "IN PROGRESS",
    description: "An original badge project designed to share personal, professional, or project-related information through QR codes and NFC. It combines a Flipper Zero application with a Raspberry Pi Zero-based implementation.",
    extended: [
      "The Raspberry Pi Zero includes an e-ink display for presenting information in a compact, portable format.",
      "Building on existing Flipper QR and NFC applications as starting points, the project develops a unified concept for customizable digital identity and contact sharing across multiple implementations.",
      "Core objectives:",
      "- Provide a portable and customizable digital identity.",
      "- Share information through QR codes and NFC.",
      "- Support comlementary Flipper Zero and Raspberry Pi Zero implementations.",
      "- Explore low-power, e-ink-based interface for displaying information."
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: {src: "./assets/projects/product_flipper-zero_badge-full.png", alt: "Flipper Zero Badge App" },
    action: null
  },
  "OPS-003": {
    title: "Agent Buddy",
    category: "OPS / TOOLS & OPERATIONAL SYSTEMS",
    type: "SYSTEM RECORD",
    status: "IN PROGRESS",
    description: "An extension of an existing Flipper Zero AI-agent companion application that enables remote interaction with coding agents running on a computer The project expands the original USB-based workflow with Bluetooth Low Energy connectivity on Linux.",
    extended: [
      "The project adds support for OpenCode alongside Claude Code, and identifies the active agent or harness.",
      "Through the Flipper Zero, users can monitor agent progress, review pending actions, approve operations, and send commands without remaining physically connected to the computer.",
      "Core objectives:",
      "- Enable wireless agent interaction through BLE on Linux.",
      "- Support both Claude Code and OpenCode workflows.",
      "- Identify the active agent and execution harness.",
      "- Monitor progress, inspect pending actions, and approve operations remotely.",
      "- Send commands from a handheld device while away from the computer."
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: {src: "./assets/projects/product_flipper-zero_OpenCode_WB.png", alt: "Flipper Zero OpenCode Buddy"},
    action: { label: "FLIPPER AGENT BUDDY", href: "https://github.com/st311a-gr33n/flipper-claude-buddy" }
  },
  "OPS-004": {
    title: "Tamagotchi Lock Screen",
    category: "OPS / TOOLS & OPERATIONAL SYSTEMS",
    type: "SYSTEM RECORD",
    status: "IN PROGRESS",
    description: "A modification of the Flipper Zero Tamagotchi application that introduces a lock-screen mechanism to prevent accidental button presses during everyday carry. The modification allows the virtual pet to remain active throughout the day whitout unintended inputs when de device is stored in a pocket or bag.",
    extended: [
      "Normal interaaction with other Flipper Zero functions remains possible when the user chooses to switch away from the Tamagotchi.",
      "Core objectives:",
      "- Prevent accidental button inputs during transport.",
      "- Keep the virtual pet active during everyday use.",
      "- Provide deliberate entry into and exit from the locked state.",
      "- Preserve the ability to use other Flipper Zero functions"
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: null,
    action: { label: "FLIPPER TAMAGOTCHI", href: "https://github.com/st311a-gr33n/flipper-tamagotchi" }
  },
  "OPS-005": {
    title: "Project Vault Skill",
    category: "OPS / TOOLS & OPERATIONAL SYSTEMS",
    type: "SYSTEM RECORD",
    status: "PROTOTYPE",
    description: "An AI-agent skill designed to initialize, structure, and maintain Obsidian/Tolaria vaults for individual projects. It establishes and tracks project architecture, implementation plans, unresolved gaps, system components, and development progress, providing persistent contextual memory for AI agents.",
    extended: [
      "By organizing technical knowledge into structured, human-readable Markdown files, the skill creates a shared working environment in which both user and AI agents can understand the project, navigate its documentation, and maintain continuity throughout development.",
      "Core objectives:",
      "- Initialize standardized, project-specific Obsidian/Tolaria vaults.",
      "- Document architecture, components, plans, and implementation decisions.",
      "- Track unresolved questions, technical gaps, and project progress.",
      "- Provide persistent context for AI agents across sessions.",
      "- Keep project knowlede accesible to both user and AI agents."
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: null,
    action: { label: "PROJECT VAULT SKILL", href: "https://github.com/st311a-gr33n/skill-project-vault" }
  },
  "BBX-001": {
    title: "Sombra",
    category: "BLACKBOX / ADVERSARIAL & HIDDEN SYSTEMS",
    type: "INVESTIGATION RECORD",
    status: "IN PROGRESS",
    description: "An exploration of invisible watermarking, AI poisoning layers, and adversarial design. This record will connect research, experiments, and implementation notes as the project develops.",
    extended: [
      "Sombra is an investigation into systems that are designed to be difficult to see: invisible watermarking, data poisoning, and adversarial layers that shape behavior without announcing themselves.",
      "The record is a working surface for research notes, experiments, and implementation details. As the project develops, it will connect observations about detection, attribution, and the practical limits of adversarial design."
    ],
    skull: "./assets/skulls/skull_prototype_bbx.svg",
    image: null,
    action: null
  },
  "REF-001": {
    title: "Git: Recovery Commands",
    category: "LOG / REF — REFERENCES",
    type: "REFERENCE RECORD",
    status: "PLANNED",
    description: "A fast, practical reference for recovering work, inspecting repository state, undoing mistakes safely, and understanding the consequences of common Git recovery commands.",
    extended: [
      "A compact reference for recovering work and inspecting repository state in Git. It covers commands for reading history, finding lost commits, undoing changes safely, and understanding what each recovery operation will actually affect.",
      "The emphasis is on consequences rather than memorized syntax. Each entry explains when a command is appropriate, what it preserves, and what it can discard, so a recovery step can be chosen with a clear expectation of the result."
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: null,
    action: null
  },
  "CFG-001": {
    title: "Linux: Shell Environment",
    category: "LOG / CFG — CONFIGURATIONS",
    type: "CONFIGURATION RECORD",
    status: "PLANNED",
    description: "A documented shell environment: configuration files, dependencies, setup instructions, rationale, and the trade-offs behind the choices.",
    extended: [
      "A documented shell environment: configuration files, dependencies, setup steps, and the reasoning behind the choices. The record is intended to make the environment reproducible without relying on a machine that already happens to work.",
      "It also records trade-offs. Convenience, portability, startup time, and maintainability are weighed explicitly, so future changes can be evaluated against the reasons the current setup exists."
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: null,
    action: null
  },
  "DSP-001": {
    title: "AI: Beyond the Hype",
    category: "LOG / DSP — DISPATCHES",
    type: "DISPATCH RECORD",
    status: "PLANNED",
    description: "An editorial space for technical analysis and opinion: what happened, what the evidence supports, what it might mean, and where interpretation begins.",
    extended: [
      "An editorial space for technical analysis and opinion. Each dispatch separates what happened from what the evidence supports, then marks the point where interpretation begins.",
      "The goal is not neutrality for its own sake, but clarity about the basis of a claim. The record is a place to examine the distance between a headline, a demonstration, and a conclusion that can actually be defended."
    ],
    skull: "./assets/skulls/skull_prototype.svg",
    image: null,
    action: null
  }
};
const DEFAULT_SKULL = "./assets/skulls/skull_prototype.svg";
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
function renderDetail(item, id) {
  document.getElementById("detailType").textContent = item.type;
  document.getElementById("detailId").textContent = id;
  document.getElementById("detailTitle").textContent = item.title;
  document.getElementById("detailDescription").textContent = item.description;
  const extended = document.getElementById("detailExtended");
  extended.replaceChildren();
  (item.extended || []).forEach(text => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    extended.append(paragraph);
  });
  const skullImg = document.getElementById("detailSkullImg");
  skullImg.src = item.skull || DEFAULT_SKULL;
  skullImg.alt = item.alt || "";
  const image = document.getElementById("detailImage");
  const imageImg = document.getElementById("detailImageImg");
  const imageCaption = document.getElementById("detailImageCaption");
  if (item.image) {
    imageImg.src = item.image.src;
    imageImg.alt = item.image.alt || "";
    imageCaption.textContent = item.image.caption || "";
    imageCaption.hidden = !item.image.caption;
    image.hidden = false;
  } else {
    image.hidden = true;
    imageImg.removeAttribute("src");
    imageImg.alt = "";
    imageCaption.textContent = "";
  }
  document.getElementById("detailCategory").textContent = item.category;
  document.getElementById("detailStatus").textContent = item.status;
  renderDetailAction(item);
}
function showDetail(item, id) {
  renderDetail(item, id);
  document.getElementById("detail").classList.add("open");
  document.getElementById("detailClose").focus();
}
function openDetail(id) {
  const item = records[id];
  if (!item) return;
  showDetail(item, id);
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
  const item = {
    title: "TZOMPANTLI",
    category: "ST3114-GR33N / ABOUT",
    type: "ABOUT RECORD",
    status: "IN PROGRESS",
    description: "A personal systems archive for conceptual projects, experiments, tools, investigations, and the technical knowledge that connects them.",
    extended: [
      "The structure is deliberately small: five territories, a record for each artifact, and a shared vocabulary for status and category.",
      "The current prototype uses illustrative calavera marks and placeholder records. Each project will eventually carry its own skull, extended record, and project-specific documentation, replacing the shared prototype assets as the archive grows."
    ],
    skull: "./assets/ST33114-GR33N_Icon.svg",
    image: null,
    action: { label: "GITHUB PROFILE", href: "https://github.com/st311a-gr33n" }
  };
  showDetail(item, "ST3114-GR33N");
});
