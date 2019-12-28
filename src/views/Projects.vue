<template>
  <div class="projects">
  	<transition appear name="fade">
    <div class="row mt-5">
    	<div class="col-md-6 col-xs-12 mb-3">
    		<div class="card">
    			<router-link to="/uatao" target= '_blank' >
                  <a class="card-a">
                    <div id="ut" class="card-body cards">
                        <h2 class="card-title">UA-TAO</h2>
                    </div>
                  </a>
                </router-link>
            </div>
        </div>
    	<div class="col-md-6 col-xs-12 mb-3">
	    	<div class="card">
	    		<router-link to="/wrapcrowd" target= '_blank' >
	                  <a class="card-a">
	                    <div id="wc" class="card-body cards">	                        
					        <img
				              src="/logo.png"
				              class="rounded mx-auto d-block"
				              alt="Me" style="width: 50%;"
				            />
	                    </div>
	                  </a>
                </router-link>
            </div>
	    </div>
    	<div class="col-md-6 col-xs-12 mb-3">
	    	<div class="card">
	    		<router-link to="/mebtex" target= '_blank' >
	                  <a class="card-a">
	                    <div id="mt" class="card-body cards">
	                        <img
				              src="/mebtexlogo.png"
				              class="rounded mx-auto d-block"
				              alt="Me" style="width: 50%;"
				            />
	                    </div>
	                  </a>
	            </router-link>
            </div>
	    </div>
	    <div class="col-md-6 col-xs-12 mb-3">
	    	<div class="card">
	    		<router-link to="/skytex" target= '_blank' >
	                  <a class="card-a">
	                    <div id="st" class="card-body cards">
	                        <h2 class="card-title">Skytex</h2>
	                    </div>
	                  </a>
	            </router-link>
            </div>
	    </div>
    </div>
</transition>
  </div>
</template>
