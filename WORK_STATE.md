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
- Produkční Vite sestavení: PASS. Největší JavaScript má přibližně 401 kB; SQLite WASM se skládá ze tří místních částí.
- Integrační test skutečné služby a sql.js WASM: **14 PASS / 0 FAIL**, 75 obnovení databáze, 73 trvalých uložení do testovacího úložiště. Výsledky: `source/qa/pages-integration-results.json`.
- Ověřen celý D01 průchod: účastník → uložení → odevzdání → instruktor vrátí → oprava → potvrzení → portfolio se dvěma pokusy → IVP. Ověřeny jednorázové body, verze, přílohy a odmítnuté uložení bez ztráty předchozího stavu.
- Kontrolní součty: původních 14 oblastí a 24 otevřených požadavků zachováno beze změny.
- Kontrola veřejného sestavení na původní dokumenty, známé skutečné kontakty a přístupové údaje: PASS.
- **Browser QA: IN_PROGRESS.** Veřejná stránka se po rozdělení souborů načte a zobrazí výběr rolí. Při vstupu do účtu prohlížeč neposílá síťovou hlavičku Origin do místního adaptéru a služba vracela 403. Oprava zachovává kontrolu Origin pro serverovou variantu a místní požadavky spouští uvnitř prezentačního prohlížeče. Zbývá znovu nahrát sestavení a ověřit role i D01 v živém webu.

## Meze a další krok

Toto je veřejná prezentace se syntetickými údaji, nikoli bezpečný systém pro reálné studenty. Každý návštěvník má vlastní místní data. Role v klientu nejsou bezpečnostní hranicí. Body neudělují kompetenci ani oprávnění. Program vyžaduje odbornou recenzi a doplnění 24 otevřených rozhodnutí.

GitHub Pages je zapnutý pro `main` a `/ (root)`. První nasazení bylo nefunkční: nahrávací rozhraní zkrátilo soubory nad 600 kB. Živý JavaScript měl 600 062 místo 938 654 bajtů a prohlížeč hlásil syntaktickou chybu; SQLite WASM měl 600 060 místo 659 806 bajtů. Oprava rozdělila výstupní JavaScript do modulů nejvýše 401 kB a WASM do tří ověřeně spojených částí po přibližně 220 kB. Původní neúplné soubory se z publikace odstraní.

Po opravě: TypeScript PASS, produkční sestavení PASS, integrační test 14 PASS / 0 FAIL, 75 obnovení a 73 uložení. Živý prohlížečový průchod zatím **PENDING**; neoznačovat za dokončené, dokud role a D01 nebudou ověřené.

## Repozitář

Veřejný repozitář `anetava/lesnicka-akademie-demo` má povolený přístup připojené aplikace. Původní nahrání vytvořilo commit `bf63e9364195edcd0d31e8e7e6df179e092d1aa6`, ale tři cesty s velkými soubory mají jiné kontrolní součty než místní sestavení. Právě tyto cesty musí nahradit opravené menší soubory a po novém commitu je nutné porovnat SHA každé změněné cesty.
