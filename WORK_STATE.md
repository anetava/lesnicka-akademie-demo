# Lesnická akademie - oddělená prezentační revize

Aktualizace: 8. 10. 2026. Základ: `d45f483d707a06dad7b40a7b1da313328ded75eb`.
Větev: `prezentace-odborne-upravy-20261008`. Hlavní větev a zveřejněná aplikace nebyly touto revizí změněny.

## Připravené změny

- Profesní česká terminologie v 36 lekcích, 10 odborných misích, šesti komunikačních misích, pracovních kartách a průvodcích. Zachováno 108 rozhodovacích otázek a 36 výstupů. Doplněn slovník 30 pojmů s anglickými ekvivalenty podle dodaného studijního slovníku.
- Původní autoritativní profil 14 oblastí je beze změny. Prezentační znění používá samostatný odvozený profil.
- Veřejná navigace ani API neobsahují registr 24 otevřených otázek. Původní soubor zůstává zachován a žádná odpověď nebyla označena za schválenou. Samostatný interní registr byl předán uživatelce mimo aplikaci.
- Z výuky a prezentačních pohledů odstraněny pracovní zdroje a zmínky osobních jmen. Povinné licence fotografií jsou zachovány.
- Role L01 otevírá „Dohled nad vzděláváním LČR“ s agregovanými ukazateli a exportem. Nezobrazuje jednotlivé odpovědi ani jmenné hodnocení.
- Přímý přepínač všech demonstračních účtů v záhlaví a přepínací dialog pro užší obrazovky.
- Samostatný název databáze IndexedDB chrání původní ukázkové záznamy. Relativní cesty umožňují oddělené umístění aplikace.
- Opravena recenze změněného odborného učiva po skrytí zdrojů. Odborná a didaktická recenze zůstávají povinné před zveřejněním verze uvnitř demonstrace.
- Vytvořena osmistránková prezentační PDF příloha a nabídka „Akademie pro odborníky z praxe - efektivní učení v éře AI“. Soubor neobsahuje osobní jména ani interní citace. AI není v demonstraci zapojena.

## Ověření

- TypeScript: PASS.
- Produkční sestavení Vite: PASS. Skript sql.js se dodává jako samostatná původní veřejná součást; upozornění Vite o klasickém skriptu není chybou sestavení.
- Integrační testy: **17 PASS / 0 FAIL**, 95 obnovení databáze, 93 uložení. Testuje se skutečný SQLite WASM a aplikační služba s obnovením uloženého stavu při každém požadavku.
- Ověřen cyklus odevzdání, vrácení, opravy, potvrzení a portfolia; jednorázové body; přílohy; atomicita neúspěšného uložení; souhrnná role LČR a dvojstupňová recenze učiva bez zdrojů.
- Kontrolní součty původních 14 oblastí a 24 otevřených otázek: PASS.
- Textová kontrola sestavení na Aneta, Radka, otevřený registr, interní vlastníky a značky S1/S2: žádný výskyt.
- PDF: 8 stran, všechny vizuálně ověřeny po renderování; pokryto 24 původních témat. Stavy v PDF neznamenají provozní schválení.
- **Browser QA: NOT RUN.** Cloudový prohlížeč nedosáhne na lokální náhled (ERR_CONNECTION_REFUSED). Místní browser runtime není instalován. Rozvržení, nativní IndexedDB, přepínač účtů v DOM, mobilní zobrazení a stahování vyžadují navazující test na samostatném povoleném náhledu. Žádný takový test není označen PASS.

## Zbývá před skutečným provozem

Bezpečné osobní přihlášení a serverové role, sdílená databáze pro různá zařízení, zálohování, správa skutečných účastníků, odborné schválení programu a praktických kritérií, provozní odpovědnosti a dohoda k dosud otevřeným otázkám. Současná role L01 je veřejně přepínatelná demonstrační role, nikoli soukromý účet vedení.

Zveřejnění upravené verze zatím není provedeno. Další krok: uživatelka posoudí přílohu a rozsah změn; samostatné nasazení a živé ověření se provede až podle jejího navazujícího pokynu. Původní veřejná ukázka se zachová.
