<?php 

class Properties extends MY_Controller
{
    public $module_name;
	function __construct()
    {
        parent::__construct();

        $this->module_name = $this->router->fetch_module();

        $this->load->model('../extensions/'.$this->module_name.'/models/Company_model');
        $this->load->model('../extensions/'.$this->module_name.'/models/User_model');               

        $this->load->library('form_validation');

        $view_data['menu_on']          = true;
        $this->load->vars($view_data);
        
    }

    function my_properties()
    {       
        $data['current_selected_property_id'] = $this->company_id;
        $data['properties'] = $this->Company_model->get_companies($this->user_id);
        
        $files = get_asstes_files($this->module_assets_files, $this->module_name, $this->controller_name, $this->function_name);
        
        $data['main_content'] = '../extensions/'.$this->module_name.'/views/my_properties';
        $this->template->load('bootstrapped_template', null , $data['main_content'], $data);
    }
}