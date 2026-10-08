# Lesnická akademie – samostatná prezentační verze

Aktualizace: 8. 10. 2026. Původní základ: d45f483d707a06dad7b40a7b1da313328ded75eb.
Zdrojová větev: prezentace-odborne-upravy-20261008.
Cíl nasazení: https://anetava.github.io/lesnicka-akademie-demo/prezentace/
Původní aplikace v kořenové složce se zachovává; nová sestava je v samostatné složce prezentace/.

## Obsah a metodika

- 72 lekcí a 216 rozhodovacích úloh ve třech samostatných předmětech: lesnictví 48 lekcí, angličtina 12, komunikace a profesní dovednosti 12.
- Lesnická výuka je označena bordovou, angličtina a komunikace nebeskou modrou. Každý předmět má vlastní přímou navigaci, přehled pokroku a souhrnné výstupy.
- Doplněny menší probírky v tyčovině a dospívající kmenovině, rozlišení vývojových fází, příprava motomanuální těžby, surové dříví, výřezy, sortimenty a technická péče.
- Angličtina obsahuje odborné pojmy podle dodaného školního slovníku, původní modelové dialogy, kvízy a vlastní dvojjazyčné výstupy. Čtení anglické věty používá hlas dostupný v prohlížeči.
- Samostatná komunikace vymezuje prostor pro výuku IVP: pokyn, spolupráce, různorodý tým, zpětná vazba, reflexe, plán a portfolio. Institucionální garance je návrh k potvrzení, nikoli dohodnutý závazek.
- Časová dotace je autorský návrh: 180 hodin lesnictví, 24 angličtiny, 24 komunikace a 12 závěrečného ověření; celkem 240 vyučovacích hodin po 45 minutách. Doplňková pracovní čeština 0–24 hodin podle individuálního zjištění. Nejde o dotaci celého učebního oboru.
- Přesné názvy pro inspiraci: 41-56-E/01 Lesnické práce; 41-56-H/01 Lesní mechanizátor; 41-55-H/01 Opravář zemědělských strojů; 41-56-H/02 Opravář lesnických strojů. Relevantní platná NSK: Mechanizátor/mechanizátorka pro pěstební činnost 41-022-H a Těžař/těžařka dříví motomanuální 41-090-H. Název „Operátor lesní výroby“ nebyl doložen jako přesná aktuální formální kvalifikace.
- Celkem 23 modelových misí, 12 souhrnných vazeb bloků; nový předmět využívá stávající ukládání, hodnocení a portfolio.
- Zachovány původní autoritativní soubory 14 oblastí a 24 otevřených rozhodnutí. Interní registr ani pracovní zdroje nejsou součástí veřejného rozhraní/API. Licence fotografií se zachovávají.
- Souhrnná role L01 „Dohled nad vzděláváním LČR“ ukazuje agregace odděleně podle předmětů.
- Databáze, lokální klíče a klíč přihlášení prezentační verze jsou odděleny od původní ukázky.

## Ověření před nasazením

- TypeScript: PASS.
- Produkční sestavení Vite: PASS; původní klasický sql.js skript je dodán samostatně.
- Integrační testy: 18 PASS / 0 FAIL; 116 obnovení a 114 uložení skutečné SQLite WASM databáze.
- Ověřeny původní i nové cykly odevzdání, hodnocení a portfolia; oddělený pokrok angličtiny a komunikace; jednorázové body; přílohy; atomická obnova po selhání ukládání; role LČR a dvě recenze učiva.
- Kontrolní součty původních podkladů: PASS.
- Živé ověření prohlížeče: čeká na dokončení samostatného nasazení; zatím není označeno PASS.

## Provozní rozsah

Samostatný web funguje bez otevřeného ChatGPT Work. Jde o prezentační demonstraci s veřejně přepínatelnými syntetickými účty a místním úložištěm prohlížeče. Skutečný sdílený provoz vyžaduje osobní přihlášení, serverová oprávnění, společnou databázi, zálohy a potvrzené odborné i organizační podmínky. Online body ani dokončení lekcí nevydávají osvědčení praktické způsobilosti.
