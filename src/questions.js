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
    {
        question: "Statut spółki akcyjnej może zawierać dodatkowe postanowienia, oprócz wymaganych art. 304 § 1 i 2 Kodeksu Spółek Handlowych, chyba że:",
        answers: ["dodatkowe postanowienia dotyczą spraw dotyczących wpisu spółki do rejestru",
            "z ustawy wynika, że przewiduje ona wyczerpujące uregulowanie albo dodatkowe postanowienie statutu jest sprzeczne z naturą spółki akcyjnej lub dobrymi obyczajami",
            "statut spółki akcyjnej jest niezgodny z prawem"],
        goodAnswer: "z ustawy wynika, że przewiduje ona wyczerpujące uregulowanie albo dodatkowe postanowienie statutu jest sprzeczne z naturą spółki akcyjnej lub dobrymi obyczajami"
    },
    {
        question: "Zarząd spółki akcyjnej ogłasza wezwanie o dokonanie wpłat na akcje:",
        answers: ["raz",
            "2-krotnie",
            "3-krotnie"],
        goodAnswer: "2-krotnie"
    },
    {
        question: "Umowa ograniczająca na określony czas rozporządzanie akcją lub częścią ułamkową akcji jest dopuszczalna. " +
            "Ograniczenie rozporządzania nie może być ustanowione na okres dłuższy niż:",
        answers: ["10 lat od dnia zawarcia umowy",
            "7 lat od dnia zawarcia umowy",
            "5 lat od dnia zawarcia umowy"],
        goodAnswer: "5 lat od dnia zawarcia umowy"
    },
    {
        question: "Uchwałę o wyznaczeniu dnia dywidendy podejmuje się na:",
        answers: ["zwyczajnym walnym zgromadzeniu",
            "nadzwyczajnym walnym zgromadzeniu",
            "nadzwyczajnym posiedzeniu zarządu"],
        goodAnswer: "zwyczajnym walnym zgromadzeniu"
    },
    {
        question: "Zwyczajne walne zgromadzenie spółki publicznej ustala dzień dywidendy oraz termin wypłaty dywidendy. " +
            "Dzień dywidendy może być wyznaczony na dzień przypadający nie wcześniej niż 5 dni i nie później niż:",
        answers: ["2 miesiące od dnia powzięcia uchwały",
            "3 miesiące od dnia powzięcia uchwały",
            "6 miesięcy od dnia powzięcia uchwały"],
        goodAnswer: "3 miesiące od dnia powzięcia uchwały"
    },
    {
        question: "Członkowie zarządu lub rady nadzorczej spółki akcyjnej, którzy ponoszą odpowiedzialność za dokonanie nienależnych " +
            "świadczeń, odpowiadają za ich zwrot solidarnie z odbiorcą świadczenia. Roszczenia te przedawniają się z upływem: ",
        answers: ["5 lat, licząc od dnia wypłaty",
            "3 lat, licząc od dnia wypłaty",
            "3 lat, licząc od dnia wypłaty, z wyjątkiem wierzytelności w stosunku do odbiorcy, który wiedział o bezprawności świadczenia"],
        goodAnswer: "3 lat, licząc od dnia wypłaty, z wyjątkiem wierzytelności w stosunku do odbiorcy, który wiedział o bezprawności świadczenia"
    },
    {
        question: "Akcje uprzywilejowane w zakresie dywidendy nie mogą przyznawać uprawnionemu dywidendy, która przewyższa dywidendę przeznaczoną " +
            "do wypłaty akcjonariuszom uprawnionym z akcji nieuprzywilejowanych:",
        answers: ["więcej niż o 1/3",
            "więcej niż o połowę",
            "więcej niż o 1/4"],
        goodAnswer: "więcej niż o połowę"
    },
    {
        question: "Świadectwa założycielskie w spółce akcyjnej dają prawo do:",
        answers: ["uczestnictwa w podziale zysku spółki bez ograniczeń, po uprzednim odliczeniu na rzecz akcjonariuszy określonej " +
        "w statucie minimalnej dywidendy",
            "uczestnictwa w podziale zysku spółki bez ograniczeń",
            "uczestnictwa w podziale zysku spółki w granicach ustalonych przez statut, po uprzednim odliczeniu na rzecz " +
            "akcjonariuszy określonej w statucie minimalnej dywidendy"],
        goodAnswer: "uczestnictwa w podziale zysku spółki w granicach ustalonych przez statut, po uprzednim odliczeniu na rzecz " +
            "akcjonariuszy określonej w statucie minimalnej dywidendy"
    },
    {
        question: "Rada nadzorcza podejmuje uchwały, jeżeli na posiedzeniu jest obecna co najmniej połowa jej członków, " +
            "a wszyscy jej członkowie zostali zaproszeni. Statut spółki akcyjnej:",
        answers: ["może przewidywać surowsze wymagania dotyczące kworum rady nadzorczej",
            "nie może przewidywać surowszych wymagań dotyczących kworum rady nadzorczej",
            "nie może przewidywać surowszych wymagań dotyczących kworum rady nadzorczej, z wyjątkiem sytuacji określonych w ustawie"],
        goodAnswer: "może przewidywać surowsze wymagania dotyczące kworum rady nadzorczej"
    },
    {
        question: "Postanowienie dotyczące roszczeń o naprawienie szkody wyrządzonej przy zawiązaniu spółki lub sprawowaniu zarządu " +
            "albo nadzoru, zbycie i wydzierżawienie przedsiębiorstwa lub jego zorganizowanej części oraz ustanowienie na nich " +
            "ograniczonego prawa rzeczowego albo emisja obligacji zamiennych lub z prawem pierwszeństwa w spółce akcyjnej wymaga:",
        answers: ["uchwały walnego zgromadzenia",
            "uchwały rady nadzorczej",
            "decyzji zarządu"],
        goodAnswer: "uchwały walnego zgromadzenia"
    },
    {
        question: "Podwyższenie kapitału zakładowego spółki akcyjnej zgłasza do sądu rejestrowego:",
        answers: ["zarząd",
            "prezes zarządu",
            "rada nadzorcza"],
        goodAnswer: "zarząd"
    },
    {
        question: "Wysokość kapitału docelowego spółki akcyjnej nie może przekraczać:",
        answers: ["3/4 kapitału zakładowego na dzień udzielenia upoważnienia zarządowi",
            "2/3 kapitału zakładowego na dzień udzielenia upoważnienia zarządowi",
            "3/5 kapitału zakładowego na dzień udzielenia upoważnienia zarządowi"],
        goodAnswer: "3/4 kapitału zakładowego na dzień udzielenia upoważnienia zarządowi"
    },
    {
        question: "Otwarcie likwidacji spółki akcyjnej następuje z dniem:",
        answers: ["wyłącznie uprawomocnienia się orzeczenia o rozwiązaniu spółki przez sąd",
            "wyłącznie powzięcia przez walne zgromadzenie uchwały o rozwiązaniu",
            "uprawomocnienia się orzeczenia o rozwiązaniu spółki przez sąd, powzięcia przez " +
            "walne zgromadzenie uchwały o rozwiązaniu spółki lub zaistnienia innej przyczyny " +
            "jej rozwiązania"],
        goodAnswer: "uprawomocnienia się orzeczenia o rozwiązaniu spółki przez sąd, powzięcia przez " +
            "walne zgromadzenie uchwały o rozwiązaniu spółki lub zaistnienia innej przyczyny " +
            "jej rozwiązania"
    },
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
    {
        question: "Postępowanie uregulowane w ustawie - Prawo upadłościowe może być wszczęte:",
        answers: ["z urzędu",
            "z urzędu lub na wniosek wierzycieli",
            "tylko na wniosek złożony przez podmioty określone w ustawie"],
        goodAnswer: "tylko na wniosek złożony przez podmioty określone w ustawie"
    },
    {
        question: "Ogłoszenie upadłości publicznych samodzielnych zakładów opieki zdrowotnej:",
        answers: ["jest niemożliwe",
            "jest możliwe tylko w sytuacjach określonych ustawą - Prawo upadłościowe",
            "jest możliwe"],
        goodAnswer: "jest niemożliwe"
    },
    {
        question: "Złożenie przez wierzyciela wniosku o ogłoszenie upadłości osoby fizycznej, która była przedsiębiorcą " +
            ", po zaprzestaniu prowadzenia przez nią działalności gospodarczej:",
        answers: ["nie jest możliwe",
            "jest możliwe, jeżeli od dnia wykreślenia z właściwego rejestru nie upłynęło 6 miesięcy",
            "jest możliwe, jeżeli od dnia wykreślenia z właściwego rejestru nie upłynął rok"],
        goodAnswer: "jest możliwe, jeżeli od dnia wykreślenia z właściwego rejestru nie upłynął rok"
    },
    {
        question: "Wierzyciel może złożyć wniosek o ogłoszenie upadłości osoby fizycznej, która faktycznie prowadziła " +
            "działalność gospodarczą, nawet wówczas gdy nie dopełniła obowiązku jej złożenia we właściwym rejestrze, " +
            "jeżeli od dnia zaprzestania prowadzenia działalności:",
        answers: ["nie upłynęło 6 miesięcy",
            "nie upłynął rok",
            "nie upłynęło 18 miesięcy"],
        goodAnswer: "nie upłynął rok"
    },
    {
        question: "Domniemywa się, że dłużnik utracił zdolnosć do wykonywania swoich wymaganych zobowiązań pieniężnych, jeżeli " +
            "opóźnienie w wykonaniu zobowiązań pieniężnych przekracza:",
        answers: ["3 miesiące",
            "6 miesięcy",
            "rok"],
        goodAnswer: "3 miesiące"
    },
    {
        question: "Wniosek o ogłoszenie upadłości w stosunku do spółki jawnej, spółki partnerskiej, " +
            "spółki komandytowej oraz spółki komandytowo-akcyjnej może zgłosić - pozą " +
            "wierzycielami osobistymi i dłużnikiem, również:",
        answers: ["każdy, kto ma w tym interes prawny",
            "każdy ze wspólników spółki",
            "każdy ze wspólników odpowiadających bez ograniczenia za zobowiązania spółki"],
        goodAnswer: "każdy ze wspólników odpowiadających bez ograniczenia za zobowiązania spółki"
    },
    {
        question: "Dłużnik jest obowiązany, nie później niż w terminie 30 dni od dnia, w którym " +
            "wystąpiła podstawa do ogłoszenia upadłości, zgłosić w sądzie wniosek o ogłoszenie " +
            "upadłości. W przypadku ustanowienia zarządu sukcesyjnego obowiązek ten spoczywa na zarządcy sukcesyjnym. " +
            "Jeżeli podstawa do ogłoszenia upadłości wystąpiła " +
            "przed ustanowieniem zarządu sukcesyjnego, termin do zgłoszenia wniosku o ogłoszenie " +
            "upadłości biegnie od dnia, w którym został ustanowiony zarząd sukcesyjny. " +
            "Zgłoszenie wniosku o ogłoszenie upadłości przez zarządcę sukcesyjnego:",
        answers: ["nie wymaga zgody osób, na rzecz których działa zarządca sukcesyjny",
            "wymaga zgody osób, na rzecz których działa zarządca sukcesyjny",
            "wymaga zgody osób, na rzecz których działa zarządca sukcesyjny, chyba że ustawa stanowi inaczej"],
        goodAnswer: "nie wymaga zgody osób, na rzecz których działa zarządca sukcesyjny"
    },
    {
        question: "Sąd rozpoznaje sprawę (z wniosku o ogłoszenie upadłości) na posiedzeniu:",
        answers: ["jawnym",
            "jawnym, może jednak rozpatrzyć wniosek na posiedzeniu niejawnym, jeżeli uzna to za konieczne",
            "niejawnym"],
        goodAnswer: "niejawnym"
    },
    {
        question: "Na postanowienie sądu kończące postępowanie oraz w przypadkach określonych w ustawie przysługuje:",
        answers: ["zażalenie",
            "odwołanie",
            "skarga"],
        goodAnswer: "zażalenie"
    },
    {
        question: "Czy od postanowienia sądu II instancji w sprawie o ogłoszenie upadłości przysługuje skarga kasacyjna?",
        answers: ["tak",
            "nie",
            "tak, ale po uprzednim podaniu pisemnego uzasadnienia postanowienia przez sąd"],
        goodAnswer: "nie"
    },
    {
        question: "Wierzycielowi, którego siedziba lub miejsce zwykłego pobytu w dniu otwarcia postępowania znajduje się za granicą, " +
            "przysługuje zażalenie na postanowienie o ogłoszeniu upadłości wyłącznie w części dotyczącej jurysdykcji " +
            "sądów polskich w terminie:",
        answers: ["14 dni od dnia obwieszczenia postanowienia o ogłoszeniu upadłości w Rejestrze",
            "21 dni od dnia obwieszczenia postanowienia o ogłoszeniu upadłości w Rejestrze",
            "30 dni od dnia obwieszczenia postanowienia o ogłoszeniu upadłości w Rejestrze"],
        goodAnswer: "30 dni od dnia obwieszczenia postanowienia o ogłoszeniu upadłości w Rejestrze"
    },
    {
        question: "Sąd II instancji:",
        answers: ["może orzec o ogłoszeniu upadłości",
            "nie może orzec o ogłoszeniu upadłości",
            "może orzec o ogłoszeniu upadłości tylko w sytuacji gdy dłużnik jest osobą fizyczną"],
        goodAnswer: "nie może orzec o ogłoszeniu upadłości"
    },
    {
        question: "Postanowienie o ogłoszeniu upadłości jest skuteczne i wykonalne z dniem jego:",
        answers: [" uprawomocnienia się, chyba że przepis szczególny stanowi inaczej",
            "wydania, chyba że przepis szczególny stanowi inaczej",
            "obwieszczenia, chyba że przepis szczególny stanowi inaczej"],
        goodAnswer: "wydania, chyba że przepis szczególny stanowi inaczej"
    },
    {
        question: "Z dniem ogłoszenia upadłości upadły:",
        answers: ["traci prawo zarządu oraz możliwość korzystania z mienia wchodzącego do masy upadłości i rozporządzania nim",
            "nie traci prawa zarządu oraz możliwości korzystania z mienia wchodzącego do masy upadłości i rozporządzania nim",
            "zachowuje jedynie ograniczone prawo zarządu oraz możliwość korzystania wchodzącego do masy upadłości i rozporządzania nim"],
        goodAnswer: "traci prawo zarządu oraz możliwość korzystania z mienia wchodzącego do masy upadłości i rozporządzania nim"
    },
    {
        question: "Ustanawiając zabezpieczenie przez zarząd przymusowy, sąd:",
        answers: ["wyznacza zarządcę przymusowego oraz określa zakres i sposób wykonywania tego zarządu",
            "wyznacza kandydatów na zarządcę przymusowego",
            "wyznacza zarządców przymusowych"],
        goodAnswer: "wyznacza zarządcę przymusowego oraz określa zakres i sposób wykonywania tego zarządu"
    },
    {
        question: "Sędzia-komisarz może postanowić, aby upadły będący osobą fizyczną albo członkowie " +
            "organu zarządzającego upadłego niebędącego osobą fizyczną nie opuszczali " +
            "terytorium RP bez jego zezwolenia. Na to postanowienie sędziego-komisarza przysługuje:",
        answers: ["zażalenie",
            "sprzeciw",
            "skarga"],
        goodAnswer: "zażalenie"
    },
    {
        question: "Mienie wyłączone uchwałą zgromadzenia wierzycieli:",
        answers: ["co do zasady, wchodzi do masy upadłości",
            "nie wchodzi do masy upadłości",
            "wchodzi do masy upadłości"],
        goodAnswer: "nie wchodzi do masy upadłości"
    },
    {
        question: "We wniosku o wyłączenie z masy upadłości należy zgłosić wszelkie twierdzenia, " +
            "zarzuty i dowody na ich poparcie pod rygorem:",
        answers: ["odrzucenia wniosku",
            "utraty prawa powoływania ich w toku dalszego postępowania - bez żadnych wyjątków",
            "utraty prawa powoływania ich w toku dalszego postępowania, chyba że powołanie ich we wniosku było niemożliwe"],
        goodAnswer: "utraty prawa powoływania ich w toku dalszego postępowania, chyba że powołanie ich we wniosku było niemożliwe"
    },
    {
        question: "Na postanowienie o wyłączeniu z masy upadłości zażalenie przysługuje:",
        answers: ["wyłącznie upadłemu",
            "wyłącznie wierzycielom",
            "upadłemu i wierzycielom"],
        goodAnswer: "upadłemu i wierzycielom"
    },
    {
        question: "Po ogłoszeniu upadłości:",
        answers: ["nie można obciążyć składników masy upadłości hipoteką, " +
        "rejestrowym, zastawem skarbowym lub hipoteką morską w celu zabezpieczenia " +
        "wierzytelności powstałej przed ogłoszeniem upadłości, chyba że wniosek o wpis " +
        "hipoteki został złożony w sądzie co najmniej na 6 miesięcy przed dniem złożenia " +
        "wniosku o ogłoszenie upadłości",
            "nie można obciążyć składników masy upadłości prawem zastawu, zastawu rejestrowego" +
        " i zastawu skarbowego ani dokonać wpisu w księdze wieczystej lub rejestrze " +
        "dotyczącego tych składników celem zabezpieczenia wierzytelności, chyba że powstała ona przed ogłoszeniem upadłości",
            "nie można obciążyć składników masy upadłości prawem zastawu, zastawu rejestrowego" +
        " i zastawu skarbowego, można natomiast dokonać wpisu w księdze wieczystej " +
        "lub rejestrze dotyczącego tych składników celem zabezpieczenia wierzytelności"],
        goodAnswer: "nie można obciążyć składników masy upadłości hipoteką, " +
            "rejestrowym, zastawem skarbowym lub hipoteką morską w celu zabezpieczenia " +
            "wierzytelności powstałej przed ogłoszeniem upadłości, chyba że wniosek o wpis " +
            "hipoteki został złożony w sądzie co najmniej na 6 miesięcy przed dniem złożenia " +
            "wniosku o ogłoszenie upadłości"
    },
    {
        question: "Z masy upadłości mogą być zaspokojone odsetki od wierzytelności należne od " +
            "upadłego za okres do dnia ogłoszenia upadłości. Nie dotyczy to jednak odsetek od " +
            "wierzytelności zabezpieczonych hipoteką, wpisem w rejestrze, zastawem, zastawem " +
            "rejestrowym, zastawem skarbowym albo hipoteką morską. Odsetki te mogą bowiem być zaspokojone: ",
        answers: ["tylko z przedmiotu zabezpieczenia",
            "zarówno z masy upadłości, jak i z przedmiotu zabezpieczeń",
            "z masy upadłości i tylko w przypadku, gdy ustawa tak stanowi"],
        goodAnswer: "tylko z przedmiotu zabezpieczenia"
    },
    {
        question: "Jeżeli termin płatności nieoprocentowanego długu upadłego w dniu ogłoszenia upadłości nie nastapił, " +
            "do potrącanie przyjmuje się sumę należności zmniejszoną o odsetki ustawowe, nie wyższe jednak niż:",
        answers: ["5% - za czas od dnia ogłoszenia upadłości do dnia płatności i nie więcej niż za rok",
            "5% - za czas od dnia ogłoszenia upadłości do dnia płatności i nie więcej niż za 2 lata",
            "6% - za czas od dnia ogłoszenia upadłości do dnia płatności i nie więcej niż za 2 lata"],
        goodAnswer: "6% - za czas od dnia ogłoszenia upadłości do dnia płatności i nie więcej niż za 2 lata"
    },
    {
        question: "Roszczenie wynikające z umowy zawartej w wyniku przyjęcia oferty złożonej przez upadłego:",
        answers: ["może być przez wierzyciela dochodzone w postępowaniu upadłościowym tylko wtedy, gdy oświadczenie o " +
        "przyjęciu oferty zostało złożone upadłemu przed dniem ogłoszenia upadłości",
            "może być przez wierzyciela dochodzone w postępowaniu upadłościowym – bez żadnych dodatkowych warunków",
            "nie może być przez wierzyciela dochodzone w postępowaniu upadłościowym"],
        goodAnswer: "może być przez wierzyciela dochodzone w postępowaniu upadłościowym tylko wtedy, gdy oświadczenie o " +
            "przyjęciu oferty zostało złożone upadłemu przed dniem ogłoszenia upadłości"
    },
    {
        question: "Zastrzeżone w umowie sprzedaży na rzecz sprzedawcy prawo własności nie wygasa z powodu ogłoszenia upadłości nabywcy, jeżeli jest:",
        answers: ["bezpłatne",
            "potwierdzone aktem notarialnym",
            "skuteczne wobec jego wierzycieli według przepisów ustawy – Kodeks cywilny"],
        goodAnswer: "skuteczne wobec jego wierzycieli według przepisów ustawy – Kodeks cywilny"
    },
    {
        question: "Umowa agencyjna z dniem ogłoszenia upadłości jednej ze stron:",
        answers: ["wygasa",
            "nie wygasa",
            "co do zasady, nie wygasa"],
        goodAnswer: "wygasa"
    },
    {
        question: "Jeżeli w dniu ogłoszenia upadłości przedmiot najmu lub dzierżawy nie był jeszcze wydany upadłemu, " +
            "każda ze stron może odstąpić od umowy najmu lub dzierżawy nieruchomości zawartej przez upadłego jako najemcę lub dzierżawcę. " +
            "Oświadczenie o odstąpieniu powinno być złożone w terminie:",
        answers: ["miesiąca od dnia ogłoszenia upadłości",
            "2 miesięcy od dnia ogłoszenia upadłości",
            "3 miesięcy od dnia ogłoszenia upadłości"],
        goodAnswer: "2 miesięcy od dnia ogłoszenia upadłości"
    },
    {
        question: "Ustanowienie rozdzielności majątkowej na podstawie orzeczenia sądu jest bezskuteczne w " +
            "stosunku do masy upadłości (chyba że pozew o ustanowienie rozdzielności majątkowej został złożony co najmniej" +
            " na 2 lata przed dniem złożenia wniosku o ogłoszenie upadłości), " +
            "o ile orzeczenie zostało wydane w ciągu:",
        answers: ["3 miesięcy przed dniem złożenia wniosku o ogłoszenie upadłości",
            "6 miesięcy przed dniem złożenia wniosku o ogłoszenie upadłości",
            "roku przed złożeniem wniosku o ogłoszenie upadłości"],
        goodAnswer: "roku przed złożeniem wniosku o ogłoszenie upadłości"
    },
    {
        question: "Po ogłoszeniu upadłości postępowania sądowe, administracyjne lub " +
            "administracyjne dotyczące masy upadłości mogą być wszczęte i prowadzone:",
        answers: ["wyłącznie przez nadzorcę sądowego lub przeciw niemu",
            "wyłącznie przez zarządcę lub przeciwko niemu",
            "wyłącznie przez syndyka lub przeciwko niemu"],
        goodAnswer: "wyłącznie przez syndyka lub przeciwko niemu"
    },
    {
        question: "Sąd upadłościowy orzeka w składzie:",
        answers: ["jednego sędziego zawodowego, jednak w przedmiocie wynagrodzenia syndyka " +
        "oraz rozpoznając zażalenie na postanowienie sędziego-komisarza, sąd upadłościowy orzeka w składzie 3 sędziów zawodowych",
            "3 sędziów zawodowych",
            "zawsze jednego sędziego zawodowego"],
        goodAnswer: "jednego sędziego zawodowego, jednak w przedmiocie wynagrodzenia syndyka " +
            "oraz rozpoznając zażalenie na postanowienie sędziego-komisarza, sąd upadłościowy orzeka w składzie 3 sędziów zawodowych"
    },
    {
        question: "Sędzia-komisarz w zakresie swych czynności ma prawa i obowiązki:",
        answers: ["wyłącznie sądu",
            "sądu i przewodniczącego",
            "wyłącznie przewodniczącego"],
        goodAnswer: "sądu i przewodniczącego"
    },
    {
        question: "Syndyk:",
        answers: ["odpowiada za zobowiązania zaciągnięte w sprawach dotyczących masy upadłości",
            "odpowiada za zobowiązania zaciągnięte w sprawach dotyczących masy upadłości, całym swoim majątkiem",
            "nie odpowiada za zobowiązania zaciągnięte w sprawach dotyczących masy upadłości"],
        goodAnswer: "nie odpowiada za zobowiązania zaciągnięte w sprawach dotyczących masy upadłości"
    },
    {
        question: "Obowiązki sprawozdawcze ciążące na upadłym:",
        answers: ["upadły wykonuje osobiście",
            "wykonuje sędzia-komisarz",
            "wykonuje syndyk"],
        goodAnswer: "wykonuje syndyk"
    },
    {
        question: "Ogłoszenie upadłości:",
        answers: ["nie ma wpływu na zdolność prawną upadłego, ogranicza jednak jego zdolność do czynności prawnych",
            "nie ma wpływu na zdolność prawną oraz zdolność do czynności prawnych upadłego",
            "ogranicza zarówno zdolność prawną, jak i zdolność do czynności prawnych upadłego"],
        goodAnswer: "nie ma wpływu na zdolność prawną oraz zdolność do czynności prawnych upadłego"
    },
    {
        question: "Głosy wierzycieli biorących udział w zgromadzeniu wierzycieli:",
        answers: ["są równe",
            "nie są równe, wierzyciele głosują z sumą wierzytelności umieszczoną nz liście wierzytelności",
            "nie są równe, to sędzia-komisarz oznacza sumę, według której oblicza się głos każdego wierzyciela"],
        goodAnswer: "nie są równe, wierzyciele głosują z sumą wierzytelności umieszczoną nz liście wierzytelności"
    },
    {
        question: "Na podstawie wierzytelności, którą wierzyciel nabył w drodze przelewu lub indosu po ogłoszeniu upadłości:",
        answers: ["nie ma on prawa głosu na zgromadzeniu wierzycieli",
            "nie ma on prawa głosu na zgromadzeniu wierzycieli, chyba że przejście wierzytelności " +
            "nastąpiło wskutek spłacenia przez niego długu, za który odpowiadał " +
            "osobiście albo określonymi przedmiotami majątkowymi, ze stosunku prawnego " +
            "powstałego przed ogłoszeniem upadłości",
            "ma on prawo głosu na zgromadzeniu wierzycieli"],
        goodAnswer: "nie ma on prawa głosu na zgromadzeniu wierzycieli, chyba że przejście wierzytelności " +
            "nastąpiło wskutek spłacenia przez niego długu, za który odpowiadał " +
            "osobiście albo określonymi przedmiotami majątkowymi, ze stosunku prawnego " +
            "powstałego przed ogłoszeniem upadłości"
    },
    {
        question: "Członkowie rady wierzycieli pełnią swoje obowiązki:",
        answers: ["wyłącznie osobiście",
            "wyłącznie osobiście albo przez swoje organy",
            "osobiście albo przez pełnomocników"],
        goodAnswer: "osobiście albo przez pełnomocników"
    },
    {
        question: "Wierzyciel osobisty upadłego, który chce uczestniczyć w postępowaniu upadłościowym, " +
            "jeżeli niezbędne jest ustalenie jego wierzytelności, powinien w terminie oznaczonym w postanowieniu o " +
            "ogłoszeniu upadłości zgłosić sędziemu-komisarzowi swoją wierzytelność. Uprawnienie do zgłoszenia wierzytelności " +
            "przysługuje wierzycielowi ponadto, gdy jego wierzytelność była zabezpieczona hipoteką, zastawem, " +
            "zastawem rejestrowym, zastawem skarbowym, hipoteką morską lub przez inny wpis w księdze wieczystej lub w rejestrze okręgowym. " +
            "Jeżeli wierzyciel nie zgłosi tych wierzytelności:",
        answers: ["wierzytelności wygasają",
            "nie mogą być one umieszczone na liście wierzytelności",
            "będą one umieszczone na liście wierzytelności z urzędu"],
        goodAnswer: "będą one umieszczone na liście wierzytelności z urzędu"
    },
    {
        question: "Jeżeli w dniu ogłoszenia upadłości wierzytelność bez zastrzeżenia odsetek" +
            " nie była jeszcze wymagalna, na liście wierzytelności umieszcza się sumę pieniężną wierzytelności " +
            "pomniejszoną o odsetki ustawowe, nie wyższe jednak " +
            "niż 6% i za czas od dnia ogłoszenia upadłości do dnia wymagalności, najwyżej jednak za:",
        answers: ["rok",
            "18 miesięcy",
            "2 lata"],
        goodAnswer: "2 lata"
    },
    {
        question: "Jeżeli wierzytelność zgłoszono po zatwierdzeniu ostatecznego planu podziału funduszów masy upadłości:",
        answers: ["pozostawia się ją bez rozpoznania",
            "co do zasady, pozostawia się ją bez rozpoznania",
            "czynności, które już dokonane w postępowaniu upadłościowym są skuteczne wobec wierzyciela, " +
            "który tę wierzytelność zgłosił po zatwierdzeniu planu, a jego uznaną wierzytelność uwzględnia się " +
            "tylko w planach podziału funduszów masy upadłości sporządzonych po " +
            "jej uznaniu - bez względu na przyczynę opóźnienia"],
        goodAnswer: "pozostawia się ją bez rozpoznania"
    },
    {
        question: "Sędzia-komisarz może uwzględnić zmianę wierzyciela zgłoszoną po przekazaniu mu listy wierzytelności, " +
            "a przed jej ostatecznym zatwierdzeniem. Jej nieuwzględnienie:",
        answers: ["pozbawia nabywcę wierzytelności możliwości realizacji jego uprawnień na " +
        "podstawie przepisów ustawy w toku dalszego postępowania, z wyjątkiem sytuacji opisanych w ustawie",
            "pozbawia nabywcę wierzytelności możliwości realizacji jego uprawnień na podstawie przepisów ustawy w toku dalszego postępowania",
            "nie pozbawia nabywcy wierzytelności możliwości realizacji jego uprawnień na podstawie przepisów ustawy w toku dalszego postępowania"],
        goodAnswer: "nie pozbawia nabywcy wierzytelności możliwości realizacji jego uprawnień na podstawie przepisów ustawy w toku dalszego postępowania"
    },
    {
        question: "Sędzia-komisarz, zastępca sędziego-komisarza albo wyznaczony sędzia rozpoznaje sprzeciw, co do zasady:",
        answers: ["na rozprawie, w terminie 2 miesięcy od jego wniesienia",
            "na posiedzeniu niejawnym, w terminie 2 miesięcy od jego wniesienia",
            "na posiedzeniu niejawnym, w terminie miesiąca od jego wniesienia"],
        goodAnswer: "na posiedzeniu niejawnym, w terminie miesiąca od jego wniesienia"
    },
    {
        question: "Sędzia-komisarz może z urzędu dokonać zmian na liście wierzytelności w razie stwierdzenia, że " +
            "na liście umieszczono wierzytelności, które w całości lub części nie istnieją, lub nie umieszczono na liście wierzytelności, " +
            "które podlegają umieszczeniu na liście z urzędu. Na postanowienie to:",
        answers: ["nie przysługuje zażalenie",
            "przysługuje zażalenie",
            "zażalenie przysługuje tylko wierzycielom, którzy wykażą interes prawny w jego wniesieniu"],
        goodAnswer: "przysługuje zażalenie"
    },
    {
        question: "Po sporządzeniu spisu inwentarza i sprawozdania finansowego albo po złożeniu pisemnego sprawozdania ogólnego syndyk przeprowadza likwidację masy upadłości. " +
            "Do czasu uprawomocnienia się postanowienia o ogłoszeniu upadłości sędzia-komisarz:",
        answers: ["wstrzymuje z mocy ustawy likwidację masy upadłości",
            "może wstrzymać likwidację masy upadłości",
            "nie może wstrzymać likwidacji masy upadłości"],
        goodAnswer: "może wstrzymać likwidację masy upadłości"
    },
    {
        question: "Sprzedaż dokonana w postępowaniu upadłościowym:",
        answers: ["nie ma skutków sprzedaży egzekucyjnej",
            "może mieć skutki sprzedaży egzekucyjnej",
            "ma skutki sprzedaży egzekucyjnej"],
        goodAnswer: "ma skutki sprzedaży egzekucyjnej"
    },
    {
        question: "Sprzedaż nieruchomości dokonana w postępowaniu upadłościowym powoduje wygaśnięcie praw oraz " +
            "praw i roszczeń osobistych ujawnionych przez wpis do księgi wieczystej lub nieujawnionych w ten sposób, " +
            "lecz zgłoszonych sędziemu-komisarzowi. W miejsce prawa, które wygasło, uprawniony nabywa prawo do zaspokojenia " +
            "wartości wygasłego prawa z ceny uzyskanej ze sprzedaży obciążonej nieruchomości. Skutek ten " +
            "powstaje z chwilą zawarcia umowy sprzedaży. " +
            "Podstawą do wykreślenia praw, które wygasły na skutek sprzedaży, jest:",
        answers: ["prawomocny plan podziału sumy uzyskanej ze sprzedaży nieruchomości obciążonej",
            "układ wraz z odpisem prawomocnego postanowienia o zatwierdzeniu układu",
            "odpis prawomocnego postanowienia o ogłoszeniu upadłości"],
        goodAnswer: "prawomocny plan podziału sumy uzyskanej ze sprzedaży nieruchomości obciążonej"
    },
    {
        question: "Na wniosek właściciela nieruchomości władnącej sędzia-komisarz może postanowić, że służebność gruntowa, " +
            "która nie znajduje pełnego pokrycia w cenie nabycia, zostaje utrzymana w mocy, jeżeli jest dla nieruchomości władnącej konieczna, " +
            "a nie obniża w sposób istotny wartości nieruchomości obciążonej. Wniosek taki może być zgłoszony:",
        answers: ["w terminie 2 tygodni od dnia zatwierdzenia planu podziału sumy uzyskanej ze sprzedaży nieruchomości obciążonej",
            "aż do ogłoszenia planu podziału sumy uzyskanej ze sprzedaży nieruchomości obciążonej",
            "najpóźniej w zarzutach do planu podziału sumy uzyskanej ze sprzedaży nieruchomości obciążonej"],
        goodAnswer: "najpóźniej w zarzutach do planu podziału sumy uzyskanej ze sprzedaży nieruchomości obciążonej"
    },
    {
        question: "Jeżeli w skład masy upadłości wchodzą rzeczy ruchome, których nie można zbyć z zachowaniem przepisów ustawy, sędzia-komisarz:",
        answers: ["zarządza ich wyłączenie z masy upadłości",
            "może postanowić o ich wyłączeniu z masy upadłości albo zezwolić na ich zniszczenie",
            "zarządza ich zniszczenie"],
        goodAnswer: "może postanowić o ich wyłączeniu z masy upadłości albo zezwolić na ich zniszczenie"
    },
    {
        question: "Wraz ze sprzedażą przedsiębiorstwa upadłego wszelkie koncesje, zezwolenia, licencje i ulgi, które zostały udzielone upadłemu:",
        answers: ["wygasają",
            "wygasają, chyba że ustawa lub decyzja o ich udzieleniu stanowi inaczej",
            "przechodzą na nabywcę przedsiębiorstwa upadłego, chyba że odrębne ustawy stanowią inaczej"],
        goodAnswer: "przechodzą na nabywcę przedsiębiorstwa upadłego, chyba że odrębne ustawy stanowią inaczej"
    },
    {
        question: "Jeżeli wszyscy wierzyciele, którzy zgłosili swoje wierzytelności, żądają umorzenia postępowania, sąd:",
        answers: ["umarza postępowanie upadłościowe",
            "może umorzyć postępowanie upadłościowe",
            "zawiesza postępowanie upadłościowe"],
        goodAnswer: "umarza postępowanie upadłościowe"
    },
    {
        question: "Postanowienie o umorzeniu postępowania upadłościowego doręcza się:",
        answers: ["upadłemu, syndykowi oraz członkom rady wierzycieli, postanowienia nie obwieszcza się, Na postanowienie nie przysługuje zażalenie",
            "upadłemu, syndykowi oraz członkom rady wierzycieli, postanowienie obwieszcza się, na postanowienie nie przysługuje zażalenie",
            "upadłemu, syndykowi oraz członkom rady wierzycieli, postanowienie obwieszcza się, na postanowienie przysługuje zażalenie"],
        goodAnswer: "upadłemu, syndykowi oraz członkom rady wierzycieli, postanowienie obwieszcza się, na postanowienie przysługuje zażalenie"
    },
    {
        question: "Po umorzeniu postępowania upadłościowego umarza się wszczęte przez syndyka niezakończone procesy o uznanie za bezskuteczną czynności " +
            "dokonanej przez upadłego ze szkodą dla wierzycieli, w takim wypadku wzajemne roszczenia o zwrot kosztów procesu:",
        answers: ["wygasają",
            "nadal istnieją",
            "stają się zobowiązaniami naturalnymi"],
        goodAnswer: "wygasają"
    },
    {
        question: "Sąd po wykonaniu ostatecznego planu podziału stwierdza zakończenie postępowania " +
            "upadłościowego, jeśli w toku postępowania upadłościowego wszyscy wierzyciele zostali zaspokojeni, sąd:",
        answers: ["także stwierdza zakończenie postępowania",
            "nie stwierdza zakończenia postępowania",
            "nie musi stwierdzić zakończenia postępowania"],
        goodAnswer: "także stwierdza zakończenie postępowania"
    },
    {
        question: "Upadły będący osobą fizyczną może złożyć wniosek o ustalenie planu spłaty wierzycieli " +
            "i umorzenie pozostałej części zobowiązań, które nie zostały zaspokojone w postępowaniu upadłościowym, w terminie:",
        answers: ["7 dni od dnia obwieszczenia postanowienia o zakończeniu postępowania upadłościowego",
            "30 dni od dnia obwieszczenia postanowienia o zakończeniu postępowania upadłościowego",
            "60 dni od dnia obwieszczenia postanowienia o zakończeniu postępowania upadłościowego"],
        goodAnswer: "30 dni od dnia obwieszczenia postanowienia o zakończeniu postępowania upadłościowego"
    },
    {
        question: "W przypadku prawomocnego odrzucenia albo oddalenia wniosku o ogłoszenie upadłości postępowanie upadłościowe:",
        answers: ["podlega uchyleniu",
            "podlega umorzeniu",
            "podlega zawieszeniu"],
        goodAnswer: "podlega uchyleniu"
    },
    {
        question: "W odrębnym postępowaniu upadłościowym wobec osób fizycznych nieprowadzących działalności gospodarczej, " +
            "wniosek o ogłoszenie upadłości może zgłosić, co do zasady:",
        answers: ["dłużnik, wierzyciel zaś tylko w sytuacjach określonych w ustawie",
            "dłużnik i prokurator",
            "dłużnik i wierzyciel będący instytucją kredytową lub bankiem krajowym - w każdej sytuacji"],
        goodAnswer: "dłużnik, wierzyciel zaś tylko w sytuacjach określonych w ustawie"
    },
    {
        question: "Sprawy o ogłoszenie upadłości w odrębnym postępowaniu upadłościowym wobec osób fizycznych nieprowadzących " +
            "działalności gospodarczej rozpoznaje sąd upadłościowy w składzie:",
        answers: ["1 sędziego zawodowego",
            "1 sędziego zawodowego i 2 ławników",
            "3 sędziów zawodowych"],
        goodAnswer: "1 sędziego zawodowego"
    },
    {
        question: "Syndykowi postanowienie o ogłoszeniu upadłości (tzw. upadłość konsumencka):",
        answers: ["doręcza się",
            "nie doręcza się",
            "doręcza się na jego żądanie"],
        goodAnswer: "doręcza się"
    },
    {
        question: "Po ogłoszeniu upadłości (tzw. upadłość konsumencka) syndyk zwraca się do " +
            "naczelnika urzędu skarbowego właściwego dla upadłego z wnioskiem o udzielenie " +
            "informacji dotyczących upadłego, mających wpływ na ocenę jego sytuacji majątkowej, w szczególności " +
            "dotyczących okoliczności powodujących powstanie po stronie " +
            "upadłego obowiązku podatkowego w okresie:",
        answers: ["3 lat przed dniem zgłoszenia wniosku o ogłoszenie upadłości",
            "5 lat przed dniem zgłoszenia wniosku o ogłoszenie upadłości",
            "10 lat przed dniem zgłoszenia wniosku o ogłoszenie upadłości"],
        goodAnswer: "5 lat przed dniem zgłoszenia wniosku o ogłoszenie upadłości"
    },
    {
        question: "Co do zasady sąd umarza postępowanie w przedmiocie ogłoszenia upadłości " +
            "osoby fizycznej nieprowadzącej działalności gospodarczej na wniosek:",
        answers: ["syndyka",
            "wierzycieli",
            "upadłego"],
        goodAnswer: "upadłego"
    },
    {
        question: "Jeżeli w skład masy upadłości (w tzw. upadłości konsumenckiej) wchodzi lokal " +
            "mieszkalny albo dom jednorodzinny, w którym zamieszkuje upadły, a konieczne " +
            "jest zaspokojenie potrzeb mieszkaniowych upadłego i osób pozostających na jego " +
            "utrzymaniu, z sumy uzyskanej z jego sprzedaży wydziela się upadłemu kwotę odpowiadającą " +
            "przeciętnemu czynszowi najmu lokalu mieszkalnego w tej samej lub " +
            "sąsiedniej miejscowości za okres od:",
        answers: ["3 do 6 miesięcy",
            "6 do 12 miesięcy",
            "12 do 24 miesięcy"],
        goodAnswer: "12 do 24 miesięcy"
    },
];

export default questions;
