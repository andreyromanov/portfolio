<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-6 py-3">
					<h4 v-text="$ml.get('tools')"></h4>
					<span class="badge badge-success mr-3">Php</span>
					<span class="badge badge-success mr-3">Laravel</span>
        			<span class="badge badge-success mr-3">Html</span>
        			<span class="badge badge-success mr-3">Css</span>
        			<span class="badge badge-primary mr-3">JavaScript</span>
        			<span class="badge badge-primary mr-3">MySQL</span>
        			<span class="badge badge-primary mr-3">Jquery</span>
        			<span class="badge badge-primary mr-3">Bootstrap</span>
        			<span class="badge badge-primary mr-3">Git</span>
				</div>
				<div class="col-md-6 py-3">
					<h4 v-text="$ml.get('description')"></h4>
					<p class="text-left">
					ChineseLogic is an online studying platform. It is developed with Laravel framework, Javascript, Bootstrap and MySql. It has dashboards for students, teachers and admins.
					This app includes variety of functions:
					<ul>
						<li>Booking lessons</li>
						<li>Paid content (books, videos)</li>
						<li>Telegram notifications</li>
						<li>Budjet monitoring</li>
						<li>CMS</li>
					</ul>
					</p>
				</div>
				<div v-lazy-container="{ selector: 'img' }" class="col-md-6">
				<img
	              data-src="/projects/mebtex/pmt1.jpg"
	              class="rounded mb-3 d-block proj-img"
	              alt="Me"
	            />
	        	</div>
   				<div v-lazy-container="{ selector: 'img' }" class="col-md-6">
	            <img
	              data-src="/projects/mebtex/pmt2.jpg"
	              class="rounded mb-5 d-block proj-img"
	              alt="Me"
	            />
				</div>
			</div>
		</div>
	</div>
</template>
