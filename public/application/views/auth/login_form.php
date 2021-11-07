<div class="col-md-3"></div>
<div class="col-md-6">
<form

	action="<?php echo base_url();?>auth/login" 
class="text-center"
	method="post" 
	accept-charset="utf-8"
	style="  max-width: 400px;
    margin: auto;"
>		
	<br>
	<br>
    <h2 class="form-signin-heading">Admin Login</h2>

		<br>
		<br>
		<?php $email = '';
            $password = '';
        ?>

		<div class="form-group">
			<label for="email" class="sr-only">Email</label>
			<input title="email" class="form-control" type="text" name="login" placeholder="Email" id="Email" maxlength="80" value="<?php echo $email; ?>" required>
		</div>

		<div class="form-group">
			<label for="inputPassword" class="sr-only">Password</label>
			<input type="password" id="password" name="password" class="form-control" placeholder="Password" required value="<?php echo $password; ?>">
		</div>

		<div class="form-group">
			<input class="btn btn-lg btn-primary btn-block" id="log-in-button" type="submit" name="submit" value="Log In" >
		</div>


		<!-- <?php echo anchor('/auth/forgot_password/', 'Forgot Password?'); ?> -->

		<!-- <?php if(show_registration_link()) {
		 	echo anchor('/auth/register', "Don't have an account? Sign-up with us!"); 
		} ?> -->

</form>
</div>
<div class="col-md-3"></div>
<!-- Google Code for Arrived sign-up page Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 980305060;
var google_conversion_language = "en";
var google_conversion_format = "3";
var google_conversion_color = "ffffff";
var google_conversion_label = "1HKsCPzqpQoQpIm50wM";
var google_remarketing_only = false;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/980305060/?label=1HKsCPzqpQoQpIm50wM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>


