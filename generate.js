const fs = require("fs");

const COLORS = {
  JS: "#f1e05a",
  TS: "#3178c6",
  PY: "#3572A5",
  EMPTY: "#2d333b"
};

const BOX = 14;
const GAP = 4;
const START_Y = 30;

const progress = fs.existsSync("progress.json")
  ? JSON.parse(fs.readFileSync("progress.json"))
  : {};

// date helpers
function format(d) {
  return d.toISOString().slice(0, 10);
}

function getAllDates(start, end) {
  const dates = [];
  const cur = new Date(start);
  while (cur <= end) {
    dates.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return dates;
}

// range
const startDate = new Date();
const endDate = new Date("2026-12-31");

// normalize start to Sunday
startDate.setDate(startDate.getDate() - startDate.getDay());

const dates = getAllDates(startDate, endDate);

// SVG build
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="200">`;

// month labels
let lastMonth = -1;

dates.forEach((date, i) => {
  const week = Math.floor(i / 7);
  const day = date.getDay();

  const x = week * (BOX + GAP);
  const y = START_Y + day * (BOX + GAP);

  const key = format(date);
  const lang = progress[key];
  const fill = lang ? COLORS[lang] : COLORS.EMPTY;

  // month label
  if (date.getMonth() !== lastMonth && day === 0) {
    svg += `
      <text x="${x}" y="20" fill="#adbac7" font-size="10">
        ${date.toLocaleString("en-US", { month: "short" })}
      </text>
    `;
    lastMonth = date.getMonth();
  }

  svg += `
    <rect
      x="${x}"
      y="${y}"
      width="${BOX}"
      height="${BOX}"
      rx="3"
      fill="${fill}"
    />
  `;
});

svg += `</svg>`;

fs.writeFileSync("heatmap.svg", svg);
