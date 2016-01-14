<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inbound extends CI_Controller {

	/**
	 * Inboud Controller
	 *
	 * Created on 2015. 12. 31.
	 * @author byyeong(violet8372@gmail.com)
	 * @version 1.0
	 */
	
	public function __construct() 
    {
        parent::__construct();
    }

    public function index()
    {

    }

	public function partner()
	{
		$this->load->view('layout/top');
        $this->load->view('inbound/partner');
        $this->load->view('layout/bottom');
	}

    public function partner_add()
    {
        $this->helpers('form_validation');
        
    }
}
