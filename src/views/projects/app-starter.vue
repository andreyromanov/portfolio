<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 py-3">
                    <h4 v-text="$ml.get('tools')"></h4>
                    <span class="badge badge-success mr-3">Html</span>
                    <span class="badge badge-success mr-3">Css</span>
                    <span class="badge badge-success mr-3">Bootstrap</span>
                    <span class="badge badge-success mr-3">Jquery</span>
                    <span class="badge badge-primary mr-3">JavaScript</span>
                    <span class="badge badge-primary mr-3">Adobe Photoshop</span>
                    <div class='box-outer'>
                        <div class='main_box'>
                            <div class='bar top'></div>
                            <div class='bar right delay'></div>
                            <div class='bar bottom delay'></div>
                            <div class='bar left'></div>
                            <label class="mt-2">
                                <router-link to="/demo/app-starter" class="">See project</router-link>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 py-3">
                    <h4 v-text="$ml.get('description')"></h4>
                    <p class="text-left">
                        AppStareter is a landing page template which is responsive and multipurpose. It can be used for any modern website and doesn't depend on website theme. AppStarter is developed with html, css, javascript and bootstrap framework and looks good on PCs, tablets and mobile phones. It can be easily modified for any purposes and make any website look user friendly.
                    </p>
                </div>
                <div v-lazy-container="{ selector: 'img' }" class="col-md-6">
                    <img data-src="/projects/mebtex/pmt1.jpg" class="rounded mb-3 d-block proj-img" alt="Me" />
                </div>
                <div v-lazy-container="{ selector: 'img' }" class="col-md-6">
                    <img data-src="/projects/mebtex/pmt2.jpg" class="rounded mb-5 d-block proj-img" alt="Me" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped="">
.box-outer {
    overflow: hidden;
    margin: 10px auto;
    width: 200px;
    height: 50px;
}

.main_box {
    width: 200px;
    height: 50px;
    position: relative;
    border: 3px solid black;
}

.bar {
    position: absolute;
    width: 50px;
    height: 5px;
    background: gold;
    transition: all 1s linear;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}

.bar.delay {
    animation-delay: 0.5s;
    -webkit-animation-delay: 0.5s;
}

.top {
    top: -5px;
    left: -5px;
}

.right {
    top: 18px;
    right: -28px;
    transform: rotate(90deg);
}

.bottom {
    bottom: -5px;
    left: -5px;
}

.left {
    top: 18px;
    left: -28px;
    transform: rotate(90deg);
}

@-webkit-keyframes h-move {
    0% {
        left: -5px;
    }

    100% {
        left: 200px;
    }
}

@keyframes h-move {
    0% {
        left: -5px;
    }

    100% {
        left: 200px;
    }
}

.top,
.bottom {
    -webkit-animation-name: h-move;
    animation-name: h-move;
}

@-webkit-keyframes v-move {
    0% {
        top: -5px;
    }

    100% {
        top: 228px;
    }
}

@keyframes v-move {
    0% {
        top: -5px;
    }

    100% {
        top: 228px;
    }
}

.right,
.left {
    -webkit-animation-name: v-move;
    animation-name: v-move;
}
</style>