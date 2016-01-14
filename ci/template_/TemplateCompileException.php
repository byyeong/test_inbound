<?php

class TemplateCompileException extends Exception
{
	var $_file, $_msg, $_line;
	function __construct($file, $msg, $line)
	{
		$this->_file = $file;
		$this->_msg = $msg;
		$this->_line = $line;
		
	}
	
	function getTemplateMessage()
	{
		return 'Template Compiler Exception: ' . $this->_msg . '|' . $this->_file . '|' . $this->_line;
	}
}
