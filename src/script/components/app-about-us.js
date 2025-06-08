class AppAboutUs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="about-us-hero">
        <div class="hero-content">
          <h1>Tentang Arah</h1>
          <p>Membantu Anda menemukan arah potensi dan memilih jurusan yang paling sesuai untuk masa depan cerah.</p>
        </div>
      </section>

      <section class="about-us-section">
        <div class="section-container">
          <h2>Misi Kami</h2>
          <p>Misi kami adalah menjembatani kesenjangan antara potensi akademik siswa dan pilihan jurusan kuliah. Kami berupaya memberikan rekomendasi yang personal dan akurat, memastikan setiap calon mahasiswa dapat membuat keputusan yang tepat dan percaya diri untuk masa depan mereka.</p>
        </div>
      </section>

      <section class="about-us-section alternate-bg">
        <div class="section-container">
          <h2>Mengapa Arah Hadir?</h2>
          <p>Proyek Arah lahir dari keprihatinan kami terhadap banyaknya calon mahasiswa yang menghadapi kebingungan dalam memilih jurusan kuliah. Kami sendiri pernah mengalami dilema ini, merasa terjebak di persimpangan jalan tanpa panduan yang jelas. Kami menyadari bahwa keputusan ini seringkali diambil tanpa pertimbangan mendalam terhadap nilai rapor, minat, atau bakat pribadi.</p>
          <p>Dengan memanfaatkan teknologi Machine Learning dan analisis data, kami percaya dapat memberikan solusi inovatif. Arah dirancang untuk menjadi 'kompas' bagi calon mahasiswa, membantu mereka menavigasi pilihan studi berdasarkan kinerja akademik yang solid dan relevansi dengan bidang keahlian.</p>
        </div>
      -</section>

      <section class="about-us-section">
        <div class="section-container">
          <h2>Cara Kami Bekerja</h2>
          <div class="how-it-works-grid">
            <div class="grid-item">
              <h3>1. Pengumpulan Data</h3>
              <p>Anda cukup memasukkan nilai rapor Anda. Data ini menjadi dasar analisis kami.</p>
            </div>
            <div class="grid-item">
              <h3>2. Analisis Cerdas</h3>
              <p>Model Machine Learning kami menganalisis pola dari nilai rapor Anda untuk mengidentifikasi potensi tersembunyi.</p>
            </div>
            <div class="grid-item">
              <h3>3. Rekomendasi Akurat</h3>
              <p>Kami menyajikan rekomendasi jurusan yang paling sesuai dengan profil akademik Anda, lengkap dengan saran kampus dan referensi pembelajaran.</p>
            </div>
            <div class="grid-item">
              <h3>4. Desain Inklusif</h3>
              <p>Platform kami dirancang ramah pengguna, mudah diakses, dan nyaman digunakan oleh siapa saja.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="about-us-section alternate-bg">
        <div class="section-container">
          <h2>Tim Pengembang</h2>
          <p>Arah dikembangkan oleh tim berdedikasi dari Universitas Brawijaya sebagai bagian dari program DBS Coding Camp 2025. Kami bersemangat untuk menciptakan solusi yang berdampak positif bagi masa depan pendidikan di Indonesia.</p>
          <div class="team-members">
            <div class="member-card">
              <h4>Ikzaaz Bakhtar Abdurrahman</h4>
              <p>Frontend-Backend Developer</p>
            </div>
            <div class="member-card">
              <h4>Muhammad Adhiyasa Satya Putranto</h4>
              <p>Frontend-Backend Developer</p>
            </div>
            <div class="member-card">
              <h4>Rezy Dzikra Razani</h4>
              <p>Frontend-Backend Developer</p>
            </div>
            <div class="member-card">
              <h4>Adam Javier</h4>
              <p>Machine Learning Engineer</p>
            </div>
            <div class="member-card">
              <h4>M. Rafif Akhdan Isyanda</h4>
              <p>Machine Learning Engineer</p>
            </div>
            <div class="member-card">
              <h4>Novia Rahmadhani Purnomo</h4>
              <p>Machine Learning Engineer</p>
            </div>
          </div>
        </div>
      </section>

      <section class="about-us-section">
        <div class="section-container">
          <h2>Kontak Kami</h2>
          <p>Jika Anda memiliki pertanyaan atau ingin memberikan masukan, jangan ragu untuk menghubungi kami melalui media sosial di footer atau melalui formulir kontak kami.</p>
          <p>Kami berkomitmen untuk terus mengembangkan Arah agar dapat memberikan manfaat maksimal bagi calon mahasiswa Indonesia.</p>
        </div>
      </section>
    `;
  }
}

customElements.define('app-about-us', AppAboutUs);