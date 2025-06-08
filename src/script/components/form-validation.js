export const customValidation = (event) => {
  const target = event.target;
  target.setCustomValidity(''); 

  if (target.validity.valueMissing) {
    target.setCustomValidity('Kolom ini wajib diisi.');
    return;
  }

  if (target.validity.tooShort) {
    target.setCustomValidity(`Minimal panjang adalah ${target.minLength} karakter.`);
    return;
  }

  if (target.validity.rangeUnderflow) {
    target.setCustomValidity(`Nilai minimal adalah ${target.min}.`);
    return;
  }

  if (target.validity.rangeOverflow) {
    target.setCustomValidity(`Nilai maksimal adalah ${target.max}.`);
    return;
  }

  if (target.validity.patternMismatch && target.type === 'number') {
    target.setCustomValidity('Masukkan angka yang valid.');
    return;
  }
};