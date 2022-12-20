<template>
    <the-header></the-header>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script>
import TheHeader from './components/header/TheHeader.vue';

export default {
    components: {
        TheHeader
    }

}
</script>

<!-- 
    
COLORS

#CCDBDC
#9AD1D4
#80CED7
#80CED7
#003249 

-->

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

h1 {
    color: #007EA7;
}

h2 {
    color: #80CED7;
    font-size: 1.2em;
}

body {
    margin: 0;
}

section {
    margin: 0 10%;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 100ms ease-out;
}

.form-control {
    position: relative;
    margin-top: 15px;
    margin-bottom: 15px;
    align-content: center;
}

.form-control input[type="text"],
.form-control textarea {
    display: block;
    padding: 7px 10px;
    border-radius: 5px;
    border: 1px solid #b4b4b4;
}

.form-control input:focus,
.form-control textarea:focus,
.form-control input:focus-visible,
.form-control textarea:focus-visible {
    outline: 2px solid #9AD1D4;
    transition: all 30ms ease-in-out;
}

.form-control textarea {
    width: 100%;
}

.form-control label {
    display: inline-block;
    color: #666666;
    margin: 5px 0;
    font-size: .95em;
}

.form-action {
    display: flex;
    justify-content: right;
}
</style>