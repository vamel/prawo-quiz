const questions = [
    {
        question: "Przez umowę spółki handlowej wspólnicy albo akcjonariusze zobowiązują się:",
        answers: ["dążyć do osiągnięcia wspólnego celu przez wniesienie wkładów oraz - jeżeli umowa " +
        "albo statu spółki tak stanowi - przez współdziałanie w inny określony sposób",
            "dążyć do osiągnięcia wspólnego celu gospodarczego przez wniesienie wkładów",
            "dążyć do osiągnięcia wspólnego celu gospodarczego przez wniesienie wkładów " +
            "oraz - jeżeli umowa albo statut spółki tak stanowi - przez współdziałanie w inny " +
            "określony sposób"],
        goodAnswer: "dążyć do osiągnięcia wspólnego celu przez wniesienie wkładów oraz - jeżeli umowa " +
            "albo statu spółki tak stanowi - przez współdziałanie w inny określony sposób"
    },
    {
        question: "Spółka partnerska to spółka:",
        answers: ["osobowa",
            "kapitałowa",
            "jednoosobowa"],
        goodAnswer: "osobowa"
    },
    {
        question: "Spółka, która wywiera decydujący wpływ na działalność spółki kapitałowej zależnej " +
        "albo spółdzielni zależnej, w szczególności na podstawie umowy przewidującej zarządzanie spółką zależną " +
        "lub przekazywanie zysku przez taką spółkę, to spółka:",
        answers: ["jednoosobowa",
            "dominująca",
            "osobowa"],
        goodAnswer: "dominująca"
    },
    {
        question: "„Bezwzględna większość głosów” według KSH to:",
        answers: ["więcej niż połowa głosów oddanych przy obecności większości osób uprawnionych do " +
        "głosowania",
            "więcej niż połowa głosów oddanych przy obecności co najmniej połowy liczby osób " +
            "uprawnionych do głosowania",
            "więcej niż połowa głosów oddanych"],
        goodAnswer: "więcej niż połowa głosów oddanych"
    },
    {
        question: "Postanowienia zmienne umowy to:",
        answers: ["postanowienia umowy spółki zawartej przy wykorzystaniu wzorca umowy, które zgodnie z wzorcem mogą być modyfikowane przez wybór odpowiednich wariantów poszczególnych postanowień albo przez wprowadzenie odpowiednich danych " +
        "w określone pola wzorca, umożliwiające ich wprowadzenie",
            "postanowienia umowy spółki zawartej pisemnie lub przy wykorzystaniu wzorca " +
            "umowy, które zgodnie z wzorcem mogą być modyfikowane przez wybór odpowiednich wariantów poszczególnych postanowień albo przez wprowadzenie odpowiednich danych w określone pola wzorca, umożliwiające ich wprowadzenie",
            "postanowienia umowy spółki zawartej przy wykorzystaniu wzorca umowy, które zgodnie z wzorcem nie mogą być modyfikowane przez wybór odpowiednich " +
            "wariantów poszczególnych postanowień albo przez wprowadzenie odpowiednich " +
            "danych w określone pola wzorca, umożliwiające ich wprowadzenie"],
        goodAnswer: "postanowienia umowy spółki zawartej przy wykorzystaniu wzorca umowy, które zgodnie z wzorcem mogą być modyfikowane przez wybór odpowiednich wariantów poszczególnych postanowień albo przez wprowadzenie odpowiednich danych " +
            "w określone pola wzorca, umożliwiające ich wprowadzenie"
    },
    {
        question: "Złożenie przez spółkę wniosku o ogłoszenie w Monitorze Sądowym i Gospodarczym o osiągnięciu pozycji dominującej podlegającym obowiązkowi publikacji " +
            "powinno być dokonane w terminie:",
        answers: ["2 tygodni od zajścia zdarzenia, chyba że ustawa stanowi inaczej",
            "tygodnia od zajścia zdarzenia, chyba że ustawa stanowi inaczej",
            "miesiąca od zajścia zdarzenia, chyba że ustawa stanowi inaczej"],
        goodAnswer: "2 tygodni od zajścia zdarzenia, chyba że ustawa stanowi inaczej"
    },
    {
        question: "Ogół praw i obowiązków wspólnika spółki osobowej może być przeniesiony na " +
            "inną osobę tylko wówczas, gdy:",
        answers: ["umowa spółki tak stanowi",
            "statut tak stanowi",
            "ustawa tak stanowi"],
        goodAnswer: "umowa spółki tak stanowi"
    },
    {
        question: "Ogół praw i obowiązków wspólnika spółki osobowej może być przeniesiony na " +
            "inną osobę tylko:",
        answers: ["po uzyskaniu pisemnej zgody wszystkich pozostałych wspólników, chyba że statut " +
        "spółki stanowi inaczej",
            "po uzyskaniu pisemnej zgody wszystkich pozostałych wspólników, chyba że ustawa " +
            "stanowi inaczej",
            "po uzyskaniu pisemnej zgody wszystkich pozostałych wspólników, chyba że umowa spółki stanowi inaczej"],
        goodAnswer: "po uzyskaniu pisemnej zgody wszystkich pozostałych wspólników, chyba że umowa spółki stanowi inaczej"
    },
    {
        question: "W przypadku przeniesienia ogółu praw i obowiązków wspólnika na inną osobę " +
            "za zobowiązania występującego wspólnika związane z uczestnictwem w spółce osobowej i zobowiązania tej spółki osobowej odpowiada:",
        answers: ["solidarnie występujący wspólnik oraz wspólnik przystępujący do spółki",
            "wspólnik występujący ze spółki",
            "wspólnik przystępujący ze spółki"],
        goodAnswer: "solidarnie występujący wspólnik oraz wspólnik przystępujący do spółki"
    },
    {
        question: "Spółka z ograniczoną odpowiedzialnością, prosta spółka akcyjna albo spółka akcyjna staje się " +
            "podmiotem praw i obowiązków spółki w organizacji",
        answers: ["z chwilą wpisu do rejestru",
            "z chwilą zawarcia umowy spółki",
            "z chwilą wpisu do rejestru, chyba że przepisy szczególne stanowią inaczej"],
        goodAnswer: "z chwilą wpisu do rejestru"
    },
    {
        question: "Jeżeli spółka akcyjna w organizacji nabyła własność nieruchomości i następnie została wpisana do rejestru przedsiębiorców:",
        answers: ["z chwilą tego wpisu spółka akcyjna staje się właścicielem tej nieruchomości",
            "przejście własności tej nieruchomości na spółkę akcyjną wymaga dodatkowego wpisu w dziale rejestru przedsiębiorców",
            "przejście własności tej nieruchomości na spółkę akcyjną wymaga dokonania czynności prawnej przeniesienia własności nieruchomości"],
        goodAnswer: "z chwilą tego wpisu spółka akcyjna staje się właścicielem tej nieruchomości"
    },
    {
        question: "W przypadku gdy wspólnik albo akcjonariusz wniósł wkład niepieniężny mający wady:",
        answers: ["jest on zobowiązany do naprawienia wad wkładu niezwłocznie po ich stwierdzeniu",
            "pozostałym wspólnikom lub akcjonariuszom przysługuje roszczenie o wyrównanie spółce kapitałowej różnicy między wartością przyjętą w umowie albo statucie " +
            "spółki a zbywczą wartością wkładu",
            "jest on zobowiązany do wyrównania spółce kapitałowej różnicy między wartością " +
            "przyjętą w umowie albo statucie spółki a zbywczą wartością wkładu"],
        goodAnswer: "jest on zobowiązany do wyrównania spółce kapitałowej różnicy między wartością " +
            "przyjętą w umowie albo statucie spółki a zbywczą wartością wkładu"
    },
    {
        question: "Jeżeli do dokonania czynności prawnej przez spółkę ustawa wymaga uchwały wspólników albo walnego zgromadzenia bądź rady nadzorczej, czynność prawna dokonana " +
            "bez wymaganej uchwały jest:",
        answers: ["nieważna",
            "ważna",
            "ważna, ale musi zostać niezwłocznie potwierdzona stosowną uchwałą"],
        goodAnswer: "nieważna"
    },
    {
        question: "Członkiem zarządu, rady nadzorczej, komisji rewizyjnej albo likwidatorem może być:",
        answers: ["tylko osoba fizyczna mająca pełną zdolność do czynności prawnych",
            "każda osoba fizyczna",
            "osoba fizyczna lub osoba prawna mająca pełną zdolność prawną i zdolność do czynności prawnych"],
        goodAnswer: "tylko osoba fizyczna mająca pełną zdolność do czynności prawnych"
    },
    {
        question: "W przypadku gdy umowa albo statut spółki nie zawiera postanowień dotyczących firmy, " +
            "przedmiotu działalności spółki, kapitału zakładowego lub wkładów, sąd rejestrowy:",
        answers: ["orzeka o rozwiązaniu wpisanej do rejestru spółki kapitałowej",
            "może orzec o rozwiązaniu wpisanej do rejestru spółki kapitałowej",
            "nie może orzec o rozwiązaniu wpisanej do rejestru spółki kapitałowej"],
        goodAnswer: "może orzec o rozwiązaniu wpisanej do rejestru spółki kapitałowej"
    },
    {
        question: "Jeżeli braki we wpisie spółki nie zostaną usunięte w terminie wyznaczonym przez sąd rejestrowy, sąd ten:",
        answers: ["wydaje postanowienie o rozwiązaniu spółki",
            "może, po wezwaniu zarządu spółki do złożenia oświadczenia, wydać postanowienie o rozwiązaniu spółki",
            "może wezwać zarząd spółki do złożenia oświadczenia"],
        goodAnswer: "może, po wezwaniu zarządu spółki do złożenia oświadczenia, wydać postanowienie o rozwiązaniu spółki"
    },
    {
        question: "Uchwała o wykonaniu wiążącego polecenia nie jest podejmowana, jeżeli istnieje " +
            "uzasadniona obawa, że jest ono sprzeczne z interesem tej spółkii wyrządzi jej szkodę, która nie będzie naprawiona przez spółkę dominującą lub inną spółkę zależną " +
            "uczestniczącą w grupie spółek w okresie:",
        answers: ["2 lat, licząc od dnia, w którym nastąpi zdarzenie wyrządzające szkodę, chyba że " +
        "umowa albo statut spółki stanowi inaczej",
            "3 lat, licząc od dnia, w którym nastąpi zdarzenie wyrządzające szkodę, chyba że " +
            "umowa albo statut spółki stanowi inaczej",
            "5 lat, licząc od dnia, w którym nastąpi zdarzenie wyrządzające szkodę, chyba że " +
            "umowa albo statut spółki stanowi inaczej"],
        goodAnswer: "2 lat, licząc od dnia, w którym nastąpi zdarzenie wyrządzające szkodę, chyba że " +
            "umowa albo statut spółki stanowi inaczej"
    },
    {
        question: "Spółka dominująca odpowiada wobec wspólnika albo akcjonariusza spółki zależnej za obniżenie wartości przysługującego mu udziału albo akcji, jeżeli obniżenie " +
            "było następstwem wykonania przez spółkę zależną wiążącego polecenia. Roszczenie " +
            "o naprawienie szkody z tego tytułu w każdym przypadku przedawnia się z upływem:",
        answers: ["3 lat od dnia, w którym nastąpiło zdarzenie wyrządzające szkodę",
            "5 lat od dnia, w którym nastąpiło zdarzenie wyrządzające szkodę",
            "10 lat od dnia, w którym nastąpiło zdarzenie wyrządzające szkodę"],
        goodAnswer: "5 lat od dnia, w którym nastąpiło zdarzenie wyrządzające szkodę"
    },
    {
        question: "Zmiany danych zawartych w zgłoszeniu spółki jawnej do sądu rejestrowego:",
        answers: ["powinny zostać zgłoszone sądowi rejestrowemu",
            "nie muszą zostać zgłoszone sądowi rejestrowemu, o ile nie są istotne",
            "powinny zostać poprawione"],
        goodAnswer: "powinny zostać zgłoszone sądowi rejestrowemu"
    },
    {
        question: "Prawo do żądania wpisania do rejestru wzmianki o umowie dotyczącej stosunków " +
            "majątkowych między małżonkami ma:",
        answers: ["każdy wspólnik spółki jawnej",
            "współmałżonek wspólnika spółki jawnej",
            "każdy, kto ma interes prawny"],
        goodAnswer: "współmałżonek wspólnika spółki jawnej"
    },
    {
        question: "Prawo wspólnika spółki jawnej do reprezentowania spółki dotyczy:",
        answers: ["wszystkich czynności sądowych i pozasądowych spółki",
            "wyłącznie wszystkich czynności pozasądowych spółki",
            "tych czynności, które zostały wymienione w umowie spółki"],
        goodAnswer: "wszystkich czynności sądowych i pozasądowych spółki"
    },
    {
        question: "Osoba przystępująca do spółki jawnej za zobowiązania spółki powstałe przed " +
            "dniem jej przystąpienia:",
        answers: ["nie odpowiada",
            "odpowiada",
            "odpowiada tylko do wysokości wniesionego wkładu"],
        goodAnswer: "odpowiada"
    },
    {
        question: "W czasie trwania spółki jawnej wspólnik:",
        answers: ["może żądać od dłużnika zapłaty przypadającego na niego udziału w wierzytelności " +
        "spółki, ale nie może przedstawić do potrącenia wierzytelności spółki swojemu wierzycielowi",
            "nie może żądać od dłużnika zapłaty przypadającego na niego udziału w wierzytelności spółki ani przedstawić do potrącenia wierzytelności spółki swojemu wierzycielowi",
            "może żądać od dłużnika zapłaty przy padającego na niego udziału w wierzytelności " +
            "spółki oraz przedstawić do potrącenia wierzytelności spółki swojemu wierzycielowi"],
        goodAnswer: "nie może żądać od dłużnika zapłaty przypadającego na niego udziału w wierzytelności spółki ani przedstawić do potrącenia wierzytelności spółki swojemu wierzycielowi"
    },
    {
        question: "Prowadzenie spraw spółki jawnej bez uprzedniej uchwały wspólników przez jednego z nich jest:",
        answers: ["dopuszczalne, o ile chodzi o sprawy nieprzekraczające zakresu zwykłych czynności spółki",
            "niedopuszczalne",
            "dopuszczalne w każdym momencie"],
        goodAnswer: "dopuszczalne, o ile chodzi o sprawy nieprzekraczające zakresu zwykłych czynności spółki"
    },
    {
        question: "Prowadzenie spraw spółki jawnej może być powierzone jednemu lub kilku wspólnikom bądź na mocy umowy spółki, bądź na podstawie późniejszej uchwały " +
            "wspólników. Pozostali wspólnicy są wówczas:",
        answers: ["wyłączeni od prowadzenia spraw spółki",
            "nadal uprawnieni do prowadzenia spraw spółki",
            "nadal uprawnieni do prowadzenia spraw spółki, ale tylko w zakresie spraw nieprzekraczających zwykłego zarządu"],
        goodAnswer: "wyłączeni od prowadzenia spraw spółki"
    },
    {
        question: "Jeżeli w sprawach nieprzekraczających zwykłych czynności " +
            "uchwała wspólników, konieczna jest:",
        answers: ["uchwała podjęta większością głosów wspólników",
            "jednomyślność wszystkich wspólników mających prawo prowadzenia spraw spółki",
            "uchwała podjęta bezwzględną większością głosów wspólników"],
        goodAnswer: "jednomyślność wszystkich wspólników mających prawo prowadzenia spraw spółki"
    },
    {
        question: "Udział kapitałowy wspólnika spółki jawnej jest:",
        answers: ["równy wartości rzeczywiście wniesionego wkładu",
            "zawsze niższy od wartości wkładu określonej w umowie spółki",
            "zawsze wyższy od wartości wkładu określonej w umowie spółki"],
        goodAnswer: "równy wartości rzeczywiście wniesionego wkładu"
    },
    {
        question: "Jeżeli wspólnik zawrze inną umowę spółki lub przeniesie na osobę trzecią" +
            "niektóre prawa z tytułu uczestnictwa w spółce, wówczas:",
        answers: ["ego wspólnik staje się wspólnikiem spółki jawnej, lecz nie służy mu uprawnienie " +
        "do zasięgania informacji o stanie majątku i interesów tej spółki",
            "jego wspólnik staje się wspólnikiem spółki jawnej",
            "ani jego wspólnik, ani następca prawny nie stają się wspólnikami spółki jawnej, a w szczególności nie służy im uprawnienie do zasięgania informacji o stanie majątku i interesów tej spółki"],
        goodAnswer: "ani jego wspólnik, ani następca prawny nie stają się wspólnikami spółki jawnej, a w szczególności nie służy im uprawnienie do zasięgania informacji o stanie majątku i interesów tej spółki"
    },
    {
        question: "Jeżeli umowa spółki jawnej stanowi, że prawa, jakie miał zmarły wspólnik, służą " +
            "wszystkim spadkobiercom wspólnie, a nie zawiera w tym względzie szczególnych " +
            "postanowień, wówczas do wykonywania tych praw:",
        answers: ["spadkobiercy powinni wskazać spółce jedną osobę",
            "spadkobiercy powinni wybrać spośród siebie co najmniej 2 osoby",
            "spadkobiercy powinni wybrać spośród siebie jedną lub kilka osób"],
        goodAnswer: "spadkobiercy powinni wskazać spółce jedną osobę"
    },
    {
        question: "Partnerami w spółce partnerskiej mogą być:",
        answers: ["wyłącznie osoby fizyczne posiadające pełną zdolność do czynności prawnych",
            "wyłącznie osoby fizyczne - bez dalszych ograniczeń",
            "wyłącznie osoby fizyczne, uprawnione do wykonywania wolnych zawodów"],
        goodAnswer: "wyłącznie osoby fizyczne, uprawnione do wykonywania wolnych zawodów"
    },
    {
        question: "W sprawach nieuregulowanych w dziale Kodeksu spółek handlowych dotyczącym " +
            "spółki partnerskiej do spółki partnerskiej stosuje się odpowiednio przepisy o spółce:",
        answers: ["cywilnej, chyba że ustawa stanowi inaczej",
            "jawnej, chyba że ustawa stanowi inaczej",
            "komandytowej, chyba że ustawa stanowi inaczej"],
        goodAnswer: "jawnej, chyba że ustawa stanowi inaczej"
    },
    {
        question: "Umowa spółki partnerskiej powinna być zawarta w formie:",
        answers: ["aktu notarialnego",
            "pisemnej dla celów dowodowych",
            "pisemnej pod rygorem nieważności"],
        goodAnswer: "pisemnej pod rygorem nieważności"
    },
    {
        question: "Jeżeli umowa spółki partnerskiej nie stanowi inaczej, partner tej spółki nie ponosi odpowiedzialności za zobowiązania spółki:",
        answers: ["będące następstwem działań pracownika spółki podległego jego kierownictwu przy świadczeniu usług związanych z przedmiotem działalności spółki",
            "będące następstwem jego działania, gdyż odpowiedzialność ponosi wyłącznie spółka",
            "powstałe w związku z wykonywaniem przez pozostałych partnerów wolnego zawodu w spółce"],
        goodAnswer: "powstałe w związku z wykonywaniem przez pozostałych partnerów wolnego zawodu w spółce"
    },
    {
        question: "Prawo do samodzielnego reprezentowania spółki partnerskiej ma:",
        answers: ["partner upoważniony zgodnie z umową spółki",
            "każdy partner",
            "każdy partner, chyba że umowa spółki stanowi inaczej"],
        goodAnswer: "każdy partner, chyba że umowa spółki stanowi inaczej"
    },
    {
        question: "Pozbawienie partnera prawa reprezentowania spółki partnerskiej mocą uchwały powziętej z większością " +
            "3/4 głosów w obecności do najmniej 2/3 ogólnej liczby partnerów staje się skuteczne z chwilą:",
        answers: ["powzięcia uchwały",
            "wpisu do rejestru",
            "powiadomienia partnera o pozbawieniu go prawa reprezentowania spółki"],
        goodAnswer: "wpisu do rejestru"
    },
    {
        question: "W przypadku gdy w spółce partnerskiej pozostaje jeden partner lub gdy tylko jeden partner posiada uprawnienia do wykonywania wolnego zawodu związanego " +
            "z przedmiotem działalności spółki, spółka:",
        answers: ["ulega rozwiązaniu najpóźniej z upływem roku od dnia zaistnienia któregokolwiek " +
        "z tych zdarzeń",
            "nie ulega rozwiązaniu",
            "ulega rozwiązaniu z upływem 30. dnia od dnia zaistnienia któregokolwiek z tych " +
            "zdarzeń"],
        goodAnswer: "ulega rozwiązaniu najpóźniej z upływem roku od dnia zaistnienia któregokolwiek " +
            "z tych zdarzeń"
    },
    {
        question: "Spadkobierca partnera spółki partnerskiej:",
        answers: ["wstępuje do spółki w miejsce zmarłego partnera, chyba że umowa spółki stanowi inaczej",
            "nie wstępuje do spółki w miejsce zmarłego partnera, chyba że umowa spółki stanowi inaczej",
            "nie może wstąpić do spółki w miejsce zmarłego partnera"],
        goodAnswer: "nie wstępuje do spółki w miejsce zmarłego partnera, chyba że umowa spółki stanowi inaczej"
    },
    {
        question: "Jeżeli komplementariuszem jest osoba prawna, firma spółki komandytowej powinna zawierać:",
        answers: ["pełne brzmienie firmy (nazwy) tej osoby prawnej, z dodatkowym oznaczeniem " +
        "„spółka komandytowa”. Nie wyklucza to zamieszczenia nazwiska komplementariusza, który jest osobą fizyczną",
            "pełne brzmienie firmy (nazwy) tej osoby prawnej lub jego skrót, z dodatkowym " +
            "oznaczeniem „spółka komandytowa”. Nie wyklucza to zamieszczenia nazwiska " +
            "komplementariusza, który jest osobą fizyczną",
            "pełne brzmienie firmy (nazwy) tej osoby prawnej lub jego skrót, z dodatkowym " +
            "oznaczeniem „spółka komandytowa”. W takim wypadku nie zamieszcza się nazwiska komplementariusza, który jest osobą fizyczną"],
        goodAnswer: "pełne brzmienie firmy (nazwy) tej osoby prawnej, z dodatkowym oznaczeniem " +
            "„spółka komandytowa”. Nie wyklucza to zamieszczenia nazwiska komplementariusza, który jest osobą fizyczną"
    },
    {
        question: "Umowa spółki komandytowej powinna być zawarta w formie:",
        answers: ["aktu notarialnego",
            "pisemnej dla celów dowodowych",
            "pisemnej pod rygorem nieważności"],
        goodAnswer: "aktu notarialnego"
    },
    {
        question: "Wkładem komandytariusza do spółki:",
        answers: ["nie może być w całości lub w części świadczenie niepieniężne (aport)",
            "może być w całości lub w części świadczenie niepieniężne (aport)",
            "może być świadczenie niepieniężne (aport), ale tylko w części"],
        goodAnswer: "może być w całości lub w części świadczenie niepieniężne (aport)"
    },
    {
        question: "Spółka komandytowa powstaje z chwilą:",
        answers: ["zawarcia umowy spółki i złożenia wniosku o wpis do rejestru",
            "zawarcia umowy spółki",
            "wpisu do rejestru"],
        goodAnswer: "wpisu do rejestru"
    },
    {
        question: "W przypadku uszczuplenia majątku spółki przez stratę uważa się za zwrot wkładu w stosunku do wierzycieli:",
        answers: ["każdą wypłatę dokonaną przez spółkę na rzecz komandytariusza przed uzupełnieniem wkładu do pierwotnej " +
        "wartości określonej w umowie spółki. Dokonanie takich wypłat nie wymaga wpisu do rejestru",
            "każdą wypłatę dokonaną przez spółkę na rzecz komandytariusza przed uzupełnieniem wkładu do pierwotnej wartości określonej w umowie spółki. Dokonanie " +
            "takich wypłat wymaga dokonania wpisu do rejestru",
            "każdą wypłatę dokonaną przez spółkę na rzecz komandytariusza"],
        goodAnswer: "każdą wypłatę dokonaną przez spółkę na rzecz komandytariusza przed uzupełnieniem wkładu do pierwotnej " +
            "wartości określonej w umowie spółki. Dokonanie takich wypłat nie wymaga wpisu do rejestru"
    },
    {
        question: "Postanowienia umowy spółki komandytowej (w zakresie stosunku do osób trzecich) " +
            "niezgodne z przepisami Kodeksu spółek handlowych dotyczącymi spółki komandytowej:",
        answers: ["są nieważne",
            "nie wywołują skutków prawnych wobec osób trzecich",
            "mogą wywoływać skutki prawne wobec osób trzecich"],
        goodAnswer: "nie wywołują skutków prawnych wobec osób trzecich"
    },
    {
        question: "Śmierć komandytariusza nie stanowi przyczyny rozwiązania spółki. Spadkobiercy " +
            "komandytariusza powinni wskazać spółce jedną osobę do wykonywania ich praw. " +
            "Czynności dokonane przez pozostałych wspólników przed takim wskazaniem:",
        answers: ["wiążą spadkobierców komandytariusza",
            "nie wiążą spadkobierców komandytariusza",
            "wiążą spadkobierców komandytariusza, o ile pozostają oni w dobrej wierze"],
        goodAnswer: "wiążą spadkobierców komandytariusza"
    },
    {
        question: "Jeżeli komplementariuszem jest osoba prawna, firma spółki komandytowo-akcyjnej powinna zawierać",
        answers: ["pełne brzmienie lub skrót firmy (nazwy) tej osoby prawnej, z dodatkowym oznaczeniem „spółka komandytowo-akcyjna”. Nie wyklucza to za " +
        "komplementariusza, który jest osobą fizyczną",
            "pełne brzmienie firmy (nazwy) tej osoby prawnej, z dodatkowym oznaczeniem " +
            "„spółka komandytowo-akcyjna”. Nie wyklucza to zamieszczenia nazwiska komplementariusza, który jest osobą fizyczną",
            "pełne brzmienie firmy (nazwy) tej osoby prawnej, z dodatkowym oznaczeniem „spółka komandytowo-akcyjna”" +
            "Nazwiska komplementariusza, który jest osobą fizyczną nie zamieszcza się"],
        goodAnswer: "pełne brzmienie firmy (nazwy) tej osoby prawnej, z dodatkowym oznaczeniem " +
            "„spółka komandytowo-akcyjna”. Nie wyklucza to zamieszczenia nazwiska komplementariusza, który jest osobą fizyczną"
    },
    {
        question: "Statut spółki komandytowo-akcyjnej powinni podpisać:",
        answers: ["co najmniej wszyscy komandytariusze",
            "co najmniej wszyscy akcjonariusze",
            "co najmniej wszyscy komplementariusze"],
        goodAnswer: "co najmniej wszyscy komplementariusze"
    },
    {
        question: "Statut spółki komandytowo-akcyjnej powinien być sporządzony w formie:",
        answers: ["pisemnej z podpisami notarialnie poświadczonymi",
            "pisemnej dla celów dowodowych",
            "aktu notarialnego"],
        goodAnswer: "aktu notarialnego"
    },
    {
        question: "Jeżeli statut dopuszcza przyjęcie do spółki nowego komplementariusza, dotychczasowy" +
            "akcjonariusz może uzyskać status komplementariusza albo osoba trzecia może przystąpić do spółki komandytowo-akcyjnej" +
            "w charakterze komplementariusza za zgodą:",
        answers: ["wszystkich dotychczasowych komplementariuszy i komandytariuszy",
            "wszystkich dotychczasowych komplementariuszy",
            "wszystkich dotychczasowych komplementariuszy i akcjonariuszy"],
        goodAnswer: "wszystkich dotychczasowych komplementariuszy"
    },
    {
        question: "Za zobowiązania spółki komandytowo-akcyjnej istnicjące w chwili wpisania go do rejestru nowy komplementariusz:",
        answers: ["odpowiada",
            "nie odpowiada",
            "odpowiada, o ile statut spółki inaczej nie stanowi"],
        goodAnswer: "odpowiada"
    },
    {
        question: "Akcjonariusz spółki komandytowo-akcyjnej:",
        answers: ["może reprezentować spółkę jedynie jako pełnomocnik",
            "nie może reprezentować spółki",
            "może reprezentować spółkę"],
        goodAnswer: "może reprezentować spółkę jedynie jako pełnomocnik"
    },
    {
        question: "Członków rady nadzorczej spółki komandytowo-akcyjnej powołuje i odwołuje:",
        answers: ["ogół komplementariuszy",
            "walne zgromadzenie",
            "walne zgromadzenie komplementariuszy"],
        goodAnswer: "walne zgromadzenie"
    },
    {
        question: "Wytoczenie przez radę nadzorczą w imieniu spółki komandytowo-akcyjnej powództwa o odszkodowanie przeciwko komplementariuszom niepozbawionym prawa " +
            "do prowadzenia spraw spółki komandytowo-akcyjnej lub jej reprezentowania jest:",
        answers: ["możliwe",
            "niemożliwe",
            "niemożliwe, o ile statut inaczej nie stanowi"],
        goodAnswer: "możliwe"
    },
    {
        question: "Spółka z ograniczoną odpowiedzialnością może być utworzona przez:",
        answers: ["jedną albo więcej osób w każdym celu, prawnie dopuszczalnym, chyba że ustawa stanowi inaczej",
            "jedną albo więcej osób w celu prowadzenia działalności gospodarczej, chyba że ustawa stanowi inaczej",
            "co najmniej 2 osoby w każdym celu, prawnie dopuszczalnym, chyba że ustawa lub umowa spółki stanowi inaczej"],
        goodAnswer: "jedną albo więcej osób w każdym celu, prawnie dopuszczalnym, chyba że ustawa stanowi inaczej"
    },
    {
        question: "Wspólnicy spółki z ograniczoną odpowiedzialnością za zobowiązania spółki:",
        answers: ["odpowiadają tylko do wysokości określonej kwoty",
            "odpowiadają całym swym majątkiem",
            "nie odpowiadają"],
        goodAnswer: "nie odpowiadają"
    },
    {
        question: "Jeżeli wspólnikowi mają być przyznane szczególne korzyści lub jeżeli na wspólników mają być nałożone, oprócz wniesienia wkładów na pokrycie udziałów, inne " +
            "obowiązki wobec spółki, należy to dokładnie określić w umowie spółki pod rygorem:",
        answers: ["bezskuteczności wobec spółki",
            "nieważności",
            "cofnięcia szczególnych obowiązków lub korzyści"],
        goodAnswer: "bezskuteczności wobec spółki"
    },
    {
        question: "Kwoty przeznaczone do podziału między wspólników spółki z ograniczoną odpowiedzialnością nie mogą przekraczać:",
        answers: ["zysku za ostatni rok obrotowy, powiększonego o kwoty przekazane na kapitały " +
        "(fundusze) rezerwowe w poprzednich latach",
            "zysku za ostatni rok obrotowy, powiększonego o niepodzielone zyski z lat ubiegłych " +
            "oraz o kwoty przeniesione z utworzonych z zysku kapitałów zapasowego i rezerwowych, " +
            "które mogą być przeznaczone do podziału, przy czym kwotę tę należy pomniejszyć o " +
            "niepokryte straty, udziały własne oraz o kwoty, które zgodnie z ustawą lub umową " +
            "spółki powinny być przekazane z zysku za ostatni rok obrotowy na kapitał zapasowy lub rezerwowe",
            "zysku za ostatni rok obrotowy, pomniejszonego o poniesioną stratę oraz o kwoty " +
            "przekazane na fundusze rezerwowe utworzone zgodnie z ustawą lub umową spółki, " +
            "które nie mogą być przeznaczone na wypłatę dywidendy"],
        goodAnswer: "zysku za ostatni rok obrotowy, powiększonego o niepodzielone zyski z lat ubiegłych " +
            "oraz o kwoty przeniesione z utworzonych z zysku kapitałów zapasowego i rezerwowych, " +
            "które mogą być przeznaczone do podziału, przy czym kwotę tę należy pomniejszyć o " +
            "niepokryte straty, udziały własne oraz o kwoty, które zgodnie z ustawą lub umową " +
            "spółki powinny być przekazane z zysku za ostatni rok obrotowy na kapitał zapasowy lub rezerwowe"
    },
    {
        question: "Spółka z ograniczoną odpowiedzialnością może wypłacić zaliczkę na poczet przewidywanej dywidendy, jeżeli:",
        answers: ["jej sprawozdanie finansowe za poprzedni rok obrotowy nie wykazuje strat",
            "umowa spółki przewiduje taką możliwość, a jej sprawozdanie finansowe za poprzedni rok obrotowy nie wykazuje strat",
            "jej zatwierdzone sprawozdanie finansowe za poprzedni rok obrotowy wykazuje " +
            "zysk"],
        goodAnswer: "jej zatwierdzone sprawozdanie finansowe za poprzedni rok obrotowy wykazuje " +
            "zysk"
    },
    {
        question: "Gdy udział w spółce z ograniczoną odpowiedzialnością jest umarzany bez zgody wspólnika, mamy do czynienia z:",
        answers: ["umorzeniem przymusowym",
            "redukcją przymusową",
            "umorzeniem niedobrowolnym"],
        goodAnswer: "umorzeniem przymusowym"
    },
    {
        question: "Umorzenie udziału w spółce z ograniczoną odpowiedzialnością w razie ziszczenia " +
            "się określonego zdarzenia bez powzięcia uchwały zgromadzenia wspólników jest",
        answers: ["dopuszczalne, o ile umowa spółki tak stanowi",
            "dopuszczalne",
            "niedopuszczalne"],
        goodAnswer: "dopuszczalne, o ile umowa spółki tak stanowi"
    },
    {
        question: "Mandat członka zarządu spółki z ograniczoną odpowiedzialnością wygasa z dniem:",
        answers: ["odbycia zgromadzenia wspólników zatwierdzającego sprawozdanie finansowe za rok obrotowy pełnienia funkcji członka zarządu",
            "odbycia zgromadzenia wspólników zatwierdzającego sprawozdanie finansowe za pierwszy pełny rok obrotowy pełnienia funkcji członka zarządu, chyba że ustawa stanowi inaczej",
            "odbycia zgromadzenia wspólników zatwierdzającego sprawozdanie finansowe za pierwszy pełny rok obrotowy pełnienia funkcji członka zarządu, jeżeli umowa spółki nie stanowi inaczej"],
        goodAnswer: "odbycia zgromadzenia wspólników zatwierdzającego sprawozdanie finansowe za pierwszy pełny rok obrotowy pełnienia funkcji członka zarządu, jeżeli umowa spółki nie stanowi inaczej"
    },
    {
        question: "Ograniczenie członka zarządu spółki z ograniczoną odpowiedzialnością w reprezentowaniu spółki wobec osób trzecich jest:",
        answers: ["niedopuszczalne",
            "dopuszczalne",
            "dopuszczalne tylko wtedy, gdy umowa spółki tak stanowi"],
        goodAnswer: "niedopuszczalne"
    },
    {
        question: "Rada nadzorcza lub komisja rewizyjna powinna być ustanowiona w spółkach z ograniczoną odpowiedzialnością, w których:",
        answers: ["wspólników jest więcej niż 20",
            "kapitał zakładowy przewyższa kwotę 500 000 zł, a wspólników jest więcej niż 25",
            "kapitał zakładowy przewyższa kwotę 250 000 zł"],
        goodAnswer: "kapitał zakładowy przewyższa kwotę 500 000 zł, a wspólników jest więcej niż 25"
    },
    {
        question: "Zwyczajne zgromadzenie wspólników spółki z ograniczoną odpowiedzialnością powinno odbyć się w terminie:",
        answers: ["6 miesięcy po upływie każdego roku obrotowego",
            "6 miesięcy po upływie każdego roku",
            "3 miesięcy po upływie każdego roku"],
        goodAnswer: "6 miesięcy po upływie każdego roku obrotowego"
    },
    {
        question: "Wspólnicy spółki z ograniczoną odpowiedzialnością:",
        answers: ["mogą uczestniczyć w zgromadzeniu wspólników oraz wykonywać prawo głosu " +
        "przez pełnomocników, jeżeli ustawa lub umowa spółki nie zawierają w tym względzie ograniczeń",
            "mogą uczestniczyć w zgromadzeniu wspólników oraz wykonywać prawo głosu " +
            "przez pełnomocników",
            "nie mogą uczestniczyć w zgromadzeniu wspólników oraz wykonywać prawa głosu " +
            "przez pełnomocników"],
        goodAnswer: "mogą uczestniczyć w zgromadzeniu wspólników oraz wykonywać prawo głosu " +
            "przez pełnomocników, jeżeli ustawa lub umowa spółki nie zawierają w tym względzie ograniczeń"
    },
    {
        question: "Podwyższenie kapitału zakładowego spółki z ograniczoną odpowiedzialnością następuje przez:",
        answers: ["ustanowienie nowych udziałów w spółce - wyłącznie",
            "podwyższenie wartości nominalnej udziałów istniejących lub ustanowienie nowych",
            "podwyższenie wartości nominalnej udziałów istniejących, ustanowienie nowych lub wniesienie aportu"],
        goodAnswer: "podwyższenie wartości nominalnej udziałów istniejących lub ustanowienie nowych"
    },
    {
        question: "Zawieszenie wspólnika spółki z ograniczoną odpowiedzialnością w wykonywaniu jego praw udziałowych w spółce jest:",
        answers: ["niedopuszczalne",
            "dopuszczalne, ale tylko z ważnych powodów",
            "dopuszczalne, ale tylko z ważnych powodów i w celu zabezpieczenia powództwa o wyłączenie wspólnika ze spółki"],
        goodAnswer: "dopuszczalne, ale tylko z ważnych powodów i w celu zabezpieczenia powództwa o wyłączenie wspólnika ze spółki"
    },
    {
        question: "Do sądu rejestrowego należy zgłosić: otwarcie likwidacji, nazwiska i imiona " +
            "likwidatorów oraz ich adresy, sposób reprezentowania spółki przez likwidatorów " +
            "i wszelkie w tym zakresie zmiany, nawet gdyby nie nastąpiła żadna zmiana w dotychczasowej reprezentacji spółki. Prawo i obowiązek dokonania zgłoszenia ma:",
        answers: ["zarząd oraz każdy likwidator",
            "każdy likwidator",
            "zarząd"],
        goodAnswer: "każdy likwidator"
    },
    {
        question: "Akcje prostej spółki akcyjnej:",
        answers: ["posiadają wartość nominalną i są podzielne",
            "posiadają wartość nominalną i są niepodzielne",
            "nie posiadają wartości nominalnej, nie stanowią części kapitału akcyjnego i są niepodzielne"],
        goodAnswer: "nie posiadają wartości nominalnej, nie stanowią części kapitału akcyjnego i są niepodzielne"
    },
    {
        question: "Kapitał akcyjny w prostej spółce akcyjnej powinien wynosić co najmniej:",
        answers: ["1 złoty",
            "50 złotych",
            "5000 złotych"],
        goodAnswer: "1 złoty"
    },
    {
        question: "Umowa prostej spółki akcyjnej powinna być zawarta w formie:",
        answers: ["pisemnej zwykłej",
            "pisemnej z podpisami notarialnie poświadczonymi",
            "aktu notarialnego"],
        goodAnswer: "aktu notarialnego"
    },
    {
        question: "Umowa prostej spółki akcyjnej:",
        answers: ["może być zawarta przy wykorzystaniu wzorca umowy",
            "nie może być zawarta przy wykorzystaniu wzorca umowy",
            "może być zawarta przy wykorzystaniu wzorca umowy, gdy jej kapitał wynosi co najmniej 5000 zł"],
        goodAnswer: "może być zawarta przy wykorzystaniu wzorca umowy"
    },
    {
        question: "Wkłady w prostej spółce akcyjnej powinny zostać wniesione do spółki w całości w ciągu:",
        answers: ["roku od dnia wpisu spółki do rejestru",
            "2 lat od dnia wpisu spółki do rejestru",
            "3 lat od dnia wpisu spółki do rejestru"],
        goodAnswer: "3 lat od dnia wpisu spółki do rejestru"
    },
    {
        question: "Akcje prostej spółki akcyjnej:",
        answers: ["mają formę dokumentu, ale nie jak w spółce akcyjnej",
            "mają formę dokumentu jak w spółce akcyjnej",
            "nie mają formy dokumentu"],
        goodAnswer: "nie mają formy dokumentu"
    },
    // {
    //     question: "",
    //     answers: ["",
    //         "",
    //         ""],
    //     goodAnswer: ""
    // },
    {
        question: "Członkowie zarządu, rady nadzorczej lub komisji rewizyjnej oraz likwidatorzy łączących się spółek " +
            "odpowiadają wobec wspólników tych spółek za szkody wyrządzone działaniem lub zaniechaniem, sprzecznym z prawem " +
            "lub postanowieniami umowy albo statutu spółki, chyba że nie ponoszą winy, odpowiadają:",
        answers: ["oddzielnie",
            "solidarnie",
            "solidarnie, chyba że ustawa stanowi inaczej"],
        goodAnswer: "solidarnie"
    },
    {
        question: "Objęcie przez przejmującą spółkę kapitałową udziałów albo akcji własnych za udziały lub akcje, które " +
            "posiada w spółce przejmowanej, oraz za własne udziały lub akcje spółki przejmowanej, a także objęcie udziałów lub akcji " +
            "własnych przez osoby działające we własnym imieniu, lecz na rachunek spółki przejmującej bądź spółki przejmowanej jest:",
        answers: ["dozwolone",
            "niedozwolone",
            "niedozwolone, chyba że ustawa stanowi inaczej"],
        goodAnswer: "niedozwolone"
    },
    {
        question: "Plan połączenia spółek należy poddać badaniu przez biegłego w zakresie poprawności i rzetelności, " +
            "gdy spółka przejmującą albo nowo zawiązaną jest spółka:",
        answers: ["z ograniczoną odpowiedzialnością lub gdy jedną z łączących się spółek jest spółka akcyjna",
            "akcyjna lub gdy jedną z łączących się spółek jest spółka komandytowo-akcyjna",
            "jawna lub gdy jedną z łączących się spółek jest spółka z ograniczoną odpowiedzialnością"],
        goodAnswer: "akcyjna lub gdy jedną z łączących się spółek jest spółka komandytowo-akcyjna"
    },
    {
        question: "Łączenie się spółek wymaga uchwały zgromadzenia wspólników lub walnego zgromadzenia łączącej się spółki kapitałowej i uchwały wszystkich wspólników " +
            "łączącej się spółki osobowej. Uchwała zgromadzenia wspólników lub walnego zgromadzenia łączącej się spółki kapitałowej wymaga większości:",
        answers: ["2/3 głosów, reprezentujących co najmniej połowę kapitału zakładowego",
            "3/4 głosów, reprezentujących co najmniej połowę kapitału zakładowego",
            "3/4 głosów, reprezentujących co najmniej połowę kapitału zakładowego, chyba że umowa lub statut spółki przewidują surowsze warunki"],
        goodAnswer: "3/4 głosów, reprezentujących co najmniej połowę kapitału zakładowego, chyba że umowa lub statut spółki przewidują surowsze warunki"
    },
    {
        question: "Członkowie zarządu, rady nadzorczej lub komisji rewizyjnej oraz likwidatorzy " +
            "łączącej się spółki kapitałowej odpowiadają wobec wspólników tej spółki za szkody " +
            "wyrządzone działaniem lub zaniechaniem sprzecznym z prawem lub postanowieniami umowy albo statutu spółki:",
        answers: ["solidarnie",
            "solidarnie, chyba że nie ponoszą winy",
            "tylko subsydiarnie"],
        goodAnswer: "solidarnie, chyba że nie ponoszą winy"
    },
    {
        question: "Plan podziału spółki wymaga pisemnego uzgodnienia między spółką dzieloną " +
            "a spółką przejmującą. W przypadku podziału przez zawiązanie nowej spółki plan " +
            "podziału sporządza:",
        answers: ["zarząd spółki dzielonej, plan ma formę aktu notarialnego",
            "zarząd spółki dzielonej w formie pisemnej",
            "w formie pisemnej spółka dzielona"],
        goodAnswer: "w formie pisemnej spółka dzielona"
    },
    {
        question: "Wierzyciele dzielonej spółki oraz spółki przejmującej, którzy zgłosili swoje " +
            "roszczenia w okresie między dniem ogłoszenia planu podziału a dniem ogłoszenia " +
            "podziału:",
        answers: ["mogą żądać zabezpieczenia swoich roszczeń",
            "mogą żądać zabezpieczenia swoich roszczeń, jeśli uprawdopodobnili, że ich zaspokojenie jest zagrożone przez podział",
            "nie mogą żądać zabezpieczenia swoich roszczeń"],
        goodAnswer: "mogą żądać zabezpieczenia swoich roszczeń, jeśli uprawdopodobnili, że ich zaspokojenie jest zagrożone przez podział"
    },
    {
        question: "Powództwo o uchylenie uchwały o przekształceniu spółki osobowej bądź spółki " +
            "kapitałowej albo stwierdzenie jej nieważności należy wnieść w terminie:",
        answers: ["3 miesięcy od dnia otrzymania wiadomości o uchwale",
            "miesiąca od dnia otrzymania wiadomości o uchwale, nie później jednak niż w terminie 3 miesięcy od dnia powzięcia uchwały",
            "3 miesięcy od dnia otrzymania wiadomości o uchwale, nie później jednak niż w terminie 6 miesięcy od dnia powzięcia uchwały"],
        goodAnswer: "miesiąca od dnia otrzymania wiadomości o uchwale, nie później jednak niż w terminie 3 miesięcy od dnia powzięcia uchwały"
    },
];

export default questions;
