<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Root extends CI_Controller {

	/**
	 * Root Controller
	 *
	 * Created on 2015. 12. 31.
	 * @author byyeong(violet8372@gmail.com)
	 * @version 1.0
	 */
	
	public function __construct() {
        parent::__construct();
    }

	public function index()
	{
		$this->load->view('root/index');
	}
}
