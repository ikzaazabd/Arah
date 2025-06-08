import CONFIG from '../global/config.js';
class PredictionList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      .list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 1.5rem;
      }
      .prediction-item {
        background-color: #fff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        display: flex;
        flex-direction: column;
      }
      .prediction-item h3 { margin: 0 0 5px 0; color: #178776; }
      .prediction-item .date { font-size: 0.8em; color: #777; margin-bottom: 15px; }
      .prediction-item .details p { margin: 5px 0; font-size: 0.95rem; }
      .prediction-item .details strong { color: #1a6a5a; }
      .prediction-item h4 { margin: 15px 0 10px 0; border-top: 1px solid #eee; padding-top: 15px; }
      .grades-list { list-style: none; padding: 0; margin: 0 0 15px 0; font-size: 0.9rem; }
      .major-recommendation { margin-top: auto; padding: 15px; background-color: rgba(32, 178, 152, 0.1); border-left: 4px solid #20B398; border-radius: 4px; }
      .major-recommendation p { font-weight: bold; color: #178776; margin: 5px 0 0 0; }
      .empty-message { text-align: center; color: #888; }
      .delete-button {
        background-color: #e74c3c; color: white; border: none; padding: 8px 15px;
        font-size: 0.9rem; font-weight: 500; border-radius: 6px; cursor: pointer;
        margin-top: 1rem; align-self: flex-end; transition: background-color 0.2s ease;
      }
      .delete-button:hover { background-color: #c0392b; }
    `;
    this._shadowRoot.appendChild(style);
  }

connectedCallback() {
  this.refreshPredictions();

  this._shadowRoot.addEventListener('click', (event) => {
    console.log('Komponen diklik! Target:', event.target); 

    if (event.target.classList.contains('delete-button')) {
      console.log('Tombol HAPUS berhasil dikenali.'); 

      const card = event.target.closest('.prediction-item');
      const predictionId = card.dataset.id;
      console.log('ID yang akan dihapus:', predictionId);

      if (!predictionId) {
        console.error('Gagal mendapatkan ID dari kartu!');
        return;
      }

      if (confirm('Anda yakin ingin menghapus data ini?')) {
        this.deletePrediction(predictionId);
      }
    }
  });
}
  refreshPredictions() {
    this.render();
  }

  async deletePrediction(id) {
    try {
      const response = await fetch(`${CONFIG.API_BASE_URL}/data/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Gagal menghapus data dari server.');
      }

      const existingEntries = JSON.parse(localStorage.getItem('studentEntries')) || [];
      const updatedEntries = existingEntries.filter(entry => entry.id !== id);
      localStorage.setItem('studentEntries', JSON.stringify(updatedEntries));
      this.refreshPredictions();

    } catch (error) {
      console.error('Error saat menghapus prediksi:', error);
      alert(error.message);
    }
  }

  createPredictionItemElement(prediction) {
    const predictionItem = document.createElement('div');
    predictionItem.classList.add('prediction-item');
    predictionItem.dataset.id = prediction.id;

    const subjectKeys = [
      'Bahasa_Indonesia', 'Bahasa_Inggris', 'Matematika', 'Fisika', 'Biologi',
      'Seni', 'Geografi', 'Sejarah', 'Pendidikan_Jasmani', 'Kewirausahaan', 'Ekonomi'
    ];
    const gradesList = subjectKeys.map(key => {
      const subjectName = key.replace(/_/g, ' ');
      const score = prediction[key] || 'N/A';
      return `<li>${subjectName}: <strong>${score}</strong></li>`;
    }).join('');

    const createdAt = new Date(prediction.createdAt).toLocaleString('id-ID', {
      dateStyle: 'long', timeStyle: 'short',
    });

    predictionItem.innerHTML = `
      <h3>${prediction.nama}</h3>
      <p class="date">Data dikirim pada: ${createdAt}</p>
      <div class="details">
        <p><strong>MBTI:</strong> ${prediction.MBTI || 'N/A'}</p>
        <p><strong>Hobi:</strong> ${prediction.Hobi || 'N/A'}</p>
        <p><strong>Gaya Belajar:</strong> ${prediction.Gaya_Belajar || 'N/A'}</p>
      </div>
      <h4>Nilai yang Diinput:</h4>
      <ul class="grades-list">${gradesList}</ul>
      <div class="major-recommendation">
        <strong>Rekomendasi Jurusan:</strong>
        <p>${prediction.hasilPrediksi}</p>
      </div>
      <button class="delete-button" aria-label="Hapus data ${prediction.nama}">Hapus</button>
    `;
    return predictionItem;
  }

  render() {
    const existingList = this._shadowRoot.querySelector('.list');
    if (existingList) {
      existingList.remove();
    }
    const existingMessage = this._shadowRoot.querySelector('.empty-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    try {
      const studentEntries = JSON.parse(localStorage.getItem('studentEntries')) || [];
      if (studentEntries.length === 0) {
        this._shadowRoot.innerHTML += `<p class="empty-message">Belum ada data prediksi. Silakan isi form terlebih dahulu.</p>`;
        return;
      }

      const listContainer = document.createElement('div');
      listContainer.classList.add('list');
      studentEntries.map(entry => listContainer.appendChild(this.createPredictionItemElement(entry)));
      this._shadowRoot.appendChild(listContainer);

    } catch (error) {
      console.error("Gagal merender daftar prediksi:", error);
      this._shadowRoot.innerHTML += `<p class="empty-message">Terjadi kesalahan saat memuat data prediksi.</p>`;
    }
  }
}

customElements.define('prediction-list', PredictionList);