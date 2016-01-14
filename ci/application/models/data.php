<?php  
defined('BASEPATH') OR exit('No direct script access allowed');

class Data_model extends CI_Model {

    /**
     * Data Model
     *
     * Created on 2015. 12. 31.
     * @author byyeong(violet8372@gmail.com)
     * @version 1.0
     */
    
    // protected $test;
      
    public function __construct() {
        parent::__construct();
          
        $this->load->database();
        // $this->tbl = 'blog_basic';
        // $this->pkey = 'blog_basic_id';  
    }
     
    public function blog_basic() {
        $len = 10;
         
        return $this->db->order_by('created', 'desc')->limit($len)->get($this->tbl)->result_array();
    }
     
    public function insert($data) {
        $this->db->set('created', 'now()', FALSE);
        $this->db->insert($this->tbl, $data);
         
        return $this->db->insert_id();
    }
}