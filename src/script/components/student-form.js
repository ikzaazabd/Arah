import { customValidation } from './form-validation.js';
import CONFIG from '../global/config.js';
class StudentForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    const form = this.querySelector('form');
    if (form) {
      const inputs = form.querySelectorAll('input[required], select[required]');

      inputs.forEach((input) => {
        if (input) {
          input.addEventListener('change', customValidation);
          input.addEventListener('invalid', customValidation);
          input.addEventListener('blur', this.handleBlur.bind(this));
        }
      });
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }

  render() {
    this.innerHTML = `
      <form novalidate>
        <h2 style="color: #1a2e35; text-align: center; margin-bottom: 2rem;">Isi Data Diri dan Nilai Anda</h2>

        <div class="form-group">
          <label for="nama">Nama</label>
          <div class="input-wrapper">
            <input type="text" id="nama" name="nama" required minlength="2" maxlength="100" aria-describedby="namaValidation" placeholder="Masukkan nama lengkap" />
            <p id="namaValidation" class="validation-message" aria-live="polite"></p>
          </div>
        </div>

        <div class="form-row">
            <div class="form-group">
              <label for="mbti">MBTI</label>
              <div class="input-wrapper">
                <select id="mbti" name="mbti" required aria-describedby="mbtiValidation">
                  <option value="" disabled selected>Pilih MBTI</option>
                  <option>INTJ</option><option>ISTJ</option><option>INTP</option><option>ENTP</option>
                  <option>ESTJ</option><option>ENTJ</option><option>ISTP</option><option>ESTP</option>
                  <option>INFJ</option><option>ISFJ</option><option>INFP</option><option>ENFP</option>
                  <option>ENFJ</option><option>ESFJ</option><option>ISFP</option><option>ESFP</option>
                </select>
                <p id="mbtiValidation" class="validation-message" aria-live="polite"></p>
              </div>
            </div>
            <div class="form-group">
              <label for="hobby">Hobi</label>
              <div class="input-wrapper">
                <select id="hobby" name="hobby" required aria-describedby="hobbyValidation">
                  <option value="" disabled selected>Pilih Hobi</option>
                  <option>Teknologi</option><option>Game</option><option>Coding</option><option>Robotik</option>
                  <option>Otomotif</option><option>Bangunan</option><option>Membaca</option><option>Biologi</option>
                  <option>Menulis</option><option>Musik</option><option>Public Speaking</option><option>Organisasi</option>
                  <option>Menghitung</option><option>Menganalisis</option><option>Menggambar</option><option>Fotografi</option>
                  <option>Berkebun</option><option>Nge-Vlog</option><option>Debat</option><option>Mengajar</option>
                  <option>Diskusi</option><option>Traveling</option><option>Elektronik</option>
                </select>
                <p id="hobbyValidation" class="validation-message" aria-live="polite"></p>
              </div>
            </div>
            <div class="form-group">
              <label for="learningStyle">Gaya Belajar</label>
              <div class="input-wrapper">
                <select id="learningStyle" name="learningStyle" required aria-describedby="learningStyleValidation">
                  <option value="" disabled selected>Pilih Gaya Belajar</option>
                  <option>Kinestetik</option>
                  <option>Visual</option>
                  <option>Auditori</option>
                </select>
                <p id="learningStyleValidation" class="validation-message" aria-live="polite"></p>
              </div>
            </div>
        </div>

        <h3 style="color: #178776; margin-top: 1.5rem; margin-bottom: 1rem; text-align: center;">Masukkan Nilai Rapor Anda (Skala 0-100):</h3>

        <div class="score-inputs-grid">
          <div class="form-group">
            <label for="indo">Bahasa Indonesia</label>
            <div class="input-wrapper">
                <input type="number" id="indo" name="indo" min="0" max="100" required pattern="\\d+" placeholder="Contoh: 87" aria-describedby="indoValidation" />
                <p id="indoValidation" class="validation-message" aria-live="polite"></p>
            </div>
          </div>
          <div class="form-group">
            <label for="eng">Bahasa Inggris</label>
            <div class="input-wrapper">
                <input type="number" id="eng" name="eng" min="0" max="100" required pattern="\\d+" aria-describedby="engValidation" placeholder="Contoh: 85" />
                <p id="engValidation" class="validation-message" aria-live="polite"></p>
            </div>
          </div>
          <div class="form-group">
            <label for="math">Matematika</label>
            <div class="input-wrapper">
                <input type="number" id="math" name="math" min="0" max="100" required pattern="\\d+" aria-describedby="mathValidation" placeholder="Contoh: 85"/>
                <p id="mathValidation" class="validation-message" aria-live="polite"></p>
            </div>
          </div>
          <div class="form-group">
            <label for="physics">Fisika</label>
            <div class="input-wrapper">
                <input type="number" id="physics" name="physics" min="0" max="100" required pattern="\\d+" placeholder="Contoh: 85" aria-describedby="physicsValidation" />
                <p id="physicsValidation" class="validation-message" aria-live="polite"></p>
            </div>
          </div>
          <div class="form-group">
            <label for="bio">Biologi</label>
            <div class="input-wrapper">
                <input type="number" id="bio" name="bio" min="0" max="100" required pattern="\\d+" placeholder="Contoh: 90" aria-describedby="bioValidation" />
                <p id="bioValidation" class="validation-message" aria-live="polite"></p>
            </div>
          </div>
          <div class="form-group">
            <label for="art">Seni</label>
            <div class="input-wrapper">
                <input type="number" id="art" name="art" min="0" max="100" required pattern="\\d+" placeholder="Contoh: 75" aria-describedby="artValidation" />
                <p id="artValidation" class="validation-message" aria-live="polite"></p>
            </div>
          </div>
          <div class="form-group">
            <label for="geo">Geografi</label>
            <div class="input-wrapper">
                <input type="number" id="geo" name="geo" min="0" max="100" required pattern="\\d+" placeholder="Contoh: 88" aria-describedby="geoValidation" />
                <p id="geoValidation" class="validation-message" aria-live="polite"></p>
            </div>
          </div>
          <div class="form-group">
            <label for="history">Sejarah</label>
            <div class="input-wrapper">
                <input type="number" id="history" name="history" min="0" max="100" required pattern="\\d+" placeholder="Contoh: 92" aria-describedby="historyValidation" />
                <p id="historyValidation" class="validation-message" aria-live="polite"></p>
            </div>
          </div>
          <div class="form-group">
            <label for="pj">Pendidikan Jasmani</label>
            <div class="input-wrapper">
                <input type="number" id="pj" name="pj" min="0" max="100" required pattern="\\d+" placeholder="Contoh: 80" aria-describedby="pjValidation" />
                <p id="pjValidation" class="validation-message" aria-live="polite"></p>
            </div>
          </div>
          <div class="form-group">
            <label for="entrepreneur">Kewirausahaan</label>
            <div class="input-wrapper">
                <input type="number" id="entrepreneur" name="entrepreneur" min="0" max="100" required pattern="\\d+" placeholder="Contoh: 89" aria-describedby="entrepreneurValidation" />
                <p id="entrepreneurValidation" class="validation-message" aria-live="polite"></p>
            </div>
          </div>
          <div class="form-group">
            <label for="economy">Ekonomi</label>
            <div class="input-wrapper">
                <input type="number" id="economy" name="economy" min="0" max="100" required pattern="\\d+" placeholder="Contoh: 91" aria-describedby="economyValidation" />
                <p id="economyValidation" class="validation-message" aria-live="polite"></p>
            </div>
          </div>
        </div>

        <button type="submit">Prediksi Jurusan</button>
      </form>
    `;
  }


async handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const button = form.querySelector('button[type="submit"]');
  form.querySelectorAll('input[required], select[required]').forEach(input => {
    this.handleBlur({ target: input });
  });

  if (!form.checkValidity()) {
    const firstInvalid = form.querySelector(':invalid');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  button.disabled = true;
  button.innerText = 'Memproses...';
  const payload = {
    nama: form.elements['nama'].value,
    Bahasa_Indonesia: parseInt(form.elements['indo'].value, 10),
    Bahasa_Inggris: parseInt(form.elements['eng'].value, 10),
    Matematika: parseInt(form.elements['math'].value, 10),
    Fisika: parseInt(form.elements['physics'].value, 10),
    Biologi: parseInt(form.elements['bio'].value, 10),
    Seni: parseInt(form.elements['art'].value, 10),
    Geografi: parseInt(form.elements['geo'].value, 10),
    Sejarah: parseInt(form.elements['history'].value, 10),
    Pendidikan_Jasmani: parseInt(form.elements['pj'].value, 10),
    Kewirausahaan: parseInt(form.elements['entrepreneur'].value, 10),
    Ekonomi: parseInt(form.elements['economy'].value, 10),
    MBTI: form.elements['mbti'].value,
    Hobi: form.elements['hobby'].value,
    Gaya_Belajar: form.elements['learningStyle'].value,
  };
    try {
      const response = await fetch(`${CONFIG.API_BASE_URL}/data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Gagal mengirim data ke server.');
    }

    const result = await response.json();
    console.log('Respons dari server:', result);

    const finalData = {
      ...payload, 
      id: result.data.id,
      createdAt: new Date().toISOString(),
      hasilPrediksi: result.data.Jurusan_Kuliah, 
    };

    const existingEntries = JSON.parse(localStorage.getItem('studentEntries')) || [];
    existingEntries.unshift(finalData);
    localStorage.setItem('studentEntries', JSON.stringify(existingEntries));

    window.location.hash = '#prediction';

  } catch (error) {
    console.error("Error saat mengirim data:", error);
    alert(`Terjadi kesalahan: ${error.message}`);
  } finally {
    button.disabled = false;
    button.innerText = 'Prediksi Jurusan';
  }
}
  handleBlur(event) {
    const inputElement = event.target;
    customValidation(event);

    const isValid = inputElement.validity.valid;
    let errorMessage = inputElement.validationMessage;

    if (inputElement.validity.customError && inputElement.validationMessage) {
      errorMessage = inputElement.validationMessage;
    }

    const connectedValidationId = inputElement.getAttribute('aria-describedby');
    const connectedValidationEl = connectedValidationId
      ? this.querySelector(`#${connectedValidationId}`)
      : null;

    if (connectedValidationEl) {
      if (!isValid && errorMessage) {
        connectedValidationEl.innerText = errorMessage;
      } else {
        connectedValidationEl.innerText = '';
      }
    }
  }
}

customElements.define('student-form', StudentForm);