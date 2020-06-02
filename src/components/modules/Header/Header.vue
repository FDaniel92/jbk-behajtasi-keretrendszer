<template>
  <nav class="navigation">
        <img src="@/assets/images/EHK_logo.svg" alt="JBK logó" class="navigation__logo" />
        <ul class="navigation__list-container" v-bind:class="{ open: isActive }">
            <li class="navigation__list-item" v-for="item in listItems" :key="item.name" v-scroll-to="item.scrollTo" @click="isActive = !isActive">{{ item.name }}</li>
        </ul>
        
        <div class="navigation__burger-menu" v-on:click="toggleBurgerMenu" v-bind:class="{ open: isActive }">
            <div class="burger-menu-icon"></div>
        </div>
  </nav>
</template>

<script src="./Header.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './Header.scss';
</style>