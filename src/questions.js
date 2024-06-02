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
    // {
    //     question: "",
    //     answers: ["",
    //         "",
    //         ""],
    //     goodAnswer: ""
    // },
];

export default questions;
