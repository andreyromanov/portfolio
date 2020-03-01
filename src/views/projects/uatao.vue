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
        			<span class="badge badge-warning mr-3">Node.js</span>
        			<span class="badge badge-warning mr-3">Zend Framework</span>
				</div>
				<div class="col-md-6 py-3">
					<h4 v-text="$ml.get('description')"></h4>
					<p class="text-left">
					In the course of work on the project, I held the position of fullstack web developer. The working process includes variety of functions:
					<ul>
						<li>Supporting websites</li>
						<li>Developing browser extentions</li>
						<li>Laravel console commands</li>
						<li>Developing chat bots</li>
						<li>Supporting additional components of the company</li>
					</ul>
					</p>
				</div>
				<div v-lazy-container="{ selector: 'img' }" class="col-md-6">
				<img
	              data-src="/projects/uatao/put1.jpg"
	              class="rounded mb-3 d-block proj-img"
	              alt="Me"
	            />
	        	</div>
				<div v-lazy-container="{ selector: 'img' }" class="col-md-6">
	            <img
	              data-src="/projects/uatao/put2.jpg"
	              class="rounded mb-5 d-block proj-img"
	              alt="Me"
	            />
				</div>
			</div>
		</div>
	</div>
</template>
