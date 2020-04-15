import React, { Component } from 'react'
import HeaderNavbar from '../../components/header/HeaderNav';
import Head from './../../components/Head';
import Footer from '../../components/header/Footer';
import { Container } from 'react-bootstrap'

class PrivacyPolicyRise extends Component {
    render() {
        return (
            <div>
                <Head title="Kebijakan Privasi" description="Description" />
                <HeaderNavbar />
                <Container className="px-4 toc-body">
                    <h2 className="d-flex justify-content-center font-weight-bold title_toc mt-5">
                        KEBIJAKAN PRIVASI harisenin.com
                    </h2>
                    <p className="text-justify mt-5">
                        Kebijakan Privasi berikut ini menggambarkan bagaimana kami, harisenin.com, memperlakukan, menampilkan, mengumpulkan, menyimpan, menggunakan, mengolah, menguasai, mentransfer, mengungkapkan dan melindungi Informasi Pribadi anda. Ketentuan-ketentuan didalam Kebijakan Privasi ini berlaku bagi seluruh pengguna harisenin.com (selanjutnya disebut sebagai “Kami”).
                    </p>
                    <p className="text-justify">Harap baca Kebijakan Privasi ini dengan teliti dan seksama untuk memastikan bahwa anda memahami kebijakan kami dakam memperlakukan data dan informasi Anda. Bahwa dengan mendaftarkan diri sebagai pengguna harisenin.com, Anda dengan ini menyetujui Kebijakan Privasi ini.</p>
                    <p className="text-justify">Harisenin.com hanya akan melakukan penyimpanan atas informasi yang hanya dibutuhkan untuk pemrosesan dan kami hanya akan menyimpan informasi dalam jangka waktu yang diizinkan oleh hukum atau dalam jangka waktu yang dibutuhkan untuk menyimpan informasi ini.</p>

                    <PerolehanPengumpulanData />
                    <PenggunaanData />
                    <PengungkapanDataPribadi />
                    <Cookies />
                    <PilihanPengguna />
                    <PenyimpananDanPenghapusan />
                    <PembaruanKebijakanPrivasi />
                </Container>
                <Footer />
            </div>
        )
    }
}
export default PrivacyPolicyRise;

class PerolehanPengumpulanData extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    A. Perolehan dan Pengumpulan Data Pengguna</p>
                <ol>
                    <li className="text-justify">
                        Data yang diserahkan secara mandiri oleh Pengguna, termasuk namun tidak terbatas pada data yang diserahkan pada saat Pengguna:
                        <ol>
                            <li className="text-justify">
                                Membuat atau memperbarui akun Harisenin.com, termasuk diantaranya nama pengguna (username), alamat email, nomor telepon, password, alamat, foto, dan lain-lain;
                            </li>
                            <li className="text-justify">
                                Menghubungi Harisenin.com, termasuk melalui layanan konsumen;
                            </li>
                            <li className="text-justify">
                                Mengisi survei yang dikirimkan oleh Harisenin.com atau atas nama Harisenin.com;
                            </li>
                            <li className="text-justify">
                                Melakukan interaksi dengan Pengguna lainnya melalui fitur pesan, diskusi produk, ulasan, rating, Pusat Resolusi dan sebagainya;
                            </li>
                            <li className="text-justify">
                                Mempergunakan layanan-layanan pada Situs, termasuk data transaksi yang detil, diantaranya jenis, jumlah dan/atau keterangan dari produk atau layanan yang dibeli, kanal pembayaran yang digunakan, jumlah transaksi, tanggal dan waktu transaksi, serta detil transaksi lainnya;
                            </li>
                            <li className="text-justify">
                                Mengisi data-data pembayaran pada saat Pengguna melakukan aktivitas transaksi pembayaran melalui Situs, termasuk namun tidak terbatas pada data rekening bank, kartu kredit, virtual account, instant payment, internet banking, gerai ritel; dan/atau
                            </li>
                            <li className="text-justify">
                                Menggunakan fitur yang membutuhkan izin akses terhadap perangkat Pengguna.

                            </li>
                        </ol>
                    </li>
                    <li className="text-justify">
                        Data yang terekam pada saat Pengguna mempergunakan Situs, termasuk namun tidak terbatas pada:
                        <ol>
                            <li className="text-justify">
                                Data lokasi riil atau perkiraannya seperti alamat IP, lokasi Wi-Fi, geo-location, dan sebagainya;
                            </li>
                            <li className="text-justify">
                                Data berupa waktu dari setiap aktivitas Pengguna, termasuk aktivitas pendaftaran, login, transaksi, dan lain sebagainya;
                            </li>
                            <li className="text-justify">
                                Data penggunaan atau preferensi Pengguna, diantaranya interaksi Pengguna dalam menggunakan Situs, pilihan yang disimpan, serta pengaturan yang dipilih. Data tersebut diperoleh menggunakan cookies, pixel tags, dan teknologi serupa yang menciptakan dan mempertahankan pengenal unik;
                            </li>
                            <li className="text-justify">
                                Data perangkat, diantaranya jenis perangkat yang digunakan untuk mengakses Situs, termasuk model perangkat keras, sistem operasi dan versinya, perangkat lunak, nama file dan versinya, pilihan bahasa, pengenal perangkat unik, pengenal iklan, nomor seri, informasi gerakan perangkat, dan/atau informasi jaringan seluler;
                            </li>
                            <li className="text-justify">
                                Data catatan (log), diantaranya catatan pada server yang menerima data seperti alamat IP perangkat, tanggal dan waktu akses, fitur aplikasi atau laman yang dilihat, proses kerja aplikasi dan aktivitas sistem lainnya, jenis peramban, dan/atau situs atau layanan pihak ketiga yang Anda gunakan sebelum berinteraksi dengan Situs.
                            </li>
                        </ol>
                    </li>
                </ol>
                <p className="text-justify">
                    Harisenin.com dapat menggabungkan data yang diperoleh dari sumber tersebut dengan data lain yang dimilikinya.
                </p>
            </div>
        )
    }
}

class PenggunaanData extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    B. Penggunaa Data
                </p>
                <p className="text-justify">Harisenin.com dapat menggunakan keseluruhan atau sebagian data yang diperoleh dan dikumpulkan dari Pengguna sebagaimana disebutkan dalam bagian sebelumnya untuk hal-hal sebagai berikut:
                </p>
                <ol>
                    <li className="text-justify">
                        Memproses segala bentuk permintaan, aktivitas maupun transaksi yang dilakukan oleh Pengguna melalui Situs, termasuk untuk keperluan pengiriman produk kepada Pengguna.
                    </li>
                    <li className="text-justify">
                        Penyediaan fitur-fitur untuk memberikan, mewujudkan, memelihara dan memperbaiki produk dan layanan kami, termasuk:
                        <ol>
                            <li className="text-justify">
                                Menawarkan, memperoleh, menyediakan, atau memfasilitasi layanan marketplace, maupun produk-produk lainnya melalui Situs;
                            </li>
                            <li className="text-justify">
                                Memungkinkan fitur untuk mempribadikan akun Harisenin.com Pengguna, seperti Wishlist dan Toko Favorit; dan/atau
                            </li>
                            <li className="text-justify">
                                Melakukan kegiatan internal yang diperlukan untuk menyediakan layanan pada situs/aplikasi Harisenin.com, seperti pemecahan masalah software, bug, permasalahan operasional, melakukan analisis data, pengujian, dan penelitian, dan untuk memantau dan menganalisis kecenderungan penggunaan dan aktivitas.
                            </li>
                        </ol>
                    </li>
                    <li className="text-justify">
                        Membantu Pengguna pada saat berkomunikasi dengan Layanan Pelanggan Harisenin.com, diantaranya untuk:
                        <ol>
                            <li className="text-justify">
                                Memeriksa dan mengatasi permasalahan Pengguna;
                            </li>
                            <li className="text-justify">
                                Mengarahkan pertanyaan Pengguna kepada petugas Layanan Pelanggan yang tepat untuk mengatasi permasalahan; dan
                            </li>
                            <li className="text-justify">
                                Mengawasi dan memperbaiki tanggapan Layanan Pelanggan Harisenin.com.
                            </li>
                        </ol>
                    </li>
                    <li className="text-justify">
                        Menghubungi Pengguna melalui email, surat, telepon, fax, dan lain-lain, termasuk namun tidak terbatas, untuk membantu dan/atau menyelesaikan proses transaksi maupun proses penyelesaian kendala.
                    </li>
                    <li className="text-justify">
                        Menggunakan informasi yang diperoleh dari Pengguna untuk tujuan penelitian, analisis, pengembangan dan pengujian produk guna meningkatkan keamanan dan keamanan layanan-layanan pada Situs, serta mengembangkan fitur dan produk baru.
                    </li>
                    <li className="text-justify">
                        Menginformasikan kepada Pengguna terkait produk, layanan, promosi, studi, survei, berita, perkembangan terbaru, acara dan lain-lain, baik melalui Situs maupun melalui media lainnya. Harisenin.com juga dapat menggunakan informasi tersebut untuk mempromosikan dan memproses kontes dan undian, memberikan hadiah, serta menyajikan iklan dan konten yang relevan tentang layanan Harisenin.com dan mitra usahanya.
                    </li>
                    <li className="text-justify">
                        Melakukan monitoring ataupun investigasi terhadap transaksi-transaksi mencurigakan atau transaksi yang terindikasi mengandung unsur kecurangan atau pelanggaran terhadap Syarat dan Ketentuan atau ketentuan hukum yang berlaku, serta melakukan tindakan-tindakan yang diperlukan sebagai tindak lanjut dari hasil monitoring atau investigasi transaksi tersebut.
                    </li>
                    <li className="text-justify">
                        Dalam keadaan tertentu, Harisenin.com mungkin perlu untuk menggunakan ataupun mengungkapkan data Pengguna untuk tujuan penegakan hukum atau untuk pemenuhan persyaratan hukum dan peraturan yang berlaku, termasuk dalam hal terjadinya sengketa atau proses hukum antara Pengguna dan Harisenin.com.
                    </li>
                </ol>
            </div>
        )
    }
}

class PengungkapanDataPribadi extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    C. Pengungkapan Data Pribadi Pengguna
                </p>
                <p className="text-justify">
                    Harisenin.com menjamin tidak ada penjualan, pengalihan, distribusi atau meminjamkan data pribadi Anda kepada pihak ketiga lain, tanpa terdapat izin dari Anda, kecuali dalam hal-hal sebagai berikut:
                    <ol>
                        <li className="text-justify">
                            Dibutuhkan adanya pengungkapan data Pengguna kepada mitra atau pihak ketiga lain yang membantu Harisenin.com dalam menyajikan layanan pada Situs dan memproses segala bentuk aktivitas Pengguna dalam Situs, termasuk memproses transaksi, verifikasi pembayaran, pengiriman produk, dan lain-lain.
                        </li>
                        <li className="text-justify">
                            Harisenin.com dapat menyediakan informasi yang relevan kepada mitra usaha sesuai dengan persetujuan Pengguna untuk menggunakan layanan mitra usaha, termasuk diantaranya aplikasi atau situs lain yang telah saling mengintegrasikan API atau layanannya, atau mitra usaha yang mana Harisenin.com telah bekerjasama untuk mengantarkan promosi, kontes, atau layanan yang dikhususkan
                        </li>
                        <li className="text-justify">
                            Dibutuhkan adanya komunikasi antara mitra usaha Harisenin.com (seperti pembayaran, dan lain-lain) dengan Pengguna dalam hal penyelesaian kendala maupun hal-hal lainnya.
                        </li>
                        <li className="text-justify">
                            Harisenin.com dapat menyediakan informasi yang relevan kepada vendor, konsultan, mitra pemasaran, firma riset, atau penyedia layanan sejenis.
                        </li>
                        <li className="text-justify">
                            Pengguna menghubungi Harisenin.com melalui media publik seperti blog, media sosial, dan fitur tertentu pada Situs, komunikasi antara Pengguna dan Harisenin.com mungkin dapat dilihat secara publik.
                        </li>
                        <li className="text-justify">
                            Harisenin.com dapat membagikan informasi Pengguna kepada anak perusahaan dan afiliasinya untuk membantu memberikan layanan atau melakukan pengolahan data untuk dan atas nama Harisenin.com.
                        </li>
                        <li className="text-justify">
                            Harisenin.com mengungkapkan data Pengguna dalam upaya mematuhi kewajiban hukum dan/atau adanya permintaan yang sah dari aparat penegak hukum.
                        </li>
                    </ol>
                </p>
            </div>
        )
    }
}

class Cookies extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    D. Cookies
                </p>
                <ol>
                    <li className="text-justify">
                        Cookies adalah file kecil yang secara otomatis akan mengambil tempat di dalam perangkat Pengguna yang menjalankan fungsi dalam menyimpan preferensi maupun konfigurasi Pengguna selama mengunjungi suatu situs.
                    </li>
                    <li className="text-justify">
                        Cookies tersebut tidak diperuntukkan untuk digunakan pada saat melakukan akses data lain yang Pengguna miliki di perangkat komputer Pengguna, selain dari yang telah Pengguna setujui untuk disampaikan.
                    </li>
                    <li className="text-justify">
                        Walaupun secara otomatis perangkat komputer Pengguna akan menerima cookies, Pengguna dapat menentukan pilihan untuk melakukan modifikasi melalui pengaturan browser Pengguna yaitu dengan memilih untuk menolak cookies (pilihan ini dapat membatasi layanan optimal pada saat melakukan akses ke Situs).
                    </li>
                    <li className="text-justify">
                        Harisenin.com menggunakan fitur Google Analytics Demographics and Interest. Data yang kami peroleh dari fitur tersebut, seperti umur, jenis kelamin, minat Pengguna dan lain-lain, akan kami gunakan untuk pengembangan Situs dan konten Harisenin.com. Jika tidak ingin data Anda terlacak oleh Google Analytics, Anda dapat menggunakan Add-On Google Analytics Opt-Out Browser.
                    </li>
                    <li className="text-justify">
                        Harisenin.com dapat menggunakan fitur-fitur yang disediakan oleh pihak ketiga dalam rangka meningkatkan layanan dan konten Harisenin.com, termasuk diantaranya ialah penyesuaian dan penyajian iklan kepada setiap Pengguna berdasarkan minat atau riwayat kunjungan. Jika Anda tidak ingin iklan ditampilkan berdasarkan penyesuaian tersebut, maka Anda dapat mengaturnya melalui browser.
                    </li>
                </ol>
            </div>
        )
    }
}

class PilihanPengguna extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    E. Pilihan Pengguna dan Transparasi
                </p>
                <ol>
                    <li className="text-justify">
                        Perangkat seluler pada umumnya (iOS, Android, dan sebagainya) memiliki pengaturan sehingga aplikasi Harisenin.com tidak dapat mengakses data tertentu tanpa persetujuan dari Pengguna. Perangkat iOS akan memberikan pemberitahuan kepada Pengguna saat aplikasi Harisenin.com pertama kali meminta akses terhadap data tersebut, sedangkan perangkat Android akan memberikan pemberitahuan kepada Pengguna saat aplikasi Harisenin.com pertama kali dimuat. Dengan menggunakan aplikasi dan memberikan akses terhadap aplikasi, Pengguna dianggap memberikan persetujuannya terhadap Kebijakan Privasi.
                    </li>
                    <li className="text-justify">
                        Setelah transaksi jual beli melalui marketplace berhasil, Penjual maupun Pembeli memiliki kesempatan untuk memberikan penilaian dan ulasan terhadap satu sama lain. Informasi ini mungkin dapat dilihat secara publik dengan persetujuan Pengguna.
                    </li>
                    <li className="text-justify">
                        Pengguna dapat mengakses dan mengubah informasi berupa alamat email, nomor telepon, tanggal lahir, jenis kelamin, daftar alamat, metode pembayaran, dan rekening bank melalui fitur Pengaturan pada Situs.
                    </li>
                    <li className="text-justify">
                        Pengguna dapat menarik diri dari informasi atau notifikasi berupa buletin, ulasan, diskusi produk, pesan pribadi, atau pesan pribadi dari Admin yang dikirimkan oleh Harisenin.com melalui fitur Pengaturan pada Situs. Harisenin.com tetap dapat mengirimkan pesan atau email berupa keterangan transaksi atau informasi terkait akun Pengguna.
                    </li>
                    <li className="text-justify">
                        Sejauh diizinkan oleh ketentuan yang berlaku, Pengguna dapat menghubungi Harisenin.com untuk melakukan penarikan persetujuan terhadap perolehan, pengumpulan, penyimpanan, pengelolaan dan penggunaan data Pengguna. Apabila terjadi demikian maka Pengguna memahami konsekuensi bahwa Pengguna tidak dapat menggunakan layanan Situs maupun layanan Harisenin.com lainnya.
                    </li>
                </ol>
            </div>
        )
    }
}

class PenyimpananDanPenghapusan extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    F. Penyimpanan dan Penghapusan Informasi
                </p>
                <p className="text-justify">
                    Harisenin.com akan menyimpan informasi selama akun Pengguna tetap aktif dan dapat melakukan penghapusan sesuai dengan ketentuan peraturan hukum yang berlaku.
                </p>
            </div>
        )
    }
}

class PembaruanKebijakanPrivasi extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    G. Pembaruan Kebijakan Privasi
                </p>
                <p className="text-justify mb-5">
                    Harisenin.com dapat sewaktu-waktu melakukan perubahan atau pembaruan terhadap Kebijakan Privasi ini. Harisenin.com menyarankan agar Pengguna membaca secara seksama dan memeriksa halaman Kebijakan Privasi ini dari waktu ke waktu untuk mengetahui perubahan apapun. Dengan tetap mengakses dan menggunakan layanan Situs maupun layanan Harisenin.com lainnya, maka Pengguna dianggap menyetujui perubahan-perubahan dalam Kebijakan Privasi.</p>
            </div>
        )
    }
}
