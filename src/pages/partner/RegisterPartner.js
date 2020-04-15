import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fetch from 'isomorphic-unfetch';
import Select from 'react-select';

import Head from '../../components/Head';
import Header from '../../components/header/Header';
import Footer from '../../components/header/Footer';
import { ModalPersonalInfo } from '../../components/modal/ModalPersonalInfo';
import { jobOption } from '../../components/dummy-data/JobsOption';
import { years, skillLevel } from '../../components/dummy-data/nav';

export default class RegisterPartner extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      file: '',
      imagePreviewurl: '',
      subCategory: false, //
      addStatus: 0, //
      firstStatusShow: false, //untuk status awal button cancel tidak ditampilkan
      formStatus: true,
      className: 'mx-auto my-5',
      skillName: '',
      skillLvl: '',
      nation: [
        {
          value: 1,
          label: 'Indonesia'
        }
      ],
      openSkillTable: true,
      skillTable: [],
      tableEdit: {},
      editId: -1,
      data: [],
      dataKota: [],
      personalInfo: {
        title: '',
        phoneNumber: '',
        description: ''
      },
      idProvinsi: 0
    };
  }

  getProvinsi() {
    fetch('http://dev.farizdotid.com/api/daerahindonesia/provinsi')
      .then(r => r.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }

  getKota = id => {
    let idProvinsi = id;
    fetch(
      `http://dev.farizdotid.com/api/daerahindonesia/provinsi/${idProvinsi}/kabupaten`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          dataKota: data
        });
      })
      .catch(err => console.log(err));
  };

  // contoh handle change
  handleFromInput = e => {
    let newPersonalInfo = { ...this.state.personalInfo };
    newPersonalInfo[e.target.name] = e.target.value;

    this.setState({
      personalInfo: newPersonalInfo
    });
    console.log(newPersonalInfo.fullname);
  };

  handlePreview = event => {
    event.preventDefault();
    var reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewurl: reader.result,
        className: 'mx-auto my-5 d-none'
      });
      console.log(file);
    };

    reader.readAsDataURL(file);
  };
  handlechangeJob = id => () => {
    this.setState({
      subCategory: true,
      id: 9
    });
  };
  handleSkill = e => {
    this.setState({
      skillName: e.target.value
    });
  };

  handleChangeKota = selectedOption => {
    this.setState({ selectedOption });
    console.log(selectedOption.value);
    this.getKota(selectedOption.value);
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.getProvinsi();
  };

  handleSkillLvl = selectedOption => {
    this.setState({ skillLvl: selectedOption.value });
  };

  onSubmitHandle = () => {
    if (this.state.skillLvl === '' || this.state.skillName === '') {
      alert('All field required');
    } else {
      this.setState({
        skillTable: [
          ...this.state.skillTable,
          {
            skillName: this.state.skillName,
            skillLvl: this.state.skillLvl,
            id: new Date()
          }
        ]
      });

      this.setState({
        skillName: '',
        addStatus: 1
      });
    }
  };

  handleDelete = id => {
    this.setState({
      skillTable: this.state.skillTable.filter(item => item.id !== id)
    });
  };

  handleGetEdit = item => {
    const id = this.state.skillTable.indexOf(item);
    this.setState({
      skillName: item.skillName,
      skillLvl: item.skillLvl
    });

    const arr = {
      id: item.id,
      skillName: item.skillName,
      skillLvl: item.skillLvl
    };

    this.setState({ tableEdit: arr, editId: id });
  };

  handleEdit = () => {
    const id = this.state.editId;
    const arr = {
      id: this.state.tableEdit.id,
      skillName: this.state.skillName,
      skillLvl: this.state.skillLvl
    };
    this.state.skillTable.splice(id, 1, arr);

    this.setState({
      // skillName: "",
      editId: -1
    });
  };

  render() {
    let { imagePreviewurl } = this.state;
    let $imagePreview = null;
    if (imagePreviewurl) {
      $imagePreview = (
        <img
          className="mw-100 mh-100 img-preview"
          src={imagePreviewurl}
          alt=""
        />
      );
    }

    let data = this.state.data;
    let prov = data.semuaprovinsi;
    let dataKota = this.state.dataKota;
    let kota = dataKota.kabupatens;
    let jobList = jobOption.map(item => {
      return { value: item.id, label: item.jobName };
    });

    let options =
      prov &&
      prov.map(item => {
        return { value: item.id, label: item.nama };
      });

    let kotaList =
      kota &&
      kota.map(item => {
        return { value: item.id, label: item.nama };
      });

    console.log(this.state.tableEdit, 'initable');
    console.log(this.state.skillName);
    console.log(this.state.skillLvl);

    // add skill component
    const addSkill = (
      <div style={{ width: '66%', display: 'contents' }}>
        <Col xs={12} md={3} className="px-md-2 mb-2 mb-md-0">
          <input
            type="text"
            onChange={this.handleSkill}
            name="keahlian"
            id="inputSkill"
            className="form-control w-100"
            placeholder="Tambah Keahlian"
            value={this.state.skillName}
            required
          />
        </Col>
        <Col xs={12} md={3} className="px-md-2 mb-2 mb-md-0">
          <Select
            placeholder="Tingkat keahlian"
            options={skillLevel}
            onChange={this.handleSkillLvl}
          />
        </Col>
        <Col xs={6} md={1}>
          {this.state.editId === -1 ? (
            <Button
              style={{ fontSize: '14px' }}
              className="btn btn-selesai btn-tambah"
              onClick={this.onSubmitHandle}
            >
              Tambah
            </Button>
          ) : (
              <Button
                style={{ fontSize: '14px' }}
                className="btn btn-selesai btn-tambah"
                onClick={this.handleEdit}
              >
                Edit
              </Button>
            )}
        </Col>
        <Col xs={6} md={1}>
          <Button
            style={{
              fontSize: '14px',
              display: this.state.skillTable.length === 0 ? 'none' : 'block'
            }}
            className="btn btn-tambah"
            variant="secondary"
            onClick={this.handleCancelSkill}
          >
            Batal
          </Button>
        </Col>
      </div>
    );

    // Skill table component
    const skillTableDisplay = (
      <div className="form-group row mt-2">
        <Col md={4}></Col>
        <Col xs={12} md={8} className="px-md-2">
          <table className="table table-bordered">
            <thead class="thead-light">
              <tr>
                <th scope="col">Keahlian</th>
                <th scope="col">Tingkat</th>
                <th scope="col">
                  <div>
                    <span>Aksi</span>
                  </div>
                </th>
              </tr>
            </thead>
            {this.state.skillTable.map(item => (
              <tbody>
                <tr>
                  <td>{item.skillName}</td>
                  <td>{item.skillLvl}</td>
                  <td>
                    <div style={{ cursor: 'pointer', hover: '#0dad8e' }}>
                      <FontAwesomeIcon
                        icon={['fas', 'pencil-alt']}
                        style={{ marginRight: '.5rem' }}
                        role="button"
                        onClick={() => this.handleGetEdit(item)}
                      />
                      <FontAwesomeIcon
                        icon={['far', 'trash-alt']}
                        role="button"
                        onClick={() => this.handleDelete(item.id)}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </Col>
      </div>
    );

    return (
      <div>
        <Head title="Persona Info" description="Description" />
        <Header />
        <Container className="c-personal-content p-4">
          <Row>
            <Col>
              <div className="c-personal-content-header mt-5">
                <h5 className="text-capitalize">info pribadi</h5>
                <p className="py-2">
                  Beritahu kami sedikit tentang dirimu. Informasi ini akan
                  muncul di profil publik Anda, sehingga calon pembeli dapat
                  mengenal Anda lebih baik.
                </p>
                <label
                  style={{
                    display: 'flex',
                    fontSize: '14px',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                  }}
                >
                  <i>* Harus diisi.</i>
                </label>
                <hr className="mb-0" />
              </div>
            </Col>
          </Row>
          {/* <Form> */}
          <div className="c-personal-content-form">
            <div className="form-group">
              {/* Name */}
              <div className="mb-4">
                <div className="form-group row mt-5">
                  <Col xs={12} md={4}>
                    <label htmlFor="inputNama" className="text-capitalize">
                      nama bisnis*
                    </label>
                  </Col>
                  <Col xs={12} md={4} className="px-md-2 mb-md-0">
                    <input
                      type="text"
                      onChange={this.handleFromInput}
                      name="fullname"
                      id="inputName"
                      className="form-control w-100"
                      placeholder="Nama Anda"
                    />
                  </Col>
                </div>

                {/* Email */}
                <div className="form-group row mt-5 ">
                  <Col xs={12} md={4}>
                    <label htmlFor="" className="text-capitalize">
                      Email
                    </label>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="mt-2 email-verification">
                      <p style={{ fontSize: '20px' }}>
                        harisenin@gmail.com
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="icon-verification"
                        />{' '}
                        <span>Terverifikasi</span>
                      </p>
                    </div>
                  </Col>
                </div>

                {/* Telephone number */}
                <div className="form-group row mt-5">
                  <Col xs={12} md={4}>
                    <label htmlFor="inputPhone" className="text-capitalize">
                      Nomor Telepon*
                    </label>
                  </Col>
                  <Col xs={12} md={4}>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="inputPhone"
                      onChange={this.handleFromInput}
                      className="form-control w-100"
                      placeholder="Nomor Telepon Anda"
                    />
                    <small>
                      Pastikan nomor yang anda masukan sudah benar demi
                      kelancaran proses validasi.
                    </small>
                  </Col>
                </div>

                {/* Photo profile */}

                <div className="form-group row mt-5">
                  <Col md={4} xs={12}>
                    <label htmlFor="inputGambar">Foto Profil*</label>
                  </Col>
                  <Col xs={12} md={8} className="px-md-2">
                    <div className="gallery_upload align-items-center d-flex ml-0">
                      <input
                        onChange={this.handlePreview}
                        type="file"
                        id="inputGambar"
                        name="img2"
                        accept="image/*"
                      />
                      {$imagePreview}
                      {/* <img src='https://harisenin-storage.s3.ap-southeast-1.amazonaws.com/Koala.jpg' alt='test-pict' /> */}
                      <FontAwesomeIcon
                        icon={['fas', 'camera']}
                        className={this.state.className}
                        style={{ fontSize: '3rem' }}
                      />
                    </div>
                  </Col>
                </div>

                {/* Description */}

                <div className="form-group row mt-5">
                  <Col xs={12} md={4}>
                    <label htmlFor="inputDeskripsi">Deskripsi*</label>
                  </Col>
                  <Col xs={12} md={8} className="px-md-2">
                    <textarea
                      name="description"
                      id="inputDeskripsi"
                      onChange={this.getProvinsi}
                      placeholder="Deskripsikan diri anda mengenai proyek yang telah Anda selesaikan dan keahlian Anda"
                      rows="6"
                      className="form-control w-100 "
                    ></textarea>
                    <div>
                      <span>Minimal 150 Karakter</span>
                      <span style={{ float: 'right' }}>0/600</span>
                    </div>
                  </Col>
                </div>

                {/* Domicile */}

                <div className="form-group row mt-5">
                  <Col xs={12} md={4}>
                    <label htmlFor="inputDomisili">Domisili*</label>
                  </Col>
                  <Col xs={12} md={2} className="px-md-2">
                    <Select
                      placeholder="Pilih Negara"
                      options={this.state.nation}
                      onChange={this.handleChange}
                      className="select-domicile"
                    />
                  </Col>
                  <Col xs={12} md={3} className="px-md-2">
                    <Select
                      placeholder="Pilih Provinsi"
                      options={options}
                      onChange={this.handleChangeKota}
                      className="select-domicile"
                    />
                  </Col>
                  <Col xs={12} md={3} className="px-md-2">
                    <Select
                      placeholder="Pilih Kota"
                      options={kotaList}
                      className="select-domicile"
                    />
                  </Col>
                </div>

                {/* Jobs */}

                <div className="form-group row mt-5 work__row-form">
                  <Col xs={12} md={4}>
                    <label htmlFor="inputPekerjaan">Pekerjaan Anda</label>
                  </Col>
                  <Col className="px-md-2 mb-2 mb-md-0 work-options">
                    <Select
                      placeholder="Pilih pekerjaan anda"
                      options={jobList}
                      onChange={this.handlechangeJob(8)}
                    />
                  </Col>
                  <Col className="d-flex year-label">
                    <small className="text-small">Dari</small>
                  </Col>
                  <Col className="d-flex year-option">
                    <Select
                      placeholder="1970"
                      options={years}
                      className="w-100"
                    />
                  </Col>
                  <Col className="d-flex year-label">
                    <small className="text-small">Sampai</small>
                  </Col>
                  <Col className="d-flex year-option">
                    <Select
                      placeholder="1970"
                      options={years}
                      className="w-100"
                    />
                  </Col>
                </div>

                {/*  Work Skill (appeared when work option is selected)*/}

                {this.state.subCategory ? (
                  <div className="form-group row mt-3">
                    <Col md={4}></Col>
                    <Col xs={12} md={8}>
                      <p style={{ fontSize: '14px' }}>
                        Pilih dua hingga lima keterampilan terbaik Anda di
                      </p>
                      <Row>
                        <Col
                          md={4}
                          className="custom-control custom-checkbox mb-3"
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                            name="example1"
                          />
                          <label
                            style={{ fontSize: '14px' }}
                            class="custom-control-label"
                            for="customCheck"
                          >
                            Custom checkbox
                          </label>
                        </Col>
                        <Col
                          md={4}
                          className="custom-control custom-checkbox mb-3"
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                            name="example1"
                          />
                          <label
                            style={{ fontSize: '14px' }}
                            class="custom-control-label"
                            for="customCheck1"
                          >
                            Custom checkbox
                          </label>
                        </Col>
                        <Col
                          md={4}
                          className="custom-control custom-checkbox mb-3"
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck2"
                            name="example1"
                          />
                          <label
                            style={{ fontSize: '14px' }}
                            class="custom-control-label"
                            for="customCheck2"
                          >
                            Custom checkbox
                          </label>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                ) : null}

                {/* Skill */}

                <div className="form-group row mt-5">
                  <Col xs={12} md={4}>
                    <label htmlFor="inputSkill">Keahlian*</label>
                  </Col>
                  {addSkill}
                </div>
                {this.state.skillTable.length === 0 ? null : skillTableDisplay}
                <div className="form-group row mt-5">
                  <Col xs={12} md={4}>
                    <label htmlFor="inputLinkedin">Linkedin*</label>
                  </Col>
                  <Col xs={12} md={2} className="px-md-2">
                    <Button className="btn btn-aktif d-flex mt-2">
                      <FontAwesomeIcon
                        icon={['fab', 'linkedin']}
                        style={{ fontSize: '28px', marginTop: '-5px' }}
                      />
                      <span style={{ fontSize: '.9rem', marginLeft: '1rem' }}>
                        Sambungkan
                      </span>
                    </Button>
                  </Col>
                </div>
              </div>
              <div>
                <Col md={12}>
                  <hr className="mb-0" />
                </Col>
              </div>
            </div>
          </div>
          {/* </Form> */}
          <div className="content-footer pb-3">
            <Row className="mb-5">
              <Col md={12}>
                <ModalPersonalInfo />
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}
