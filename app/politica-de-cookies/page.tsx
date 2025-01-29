import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CookiesPolicy() {
  return (
    <>
      <SiteHeader
        visibleSections={{
          hero: false,
          features: false,
          chapters: false,
          learning: false,
          audience: false,
          author: false,
          pricing: false,
          contact: false,
          subscribe: false,
        }}
      />
      <main className="container mx-auto py-12 px-4">
        <div class="container mx-auto">
          <p><strong>Politica de livrare</strong></p>
          <p>Modalitate de livrare</p>
          <p>Produsele vor fi livrate de firma de curierat in termen de 2-5 zile lucratoare la orice adresa de pe teritoriul Romaniei. La primirea coletului, va rugam verificati integritatea ambalajului. Mentiunile cu privire la eventualele probleme privind integritatea/continutul unor colete le puteti face in momentul livrarii pe AWB (formularul de receptie specific companiei de curierat) sau se intocmeste un proces-verbal de constatare, se refuza primirea si plata coletului. Orice reclamatii ulterioare, cu privire la aceste aspecte, sunt nule.</p>
          <p>Intrucat comercializam produse fragile, clientul va verifica starea coletului iar, daca se va constata ca ambalajul este deteriorat, va deschide coletul in fata curierului pentru a verifica produsele si va solicita curierului intocmirea unui Proces-verbal de constatare in acest sens. In cazul expedierilor cu contact redus, daca se va constata ca ambalajul este deteriorat, clientul va reclama acest aspect imediat dupa primirea coletului, inainte de deschiderea acestuia.</p>
          <p>In caz de deteriorare a produselor, reclamatia insotita de poze ale coletului deteriorat vor fi transmise in termen de 2 zile pe e-mail catre&nbsp;<strong>SC CLEAN CODE CULTURE S.R.L.</strong>., la adresa de email:&nbsp;andrei.pata@cleancodeculture.com. Prin semnarea bonului de livrare de la curier, clientul admite primirea in conditii bune a coletului comandat, nu se admit reclamatii ulterioare. Site-ul&nbsp;<a href="http://www.comunicareimposibila.ro">www.comunicareimposibila.ro</a> pune la dispozitia clientilor sai optiunea de deschidere a coletului la livrare, in fata curierului, acest lucru avand rolul de a constata starea produselor comandate la livrare. In caz de deteriorare a produselor, se va intocmi impreuna cu curierul un Proces-verbal de constatare. Procesul-verbal de constatare va fi transmis pe e-mail catre&nbsp;<strong>CLEAN CODE CULTURE S.R.L.</strong>, in termen de 2 zile.</p>
          <p>Promotie livrare</p>
          <p>TRANSPORT GRATUIT pentru comenzile de peste 100 RON, pentru adresele care se afla in aria de acoperire a curierului.</p>
          <p>Costul livrarii</p>
          <p>Taxa de transport nu depinde de greutatea produselor comandate și este una fixă:&nbsp; Standard – 10 RON, serviciul – easybox.</p>
          <p>Pentru localitățile în care nu există un punct de lucru se va adăuga un cost suplimentar de 15 lei reprezentand serviciul – home delivery. &nbsp;Costul final va fi comunicat de către un reprezentant de vânzari CLEAN CODE CULTURE S.R.L.</p>
          <p>Termenul de livrare</p>
          <p>În cazul produselor aflate in stoc, livrarea se va face în 2 zile lucratoare, dar în anumite cazuri (in funcție de momentul în care s-a plasat comanda, adresa de livrare, etc.) livrarea poate să întarzie până la 5 zile. Excepție fac perioadele aglomerate din an, cum ar fi Paștele, Black Friday, &nbsp;sau sarbatorile de iarnă, când timpul de livrare poate fi chiar mai mare (aceste detalii vor fi specificate la momentul respectiv și informațiile vor fi actualizate în pagina&nbsp; “Termeni si conditii” și/sau “Transport”). &nbsp;În cazul în care produsele sunt în stoc, iar comanda a fost plasată până la ora 12, vom face tot posibilul ca produsele să ajungă la dumneavoastră&nbsp;în 24 de ore de la plasarea comenzii.</p>
          <p>Odată ce produsele au plecat din depozit, spre livrare,&nbsp;<strong>CLEAN CODE CULTURE S.R.L.</strong>&nbsp;nu mai este responsabilă pentru pierderea sau dauna acestora. Din momentul în care au fost predate firmei de curierat, pachetul, conținutul și starea acestora nu mai sunt obligațiile și responsabilitatile&nbsp;<strong>CLEAN CODE CULTURE S.R.L.</strong>&nbsp;Pentru retur, consultă pagina noastra de&nbsp;Termeni si Condiții, respectiv Receptia Produselor.</p>
          <p>Impachetarea</p>
          <p>Se foloseste o combinație de materiale pentru împachetat – carton ondulat, fulgi de polistiren, sau polistiren bucati, folie cu bule și folie cu bule recliclată. Atat modul cat si materialele folosite pentru impachetare se ajusteaza în funcție de tipul, greutatea, numărul obiectelor sau distanța de transport. De asemenea, adesea se vor refolosi materiale de ambalaj, incercand sa avem grija de mediul inconjurator. Oamenii din spatele CLEAN CODE CULTURE S.R.L. cred in ideea de reciclare a materialelor folosite la ambalat.</p>
          <p>Mentiuni</p>
          <p>In cazul platii prin ordin de plata, comanda este livrata in termenul convenit incepand cu data la care se primeste confirmarea platii. Confirmarea platii reprezinta trimiterea unei copii dupa ordinul de plata la adresa email&nbsp;<a href="mailto:andrei.pata@cleancodeculture.com">andrei.pata@cleancodeculture.com</a></p>
          <p>In cazul in care se doreste expedierea coletului la o alta adresa, este suficient sa mentionati acest lucru in formularul de comanda online sau la comanda telefonica.</p>
          <p>Situatii speciale:</p>
          <p>Termenul de livrare poate suferi întarzieri, în situațiile apărute independent de participarea CLEAN CODE CULTURE S.R.L. sau a societății de curierat cum ar fi: condiții meteorologice nefavorabile, accidente sau blocaje rutiere. În toate aceste cazuri, un reprezentant al departamentului de vânzări vă va comunica o nouă dată privind efectuarea livrarii.</p>
          <p>&nbsp;</p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

