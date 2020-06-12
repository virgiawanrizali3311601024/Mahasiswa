<?php
defined('BASEPATH') OR exit('No direct script access allowed');
var $API ="";

class Mahasiswa extends CI_Controller {
    public function __construct(){
        
        parent ::__construct();

        $this->API="http://localhost/sources/models/datamahasiswa.php";
        
        $this->load->model('Model_mahasiswa');  

    }

    public function index()
    {
 
       $data = array(
            'data_mahasiswa' => $this->Model_mahasiswa->get_all(),

        );

        $this->load->view('index', $data);
    }
        public function tambah()
    {

        $this->load->view('Tambah_mahasiswa');
    }
    
    public function add_mahasiswa()
    {

        $max_id = $this->Model_mahasiswa->get_max_id(); 

    	$nim = $this->input->post('nim');
        $nama = $this->input->post('nama');
        $kelas = $this->input->post('kelas');
        $keterangan = $this->input->post('keterangan');
    	$data = array( 
		    'id_mahasiswa' => $max_id,
            'nim' => $nim,
            'nama' => $nama,
            'kelas' => $kelas,
		    'keterangan' => $keterangan
		);
		
        if($this->Model_mahasiswa->submit($data)){
            echo 'success';
        }else{
            echo 'fail';
        }
    }
    public function update()
    {
        $id_mahasiswa['id_mahasiswa'] = $this->input->post('id_mahasiswa');
        $data = array( 
            'id_mahasiswa' => $this->input->post('max_id'),
            'nim' => $this->input->post('nim'),
            'nama' => $this->input->post('nama'),
            'kelas' => $this->input->post('kelas'),
            'keterangan' => $this->input->post('keterangan'),
        );

        if($this->Model_mahasiswa->update($data, $id_mahasiswa)){
            echo 'success';
        }else{
            echo 'fail';
        }
    }
    public function hapus($id_mahasiswa)
    {
        $id_mahasiswa['id_mahasiswa'] = $this->uri->segment(3);
        
        if($this->Model_mahasiswa->hapus($id_mahasiswa)){
            echo 'success';
        }else{
            echo 'fail';
        }
 
    
    }
}