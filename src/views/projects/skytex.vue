<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-6 py-3">
					<h4>Used tools</h4>
					<span class="badge badge-success mr-3">Wordpress</span>
        			<span class="badge badge-success mr-3">Html</span>
        			<span class="badge badge-success mr-3">Css</span>
        			<span class="badge badge-primary mr-3">Php</span>
        			<span class="badge badge-primary mr-3">Adobe Photoshop</span>
				</div>
				<div class="col-md-6 py-3">
					<h4>Description</h4>
					<p class="text-left">
					Skytex is a curtain delivery company. A website was developed using CMS Wordpress. During the work, some files were modified using php, html and css. Developed home page and contact page. Also in the course of work, Adobe Photoshop was used to process photos of goods.
					</p>
				</div>
				<div v-lazy-container="{ selector: 'img' }" class="col-md-6">
				<img
	              data-src="/projects/skytex/pst1.jpg"
	              class="rounded mb-3 d-block proj-img"
	              alt="Me"
	            />
	        	</div>
	        	<div v-lazy-container="{ selector: 'img' }" class="col-md-6">
	            <img
	              data-src="/projects/skytex/pst2.jpg"
	              class="rounded mb-5 d-block proj-img"
	              alt="Me"
	            />
				</div>
			</div>
		</div>
	</div>
</template>
