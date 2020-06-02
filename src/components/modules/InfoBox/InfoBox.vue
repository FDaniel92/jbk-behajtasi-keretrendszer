<template>
    <section class="infobox">
        <img class="infobox__image" :src="resolve_img_url(pictureSrc)" :alt="pictureAlt">
        <h2>
          {{infoboxTitle}}
        </h2>
        <p>
          {{infoboxParagraph}}
        </p>
        <a v-if="urlSrc !== undefined" :href="set_href_url(urlSrc)" target='_blank'>Bővebben</a>
    </section>
</template>

<script src="./InfoBox.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './InfoBox.scss';
</style>