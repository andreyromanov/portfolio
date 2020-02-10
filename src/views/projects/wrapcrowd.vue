<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-6 py-3">
					<h4 v-text="$ml.get('tools')"></h4>
					<span class="badge badge-success mr-3">Html</span>
        			<span class="badge badge-success mr-3">Css</span>
        			<span class="badge badge-success mr-3">JavaScript</span>
        			<span class="badge badge-success mr-3">Bootstrap</span>
        			<span class="badge badge-success mr-3">Jquery</span>
        			<span class="badge badge-primary mr-3">Git</span>
				</div>
				<div class="col-md-6 py-3">
					<h4 v-text="$ml.get('description')"></h4>
					<p class="text-left">
					In the course of work on the project, I held the position of frontend developer. Main task was to create webpages with adaptive design and optimize existing ones. Used technologies - HTML, CSS, JavaScript, Bootstrap and Jquery.
					</p>
				</div>
				<div v-lazy-container="{ selector: 'img' }" class="col-md-6">
				<img
	              data-src="/projects/wrapcrowd/pwc1.jpg"
	              class="rounded mb-3 d-block proj-img"
	              alt="Me"
	            />
	        	</div>
   				<div v-lazy-container="{ selector: 'img' }" class="col-md-6">
	            <img
	              data-src="/projects/wrapcrowd/pwc2.jpg"
	              class="rounded mb-5 d-block proj-img"
	              alt="Me"
	            />
				</div>
			</div>
		</div>
	</div>
</template>
