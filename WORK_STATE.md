# Stav práce – veřejná prezentační ukázka

Aktualizace: 8. 10. 2026.

## Hotovo

- Samostatná prezentační kopie určená pro nový veřejný repozitář. Původní aplikace ani její data se nemění.
- Skutečné výukové rozhraní: 36 lekcí, 108 otázek, 36 vlastních výstupů, 17 modelových misí a 8 karet praxe.
- SQLite v prohlížeči, databáze a přílohy atomicky v IndexedDB. Aplikační kontroly jednotlivých rolí zachované, přepínání rolí záměrně veřejné pro předvádění.
- Hash navigace a cesty obrázků přizpůsobené GitHub Pages. Přílohy dostupné přes místní službu, výběrový export portfolia do souboru. Veřejné sdílení portfolia vypnuté.
- Viditelný návod pro předvádění a upozornění na místní ukládání. Upravena tvrzení o serveru a soukromém přístupu. Originální pracovní dokumenty a kontakty v balíčku nejsou.

## Doložené testy

- TypeScript: PASS.
- Produkční Vite sestavení: PASS. Nekritické upozornění na velikost hlavního JS balíčku (přibližně 939 kB, gzip 289 kB); SQLite WASM se načítá samostatně.
- Integrační test skutečné služby a sql.js WASM: **13 PASS / 0 FAIL**, 74 obnovení databáze, 72 trvalých uložení do testovacího úložiště. Výsledky: `source/qa/pages-integration-results.json`.
- Ověřen celý D01 průchod: účastník → uložení → odevzdání → instruktor vrátí → oprava → potvrzení → portfolio se dvěma pokusy → IVP. Ověřeny jednorázové body, verze, přílohy a odmítnuté uložení bez ztráty předchozího stavu.
- Kontrolní součty: původních 14 oblastí a 24 otevřených požadavků zachováno beze změny.
- Kontrola veřejného sestavení na původní dokumenty, známé skutečné kontakty a přístupové údaje: PASS.
- **Browser QA: NOT_RUN.** Cloudový prohlížeč se nedokázal připojit k místnímu náhledu. Test používá skutečný SQLite WASM a obnovuje data při každém požadavku, ale IndexedDB, Web Locks, vzhled a interakce v prohlížeči tím nejsou ověřené.

## Meze a další krok

Toto je veřejná prezentace se syntetickými údaji, nikoli bezpečný systém pro reálné studenty. Každý návštěvník má vlastní místní data. Role v klientu nejsou bezpečnostní hranicí. Body neudělují kompetenci ani oprávnění. Program vyžaduje odbornou recenzi a doplnění 24 otevřených rozhodnutí.

Statický balíček je připraven pro kořen větve main. Dostupnost veřejného webu zatím není potvrzena. Zbývá zapnout Settings → Pages → Deploy from a branch → main → / (root), počkat na úspěšné nasazení a ověřit skutečný web v prohlížeči.

## Pokus o nahrání na GitHub

GitHub potvrdil nový veřejný repozitář `anetava/lesnicka-akademie-demo` a oprávnění vlastníka účtu. První pokus připojené aplikace vytvořit soubor však odmítl HTTP 403 `Resource not accessible by integration`. Žádné soubory, stromy ani commity nebyly nahrány. Právo vlastníka účtu neznamená, že stejné právo má instalace aplikace. Přístup je potřeba zkontrolovat u instalace ChatGPT/Codex a povolit konkrétní nový repozitář; pokud je již povolený, zkontrolovat udělená oprávnění aplikace. Po odstranění překážky navázat nahráním připraveného balíčku. Nasazení není dokončené.
