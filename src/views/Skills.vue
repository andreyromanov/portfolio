<template>
  <div class="skills">
  	<transition appear name="fade">
      <div class="row">
        <div class="col-md-6">
          <h1 v-text="$ml.get('msg')" />
          <h4 class="mt-2">Frontend</h4>
          <ul class="mt-3">
            <li>PHP</li>
            <li>Laravel</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div class="col-md-6">
          <h4 class="mt-2">Backend</h4>
          <ul class="mt-3">
            <li>PHP</li>
            <li>Laravel</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
            <li>MySQL</li>
          </ul>
        </div>
    </div>
</transition>
  </div>
</template>
