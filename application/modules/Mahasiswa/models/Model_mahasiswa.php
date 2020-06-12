<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Model_mahasiswa extends CI_Model {

	public function get_all()
	{
		$query = $this->db->select("*")
				 ->from('Kelas')
				 ->get();
		return $query->result();
	}

	public function get_max_id()
	{
		$query = $this->db->select("max(id_mahasiswa)")
				 ->from('Kelas')
				 ->get()->row();
		return $query->max+1;
	}

    public function submit($data)
    {	
   
		//$data1 = $this->db->query('Kelas', $data);
		//return $data1->last_querry();
		$query = $this->db->insert('Kelas', $data);

		if($query){
			return true;
		}else{
			return false;
		}
    }
    	public function update($data, $id_mahasiswa)
	{
		
		$query = $this->db->update("Kelas", $data, $id_mahasiswa);

		if($query){
			return true;
		}else{
			return false;
		}

	}
	public function hapus($id_mahasiswa)
	{
		
		$query = $this->db->delete("Kelas", $id_mahasiswa);

		if($query){
			return true;
		}else{
			return false;
		}

	}


    
}