<input name="create_new_booking" type="hidden" value="<?php echo $this->lang->line('create_new_booking'); ?>" /><div id="booking_list_wrap" class="col-sm-5 col-lg-4 hidden-xs"></div><div class="fc-header form-inline col-md-12">	<div class="form-group">		<div class="btn-group">			<button href="#" class="btn btn-success create-new-booking">				Create New Booking			</button>		</div>	</div>	<div class="form-group hidden-xs">		<div class="form-group" style="margin:10px;">			<div class="fc-header-title">				<div class="fc-header-title-custom form-group">					Show: 					<input class="form-control hasDatepicker" size="10">					to					<input class="form-control hasDatepicker" size="10">				</div>			</div>		</div>	</div>	<div class="form-group">		<div class="form-group" style="margin:10px;">			<td>				<div class="fc-button-prev fc-state-default btn btn-default fc-corner-left fc-no-right">					<a>						<span>&nbsp;◄&nbsp;</span>					</a>				</div>			</td>			<td>				<div class="fc-button-next fc-state-default btn btn-default fc-corner-right">					<a>						<span>&nbsp;►&nbsp;</span>					</a>				</div>			</td>		</div>	</div>	<!-- <form id="booking_search" method="GET" class="form-group hidden-xs" action="http://localhost/inngrid/public/booking/show_bookings/">		<div class="form-group">			<input class="form-control" name="search_query" type="text" value="">		</div>		<div class="form-group">			<input class="btn btn-default" type="submit" style="margin-left:10px;" value="Search Bookings">		</div>	</form> --></div>