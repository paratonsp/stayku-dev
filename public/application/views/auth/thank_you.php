<br/><br/>

<center>

	<a href="<?php echo base_url();?>">
		<?php
                    $whitelabelinfo = $this->session->userdata('white_label_information');
                    if($whitelabelinfo)
                    {
                        echo '<img src="'.base_url().'/images/'.$whitelabelinfo['logo'].'">';
                    }
                    else
                    {
                        echo '<img src="'.base_url().'/images/'.$this->config->item('branding_logo').'">';
                    }
                 ?>
	</a>

	<h3 class="form-signin-heading">Thank you for signing-up with us</h3>
	
	<br />
		
	<h1>We sent you a confirmation email</h1>
	<br />
        <h3>Please check your inbox and activate your <?php if($whitelabelinfo){ echo ucfirst($whitelabelinfo['name']); }else{ echo 'Minical';} ?> account</h3>
	<h3>If you need any assistance, please contact us at support@minical.io</h3>
	<br/>
	<br/>
	<h3>
		<a href="https://www.minical.io">Return to <?php if($whitelabelinfo){ echo ucfirst($whitelabelinfo['name']); }else{ echo 'Minical';} ?> homepage</a>
	</h3>
</center>