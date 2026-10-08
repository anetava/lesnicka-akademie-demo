# Lesnická akademie – samostatná prezentační verze

Aktualizace: 8. 10. 2026. Původní základ: d45f483d707a06dad7b40a7b1da313328ded75eb.
Zdrojová větev: prezentace-odborne-upravy-20261008.
Zveřejněná adresa: https://anetava.github.io/lesnicka-akademie-demo/prezentace/
Původní aplikace v kořenové složce se zachovává; nová sestava je v samostatné složce prezentace/.

## Obsah a metodika

- 78 lekcí a 234 rozhodovacích úloh ve čtyřech samostatných výukových vstupech: lesnictví 48 lekcí, angličtina 12, komunikace a spolupráce IVP 12, organizace práce a pracovní evidence IVP 6. Lesnický vstup zahrnuje sedm odborných předmětů; program má celkem deset předmětů.
- Opravené přiřazení barev podle pokynu uživatelky: angličtina bordová, komunikace nebeská modrá; lesnická výuka zachovává původní lesní odstíny a zlaté akcenty. Každý předmět má vlastní přímou navigaci, přehled pokroku a souhrnné výstupy.
- Doplněny menší probírky v tyčovině a dospívající kmenovině, rozlišení vývojových fází, příprava motomanuální těžby, surové dříví, výřezy, sortimenty a technická péče.
- Angličtina obsahuje odborné pojmy podle dodaného školního slovníku, původní modelové dialogy, kvízy a vlastní dvojjazyčné výstupy. Čtení anglické věty používá hlas dostupný v prohlížeči.
- Samostatná komunikace vymezuje prostor pro výuku IVP: pokyn, spolupráce, různorodý tým, zpětná vazba, reflexe, plán a portfolio. Institucionální garance je návrh k potvrzení, nikoli dohodnutý závazek.
- Dotace podle dodané kontrolované metodiky: 320 VH po 45 minutách (240 hodin) + 360 hodin řízené praxe po 60 minutách = 600 hodin. Lesnické předměty 216 VH, angličtina 64 VH, komunikace IVP 24 VH, organizace práce a evidence IVP 16 VH. Roční průběh říjen 2027 až září 2028, 30 účastníků ve dvou skupinách po 15, 40 dnů a 20 dvoudenních bloků. Pracovní čeština je individuální podpora, nenahrazuje angličtinu. Jde o návrh, nikoli již schválený program.
- Přesné názvy pro inspiraci: 41-56-E/01 Lesnické práce; 41-56-H/01 Lesní mechanizátor; 41-55-H/01 Opravář zemědělských strojů; 41-56-H/02 Opravář lesnických strojů. Relevantní platná NSK: Mechanizátor/mechanizátorka pro pěstební činnost 41-022-H a Těžař/těžařka dříví motomanuální 41-090-H. Název „Operátor lesní výroby“ nebyl doložen jako přesná aktuální formální kvalifikace.
- Celkem 24 modelových misí, 13 souhrnných vazeb bloků a 20 pracovních karet povinných výkonů. Nový předmět využívá stávající ukládání, hodnocení a portfolio; doplňující mise IO01 se bezpečně doplní i do již uložené databáze.
- Zachovány původní autoritativní soubory 14 oblastí a 24 otevřených rozhodnutí. Interní registr ani pracovní zdroje nejsou součástí veřejného rozhraní/API. Licence fotografií se zachovávají.
- Souhrnná role L01 „Dohled nad vzděláváním LČR“ ukazuje agregace odděleně podle předmětů.
- Databáze, lokální klíče a klíč přihlášení prezentační verze jsou odděleny od původní ukázky.

## Ověření před nasazením

- TypeScript: PASS.
- Produkční sestavení Vite: PASS; původní klasický sql.js skript je dodán samostatně.
- Integrační testy po doplnění metodiky: 20 PASS / 0 FAIL; 125 obnovení a 123 uložení skutečné SQLite WASM databáze.
- Ověřeny původní i nové cykly odevzdání, hodnocení a portfolia; oddělený pokrok angličtiny a komunikace; jednorázové body; přílohy; atomická obnova po selhání ukládání; role LČR a dvě recenze učiva.
- Kontrolní součty původních podkladů: PASS.
- Živé ověření desktopového prohlížeče: PASS. Vstup A01, nativní přepínač A01/I01/L01, oddělené předměty, kvízy a výstupy A01/C01, zachování v IndexedDB po obnovení, přečtení vlastního výstupu u přiděleného instruktora, souhrnné ukazatele LČR a stažení JSON exportu, program a dotace. Barvy po opravě: angličtina bordová rgb(122,40,64); komunikace modrá rgb(25,107,145) na světlém modrém podkladu; lesnictví původní lesní a zlaté odstíny. Žádné rozbité obrázky ani vodorovné přetékání v testovaném desktopovém viewportu. Mobilní zařízení a dostupnost hlasu na jednotlivých platformách nebyly samostatně ověřeny.

## Provozní rozsah

Samostatný web funguje bez otevřeného ChatGPT Work. Jde o prezentační demonstraci s veřejně přepínatelnými syntetickými účty a místním úložištěm prohlížeče. Skutečný sdílený provoz vyžaduje osobní přihlášení, serverová oprávnění, společnou databázi, zálohy a potvrzené odborné i organizační podmínky. Online body ani dokončení lekcí nevydávají osvědčení praktické způsobilosti.

Nasazení samostatné verze: GitHub Pages workflow success, commit 6d804941bc0c8aaeff2bc33be13c5e54f041221c. Kontrola stromu: všech 230 původních souborů hlavní větve má původní SHA; přidána pouze složka prezentace/.

## Oprava barev 8. 10. 2026

Změna výhradně barev v kartách, navigaci, přehledech, blocích a lekcích. Obsah, účty a uložené výsledky se nemění. Nové sestavení a následná živá kontrola barev jsou součástí této opravy.

Ověření opravy: produkční build PASS; živé karty, navigace a nadpisy všech tří předmětů PASS. Angličtina rgb(122,40,64), komunikace rgb(25,107,145), lesnické karty původní lesní rgb(18,71,84) se zlatou rgb(183,150,80). Uložený pokrok 0/48, 1/12, 1/12 zůstal zachován. Nasazení b9735fbd94bc945ee675c8ca06f6dc7f582e15c7: GitHub Pages workflow success.

## Fotografie a kontrolovaná metodika 8. 10. 2026

- Sedm skutečných fotografií evropských lesů, obnovy, školkařského materiálu, oplocenky a dříví nahrazuje dekorativní generované ilustrace. Fotografie nepředstírají účastníky akademie ani pracoviště LČR. Autorství, původ, licence a úpravy rozměrů jsou uvedeny v photos/credits.html. Přesné výukové schéma sazenic a výsadby zůstává technickým SVG schématem.
- Přeneseny tabulky učebního plánu, ročního průběhu, praxe, 90minutové výsadby, D1–D6 a závěrečné zkoušky. Dodaný pracovní DOCX se nezveřejňuje.
- D1–D4: 8/10 znalostních odpovědí a všechny 3 bezpečnostní; povinné výkony dvakrát v různých dnech, druhé pozorování při dílčí zkoušce. Pět kritérií výkonu bez kritické chyby a bez navádění v rozhodujícím kroku; první pomoc má vlastní kartu.
- D5: 16/20 a tři pracovní rozhovory. D6: obě komunikační situace, příprava a úplná pracovní evidence.
- Závěrečná zkouška 180 minut: 30 znalosti, 120 praxe, 15 nový anglický rozhovor, 15 evidence a předání stejné praktické práce. Znalosti 16/20 a všech pět bezpečnostních. Vstup: D1–D6, 358 hodin praxe, alespoň 80 % skutečných minut každého předmětu a nahrazení povinné praxe. Dvě hodiny závěrečné praxe jsou započteny jednou do celkových 360 hodin. Dva opravné pokusy každé nesplněné části po přípravě; dodatečná příprava a opravy nad plán.
- Samostatná angličtina obsahuje vyhledávání 100 pojmů, 20 pracovních vět a procvičování významu. Organizace práce má šest plných lekcí, vlastní otázky, výstupy a ukazatele, ve stejné nebeské modré jako komunikace IVP.
- Zajištění, role partnerů, čtvrtletní kvalita, rozpočet bez smyšlených cen a rozhodnutí o prvním běhu jsou v části programu pro instruktory a dohled. Veřejné přepínání ukázkových rolí není ochranou důvěrných dat.
- TypeScript po poslední úpravě PASS, produkční build PASS, integrační testy 20 PASS. Následné nasazení a živá kontrola této obsahové aktualizace probíhají; předchozí živé výsledky výše patří předchozí verzi.
