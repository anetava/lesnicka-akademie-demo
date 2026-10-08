# Lesnická akademie - prezentační revize

Oddělená úprava existující akademie pro prezentaci. Tato větev není aktuálně nasazena na GitHub Pages. Původní publikovaná verze zůstává zachována.

Upraveno odborné názvosloví, přepínání demonstračních účtů a souhrnná role „Dohled nad vzděláváním LČR“. Pracovní registr a zdroje se v prezentaci nezobrazují. Autorské licence fotografií zůstávají dostupné.

## Spuštění a ověření

Vyžaduje Node.js 22.13 nebo novější.

```bash
cd source
npm ci
npm test
npx tsc --noEmit
npm run build
npm run dev
```

Sestavení `source/dist` lze obsluhovat libovolným statickým HTTP serverem. Nepoužívejte přímé otevření souboru přes `file://`; aplikace načítá databázové součásti přes HTTP.

## Demonstrační účty

Vstup nabízí A01 (účastník), I01 (instruktor), Q01 (kvalita) a L01 (dohled LČR). V záhlaví lze zvolit ostatní syntetické účty. Na menších obrazovkách použijte tlačítko „Přepnout účet“. Každý prohlížeč má vlastní data a přepínání umožňuje předvedení různých rolí v jedné ukázce.

Tato statická demonstrace není zabezpečeným systémem pro skutečné osoby. Osobní přihlášení, serverová databáze a přístupová oprávnění patří do následné provozní verze. Digitální výsledky ani body nepotvrzují způsobilost k práci.

Stav ověření a další práce jsou přesně uvedeny v [WORK_STATE.md](WORK_STATE.md).
