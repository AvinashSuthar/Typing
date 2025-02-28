import { easy } from "../easy";
import { medium } from "../medium";
import { hard } from "../hard";

export const getEasyPhrase = (time: string) => {
  let line = "";
  for (let i = 0; i < 20 * parseInt(time); i++) {
    const phrase = easyPara();
    if (phrase) {
      line += phrase + " ";
    }
  }
  return line.trim();
};

export const getMediumPhrase = (time: string) => {
  let line = "";
  for (let i = 0; i < 20 * parseInt(time); i++) {
    const phrase = mediumPara();
    if (phrase) {
      line += phrase + " ";
    }
  }
  return line.trim();
};

export const getHardPhrase = (time: string) => {
  let line = "";
  for (let i = 0; i < 20 * parseInt(time); i++) {
    const phrase = hardPara();
    if (phrase) {
      line += phrase + " ";
    }
  }
  return line.trim();
};

function easyPara() {
  const num = Math.floor(Math.random() * easy.length);
  return easy[num] || "";
}

function mediumPara() {
  const num = Math.floor(Math.random() * medium.length);
  return medium[num] || "";
}

function hardPara() {
  const num = Math.floor(Math.random() * hard.length);
  return hard[num] || "";
}
