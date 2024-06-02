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
        question: "Jeżeli do dokonania czynności prawnej przez spółkę ustawa wymaga uchwały wspólników albo walnego zgromadzenia bądź rady nadzorczej, czynność prawna dokonana\n" +
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
        question: "Uchwała o wykonaniu wiążącego polecenia nie jest podejmowana, jeżeli istnieje\n" +
            "uzasadniona obawa, że jest ono sprzeczne z interesem tej spółkii wyrządzi jej szkodę, która nie będzie naprawiona przez spółkę dominującą lub inną spółkę zależną\n" +
            "uczestniczącą w grupie spółek w okresie:",
        answers: ["2 lat, licząc od dnia, w którym nastąpi zdarzenie wyrządzające szkodę, chyba że\n" +
        "umowa albo statut spółki stanowi inaczej",
            "3 lat, licząc od dnia, w którym nastąpi zdarzenie wyrządzające szkodę, chyba że\n" +
            "umowa albo statut spółki stanowi inaczej",
            "5 lat, licząc od dnia, w którym nastąpi zdarzenie wyrządzające szkodę, chyba że\n" +
            "umowa albo statut spółki stanowi inaczej"],
        goodAnswer: "2 lat, licząc od dnia, w którym nastąpi zdarzenie wyrządzające szkodę, chyba że\n" +
            "umowa albo statut spółki stanowi inaczej"
    },
    {
        question: "Spółka dominująca odpowiada wobec wspólnika albo akcjonariusza spółki zależnej za obniżenie wartości przysługującego mu udziału albo akcji, jeżeli obniżenie\n" +
            "było następstwem wykonania przez spółkę zależną wiążącego polecenia. Roszczenie\n" +
            "o naprawienie szkody z tego tytułu w każdym przypadku przedawnia się z upływem:",
        answers: ["3 lat od dnia, w którym nastąpiło zdarzenie wyrządzające szkodę",
            "5 lat od dnia, w którym nastąpiło zdarzenie wyrządzające szkodę",
            "10 lat od dnia, w którym nastąpiło zdarzenie wyrządzające szkodę"],
        goodAnswer: "5 lat od dnia, w którym nastąpiło zdarzenie wyrządzające szkodę"
    },
];

export default questions;
