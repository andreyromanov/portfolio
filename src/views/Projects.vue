<template>
  <div class=" pt-4">
  	<transition appear name="fade">
    <div class="row">
    	<div class="col-md-4 col-xs-12 mb-3">
	    	<div class="card">
	    		<router-link to="/chineselogic">
	                  <a class="card-a">
	                    <div id="cl" class="card-body cards">
	                        <img
				              src="/cl-logo.png"
				              class="rounded mx-auto d-block"
				              alt="Me" style="width: 70%;"
				            />
	                    </div>
	                  </a>
	            </router-link>
            </div>
	    </div>
    	<div class="col-md-4 col-xs-12 mb-3">
    		<div class="card">
    			<router-link to="/uatao">
                  <a class="card-a">
                    <div id="ut" class="card-body cards">
                        <img
			              src="/uatao.png"
			              class="rounded mt-2 mx-auto d-block"
			              alt="Me" style="width: 70%;"
			            />
                    </div>
                  </a>
                </router-link>
            </div>
        </div>
         <div class="col-md-4 col-xs-12 mb-3">
	    	<div class="card">
	    		<router-link to="/u-build">
	                  <a class="card-a">
	                    <div id="ub" class="card-body cards">
	                        <h2 class="card-title mt-5">U-build</h2>
	                    </div>
	                  </a>
	            </router-link>
            </div>
	    </div>
	    <div class="col-md-4 col-xs-12 mb-3">
	    	<div class="card">
	    		<router-link to="/app-starter">
	                  <a class="card-a">
	                    <div id="app-starter" class="card-body cards">
	                        <img
				              src="/css/demos/app-starter/img/App Icon.png"
				              class="rounded mx-auto mt-4 d-block"
				              alt="Me" style="width: 50%;"
				            />
	                    </div>
	                  </a>
	            </router-link>
            </div>
	    </div>
    	<div class="col-md-4 col-xs-12 mb-3">
	    	<div class="card">
	    		<router-link to="/wrapcrowd">
	                  <a class="card-a">
	                    <div id="wc" class="card-body cards">	                        
					        <img
				              src="/logo.png"
				              class="rounded mx-auto mt-5 d-block"
				              alt="Me" style="width: 70%;"
				            />
	                    </div>
	                  </a>
                </router-link>
            </div>
	    </div>
    	<div class="col-md-4 col-xs-12 mb-3">
	    	<div class="card">
	    		<router-link to="/mebtex">
	                  <a class="card-a">
	                    <div id="mt" class="card-body cards">
	                        <img
				              src="/mebtexlogo.png"
				              class="rounded mx-auto mt-4 d-block"
				              alt="Me" style="width: 70%;"
				            />
	                    </div>
	                  </a>
	            </router-link>
            </div>
	    </div>
	    <div class="col-md-4 col-xs-12 mb-3">
	    	<div class="card">
	    		<router-link to="/skytex">
	                  <a class="card-a">
	                    <div id="st" class="card-body cards">
	                        <img
				              src="/sky-logo.svg"
				              class="rounded mt-4 mx-auto d-block"
				              alt="Me" style="width: 70%;"
				            />
	                    </div>
	                  </a>
	            </router-link>
            </div>
	    </div>
    </div>
</transition>
  </div>
</template>
