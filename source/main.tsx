import React from 'react';
import {createRoot} from 'react-dom/client';
import Academy from './app/academy';
import {installPresentation} from './lib/presentation';
import './app/globals.css';
import './app/academy-classic.css';
import './app/forest-art.css';
import './app/study-academy.css';
import './presentation.css';
function Demo(){return <><div className="presentation-notice"><strong>PREZENTAČNÍ DEMO</strong><span>Vyberte a přepínejte ukázkové role. Ukázkové údaje se ukládají pouze v tomto prohlížeči.</span><details><summary>Jak ukázku předvést</summary><p>1. Otevřete účastníka A01 a vyberte lekci nebo misi D01.<br/>2. Odešlete úkol. Přes „Přepnout účet“ otevřete instruktora I01 a napište hodnocení.<br/>3. Vraťte se do A01, doplňte opravu a otevřete portfolio. Pohled IVP ukazuje souhrn.</p><p>Každý návštěvník má vlastní ukázku. Přepínání rolí není zabezpečené přihlášení. Nepoužívejte skutečné osobní údaje ani fotografie lidí. Toto není schválený program LČR ani osvědčení způsobilosti.</p></details></div><Academy/></>}
installPresentation().then(()=>createRoot(document.getElementById('root')!).render(<Demo/>)).catch(()=>{document.getElementById('root')!.innerHTML='<main style="padding:3rem;max-width:50rem;margin:auto"><h1>Ukázku se nepodařilo otevřít</h1><p>Zkontrolujte připojení a povolte ukládání dat webu v běžném okně prohlížeče. Potom stránku obnovte.</p></main>'});
