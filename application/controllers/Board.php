<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Board extends CI_Controller {

	/**
	 * Board Controller
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

	public function index()
	{
		$this->load->view('board/index');
	}

	public function qna()
	{
		$this->load->view('board/qna');
	}

	public function direct()
	{
		$this->load->view('board/direct')
	}
}
