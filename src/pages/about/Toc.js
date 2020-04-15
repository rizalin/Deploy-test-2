import React, { Component } from 'react'
import HeaderNavbar from '../../components/header/HeaderNav';
import Head from './../../components/Head';
import Footer from '../../components/header/Footer';
import { Container } from 'react-bootstrap'

class Toc extends Component {
    render() {
        return (
            <div>
                <Head title="Syarat dan ketentuan" description="Description" />
                <HeaderNavbar />
                <Container className="px-4 toc-body">
                    <h2 className="d-flex justify-content-center font-weight-bold title_toc mt-5">
                        Syarat dan Ketentuan harisenin.com
                    </h2>
                    <div className="d-flex justify-content-center mb-5">
                        Pembaruan Terakhir: Maret 2020
                    </div>
                    <p className="text-justify">Selamat datang di www.harisenin.com.</p>
                    <p className="text-justify">Syarat dan Ketentuan ini akan berlaku sebagai perjanjian antara Anda baik sebagai Penyedia Jasa (Partner) atau Klien (Klien) dengan harisenin.com yang mencakup segala ketentuan penggunaan layanan, pembayaran dan fitur-fitur lain yang tersedia didalam Harisenin.com.</p>
                    <p className="text-justify">
                        Dengan mendaftar dan/atau menggunakan situs www.harisenin.com, maka pengguna dianggap telah membaca, mengerti, memahami dan menyetujui semua isi dalam Syarat &amp; ketentuan. Jika pengguna tidak menyetujui salah satu, sebagian, atau seluruh isi Syarat &amp; ketentuan, maka pengguna tidak diperkenankan menggunakan layanan di www.harisenin.com.
                    </p>
                    <p className="text-justify">
                        Harisenin.com dengan ini berhak menentukan segala syarat dan ketentuan yang dianggap perlu dalam menyediakan layanan kepada Anda termasuk namun tidak terbatas untuk sewaktu-waktu melakukan perubahan dan/atau penyesuaian atas isi Syarat dan Ketentuan ini.
                    </p>
                    <Definisi />
                    <OverView />
                    <Partner />
                    <Gawean />
                    <LevelPartner />
                    <FiturPendukungPartner />
                    <TransaksiPartneranPendapatan />
                    <PenarikanDana />
                    <Client />
                    <Transaksiklienan />
                    <Orderan />
                    <StatusOrderan />
                    <Ulasan />
                    <PerselisihanPembatalan />
                    <PembatalanPemesanan />
                    <SaldoRefund />
                    <PraktikPengguna />
                    <Umum />
                    <MenginformasikanPelanggaran />
                    <PenggunaanTidakSemestinya />
                    <KetentuanUmum />
                    <KontenDibuatPengguna />
                    <KepemilikanPembatasan />
                    <GantiRugi />
                    <Pembaharuan />
                </Container>
                <Footer />
            </div>
        )
    }
}
export default Toc;


class Definisi extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-5">Definisi</h3>
                <ol>
                    <li className="text-justify"> PT Karya Kaya Bahagia adalah suatu perseroan terbatas yang menjalankan kegiatan usaha jasa web portal www.harisenin.com, yakni situs pencarian jasa yang dijual oleh penyedia jasa terdaftar. Selanjutnya disebut harisenin.com.</li>
                    <li className="text-justify"> Syarat &amp; ketentuan adalah perjanjian antara Pengguna dan Harisenin.com yang berisikan seperangkat peraturan yang mengatur hak, kewajiban, tanggung jawab pengguna dan Harisenin.com, serta tata cara penggunaan sistem layanan Harisenin.com.
                        </li >
                    <li className="text-justify"> <strong>Gawean</strong> adalah jasa atau layanan yang dipasarkan dan dipesan melalui Harisenin.com
                        </li>
                    <li className="text-justify"> Pengguna adalah pihak yang menggunakan layanan Harisenin.com, termasuk namun tidak terbatas pada Klien, Partner maupun pihak lain yang sekedar berkunjung ke Situs Harisenin.com.</li>
                    <li className="text-justify"> <strong>Penyedia Jasa (“Partner”)</strong> adalah Pengguna layanan Harisenin.com yang telah mendaftar sebagai penyedia jasa atau layanan.
                        </li>
                    <li className="text-justify"><strong>Klien (“Klien”)</strong> adalah Pengguna layanan Harisenin.com yang telah mendaftar sebagai pencari atau calon Klien yang disediakan Penyedia Jasa.</li>
                    <li className="text-justify"><strong>Etalase</strong> adalah laman situs atau aplikasi Harisenin.com yang menampilkan profil Penyedia Jasa serta jenis Pekerjaan yang ditawarkan oleh Penyedia Jasa.</li>
                    <li className="text-justify">
                        <strong>Orderan</strong> adalah kontrak antara Penyedia Jasa dan Klien yang berisi persetujuan atas jenis Pekerjaan, Harga Sepakat, Jangka Waktu Pekerjaan serta kesepakatan lain yang dibuat dalam pelaksanaan Pekerjaan.
                        </li>
                    {/* <li className="text-justify">
                        Custom Order adalah
                        </li>
                    <li className="text-justify">
                        Custom Order adalah
                        </li> */}
                    <li className="text-justify">
                        <strong>Harga</strong> adalah harga atas suatu Pekerjaan yang ditampilkan didalam laman Harisenin.com.
                        </li>
                    <li className="text-justify">
                        <strong>Pendapatan</strong> adalah jumlah Harga yang diterima Partner setelah dikurangi oleh pembagian hasil kepada Harisenin.com yang dapat diterima setelah dilakukan penyerahan hasil Pekerjaan yang hasilnya telah disetujui oleh Klien. Pendapatan ini dapat ditarik oleh Partner sesuai dengan ketentuan yang berlaku.
                        </li>
                    <li className="text-justify">
                        <strong>Saldo Refund</strong> adalah fasilitas penampungan sementara atas dana milik Klien (bukan fasilitas penyimpanan dana), yang disediakan Harisenin.com untuk menampung pengembalian dana transaksi (refund) Klienan jasa, dan produk digital. Dana ini hanya dapat digunakan kembali untuk melakukan Klienan pada Situs Harisenin.com dan/atau ditarik ke akun bank yang terdaftar.
                        </li>
                    <li className="text-justify">
                        <strong>Saldo Penghasilan</strong> adalah fasilitas penampungan sementara atas dana milik Partner (bukan fasilitas penyimpanan dana), yang disediakan Harisenin.com untuk menampung dana hasil Partneran jasa pada Situs Harisenin.com. Dana ini hanya dapat ditarik ke akun bank yang terdaftar dan tidak dapat digunakan kembali untuk melakukan Klienan pada Situs Harisenin.com.
                        </li>
                </ol>
            </div>
        )
    }
}

class OverView extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-5">Overview (Syarat &amp; Ketentuan Utama)</h3>
                <ol>
                    <li className="text-justify">
                        Pengguna dengan ini menyatakan bahwa pengguna adalah orang yang cakap dan mampu untuk mengikatkan dirinya dalam sebuah perjanjian yang sah menurut hukum.
                        </li>
                    <li className="text-justify">
                        Hanya pengguna terdaftar yang dapat melakukan transaksi di situs harisenin.com. Harisenin.com tidak mengenakan biaya pendaftaran kepada pengguna.
                        </li>
                    <li className="text-justify">
                        Pengguna yang telah mendaftar dapat bertindak sebagai:
                            <ul className="dashed">
                            <li> Klien</li>
                            <li> Partner</li>
                        </ul>
                    </li>
                    <li className="text-justify">
                        Gawean di harisenin.com dapat ditawarkan secara gratis sampai dengan harga maksimum sebesar Rp 1.000.000.000,- <i>(Satu milyar rupiah).</i>
                    </li>
                    <li className="text-justify">
                        Gawean dapat dibeli melalui tombol order di halaman detail Gawean Partner atau melalui custom offer.
                        </li>
                    <li className="text-justify">
                        Untuk harga dan pembayaran per gawean dapat dilihat di bagian Klienan dibawah halaman ini.
                        </li>

                    <li className="text-justify">
                        Partner harus menyelesaikan Orderan mereka, dan tidak dapat membatalkan Orderan tanpa alasan. Membatalkan Orderan akan memengaruhi reputasi dan status Partner.
                        </li>
                    <li className="text-justify">
                        Level Partner didapat berdasarkan kinerja dan reputasi mereka. Kenaikan level didapat berdasarkan banyaknya jumlah orderan yang selesai dan jumlah pendapatan yang diterima oleh setiap Partner. Harisenin secara manual melakukan justifikasi atas kenaikan level Partner.
                        </li>
                    <li className="text-justify">
                        Anda wajib menggunakan metode pembayaran yang telah ditetapkan oleh harisenin.com. Harisenin.com tidak bertanggung jawab atas segala bentuk kerugian yang timbul dari pembayaran atas Pekerjaan yang dilakukan diluar metode pembayaran yang telah ditetapkan oleh harisenin.com.
                       </li>

                    <li className="text-justify">
                        Segala kerugian yang timbul akibat hasil Pekerjaan yang tidak sesuai ekspektasi Klien atau tidak sesuai dengan yang tercantum didalam Orderan (Order) adalah sepenuhnya tanggung jawab Partner.
                        </li>
                    <li className="text-justify">
                        Klien memiliki semua hak atas hasil pekerjaan yang dikirim oleh Partner. Partner bertanggung jawab penuh apabila dari hasil pekerjaan yang dikirim terdapat klaim dari pihak lain terkait Hak Kekayaan Intelektual (HAKI) atas hasil pekerjaan Partner. Segala persoalan hukum sepenuhnya menjadi tanggung jawab Partner dan membebaskan harisenin.com dari segala tuntutan.
                        </li>
                    <li className="text-justify">
                        Harisenin.com memiliki hak untuk menggunakan hasil pekerjaan yang di publikasikan sebagai bahan pemasaran dan promosi situs harisenin.com.
                        </li>
                    <li className="text-justify">
                        Harisenin.com berhak menentukan jenis atau kategori pekerjaan yang dapat ditawarkan melalui Harisenin.com dan sewaktu-waktu dapat melakukan perubahan atau penyesuaian;
                        </li>
                    <li className="text-justify">
                        Pengguna bertanggung jawab secara pribadi untuk menjaga kerahasiaan akun dan password untuk semua aktivitas yang terjadi dalam akun Pengguna.
                        </li>
                    <li className="text-justify">
                        Harisenin.com tidak akan meminta username, password maupun kode SMS verifikasi atau kode OTP milik akun Pengguna untuk alasan apapun, oleh karena itu Harisenin.com menghimbau Pengguna agar tidak memberikan data tersebut maupun data penting lainnya kepada pihak yang mengatasnamakan Harisenin.com atau pihak lain yang tidak dapat dijamin keamanannya.
                        </li>
                    <li className="text-justify">
                        Pengguna setuju untuk memastikan bahwa Pengguna keluar dari akun di akhir setiap sesi dan memberitahu Harisenin.com jika ada penggunaan tanpa izin atas sandi atau akun Pengguna.
                        </li>
                    <li className="text-justify">
                        Pengguna dengan ini menyatakan bahwa Harisenin.com tidak bertanggung jawab atas kerugian ataupun kendala yang timbul atas penyalahgunaan akun Pengguna yang diakibatkan oleh kelalaian Pengguna, termasuk namun tidak terbatas pada meminjamkan atau memberikan akses akun kepada pihak lain, mengakses link atau tautan yang diberikan oleh pihak lain, memberikan atau memperlihatkan kode verifikasi (OTP), password atau email kepada pihak lain, maupun kelalaian Pengguna lainnya yang mengakibatkan kerugian ataupun kendala pada akun Pengguna.
                        </li>
                </ol>
            </div>
        )
    }
}

class Partner extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-5">Partner</h3><p style={{ fontSize: '20px', fontWeight: 'bold' }}>Umum</p>
                <ol>
                    <li className="text-justify">
                        Pengguna yang akan bertindak sebagai Partner diwajibkan mendaftarkan diri sebagai Partner melalui mekanisme yang telah ditetapkan harisenin.com. Partner berhak melakukan pengaturan terhadap jasa yang akan ditawarkan di dashboard Partner.
                        </li>
                    <li className="text-justify">
                        Harisenin.com akan melakukan validasi terhadap pengguna yang mendaftar sebagai Partner. Proses validasi dapat dilakukan dengan cara interview, dan/atau back ground check kepada profil pengguna.
                        </li>
                    <li className="text-justify">
                        Proses validasi akan dilaksanakan maksimal dalam jangka waktu 2x24 Jam.
                        </li>
                    <li className="text-justify">
                        Harisenin.com berhak menerima, menolak, atau menunda aplikasi pendaftaran Pengguna sebagai Partner harisenin.com.
                        </li>
                    <li className="text-justify">
                        Harisenin.com akan mengirimkan pemberitahuan hasil validasi tim kami melalui notifikasi di halaman notifikasi akun Pengguna, e-mail, SMS, dan/atau via whatsapp chat.
                        </li>
                    <li className="text-justify">
                        Partner membuat gawean di harisenin.com agar klien dapat membeli jasa yang ditawarkan oleh Partner.
                        </li>
                    <li className="text-justify">
                        Partner juga bisa menawarkan jasa yang spesifik (harga, scope pekerjaan, jangka waktu, dll) kepada klien lewat custom offer.
                        </li>
                    <li className="text-justify">
                        Untuk setiap pekerjaan yang telah selesai, Partner akan mendapatkan penghasilan bersih sebesar 90% dari jumlah harga jasa yang ditawarkan, kecuali terdapat perjanjian khusus antara harisenin.com dan Partner yang sah menurut Undang-Undang yang berlaku.
                        </li>
                    <li className="text-justify">
                        Pengguna yang telah diterima sebagai Partner harisenin.com wajib mengunggah konten gawean yang akan ditawarkan kepada klien dalam jangka waktu 90 (sembilan puluh) hari kalender setelah tanggal penerimaan. Apabila dalam jangka waktu 90 (sembilan puluh) hari kalender Pengguna masih tidak mengunggah konten gawean, maka Pengguna menyetujui dan memahami bahwa Harisenin.com berhak untuk melakukan moderasi dan/atau penutupan akun Partner pemberitahuan sebelumnya.
                        </li>
                    <li className="text-justify">
                        Harisenin.com tanpa pemberitahuan terlebih dahulu kepada Pengguna, memiliki kewenangan untuk melakukan tindakan yang perlu atas setiap dugaan pelanggaran atau pelanggaran Syarat &amp; ketentuan dan/atau hukum yang berlaku, yakni tindakan berupa penghapusan gawean, pembatalan listing, suspensi akun, dan/atau penghapusan akun pengguna.
                        </li>
                    <li className="text-justify">
                        Harisenin.com memiliki kewenangan untuk menghapus akun Partner atau akun Pengguna baik sementara maupun permanen apabila didapati adanya tindakan kecurangan dalam bertransaksi dan/atau pelanggaran terhadap syarat dan ketentuan Harisenin.com. Pengguna menyetujui bahwa Harisenin.com berhak melakukan tindakan lain yang diperlukan terkait hal tersebut, termasuk namun tidak terbatas pada menolak pendaftaran Partner yang baru apabila ditemukan kesamaan data.
                        </li>
                    <li className="text-justify">
                        Pengguna dilarang untuk menciptakan dan/atau menggunakan perangkat, software, fitur dan/atau alat lainnya yang bertujuan untuk melakukan manipulasi pada sistem Harisenin.com, termasuk namun tidak terbatas pada :
                            <ol type="i">
                            <li className="text-justify">manipulasi data Partner;</li>
                            <li className="text-justify">kegiatan perambanan (crawling/scraping);</li>
                            <li className="text-justify">kegiatan otomatisasi dalam transaksi, jual beli, promosi, dsb;</li>
                            <li className="text-justify">penambahan produk ke etalase; dan/atau</li>
                            <li className="text-justify">aktivitas lain yang secara wajar dapat dinilai sebagai tindakan manipulasi sistem.</li>
                        </ol>
                        {/* (i) manipulasi data Partner; (ii) kegiatan perambanan (crawling/scraping); (iii) kegiatan otomatisasi dalam transaksi, jual beli, promosi, dsb; (v) penambahan produk ke etalase; dan/atau (vi) aktivitas lain yang secara wajar dapat dinilai sebagai tindakan manipulasi sistem. */}
                    </li>
                    <li className="text-justify">
                        Harisenin.com memiliki kewenangan untuk melakukan penyesuaian jumlah transaksi Partner, penyesuaian jumlah reputasi, dan/atau melakukan proses moderasi/menutup akun Pengguna, jika diketahui atau diduga adanya kecurangan oleh Pengguna yang bertujuan memanipulasi data transaksi Pengguna demi meningkatkan reputasi Partner (review dan atau jumlah transaksi). Contohnya adalah melakukan proses belanja ke Partner sendiri dengan menggunakan akun pribadi atau akun pribadi lainnya.
                        </li>
                    <li className="text-justify">
                        Partner dilarang melakukan duplikasi etalase Partner lain, duplikasi gawean, atau tindakan-tindakan lain yang dapat diindikasikan sebagai usaha persaingan tidak sehat.
                        </li>
                    <li className="text-justify">
                        Pengguna tidak memiliki hak untuk mengubah nama Partner dan/atau domain Partner Pengguna.
                        </li>
                    <li className="text-justify">
                        Partner dilarang mempromosikan Gawean secara langsung menggunakan fasilitas pesan pribadi, diskusi produk, ulasan produk yang dapat mengganggu kenyamanan Pengguna lain.
                        </li>
                    <li className="text-justify">
                        Segala URL yang dicantumkan oleh Partner di laman Etalase yang mengarahkan pengguna ke situs-situs lain selain situs harisenin.com dapat dianggap tidak sesuai dengan Syarat dan Ketentuan ini dan dapat berakibat penangguhan atau blokir atas Akun pengguna, kecuali URL untuk mengirimkan hasil pekerjaan yang disebabkan oleh besarnya data/dokumen/file yang dikirim melebihi kapasitas yang telah disediakan harisenin.com.
                        </li>
                    <li className="text-justify">
                        Harisenin.com berhak mengambil tindakan apapun atas review dengan nilai rendah dari Klien atas performa Partner.
                        </li>
                </ol>
            </div>
        )
    }
}

class Gawean extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>Gawean</p>
                <ol>
                    <li className="text-justify mb-2">
                        Partner diperbolehkan membuat gawean berdasarkan level Partner.
                            <ol type="a">
                            <li className="text-justify">Junior Partner: 10 Gawean</li>
                            <li className="text-justify">Senior Partner: 20 Gawean</li>
                            <li className="text-justify">
                                Top Partner: 30 Gawean
                                </li>
                        </ol>
                    </li>
                    <li className="text-justify">
                        Gawean yang dibuat di harisenin.com merupakan <strong>Konten yang dibuat oleh Pengguna (User Generated Content atau UGC).</strong>
                    </li>
                    <li className="text-justify">
                        Partner wajib menyediakan informasi yang lengkap dan jelas terkait Pekerjaan yang dipasarkan;
                        </li>
                    <li className="text-justify">
                        Partner wajib menyediakan informasi mengenai harga yang akan ditampilkan di laman harisenin.com;
                        </li>
                    <li className="text-justify">
                        Partner wajib menjamin orisinalitas Pekerjaan yang dipasarkan melalui harisenin.com;
                        </li>
                    <li className="text-justify">
                        Partner dapat mengunggah narasi, logo, gambar atau video milik Penyedia Jasa ke halaman Etalase terkait dengan Pekerjaan yang ditawarkan dan bukan merupakan suatu karya yang keasliannya tidak dapat dipertanggung jawabkan.
                        </li>
                    <li className="text-justify">
                        Partner tidak diperbolehkan membuat gawean yang berkaitan dengan:
                            <ol type="a">
                            <li className="text-justify">
                                Jasa pembuatan karya seni dan sastra seperti karikatur / cerita / lagu / sketsa / desain / film / selebaran yang menyinggung SARA (suku, agama, ras, dan antargolongan);
                                </li>
                            <li className="text-justify">
                                Jasa pembuatan obat, peracikan bahan kimia, pemberian nasihat medis, akupunktur, jasa dokter, pelayanan keperawatan;
                                </li>
                            <li className="text-justify">
                                Hacking, phising, mirroring suatu situs;
                                </li>
                            <li className="text-justify">
                                Jasa asuransi, money game;
                                </li>
                            <li className="text-justify">
                                Jasa mobilisasi massa, jasa penggalangan dana, jasa pembuatan bom dan / atau senjata, jasa peracikan bahan peledak;
                                </li>
                            <li className="text-justify">
                                Jasa seni dan sastra seperti karikatur / cerita / lagu / sketsa / desain / film / selebaran yang berkaitan dengan Kepala Negara / Militer / Polisi / berhubungan dengan simbol Negara, Bahasa, Bendera dan Lagu Kebangsaan Republik Indonesia;
                                </li>
                            <li className="text-justify">
                                Pemulihan bentuk, reproduksi, Partneran, penyebaran foto / gambar bergerak / animasi / sketsa / ilustrasi / suara / teks / percakapan yang secara eksplisit berkaitan dengan hubungan seksual, pelecehan seksual, masturbasi, ketelanjangan, alat kelamin, pornografi anak, persetubuhan dengan binatang;
                                </li>
                            <li className="text-justify">
                                Partneran, distribusi, adaptasi karya seni dan sastra seperti film / musik / buku / desain / gambar yang berpotensi melanggar Hak Kekayaan Intelektual Pihak Ketiga.</li>
                            <li className="text-justify">
                                Dan layanan lain yang dianggap spam atau pekerjaan yang disadari harisenin.com tidak sesuai atau mungkin menipu atau melanggar kontrak pihak ketiga mana pun.
                                </li>
                        </ol>
                    </li>
                    <li className="text-justify">
                        Gawean yang telah didaftarkan oleh Partner dapat dihapus oleh harisenin.com kapan saja, bisa berujung pada penon-aktifan akun dan penghapusan akun pengguna jika tidak mengikuti Syarat dan Ketentuan ini,
                        </li>
                </ol>
            </div>
        )
    }
}

class LevelPartner extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>Level Partner</p>
                <ol>
                    <li className="text-justify">
                        Harisenin.com mengakomodasi para Partner dengan kinerja terbaik kedalam level level yang sesuai kinerja guna menumbuhkan bisnis mereka. Harisenin.com membantu para Partner bekinerja baik ke dalam promosi dan pemasaran lewat konten – konten yang harisenin.com buat. Dan, jika para Partner tepat waktu dan mempertahankan kualitas dan peringkat tinggi, harisenin.com dapat memberi mereka penghargaan dengan status baru, peluang khusus, manfaat, dan elemen pendukung lainnya.
                        </li>
                    <li className="text-justify">
                        Level Partner tediri dari:
                            <ol type="a">
                            <li className="text-justify">Junior Partner</li>
                            <li className="text-justify">Senior Partner</li>
                            <li className="text-justify">Top Partner</li>
                        </ol>
                    </li>
                    <li className="text-justify">
                        Partner memperoleh Level Partner berdasarkan aktivitas, kinerja, dan reputasi mereka dengan kriteria sebagai berikut:
                            <p className="mt-3" ><strong>Junior Partner</strong><br />Setelah diterima sebagai Partner harisenin.com Anda secara otomatis akan memperoleh status sebagai Junior Partner.<br />Manfaat:
                                <ol type="a">
                                <li>Posting Maksimal 10</li>
                            </ol></p>
                        <p className="mt-3" >
                            <strong>Senior Partner</strong><br /> Partner Anda akan menjadi Senior Partner dengan kriteria sebagai berikut:
                                <ol type="a">
                                <li className="text-justify">
                                    Total pendapatan minimal Rp 5.000.000
                                    </li>
                                <li className="text-justify">
                                    Total gawean selesai minimal 3 Gawean
                                    </li>
                                <li className="text-justify">
                                    Minimal Memperoleh 4.5 Bintang dari hasil ulasan.
                                    </li>
                            </ol>
                            Manfaat:
                                <ol type="a">
                                <li className="text-justify">
                                    Posting Maksimal 20 Gawean
                                    </li>
                                <li className="text-justify">
                                    List teratas di hasil pencarian dan masuk rekomendasi akun pengguna.
                                    </li>
                                <li className="text-justify">Bisa menjadi Partner Pilihan untuk project B2B.</li>
                            </ol>
                        </p>
                        <p className="mt-3" >
                            <strong>Top Partner</strong><br /> Anda akan menjadi Top Partner dengan kriteria sebagai berikut:
                                <ol type="a">
                                <li className="text-justify">
                                    Total pendapatan minimal Rp 50.000.000,-
                                    </li>
                                <li className="text-justify">
                                    Total gawean selesai minimal 10 Gawean
                                    </li>
                                <li className="text-justify">
                                    Minimal Memperoleh 4.7 Bintang dari hasil ulasan.
                                    </li>
                            </ol>
                            Manfaat:
                                <ol type="a">
                                <li className="text-justify">
                                    Posting Maksimal 30 Gawean.
                                    </li>
                                <li className="text-justify">
                                    List teratas dihasil pencarian, masuk rekomendasi akun pengguna.
                                    </li>
                                <li className="text-justify">Partner Pilihan untuk project B2B, masuk kedalam konten – konten pemasaran dan promosi harisenin.com.</li>
                            </ol>
                        </p>
                    </li>
                    <li className="text-justify">
                        Kemajuan Level diperbarui secara berkala oleh sistem.
                        </li>
                    <li className="text-justify">
                        Partner yang tidak dapat mempertahankan layanan berkualitas tinggi mereka, mengalami penurunan peringkat. Misalnya, pengiriman terlambat, peringatan ke akun Partner, dan pembatalan.
                        </li>
                </ol>
            </div>
        )
    }
}

class FiturPendukungPartner extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>Fitur Pendukung Partner</p>
                <p><strong>Custom Offer</strong>
                    <ol>
                        <li className="text-justify">
                            Partner dapat mengirim Custom Offer yang membahas persyaratan khusus Klien.
                    </li>
                        <li className="text-justify">
                            Custom Offer didefinisikan oleh Partner dengan deskripsi layanan yang tepat, harga dan waktu yang diharapkan untuk memberikan layanan kepada Klien.
                    </li>
                        <li className="text-justify">
                            Penawaran Kustom dikirim dari halaman percakapan (chat/pesan).
                    </li>
                        <li className="text-justify">
                            Layanan yang diberikan melalui Custom Offer tidak boleh melanggar Ketentuan Layanan harisenin.com.
                    </li>
                        <li className="text-justify">
                            Fitur - Project Milestone:
                        <ol type="a">
                                <li className="text-justify">
                                    Penawaran Kustom di atas Rp 10.000.000,- dapat mencakup hingga tiga <i>milestone.</i> Setiap milestone dibayarkan dan dikirimkan secara terpisah sesuai dengan deskripsi dan jadwal Penawaran Kustom.</li>
                                <li className="text-justify">
                                    <i>Milestone</i> ditandai sebagai Selesai setelah dikirimkan oleh Partner dan kemudian diterima oleh Klien. Milestone akan secara otomatis ditandai sebagai selesai jika tidak ada penerimaan atau permintaan untuk modifikasi diajukan dalam waktu 8 hari setelah ditandai sebagai Terkirim, namun, dalam kasus tersebut Orderan akan dihentikan dan semua milestone lebih lanjut akan dibatalkan.
                            </li>
                                <li className="text-justify">
                                    Setelah <i>milestone</i> pengiriman, Klien dapat memilih untuk melanjutkan dengan Orderan dan membayar untuk <i>milestone</i> berikutnya, atau untuk menghentikan Orderan. Harap dicatat bahwa jika Anda memilih untuk menghentikan Orderan, <i>milestone</i> pencapaian saat ini tidak akan dibatalkan.
                            </li>
                                <li className="text-justify">
                                    Saldo Penghasilan hanya berasal dari hasil Partneran Barang, produk investasi, dan/atau komisi affiliate pada Situs Harisenin.com dan tidak bisa dilakukan penambahan secara sendiri (top up).
                            </li>
                            </ol>
                        </li>
                    </ol>
                </p>
            </div>
        )
    }
}

class TransaksiPartneranPendapatan extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Transaksi Partneran &amp; Pendapatan</p>
                <ol>
                    <li className="text-justify">
                        Partner wajib memberikan balasan untuk menerima atau menolak Orderan gawean pihak Klien dalam batas waktu 1x24 jam terhitung sejak adanya notifikasi Orderan gawean dari Harisenin.com. Jika dalam batas waktu tersebut tidak ada balasan dari Partner maka secara otomatis Orderan akan dibatalkan.
                        </li>
                    <li className="text-justify">
                        Saldo Penghasilan hanya berasal dari hasil Partneran Gawean dan tidak bisa dilakukan penambahan sendiri (top up).
                        </li>
                    <li className="text-justify">
                        Saldo Penghasilan hanya dapat dilakukan penarikan dana (withdrawal) ke rekening bank yang terdaftar pada akun Pengguna, dan tidak dapat digunakan sebagai metode pembayaran atas transaksi Klienan gawean di Situs Harisenin.com.
                        </li>
                    <li className="text-justify">
                        Harisenin.com memiliki kewenangan untuk melakukan pembekuan Saldo Penghasilan Pengguna apabila ditemukan / diduga adanya tindak kecurangan dalam bertransaksi dan/atau pelanggaran terhadap syarat dan ketentuan Harisenin.com.
                        </li>
                    <li className="text-justify">
                        Harisenin.com akan melakukan transfer atas penghasilan Anda setelah Orderan (Order) sudah dalam status “Selesai”, yang berarti Pekerjaan telah diterima dan disetujui oleh Klien.
                        </li>
                    <li className="text-justify">
                        Jika Pekerjaan dibatalkan oleh Klien, jumlah total yang dibayarkan untuk Orderan (order) akan dikembalikan kepada Klien. Jumlah pengembalian akan ditentukan oleh kedua belah pihak dengan harisenin.com sebagai penentu akhir dari nilai pengembalian.
                        </li>
                    <li className="text-justify">
                        Harisenin.com akan melakukan transfer atas Pendapatan dalam jangka waktu selambat-lambatnya 2 hari setelah Orderan (Order) telah dalam status “Selesai”.
                        </li>
                    <li className="text-justify">
                        Harisenin.com tidak bertanggung jawab apabila terdapat keterlambatan dan/atau kegagalan transfer pendapatan yang diakibatkan tindakan pihak ketiga yang diluar kuasa dan/atau kendali harisenin.com.
                        </li>
                    <li className="text-justify">
                        Setiap keterlambatan dan/atau kegagalan dalam mengirimkan hasil Pekerjaan adalah sepenuhnya tanggung jawab Penyedia Jasa, dan atas hal tersebut Klien berhak menuntut ganti rugi dalam bentuk apapun tanpa melibatkan harisenin.com.
                        </li>
                </ol>

            </div>
        )
    }
}

class PenarikanDana extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Penarikan Dana</p>
                <ol>
                    <li className="text-justify">
                        Penarikan dana ke bank BCA  akan diproses dalam waktu 1x24 jam hari kerja, sedangkan penarikan dana antar bank akan diproses dalam waktu 2x24 jam hari kerja.
                    </li>
                    <li className="text-justify">
                        Untuk penarikan dana dengan tujuan nomor rekening di luar bank BCA biaya tambahan akan dibebankan akan menjadi tanggungan dari Pengguna.
                    </li>
                    <li className="text-justify">
                        Dalam hal ditemukan adanya dugaan pelanggaran terhadap Syarat dan Ketentuan Harisenin.com, kecurangan, manipulasi atau kejahatan, Pengguna memahami dan menyetujui bahwa Harisenin.com berhak melakukan tindakan pemeriksaan, pembekuan, penundaan dan/atau pembatalan terhadap penarikan dana yang dilakukan oleh Pengguna.
                    </li>
                    <li className="text-justify">
                        Pemeriksaan, pembekuan atau penundaan penarikan dana sebagaimana dimaksud dalam Poin 3 dapat dilakukan dalam jangka waktu selama yang diperlukan oleh pihak Harisenin.com.
                    </li>
                </ol>
            </div>
        )
    }
}

class Client extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-5">Klien</h3><p style={{ fontSize: '20px', fontWeight: 'bold' }}>Umum</p>
                <ol>
                    <li className="text-justify">
                        Klien tidak boleh menawarkan pembayaran langsung kepada Partner menggunakan sistem pembayaran di luar platform harisenin.com.
                    </li>
                    <li className="text-justify">
                        Klien dapat meminta layanan tertentu kepada Partner di fitur Custom Order.
                    </li>
                    <li className="text-justify">
                        Layanan yang diminta di harisenin.com harus merupakan layanan yang diizinkan di harisenin.com. Klien dilarang menggunakan fitur Custom Order (modifikasi orderan) untuk tujuan apa pun selain mendapatkan layanan di harisenin.com. Jika kami menemukan penyalah gunaan fitur ini maka kami berhak menghapus, dan/atau menangguhkan orderan tersebut yang dapat berakibat pada penghapusan akun pengguna.
                    </li>
                </ol>
            </div>
        )
    }
}

class Transaksiklienan extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Transaksi Klienan</p>
                <ol>
                    <li className="text-justify">
                        Klien melakukan transaksi Klienan untuk suatu gawean dari halaman gawean Partner atau custom offer yang dikirimkan oleh Partner, menggunakan tombol <strong>“rekrut”</strong> dan melakukan pembayaran sesuai dengan langkah-langkah yang telah ditetapkan oleh harisenin.com.
                        </li>
                    <li className="text-justify">
                        Setelah melakukan pembayaran, Klien di wajibkan untuk mengisi detail gawean sebagai landasan Partner kami untuk memulai pekerjaannya.
                    </li>
                    <li className="text-justify">
                        Partner diberi waktu 1x24 untuk memulai orderan dari Klien. Jika dalam batas waktu tersebut tidak ada balasan dari Partner maka secara otomatis Orderan akan dibatalkan.
                    </li>
                    <li className="text-justify">
                        Klien tidak boleh menawarkan pembayaran langsung kepada Partner menggunakan sistem pembayaran di luar platform harisenin.com. Klien wajib bertransaksi melalui prosedur transaksi yang telah ditetapkan oleh harisenin.com.
                    </li>
                    <li className="text-justify">
                        Klien melakukan pembayaran dengan menggunakan metode pembayaran yang sebelumnya telah dipilih oleh Klien, dan kemudian harisenin.com akan meneruskan dana ke pihak Partner apabila tahapan transaksi pada sistem harisenin.com telah status selesai.
                    </li>
                    <li className="text-justify">
                        Harisenin.com bermitra dengan Penyedia Layanan Pembayaran <i>(Payment Gateway)</i> untuk tujuan mengumpulkan semua pembayaran dari Klien, mentransfer pembayaran tersebut dari Klien ke Partner sesuai dengan Syarat dan Ketentuan.
                    </li>
                    <li className="text-justify">
                        Klien dapat meminta Custom Order apabila klien memiliki request tertentu kepada Partner kami, dan menerima Custom Offer dari Partner kami melalui situs harisenin.com.
                    </li>
                    <li className="text-justify">
                        Harisenin.com tidak mengenakan biaya layanan tambahan kepada Klien.
                    </li>
                    <li className="text-justify">
                        Saat melakukan Klienan gawean, Klien menyetujui bahwa:
                        <ul className="dashed">
                            <li className="text-justify">
                                Klien bertanggung jawab untuk membaca, memahami, dan menyetujui informasi/deskripsi keseluruhan gawean
                            </li>
                            <li className="text-justify">
                                Klien masuk ke dalam kontrak yang mengikat secara hukum untuk membeli gawean ketika Klien telah melakukan pembayaran.
                            </li>
                        </ul>
                    </li>
                    <li className="text-justify">
                        Klien memahami sepenuhnya dan menyetujui bahwa invoice yang diterbitkan adalah atas nama Partner.
                    </li>
                </ol>
            </div>

        )
    }
}

class Orderan extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-5">Orderan</h3><p style={{ fontSize: '20px', fontWeight: 'bold' }}>Umum</p>

                <ol>
                    <li className="text-justify">
                        Setelah melakukan pembayaran, platform Kami akan membuat orderan untuk Anda dengan nomor Orderan unik dari harisenin.com (#HS).
                    </li>
                    <li className="text-justify">
                        Partner harus mengirimkan pekerjaan yang telah selesai dengan memilih tombol “Unggah Hasil Pengerjaan” (terdapat di halaman oerderan) kepada Klien yang telah melakukan pembayaran untuk pekerjaan yang sesuai dengan kontrak di halaman informasi pekerjaan yang dibuat oleh Partner.
                    </li>
                    <li className="text-justify">
                        Mengirimkan hasil kerja yang tidak sesuai, misalnya mengirim pekerjaan yang belum selesai atau mengirim hasil yang tidak sesuai isi perjanjian kerja yang tertulis dalam halaman gawean dapat berakibat tuntutan hukum atau nilai review yang rendah atau penangguhan akun oleh harisenin.com.
                    </li>
                    <li className="text-justify">
                        Orderan akan berstatus Selesai setelah hasil pekerjaan yang dikirim disetujui oleh Klien. Jika Klien tidak mengajukan revisi atau menanggapi atau mengevaluasi pekerjaan yang diberikan oleh Partner dalam 72 jam, status orderan tersebut akan berubah secara otomatis menjadi Selesai.
                    </li>
                    <li className="text-justify">
                        Harisenin.com mendorong dan mengapresiasi Klien dan Partner agar dapat memecahkan konflik secara mufakat selama proses pekerjaan berlangsung. Klien dan Partner dapat menggunakan pusat resolusi untuk menyelesaikan perselisihan. Apabila terdapat konflik yang tidak terselesaikan, pengguna dapat menghubungi tim Layanan Konsumen.
                    </li>
                </ol>
            </div>
        )
    }
}


class StatusOrderan extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>Status Orderan: Mulai Bekerja</p>
                <ol>
                    <li className="text-justify">
                        Apabila Klien telah melakukan pembayaran untuk membuat orderan, Partner akan menerima notifikasi oleh sistem harisenin.com via email dan halaman notifiaksi situs harisenin.com.
                    </li>
                    <li className="text-justify">
                        Partner diberikan waktu 24 Jam untuk memulai pekerjaan. Apabila dalam 24 Jam Partner belum memulai Pekerjaan maka orderan tersebut akan Batal.
                    </li>
                    <li className="text-justify">
                        Apabila Partner tidak dapat mengirimkan pekerjaan pada tanggal jatuh tempo sesuai dengan gawean yang telah dibuat, hal ini dapat berakibat kepada tuntutan hukum atau nilai review yang rendah dari Klien. Hal ini juga dapat berimbas pada turun nya level Partner.
                    </li>
                    <li className="text-justify">
                        Pengguna bertanggung jawab untuk memindai semua dokumen atau file yang dikirim dari virus atau malware. Harisenin.com tidak bertanggung jawab atas dokumen – dokumen yang dibagikan antar user (Klien dan Partner).
                    </li>
                    <li className="text-justify">
                        Klien dapat menggunakan fitur “Revisi” yang terletak dihalaman detail orderan ketika orderan telah ditandai dalam status “terkirim”.
                    </li>
                </ol>
            </div>
        )
    }
}

class Ulasan extends Component {
    render() {
        return (
            <div>
                <p className="mt-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>Ulasan
                </p>
                <ol>
                    <li className="text-justify">
                        Memberikan ulasan pada orderan yang telah selesai penting untuk harisenin.com. Ulasan yang diberikan oleh Klien mewakili kepuasan atas pekerjaan dan pelayanan yang diberikan oleh Partner.
                    </li>
                    <li className="text-justify">
                        Harisenin.com berharap Klien dapat berkomunikasi dengan Partner mengenai masalah apapun yang berhubungan dengan layanan agar Partner kami dapat memperbaiki kualitas layanan sesuai dengan kebutuhan Klien.
                    </li>
                    <li className="text-justify">
                        Memberikan ulasan adalah hak Klien, ulasan tidak akan dihapus dengan alasan apapun kecuali jika ulasan tersebut melanggar syarat dan ketentuan harisenin.com.
                    </li>
                    <li className="text-justify">
                        Untuk menghindari penggunaan sistem review dengan tujuan yang tidak diinginkan, Klien hanya dapat memberikan ulasan untuk pekerjaan yang telah dibayar dan dipesan oleh Klien.
                    </li>
                    <li className="text-justify">
                        Penggunaan sistem ulasan dengan tujuan yang tidak diinginkan akan mempengaruhi akun pengguna, baik Klien maupun Partner, akun terkait dapat ditangguhkan atau dihapus oleh harisenin.com.
                    </li>
                    <li className="text-justify">
                        Ulasan yang diberikan oleh Klien akan muncul di halaman rincian gawean. Klien dapat memilih untuk tidak memberikan ulasan.
                    </li>
                    <li className="text-justify">
                        Klien dapat memberikan ulasan atas orderan telah selesai sampai dengan 72 Jam setelah orderan selesai. Tidak ada ulasan baru yang dapat diberikan setelah 72 Jam.
                    </li>
                    <li className="text-justify">
                        Partner tidak dapat menolak menyerahkan hasil kerja untuk memaksa mendapatkan review bagus dari Klien.
                    </li>
                </ol>
            </div>
        )
    }
}

class PerselisihanPembatalan extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-5">
                    Persilisihan dan Pembatalan
                </h3>
                <p className="text-justify">
                    Harisenin.com mendorong dan mengapresiasi Klien dan Partner agar dapat memecahkan konflik secara mufakat selama proses pekerjaan berlangsung. Klien dan Partner dapat menggunakan pusat resolusi untuk menyelesaikan perselisihan. Apabila terdapat konflik yang tidak terselesaikan, pengguna dapat menghubungi tim Layanan Konsumen.</p>
                <p style={{ fontSize: '20px' }}><strong>Dasar</strong></p>
                <ol>
                    <li className="text-justify">
                        Pembatalan Orderan dapat dilakukan di harisenin.com, jika memenuhi syarat, melalui customer support atau melalui Pusat Resolusi per orderan.
                        </li>
                    <li className="text-justify">
                        Mengajukan sengketa transaksi atau pengembalian pembayaran melalui penyedia pembayaran Anda atau bank Anda merupakan pelanggaran terhadap Ketentuan Layanan ini. Melakukan hal itu dapat membuat akun Anda dinonaktifkan sementara atau permanen. Catatan: setelah Anda mengajukan perselisihan dengan penyedia pembayaran Anda, dana tidak akan memenuhi syarat untuk pengembalian uang karena kewajiban kami terhadap penyedia pembayaran.
                        </li>
                    <li className="text-justify">
                        Dalam hal Klien atau Partner menemukan masalah terkait dengan layanan yang disediakan dalam suatu Orderan, Anda dianjurkan untuk menggunakan alat penyelesaian sengketa Situs untuk mencoba menyelesaikan masalah tersebut.
                        </li>
                    <li className="text-justify">
                        Harisenin.com, melalui Penyedia Layanan Pembayarannya, berhak untuk membatalkan Orderan atau menahan dana untuk segala dugaan transaksi penipuan yang dilakukan di Situs.
                        </li>
                    <li className="text-justify">
                        Semua transfer dan penugasan kekayaan intelektual kepada Klien akan dikenakan pembayaran penuh dan pengiriman tidak dapat digunakan jika pembayaran dibatalkan karena alasan apa pun.
                        </li>
                    <li className="text-justify">
                        Jika Orderan dibatalkan (karena alasan apa pun), dana yang dibayarkan akan dikembalikan ke Saldo Harisenin.com Klien.
                        </li>
                    <li className="text-justify">
                        Revisi untuk pengiriman dapat dilakukan oleh Partner berdasarkan Gawean Partner dan layanan pelanggan. Partner dapat menentukan jumlah revisi yang ditawarkan kepada Klien, termasuk tidak ada revisi.
                        </li>
                    <li className="text-justify">
                        Permintaan revisi dapat dilakukan melalui Halaman Orderan sementara Orderan ditandai sebagai Terkirim.
                        </li>
                    <li className="text-justify">
                        Meminta untuk mendapatkan lebih banyak layanan dari Partner di luar persyaratan yang disepakati dengan menggunakan tombol Revisi Permintaan tidak diizinkan.
                        </li>
                </ol>

            </div>
        )
    }
}

class PembatalanPemesanan extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: '20px' }}><strong>Pembatalan Pemesanan</strong></p>
                <ol>
                    <li className="text-justify">
                        Harisenin.com mendorong Klien dan Partner untuk menyelesaikan perselisihan layanan secara bersama-sama menggunakan Pusat Resolusi.
                    </li>
                    <li className="text-justify">
                        Kelayakan permintaan untuk Harisenin.com membatalkan Orderan akan dinilai oleh tim Customer support kami berdasarkan sejumlah faktor, termasuk pelanggaran terhadap Ketentuan Layanan kami dan / atau Standar Komunitas kami, kesalahan umum, dan penggunaan yang tidak tepat dari sistem Harisenin.com.
                    </li>
                    <li className="text-justify">
                        Orderan yang sudah selesai dapat dibatalkan, setelah ditinjau oleh tim Customer support kami, hingga 14 hari setelah Orderan ditandai telah selesai. Harap diperhatikan bahwa Orderan tidak dapat dibatalkan sebagian.
                    </li>
                    <li className="text-justify">
                        Orderan tidak memenuhi syarat untuk dibatalkan berdasarkan kualitas layanan / materi yang disampaikan oleh Partner jika layanan diberikan seperti yang dijelaskan dalam Halaman Gawean. Klien dapat menilai pengalaman mereka dengan Partner pada Halaman Orderan, termasuk keseluruhan tingkat kualitas layanan yang diterima.
                    </li>
                    <li className="text-justify">
                        Klien harus menggunakan Pusat Resolusi Harisenin.com untuk mengatasi masalah mereka dan resolusi yang diinginkan terkait dengan layanan yang diberikan oleh Partner mereka sebelum menghubungi Customer support. Customer support tidak akan mengambil tindakan apa pun terhadap Orderan dimana Klien gagal memberi tahu Partner mereka tentang masalah yang terkait dengan layanan Partner dan akan mengizinkan Partner untuk memberikan resolusi terlebih dahulu.
                    </li>
                    <li className="text-justify">
                        Penggunaan Harisenin.com yang tidak diizinkan yang ditemukan selama Orderan, setelah ditinjau oleh tim Customer support kami, dapat mengakibatkan Orderan dibatalkan. Ini termasuk, tetapi tidak terbatas pada; pelecehan, perilaku yang melanggar hukum, atau pelanggaran lain terhadap Ketentuan Layanan Harisenin.com.
                    </li>
                    <li className="text-justify">
                        <i>Customer support</i> Harisenin.com akan membatalkan Orderan berdasarkan, tetapi tidak terbatas pada, alasan berikut:
                        <ol type="a">
                            <li className="text-justify">
                                Orderan Aktif (setelah Klien mengisi detail orderan dan sebelum Partner memberikan pada Harisenin.com)
                                <ul className="dashed">
                                    <li className="text-justify">
                                        Partner terlambat dan tidak responsif selama lebih dari 24 jam sementara Orderan ditandai sebagai Terlambat.
                                    </li>
                                    <li className="text-justify">
                                        Pengguna kasar terhadap pihak lain melalui ancaman penilaian rendah.
                                    </li>
                                    <li className="text-justify">
                                        Pengguna menyediakan atau menyertakan materi pelanggaran hak cipta / merek dagang sebagai bagian dari persyaratan Klien atau pengiriman Partner.
                                    </li>
                                    <li className="text-justify">
                                        Pengguna tidak lagi menjadi pengguna Harisenin.com yang aktif karena pelanggaran Ketentuan Layanan atau penutupan akun mereka.
                                    </li>
                                </ul>
                            </li>
                            <li className="text-justify">
                                Orderan Terkirim (setelah Partner mengklik Kirim Sekarang dan sebelum Orderan ditandai selesai)
                                <ul className="dashed">
                                    <li className="text-justify">
                                        Partner menggunakan sistem Pengiriman untuk memperpanjang tanggal jatuh tempo pengiriman untuk menyelesaikan layanan yang diminta tanpa memberikan layanan akhir yang disampaikan kepada Klien. Catatan: Beberapa pelanggaran yang dilaporkan akan mengakibatkan penangguhan permanen akun Anda.
                                    </li>
                                    <li className="text-justify">
                                        Partner tidak memberikan file dan / atau bukti pekerjaan terkait dengan persyaratan Orderan yang disepakati. Catatan: Subjektivitas materi yang dimaksud akan ditinjau oleh tim Customer support kami.
                                    </li>
                                    <li className="text-justify">
                                        Partner meminta pembayaran tambahan, di dalam atau di luar platform Harisenin.com, dengan menahan pengiriman akhir layanan yang terkait langsung dengan persyaratan yang disepakati.
                                    </li>
                                    <li className="text-justify">
                                        Partner menahan pengiriman akhir layanan untuk peringkat yang ditingkatkan.
                                    </li>
                                    <li className="text-justify">
                                        Klien yang menyalahgunakan tombol Revisi Permintaan untuk mendapatkan lebih banyak layanan dari Partner di luar persyaratan yang disepakati.
                                    </li>
                                    <li className="text-justify">
                                        Klien yang mengancam untuk meninggalkan ulasan yang merusak untuk mendapatkan lebih banyak layanan dari Partner tidak terkait dengan persyaratan yang disepakati.
                                    </li>
                                </ul>
                            </li>
                            <li className="text-justify">
                                Orderan yang Selesai (setelah Orderan ditandai sebagai selesai dan sebelum batasan 14 hari)
                                <ul className="dashed">
                                    <li className="text-justify">
                                        Pengguna yang telah dilaporkan menggunakan materi pelanggaran hak cipta / merek dagang setelah verifikasi dan dengan bukti.
                                    </li>
                                    <li className="text-justify">
                                        Klien yang tidak membeli hak penggunaan komersial dan dilaporkan telah menggunakan materi secara komersial. Catatan: Ketentuan Penggunaan Komersial ditemukan pada Halaman Gawean Partner dan tidak dapat dimasukkan secara surut setelah Orderan selesai selama lebih dari 14 hari.
                                    </li>
                                    <li className="text-justify">
                                        <i>Customer</i> support Harisenin.com akan meninjau kasus-kasus manipulasi pengiriman Orderan yang mencegah Klien dan Partner memanfaatkan sepenuhnya Pusat Resolusi kami yang memungkinkan Orderan ditandai sebagai selesai.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        )
    }
}

class SaldoRefund extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: '20px' }}><strong>Saldo Refund</strong></p>
                <ol>
                    <li className="text-justify">
                        Saldo Refund berasal dari pengembalian dana transaksi (refund) orderan Klien di Situs harisenin.com dan tidak bisa dilakukan penambahan secara sendiri (top up).
                    </li>
                    <li className="text-justify">
                        Saldo Refund dapat digunakan sebagai salah satu metode pembayaran atas transaksi Klien di Situs harisenin.com, dan dapat dilakukan penarikan dana (withdrawal) ke rekening bank yang terdaftar pada akun Pengguna.
                    </li>
                    <li className="text-justify">
                        Jumlah total terkait dengan Orderan yang dibatalkan akan dikembalikan ke rekening bank Klien.
                    </li>
                </ol>
            </div>
        )
    }
}

class PraktikPengguna extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: '20px' }}><strong>
                    Praktik Pengguna</strong></p>
                <ol>
                    <li className="text-justify">
                        Harisenin.com adalah saluran yang memungkinkan pengguna untuk membuat, berbagi, menjual, dan membeli layanan atau pekerjaan dengan melakukan pembayaran dalam jumlah tertentu yang ditetapkan untuk layanan atau pekerjaan tersebut. Layanan atau pekerjaan di Harisenin.com menunjukkan keragaman dan permintaan pasar yang menggunakan saluran ini untuk jual beli.
                        </li>
                    <li className="text-justify">
                        Harisenin.com ingin membangun lingkungan yang ramah dan professional. Harisenin.com menganjurkan semua pengguna untuk bertindak sesuai dengan pedoman di bawah ini.
                        </li>
                </ol>
            </div>
        )
    }
}

class Umum extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: '20px' }}><strong>
                    Umum</strong></p>
                <ol>
                    <li className="text-justify">
                        Untuk melindungi privasi pengguna, informasi identitas pengguna akan dirahasiakan.
                        </li>
                    <li className="text-justify">
                        Pengguna tidak dapat menyajikan informasi pribadi seperti email, nomor telepon, atau nama akun apapun (Line / Whatsapp / WeChat) untuk berkomunikasi dan ini akan dianggap sebagai pelanggaran syarat dan ketentuan.
                        </li>
                    <li className="text-justify">
                        Pengguna tidak dapat meminta informasi pribadi dari pengguna lain seperti email, nomor telepon, atau nama akun apapun (Line / Whatsapp / WeChat) untuk berkomunikasi dan ini akan dianggap sebagai pelanggaran syarat dan ketentuan.
                        </li>
                    <li className="text-justify">
                        Permintaan informasi tambahan atau negosiasi dapat dilakukan melalui saluran komunikasi/ chat yang sudah disediakan oleh sistem.
                        </li>
                    <li className="text-justify">
                        Harisenin.com tidak melindungi pengguna yang bertindak di luar sistem atau yang melanggar syarat dan ketentuan.
                        </li>
                    <li className="text-justify">
                        Pengguna hanya diperbolehkan untuk bertukar semua informasi melalui sistem Harisenin.com saja kecuali setelah pembayaran telah dilakukan ke sistem atau sudah diijinkan secara tertulis oleh Harisenin.com.
                        </li>
                    <li className="text-justify">
                        Pengguna perlu menggunakan cara berkomunikasi yang pantas dan tidak melanggar hak orang lain. Komunikasi yang dianggap melanggar dapat berakibat kepada penangguhan akun.
                        </li>
                </ol>
            </div>
        )
    }
}


class MenginformasikanPelanggaran extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: '20px' }}><strong>
                    Menginformasikan pelanggaran</strong></p>
                <ol>
                    <li className="text-justify">
                        Jika sistem menemukan tindakan yang tidak sesuai atau mendapat informasi dari pengguna lain mengenai pelanggaran suatu akun, Harisenin.com akan menginformasikan akun yang dilaporkan melalui email atau situs saat pengguna masuk ke akun.
                        </li>
                    <li className="text-justify">
                        Harisenin.com memiliki hak penuh untuk menyelidiki dan memutuskan apakah suatu akun melakukan pelanggaran.
                        </li>
                </ol>
            </div>
        )
    }
}

class PenggunaanTidakSemestinya extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: '20px' }}><strong>
                    Penggunaan yang tidak semestinya </strong></p>
                <ol>
                    <li className="text-justify">
                        Pekerjaan atau layanan berhubungan dengan pornografi - Harisenin.com tidak mengizinkan untuk membeli atau menjual layanan apapun yang terkait dengan pornografi.
                    </li>
                    <li className="text-justify">
                        Tindakan yang tidak tepat dan penggunaan kata-kata yang tidak tepat - Pengguna harus saling menghormati satu sama lain. Harisenin.com akan mengambil tindakan tegas terhadap pengguna yang menggertak atau menghina orang lain atau menggunakan kata-kata yang tidak pantas.
                    </li>
                    <li className="text-justify">
                        Phishing dan Spamming - Harisenin.com mengutamakan keamanan pengguna terlebih dahulu. Pengguna tidak boleh bertindak dengan usaha untuk masuk ke akun orang lain melalui Harisenin.com. Semua pengguna harus menghormati pengguna lain dengan tidak menghubungi untuk maksud komersial jika pengguna tidak menginginkannya.
                    </li>
                    <li className="text-justify">
                        Privasi dan identifikasi diri - Pengguna tidak dapat mengungkapkan informasi pribadi pengguna lain. Pertukaran informasi pribadi hanya bisa terjadi melalui situs. Dalam hal ini, Klien dan Partner mengkonfirmasi dan menerima untuk menggunakan informasi dari pihak lain hanya untuk kepentingan pekerjaan melalui Harisenin.com.
                    </li>
                    <li className="text-justify">
                        Pelanggaran hak atau kekayaan intelektual - Harisenin.com tidak bertanggung jawab atas tindakan yang menyebabkan pelanggaran hak atau kekayaan intelektual. Harisenin.com menganggap bahwa tindakan tersebut adalah tanggung jawab pengguna sendiri dan pengguna menerima akibat dari tindakan tersebut. Harisenin.com tidak mendukung pelanggaran hak atau kekayaan intelektual dalam bentuk hal apa pun. Akun pengguna yang melanggar hak atau kekayaan intelektual pada Harisenin.com akan ditangguhkan/ diban.
                    </li>
                    <li className="text-justify">
                        Penipuan atau penggunaan sistem secara ilegal - Pengguna tidak dapat menggunakan sistem Harisenin.com untuk tindakan yang ilegal.
                    </li>
                    <li className="text-justify">
                        Menggunakan sistem secara tidak tepat dan spamming.
                    </li>
                    <li className="text-justify">
                        Membuat lebih dari satu akun - Untuk melawan kecurangan dan menggunakan sistem secara tidak tepat, pengguna hanya dapat membuat satu akun di Harisenin.com. Membuat lebih dari satu akun dapat menyebabkan semua akun Anda ditangguhkan/ diban.
                    </li>
                    <li className="text-justify">
                        Melanggar hak-hak orang lain - Harisenin.com tidak akan mentolerir pengguna yang melanggar hak pengguna lain dengan bertindak tidak pantas termasuk menghina atau melecehkan dan membuat lebih dari satu akun untuk tindakan tersebut.
                    </li>
                    <li className="text-justify">
                        Menjual akun pengguna - Akun harisenin.com tidak dapat ditransaksikan.
                    </li>
                </ol>
            </div>
        )
    }
}

class KetentuanUmum extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: '20px' }}><strong>
                    Ketentuan Umum</strong></p>
                <ol>
                    <li className="text-justify">
                        Harisenin.com berhak menangguhkan akun secara sementara atau permanen jika Harisenin.com menemukan bahwa akun tersebut melanggar syarat dan ketentuan atau melakukan penggunaan yang tidak semestinya pada sistem Harisenin.com.
                        </li>
                    <li className="text-justify">
                        Akun yang ditangguhkan tidak dapat melakukan transaksi apa pun pada sistem Harisenin.com.
                        </li>
                    <li className="text-justify">
                        Pemilik akun yang ditangguhkan dapat menghubungi Layanan Konsumen untuk menanyakan informasi dan status akun tersebut.
                        </li>
                    <li className="text-justify">
                        Jika Harisenin.com menyelidiki kepemilikan akun Harisenin.com pengguna, pengguna harus menunjukkan kepemilikan akun dengan menyajikan referensi seperti KTP, buku bank, paspor, atau dokumen hukum yang dapat mengidentifikasi dirinya sendiri.
                        </li>
                    <li className="text-justify">
                        Pemilik akun yang ditangguhkan tidak dapat lagi melakukan penarikan dana.
                        </li>
                </ol>
            </div>
        )
    }
}

class KontenDibuatPengguna extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: '20px' }}>
                    <strong>
                        Konten yang dibuat oleh pengguna
                    </strong>
                </p>
                <ol>
                    <li className="text-justify">
                        Konten yang dibuat pengguna (User Generated Content atau "UGC") adalah konten yang dibuat oleh pengguna manapun pada sistem yang tidak dihasilkan oleh situs Harisenin.com.
                    </li>
                    <li className="text-justify">
                        Semua informasi yang diunggah dari pengguna di Harisenin.com baik oleh Partner maupun Klien dianggap sebagai konten yang dihasilkan oleh pengguna. Harisenin.com tidak harus menyelidiki informasi untuk kesesuaiannya atau pelanggaran hak-hak orang lain. Harisenin.com menyarankan pengguna untuk memberi tahu Layanan Konsumen apabila ada penggunaan konten yang melanggar. Tim Harisenin.com akan menyelidiki informasi tersebut dengan menyertakan referensi tambahan dari pengguna untuk menghapus atau menangguhkan informasi yang dilaporkan.
                    </li>
                    <li className="text-justify">
                        Harisenin.com tidak bertanggung jawab atas kualitas pekerjaan atau layanan yang diberikan oleh Partner kepada Klien dan Harisenin.com tidak menjamin pekerjaan akan diselesaikan pada tanggal jatuh tempo.
                    </li>
                    <li className="text-justify">
                        Dengan mengirimkan hasil kerja final, Partner mengkonfirmasi semua hak untuk menggunakan konten apa pun dalam hasil kerja tersebut. Pelanggaran hukum atau kontrak pihak manapun dapat menyebabkan penangguhan/ ban akun.
                    </li>
                </ol>
            </div>
        )
    }
}

class KepemilikanPembatasan extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: '20px' }}>
                    <strong>
                        Kepemilikan dan Pembatasan Penggunaan Hasil Kerja
                    </strong>
                </p>
                <ol>
                    <li className="text-justify">
                        Jika Partner tidak menyebutkan tentang pembatasan penggunaan karya atau layanan yang diajukan, Klien memegang kepemilikan penuh termasuk memiliki hak cipta dan hak atas kekayaan intelektual atas karya tersebut. Klien dianggap sebagai pemilik pekerjaan jika dia telah melakukan pembayaran untuk pekerjaan tersebut. Jika ada pembatalan Orderan sebelum diajukan, hak atas pekerjaan itu masih milik Partner kecuali jika Partner menyebutkan bahwa Klien dapat menggunakan konten tersebut meski Orderannya telah dibatalkan.
                    </li>
                    <li className="text-justify">
                        Selain itu, semua komunikasi antara Partner dan Klien dianggap sebagai konten pribadi yang tidak dapat diungkapkan oleh kedua pihak tanpa izin.
                    </li>
                    <li className="text-justify">
                        Pengguna menerima bahwa Harisenin.com berhak menggunakan konten yang diunggah pada Harisenin.com seperti pesan, foto, video, nama akun, atau data apa pun termasuk hasil kerja untuk iklan atau pemasaran Harisenin.com. Harisenin.com tidak perlu meminta izin dari pengguna.
                    </li>
                </ol>
            </div>
        )
    }
}
class GantiRugi extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: '20px' }}>
                    <strong>
                        Ganti Rugi
                    </strong>
                </p>
                <ol>
                    <li className="text-justify">
                        Penggunaan situs Harisenin.com, informasi dan perkerjaan atau layanan apa pun yang tersedia di situs Harisenin.com adalah tanggung jawab pengguna sendiri. Situs Harisenin.com, semua data situs, layanan, atau produk apa pun yang Anda terima dari website Harisenin.com didasarkan kepada kondisi keandalan ("apa adanya") dan ketersediaan ("tersedia") tanpa jaminan apapun baik yang diungkapkan maupun tersirat. Harisenin.com atau orang yang terkait dengan Harisenin.com tidak bertanggung jawab atas kelengkapan, keamanan, keandalan, ketepatan, atau kesiapan website.
                    </li>
                    <li className="text-justify">
                        Harisenin.com, orang yang terkait atau pemberi lisensi, karyawan, perwakilan, staf, atau anggota dewan Harisenin.com menolak tanggung jawab apapun dalam kasus kerusakan yang berasal dari atau terkait dengan penggunaan situs atau layanan atau produk lain yang diterima pengguna dari situs. Ini mencakup segala kerusakan secara langsung maupun tidak langsung, khususnya kelalaian yang merupakan dampak dari pelanggaran kontrak. Kerusakan dapat mengacu pada cedera pribadi, sakit hati, penderitaan, sakit jiwa, kehilangan pendapatan, kehilangan margin, kehilangan peluang bisnis atau margin yang diharapkan, kerusakan pada tubuh, harta benda, reputasi, hingga data, atau kasus hokum baik yang bahkan diharapkan atau tidak.
                    </li>
                    <li className="text-justify">
                        Informasi di atas tidak dapat dipengaruhi jaminan lain apapun dan tidak dapat ditolak atau dibatasi sesuai undang-undang.
                    </li>
                </ol>
            </div>
        )
    }
}

class Pembaharuan extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: '20px' }}>
                    <strong>
                        Pembaharuan
                    </strong>
                </p>
                <p className="text-justify mb-5">Syarat &amp; ketentuan mungkin diubah dan/atau diperbaharui dari waktu ke waktu tanpa pemberitahuan sebelumnya. Harisenin.com menyarankan agar anda membaca secara seksama dan memeriksa halaman Syarat &amp; ketentuan ini dari waktu ke waktu untuk mengetahui perubahan apapun. Dengan tetap mengakses dan menggunakan layanan Harisenin.com, maka pengguna dianggap menyetujui perubahan-perubahan dalam Syarat &amp; Ketentuan.</p>
            </div>
        )
    }
}

