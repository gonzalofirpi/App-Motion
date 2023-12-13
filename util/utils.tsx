/* eslint-disable prettier/prettier */
export const getWaveForms = (size = 1500) => {
  const waveforms = [];

  for (let i = 0; i < size; i++) {
    waveforms.push(Math.max(10, Math.floor(Math.random() * 100)));
  }

  return waveforms;
};
