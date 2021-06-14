<template>
  <div id="app" class="jbk">
    <ejm-header :isHidden="false">
      <img
        loading="lazy"
        slot="navigationLogo"
        src="~@/assets/images/jbk-logo.svg"
        alt="JBK logó"
      />
      <li
        slot="navigationListItem"
        class="navigation-list-item"
        v-scroll-to="'#miazajbk'"
      >
        Alaprendszer
      </li>
      <li
        slot="navigationListItem"
        class="navigation-list-item"
        v-scroll-to="'#elonyok'"
      >
        Előnyök
      </li>
      <li
        slot="navigationListItem"
        class="navigation-list-item"
        v-scroll-to="'#modulok'"
      >
        Modulok
      </li>
      <li
        slot="navigationListItem"
        class="navigation-list-item"
        v-scroll-to="'#references'"
      >
        Referenciák
      </li>
      <li
        slot="navigationListItem"
        class="navigation-list-item"
        v-scroll-to="'#connect'"
      >
        Kapcsolat
      </li>
    </ejm-header>

    <ejm-carousel class="header-navigation">
      <div class="carousel-block one" slot="carouselBlock">
        <div class="header-carousel-main-title">
          <h1>Jogi Behajtási Keretrendszer</h1>
          <hr />
          <h2 class="jbk-carousel-paragraph">
            FIZETÉSI MEGHAGYÁSOK, PERES ÜGYEK, VÉGREHAJTÁSI ELJÁRÁSOK
            ELEKTRONIKUS NYILVÁNTARTÁSA ÉS TÖMEGES KEZELÉSE
          </h2>
        </div>
      </div>
    </ejm-carousel>

    <section class="container md-column row justify-centered">
      <ejm-info-box id="miazajbk">
        <img
          loading="lazy"
          slot="infoboxImage"
          src="~@/assets/images/efmh.svg"
          alt="e-FMH modul"
        />
        <h2 slot="infoboxTitle">Fizetési meghagyás</h2>
        <p slot="infoboxParagraph">
          Fizetési meghagyás kérelmek egyedi és tömeges létrehozása, beadásra
          előkészítése és elektronikus aláírása egy folyamaton belül, az
          előrehaladás nyomon követésével.
        </p>
        <ejm-button
          slot="infoboxButton"
          label="Bővebben"
          v-scroll-to="'#fizetesmeghagyasmodul'"
          @click.native="scrollToAccordionPanel($refs.fizetesmeghagyasmodul)"
        ></ejm-button>
      </ejm-info-box>

      <ejm-info-box>
        <img
          loading="lazy"
          slot="infoboxImage"
          src="~@/assets/images/birosagi.svg"
          alt="Bírósági modul"
        />
        <h2 slot="infoboxTitle">Per</h2>
        <p slot="infoboxParagraph">
          Peres ügyek nyilvántartása, közvetett OBH összeköttetés cégkapun
          keresztül, ÁNYK nyomtatványok részleges automatikus kitöltése
          ügyadatokkal, tárgyalások nyilvántartása, ügyvédi kiszervezés.
        </p>
        <ejm-button
          slot="infoboxButton"
          label="Bővebben"
          v-scroll-to="'#permodul'"
          @click.native="scrollToAccordionPanel($refs.permodul)"
        ></ejm-button>
      </ejm-info-box>

      <ejm-info-box>
        <img
          loading="lazy"
          slot="infoboxImage"
          src="~@/assets/images/vegrehajtoi.svg"
          alt="e-Végrehajtói modul"
        />
        <h2 slot="infoboxTitle">Végrehajtás</h2>
        <p slot="infoboxParagraph">
          Végrehajtási lap kibocsátása iránti kérelmek egyedi és tömeges
          kezelése, a kibocsátást követően elektronikus kommunikáció és
          eljáráskövetés VIEKR, vagy e-Cégkapu rendszeren keresztül.
        </p>
        <ejm-button
          slot="infoboxButton"
          label="Bővebben"
          v-scroll-to="'#vegrehajtasimodul'"
          @click.native="scrollToAccordionPanel($refs.vegrehajtasimodul)"
        ></ejm-button>
      </ejm-info-box>
    </section>

    <section class="container egyutt-spec-margin">
      <ejm-container-header class="without-bg row sm-column" :isLefted="true">
        <h2 slot="ContainerHeaderTitle">Együttműködő modulok</h2>
        <p slot="containerHeaderParagraph" class="egyuttmokodo-paragraph">
          A Jogi Behajtási Keretrendszer lehetőséget biztosít a fizetési
          meghagyások, peres ügyek és végrehajtási eljárások nyilvántartására,
          nyomon követésére. A JBK több, egymáshoz szorosan kapcsolódó modulból
          felépülő informatikai alkalmazás. Böngészőből elérhető, személyre
          szabott, digitális rendszer és szolgáltatás egyben, ami az e-Jogsegéd
          más alkalmazásaival is összeköthető interfész kapcsolaton keresztül.
        </p>
        <img
          loading="lazy"
          slot="containerHeaderRightList"
          src="~@/assets/images/modulok_illusztracio.svg"
          class="lefted"
          alt="JBK - együttműködő modulok"
        />
      </ejm-container-header>
    </section>

    <ejm-info-container>
      <h2 slot="ejmInfoContainerTitle">Jogkövető kapcsolattartás</h2>
      <p slot="ejmInfoContainerParagraph">
        Az alkalmazás segítségével generált FMH és VH kérelmek illeszkednek az
        aktuális, Magyar Országos Közjegyzői Kamara által előírt struktúrához.
        <br class="hide-br-mobile" />
        <br class="hide-br-mobile" />
        A peres útra terelt ügyek esetében az Országos Bírósági Hivatal hivatali
        kapuján keresztül tarthatjuk a kapcsolatot az ellenérdekű fél
        képviselőjével, közvetett módon, az e-Cégkapu rendszeren keresztül.
        <br class="hide-br-mobile" />
        <br class="hide-br-mobile" />
        A JBK segítségével közvetlen - mindig a hatályos előírás szerinti -
        elektronikus kommunikáció folytatható a Magyar Bírósági Végrehajtói Kar
        VIEKR rendszerén keresztül az illetékes végrehajtókkal.
      </p>
    </ejm-info-container>

    <section class="container spec-margin" id="jbk">
      <ejm-container-header
        class="without-bg row sm-column"
        :isLefted="true"
        :isVerticalCentered="true"
      >
        <h2 slot="ContainerHeaderTitle">Fejlesztések igény szerint</h2>
        <p
          slot="containerHeaderParagraph"
          class="fejlesztesigenyszerint-paragraph"
        >
          A keretrendszert az e-Jogsegéd üzemelteti és támogatja.
          Alaprendszerének része a keletkező iratok tárolása és ügyhöz
          rendelése, továbbá lehetőség nyílik a saját munkafolyamatok
          implementálására, ügyviteli rendszerrel való összeköttetésre és egyéb
          üzleti igény szerinti továbbfejlesztésre.
        </p>
        <img
          loading="lazy"
          slot="containerHeaderRightList"
          src="~@/assets/images/fejlesztesek-ikon.png"
          alt="JBK - alaprendszeri előnyök"
        />
      </ejm-container-header>
    </section>

    <section class="container-outerbox">
      <ejm-container-header id="elonyok">
        <h2 slot="ContainerHeaderTitle">Előnyök</h2>
        <p slot="containerHeaderParagraph" class="font-size-20">
          A JBK alaprendszeri előnyei az alábbi
          <br class="hide-br-mobile" />
          lehetőségeket biztosítják az Ön és szervezete számára:
        </p>
      </ejm-container-header>

      <div class="advantages-minus">
        <div class="container md-column row justify-centered">
          <ejm-custom-dropdown-list class="custom-dropdown-block">
            <img
              loading="lazy"
              slot="customDropdownIcon"
              src="~@/assets/images/elonyok-ikon-1.svg"
              alt="Ügyviteli rendszerhez illesztés"
            />
            <h2 slot="customDropdownTitle">Ügyviteli rendszerhez illesztés</h2>
            <p slot="customDropdownParagraph">
              A JBK összeköthető saját rendszereivel, támogatva például a
              felhasználói beavatkozás nélküli ügyindítást, ügylezárást,
              valamint a pénzügyi forgalom átadását, vagy akár az archiválás
              célú dokumentumátadást.
            </p>
          </ejm-custom-dropdown-list>
          <ejm-custom-dropdown-list class="custom-dropdown-block">
            <img
              loading="lazy"
              slot="customDropdownIcon"
              src="~@/assets/images/elonyok-ikon-2.svg"
              alt="Pénzügyi forgalom rögzítése"
            />
            <h2 slot="customDropdownTitle">Pénzügyi forgalom rögzítése</h2>
            <p slot="customDropdownParagraph">
              Az ügyintézés során felmerülő jogi költségek (pl. eljárási díjak,
              végrehajtói költségelőlegek, illetékek) valamint a beérkező
              befizetések rögzíthetők az érintett ügyletekhez, biztosítva az
              aktuális állapot nyilvántartását.
            </p>
          </ejm-custom-dropdown-list>
        </div>

        <div class="container md-column row justify-centered">
          <ejm-custom-dropdown-list class="custom-dropdown-block">
            <img
              loading="lazy"
              slot="customDropdownIcon"
              src="~@/assets/images/elonyok-ikon-3.svg"
              alt="Iratok és elektronikus kapcsolattartás"
            />
            <h2 slot="customDropdownTitle">
              Iratok és elektronikus kapcsolattartás
            </h2>
            <p slot="customDropdownParagraph">
              A manuális üzenetkezelés a múlté. A beérkező elektronikus iratok a
              metaadatok alapján automatikusan az ügyekhez, ezáltal ügykezelő
              felhasználókhoz kerülhetnek, így a határidőből fennmaradó idő
              maximalizálható.
              <br class="hide-br-mobile" />
              <br class="hide-br-mobile" />
              Az alkalmazásban létrehozható sablonokon keresztül az ügyekben
              eltárolt adatok a küldendő iratokba emelhetők, melyeket a
              végrehajtóknak közvetlenül a VIEKR rendszeren keresztül, míg a
              bíróságoknak közvetett módon az e-Cégkapu szolgáltatáson keresztül
              küldhetők. A hitelesítés és időbélyegzés rendszeren belül
              elvégezhető, utóbbit az e-Jogsegéd biztosítja.
            </p>
          </ejm-custom-dropdown-list>
          <ejm-custom-dropdown-list class="custom-dropdown-block">
            <img
              loading="lazy"
              slot="customDropdownIcon"
              src="~@/assets/images/elonyok-ikon-4.svg"
              alt="Intelligens jogi ügymenetek"
            />
            <h2 slot="customDropdownTitle">Intelligens jogi ügymenetek</h2>
            <p slot="customDropdownParagraph">
              Rendszerünkben a szükséges munkafolyamatok hatékony kezelésére
              törekszünk. Ezek lekövetésével és támogatásával a kapcsolódó
              feladatok paraméterezhetővé válnak, így automatizált és
              intelligens megoldásokkal tesszük gördülékennyé az egyes
              ügymeneteket.
            </p>
          </ejm-custom-dropdown-list>
        </div>

        <div class="container md-column row justify-centered">
          <ejm-custom-dropdown-list class="custom-dropdown-block">
            <img
              loading="lazy"
              slot="customDropdownIcon"
              src="~@/assets/images/elonyok-ikon-5.svg"
              alt="Szervezeti egységek"
            />
            <h2 slot="customDropdownTitle">Szervezeti egységek</h2>
            <p slot="customDropdownParagraph">
              A JBK-ban leképezhető a szervezeti felépítés, vagy akár
              megbízónként elkülöníthetők az ügyek. A szervezeti egységek egymás
              ügyeihez, irataihoz nem férnek hozzá. Szervezeti egységen belül
              lehet csoportos vagy egyéni munkavégzés, utóbbi esetben az ügyeket
              ügyintézőknek kell delegálni, a felelősség személyes.
            </p>
          </ejm-custom-dropdown-list>
          <ejm-custom-dropdown-list class="custom-dropdown-block">
            <img
              loading="lazy"
              slot="customDropdownIcon"
              src="~@/assets/images/elonyok-ikon-6.svg"
              alt="Riportok, adatszolgáltatás"
            />
            <h2 slot="customDropdownTitle">Riportok, adatszolgáltatás</h2>
            <p slot="customDropdownParagraph">
              A nyilvántartott adatok alapján tetszőleges riportok készíthetők,
              akár automatikusan is. A JBK lehetőséget biztosít időszakos
              zárások futtatására, valamint időszakos jelentések elkészítésére
              is.
            </p>
          </ejm-custom-dropdown-list>
        </div>

        <div class="container md-column row justify-centered">
          <ejm-custom-dropdown-list class="custom-dropdown-block">
            <img
              loading="lazy"
              slot="customDropdownIcon"
              src="~@/assets/images/elonyok-ikon-7.svg"
              alt="Külső-belső feladatkezelés"
            />
            <h2 slot="customDropdownTitle">Külső-belső feladatkezelés</h2>
            <p slot="customDropdownParagraph">
              A kezelt ügyek eseményeiről feldolgozandó feladat-értesítéseket
              kapunk. Az időgazdálkodást szem előtt tartva külső e-mail
              tájékoztatás is kérhető a rendszertől, így csak teendő esetén kell
              a rendszerbe belépni.
            </p>
          </ejm-custom-dropdown-list>
          <ejm-custom-dropdown-list class="custom-dropdown-block">
            <img
              loading="lazy"
              slot="customDropdownIcon"
              src="~@/assets/images/elonyok-ikon-8.svg"
              alt="Inaktív ügyek monitorozása"
            />
            <h2 slot="customDropdownTitle">Inaktív ügyek monitorozása</h2>
            <p slot="customDropdownParagraph">
              A JBK-ba rögzíthető adatokra támaszkodva felügyelhetők az „alvó”
              ügyek, amikben bizonyos idő eltelte után sem történt fejlemény. A
              rendszer figyelmeztetheti az érintett ügyintézőt, készíthet
              rendszeres riportot, vagy akár kimenő üzenetet is létrehozhat
              automatikusan, melynek küldését az ügyintéző hagyja jóvá.
            </p>
          </ejm-custom-dropdown-list>
        </div>

        <div class="container md-column row justify-centered">
          <ejm-custom-dropdown-list class="custom-dropdown-block">
            <img
              loading="lazy"
              slot="customDropdownIcon"
              src="~@/assets/images/elonyok-ikon-9.svg"
              alt="Külső jogi képviselet"
            />
            <h2 slot="customDropdownTitle">Külső jogi képviselet</h2>
            <p slot="customDropdownParagraph">
              A rendszer a külső jogi képviseletben lévő ügykezelést is
              támogatja. A képviselő is a JBK-ban dolgozik, jogosultság szinten
              elkülönítve a többi ügytől. Az ügyek aktuális állapota minden
              pillanatban rendelkezésre áll, az ügyek adatai bekerülnek a
              szervezet riportjaiba, jelentéseibe.
            </p>
          </ejm-custom-dropdown-list>
          <ejm-custom-dropdown-list class="custom-dropdown-block">
            <img
              loading="lazy"
              slot="customDropdownIcon"
              src="~@/assets/images/elonyok-ikon-10.svg"
              alt="Belső üzenetek"
            />
            <h2 slot="customDropdownTitle">Belső üzenetek</h2>
            <p slot="customDropdownParagraph">
              A JBK-ban lévő ügyekben az ügyintézők egymást között, vagy a külső
              jogi képviselővel a rendszeren belül kommunikálhatnak belső
              üzenetek segítségével. Az üzenetek lehetnek ügyhöz kötöttek, vagy
              ügykapcsolat nélküliek. Több címzett is megadható, a rendszer
              felhasználónként tárolja a kézbesítési és megnyitási időpontokat.
              Minden információ és előzmény egy helyen, közvetlenül az ügyben
              rendelkezésre áll.
            </p>
          </ejm-custom-dropdown-list>
        </div>
      </div>
    </section>

    <section class="container margin-top-60" id="modulok">
      <ejm-container-header class="without-bg row centered">
        <h2 slot="ContainerHeaderTitle">Modulok</h2>
        <p slot="containerHeaderParagraph">
          A rendszerszolgáltatás egymáshoz kapcsolódó moduljai az ügyintézők, a
          Közjegyzők (MOKK), illetve a Bíróság (OBH) közötti hiteles
          elektronikus kommunikációt valósítják meg közvetetten, továbbá
          használatukkal a Bírósági Végrehajtókkal (MBVK) közvetlen módon
          tartható a kapcsolat. A JBK segítségével a fizetési meghagyások,
          valamint peres és végrehajtási folyamatok indításával és
          ügykövetésével kapcsolatos ügymenetek teljes körű kiszervezése is
          biztosítható.
        </p>
      </ejm-container-header>

      <div class="active-calculator">
        <ejm-custom-dropdown-list
          class="margin-top-60"
          id="fizetesmeghagyasmodul"
          ref="fizetesmeghagyasmodul"
        >
          <h2 slot="customDropdownTitle">Fizetési meghagyás modul</h2>
          <h3 slot="customDropdownParagraph" class="dropdown-main-title">
            Fizetési meghagyás kérelmek elektronikus kezelése
          </h3>
          <p slot="customDropdownParagraph">
            A JBK keretrendszer fizetési meghagyás komponensének legfőbb
            feladata a kérelmek gyors és hatékony létrehozása, egyedi vagy
            tömeges módon. A modul magas szintre emeli az elektronikus FMH
            kérelmek előállításának hatékonyságát, beadásra való előkészítésüket
            (fmh.mokk.hu) és nyomon követésüket.
          </p>

          <h4 class="dropdown-bold-paragraph" slot="customDropdownParagraph">
            Kérelmek létrehozása
          </h4>

          <p slot="customDropdownParagraph">
            A mindig sémahelyes létrehozás történhet akár automatikusan is egy
            erre a célra lefejlesztett interfészen és a megjelölt
            kérelemsablonokon keresztül
          </p>

          <h4 class="dropdown-bold-paragraph" slot="customDropdownParagraph">
            Elektronikus aláírás
          </h4>

          <p slot="customDropdownParagraph">
            A beadás előtti aláírás egy folyamat indításával elvégezhető, akár
            több száz vagy több ezer kérelem egyidejű aláírása is
            megvalósulható.
          </p>

          <h4 class="dropdown-bold-paragraph" slot="customDropdownParagraph">
            Kérelmek csomagolása
          </h4>

          <p slot="customDropdownParagraph">
            Az aláírt kérelmeket a következő lépésben zip fájlba kell
            tömöríteni, melyeknél a rendszer elvégzi a 200 darabnál több
            kiválasztott kérelem esetén a darabolást, valamint kiszámítja az
            adott zip fájl tartalmának megfelelő eljárási díjat.
          </p>

          <h4 class="dropdown-bold-paragraph" slot="customDropdownParagraph">
            Kérelmek beadása
          </h4>

          <p slot="customDropdownParagraph">
            A beadást és az eljárási díj teljesítését az fmh.mokk.hu felületén
            kell elvégezni.
          </p>

          <h4 slot="customDropdownParagraph" class="dropdown-bold-paragraph">
            Nyomon követés
          </h4>

          <p slot="customDropdownParagraph">
            A MOKK által befogadott kérelmekben keletkezett elektronikus
            iratokat a szolgáltatás keretein belül a rendszerbe töltjük, a
            változásokról az érintett ügykezelő felhasználót vagy felhasználókat
            értesíti a rendszer automatikusan.
          </p>

          <h4 slot="customDropdownParagraph" class="dropdown-bold-paragraph">
            Kapcsolódó modulok
          </h4>

          <p slot="customDropdownParagraph">
            A jogerőre emelkedett fizetési meghagyás ügyletének kezelése a
            Végrehajtás modulban, míg ellentmondás esetén az érintett ügylet a
            Per modulban folytatódik.
          </p>
          <img
            loading="lazy"
            slot="customDropdownImage"
            src="~@/assets/images/FMH_Abra.svg"
            alt="Fizetési meghagyás modul"
            class="custom-dropdown-image"
          />
        </ejm-custom-dropdown-list>

        <ejm-custom-dropdown-list id="permodul" ref="permodul">
          <h2 slot="customDropdownTitle">Per modul</h2>
          <h3 slot="customDropdownParagraph" class="dropdown-main-title">
            Peres ügyek elektronikus nyilvántartása és nyomon követése
          </h3>
          <p slot="customDropdownParagraph">
            A komponens a fizetési meghagyás eljárásokból, és egyéb úton
            keletkező peres ügyek nyilvántartását kínálja a JBK rendszerén
            belül. Az FMH-ból keletkező peres ügyek a kötelezett ellentmondása
            esetén automatikusan jönnek létre, örökölve a releváns adatokat.
          </p>
          <p slot="customDropdownParagraph">
            A modul és az
            <a
              href="https://www.e-cegkapu.hu/"
              target="_blank"
              class="modul-link"
              rel="noreferrer"
            >
              <strong>e-Cégkapu</strong></a
            >
            szolgáltatás együttes segítségével bírósággal való elektronikus
            kommunikáció a JBK-ból indítható (pl. keresetlevél, peres iratok,
            ügyvédi beadványok). Az érintett ÁNYK nyomtatvány mezői előtölthetők
            az érintett ügy adataival, így jelentős idő szabadul fel.
          </p>
          <p slot="customDropdownParagraph">
            A kintlévőség-kezelésben érintett ügyekben hozott bírósági ítélet
            alapján az elektronikus végrehajtási lap elkészíthető a tárolt
            adatokból és beküldhető az OBH-nak. A naptárfunkció és
            határidő-figyelés a bírósági tárgyalások időpontjainak egyszerű
            nyomon követését teszik lehetővé felhasználóink számára.
          </p>
          <img
            loading="lazy"
            slot="customDropdownImage"
            src="~@/assets/images/per-modul.svg"
            alt="Per modul"
            class="custom-dropdown-image"
          />
        </ejm-custom-dropdown-list>

        <ejm-custom-dropdown-list
          id="vegrehajtasimodul"
          ref="vegrehajtasimodul"
        >
          <h2 slot="customDropdownTitle">Végrehajtás modul</h2>
          <h3 slot="customDropdownParagraph" class="dropdown-main-title">
            Végrehajtási eljárások elektronikus kezelése
          </h3>
          <p slot="customDropdownParagraph">
            A modul a felhasználó által indított, jogerőssé vált fizetési
            meghagyásokból kezdeményezett, és a bekapcsolódásos végrehajtási
            eljárások kezelését teszi átláthatóvá. Ezen felül támogatja a
            végrehajtókkal való hiteles elektronikus kapcsolattartást a VIEKR
            rendszerhez kapcsolódva, vagy akár az
            <a
              href="https://www.e-cegkapu.hu/"
              target="_blank"
              class="modul-link"
              rel="noreferrer"
              ><strong>e-Cégkapu</strong></a
            >
            keresztül is.
          </p>

          <h4 class="dropdown-bold-paragraph" slot="customDropdownParagraph">
            Fedezetlen követelések
          </h4>
          <p slot="customDropdownParagraph">
            Végrehajtási lap kibocsátása iránti kérelem tömeges létrehozása és a
            MOKK rendszerébe való beadás előkészítése. A MOKK által befogadott
            kérelmekben keletkezett elektronikus iratokat a szolgáltatás
            keretein belül a rendszerbe töltjük, a változásokról az érintett
            ügykezelő felhasználót vagy felhasználókat értesíti a rendszer
            automatikusan.
          </p>

          <h4 class="dropdown-bold-paragraph" slot="customDropdownParagraph">
            Fedezetes követelések
          </h4>
          <p slot="customDropdownParagraph">
            A fedezetes követelési eljárásrendet támogatva a JBK lehetőséget
            biztosít a záradékolt követelések pontos nyilvántartására és
            kezelésére. A keretrendszerből indítva - e-Cégkapun keresztül -
            nyomtatvány küldhető a Levéltár részére (kérelem okirat kikérésére),
            ennek birtokában pedig lehetőség van a végrehajtás kérelmezésére a
            Közjegyzői Kamaránál. Digitális szolgáltatásaink együttműködésével
            hiteles elektronikus kommunikáció valósítható meg a közjegyzőkkel és
            végrehajtókkal, ahol az ügyek tömeges létrehozásának, valamint a
            nyomtatványok részleges kitöltésének automatizálása is támogatott.
          </p>

          <h4 class="dropdown-bold-paragraph" slot="customDropdownParagraph">
            VH ügy létrehozása
          </h4>
          <p slot="customDropdownParagraph">
            A „Végrehajtási lap” státuszú kérelmekből automatikusan létrehozza a
            rendszer a végrehajtási eljáráshoz kapcsolódó ügyet, örökölve a
            releváns adatokat az előzmény szakaszokból.
          </p>

          <h4 class="dropdown-bold-paragraph" slot="customDropdownParagraph">
            Automatikus iktatás
          </h4>
          <p slot="customDropdownParagraph">
            A VIEKR rendszerből beérkező üzeneteket a végrehajtási ügyiratszám
            alapján a rendszer automatikusan az ügykezelőhöz rendeli.
          </p>

          <h4 class="dropdown-bold-paragraph" slot="customDropdownParagraph">
            Vagyontárgyi nyilvántartás
          </h4>
          <p slot="customDropdownParagraph">
            A JBK biztosítja a fedezetek naprakész nyilvántartását, valamint
            azok aktuális státuszának lekövetését. A rendszerben rögzíthetők a
            fellelt vagyontárgyak, valamint a kapcsolódó árverések.
          </p>
          <img
            loading="lazy"
            slot="customDropdownImage"
            src="~@/assets/images/vegrehajtasi-modul.svg"
            alt="Végrehajtási modul"
            class="custom-dropdown-image"
          />
        </ejm-custom-dropdown-list>
      </div>
    </section>

    <section id="references" class="brand-carousel margin-top-100">
      <ejm-container-header class="without-bg" :isCentered="true">
        <h2 slot="ContainerHeaderTitle">Referenciák</h2>
      </ejm-container-header>
      <ejm-carousel>
        <div class="carousel-block" slot="carouselBlock">
          <div class="column">
            <div class="row">
              <a
                href="https://www.intrum.hu/ados-ugyfeleknek/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~@/assets/images/intrum-logo.svg" alt="Intrum" />
              </a>
              <a
                href="https://www.svea.com/hu/hu/start/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~@/assets/images/svea-logo.svg" alt="Svea" />
              </a>
              <a href="https://www.cib.hu/" target="_blank" rel="noreferrer">
                <img src="~@/assets/images/cibbank-logo.svg" alt="Cib Bank" />
              </a>
              <a href="http://www.dhkzrt.hu/" target="_blank" rel="noreferrer">
                <img src="~@/assets/images/dhk-logo.svg" alt="DHK" />
              </a>
            </div>
            <div class="row">
              <a
                href="https://dealer.porsche.com/hungary/budapest"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~@/assets/images/porsche-logo.svg" alt="Porsche" />
              </a>
              <a
                href="https://elmuemasz.hu/egyetemes-szolgaltatas"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~@/assets/images/elmu-logo.svg" alt="ELMŰ" />
              </a>
              <a
                href="https://www.generali.hu/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~@/assets/images/generali-logo.svg" alt="Generali" />
              </a>
              <a
                href="https://www.erstebank.hu/hu/ebh-nyito"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~@/assets/images/erste-logo.svg" alt="Erste" />
              </a>
            </div>
            <div class="row">
              <a
                href="https://www.mkb.hu/lakossagi"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~@/assets/images/mkb-logo.svg" alt="MKB" />
              </a>
              <a href="https://bkk.hu/" target="_blank" rel="noreferrer">
                <img src="~@/assets/images/logo_bkk.svg" alt="BKK" />
              </a>
              <a href="https://www.opten.hu/" target="_blank" rel="noreferrer">
                <img src="~@/assets/images/logo_opten.svg" alt="OPTEN" />
              </a>
              <a
                href="https://www.cofidis.hu/index"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~@/assets/images/cofidis-logo.svg" alt="Cofidis" />
              </a>
            </div>
          </div>
        </div>

        <div class="carousel-block" slot="carouselBlock">
          <div class="column">
            <div class="row">
              <a
                href="https://ugyvedbroker.hu/ugyvednevsor/dr-nemethy-barbara"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="~@/assets/images/drnemethy-logo.svg"
                  alt="Dr. Némethy ügyvédi iroda"
                />
              </a>
              <a
                href="https://www.fundamenta.hu/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="~@/assets/images/fundamenta-logo.svg"
                  alt="Fundamenta"
                />
              </a>
            </div>
          </div>
        </div>
      </ejm-carousel>
    </section>

    <section class="connect" id="connect">
      <div class="container row md-column">
        <ejm-container-header
          class="without-bg row connect-paragraph mobile-margin-bottom"
          :isLefted="true"
        >
          <h2 slot="ContainerHeaderTitle">Kérdése van?</h2>
          <p slot="containerHeaderParagraph">
            Írjon nekünk, keressen minket bizalommal! Munkatársaink készséggel
            állnak rendelkezésére, hogy segítséget nyújtsanak elektronikusan
            intézhető hivatalos ügyeinek kezelésében.
          </p>
        </ejm-container-header>
        <form
          class="form-field"
          @submit.prevent="sendMessage"
          method="post"
          novalidate="true"
          :class="{ hide: isFormHide }"
        >
          <input type="hidden" name="gToken" id="gToken" />
          <ejm-input
            ref="nameInput"
            type="text"
            name="name"
            id="name"
            v-model="message.clientName"
            inputLabel="Név"
          />
          <ejm-input
            ref="emailInput"
            type="email"
            name="email"
            id="email"
            v-model="message.email"
            inputLabel="Email"
          />
          <ejm-textarea
            ref="textareaInput"
            name="textarea"
            id="textarea"
            v-model="message.body"
            inputLabel="Üzenet szövege*"
          ></ejm-textarea>
          <div class="row sm-column">
            <ejm-button
              type="submit"
              label="Elküldöm"
              :class="{ hide: isSendMessagePending == true }"
              :disabled="isDisabled"
            ></ejm-button>
            <ejm-checkbox @click.native="isDisabled = !isDisabled"
              ><p slot="checkboxLabel">
                AZ
                <a href="/Adatvedelmi_Tajekoztato_JBK_02.pdf" target="_blank"
                  >ADATVÉDELMI TÁJÉKOZTATÓ</a
                >
                ALAPJÁN HOZZÁJÁRULOK ADATAIM KEZELÉSÉHEZ.
              </p></ejm-checkbox
            >
          </div>

          <button
            class="g-recaptcha"
            data-sitekey="6LewvNYZAAAAAGA0aj5BHZjG1cgNARrqiBhDjoLk"
            data-callback="onSubmit"
            data-action="submit"
          ></button>
          
        </form>
        <div class="form-send-success" :class="{ active: isActiveSuccess }">
          <h3>Köszönjük!</h3>
          <p>Sikeres kapcsolatfelvétel!</p>
        </div>
      </div>
    </section>

    <ejm-footer>
      <p slot="aboutContentFooter">
        Az e-Jogsegéd, a hiteles elektronikus ügyintézés szakértőjeként, könnyen
        kezelhető, megoldásorientált szolgáltatásokat kínál a mindennapi
        digitális feladatok kezelésére. Innovatív szoftverek és rendszerek
        fejlesztése mellett, kimagasló szaktudást és folyamatos szakértői
        támogatást nyújtunk ügyfeleink elektronikus ügymeneteihez.
      </p>
      <div slot="connectPersons">
        <p class="strong-names">Ifj. Lengyel Tibor</p>
        <p>ügyvezető igazgató</p>
        <p>06 30/933-8083</p>
        <p>ifj.lengyel@ejogseged.hu</p>
        <br class="hide-br-mobile" />
        <br class="hide-br-mobile" />
        <p class="strong-names">Várnai Soma</p>
        <p>operatív igazgató,</p>
        <p>adatvédelmi tisztviselő</p>
        <p>06 30/317-7239</p>
        <p>varnai.soma@ejogseged.hu</p>
      </div>
      <a
        href="https://www.e-cegkapu.hu/?gclid=EAIaIQobChMIiZrNhYT36gIV1_hRCh35AgJXEAAYASAAEgKvaPD_BwE"
        target="_blank"
        rel="noreferrer"
        slot="productsListFooter"
        >e-Cégkapu</a
      >
      <a
        href="https://www.e-hivatalikapu.hu/"
        target="_blank"
        rel="noreferrer"
        slot="productsListFooter"
        >e-Hivatali Kapu</a
      >
      <a href="/" rel="noreferrer" slot="productsListFooter">JBK</a>
      <a
        href="https://www.jbklight.hu/"
        target="_blank"
        rel="noreferrer"
        slot="productsListFooter"
        >JBK light</a
      >
      <img
        slot="footerEjsLogo"
        src="~@/assets/images/ejogseged_logo.svg"
        alt="e-jogsegéd logó"
      />
      <p slot="privacyStatement">
        <a href="/Adatvedelmi_Tajekoztato_JBK_02.pdf" target="_blank"
          >Adatvédelmi tájékoztató</a
        >
      </p>
      <img
        slot="footerFacebookLogo"
        src="~@/assets/images/facebook-logo.png"
        alt="Facebook logó"
      />
    </ejm-footer>

    <ejm-cookie>
      <p slot="cookieParagraph">
        Weboldalunkon
        <a href="/Suti_Szabalyzat_ECK_EHK_JBK_EJS_01.pdf" target="_blank"
          >sütiket</a
        >
        (cookie) használunk, hogy biztonságos böngészés mellett a legjobb
        felhasználói élményt nyújthassuk. A honlap további böngészésével
        hozzájárul a sütik használatához.
        <a href="/Adatvedelmi_Tajekoztato_JBK_02.pdf" target="_blank"
          >Adatvédelmi tájékoztatónkban</a
        >
        megtalálja, hogyan gondoskodunk adatai védelméről.
      </p>
    </ejm-cookie>

    <ejm-go-top></ejm-go-top>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        clientName: "",
        email: "",
        body: "",
        sourceSystem: "JBK",
      },
      returnValue: true,
      isActiveSuccess: false,
      isFormHide: false,
      isSendMessagePending: false,
      isDisabled: true,
    };
  },
  head() {
    return {
      titleTemplate: "Jogi Behajtási Keretrendszer",
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:url", content: process.env.baseUrl },
        { property: "og:title", content: "Jogi Behajtási Keretrendszer" },
        {
          property: "og:description",
          content:
            "Kezelje a fizetési meghagyások, peres ügyek és végrehajtási eljárások nyilvántartását, nyomon követését a JBK digitális alkalmazásán keresztül!",
        },
        {
          property: "og:image",
          content: process.env.baseUrl + "/header-bg.jpg",
        },
      ],
    };
  },
  mounted() {
    this.loadRecaptcha();
  },
  methods: {
    scrollToAccordionPanel(element) {
      element.$el.children[1].classList.add("active");
      element.$el.children[0].classList.add("actual");
    },
    loadRecaptcha() {
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6LewvNYZAAAAAGA0aj5BHZjG1cgNARrqiBhDjoLk", {
            action: "submit",
          })
          .then(function (token) {
            document.querySelector("#gToken").value = token;
          });
      });
    },
    checkForm() {
      if (!this.message.clientName) {
        this.$refs.nameInput.classes.isError = true;
        this.$refs.nameInput.classes.isActiveRequire = true;
        this.$refs.nameInput.requiredText = "Kötelező mező!";
        this.returnValue = false;
      }
      if (!this.message.email) {
        this.$refs.emailInput.classes.isError = true;
        this.$refs.emailInput.classes.isActiveRequire = true;
        this.$refs.emailInput.requiredText = "Kötelező mező!";
        this.returnValue = false;
      }
      if (!this.message.body) {
        this.$refs.textareaInput.classes.isError = true;
        this.$refs.textareaInput.classes.isActiveRequire = true;
        this.$refs.textareaInput.requiredText = "Kötelező mező!";
        this.returnValue = false;
      }
      return this.returnValue;
    },
    sendMessage() {
      if (this.checkForm() === true) {
        this.isSendMessagePending = true;
        this.$axios
          .post(
            "/mail/send?g-recaptcha-response=" +
              document.querySelector("#gToken").value,
            this.message
          )
          .then(({ data }) => {
            for (let key in this.message) this.message[key] = null;
            this.isFormHide = true;
            this.isActiveSuccess = true;
            this.isSendMessagePending = false;
          });
      }
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/styles/fonts.css";
@import "~@/assets/styles/base.scss";
@import "~@/assets/styles/reset.scss";
</style>
