# Lesnická akademie · prezentační demo

Veřejná ukázka vzdělávání pro mladé pracovníky pěstební činnosti. **Pochopím proč · Vyzkouším si · Předvedu v praxi.**

## Co si vyzkoušet

1. Otevřít roli účastníka A01. Projít lekci, ověřit tři rozhodnutí a uložit vlastní výstup.
2. Otevřít modelovou misi D01, uložit odpověď a odevzdat ji.
3. Přes „Změnit pohled“ zvolit instruktora I01. Otevřít odevzdanou práci, napsat konkrétní zpětnou vazbu a vrátit ji k opravě.
4. Vrátit se do A01, upravit a znovu odevzdat. V I01 potvrdit opravený modelový výstup.
5. V portfoliu A01 zkontrolovat oba pokusy. V pohledu IVP zobrazit přehled.

Obsah: 36 lekcí, 108 rozhodovacích otázek, 36 vlastních pracovních výstupů, 17 modelových misí, 8 karet praktického pozorování. Zachováno 14 oblastí profilu a 24 otevřených požadavků. Učivo obsahuje zdroje a zřetelné hranice činností.

## Jak funguje ukázka

SQLite (sql.js) ukládá databázi a přílohy do IndexedDB tohoto prohlížeče. Přepnutí role ani obnovení stránky nemaže práci. Každý návštěvník má samostatná ukázková data; zařízení si je nesdílejí. Vymazání dat webu je odstraní. Pro otevření stránky je potřeba internet. Prohlížeč může úložiště odstranit podle svého nastavení, proto používejte export portfolia pro uchování vybraných výstupů.

Přepínání rolí je veřejné a není zabezpečeným přihlášením. Aplikační kontroly rolí slouží k předvedení práce jednotlivých rolí, nikoli k ochraně osobních údajů. Nepoužívat skutečné údaje, osobní fotografie ani neveřejné dokumenty. Sdílení portfolia přes veřejný token je vypnuto, export do souboru funguje.

Jde o autorskou demonstraci, nikoli o schválený program LČR, odborné oprávnění nebo potvrzení praktické kompetence. Body nenahrazují pozorování instruktora. Originální pracovní podklady nejsou součástí veřejného balíčku.

## Publikace

Veřejná ukázka se publikuje na `https://anetava.github.io/lesnicka-akademie-demo/` z větve `main` a kořene repozitáře. Není nutné přidávat hesla, klíče ani placené služby. Po změně je třeba vyčkat na úspěšné nasazení GitHub Pages a ověřit vstup do účtu na živé stránce.

## Vývoj

Zdroj prezentační aplikace je v `source/`. Node.js 22.13 nebo novější:

```sh
cd source
npm install
npm run build
npm test
```

Sestavení vznikne v `source/dist/`. Jeho obsah patří do kořene repozitáře. Navigace používá hash, aby obnovení podstránek fungovalo na GitHub Pages. Kopie je oddělená od původní serverové aplikace; její provozní databáze ani hosting se nemění.

Fotografie a ilustrace: licence a autorství jsou v `learning/attribution.html`, `learning/credits.json`. sql.js: `sql/LICENSE`.
