<template>
  <div class="skills pt-4">
  	<transition appear name="fade">
      <div class="row">
        <div class="col-md-6">
          <h4>Frontend</h4>
          <ul class="mt-3 list-unstyled">
            <li><span class="badge badge-success">CSS</span></li>
            <li><span class="badge badge-success">HTML</span></li>
            <li><span class="badge badge-success">JavaScript</span></li>
            <li><span class="badge badge-success">Bootstrap</span></li>
            <li><span class="badge badge-success">Jquery</span></li>
          </ul>
        </div>

        <div class="col-md-6">
          <h4>Backend</h4>
          <ul class="mt-3 list-unstyled">
            <li><span class="badge badge-success">PHP</span></li>
            <li><span class="badge badge-success">Laravel</span></li>
            <li><span class="badge badge-primary">MySQL</span></li>
            <li><span class="badge badge-warning">Elasticsearch</span></li>
          </ul>
        </div>
        <div class="col-md-6 border-top pt-4">
          <h4 v-text="$ml.get('other_skills')"></h4>
          <ul class="mt-3 list-unstyled">
            <li><span class="badge badge-success">Git</span></li>
            <li><span class="badge badge-primary">Vue.js</span></li>
            <li><span class="badge badge-success">Wordpress</span></li>
            <li><span class="badge badge-warning">Docker</span></li>
            <li><span class="badge badge-warning">Node.js</span></li>
            <li><span class="badge badge-warning">MongoDB</span></li>
          </ul>
        </div>
        <div class="col-md-6 border-top pt-4">
          <h4 v-text="$ml.get('other_exp')"></h4>
          <ul class="mt-3 list-unstyled">
            <li><span class="badge badge-primary">Electron</span></li>
            <li><span class="badge badge-primary">Telegram / Viber bot</span></li>
            <li><span class="badge badge-primary">Browser Exctentions</span></li>
            <li><span class="badge badge-primary">Linux / Windows</span></li>
            <li><span class="badge badge-warning">Zend Framework</span></li>
          </ul>
        </div>
         <div class="col-md-12 border-top pt-4">
          <span class="badge badge-success mr-3" v-text="$ml.get('very_good')"></span>
          <span class="badge badge-primary mr-3" v-text="$ml.get('good')"></span>
          <span class="badge badge-warning mr-3" v-text="$ml.get('okay')"></span>
        </div>
    </div>
</transition>
  </div>
</template>
