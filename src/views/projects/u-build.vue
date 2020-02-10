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
					The application for building company. It allows to manage the process of building (create task, order materials, hire workers). Also it provides economic and statistical analysis in order to help manager take right decisions. It is developed with Laravel framework, Bootstrap and MySql.
					</p>
				</div>
				<div v-lazy-container="{ selector: 'img' }" class="col-md-6">
				<img
	              data-src="/projects/ubuild/pub1.jpg"
	              class="rounded mb-3 d-block proj-img"
	              alt="Me"
	            />
	        	</div>
				<div v-lazy-container="{ selector: 'img' }" class="col-md-6">
	            <img
	              data-src="/projects/ubuild/pub2.jpg"
	              class="rounded mb-5 d-block proj-img"
	              alt="Me"
	            />
				</div>
			</div>
		</div>
	</div>		
</template>	