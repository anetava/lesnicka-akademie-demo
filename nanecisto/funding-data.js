// Research snapshot, not a live grant feed. Facts are linked to their official sources.
export const verifiedAt = '2026-10-11';
export const statusLabels = {open:'Otevřeno',planned:'Připravuje se',watch:'Sledovat další kolo',paused:'Relevantní část pozastavena',closed:'Uzavřeno'};
export const roleLabels = {school:'Škola / organizace pro mládež',university:'VŠ / výzkumná organizace',company:'Firma',region:'Kraj / inovační centrum'};
export const grants = [
  {
    "id": "v4-gen",
    "title": "V4 Gen Mini Grants",
    "tag": "Mobilita a pilot pro mladé KPV / UPV",
    "status": "open",
    "fit": "now",
    "roles": [
      "school",
      "university"
    ],
    "reviewedAt": "2026-10-12",
    "amount": "Až 10 000 €; ČR + SR nejvýše 50 €/osoba/den",
    "deadline": "Koncept 1. 11. 2026 ve 12:00; úplná žádost 15. 11. ve 12:00 CET",
    "closes": "2026-11-15",
    "summary": "Reálná cesta pro česko-slovenský pilot Nanečisto, pokud studenti skutečně cestují a společně pracují. Může zahrnout i mladé studenty KPV a UPV.",
    "applicant": "Právnická osoba pracující s mládeží z V4 nebo Ukrajiny, nejméně dvě organizace ze dvou těchto zemí. Pro IVP navrhujeme žadatele ČZU a slovenskou partnerskou instituci; institucionální souhlas není potvrzen. Mladí účastníci musí mít 12–30 let. Starší mohou být doprovodem, nikoli mládežnickou cílovou skupinou. Ukrajina není povinná.",
    "use": "Náš návrh na plných 10 000 €: 48 studentů a tři realizátorky při čtyřech skutečných společných dnech 19.–22. dubna 2027 v Praze. Jedna výuková struktura se dvěma profesními variantami, dva přípravné případy a jeden případ denně. Vše včetně administrace a přiměřené evaluace zajistí Aneta, Radka a slovenská kolegyně. Realizace 15. března – 9. května 2027, bez následného T2. Partner, kapacita a ceny se musí potvrdit.",
    "limit": "Vyžaduje fyzickou přeshraniční mobilitu, společnou akci a veřejnou prezentaci. Koncept je v angličtině; plná žádost se zpřístupní po jeho přijetí. Nejvýše tři akce, každé do sedmi dní, realizace nejvýše sedm měsíců. Samostatný vývoj webu hlavní účel nenaplňuje.",
    "next": "Do 20. října (náš pracovní cíl) potvrdit institucionálního žadatele, slovenského partnera, věk a účast, hostitele a termín. Prověřit, zda ČZU nemá právě běžící V4 Gen projekt a jinou žádost na tuto uzávěrku. Koncept odeslat s rezervou před 1. listopadem.",
    "financeDetails": [
      {
        "title": "Plná žádost a skutečné osobodny",
        "text": "48 studentů + 3 skutečné doprovázející realizátorky × 4 společné dny × nejvýše 50 € = 10 200 €; navržená žádost je zastropována na 10 000 €. Cestovní den bez společného programu a nepřítomní náhradníci osobodny nepřidávají. Finanční započítání online dnů není potvrzené, proto je v této žádosti nepočítáme. Podpora a vypořádání nejsou garantovány."
      },
      {
        "title": "Rozpočet a peněžní tok",
        "text": "Navržených 10 000 €: doprava 1 500 €, ubytování 3 000 €, strava 2 300 €, materiály a tisk 200 €, interní práce všech tří včetně administrace 2 000 €, podmíněný licenční rámec 1 000 €. Ceny nejsou ověřené nabídky. Při plném grantu 8 000 € po smlouvě a až 2 000 € po schváleném vykázání; překlenovací kapacita k potvrzení."
      },
      {
        "title": "Odměny a placený nástroj",
        "text": "Navržené interní alokace jsou Aneta 800 €, Radka 600 € a kolegyně SR 600 €, celkové osobní náklady včetně administrace, nikoli čisté odměny. Odhad práce je 80/60/60 hodin; částky nejsou ověřenou sazbou ani doloženou úplnou cenou práce. Celkem 20 % žádosti otevřeně odůvodňujeme rozsahem tříčlenného týmu nad doporučením 15 %. Jiný 50 % limit pro odborné služby toto rozdělení nepotvrzuje. Licence 1 000 € je podmíněný rámec na potřebná dodatečná institucionální práva; vyžaduje nabídku, ověření vlastníka a ceny i nezávislé posouzení. Nejde o platbu za bezplatné demo, minulý vývoj nebo automatický příjem Anety. Stejná práce se neúčtuje dvakrát."
      }
    ],
    "sources": [
      [
        "Aktuální podzimní kolo 2026 a termíny",
        "https://www.visegradfund.org/v4-gen-apply"
      ],
      [
        "FAQ: věk, partneři a zpřístupnění žádosti",
        "https://www.visegradfund.org/faq-v4-gen"
      ],
      [
        "Platby a realizace",
        "https://www.visegradfund.org/v4-gen-implement"
      ],
      [
        "Pravidla odkazovaná u aktuální výzvy (PDF, označená 2025)",
        "https://www.visegradfund.org/api/download?name=V4-GEN-Mini-Grants-Guidelines.pdf&url=https%3A%2F%2Fdata.eu.cntmbr.com%2Fvisegrad%2Fvisegrad%2F52a1b183-2567-4ecf-bd74-f137942cda5d.pdf"
      ],
      [
        "MŠMT: časové pásmo listopadové uzávěrky",
        "https://msmt.gov.cz/eu-a-zahranici/stipendijni-pobyty-v-zahranici/mezinarodni-visegradsky-fond"
      ]
    ]
  },
  {
    id:'pedagogicky-vyzkum',title:'OP JAK · Pedagogický výzkum',tag:'Výzkumná cesta přes ČZU',status:'planned',fit:'now',roles:['university','school'],
    amount:'Limit projektu dosud nezveřejněn',deadline:'Plán: listopad 2026 – únor 2027; přesné dny nejsou potvrzené',
    summary:'Nejlepší tematická shoda pro seriózní ověření, zda krátké profesní simulace zlepšují porozumění práci a přípravu na praxi.',
    applicant:'Harmonogram uvádí VŠ, Centrum pro zjišťování výsledků vzdělávání a NNO. ČZU je možná institucionální cesta, nikoli potvrzený partner.',
    use:'Náš návrh: porovnat simulaci s běžnou přípravou, měřit porozumění profesi a přenos do praxe. Výzkumnou otázku i metodiku musí vést odborný tým.',
    limit:'Jde zatím o plánovanou výzvu 02_24_033. Zářijový harmonogram uvádí celkovou alokaci 155 mil. Kč; to není rozpočet jednoho projektu. Úplná pravidla je nutné vyčkat.',
    next:'S grantovým oddělením ČZU určit odborného garanta, vlastnictví dosavadního prototypu a výzkumný záměr. Připravit stručný návrh, rozpočet až podle výzvy.',
    sources:[['Aktuální harmonogram OP JAK','https://opjak.cz/harmonogram-vyzev/'],['Harmonogram 2026, verze 3 z 18. 9. 2026 (PDF)','https://opjak.cz/wp-content/uploads/2026/09/Harmonogram-vyzev-2026_v3.pdf']]
  },
  {
    id:'smart-akcelerator',title:'OP JAK · Smart Akcelerátor+ II',tag:'Cesta podobná VR Profilab',status:'open',fit:'now',roles:['region','university','school','company'],
    amount:'Podíl na krajském pilotu: podle dohody',deadline:'Žádost kraje do 1. 3. 2027',closes:'2027-03-01',
    summary:'Nejbližší obdoba financování z přílohy: nabídnout Nanečisto jako regionální pilot kariérového vzdělávání.',
    applicant:'Přímo žádají pouze kraje včetně Prahy. Škola, univerzita nebo firma může mít roli partnera v příslušných aktivitách, nikoli samostatného žadatele této výzvy.',
    use:'Aktivita Pilotní ověření: nový nebo podstatně inovovaný regionální nástroj. Náš návrh propojuje školy, hotely, profesní scénáře a vyhodnocení přínosu.',
    limit:'Nutný soulad s krajskou strategií, schválení krajskou radou pro inovace a plán dalšího fungování. Už běžící krajský projekt nemusí mít volnou kapacitu ani rozpočet.',
    next:'Plzeň: konzultovat RRA a návaznost na již vybraný pilot EDU-INOVACE 2030+ se ZČU. Praha: konzultovat Pii. Nežádat obecně o peníze; přinést konkrétní regionální problém a pilot.',
    sources:[['Výzva 02_25_042','https://opjak.cz/vyzvy/vyzva-c-02_25_042-smart-akcelerator-ii/'],['Specifická pravidla, verze 2 (PDF)','https://opjak.cz/wp-content/uploads/2026/07/SPpZP_Smart_Akcelerator_plus_II_v2_web.pdf'],['Plzeňský Smart Akcelerátor a kontakty','https://www.getsmart.cz/smart-akcelerator/'],['Projekty Pražského inovačního institutu','https://prazskyinovacniinstitut.cz/projekty']]
  },
  {
    id:'poradim-ai',title:'OP JAK · Poradím se s AI',tag:'Navázat na záměr přes ČZU',status:'open',fit:'now',roles:['university','school'],
    amount:'2–15 mil. Kč způsobilých výdajů',deadline:'30. 12. 2026 ve 14:00',closes:'2026-12-30',
    summary:'Možná součást širšího vzdělávacího projektu, pokud řeší skutečnou potřebu výuky s AI. Současná ukázka Nanečisto živou AI nepoužívá.',
    applicant:'Oprávněná instituce podle výzvy; nejméně dva roky existence a doložitelné vzdělávací aktivity s AI v roce 2025. Nový startup nemá automaticky nárok.',
    use:'Vývoj nástroje v aktivitě 9 musí navazovat na aktivity 2–7, být odůvodněný a ověřený v praxi. Vývoj nesmí převážit nad vzděláváním.',
    limit:'Metodický dopis z 29. 9. 2026 vyžaduje otevřenou licenci pro vytvořený nebo aktualizovaný software. Nestačí přidat AI jen kvůli dotaci; musí se doložit nedostatečnost existujících řešení.',
    next:'V připravovaném institucionálním záměru vyjasnit roli Nanečisto, rozpočet a licencování. Podmínky konzultovat s grantovým oddělením a na aivyzva@msmt.gov.cz.',
    sources:[['Výzva a aktuální dokumenty','https://opjak.cz/vyzvy/vyzva-c-02_26_048-poradim-se-s-ai/'],['Text výzvy, verze 2 (PDF)','https://opjak.cz/wp-content/uploads/2026/07/Vyzva_Poradim-se-s-AI_v2_web.pdf'],['Specifická pravidla (PDF)','https://opjak.cz/wp-content/uploads/2026/07/PpZP_specificka_cast_vyzva_Poradim_se_s_AI_verze-2_web.pdf'],['Metodický dopis 2: otevřené licence (PDF)','https://opjak.cz/wp-content/uploads/2026/09/MD_2_k_SPpZP_Poradim_se_s_AI_verze_2_web-1.pdf']]
  },
  {
    "id": "sic-transfer",
    "title": "SIC · Transferové vouchery V",
    "tag": "Podmíněná cesta přes výzkumnou organizaci",
    "status": "open",
    "fit": "now",
    "roles": [
      "university"
    ],
    "reviewedAt": "2026-10-12",
    "amount": "100–500 tis. Kč; nejvýše 80 % způsobilých výdajů",
    "deadline": "30. 11. 2026 ve 23:59; příjem od 6. 10.",
    "closes": "2026-11-30",
    "summary": "Otevřená výzva, ale způsobilost Nanečisto není potvrzena. Rozhoduje skutečný výzkumný výsledek, tržní ověření a realizace v prostorách žadatele ve Středočeském kraji.",
    "applicant": "Veřejná nebo soukromá výzkumná organizace s regionálním sídlem či pracovištěm, vedená v seznamu MŠMT nebo dokládající definiční znaky výzkumné organizace. Konkrétní projekt musí probíhat v jejích prostorách ve Středočeském kraji. Pražské IVP ani regionální partnerská škola samy tuto podmínku nedokládají; způsobilé místo realizace ČZU musí být potvrzeno.",
    "use": "Náš podmíněný návrh: posun vlastního aplikovaného výzkumného výsledku instituce — například ověřované didaktické metodiky a jejího simulátoru — k licencování a využití dalšími školami. Doložit, co je výzkumný výsledek, komu patří a co nového se má ověřit. Funkční a pěkný web sám o sobě tyto důkazy nenahrazuje.",
    "limit": "TRL 3–7 a CRL 4–7; cílem je posun alespoň o stupeň na obou škálách. Povinná vstupní konzultace a tržní validace včetně jednání alespoň s pěti potenciálními zájemci. Podpora je v de minimis. Nelze financovat smluvní výzkum zadaný externím partnerem. Hodnocení je kolové, ne podle rychlosti podání.",
    "next": "Nejdříve s ČZU vyjasnit vlastníka výzkumného výsledku a reálné regionální pracoviště. Potom povinná konzultace s Janou Kolomazníkovou (kolomaznikova@s-ic.cz) k vhodnosti projektu, TRL/CRL, podmínkám a správným přílohám. Bez těchto potvrzení podporu nezapočítávat jako očekávaný příjem.",
    "financeDetails": [
      {
        "title": "Rozpočet a peněžní tok",
        "text": "Ilustrační maximum: 625 000 Kč způsobilých výdajů = 500 000 Kč podpory + nejméně 125 000 Kč vlastních zdrojů. 50 % schválené podpory se vyplácí po podpisu; u tohoto příkladu 250 000 Kč. Doplatek až po dokončení a schválení. Vedle spoluúčasti je tedy nutné zajistit průběžné financování. Celková alokace výzvy je 2,5 mil. Kč; zbývající část ani schválení našeho projektu nejsou potvrzeny."
      },
      {
        "title": "Způsobilé náklady a období",
        "text": "Neinvestiční výdaje na VaV, ochranu duševního vlastnictví a externí služby. Mzdy nejvýše 30 % způsobilých výdajů a zároveň 150 000 Kč. Cestovné, režie a investice jsou nezpůsobilé. Realizace nejvýše osm měsíců, nejdříve od 6. 10. 2026, konec nejpozději 30. 9. 2027. Aktivity dokončené před otevřením výzvy a duplicitně veřejně financované aktivity nelze hradit. Přesný rozpočet, DPH a kapacitu de minimis ověřit za celou instituci."
      },
      {
        "title": "Zjištěný rozpor v oficiální příloze",
        "text": "Při kontrole 12. 10. 2026 aktuálně odkazovaná příloha 3 XLSX stále uváděla zahájení od 1. 10. 2025, konec 30. 9. 2026 a sedm měsíců. Program V uvádí 2026–2027 a osm měsíců. Jde o rozpor v publikovaných podkladech; před podáním vyžádat opravenou šablonu a aktuální vzor smlouvy. Staré termíny nepřebírat."
      }
    ],
    "sources": [
      [
        "Aktuální výzva V, konzultace a formulář",
        "https://s-ic.cz/sluzby/transferove-vouchery/"
      ],
      [
        "Úplný program V (DOCX): místo realizace, výdaje a platby",
        "https://s-ic.cz/wp-content/uploads/2026/10/program-transferove-vouchery-v.-vyzva_final_1791232045_8g017smlksdy.docx"
      ],
      [
        "Rozpočtová příloha 3 (XLSX): při kontrole obsahuje staré termíny",
        "https://s-ic.cz/wp-content/uploads/2026/10/03_priloha-c.-3-harmonogram-aktivit-a-rozpocet-projektu-transferove-vouchery_1791232043_lpzgbpe9m9os.xlsx"
      ]
    ]
  },
  {
    id:'inovacni-vouchery',title:'OP TAK · Inovační vouchery IV',tag:'Firma nakupuje výzkumnou službu',status:'open',fit:'now',roles:['company','university'],
    amount:'Dotace 75 tis.–1,5 mil. Kč při 75 %',deadline:'30. 4. 2027 v 16:00',closes:'2027-04-30',
    summary:'Konkrétní možnost pro zavedenější malou firmu, která potřebuje externí odborné testování nebo vývoj.',
    applicant:'MSP s alespoň dvěma uzavřenými zdaňovacími obdobími. Skutečné místo realizace mimo Prahu; samotné pražské sídlo není rozhodující.',
    use:'Nákup odborných inovačních služeb od výzkumné organizace nebo akreditovaného subjektu. Návrh: validace metodiky, odborné testování či vývoj konkrétní části.',
    limit:'100 tis.–2 mil. Kč jsou způsobilé výdaje, nikoli výše dotace; uvedená dotace je výpočet 75 %. Nejde o volný rozpočet na vlastní mzdy a marketing.',
    next:'Ověřit historii firmy, místo realizace a přípustného dodavatele. Připravit zadání a nabídku externí výzkumné služby; nezakládat fiktivní regionální pracoviště.',
    sources:[['Aktuální detail API','https://apiagentura.gov.cz/podporovane-aktivity-optak/inovacni-vouchery-optak/inovacni-vouchery-vyzva-iv/'],['Text výzvy (PDF)','https://apiagentura.gov.cz/wp-content/uploads/2025/03/inovacni-vouchery-vyzva-iv.pdf']]
  },
  {
    id:'eurostars',title:'Eurostars · Call 12',tag:'Další fáze: mezinárodní výzkum a vývoj',status:'planned',fit:'later',roles:['company','university'],
    amount:'Český finanční strop zatím nepotvrzen',deadline:'17. 12. 2026 – 4. 3. 2027 ve 14:00 CET',closes:'2027-03-04',
    summary:'Budoucí cesta pro firmu s vlastním výzkumným problémem a zahraničním technologickým partnerem.',
    applicant:'Projekt vede inovativní MSP. Alespoň dvě nezávislé organizace ze dvou způsobilých zemí. Český hlavní uchazeč musí být MSP; univerzita může být partnerem.',
    use:'Náš příklad: výzkum a ověření nového způsobu adaptivního tréninku. Překlad českých scénářů do jiného jazyka sám o sobě není mezinárodní VaV.',
    limit:'Zveřejněné národní informace se ještě mohou měnit. Českou podporu a limity Call 12 je nutné potvrdit u TA ČR; nepřebírat částky z minulých kol.',
    next:'Po prvním pilotu vymezit technickou novost, nejistotu a zahraničního partnera. Konzultovat národní způsobilost před tvorbou velké žádosti.',
    sources:[['Call 12 a národní podmínky','https://www.eurekanetwork.org/programmes-and-calls/eurostars/eurostars-call-12-for-projects-deadline-march-2027/']]
  },
  {
    id:'erasmus-small',title:'Erasmus+ · KA210',tag:'Malé partnerství škol',status:'watch',fit:'later',roles:['school','university','company'],
    amount:'30 000 nebo 60 000 € na celý projekt',deadline:'Rok 2026 uzavřen; termín 2027 dosud neověřen',
    summary:'Dobrá obsahová shoda pro společné profesní scénáře a metodiku se zahraniční školou. Pro hotelové odborné školy posoudit KA210-VET.',
    applicant:'Nejméně dvě organizace ze dvou programových zemí. Způsobilé mohou být veřejné i soukromé organizace; projekt musí odpovídat danému sektoru vzdělávání.',
    use:'Spolupráce, společné vzdělávací výstupy a jejich ověření. Délka 6–24 měsíců.',
    limit:'Hlavní termín 2026 byl 5. března. Přesný termín 2027 v ověřených podkladech není potvrzen; nelze ho odvodit z minulého roku. Výstupy a licence řešit podle pravidel programu.',
    next:'S DZS zvolit správný sektor a začít sestavovat malý česko-slovenský tým. Žádost připravit až podle výzvy 2027.',
    sources:[['Oficiální pravidla malých partnerství','https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-2/small-scale-partnerships'],['Česká národní agentura DZS','https://www.dzs.cz/']]
  },
  {
    id:'erasmus-large',title:'Erasmus+ · KA220',tag:'Větší spolupráce po pilotu',status:'watch',fit:'later',roles:['school','university','company'],
    amount:'120 000 / 250 000 / 400 000 €',deadline:'Rok 2026 uzavřen; termín 2027 dosud neověřen',
    summary:'Až po ověření zájmu: společný soubor profesních simulací, metodika učitelů a srovnání výsledků ve více zemích.',
    applicant:'Nejméně tři organizace ze tří programových zemí. Koordinátor musí právně existovat alespoň dva roky; nová firma může zvažovat partnerskou roli.',
    use:'Kooperační partnerství na 12–36 měsíců. Uvedené částky jsou paušály pro celý projekt, nikoli pro jednu aplikaci nebo partnera.',
    limit:'Hlavní termín 2026 byl 5. března. Pro nový projekt nemáme potvrzený termín 2027. Potřebné je skutečné konsorcium a práce v zemích partnerů.',
    next:'Nejprve malý pilot a partnerství KA210. KA220 připravovat, až budou doložené potřeby škol a kapacita koordinátora.',
    sources:[['Oficiální pravidla kooperačních partnerství','https://erasmus-plus.ec.europa.eu/programme-guide/part-b/key-action-2/cooperation-partnerships']]
  },
  {
    id:'praxe-zivot',title:'OP JAK · Vzdělávání pro praxi a život',tag:'Možná pozdější větev celoživotního vzdělávání',status:'planned',fit:'later',roles:['university'],
    amount:'Limit projektu dosud nezveřejněn',deadline:'Plán: příjem prosinec 2026 – duben 2027',
    summary:'Smysluplné pro univerzitní celoživotní vzdělávání, pokud vznikne skutečná verze pro tuto cílovou skupinu.',
    applicant:'Vysoké školy. Plánovaná výzva 02_25_044 zahrnuje CŽV, univerzity třetího věku a dětské univerzity.',
    use:'Náš možný směr: profesní orientace v rámci univerzitních vzdělávacích programů.',
    limit:'Vyhlášení je plánované na listopad 2026. Není to přímá dotace na soukromý školní startup; podmínky a přesné dny teprve čekáme.',
    next:'Předběžně posoudit s ČZU, zda existuje skutečná potřeba v CŽV. Neměnit cílovou skupinu jen kvůli grantu.',
    sources:[['Harmonogram 2026, verze 3 (PDF)','https://opjak.cz/wp-content/uploads/2026/09/Harmonogram-vyzev-2026_v3.pdf']]
  },
  {
    id:'visegrad',title:'Visegrad Grants',tag:'Regionální vzdělávací spolupráce',status:'watch',fit:'later',roles:['school','university','company'],
    amount:'Obvykle 25–35 tis. €; nejde o pevný strop',deadline:'Poslední termín 1. 10. 2026 již uplynul',
    summary:'Možnost pro společné vzdělávací aktivity s širším dopadem ve V4; odlišný program od V4 Gen.',
    applicant:'Zpravidla organizace z alespoň tří zemí V4. Dvoustranná výjimka je určena místní přeshraniční spolupráci do 40 km od hranice.',
    use:'Návrh: školy v ČR, SR a Polsku společně vytvoří a ověří profesní scénáře. Projekty mohou trvat nejvýše 18 měsíců.',
    limit:'Další konkrétní termín 2027 zatím nepotvrzen. Fond může pokrýt až 100 % rozpočtu; výši a uznatelnost nelze garantovat před posouzením.',
    next:'Sledovat nový kalendář a připravit věcný přínos spolupráce tří zemí.',
    sources:[['Visegrad Grants: pravidla a termíny','https://www.visegradfund.org/visegrad-grants-apply']]
  },
  {
    id:'interreg-bavaria',title:'Interreg · Česko–Bavorsko',tag:'Regionální spolupráce škol',status:'watch',fit:'later',roles:['school','university','region'],
    amount:'Rozpočet podle konkrétního projektu',deadline:'Poslední ověřený termín 18. 8. 2026; další nepotvrzen',
    summary:'Relevantní pro školu v Plzeňském kraji a bavorského partnera, pokud řeší společnou přeshraniční potřebu.',
    applicant:'Vhodné instituce z podporovaného území; v ČR Plzeňský, Karlovarský a Jihočeský kraj. Českou firmu nelze automaticky považovat za oprávněného příjemce.',
    use:'Náš návrh: společná příprava žáků na práci v cestovním ruchu a přeshraniční praxe, s Nanečisto jako dílčím nástrojem.',
    limit:'Potřebný český i bavorský partner, společná příprava a realizace. Není to grant na samostatný pražský produkt.',
    next:'Konzultovat vzdělávací prioritu s programovým sekretariátem a ověřit další příjem před přípravou rozpočtu.',
    sources:[['Podávání žádostí a oprávnění příjemci','https://www.by-cz.eu/cs/podpora-z-programu/podavani-zadosti/']]
  },
  {
    id:'interreg-saxony',title:'Interreg · Česko–Sasko',tag:'Pozor na pozastavené školní projekty',status:'paused',fit:'later',roles:['school','university','region'],
    amount:'Pro školní záměr nyní neplánovat',deadline:'Opatření M3.2 je při kontrole pozastavené',
    summary:'Termín 13. října v obecném kalendáři není automaticky příležitostí pro náš školní projekt.',
    applicant:'Příslušné instituce v podporovaném území, v ČR zejména Karlovarský, Ústecký a Liberecký kraj, se saským partnerem.',
    use:'Případná budoucí spolupráce ve školním a mimoškolním vzdělávání.',
    limit:'Relevantní opatření M3.2 nepřijímá žádosti. Termíny ostatních opatření nesmějí být vydávány za otevřenou školní výzvu.',
    next:'Sledovat výslovné obnovení M3.2. Do té doby tento program nezapočítávat do finančního plánu.',
    sources:[['Aktuální programové informace Karlovarského kraje','https://www.kr-karlovarsky.cz/temata/rozvoj-regionu-uzemni-planovani/preshranicni-nadnarodni-spoluprace/program-preshranicni-spoluprace-ceska-republika-svobodny-stat-sasko']]
  },
  {
    id:'interreg-austria',title:'Interreg · Rakousko–Česko',tag:'Pouze se skutečným regionálním přínosem',status:'watch',fit:'later',roles:['school','university','region'],
    amount:'Podle projektu a podmínek programu',deadline:'Poslední termín 30. 9. 2026; další nepotvrzen',
    summary:'Možnost pro vzdělávací spolupráci s rakouskou školou a přínosem pro česko-rakouské programové území.',
    applicant:'Relevantní české regiony: Jihočeský, Jihomoravský kraj a Vysočina. Partner mimo území musí doložit přínos pro programové území.',
    use:'Náš návrh: společné profesní scénáře pro regionální školy a turismus.',
    limit:'Nestačí zahraniční inspirace. Nutná skutečná přeshraniční spolupráce; další příjem není potvrzen.',
    next:'Zařadit až při existujícím regionálním a rakouském partnerovi.',
    sources:[['Oficiální termíny programu','https://interreg.at-cz.eu/cz/terminy/predkladani-a-schvalovani-projektovych-zadosti'],['Podmínky a FAQ','https://interreg.at-cz.eu/cz/faq/zadost']]
  },
  {
    id:'spencer',title:'Spencer · Small Research Grants',tag:'Výzkum účinku, nikoli vývoj aplikace',status:'watch',fit:'later',roles:['university'],
    amount:'Až 50 000 USD; bez režijních nákladů',deadline:'Uzavřeno; další termín nezveřejněn',
    summary:'Zahraniční nadační cesta pro nezávislý výzkum vzdělávání vedený kvalifikovaným akademickým týmem.',
    applicant:'Hlavní výzkumník a spoluhlavní výzkumníci s dokončeným doktorátem; grant spravuje nezisková či veřejná instituce. Mohou žádat i mimo USA.',
    use:'Náš příklad: studie, jak zpětná vazba v profesních simulacích ovlivňuje učení. Projekt 1–5 let.',
    limit:'Vývoj softwaru je výslovně nezpůsobilý. Nejde o zahraniční grant na postavení Nanečisto.',
    next:'Sledovat nové kolo jen pro jasnou vědeckou otázku a institucionálně vedený výzkum.',
    sources:[['Oficiální pravidla a stav výzvy','https://www.spencer.org/grant_types/small-research-grant']]
  },
  {
    id:'aplikace-international',title:'OP TAK · Aplikace – Mezinárodní spolupráce',tag:'Nyní nízká priorita',status:'open',fit:'low',roles:['company','university'],
    amount:'Dotace 3–50 mil. Kč',deadline:'30. 11. 2026 v 16:00',closes:'2026-11-30',
    summary:'Otevřený program pro skutečný průmyslový výzkum a experimentální vývoj. Aktuální malý prototyp na něj sám nestačí.',
    applicant:'Podnik jako žadatel, výzkumná organizace pouze jako partner. Realizace mimo Prahu, alespoň jeden zahraniční partner.',
    use:'Výzkum a vývoj nového řešení; výstupem může být i software. Podpora firmy 25–80 % podle velikosti a činnosti, výzkumné organizace 85 %.',
    limit:'Zahraniční partner musí zajistit financování vlastní části podle příslušných programů. Bez hotového výzkumného záměru a konsorcia je listopadové podání málo realistické.',
    next:'Nyní neinvestovat do velké žádosti. Vrátit se k ní, pokud pilot prokáže potřebu a vznikne skutečný výzkumný tým.',
    sources:[['Oficiální detail API','https://apiagentura.gov.cz/podporovane-aktivity-optak/aplikace-optak/aplikace-mezinarodni-spoluprace/']]
  },
  {
    id:'sigma-deeptech',title:'TA ČR · SIGMA DC1, 18. soutěž',tag:'Nyní nízká priorita: deep tech',status:'open',fit:'low',roles:['company'],
    amount:'Pro tento prototyp zatím nerozpočtovat',deadline:'27. 10. 2026 v 16:29:59 v SISTA',closes:'2026-10-27',
    summary:'Program na komercializaci převratných technologií, nikoli automatická dotace pro každý vzdělávací startup.',
    applicant:'Malý český podnik s odpovídajícím technologickým záměrem. Soutěž míří na deep tech a další návaznost na EIC.',
    use:'Komercializace výzkumu a vývoje s požadovanou technologickou připraveností nejméně TRL 4.',
    limit:'U Nanečisto zatím nemáme doloženou průlomovou technologii. Použití běžného AI rozhraní tento nedostatek samo neřeší.',
    next:'Pro současný stav odložit. Na rok 2027 sledovat plánované transferové a proof-of-concept soutěže TA ČR podle skutečně vyhlášených pravidel.',
    sources:[['18. soutěž SIGMA','https://tacr.gov.cz/program-sigma-vyhlaseni-18-verejne-souteze-dilci-cil-1-podpora-komercializace-vavai/'],['Harmonogram TA ČR 2026–2027 (PDF)','https://tacr.gov.cz/wp-content/uploads/documents/2026/09/21/1789974314_260921_harmonogram%20vs_2026-2027_v3.pdf']]
  },
  {
    id:'eic',title:'EIC Accelerator',tag:'Nyní nízká priorita: globální technologie',status:'open',fit:'low',roles:['company'],
    amount:'Grant zpravidla pod 2,5 mil. €',deadline:'Plná žádost 4. 11. 2026 v 17:00 bruselského času',closes:'2026-11-04',
    summary:'Velká evropská možnost pro průlomové a škálovatelné technologie. Není realistickým prvním zdrojem pro současné Nanečisto.',
    applicant:'Způsobilý startup nebo MSP; před plnou žádostí musí uspět krátká žádost.',
    use:'Technologické inovační aktivity přibližně TRL 6–8. Případná kapitálová složka je investice, nikoli grant zdarma.',
    limit:'Posouzení krátké žádosti obvykle trvá 4–6 týdnů. Listopadová uzávěrka není rozumný cíl pro začátek přípravy 11. října.',
    next:'Vrátit se až při prokázané technologické novosti a mezinárodním potenciálu.',
    sources:[['Oficiální EIC Accelerator','https://eic.ec.europa.eu/eic-funding-opportunities/eic-accelerator_en']]
  }
];

export const closedCalls = [
  {title:'Praha · Podpora vzdělávání 2027',date:'9. 10. 2026',note:'Datum vyvěšení dokumentu do listopadu není lhůtou pro žádost. Další ročník nepotvrzen.',url:'https://eud-vis.praha.eu/pub/deska/6000004/4/6000003%23MHMPAWO0A020%23MHMP100WW8WL%230/6000003%23MHMPAWO0A020%23MHMP100WW9GM/Program%20-%20Vyhl%C3%A1%C5%A1en%C3%AD.pdf'},
  {title:'Plzeňské podnikatelské vouchery 2026',date:'30. 9. 2026',note:'Až 300 tis. Kč v uzavřeném kole; termín 2027 nepotvrzen. Případné personální propojení firmy a dodavatele vyžaduje zvláštní kontrolu.',url:'https://www.bic.cz/vouchery2026/'},
  {title:'CzechInvest · Technologická inkubace, 7. výzva',date:'14. 1. 2026',note:'Poslední potvrzené kolo je uzavřené. Nový termín nepotvrzen; možnost preinkubační konzultace není příslib dotace.',url:'https://czechinvest.gov.cz/cz/Homepage/Novinky/Listopad-cs/CzechInvest-otevira-sedmou-vyzvu-Technologicke-inkubace'},
  {title:'OP TAK · Proof of Concept III',date:'18. 9. 2025',note:'Aktualizace příloh neznamená nové otevření výzvy.',url:'https://apiagentura.gov.cz/podporovane-aktivity-optak/proof-of-concept-optak/proof-of-concept-vyzva-iii/'},
  {title:'OP TAK · Aplikace II – digitální řešení',date:'20. 5. 2025',note:'Další automatické opakování v roce 2027 není potvrzené.',url:'https://apiagentura.gov.cz/podporovane-aktivity-optak/aplikace-optak/aplikace-vyzva-ii-vyvoj-digitalnich-reseni/'},
  {title:'OP TAK · Aplikace Deep Tech IV',date:'10. 2. 2026',note:'Příjem předčasně ukončen po naplnění objemu žádostí.',url:'https://apiagentura.gov.cz/podporovane-aktivity-optak/aplikace-optak/aplikace-deep-tech-vyzva-iv/'}
];

export function matchesGrant(grant,{focus='now',role='all',status='all'}={}){
  return (focus==='all'||grant.fit===focus)&&(role==='all'||grant.roles.includes(role))&&(status==='all'||grant.status===status);
}
