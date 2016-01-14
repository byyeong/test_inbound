<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Registe extends CI_Controller {

	/**
	 * Registe Controller
	 *
	 * Created on 2015. 12. 31.
	 * @author byyeong(violet8372@gmail.com)
	 * @version 1.0
	 */
	public function __construct() {
        parent::__construct();
  
        $this->load->helper('url');
        $this->load->model('mvc_sample/blog_basic_model');
    }

	public function login()
	{
		$this->load->view('root/index');
	}

	public function identify()
	{

	}
}
