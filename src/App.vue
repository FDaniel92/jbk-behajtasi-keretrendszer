<template>
  <div id="app">

    <Header />

    <ContainerHeader class="navigation-header" ContainerHeaderTitle="Jogi Behajtási Keretrendszer" ContainerHeaderParagraph="Fizetési meghagyások, peres és végrehajtási ügyek széleskörű nyilvántartása, nyomon követése" />
    
    <div class="container md-column row justify-centered">
      <InfoBox pictureSrc="infobox-img-1.svg" pictureAlt="leírás a képhez" urlSrc="https://www.google.hu/" id="advantages" infoboxTitle="Hitelesített üzenetek" infoboxParagraph="A hivatali tárhelyen keresztül hitelesített és tértivevényes üzenetek küldhetőek ügyfélkapu és cégkapu fiókokba, így a postai küldemények száma nagymértékben lecsökkenthető." />
      <InfoBox pictureSrc="infobox-img-2.svg" pictureAlt="leírás a képhez" urlSrc="https://www.google.hu/" infoboxTitle="Hiteles azonosítás" infoboxParagraph="Ügyfelei beazonosítva, e-Papír vagy iForm üzeneteken keresztül, AVDH aláírással ellátva vehetik fel szervezetével a kapcsolatot, ezáltal a személyes megjelenést igénylő ügyintézés is redukálható." />
      <InfoBox pictureSrc="infobox-img-3.svg" pictureAlt="leírás a képhez" urlSrc="https://www.google.hu/" infoboxTitle="Integrálhatóság" infoboxParagraph="Az EHK összeköthető saját ügyviteli rendszerével, így a kommunikáció tömeges és automatizálható." />
    </div>
    
    <div class="container-outerbox">
      <ContainerHeader ContainerHeaderTitle="A rendszer előnyei" id="interface" ContainerHeaderParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <div class="container md-column row justify-centered">
            <InfoBox class="without-btn" pictureSrc="infobox-img-4.svg" pictureAlt="leírás a képhez" infoboxTitle="Állami nyilvántartások" infoboxParagraph="Adatlekérések állami adatbázisokból - pl. személyi adat- és lakcímnyilvántartás. Az ügyfélkapu tulajdonosát a Központi Azonosítási Ügynök (KAÜ) azonosítja be." />
            <InfoBox class="without-btn" pictureSrc="infobox-img-5.svg" pictureAlt="leírás a képhez" infoboxTitle="Tematizált üzenetek" infoboxParagraph="Az e-Papír és iForm űrlapok rendszeresítésével a beérkező ügyfélüzenetek feldolgozása szabályozott és automatizálható. Elektronikus szerződéskötési és módosítási folyamatok." />
            <InfoBox class="without-btn" pictureSrc="infobox-img-6.svg" pictureAlt="leírás a képhez" infoboxTitle="Automatikus szortírozás" infoboxParagraph="A bejövő üzenetek kiegészítő adatai alapján, az összes levél közvetlenül az érintett rendszerbe vagy területhez érkeztethető." />
        </div>
        <div class="container md-column row justify-centered">
            <InfoBox class="without-btn" pictureSrc="infobox-img-7.svg" pictureAlt="leírás a képhez" infoboxTitle="Tömeges kezelés" infoboxParagraph="Tömegesen létrehozható és egy PIN-kód megadásával aláírható kimenő üzenetek, melyeket időbélyeggel is ellát a rendszer." />
            <InfoBox class="without-btn" pictureSrc="infobox-img-8.svg" pictureAlt="leírás a képhez" infoboxTitle="Kötelező és pontos átvétel" infoboxParagraph="Elsődleges kézbesítési címre, azaz cégkapu és ügyfélkapu fiókokba küldött ügyfélüzenetek, ahol kötelező az átvétel, vagy kézbesítési vélelem áll be." />
            <InfoBox class="without-btn" pictureSrc="infobox-img-9.svg" pictureAlt="leírás a képhez" infoboxTitle="Tértivevényes levelek" infoboxParagraph="Minden üzenethez feladóvevény és tértivevény tartozik, melyeket az EHK rendszere automatikusan társít a kimenő levelekhez." />
        </div>
    </div>
    
    <Footer />
    
  </div>
</template>

<script>
import Header from '@/components/modules/Header/Header.vue';
import InfoBox from '@/components/modules/InfoBox/InfoBox.vue';
import ContainerHeader from '@/components/modules/ContainerHeader/ContainerHeader.vue';
import Footer from '@/components/modules/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    InfoBox,
    ContainerHeader,
    Footer
  }
}
</script>

<style lang="scss">
  @import 'src/assets/styles/app.scss';
</style>
