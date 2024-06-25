const sentences = [
    {
        "sentence": "To jest ____.",
        "correctWord": "student",
        "correctCase": "Nominative",
        "translation": "This is a student.",
        "nominative": "student",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "studenci",
        "correctCase": "Nominative",
        "translation": "These are students.",
        "nominative": "student",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "kot",
        "correctCase": "Nominative",
        "translation": "This is a cat.",
        "nominative": "kot",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "koty",
        "correctCase": "Nominative",
        "translation": "These are cats.",
        "nominative": "kot",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "książka",
        "correctCase": "Nominative",
        "translation": "This is a book.",
        "nominative": "książka",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "książki",
        "correctCase": "Nominative",
        "translation": "These are books.",
        "nominative": "książka",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "muzyka",
        "correctCase": "Nominative",
        "translation": "This is music.",
        "nominative": "muzyka",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "dom",
        "correctCase": "Nominative",
        "translation": "This is a house.",
        "nominative": "dom",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "domy",
        "correctCase": "Nominative",
        "translation": "These are houses.",
        "nominative": "dom",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "samochód",
        "correctCase": "Nominative",
        "translation": "This is a car.",
        "nominative": "samochód",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "samochody",
        "correctCase": "Nominative",
        "translation": "These are cars.",
        "nominative": "samochód",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "pies",
        "correctCase": "Nominative",
        "translation": "This is a dog.",
        "nominative": "pies",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "psy",
        "correctCase": "Nominative",
        "translation": "These are dogs.",
        "nominative": "pies",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "komputer",
        "correctCase": "Nominative",
        "translation": "This is a computer.",
        "nominative": "komputer",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "komputery",
        "correctCase": "Nominative",
        "translation": "These are computers.",
        "nominative": "komputer",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "telefon",
        "correctCase": "Nominative",
        "translation": "This is a phone.",
        "nominative": "telefon",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "telefony",
        "correctCase": "Nominative",
        "translation": "These are phones.",
        "nominative": "telefon",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "okno",
        "correctCase": "Nominative",
        "translation": "This is a window.",
        "nominative": "okno",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "okna",
        "correctCase": "Nominative",
        "translation": "These are windows.",
        "nominative": "okno",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "stół",
        "correctCase": "Nominative",
        "translation": "This is a table.",
        "nominative": "stół",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "stoły",
        "correctCase": "Nominative",
        "translation": "These are tables.",
        "nominative": "stół",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "krzesło",
        "correctCase": "Nominative",
        "translation": "This is a chair.",
        "nominative": "krzesło",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "krzesła",
        "correctCase": "Nominative",
        "translation": "These are chairs.",
        "nominative": "krzesło",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "rower",
        "correctCase": "Nominative",
        "translation": "This is a bicycle.",
        "nominative": "rower",
        "type": ["nouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "rowery",
        "correctCase": "Nominative",
        "translation": "These are bicycles.",
        "nominative": "rower",
        "type": ["nouns"]
    },
    {
        "sentence": "To jest ____ student.",
        "correctWord": "dobry",
        "correctCase": "Nominative",
        "translation": "He is a good student.",
        "nominative": "dobry",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ studenci.",
        "correctWord": "dobrzy",
        "correctCase": "Nominative",
        "translation": "They are good students.",
        "nominative": "dobry",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ kot.",
        "correctWord": "czarny",
        "correctCase": "Nominative",
        "translation": "This is a black cat.",
        "nominative": "czarny",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ koty.",
        "correctWord": "czarne",
        "correctCase": "Nominative",
        "translation": "These are black cats.",
        "nominative": "czarny",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ książka.",
        "correctWord": "interesująca",
        "correctCase": "Nominative",
        "translation": "This is an interesting book.",
        "nominative": "interesująca",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ książki.",
        "correctWord": "interesujące",
        "correctCase": "Nominative",
        "translation": "These are interesting books.",
        "nominative": "interesująca",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ muzyka.",
        "correctWord": "piękna",
        "correctCase": "Nominative",
        "translation": "This is beautiful music.",
        "nominative": "piękna",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ dom.",
        "correctWord": "duży",
        "correctCase": "Nominative",
        "translation": "This is a big house.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ domy.",
        "correctWord": "duże",
        "correctCase": "Nominative",
        "translation": "These are big houses.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ samochód.",
        "correctWord": "szybki",
        "correctCase": "Nominative",
        "translation": "This is a fast car.",
        "nominative": "szybki",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ samochody.",
        "correctWord": "szybkie",
        "correctCase": "Nominative",
        "translation": "These are fast cars.",
        "nominative": "szybki",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ pies.",
        "correctWord": "wierny",
        "correctCase": "Nominative",
        "translation": "This is a faithful dog.",
        "nominative": "wierny",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ psy.",
        "correctWord": "wierne",
        "correctCase": "Nominative",
        "translation": "These are faithful dogs.",
        "nominative": "wierny",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ komputer.",
        "correctWord": "nowy",
        "correctCase": "Nominative",
        "translation": "This is a new computer.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ komputery.",
        "correctWord": "nowe",
        "correctCase": "Nominative",
        "translation": "These are new computers.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ telefon.",
        "correctWord": "stary",
        "correctCase": "Nominative",
        "translation": "This is an old phone.",
        "nominative": "stary",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ telefony.",
        "correctWord": "stare",
        "correctCase": "Nominative",
        "translation": "These are old phones.",
        "nominative": "stary",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ okno.",
        "correctWord": "duże",
        "correctCase": "Nominative",
        "translation": "This is a large window.",
        "nominative": "duże",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ okna.",
        "correctWord": "duże",
        "correctCase": "Nominative",
        "translation": "These are large windows.",
        "nominative": "duże",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ stół.",
        "correctWord": "drewniany",
        "correctCase": "Nominative",
        "translation": "This is a wooden table.",
        "nominative": "drewniany",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ stoły.",
        "correctWord": "drewniane",
        "correctCase": "Nominative",
        "translation": "These are wooden tables.",
        "nominative": "drewniany",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ krzesło.",
        "correctWord": "plastikowe",
        "correctCase": "Nominative",
        "translation": "This is a plastic chair.",
        "nominative": "plastikowe",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ krzesła.",
        "correctWord": "plastikowe",
        "correctCase": "Nominative",
        "translation": "These are plastic chairs.",
        "nominative": "plastikowe",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ rower.",
        "correctWord": "sportowy",
        "correctCase": "Nominative",
        "translation": "This is a sports bicycle.",
        "nominative": "sportowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "To są ____ rowery.",
        "correctWord": "sportowe",
        "correctCase": "Nominative",
        "translation": "These are sports bicycles.",
        "nominative": "sportowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "To jest ____ przyjaciel.",
        "correctWord": "jeden",
        "correctCase": "Nominative",
        "translation": "This is one friend.",
        "nominative": "jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ przyjaciele.",
        "correctWord": "dwaj",
        "correctCase": "Nominative",
        "translation": "These are two friends.",
        "nominative": "dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ koty.",
        "correctWord": "trzy",
        "correctCase": "Nominative",
        "translation": "These are three cats.",
        "nominative": "trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ książki.",
        "correctWord": "cztery",
        "correctCase": "Nominative",
        "translation": "These are four books.",
        "nominative": "cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "To jest ____ dom.",
        "correctWord": "jeden",
        "correctCase": "Nominative",
        "translation": "This is one house.",
        "nominative": "jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ domy.",
        "correctWord": "dwa",
        "correctCase": "Nominative",
        "translation": "These are two houses.",
        "nominative": "dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ samochody.",
        "correctWord": "trzy",
        "correctCase": "Nominative",
        "translation": "These are three cars.",
        "nominative": "trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ psy.",
        "correctWord": "cztery",
        "correctCase": "Nominative",
        "translation": "These are four dogs.",
        "nominative": "cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "To jest ____ kot.",
        "correctWord": "jeden",
        "correctCase": "Nominative",
        "translation": "This is one cat.",
        "nominative": "jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ komputery.",
        "correctWord": "dwa",
        "correctCase": "Nominative",
        "translation": "These are two computers.",
        "nominative": "dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ telefony.",
        "correctWord": "trzy",
        "correctCase": "Nominative",
        "translation": "These are three phones.",
        "nominative": "trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ okna.",
        "correctWord": "cztery",
        "correctCase": "Nominative",
        "translation": "These are four windows.",
        "nominative": "cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "To jest ____ krzesło.",
        "correctWord": "jedno",
        "correctCase": "Nominative",
        "translation": "This is one chair.",
        "nominative": "jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ krzesła.",
        "correctWord": "dwa",
        "correctCase": "Nominative",
        "translation": "These are two chairs.",
        "nominative": "dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ rowery.",
        "correctWord": "trzy",
        "correctCase": "Nominative",
        "translation": "These are three bicycles.",
        "nominative": "trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ stoły.",
        "correctWord": "cztery",
        "correctCase": "Nominative",
        "translation": "These are four tables.",
        "nominative": "cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "To jest ____ samochód.",
        "correctWord": "jeden",
        "correctCase": "Nominative",
        "translation": "This is one car.",
        "nominative": "jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ psy.",
        "correctWord": "pięć",
        "correctCase": "Nominative",
        "translation": "These are five dogs.",
        "nominative": "pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ koty.",
        "correctWord": "sześć",
        "correctCase": "Nominative",
        "translation": "These are six cats.",
        "nominative": "sześć",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ książki.",
        "correctWord": "siedem",
        "correctCase": "Nominative",
        "translation": "These are seven books.",
        "nominative": "siedem",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ domy.",
        "correctWord": "osiem",
        "correctCase": "Nominative",
        "translation": "These are eight houses.",
        "nominative": "osiem",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ stoły.",
        "correctWord": "dziewięć",
        "correctCase": "Nominative",
        "translation": "These are nine tables.",
        "nominative": "dziewięć",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ okna.",
        "correctWord": "dziesięć",
        "correctCase": "Nominative",
        "translation": "These are ten windows.",
        "nominative": "dziesięć",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ rowery.",
        "correctWord": "jedenaście",
        "correctCase": "Nominative",
        "translation": "These are eleven bicycles.",
        "nominative": "jedenaście",
        "type": ["numbers"]
    },
    {
        "sentence": "To są ____ samochody.",
        "correctWord": "dwanaście",
        "correctCase": "Nominative",
        "translation": "These are twelve cars.",
        "nominative": "dwanaście",
        "type": ["numbers"]
    },
    {
        "sentence": "To jestem ____.",
        "correctWord": "ja",
        "correctCase": "Nominative",
        "translation": "This is me.",
        "nominative": "ja",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jesteś ____.",
        "correctWord": "ty",
        "correctCase": "Nominative",
        "translation": "This is you.",
        "nominative": "ty",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "on",
        "correctCase": "Nominative",
        "translation": "This is him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "ona",
        "correctCase": "Nominative",
        "translation": "This is her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "ono",
        "correctCase": "Nominative",
        "translation": "This is it.",
        "nominative": "ono",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jesteśmy ____.",
        "correctWord": "my",
        "correctCase": "Nominative",
        "translation": "This is us.",
        "nominative": "my",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jesteście ____.",
        "correctWord": "wy",
        "correctCase": "Nominative",
        "translation": "This is you (plural).",
        "nominative": "wy",
        "type": ["pronouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "oni",
        "correctCase": "Nominative",
        "translation": "These are them (masculine).",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "one",
        "correctCase": "Nominative",
        "translation": "These are them (feminine).",
        "nominative": "one",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "ten",
        "correctCase": "Nominative",
        "translation": "This is this one (masculine).",
        "nominative": "ten",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "ta",
        "correctCase": "Nominative",
        "translation": "This is this one (feminine).",
        "nominative": "ta",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "to",
        "correctCase": "Nominative",
        "translation": "This is this one (neuter).",
        "nominative": "to",
        "type": ["pronouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "ci",
        "correctCase": "Nominative",
        "translation": "These are those ones (masculine).",
        "nominative": "ci",
        "type": ["pronouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "te",
        "correctCase": "Nominative",
        "translation": "These are those ones (feminine).",
        "nominative": "te",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "mój",
        "correctCase": "Nominative",
        "translation": "This is mine (masculine).",
        "nominative": "mój",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "moja",
        "correctCase": "Nominative",
        "translation": "This is mine (feminine).",
        "nominative": "moja",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "moje",
        "correctCase": "Nominative",
        "translation": "This is mine (neuter).",
        "nominative": "moje",
        "type": ["pronouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "moi",
        "correctCase": "Nominative",
        "translation": "These are mine (masculine).",
        "nominative": "moi",
        "type": ["pronouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "moje",
        "correctCase": "Nominative",
        "translation": "These are mine (feminine).",
        "nominative": "moje",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "twój",
        "correctCase": "Nominative",
        "translation": "This is yours (masculine).",
        "nominative": "twój",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "twoja",
        "correctCase": "Nominative",
        "translation": "This is yours (feminine).",
        "nominative": "twoja",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "twoje",
        "correctCase": "Nominative",
        "translation": "This is yours (neuter).",
        "nominative": "twoje",
        "type": ["pronouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "twoi",
        "correctCase": "Nominative",
        "translation": "These are yours (masculine).",
        "nominative": "twoi",
        "type": ["pronouns"]
    },
    {
        "sentence": "To są ____.",
        "correctWord": "twoje",
        "correctCase": "Nominative",
        "translation": "These are yours (feminine).",
        "nominative": "twoje",
        "type": ["pronouns"]
    },
    {
        "sentence": "To jest ____.",
        "correctWord": "nasz",
        "correctCase": "Nominative",
        "translation": "This is ours (masculine).",
        "nominative": "nasz",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "studenta",
        "correctCase": "Accusative",
        "translation": "I see a student.",
        "nominative": "student",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "kota",
        "correctCase": "Accusative",
        "translation": "I see a cat.",
        "nominative": "kot",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "książkę",
        "correctCase": "Accusative",
        "translation": "I see a book.",
        "nominative": "książka",
        "type": ["nouns"]
    },
    {
        "sentence": "Słyszę ____.",
        "correctWord": "muzykę",
        "correctCase": "Accusative",
        "translation": "I hear music.",
        "nominative": "muzyka",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "dom",
        "correctCase": "Accusative",
        "translation": "I see a house.",
        "nominative": "dom",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "samochód",
        "correctCase": "Accusative",
        "translation": "I see a car.",
        "nominative": "samochód",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "psa",
        "correctCase": "Accusative",
        "translation": "I see a dog.",
        "nominative": "pies",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "komputer",
        "correctCase": "Accusative",
        "translation": "I see a computer.",
        "nominative": "komputer",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "telefon",
        "correctCase": "Accusative",
        "translation": "I see a phone.",
        "nominative": "telefon",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "okno",
        "correctCase": "Accusative",
        "translation": "I see a window.",
        "nominative": "okno",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "stół",
        "correctCase": "Accusative",
        "translation": "I see a table.",
        "nominative": "stół",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "krzesło",
        "correctCase": "Accusative",
        "translation": "I see a chair.",
        "nominative": "krzesło",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "zegar",
        "correctCase": "Accusative",
        "translation": "I see a clock.",
        "nominative": "zegar",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "drzwi",
        "correctCase": "Accusative",
        "translation": "I see a door.",
        "nominative": "drzwi",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "rower",
        "correctCase": "Accusative",
        "translation": "I see a bicycle.",
        "nominative": "rower",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "szkołę",
        "correctCase": "Accusative",
        "translation": "I see a school.",
        "nominative": "szkoła",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "nauczyciela",
        "correctCase": "Accusative",
        "translation": "I see a teacher.",
        "nominative": "nauczyciel",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "ucznia",
        "correctCase": "Accusative",
        "translation": "I see a student.",
        "nominative": "uczeń",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "szpital",
        "correctCase": "Accusative",
        "translation": "I see a hospital.",
        "nominative": "szpital",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "lekarza",
        "correctCase": "Accusative",
        "translation": "I see a doctor.",
        "nominative": "lekarz",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "pielęgniarkę",
        "correctCase": "Accusative",
        "translation": "I see a nurse.",
        "nominative": "pielęgniarka",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "aptekę",
        "correctCase": "Accusative",
        "translation": "I see a pharmacy.",
        "nominative": "apteka",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "kino",
        "correctCase": "Accusative",
        "translation": "I see a cinema.",
        "nominative": "kino",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "teatr",
        "correctCase": "Accusative",
        "translation": "I see a theater.",
        "nominative": "teatr",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "studenci",
        "correctCase": "Accusative",
        "translation": "I see the students.",
        "nominative": "student",
        "type": ["nouns"]
    },
    {
        "sentence": "Widzę ____ studenta.",
        "correctWord": "dobrego",
        "correctCase": "Accusative",
        "translation": "I see a good student.",
        "nominative": "dobry",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ psa.",
        "correctWord": "czarnego",
        "correctCase": "Accusative",
        "translation": "I see a black dog.",
        "nominative": "czarny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ książkę.",
        "correctWord": "nową",
        "correctCase": "Accusative",
        "translation": "I see a new book.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ dom.",
        "correctWord": "duży",
        "correctCase": "Accusative",
        "translation": "I see a big house.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ samochód.",
        "correctWord": "szybki",
        "correctCase": "Accusative",
        "translation": "I see a fast car.",
        "nominative": "szybki",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ dziewczynkę.",
        "correctWord": "małą",
        "correctCase": "Accusative",
        "translation": "I see a little girl.",
        "nominative": "mały",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ drzwi.",
        "correctWord": "drewniane",
        "correctCase": "Accusative",
        "translation": "I see a wooden door.",
        "nominative": "drewniany",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ krzesło.",
        "correctWord": "zielone",
        "correctCase": "Accusative",
        "translation": "I see a green chair.",
        "nominative": "zielony",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ okno.",
        "correctWord": "duże",
        "correctCase": "Accusative",
        "translation": "I see a large window.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ kota.",
        "correctWord": "brązowego",
        "correctCase": "Accusative",
        "translation": "I see a brown cat.",
        "nominative": "brązowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ rower.",
        "correctWord": "nowy",
        "correctCase": "Accusative",
        "translation": "I see a new bicycle.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ komputer.",
        "correctWord": "szybki",
        "correctCase": "Accusative",
        "translation": "I see a fast computer.",
        "nominative": "szybki",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ telefon.",
        "correctWord": "stary",
        "correctCase": "Accusative",
        "translation": "I see an old phone.",
        "nominative": "stary",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ książki.",
        "correctWord": "ciekawe",
        "correctCase": "Accusative",
        "translation": "I see interesting books.",
        "nominative": "ciekawy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ okna.",
        "correctWord": "czyste",
        "correctCase": "Accusative",
        "translation": "I see clean windows.",
        "nominative": "czysty",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ domy.",
        "correctWord": "piękne",
        "correctCase": "Accusative",
        "translation": "I see beautiful houses.",
        "nominative": "piękny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ psy.",
        "correctWord": "duże",
        "correctCase": "Accusative",
        "translation": "I see big dogs.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ kwiaty.",
        "correctWord": "kolorowe",
        "correctCase": "Accusative",
        "translation": "I see colorful flowers.",
        "nominative": "kolorowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ samochody.",
        "correctWord": "nowe",
        "correctCase": "Accusative",
        "translation": "I see new cars.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ ludzi.",
        "correctWord": "szczęśliwych",
        "correctCase": "Accusative",
        "translation": "I see happy people.",
        "nominative": "szczęśliwy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ budynki.",
        "correctWord": "wysokie",
        "correctCase": "Accusative",
        "translation": "I see tall buildings.",
        "nominative": "wysoki",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ krzesła.",
        "correctWord": "plastikowe",
        "correctCase": "Accusative",
        "translation": "I see plastic chairs.",
        "nominative": "plastikowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ dzieci.",
        "correctWord": "bawiące się",
        "correctCase": "Accusative",
        "translation": "I see playing children.",
        "nominative": "bawiący się",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ ludzi.",
        "correctWord": "pracujących",
        "correctCase": "Accusative",
        "translation": "I see working people.",
        "nominative": "pracujący",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ drzewa.",
        "correctWord": "zielone",
        "correctCase": "Accusative",
        "translation": "I see green trees.",
        "nominative": "zielony",
        "type": ["adjectives"]
    },
    {
        "sentence": "Widzę ____ kota.",
        "correctWord": "jednego",
        "correctCase": "Accusative",
        "translation": "I see one cat.",
        "nominative": "jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ psy.",
        "correctWord": "dwa",
        "correctCase": "Accusative",
        "translation": "I see two dogs.",
        "nominative": "dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ książki.",
        "correctWord": "trzy",
        "correctCase": "Accusative",
        "translation": "I see three books.",
        "nominative": "trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ domy.",
        "correctWord": "cztery",
        "correctCase": "Accusative",
        "translation": "I see four houses.",
        "nominative": "cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ samochody.",
        "correctWord": "pięć",
        "correctCase": "Accusative",
        "translation": "I see five cars.",
        "nominative": "pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ uczniów.",
        "correctWord": "sześć",
        "correctCase": "Accusative",
        "translation": "I see six students.",
        "nominative": "sześć",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ stołów.",
        "correctWord": "siedem",
        "correctCase": "Accusative",
        "translation": "I see seven tables.",
        "nominative": "siedem",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ krzeseł.",
        "correctWord": "osiem",
        "correctCase": "Accusative",
        "translation": "I see eight chairs.",
        "nominative": "osiem",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ okien.",
        "correctWord": "dziewięć",
        "correctCase": "Accusative",
        "translation": "I see nine windows.",
        "nominative": "dziewięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ ludzi.",
        "correctWord": "dziesięć",
        "correctCase": "Accusative",
        "translation": "I see ten people.",
        "nominative": "dziesięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ rowerzystów.",
        "correctWord": "jedenaście",
        "correctCase": "Accusative",
        "translation": "I see eleven cyclists.",
        "nominative": "jedenaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ samochodów.",
        "correctWord": "dwanaście",
        "correctCase": "Accusative",
        "translation": "I see twelve cars.",
        "nominative": "dwanaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ książek.",
        "correctWord": "trzynaście",
        "correctCase": "Accusative",
        "translation": "I see thirteen books.",
        "nominative": "trzynaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ domów.",
        "correctWord": "czternaście",
        "correctCase": "Accusative",
        "translation": "I see fourteen houses.",
        "nominative": "czternaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ psów.",
        "correctWord": "piętnaście",
        "correctCase": "Accusative",
        "translation": "I see fifteen dogs.",
        "nominative": "piętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ kotów.",
        "correctWord": "szesnaście",
        "correctCase": "Accusative",
        "translation": "I see sixteen cats.",
        "nominative": "szesnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ drzew.",
        "correctWord": "siedemnaście",
        "correctCase": "Accusative",
        "translation": "I see seventeen trees.",
        "nominative": "siedemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ kwiatów.",
        "correctWord": "osiemnaście",
        "correctCase": "Accusative",
        "translation": "I see eighteen flowers.",
        "nominative": "osiemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ uczniów.",
        "correctWord": "dziewiętnaście",
        "correctCase": "Accusative",
        "translation": "I see nineteen students.",
        "nominative": "dziewiętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ książek.",
        "correctWord": "dwadzieścia",
        "correctCase": "Accusative",
        "translation": "I see twenty books.",
        "nominative": "dwadzieścia",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ okien.",
        "correctWord": "dwadzieścia jeden",
        "correctCase": "Accusative",
        "translation": "I see twenty-one windows.",
        "nominative": "dwadzieścia jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ domów.",
        "correctWord": "dwadzieścia dwa",
        "correctCase": "Accusative",
        "translation": "I see twenty-two houses.",
        "nominative": "dwadzieścia dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ ludzi.",
        "correctWord": "dwadzieścia trzy",
        "correctCase": "Accusative",
        "translation": "I see twenty-three people.",
        "nominative": "dwadzieścia trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ rowerów.",
        "correctWord": "dwadzieścia cztery",
        "correctCase": "Accusative",
        "translation": "I see twenty-four bicycles.",
        "nominative": "dwadzieścia cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____ samochodów.",
        "correctWord": "dwadzieścia pięć",
        "correctCase": "Accusative",
        "translation": "I see twenty-five cars.",
        "nominative": "dwadzieścia pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "mnie",
        "correctCase": "Accusative",
        "translation": "I see me.",
        "nominative": "ja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "ciebie",
        "correctCase": "Accusative",
        "translation": "I see you.",
        "nominative": "ty",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "jego",
        "correctCase": "Accusative",
        "translation": "I see him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "ją",
        "correctCase": "Accusative",
        "translation": "I see her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "je",
        "correctCase": "Accusative",
        "translation": "I see it.",
        "nominative": "ono",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "nas",
        "correctCase": "Accusative",
        "translation": "I see us.",
        "nominative": "my",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "was",
        "correctCase": "Accusative",
        "translation": "I see you (plural).",
        "nominative": "wy",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "ich",
        "correctCase": "Accusative",
        "translation": "I see them (masculine).",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "je",
        "correctCase": "Accusative",
        "translation": "I see them (feminine).",
        "nominative": "one",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "tego",
        "correctCase": "Accusative",
        "translation": "I see this one (masculine).",
        "nominative": "ten",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "tę",
        "correctCase": "Accusative",
        "translation": "I see this one (feminine).",
        "nominative": "ta",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "to",
        "correctCase": "Accusative",
        "translation": "I see this one (neuter).",
        "nominative": "to",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "tych",
        "correctCase": "Accusative",
        "translation": "I see those ones (masculine).",
        "nominative": "ci",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "te",
        "correctCase": "Accusative",
        "translation": "I see those ones (feminine).",
        "nominative": "te",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "mojego",
        "correctCase": "Accusative",
        "translation": "I see mine (masculine).",
        "nominative": "mój",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "moją",
        "correctCase": "Accusative",
        "translation": "I see mine (feminine).",
        "nominative": "moja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "moje",
        "correctCase": "Accusative",
        "translation": "I see mine (neuter).",
        "nominative": "moje",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "moich",
        "correctCase": "Accusative",
        "translation": "I see mine (masculine plural).",
        "nominative": "moi",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "moje",
        "correctCase": "Accusative",
        "translation": "I see mine (feminine plural).",
        "nominative": "moje",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "twojego",
        "correctCase": "Accusative",
        "translation": "I see yours (masculine).",
        "nominative": "twój",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "twoją",
        "correctCase": "Accusative",
        "translation": "I see yours (feminine).",
        "nominative": "twoja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "twoje",
        "correctCase": "Accusative",
        "translation": "I see yours (neuter).",
        "nominative": "twoje",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "twoich",
        "correctCase": "Accusative",
        "translation": "I see yours (masculine plural).",
        "nominative": "twoi",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "twoje",
        "correctCase": "Accusative",
        "translation": "I see yours (feminine plural).",
        "nominative": "twoje",
        "type": ["pronouns"]
    },
    {
        "sentence": "Widzę ____.",
        "correctWord": "naszego",
        "correctCase": "Accusative",
        "translation": "I see ours (masculine).",
        "nominative": "nasz",
        "type": ["pronouns"]
    },
    {
        "sentence": "Daję książkę ____.",
        "correctWord": "studentowi",
        "correctCase": "Dative",
        "translation": "I give a book to the student.",
        "nominative": "student",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję prezent ____.",
        "correctWord": "nauczycielowi",
        "correctCase": "Dative",
        "translation": "I give a gift to the teacher.",
        "nominative": "nauczyciel",
        "type": ["nouns"]
    },
    {
        "sentence": "Pomagam ____.",
        "correctWord": "koledze",
        "correctCase": "Dative",
        "translation": "I help a colleague.",
        "nominative": "kolega",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję pieniądze ____.",
        "correctWord": "bratu",
        "correctCase": "Dative",
        "translation": "I give money to my brother.",
        "nominative": "brat",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję jabłko ____.",
        "correctWord": "dziecku",
        "correctCase": "Dative",
        "translation": "I give an apple to the child.",
        "nominative": "dziecko",
        "type": ["nouns"]
    },
    {
        "sentence": "Pokazuję dom ____.",
        "correctWord": "rodzinie",
        "correctCase": "Dative",
        "translation": "I show the house to the family.",
        "nominative": "rodzina",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję kota ____.",
        "correctWord": "mężczyźnie",
        "correctCase": "Dative",
        "translation": "I give the cat to the man.",
        "nominative": "mężczyzna",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję piłkę ____.",
        "correctWord": "chłopcu",
        "correctCase": "Dative",
        "translation": "I give the ball to the boy.",
        "nominative": "chłopiec",
        "type": ["nouns"]
    },
    {
        "sentence": "Mówię prawdę ____.",
        "correctWord": "dziewczynie",
        "correctCase": "Dative",
        "translation": "I tell the truth to the girl.",
        "nominative": "dziewczyna",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję jedzenie ____.",
        "correctWord": "psu",
        "correctCase": "Dative",
        "translation": "I give food to the dog.",
        "nominative": "pies",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję wodę ____.",
        "correctWord": "kotu",
        "correctCase": "Dative",
        "translation": "I give water to the cat.",
        "nominative": "kot",
        "type": ["nouns"]
    },
    {
        "sentence": "Pomagam ____.",
        "correctWord": "sąsiadowi",
        "correctCase": "Dative",
        "translation": "I help the neighbor.",
        "nominative": "sąsiad",
        "type": ["nouns"]
    },
    {
        "sentence": "Wysyłam list ____.",
        "correctWord": "przyjacielowi",
        "correctCase": "Dative",
        "translation": "I send a letter to the friend.",
        "nominative": "przyjaciel",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję zabawkę ____.",
        "correctWord": "dzieciom",
        "correctCase": "Dative",
        "translation": "I give a toy to the children.",
        "nominative": "dzieci",
        "type": ["nouns"]
    },
    {
        "sentence": "Pokazuję zdjęcia ____.",
        "correctWord": "rodzicom",
        "correctCase": "Dative",
        "translation": "I show pictures to the parents.",
        "nominative": "rodzice",
        "type": ["nouns"]
    },
    {
        "sentence": "Czytam książkę ____.",
        "correctWord": "babci",
        "correctCase": "Dative",
        "translation": "I read a book to the grandmother.",
        "nominative": "babcia",
        "type": ["nouns"]
    },
    {
        "sentence": "Opowiadam historię ____.",
        "correctWord": "dziadkowi",
        "correctCase": "Dative",
        "translation": "I tell a story to the grandfather.",
        "nominative": "dziadek",
        "type": ["nouns"]
    },
    {
        "sentence": "Kupuję prezent ____.",
        "correctWord": "koleżance",
        "correctCase": "Dative",
        "translation": "I buy a gift for the female friend.",
        "nominative": "koleżanka",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję cukierki ____.",
        "correctWord": "dzieciom",
        "correctCase": "Dative",
        "translation": "I give candies to the children.",
        "nominative": "dzieci",
        "type": ["nouns"]
    },
    {
        "sentence": "Wręczam dyplom ____.",
        "correctWord": "uczennicy",
        "correctCase": "Dative",
        "translation": "I give a diploma to the student (female).",
        "nominative": "uczennica",
        "type": ["nouns"]
    },
    {
        "sentence": "Pokazuję mapę ____.",
        "correctWord": "turystom",
        "correctCase": "Dative",
        "translation": "I show the map to the tourists.",
        "nominative": "turyści",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję pieniądze ____.",
        "correctWord": "biednym",
        "correctCase": "Dative",
        "translation": "I give money to the poor.",
        "nominative": "biedni",
        "type": ["nouns"]
    },
    {
        "sentence": "Pomagam ____.",
        "correctWord": "studentkom",
        "correctCase": "Dative",
        "translation": "I help the female students.",
        "nominative": "studentki",
        "type": ["nouns"]
    },
    {
        "sentence": "Mówię komplementy ____.",
        "correctWord": "kobietom",
        "correctCase": "Dative",
        "translation": "I give compliments to the women.",
        "nominative": "kobiety",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję nagrodę ____.",
        "correctWord": "zwycięzcy",
        "correctCase": "Dative",
        "translation": "I give a prize to the winner.",
        "nominative": "zwycięzca",
        "type": ["nouns"]
    },
    {
        "sentence": "Daję książkę ____ studentowi.",
        "correctWord": "dobremu",
        "correctCase": "Dative",
        "translation": "I give a book to the good student.",
        "nominative": "dobry",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję prezent ____ nauczycielowi.",
        "correctWord": "mądremu",
        "correctCase": "Dative",
        "translation": "I give a gift to the wise teacher.",
        "nominative": "mądry",
        "type": ["adjectives"]
    },
    {
        "sentence": "Pomagam ____ koledze.",
        "correctWord": "nowemu",
        "correctCase": "Dative",
        "translation": "I help the new colleague.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję pieniądze ____ bratu.",
        "correctWord": "młodszemu",
        "correctCase": "Dative",
        "translation": "I give money to my younger brother.",
        "nominative": "młodszy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję jabłko ____ dziecku.",
        "correctWord": "głodnemu",
        "correctCase": "Dative",
        "translation": "I give an apple to the hungry child.",
        "nominative": "głodny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Pokazuję dom ____ rodzinie.",
        "correctWord": "dużej",
        "correctCase": "Dative",
        "translation": "I show the house to the large family.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję kota ____ mężczyźnie.",
        "correctWord": "starszemu",
        "correctCase": "Dative",
        "translation": "I give the cat to the older man.",
        "nominative": "starszy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję piłkę ____ chłopcu.",
        "correctWord": "małemu",
        "correctCase": "Dative",
        "translation": "I give the ball to the small boy.",
        "nominative": "mały",
        "type": ["adjectives"]
    },
    {
        "sentence": "Mówię prawdę ____ dziewczynie.",
        "correctWord": "uczciwej",
        "correctCase": "Dative",
        "translation": "I tell the truth to the honest girl.",
        "nominative": "uczciwy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję jedzenie ____ psu.",
        "correctWord": "wiernemu",
        "correctCase": "Dative",
        "translation": "I give food to the loyal dog.",
        "nominative": "wierny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję wodę ____ kotu.",
        "correctWord": "spragnionemu",
        "correctCase": "Dative",
        "translation": "I give water to the thirsty cat.",
        "nominative": "spragniony",
        "type": ["adjectives"]
    },
    {
        "sentence": "Pomagam ____ sąsiadowi.",
        "correctWord": "przyjaznemu",
        "correctCase": "Dative",
        "translation": "I help the friendly neighbor.",
        "nominative": "przyjazny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Wysyłam list ____ przyjacielowi.",
        "correctWord": "dobremu",
        "correctCase": "Dative",
        "translation": "I send a letter to the good friend.",
        "nominative": "dobry",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję zabawkę ____ dzieciom.",
        "correctWord": "grzecznym",
        "correctCase": "Dative",
        "translation": "I give a toy to the well-behaved children.",
        "nominative": "grzeczny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Pokazuję zdjęcia ____ rodzicom.",
        "correctWord": "kochającym",
        "correctCase": "Dative",
        "translation": "I show pictures to the loving parents.",
        "nominative": "kochający",
        "type": ["adjectives"]
    },
    {
        "sentence": "Czytam książkę ____ babci.",
        "correctWord": "miłej",
        "correctCase": "Dative",
        "translation": "I read a book to the nice grandmother.",
        "nominative": "miły",
        "type": ["adjectives"]
    },
    {
        "sentence": "Opowiadam historię ____ dziadkowi.",
        "correctWord": "starszemu",
        "correctCase": "Dative",
        "translation": "I tell a story to the old grandfather.",
        "nominative": "starszy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Kupuję prezent ____ koleżance.",
        "correctWord": "nowej",
        "correctCase": "Dative",
        "translation": "I buy a gift for the new female friend.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję cukierki ____ dzieciom.",
        "correctWord": "szczęśliwym",
        "correctCase": "Dative",
        "translation": "I give candies to the happy children.",
        "nominative": "szczęśliwy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Wręczam dyplom ____ uczennicy.",
        "correctWord": "najlepszej",
        "correctCase": "Dative",
        "translation": "I give a diploma to the best student (female).",
        "nominative": "najlepszy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Pokazuję mapę ____ turystom.",
        "correctWord": "zagranicznym",
        "correctCase": "Dative",
        "translation": "I show the map to the foreign tourists.",
        "nominative": "zagraniczny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję pieniądze ____ biednym.",
        "correctWord": "potrzebującym",
        "correctCase": "Dative",
        "translation": "I give money to the needy.",
        "nominative": "potrzebujący",
        "type": ["adjectives"]
    },
    {
        "sentence": "Pomagam ____ studentkom.",
        "correctWord": "inteligentnym",
        "correctCase": "Dative",
        "translation": "I help the intelligent female students.",
        "nominative": "inteligentny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Mówię komplementy ____ kobietom.",
        "correctWord": "pięknym",
        "correctCase": "Dative",
        "translation": "I give compliments to the beautiful women.",
        "nominative": "piękny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję nagrodę ____ zwycięzcy.",
        "correctWord": "szczęśliwemu",
        "correctCase": "Dative",
        "translation": "I give a prize to the happy winner.",
        "nominative": "szczęśliwy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Daję książkę ____.",
        "correctWord": "mi",
        "correctCase": "Dative",
        "translation": "I give a book to me.",
        "nominative": "ja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Daję prezent ____.",
        "correctWord": "tobie",
        "correctCase": "Dative",
        "translation": "I give a gift to you.",
        "nominative": "ty",
        "type": ["pronouns"]
    },
    {
        "sentence": "Pomagam ____.",
        "correctWord": "jemu",
        "correctCase": "Dative",
        "translation": "I help him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Pomagam ____.",
        "correctWord": "jej",
        "correctCase": "Dative",
        "translation": "I help her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Daję jabłko ____.",
        "correctWord": "temu",
        "correctCase": "Dative",
        "translation": "I give an apple to it.",
        "nominative": "ono",
        "type": ["pronouns"]
    },
    {
        "sentence": "Pokazuję dom ____.",
        "correctWord": "nam",
        "correctCase": "Dative",
        "translation": "I show the house to us.",
        "nominative": "my",
        "type": ["pronouns"]
    },
    {
        "sentence": "Daję kota ____.",
        "correctWord": "wam",
        "correctCase": "Dative",
        "translation": "I give the cat to you (plural).",
        "nominative": "wy",
        "type": ["pronouns"]
    },
    {
        "sentence": "Daję piłkę ____.",
        "correctWord": "im",
        "correctCase": "Dative",
        "translation": "I give the ball to them (masculine).",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "Daję wodę ____.",
        "correctWord": "im",
        "correctCase": "Dative",
        "translation": "I give water to them (feminine).",
        "nominative": "one",
        "type": ["pronouns"]
    },
    {
        "sentence": "Mówię prawdę ____.",
        "correctWord": "temu",
        "correctCase": "Dative",
        "translation": "I tell the truth to this one (masculine).",
        "nominative": "ten",
        "type": ["pronouns"]
    },
    {
        "sentence": "Mówię prawdę ____.",
        "correctWord": "tej",
        "correctCase": "Dative",
        "translation": "I tell the truth to this one (feminine).",
        "nominative": "ta",
        "type": ["pronouns"]
    },
    {
        "sentence": "Mówię prawdę ____.",
        "correctWord": "temu",
        "correctCase": "Dative",
        "translation": "I tell the truth to this one (neuter).",
        "nominative": "to",
        "type": ["pronouns"]
    },
    {
        "sentence": "Daję pieniądze ____.",
        "correctWord": "tym",
        "correctCase": "Dative",
        "translation": "I give money to those ones (masculine).",
        "nominative": "ci",
        "type": ["pronouns"]
    },
    {
        "sentence": "Daję pieniądze ____.",
        "correctWord": "tym",
        "correctCase": "Dative",
        "translation": "I give money to those ones (feminine).",
        "nominative": "te",
        "type": ["pronouns"]
    },
    {
        "sentence": "Kupuję prezent ____.",
        "correctWord": "mojemu",
        "correctCase": "Dative",
        "translation": "I buy a gift for mine (masculine).",
        "nominative": "mój",
        "type": ["pronouns"]
    },
    {
        "sentence": "Kupuję prezent ____.",
        "correctWord": "mojej",
        "correctCase": "Dative",
        "translation": "I buy a gift for mine (feminine).",
        "nominative": "moja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Kupuję prezent ____.",
        "correctWord": "mojemu",
        "correctCase": "Dative",
        "translation": "I buy a gift for mine (neuter).",
        "nominative": "moje",
        "type": ["pronouns"]
    },
    {
        "sentence": "Pokazuję zdjęcia ____.",
        "correctWord": "moim",
        "correctCase": "Dative",
        "translation": "I show pictures to mine (plural).",
        "nominative": "moi",
        "type": ["pronouns"]
    },
    {
        "sentence": "Pokazuję zdjęcia ____.",
        "correctWord": "moim",
        "correctCase": "Dative",
        "translation": "I show pictures to mine (feminine plural).",
        "nominative": "moje",
        "type": ["pronouns"]
    },
    {
        "sentence": "Czytam książkę ____.",
        "correctWord": "twojemu",
        "correctCase": "Dative",
        "translation": "I read a book to yours (masculine).",
        "nominative": "twój",
        "type": ["pronouns"]
    },
    {
        "sentence": "Czytam książkę ____.",
        "correctWord": "twojej",
        "correctCase": "Dative",
        "translation": "I read a book to yours (feminine).",
        "nominative": "twoja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Czytam książkę ____.",
        "correctWord": "twojemu",
        "correctCase": "Dative",
        "translation": "I read a book to yours (neuter).",
        "nominative": "twoje",
        "type": ["pronouns"]
    },
    {
        "sentence": "Wręczam dyplom ____.",
        "correctWord": "twoim",
        "correctCase": "Dative",
        "translation": "I give a diploma to yours (masculine plural).",
        "nominative": "twoi",
        "type": ["pronouns"]
    },
    {
        "sentence": "Wręczam dyplom ____.",
        "correctWord": "twoim",
        "correctCase": "Dative",
        "translation": "I give a diploma to yours (feminine plural).",
        "nominative": "twoje",
        "type": ["pronouns"]
    },
    {
        "sentence": "Daję nagrodę ____.",
        "correctWord": "naszemu",
        "correctCase": "Dative",
        "translation": "I give a prize to ours (masculine).",
        "nominative": "nasz",
        "type": ["pronouns"]
    },
    {
        "sentence": "Daję książkę ____ studentowi.",
        "correctWord": "jednemu",
        "correctCase": "Dative",
        "translation": "I give a book to one student.",
        "nominative": "jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "Daję prezent ____ nauczycielom.",
        "correctWord": "dwóm",
        "correctCase": "Dative",
        "translation": "I give a gift to two teachers.",
        "nominative": "dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Pomagam ____ kolegom.",
        "correctWord": "trzem",
        "correctCase": "Dative",
        "translation": "I help three colleagues.",
        "nominative": "trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Daję pieniądze ____ braciom.",
        "correctWord": "czterem",
        "correctCase": "Dative",
        "translation": "I give money to four brothers.",
        "nominative": "cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Daję jabłka ____ dzieciom.",
        "correctWord": "pięciu",
        "correctCase": "Dative",
        "translation": "I give apples to five children.",
        "nominative": "pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Pokazuję domy ____ rodzinom.",
        "correctWord": "sześciu",
        "correctCase": "Dative",
        "translation": "I show the houses to six families.",
        "nominative": "sześć",
        "type": ["numbers"]
    },
    {
        "sentence": "Daję kota ____ mężczyznom.",
        "correctWord": "siedmiu",
        "correctCase": "Dative",
        "translation": "I give the cat to seven men.",
        "nominative": "siedem",
        "type": ["numbers"]
    },
    {
        "sentence": "Daję piłki ____ chłopcom.",
        "correctWord": "ośmiu",
        "correctCase": "Dative",
        "translation": "I give the balls to eight boys.",
        "nominative": "osiem",
        "type": ["numbers"]
    },
    {
        "sentence": "Mówię prawdę ____ dziewczynom.",
        "correctWord": "dziewięciu",
        "correctCase": "Dative",
        "translation": "I tell the truth to nine girls.",
        "nominative": "dziewięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Daję jedzenie ____ psom.",
        "correctWord": "dziesięciu",
        "correctCase": "Dative",
        "translation": "I give food to ten dogs.",
        "nominative": "dziesięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Daję wodę ____ kotom.",
        "correctWord": "jedenastu",
        "correctCase": "Dative",
        "translation": "I give water to eleven cats.",
        "nominative": "jedenaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Pomagam ____ sąsiadom.",
        "correctWord": "dwunastu",
        "correctCase": "Dative",
        "translation": "I help twelve neighbors.",
        "nominative": "dwanaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Wysyłam listy ____ przyjaciołom.",
        "correctWord": "trzynastu",
        "correctCase": "Dative",
        "translation": "I send letters to thirteen friends.",
        "nominative": "trzynaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Daję zabawki ____ dzieciom.",
        "correctWord": "czternastu",
        "correctCase": "Dative",
        "translation": "I give toys to fourteen children.",
        "nominative": "czternaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Pokazuję zdjęcia ____ rodzicom.",
        "correctWord": "piętnastu",
        "correctCase": "Dative",
        "translation": "I show pictures to fifteen parents.",
        "nominative": "piętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Czytam książki ____ babciom.",
        "correctWord": "szesnastu",
        "correctCase": "Dative",
        "translation": "I read books to sixteen grandmothers.",
        "nominative": "szesnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Opowiadam historie ____ dziadkom.",
        "correctWord": "siedemnastu",
        "correctCase": "Dative",
        "translation": "I tell stories to seventeen grandfathers.",
        "nominative": "siedemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Kupuję prezenty ____ koleżankom.",
        "correctWord": "osiemnastu",
        "correctCase": "Dative",
        "translation": "I buy gifts for eighteen female friends.",
        "nominative": "osiemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Daję cukierki ____ dzieciom.",
        "correctWord": "dziewiętnastu",
        "correctCase": "Dative",
        "translation": "I give candies to nineteen children.",
        "nominative": "dziewiętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Wręczam dyplomy ____ uczniom.",
        "correctWord": "dwudziestu",
        "correctCase": "Dative",
        "translation": "I give diplomas to twenty students.",
        "nominative": "dwadzieścia",
        "type": ["numbers"]
    },
    {
        "sentence": "Pokazuję mapy ____ turystom.",
        "correctWord": "dwudziestu jeden",
        "correctCase": "Dative",
        "translation": "I show maps to twenty-one tourists.",
        "nominative": "dwadzieścia jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "Daję pieniądze ____ biednym.",
        "correctWord": "dwudziestu dwóch",
        "correctCase": "Dative",
        "translation": "I give money to twenty-two poor people.",
        "nominative": "dwadzieścia dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Pomagam ____ studentkom.",
        "correctWord": "dwudziestu trzem",
        "correctCase": "Dative",
        "translation": "I help twenty-three female students.",
        "nominative": "dwadzieścia trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Mówię komplementy ____ kobietom.",
        "correctWord": "dwudziestu czterem",
        "correctCase": "Dative",
        "translation": "I give compliments to twenty-four women.",
        "nominative": "dwadzieścia cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Daję nagrody ____ zwycięzcom.",
        "correctWord": "dwudziestu pięciu",
        "correctCase": "Dative",
        "translation": "I give prizes to twenty-five winners.",
        "nominative": "dwadzieścia pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "studenta",
        "correctCase": "Genitive",
        "translation": "There is no student.",
        "nominative": "student",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "nauczyciela",
        "correctCase": "Genitive",
        "translation": "There is no teacher.",
        "nominative": "nauczyciel",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "kota",
        "correctCase": "Genitive",
        "translation": "There is no cat.",
        "nominative": "kot",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "książki",
        "correctCase": "Genitive",
        "translation": "There is no book.",
        "nominative": "książka",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "muzyki",
        "correctCase": "Genitive",
        "translation": "There is no music.",
        "nominative": "muzyka",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "domu",
        "correctCase": "Genitive",
        "translation": "There is no house.",
        "nominative": "dom",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "samochodu",
        "correctCase": "Genitive",
        "translation": "There is no car.",
        "nominative": "samochód",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "psa",
        "correctCase": "Genitive",
        "translation": "There is no dog.",
        "nominative": "pies",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "komputera",
        "correctCase": "Genitive",
        "translation": "There is no computer.",
        "nominative": "komputer",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "telefonu",
        "correctCase": "Genitive",
        "translation": "There is no phone.",
        "nominative": "telefon",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "okna",
        "correctCase": "Genitive",
        "translation": "There is no window.",
        "nominative": "okno",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "stołu",
        "correctCase": "Genitive",
        "translation": "There is no table.",
        "nominative": "stół",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "krzesła",
        "correctCase": "Genitive",
        "translation": "There is no chair.",
        "nominative": "krzesło",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "zegara",
        "correctCase": "Genitive",
        "translation": "There is no clock.",
        "nominative": "zegar",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "drzwi",
        "correctCase": "Genitive",
        "translation": "There is no door.",
        "nominative": "drzwi",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "roweru",
        "correctCase": "Genitive",
        "translation": "There is no bicycle.",
        "nominative": "rower",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "szkoły",
        "correctCase": "Genitive",
        "translation": "There is no school.",
        "nominative": "szkoła",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "nauczyciela",
        "correctCase": "Genitive",
        "translation": "There is no teacher.",
        "nominative": "nauczyciel",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "ucznia",
        "correctCase": "Genitive",
        "translation": "There is no student.",
        "nominative": "uczeń",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "szpitala",
        "correctCase": "Genitive",
        "translation": "There is no hospital.",
        "nominative": "szpital",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "lekarza",
        "correctCase": "Genitive",
        "translation": "There is no doctor.",
        "nominative": "lekarz",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "pielęgniarki",
        "correctCase": "Genitive",
        "translation": "There is no nurse.",
        "nominative": "pielęgniarka",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "apteki",
        "correctCase": "Genitive",
        "translation": "There is no pharmacy.",
        "nominative": "apteka",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "kina",
        "correctCase": "Genitive",
        "translation": "There is no cinema.",
        "nominative": "kino",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "teatru",
        "correctCase": "Genitive",
        "translation": "There is no theater.",
        "nominative": "teatr",
        "type": ["nouns"]
    },
    {
        "sentence": "Nie ma ____ studenta.",
        "correctWord": "dobrego",
        "correctCase": "Genitive",
        "translation": "There is no good student.",
        "nominative": "dobry",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ nauczyciela.",
        "correctWord": "mądrego",
        "correctCase": "Genitive",
        "translation": "There is no wise teacher.",
        "nominative": "mądry",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ kota.",
        "correctWord": "czarnego",
        "correctCase": "Genitive",
        "translation": "There is no black cat.",
        "nominative": "czarny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ książki.",
        "correctWord": "nowej",
        "correctCase": "Genitive",
        "translation": "There is no new book.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ muzyki.",
        "correctWord": "ładnej",
        "correctCase": "Genitive",
        "translation": "There is no nice music.",
        "nominative": "ładny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ domu.",
        "correctWord": "dużego",
        "correctCase": "Genitive",
        "translation": "There is no big house.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ samochodu.",
        "correctWord": "szybkiego",
        "correctCase": "Genitive",
        "translation": "There is no fast car.",
        "nominative": "szybki",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ psa.",
        "correctWord": "wiernego",
        "correctCase": "Genitive",
        "translation": "There is no faithful dog.",
        "nominative": "wierny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ komputera.",
        "correctWord": "nowego",
        "correctCase": "Genitive",
        "translation": "There is no new computer.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ telefonu.",
        "correctWord": "starego",
        "correctCase": "Genitive",
        "translation": "There is no old phone.",
        "nominative": "stary",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ okna.",
        "correctWord": "dużego",
        "correctCase": "Genitive",
        "translation": "There is no large window.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ stołu.",
        "correctWord": "drewnianego",
        "correctCase": "Genitive",
        "translation": "There is no wooden table.",
        "nominative": "drewniany",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ krzesła.",
        "correctWord": "plastikowego",
        "correctCase": "Genitive",
        "translation": "There is no plastic chair.",
        "nominative": "plastikowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ zegara.",
        "correctWord": "złotego",
        "correctCase": "Genitive",
        "translation": "There is no golden clock.",
        "nominative": "złoty",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ drzwi.",
        "correctWord": "stalowych",
        "correctCase": "Genitive",
        "translation": "There is no steel door.",
        "nominative": "stalowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ roweru.",
        "correctWord": "sportowego",
        "correctCase": "Genitive",
        "translation": "There is no sports bicycle.",
        "nominative": "sportowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ szkoły.",
        "correctWord": "nowoczesnej",
        "correctCase": "Genitive",
        "translation": "There is no modern school.",
        "nominative": "nowoczesny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ nauczyciela.",
        "correctWord": "surowego",
        "correctCase": "Genitive",
        "translation": "There is no strict teacher.",
        "nominative": "surowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ ucznia.",
        "correctWord": "zdolnego",
        "correctCase": "Genitive",
        "translation": "There is no talented student.",
        "nominative": "zdolny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ szpitala.",
        "correctWord": "nowego",
        "correctCase": "Genitive",
        "translation": "There is no new hospital.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ lekarza.",
        "correctWord": "doświadczonego",
        "correctCase": "Genitive",
        "translation": "There is no experienced doctor.",
        "nominative": "doświadczony",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ pielęgniarki.",
        "correctWord": "miłej",
        "correctCase": "Genitive",
        "translation": "There is no nice nurse.",
        "nominative": "miły",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ apteki.",
        "correctWord": "bliskiej",
        "correctCase": "Genitive",
        "translation": "There is no nearby pharmacy.",
        "nominative": "bliski",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ kina.",
        "correctWord": "dużego",
        "correctCase": "Genitive",
        "translation": "There is no big cinema.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____ teatru.",
        "correctWord": "znanego",
        "correctCase": "Genitive",
        "translation": "There is no famous theater.",
        "nominative": "znany",
        "type": ["adjectives"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "mnie",
        "correctCase": "Genitive",
        "translation": "There is no me.",
        "nominative": "ja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "ciebie",
        "correctCase": "Genitive",
        "translation": "There is no you.",
        "nominative": "ty",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "jego",
        "correctCase": "Genitive",
        "translation": "There is no him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "jej",
        "correctCase": "Genitive",
        "translation": "There is no her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "tego",
        "correctCase": "Genitive",
        "translation": "There is no it.",
        "nominative": "ono",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "nas",
        "correctCase": "Genitive",
        "translation": "There is no us.",
        "nominative": "my",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "was",
        "correctCase": "Genitive",
        "translation": "There is no you (plural).",
        "nominative": "wy",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "ich",
        "correctCase": "Genitive",
        "translation": "There is no them (masculine).",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "ich",
        "correctCase": "Genitive",
        "translation": "There is no them (feminine).",
        "nominative": "one",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "tamtego",
        "correctCase": "Genitive",
        "translation": "There is no that one (masculine).",
        "nominative": "tamten",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "tamtej",
        "correctCase": "Genitive",
        "translation": "There is no that one (feminine).",
        "nominative": "tamta",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "tamtego",
        "correctCase": "Genitive",
        "translation": "There is no that one (neuter).",
        "nominative": "tamto",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "tych",
        "correctCase": "Genitive",
        "translation": "There is no those ones (masculine).",
        "nominative": "ci",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "tych",
        "correctCase": "Genitive",
        "translation": "There is no those ones (feminine).",
        "nominative": "te",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "mojego",
        "correctCase": "Genitive",
        "translation": "There is no mine (masculine).",
        "nominative": "mój",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "mojej",
        "correctCase": "Genitive",
        "translation": "There is no mine (feminine).",
        "nominative": "moja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "mojego",
        "correctCase": "Genitive",
        "translation": "There is no mine (neuter).",
        "nominative": "moje",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "moich",
        "correctCase": "Genitive",
        "translation": "There is no mine (plural).",
        "nominative": "moi",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "twojego",
        "correctCase": "Genitive",
        "translation": "There is no yours (masculine).",
        "nominative": "twój",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "twojej",
        "correctCase": "Genitive",
        "translation": "There is no yours (feminine).",
        "nominative": "twoja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "twojego",
        "correctCase": "Genitive",
        "translation": "There is no yours (neuter).",
        "nominative": "twoje",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "twoich",
        "correctCase": "Genitive",
        "translation": "There is no yours (plural).",
        "nominative": "twoi",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "naszego",
        "correctCase": "Genitive",
        "translation": "There is no ours (masculine).",
        "nominative": "nasz",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "naszej",
        "correctCase": "Genitive",
        "translation": "There is no ours (feminine).",
        "nominative": "nasza",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____.",
        "correctWord": "naszego",
        "correctCase": "Genitive",
        "translation": "There is no ours (neuter).",
        "nominative": "nasze",
        "type": ["pronouns"]
    },
    {
        "sentence": "Nie ma ____ książek.",
        "correctWord": "jednej",
        "correctCase": "Genitive",
        "translation": "There is no one book.",
        "nominative": "jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ kotów.",
        "correctWord": "dwóch",
        "correctCase": "Genitive",
        "translation": "There are no two cats.",
        "nominative": "dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ psów.",
        "correctWord": "trzech",
        "correctCase": "Genitive",
        "translation": "There are no three dogs.",
        "nominative": "trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ domów.",
        "correctWord": "czterech",
        "correctCase": "Genitive",
        "translation": "There are no four houses.",
        "nominative": "cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ samochodów.",
        "correctWord": "pięciu",
        "correctCase": "Genitive",
        "translation": "There are no five cars.",
        "nominative": "pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ dzieci.",
        "correctWord": "sześciu",
        "correctCase": "Genitive",
        "translation": "There are no six children.",
        "nominative": "sześć",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ książek.",
        "correctWord": "siedmiu",
        "correctCase": "Genitive",
        "translation": "There are no seven books.",
        "nominative": "siedem",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ stołów.",
        "correctWord": "ośmiu",
        "correctCase": "Genitive",
        "translation": "There are no eight tables.",
        "nominative": "osiem",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ krzeseł.",
        "correctWord": "dziewięciu",
        "correctCase": "Genitive",
        "translation": "There are no nine chairs.",
        "nominative": "dziewięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ okien.",
        "correctWord": "dziesięciu",
        "correctCase": "Genitive",
        "translation": "There are no ten windows.",
        "nominative": "dziesięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ ludzi.",
        "correctWord": "jedenastu",
        "correctCase": "Genitive",
        "translation": "There are no eleven people.",
        "nominative": "jedenaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ rowerów.",
        "correctWord": "dwunastu",
        "correctCase": "Genitive",
        "translation": "There are no twelve bicycles.",
        "nominative": "dwanaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ uczniów.",
        "correctWord": "trzynastu",
        "correctCase": "Genitive",
        "translation": "There are no thirteen students.",
        "nominative": "trzynaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ książek.",
        "correctWord": "czternastu",
        "correctCase": "Genitive",
        "translation": "There are no fourteen books.",
        "nominative": "czternaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ domów.",
        "correctWord": "piętnastu",
        "correctCase": "Genitive",
        "translation": "There are no fifteen houses.",
        "nominative": "piętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ psów.",
        "correctWord": "szesnastu",
        "correctCase": "Genitive",
        "translation": "There are no sixteen dogs.",
        "nominative": "szesnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ kotów.",
        "correctWord": "siedemnastu",
        "correctCase": "Genitive",
        "translation": "There are no seventeen cats.",
        "nominative": "siedemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ drzew.",
        "correctWord": "osiemnastu",
        "correctCase": "Genitive",
        "translation": "There are no eighteen trees.",
        "nominative": "osiemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ kwiatów.",
        "correctWord": "dziewiętnastu",
        "correctCase": "Genitive",
        "translation": "There are no nineteen flowers.",
        "nominative": "dziewiętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ ludzi.",
        "correctWord": "dwudziestu",
        "correctCase": "Genitive",
        "translation": "There are no twenty people.",
        "nominative": "dwadzieścia",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ rowerzystów.",
        "correctWord": "dwudziestu jeden",
        "correctCase": "Genitive",
        "translation": "There are no twenty-one cyclists.",
        "nominative": "dwadzieścia jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ samochodów.",
        "correctWord": "dwudziestu dwóch",
        "correctCase": "Genitive",
        "translation": "There are no twenty-two cars.",
        "nominative": "dwadzieścia dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ książek.",
        "correctWord": "dwudziestu trzech",
        "correctCase": "Genitive",
        "translation": "There are no twenty-three books.",
        "nominative": "dwadzieścia trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ domów.",
        "correctWord": "dwudziestu czterech",
        "correctCase": "Genitive",
        "translation": "There are no twenty-four houses.",
        "nominative": "dwadzieścia cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Nie ma ____ psów.",
        "correctWord": "dwudziestu pięciu",
        "correctCase": "Genitive",
        "translation": "There are no twenty-five dogs.",
        "nominative": "dwadzieścia pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Rozmawiam z ____.",
        "correctWord": "studentem",
        "correctCase": "Instrumental",
        "translation": "I am talking with a student.",
        "nominative": "student",
        "type": ["nouns"]
    },
    {
        "sentence": "Jestem ____.",
        "correctWord": "nauczycielem",
        "correctCase": "Instrumental",
        "translation": "I am a teacher.",
        "nominative": "nauczyciel",
        "type": ["nouns"]
    },
    {
        "sentence": "Piszę list ____.",
        "correctWord": "przyjacielem",
        "correctCase": "Instrumental",
        "translation": "I am writing a letter with a friend.",
        "nominative": "przyjaciel",
        "type": ["nouns"]
    },
    {
        "sentence": "Idę na spacer z ____.",
        "correctWord": "psem",
        "correctCase": "Instrumental",
        "translation": "I am going for a walk with a dog.",
        "nominative": "pies",
        "type": ["nouns"]
    },
    {
        "sentence": "Podróżuję z ____.",
        "correctWord": "rodziną",
        "correctCase": "Instrumental",
        "translation": "I am traveling with a family.",
        "nominative": "rodzina",
        "type": ["nouns"]
    },
    {
        "sentence": "Chcę być ____.",
        "correctWord": "lekarzem",
        "correctCase": "Instrumental",
        "translation": "I want to be a doctor.",
        "nominative": "lekarz",
        "type": ["nouns"]
    },
    {
        "sentence": "Zostałem ____.",
        "correctWord": "inżynierem",
        "correctCase": "Instrumental",
        "translation": "I became an engineer.",
        "nominative": "inżynier",
        "type": ["nouns"]
    },
    {
        "sentence": "Zajmuję się ____.",
        "correctWord": "muzyką",
        "correctCase": "Instrumental",
        "translation": "I am involved with music.",
        "nominative": "muzyka",
        "type": ["nouns"]
    },
    {
        "sentence": "Rozmawiam przez ____.",
        "correctWord": "telefon",
        "correctCase": "Instrumental",
        "translation": "I am talking on the phone.",
        "nominative": "telefon",
        "type": ["nouns"]
    },
    {
        "sentence": "Piszę na ____.",
        "correctWord": "komputerze",
        "correctCase": "Instrumental",
        "translation": "I am typing on the computer.",
        "nominative": "komputer",
        "type": ["nouns"]
    },
    {
        "sentence": "Idę do kina z ____.",
        "correctWord": "kolegą",
        "correctCase": "Instrumental",
        "translation": "I am going to the cinema with a colleague.",
        "nominative": "kolega",
        "type": ["nouns"]
    },
    {
        "sentence": "Zjadam obiad z ____.",
        "correctWord": "bratem",
        "correctCase": "Instrumental",
        "translation": "I am eating dinner with my brother.",
        "nominative": "brat",
        "type": ["nouns"]
    },
    {
        "sentence": "Mieszkam z ____.",
        "correctWord": "rodzicami",
        "correctCase": "Instrumental",
        "translation": "I live with my parents.",
        "nominative": "rodzice",
        "type": ["nouns"]
    },
    {
        "sentence": "Czytam książkę o ____.",
        "correctWord": "historii",
        "correctCase": "Instrumental",
        "translation": "I am reading a book about history.",
        "nominative": "historia",
        "type": ["nouns"]
    },
    {
        "sentence": "Pracuję nad ____.",
        "correctWord": "projektem",
        "correctCase": "Instrumental",
        "translation": "I am working on a project.",
        "nominative": "projekt",
        "type": ["nouns"]
    },
    {
        "sentence": "Kieruję ____.",
        "correctWord": "samochodem",
        "correctCase": "Instrumental",
        "translation": "I am driving a car.",
        "nominative": "samochód",
        "type": ["nouns"]
    },
    {
        "sentence": "Interesuję się ____.",
        "correctWord": "sportem",
        "correctCase": "Instrumental",
        "translation": "I am interested in sports.",
        "nominative": "sport",
        "type": ["nouns"]
    },
    {
        "sentence": "Bawię się z ____.",
        "correctWord": "dzieckiem",
        "correctCase": "Instrumental",
        "translation": "I am playing with a child.",
        "nominative": "dziecko",
        "type": ["nouns"]
    },
    {
        "sentence": "Lubię rozmawiać z ____.",
        "correctWord": "sąsiadem",
        "correctCase": "Instrumental",
        "translation": "I like to talk with my neighbor.",
        "nominative": "sąsiad",
        "type": ["nouns"]
    },
    {
        "sentence": "Piszę z ____.",
        "correctWord": "długopisem",
        "correctCase": "Instrumental",
        "translation": "I am writing with a pen.",
        "nominative": "długopis",
        "type": ["nouns"]
    },
    {
        "sentence": "Maluję obraz ____.",
        "correctWord": "pędzlem",
        "correctCase": "Instrumental",
        "translation": "I am painting a picture with a brush.",
        "nominative": "pędzel",
        "type": ["nouns"]
    },
    {
        "sentence": "Rozmawiam z ____.",
        "correctWord": "lekarką",
        "correctCase": "Instrumental",
        "translation": "I am talking with a female doctor.",
        "nominative": "lekarka",
        "type": ["nouns"]
    },
    {
        "sentence": "Jadę do pracy z ____.",
        "correctWord": "żoną",
        "correctCase": "Instrumental",
        "translation": "I am going to work with my wife.",
        "nominative": "żona",
        "type": ["nouns"]
    },
    {
        "sentence": "Lecę do Londynu z ____.",
        "correctWord": "przyjaciółką",
        "correctCase": "Instrumental",
        "translation": "I am flying to London with my female friend.",
        "nominative": "przyjaciółka",
        "type": ["nouns"]
    },
    {
        "sentence": "Spaceruję z ____.",
        "correctWord": "babcią",
        "correctCase": "Instrumental",
        "translation": "I am walking with my grandmother.",
        "nominative": "babcia",
        "type": ["nouns"]
    },
    {
        "sentence": "Rozmawiam z ____ studentem.",
        "correctWord": "dobrym",
        "correctCase": "Instrumental",
        "translation": "I am talking with a good student.",
        "nominative": "dobry",
        "type": ["adjectives"]
    },
    {
        "sentence": "Jestem ____ nauczycielem.",
        "correctWord": "mądrym",
        "correctCase": "Instrumental",
        "translation": "I am a wise teacher.",
        "nominative": "mądry",
        "type": ["adjectives"]
    },
    {
        "sentence": "Piszę list ____ przyjacielem.",
        "correctWord": "wiernym",
        "correctCase": "Instrumental",
        "translation": "I am writing a letter with a loyal friend.",
        "nominative": "wierny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Idę na spacer z ____ psem.",
        "correctWord": "dużym",
        "correctCase": "Instrumental",
        "translation": "I am going for a walk with a big dog.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Podróżuję z ____ rodziną.",
        "correctWord": "całą",
        "correctCase": "Instrumental",
        "translation": "I am traveling with the whole family.",
        "nominative": "cały",
        "type": ["adjectives"]
    },
    {
        "sentence": "Chcę być ____ lekarzem.",
        "correctWord": "dobrym",
        "correctCase": "Instrumental",
        "translation": "I want to be a good doctor.",
        "nominative": "dobry",
        "type": ["adjectives"]
    },
    {
        "sentence": "Zostałem ____ inżynierem.",
        "correctWord": "utalentowanym",
        "correctCase": "Instrumental",
        "translation": "I became a talented engineer.",
        "nominative": "utalentowany",
        "type": ["adjectives"]
    },
    {
        "sentence": "Zajmuję się ____ muzyką.",
        "correctWord": "klasyczną",
        "correctCase": "Instrumental",
        "translation": "I am involved with classical music.",
        "nominative": "klasyczny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Rozmawiam przez ____ telefonem.",
        "correctWord": "nowym",
        "correctCase": "Instrumental",
        "translation": "I am talking on the new phone.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Piszę na ____ komputerze.",
        "correctWord": "szybkim",
        "correctCase": "Instrumental",
        "translation": "I am typing on the fast computer.",
        "nominative": "szybki",
        "type": ["adjectives"]
    },
    {
        "sentence": "Idę do kina z ____ kolegą.",
        "correctWord": "miłym",
        "correctCase": "Instrumental",
        "translation": "I am going to the cinema with a nice colleague.",
        "nominative": "miły",
        "type": ["adjectives"]
    },
    {
        "sentence": "Zjadam obiad z ____ bratem.",
        "correctWord": "młodszym",
        "correctCase": "Instrumental",
        "translation": "I am eating dinner with my younger brother.",
        "nominative": "młodszy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Mieszkam z ____ rodzicami.",
        "correctWord": "kochającymi",
        "correctCase": "Instrumental",
        "translation": "I live with my loving parents.",
        "nominative": "kochający",
        "type": ["adjectives"]
    },
    {
        "sentence": "Czytam książkę o ____ historii.",
        "correctWord": "starożytnej",
        "correctCase": "Instrumental",
        "translation": "I am reading a book about ancient history.",
        "nominative": "starożytny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Pracuję nad ____ projektem.",
        "correctWord": "ważnym",
        "correctCase": "Instrumental",
        "translation": "I am working on an important project.",
        "nominative": "ważny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Kieruję ____ samochodem.",
        "correctWord": "sportowym",
        "correctCase": "Instrumental",
        "translation": "I am driving a sports car.",
        "nominative": "sportowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Interesuję się ____ sportem.",
        "correctWord": "zawodowym",
        "correctCase": "Instrumental",
        "translation": "I am interested in professional sports.",
        "nominative": "zawodowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Bawię się z ____ dzieckiem.",
        "correctWord": "wesołym",
        "correctCase": "Instrumental",
        "translation": "I am playing with a cheerful child.",
        "nominative": "wesoły",
        "type": ["adjectives"]
    },
    {
        "sentence": "Lubię rozmawiać z ____ sąsiadem.",
        "correctWord": "starszym",
        "correctCase": "Instrumental",
        "translation": "I like to talk with my elderly neighbor.",
        "nominative": "starszy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Piszę z ____ długopisem.",
        "correctWord": "niebieskim",
        "correctCase": "Instrumental",
        "translation": "I am writing with a blue pen.",
        "nominative": "niebieski",
        "type": ["adjectives"]
    },
    {
        "sentence": "Maluję obraz ____ pędzlem.",
        "correctWord": "dużym",
        "correctCase": "Instrumental",
        "translation": "I am painting a picture with a large brush.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Rozmawiam z ____ lekarką.",
        "correctWord": "sympatyczną",
        "correctCase": "Instrumental",
        "translation": "I am talking with a friendly female doctor.",
        "nominative": "sympatyczny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Jadę do pracy z ____ żoną.",
        "correctWord": "kochającą",
        "correctCase": "Instrumental",
        "translation": "I am going to work with my loving wife.",
        "nominative": "kochający",
        "type": ["adjectives"]
    },
    {
        "sentence": "Lecę do Londynu z ____ przyjaciółką.",
        "correctWord": "bliską",
        "correctCase": "Instrumental",
        "translation": "I am flying to London with my close female friend.",
        "nominative": "bliski",
        "type": ["adjectives"]
    },
    {
        "sentence": "Spaceruję z ____ babcią.",
        "correctWord": "kochaną",
        "correctCase": "Instrumental",
        "translation": "I am walking with my dear grandmother.",
        "nominative": "kochany",
        "type": ["adjectives"]
    },
    {
        "sentence": "Rozmawiam z ____.",
        "correctWord": "nim",
        "correctCase": "Instrumental",
        "translation": "I am talking with him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Piszę list z ____.",
        "correctWord": "nią",
        "correctCase": "Instrumental",
        "translation": "I am writing a letter with her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Idę na spacer z ____.",
        "correctWord": "nimi",
        "correctCase": "Instrumental",
        "translation": "I am going for a walk with them.",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "Podróżuję z ____.",
        "correctWord": "nimi",
        "correctCase": "Instrumental",
        "translation": "I am traveling with them.",
        "nominative": "one",
        "type": ["pronouns"]
    },
    {
        "sentence": "Chcę być z ____.",
        "correctWord": "nią",
        "correctCase": "Instrumental",
        "translation": "I want to be with her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Zostałem z ____.",
        "correctWord": "nim",
        "correctCase": "Instrumental",
        "translation": "I stayed with him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Zajmuję się ____.",
        "correctWord": "nią",
        "correctCase": "Instrumental",
        "translation": "I am taking care of her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Rozmawiam przez telefon z ____.",
        "correctWord": "nią",
        "correctCase": "Instrumental",
        "translation": "I am talking on the phone with her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Piszę na komputerze z ____.",
        "correctWord": "nim",
        "correctCase": "Instrumental",
        "translation": "I am typing on the computer with him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Idę do kina z ____.",
        "correctWord": "tobą",
        "correctCase": "Instrumental",
        "translation": "I am going to the cinema with you.",
        "nominative": "ty",
        "type": ["pronouns"]
    },
    {
        "sentence": "Zjadam obiad z ____.",
        "correctWord": "nimi",
        "correctCase": "Instrumental",
        "translation": "I am eating dinner with them.",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "Mieszkam z ____.",
        "correctWord": "nimi",
        "correctCase": "Instrumental",
        "translation": "I live with them.",
        "nominative": "one",
        "type": ["pronouns"]
    },
    {
        "sentence": "Czytam książkę z ____.",
        "correctWord": "nią",
        "correctCase": "Instrumental",
        "translation": "I am reading a book with her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Pracuję z ____.",
        "correctWord": "nim",
        "correctCase": "Instrumental",
        "translation": "I am working with him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Kieruję samochodem z ____.",
        "correctWord": "nią",
        "correctCase": "Instrumental",
        "translation": "I am driving with her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Interesuję się ____.",
        "correctWord": "nimi",
        "correctCase": "Instrumental",
        "translation": "I am interested in them.",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "Bawię się z ____.",
        "correctWord": "nimi",
        "correctCase": "Instrumental",
        "translation": "I am playing with them.",
        "nominative": "one",
        "type": ["pronouns"]
    },
    {
        "sentence": "Lubię rozmawiać z ____.",
        "correctWord": "tobą",
        "correctCase": "Instrumental",
        "translation": "I like to talk with you.",
        "nominative": "ty",
        "type": ["pronouns"]
    },
    {
        "sentence": "Piszę z ____.",
        "correctWord": "nim",
        "correctCase": "Instrumental",
        "translation": "I am writing with him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Maluję obraz z ____.",
        "correctWord": "nią",
        "correctCase": "Instrumental",
        "translation": "I am painting a picture with her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Rozmawiam z ____.",
        "correctWord": "wami",
        "correctCase": "Instrumental",
        "translation": "I am talking with you (plural).",
        "nominative": "wy",
        "type": ["pronouns"]
    },
    {
        "sentence": "Jadę do pracy z ____.",
        "correctWord": "nimi",
        "correctCase": "Instrumental",
        "translation": "I am going to work with them.",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "Lecę do Londynu z ____.",
        "correctWord": "nią",
        "correctCase": "Instrumental",
        "translation": "I am flying to London with her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Spaceruję z ____.",
        "correctWord": "tobą",
        "correctCase": "Instrumental",
        "translation": "I am walking with you.",
        "nominative": "ty",
        "type": ["pronouns"]
    },
    {
        "sentence": "Rozmawiam z ____.",
        "correctWord": "mną",
        "correctCase": "Instrumental",
        "translation": "I am talking with myself.",
        "nominative": "ja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Idę na spacer z ____ psami.",
        "correctWord": "dwoma",
        "correctCase": "Instrumental",
        "translation": "I am going for a walk with two dogs.",
        "nominative": "dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Rozmawiam z ____ studentami.",
        "correctWord": "trzema",
        "correctCase": "Instrumental",
        "translation": "I am talking with three students.",
        "nominative": "trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Piszę list z ____ kolegami.",
        "correctWord": "czterema",
        "correctCase": "Instrumental",
        "translation": "I am writing a letter with four colleagues.",
        "nominative": "cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Podróżuję z ____ przyjaciółmi.",
        "correctWord": "pięcioma",
        "correctCase": "Instrumental",
        "translation": "I am traveling with five friends.",
        "nominative": "pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Jestem z ____ braćmi.",
        "correctWord": "sześcioma",
        "correctCase": "Instrumental",
        "translation": "I am with six brothers.",
        "nominative": "sześć",
        "type": ["numbers"]
    },
    {
        "sentence": "Spotykam się z ____ nauczycielami.",
        "correctWord": "siedmioma",
        "correctCase": "Instrumental",
        "translation": "I am meeting with seven teachers.",
        "nominative": "siedem",
        "type": ["numbers"]
    },
    {
        "sentence": "Idę do kina z ____ kolegami.",
        "correctWord": "ośmioma",
        "correctCase": "Instrumental",
        "translation": "I am going to the cinema with eight colleagues.",
        "nominative": "osiem",
        "type": ["numbers"]
    },
    {
        "sentence": "Zjadam obiad z ____ przyjaciółmi.",
        "correctWord": "dziewięcioma",
        "correctCase": "Instrumental",
        "translation": "I am eating dinner with nine friends.",
        "nominative": "dziewięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Mieszkam z ____ studentami.",
        "correctWord": "dziesięcioma",
        "correctCase": "Instrumental",
        "translation": "I live with ten students.",
        "nominative": "dziesięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Rozmawiam przez telefon z ____ osobami.",
        "correctWord": "jedenastoma",
        "correctCase": "Instrumental",
        "translation": "I am talking on the phone with eleven people.",
        "nominative": "jedenaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Piszę na komputerze z ____ współpracownikami.",
        "correctWord": "dwunastoma",
        "correctCase": "Instrumental",
        "translation": "I am typing on the computer with twelve coworkers.",
        "nominative": "dwanaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Idę do parku z ____ dziećmi.",
        "correctWord": "trzynastoma",
        "correctCase": "Instrumental",
        "translation": "I am going to the park with thirteen children.",
        "nominative": "trzynaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Pracuję nad projektem z ____ osobami.",
        "correctWord": "czternastoma",
        "correctCase": "Instrumental",
        "translation": "I am working on a project with fourteen people.",
        "nominative": "czternaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Kieruję samochodem z ____ przyjaciółmi.",
        "correctWord": "piętnastoma",
        "correctCase": "Instrumental",
        "translation": "I am driving with fifteen friends.",
        "nominative": "piętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Interesuję się ____ tematami.",
        "correctWord": "szesnastoma",
        "correctCase": "Instrumental",
        "translation": "I am interested in sixteen topics.",
        "nominative": "szesnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Bawię się z ____ dzieciakami.",
        "correctWord": "siedemnastoma",
        "correctCase": "Instrumental",
        "translation": "I am playing with seventeen kids.",
        "nominative": "siedemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Lubię rozmawiać z ____ gośćmi.",
        "correctWord": "osiemnastoma",
        "correctCase": "Instrumental",
        "translation": "I like to talk with eighteen guests.",
        "nominative": "osiemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Spaceruję z ____ zwierzakami.",
        "correctWord": "dziewiętnastoma",
        "correctCase": "Instrumental",
        "translation": "I am walking with nineteen pets.",
        "nominative": "dziewiętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Spotykam się z ____ studentami.",
        "correctWord": "dwudziestoma",
        "correctCase": "Instrumental",
        "translation": "I am meeting with twenty students.",
        "nominative": "dwadzieścia",
        "type": ["numbers"]
    },
    {
        "sentence": "Jadę na wycieczkę z ____ przyjaciółmi.",
        "correctWord": "dwudziestoma jednym",
        "correctCase": "Instrumental",
        "translation": "I am going on a trip with twenty-one friends.",
        "nominative": "dwadzieścia jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "Rozmawiam z ____ osobami.",
        "correctWord": "dwudziestoma dwoma",
        "correctCase": "Instrumental",
        "translation": "I am talking with twenty-two people.",
        "nominative": "dwadzieścia dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Pracuję nad projektem z ____ osobami.",
        "correctWord": "dwudziestoma trzema",
        "correctCase": "Instrumental",
        "translation": "I am working on a project with twenty-three people.",
        "nominative": "dwadzieścia trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Idę na spacer z ____ przyjaciółmi.",
        "correctWord": "dwudziestoma czterema",
        "correctCase": "Instrumental",
        "translation": "I am going for a walk with twenty-four friends.",
        "nominative": "dwadzieścia cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Podróżuję z ____ studentami.",
        "correctWord": "dwudziestoma pięcioma",
        "correctCase": "Instrumental",
        "translation": "I am traveling with twenty-five students.",
        "nominative": "dwadzieścia pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Mieszkam w ____.",
        "correctWord": "mieście",
        "correctCase": "Locative",
        "translation": "I live in the city.",
        "nominative": "miasto",
        "type": ["nouns"]
    },
    {
        "sentence": "Pracuję w ____.",
        "correctWord": "biurze",
        "correctCase": "Locative",
        "translation": "I work in the office.",
        "nominative": "biuro",
        "type": ["nouns"]
    },
    {
        "sentence": "Odpoczywam na ____.",
        "correctWord": "plaży",
        "correctCase": "Locative",
        "translation": "I am resting on the beach.",
        "nominative": "plaża",
        "type": ["nouns"]
    },
    {
        "sentence": "Czytam książkę w ____.",
        "correctWord": "łóżku",
        "correctCase": "Locative",
        "translation": "I am reading a book in bed.",
        "nominative": "łóżko",
        "type": ["nouns"]
    },
    {
        "sentence": "Spotykam się z kolegą w ____.",
        "correctWord": "kawiarni",
        "correctCase": "Locative",
        "translation": "I am meeting with a friend in the café.",
        "nominative": "kawiarnia",
        "type": ["nouns"]
    },
    {
        "sentence": "Rozmawiam przez telefon w ____.",
        "correctWord": "kuchni",
        "correctCase": "Locative",
        "translation": "I am talking on the phone in the kitchen.",
        "nominative": "kuchnia",
        "type": ["nouns"]
    },
    {
        "sentence": "Jestem na ____.",
        "correctWord": "dworcu",
        "correctCase": "Locative",
        "translation": "I am at the station.",
        "nominative": "dworzec",
        "type": ["nouns"]
    },
    {
        "sentence": "Jem obiad w ____.",
        "correctWord": "restauracji",
        "correctCase": "Locative",
        "translation": "I am eating dinner in the restaurant.",
        "nominative": "restauracja",
        "type": ["nouns"]
    },
    {
        "sentence": "Czekam na ciebie w ____.",
        "correctWord": "parku",
        "correctCase": "Locative",
        "translation": "I am waiting for you in the park.",
        "nominative": "park",
        "type": ["nouns"]
    },
    {
        "sentence": "Jestem w ____.",
        "correctWord": "szkole",
        "correctCase": "Locative",
        "translation": "I am in school.",
        "nominative": "szkoła",
        "type": ["nouns"]
    },
    {
        "sentence": "Mieszkam w ____.",
        "correctWord": "domu",
        "correctCase": "Locative",
        "translation": "I live in the house.",
        "nominative": "dom",
        "type": ["nouns"]
    },
    {
        "sentence": "Jestem na ____.",
        "correctWord": "uniwersytecie",
        "correctCase": "Locative",
        "translation": "I am at the university.",
        "nominative": "uniwersytet",
        "type": ["nouns"]
    },
    {
        "sentence": "Siedzę na ____.",
        "correctWord": "krześle",
        "correctCase": "Locative",
        "translation": "I am sitting on the chair.",
        "nominative": "krzesło",
        "type": ["nouns"]
    },
    {
        "sentence": "Jestem w ____.",
        "correctWord": "samolocie",
        "correctCase": "Locative",
        "translation": "I am in the airplane.",
        "nominative": "samolot",
        "type": ["nouns"]
    },
    {
        "sentence": "Mieszkam na ____.",
        "correctWord": "wsi",
        "correctCase": "Locative",
        "translation": "I live in the village.",
        "nominative": "wieś",
        "type": ["nouns"]
    },
    {
        "sentence": "Jestem na ____.",
        "correctWord": "wyspie",
        "correctCase": "Locative",
        "translation": "I am on the island.",
        "nominative": "wyspa",
        "type": ["nouns"]
    },
    {
        "sentence": "Rozmawiamy o ____.",
        "correctWord": "filmie",
        "correctCase": "Locative",
        "translation": "We are talking about the movie.",
        "nominative": "film",
        "type": ["nouns"]
    },
    {
        "sentence": "Myślę o ____.",
        "correctWord": "przyszłości",
        "correctCase": "Locative",
        "translation": "I am thinking about the future.",
        "nominative": "przyszłość",
        "type": ["nouns"]
    },
    {
        "sentence": "Jestem na ____.",
        "correctWord": "przystanku",
        "correctCase": "Locative",
        "translation": "I am at the bus stop.",
        "nominative": "przystanek",
        "type": ["nouns"]
    },
    {
        "sentence": "Jestem w ____.",
        "correctWord": "szpitalu",
        "correctCase": "Locative",
        "translation": "I am in the hospital.",
        "nominative": "szpital",
        "type": ["nouns"]
    },
    {
        "sentence": "Pracuję w ____.",
        "correctWord": "bibliotece",
        "correctCase": "Locative",
        "translation": "I work in the library.",
        "nominative": "biblioteka",
        "type": ["nouns"]
    },
    {
        "sentence": "Bawię się w ____.",
        "correctWord": "ogrodzie",
        "correctCase": "Locative",
        "translation": "I am playing in the garden.",
        "nominative": "ogród",
        "type": ["nouns"]
    },
    {
        "sentence": "Mieszkam w ____.",
        "correctWord": "apartamencie",
        "correctCase": "Locative",
        "translation": "I live in the apartment.",
        "nominative": "apartament",
        "type": ["nouns"]
    },
    {
        "sentence": "Czekam na ciebie w ____.",
        "correctWord": "holu",
        "correctCase": "Locative",
        "translation": "I am waiting for you in the hall.",
        "nominative": "hol",
        "type": ["nouns"]
    },
    {
        "sentence": "Jestem na ____.",
        "correctWord": "moście",
        "correctCase": "Locative",
        "translation": "I am on the bridge.",
        "nominative": "most",
        "type": ["nouns"]
    },
    {
        "sentence": "Mieszkam w ____ mieście.",
        "correctWord": "dużym",
        "correctCase": "Locative",
        "translation": "I live in a big city.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Pracuję w ____ biurze.",
        "correctWord": "nowym",
        "correctCase": "Locative",
        "translation": "I work in a new office.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Odpoczywam na ____ plaży.",
        "correctWord": "pięknej",
        "correctCase": "Locative",
        "translation": "I am resting on a beautiful beach.",
        "nominative": "piękny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Czytam książkę w ____ łóżku.",
        "correctWord": "wygodnym",
        "correctCase": "Locative",
        "translation": "I am reading a book in a comfortable bed.",
        "nominative": "wygodny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Spotykam się z kolegą w ____ kawiarni.",
        "correctWord": "ulubionej",
        "correctCase": "Locative",
        "translation": "I am meeting with a friend in a favorite café.",
        "nominative": "ulubiony",
        "type": ["adjectives"]
    },
    {
        "sentence": "Rozmawiam przez telefon w ____ kuchni.",
        "correctWord": "małej",
        "correctCase": "Locative",
        "translation": "I am talking on the phone in a small kitchen.",
        "nominative": "mały",
        "type": ["adjectives"]
    },
    {
        "sentence": "Jestem na ____ dworcu.",
        "correctWord": "dużym",
        "correctCase": "Locative",
        "translation": "I am at the big station.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Jem obiad w ____ restauracji.",
        "correctWord": "dobrej",
        "correctCase": "Locative",
        "translation": "I am eating dinner in a good restaurant.",
        "nominative": "dobry",
        "type": ["adjectives"]
    },
    {
        "sentence": "Czekam na ciebie w ____ parku.",
        "correctWord": "pięknym",
        "correctCase": "Locative",
        "translation": "I am waiting for you in a beautiful park.",
        "nominative": "piękny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Jestem w ____ szkole.",
        "correctWord": "dużej",
        "correctCase": "Locative",
        "translation": "I am in a big school.",
        "nominative": "duży",
        "type": ["adjectives"]
    },
    {
        "sentence": "Mieszkam w ____ domu.",
        "correctWord": "nowym",
        "correctCase": "Locative",
        "translation": "I live in a new house.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Jestem na ____ uniwersytecie.",
        "correctWord": "prestiżowym",
        "correctCase": "Locative",
        "translation": "I am at a prestigious university.",
        "nominative": "prestiżowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Siedzę na ____ krześle.",
        "correctWord": "drewnianym",
        "correctCase": "Locative",
        "translation": "I am sitting on a wooden chair.",
        "nominative": "drewniany",
        "type": ["adjectives"]
    },
    {
        "sentence": "Jestem w ____ samolocie.",
        "correctWord": "małym",
        "correctCase": "Locative",
        "translation": "I am in a small airplane.",
        "nominative": "mały",
        "type": ["adjectives"]
    },
    {
        "sentence": "Mieszkam na ____ wsi.",
        "correctWord": "pięknej",
        "correctCase": "Locative",
        "translation": "I live in a beautiful village.",
        "nominative": "piękny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Jestem na ____ wyspie.",
        "correctWord": "tropikalnej",
        "correctCase": "Locative",
        "translation": "I am on a tropical island.",
        "nominative": "tropikalny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Rozmawiamy o ____ filmie.",
        "correctWord": "interesującym",
        "correctCase": "Locative",
        "translation": "We are talking about an interesting movie.",
        "nominative": "interesujący",
        "type": ["adjectives"]
    },
    {
        "sentence": "Myślę o ____ przyszłości.",
        "correctWord": "bliskiej",
        "correctCase": "Locative",
        "translation": "I am thinking about the near future.",
        "nominative": "bliski",
        "type": ["adjectives"]
    },
    {
        "sentence": "Jestem na ____ przystanku.",
        "correctWord": "kolejowym",
        "correctCase": "Locative",
        "translation": "I am at the train stop.",
        "nominative": "kolejowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Jestem w ____ szpitalu.",
        "correctWord": "nowoczesnym",
        "correctCase": "Locative",
        "translation": "I am in a modern hospital.",
        "nominative": "nowoczesny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Pracuję w ____ bibliotece.",
        "correctWord": "starej",
        "correctCase": "Locative",
        "translation": "I work in an old library.",
        "nominative": "stary",
        "type": ["adjectives"]
    },
    {
        "sentence": "Bawię się w ____ ogrodzie.",
        "correctWord": "zielonym",
        "correctCase": "Locative",
        "translation": "I am playing in a green garden.",
        "nominative": "zielony",
        "type": ["adjectives"]
    },
    {
        "sentence": "Mieszkam w ____ apartamencie.",
        "correctWord": "luksusowym",
        "correctCase": "Locative",
        "translation": "I live in a luxurious apartment.",
        "nominative": "luksusowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Czekam na ciebie w ____ holu.",
        "correctWord": "głównym",
        "correctCase": "Locative",
        "translation": "I am waiting for you in the main hall.",
        "nominative": "główny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Jestem na ____ moście.",
        "correctWord": "nowym",
        "correctCase": "Locative",
        "translation": "I am on the new bridge.",
        "nominative": "nowy",
        "type": ["adjectives"]
    },
    {
        "sentence": "Myślę o ____.",
        "correctWord": "tobie",
        "correctCase": "Locative",
        "translation": "I am thinking about you.",
        "nominative": "ty",
        "type": ["pronouns"]
    },
    {
        "sentence": "Rozmawiam o ____.",
        "correctWord": "nim",
        "correctCase": "Locative",
        "translation": "I am talking about him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Czytam o ____.",
        "correctWord": "niej",
        "correctCase": "Locative",
        "translation": "I am reading about her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Słyszałem o ____.",
        "correctWord": "nich",
        "correctCase": "Locative",
        "translation": "I heard about them (masculine).",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "Słyszałem o ____.",
        "correctWord": "nich",
        "correctCase": "Locative",
        "translation": "I heard about them (feminine).",
        "nominative": "one",
        "type": ["pronouns"]
    },
    {
        "sentence": "Marzę o ____.",
        "correctWord": "nim",
        "correctCase": "Locative",
        "translation": "I am dreaming about it.",
        "nominative": "ono",
        "type": ["pronouns"]
    },
    {
        "sentence": "Zależy mi na ____.",
        "correctWord": "was",
        "correctCase": "Locative",
        "translation": "I care about you (plural).",
        "nominative": "wy",
        "type": ["pronouns"]
    },
    {
        "sentence": "Piszę o ____.",
        "correctWord": "sobie",
        "correctCase": "Locative",
        "translation": "I am writing about myself.",
        "nominative": "ja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Rozmawiam z kolegą o ____.",
        "correctWord": "tobie",
        "correctCase": "Locative",
        "translation": "I am talking with a colleague about you.",
        "nominative": "ty",
        "type": ["pronouns"]
    },
    {
        "sentence": "Myślimy o ____.",
        "correctWord": "nich",
        "correctCase": "Locative",
        "translation": "We are thinking about them.",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "Zapomniałem o ____.",
        "correctWord": "niej",
        "correctCase": "Locative",
        "translation": "I forgot about her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Opowiadam o ____.",
        "correctWord": "nim",
        "correctCase": "Locative",
        "translation": "I am telling about him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Mówię o ____.",
        "correctWord": "nas",
        "correctCase": "Locative",
        "translation": "I am talking about us.",
        "nominative": "my",
        "type": ["pronouns"]
    },
    {
        "sentence": "Rozmyślam o ____.",
        "correctWord": "mnie",
        "correctCase": "Locative",
        "translation": "I am contemplating about myself.",
        "nominative": "ja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Słyszałem o ____.",
        "correctWord": "nich",
        "correctCase": "Locative",
        "translation": "I heard about them.",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "Zastanawiam się nad ____.",
        "correctWord": "nią",
        "correctCase": "Locative",
        "translation": "I am pondering about her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Znalazłem coś o ____.",
        "correctWord": "nim",
        "correctCase": "Locative",
        "translation": "I found something about him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Czytałem o ____.",
        "correctWord": "nich",
        "correctCase": "Locative",
        "translation": "I read about them.",
        "nominative": "one",
        "type": ["pronouns"]
    },
    {
        "sentence": "Piszę list o ____.",
        "correctWord": "was",
        "correctCase": "Locative",
        "translation": "I am writing a letter about you (plural).",
        "nominative": "wy",
        "type": ["pronouns"]
    },
    {
        "sentence": "Myślę często o ____.",
        "correctWord": "tobie",
        "correctCase": "Locative",
        "translation": "I often think about you.",
        "nominative": "ty",
        "type": ["pronouns"]
    },
    {
        "sentence": "Rozmawiam o ____.",
        "correctWord": "nich",
        "correctCase": "Locative",
        "translation": "I am talking about them.",
        "nominative": "oni",
        "type": ["pronouns"]
    },
    {
        "sentence": "Mówimy o ____.",
        "correctWord": "nim",
        "correctCase": "Locative",
        "translation": "We are talking about it.",
        "nominative": "ono",
        "type": ["pronouns"]
    },
    {
        "sentence": "Opowiadam historię o ____.",
        "correctWord": "niej",
        "correctCase": "Locative",
        "translation": "I am telling a story about her.",
        "nominative": "ona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Słyszałem plotkę o ____.",
        "correctWord": "nim",
        "correctCase": "Locative",
        "translation": "I heard a rumor about him.",
        "nominative": "on",
        "type": ["pronouns"]
    },
    {
        "sentence": "Zapomniałem o ____.",
        "correctWord": "sobie",
        "correctCase": "Locative",
        "translation": "I forgot about myself.",
        "nominative": "ja",
        "type": ["pronouns"]
    },
    {
        "sentence": "Myślę o ____ dniach.",
        "correctWord": "dwóch",
        "correctCase": "Locative",
        "translation": "I am thinking about two days.",
        "nominative": "dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Rozmawiam o ____ tygodniach.",
        "correctWord": "trzech",
        "correctCase": "Locative",
        "translation": "I am talking about three weeks.",
        "nominative": "trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Czytam o ____ miesiącach.",
        "correctWord": "czterech",
        "correctCase": "Locative",
        "translation": "I am reading about four months.",
        "nominative": "cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Słyszałem o ____ latach.",
        "correctWord": "pięciu",
        "correctCase": "Locative",
        "translation": "I heard about five years.",
        "nominative": "pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Marzę o ____ godzinach.",
        "correctWord": "sześciu",
        "correctCase": "Locative",
        "translation": "I am dreaming about six hours.",
        "nominative": "sześć",
        "type": ["numbers"]
    },
    {
        "sentence": "Zależy mi na ____ minutach.",
        "correctWord": "siedmiu",
        "correctCase": "Locative",
        "translation": "I care about seven minutes.",
        "nominative": "siedem",
        "type": ["numbers"]
    },
    {
        "sentence": "Piszę o ____ sekundach.",
        "correctWord": "ośmiu",
        "correctCase": "Locative",
        "translation": "I am writing about eight seconds.",
        "nominative": "osiem",
        "type": ["numbers"]
    },
    {
        "sentence": "Rozmawiam z kolegą o ____ zadaniach.",
        "correctWord": "dziewięciu",
        "correctCase": "Locative",
        "translation": "I am talking with a colleague about nine tasks.",
        "nominative": "dziewięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Myślimy o ____ projektach.",
        "correctWord": "dziesięciu",
        "correctCase": "Locative",
        "translation": "We are thinking about ten projects.",
        "nominative": "dziesięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Zapomniałem o ____ stronach.",
        "correctWord": "jedenastu",
        "correctCase": "Locative",
        "translation": "I forgot about eleven pages.",
        "nominative": "jedenaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Opowiadam o ____ ludziach.",
        "correctWord": "dwunastu",
        "correctCase": "Locative",
        "translation": "I am telling about twelve people.",
        "nominative": "dwanaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Mówię o ____ książkach.",
        "correctWord": "trzynastu",
        "correctCase": "Locative",
        "translation": "I am talking about thirteen books.",
        "nominative": "trzynaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Rozmyślam o ____ tematach.",
        "correctWord": "czternastu",
        "correctCase": "Locative",
        "translation": "I am contemplating about fourteen topics.",
        "nominative": "czternaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Słyszałem o ____ pomysłach.",
        "correctWord": "piętnastu",
        "correctCase": "Locative",
        "translation": "I heard about fifteen ideas.",
        "nominative": "piętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Zastanawiam się nad ____ pytaniach.",
        "correctWord": "szesnastu",
        "correctCase": "Locative",
        "translation": "I am pondering about sixteen questions.",
        "nominative": "szesnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Znalazłem coś o ____ ofertach.",
        "correctWord": "siedemnastu",
        "correctCase": "Locative",
        "translation": "I found something about seventeen offers.",
        "nominative": "siedemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Czytałem o ____ miejscach.",
        "correctWord": "osiemnastu",
        "correctCase": "Locative",
        "translation": "I read about eighteen places.",
        "nominative": "osiemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Piszę list o ____ sprawach.",
        "correctWord": "dziewiętnastu",
        "correctCase": "Locative",
        "translation": "I am writing a letter about nineteen matters.",
        "nominative": "dziewiętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Myślę często o ____ ludziach.",
        "correctWord": "dwudziestu",
        "correctCase": "Locative",
        "translation": "I often think about twenty people.",
        "nominative": "dwadzieścia",
        "type": ["numbers"]
    },
    {
        "sentence": "Rozmawiam o ____ dniach.",
        "correctWord": "dwudziestu jednym",
        "correctCase": "Locative",
        "translation": "I am talking about twenty-one days.",
        "nominative": "dwadzieścia jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "Mówimy o ____ godzinach.",
        "correctWord": "dwudziestu dwóch",
        "correctCase": "Locative",
        "translation": "We are talking about twenty-two hours.",
        "nominative": "dwadzieścia dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Opowiadam historię o ____ latach.",
        "correctWord": "dwudziestu trzech",
        "correctCase": "Locative",
        "translation": "I am telling a story about twenty-three years.",
        "nominative": "dwadzieścia trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Słyszałem plotkę o ____ minutach.",
        "correctWord": "dwudziestu czterech",
        "correctCase": "Locative",
        "translation": "I heard a rumor about twenty-four minutes.",
        "nominative": "dwadzieścia cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Zapomniałem o ____ sekundach.",
        "correctWord": "dwudziestu pięciu",
        "correctCase": "Locative",
        "translation": "I forgot about twenty-five seconds.",
        "nominative": "dwadzieścia pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "przyjacielu",
        "correctCase": "Vocative",
        "translation": "Hi, friend!",
        "nominative": "przyjaciel",
        "type": ["nouns"]
    },
    {
        "sentence": "Dzień dobry, ____!",
        "correctWord": "panie",
        "correctCase": "Vocative",
        "translation": "Good morning, sir!",
        "nominative": "pan",
        "type": ["nouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "mój bracie",
        "correctCase": "Vocative",
        "translation": "Welcome, my brother!",
        "nominative": "brat",
        "type": ["nouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "siostro",
        "correctCase": "Vocative",
        "translation": "Hi, sister!",
        "nominative": "siostra",
        "type": ["nouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "doktorze",
        "correctCase": "Vocative",
        "translation": "Welcome, doctor!",
        "nominative": "doktor",
        "type": ["nouns"]
    },
    {
        "sentence": "Dzień dobry, ____!",
        "correctWord": "pani",
        "correctCase": "Vocative",
        "translation": "Good morning, madam!",
        "nominative": "pani",
        "type": ["nouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "kolego",
        "correctCase": "Vocative",
        "translation": "Hi, colleague!",
        "nominative": "kolega",
        "type": ["nouns"]
    },
    {
        "sentence": "Hej, ____!",
        "correctWord": "koteczku",
        "correctCase": "Vocative",
        "translation": "Hey, kitty!",
        "nominative": "kotek",
        "type": ["nouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "psie",
        "correctCase": "Vocative",
        "translation": "Hi, dog!",
        "nominative": "pies",
        "type": ["nouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "nauczycielu",
        "correctCase": "Vocative",
        "translation": "Welcome, teacher!",
        "nominative": "nauczyciel",
        "type": ["nouns"]
    },
    {
        "sentence": "Dzień dobry, ____!",
        "correctWord": "sędzio",
        "correctCase": "Vocative",
        "translation": "Good morning, judge!",
        "nominative": "sędzia",
        "type": ["nouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "przewodniczący",
        "correctCase": "Vocative",
        "translation": "Welcome, chairman!",
        "nominative": "przewodniczący",
        "type": ["nouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "kucharzu",
        "correctCase": "Vocative",
        "translation": "Hi, chef!",
        "nominative": "kucharz",
        "type": ["nouns"]
    },
    {
        "sentence": "Hej, ____!",
        "correctWord": "mechaniku",
        "correctCase": "Vocative",
        "translation": "Hey, mechanic!",
        "nominative": "mechanik",
        "type": ["nouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "inżynierze",
        "correctCase": "Vocative",
        "translation": "Welcome, engineer!",
        "nominative": "inżynier",
        "type": ["nouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "sąsiedzie",
        "correctCase": "Vocative",
        "translation": "Hi, neighbor!",
        "nominative": "sąsiad",
        "type": ["nouns"]
    },
    {
        "sentence": "Dzień dobry, ____!",
        "correctWord": "dziecko",
        "correctCase": "Vocative",
        "translation": "Good morning, child!",
        "nominative": "dziecko",
        "type": ["nouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "mamo",
        "correctCase": "Vocative",
        "translation": "Hi, mom!",
        "nominative": "mama",
        "type": ["nouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "tato",
        "correctCase": "Vocative",
        "translation": "Welcome, dad!",
        "nominative": "tata",
        "type": ["nouns"]
    },
    {
        "sentence": "Hej, ____!",
        "correctWord": "babciu",
        "correctCase": "Vocative",
        "translation": "Hey, grandma!",
        "nominative": "babcia",
        "type": ["nouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "dziadku",
        "correctCase": "Vocative",
        "translation": "Hi, grandpa!",
        "nominative": "dziadek",
        "type": ["nouns"]
    },
    {
        "sentence": "Dzień dobry, ____!",
        "correctWord": "lekarzu",
        "correctCase": "Vocative",
        "translation": "Good morning, doctor!",
        "nominative": "lekarz",
        "type": ["nouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "klientko",
        "correctCase": "Vocative",
        "translation": "Hi, customer!",
        "nominative": "klientka",
        "type": ["nouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "artysto",
        "correctCase": "Vocative",
        "translation": "Welcome, artist!",
        "nominative": "artysta",
        "type": ["nouns"]
    },
    {
        "sentence": "Hej, ____!",
        "correctWord": "policjancie",
        "correctCase": "Vocative",
        "translation": "Hey, policeman!",
        "nominative": "policjant",
        "type": ["nouns"]
    },
    {
        "sentence": "Witaj, ____ przyjacielu!",
        "correctWord": "drogi",
        "correctCase": "Vocative",
        "translation": "Welcome, dear friend!",
        "nominative": "drogi",
        "type": ["adjectives"]
    },
    {
        "sentence": "Cześć, ____ panie!",
        "correctWord": "szanowny",
        "correctCase": "Vocative",
        "translation": "Hi, esteemed sir!",
        "nominative": "szanowny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Hej, ____ kolego!",
        "correctWord": "młody",
        "correctCase": "Vocative",
        "translation": "Hey, young colleague!",
        "nominative": "młody",
        "type": ["adjectives"]
    },
    {
        "sentence": "Dzień dobry, ____ sąsiedzie!",
        "correctWord": "miły",
        "correctCase": "Vocative",
        "translation": "Good morning, nice neighbor!",
        "nominative": "miły",
        "type": ["adjectives"]
    },
    {
        "sentence": "Cześć, ____ przyjacielu!",
        "correctWord": "kochany",
        "correctCase": "Vocative",
        "translation": "Hi, beloved friend!",
        "nominative": "kochany",
        "type": ["adjectives"]
    },
    {
        "sentence": "Witaj, ____ kolego!",
        "correctWord": "stary",
        "correctCase": "Vocative",
        "translation": "Welcome, old friend!",
        "nominative": "stary",
        "type": ["adjectives"]
    },
    {
        "sentence": "Hej, ____ panie!",
        "correctWord": "drogi",
        "correctCase": "Vocative",
        "translation": "Hey, dear sir!",
        "nominative": "drogi",
        "type": ["adjectives"]
    },
    {
        "sentence": "Cześć, ____ nauczycielu!",
        "correctWord": "szanowny",
        "correctCase": "Vocative",
        "translation": "Hi, esteemed teacher!",
        "nominative": "szanowny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Witaj, ____ sąsiedzie!",
        "correctWord": "drodzy",
        "correctCase": "Vocative",
        "translation": "Welcome, dear neighbors!",
        "nominative": "drogi",
        "type": ["adjectives"]
    },
    {
        "sentence": "Hej, ____ kliencie!",
        "correctWord": "ważny",
        "correctCase": "Vocative",
        "translation": "Hey, important client!",
        "nominative": "ważny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Dzień dobry, ____ sąsiadko!",
        "correctWord": "kochana",
        "correctCase": "Vocative",
        "translation": "Good morning, beloved neighbor!",
        "nominative": "kochana",
        "type": ["adjectives"]
    },
    {
        "sentence": "Cześć, ____ przyjaciółko!",
        "correctWord": "droga",
        "correctCase": "Vocative",
        "translation": "Hi, dear friend (female)!",
        "nominative": "droga",
        "type": ["adjectives"]
    },
    {
        "sentence": "Witaj, ____ koleżanko!",
        "correctWord": "miła",
        "correctCase": "Vocative",
        "translation": "Welcome, nice colleague (female)!",
        "nominative": "miła",
        "type": ["adjectives"]
    },
    {
        "sentence": "Hej, ____ siostro!",
        "correctWord": "kochana",
        "correctCase": "Vocative",
        "translation": "Hey, beloved sister!",
        "nominative": "kochana",
        "type": ["adjectives"]
    },
    {
        "sentence": "Dzień dobry, ____ matko!",
        "correctWord": "szanowna",
        "correctCase": "Vocative",
        "translation": "Good morning, esteemed mother!",
        "nominative": "szanowna",
        "type": ["adjectives"]
    },
    {
        "sentence": "Cześć, ____ bracie!",
        "correctWord": "kochany",
        "correctCase": "Vocative",
        "translation": "Hi, beloved brother!",
        "nominative": "kochany",
        "type": ["adjectives"]
    },
    {
        "sentence": "Witaj, ____ ojcze!",
        "correctWord": "szanowny",
        "correctCase": "Vocative",
        "translation": "Welcome, esteemed father!",
        "nominative": "szanowny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Hej, ____ dziadku!",
        "correctWord": "drogi",
        "correctCase": "Vocative",
        "translation": "Hey, dear grandpa!",
        "nominative": "drogi",
        "type": ["adjectives"]
    },
    {
        "sentence": "Cześć, ____ babciu!",
        "correctWord": "kochana",
        "correctCase": "Vocative",
        "translation": "Hi, beloved grandma!",
        "nominative": "kochana",
        "type": ["adjectives"]
    },
    {
        "sentence": "Dzień dobry, ____ lekarzu!",
        "correctWord": "drogi",
        "correctCase": "Vocative",
        "translation": "Good morning, dear doctor!",
        "nominative": "drogi",
        "type": ["adjectives"]
    },
    {
        "sentence": "Cześć, ____ kliencie!",
        "correctWord": "szanowny",
        "correctCase": "Vocative",
        "translation": "Hi, esteemed client!",
        "nominative": "szanowny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Witaj, ____ artysto!",
        "correctWord": "drogi",
        "correctCase": "Vocative",
        "translation": "Welcome, dear artist!",
        "nominative": "drogi",
        "type": ["adjectives"]
    },
    {
        "sentence": "Hej, ____ pracowniku!",
        "correctWord": "ważny",
        "correctCase": "Vocative",
        "translation": "Hey, important worker!",
        "nominative": "ważny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Cześć, ____ żołnierzu!",
        "correctWord": "dzielny",
        "correctCase": "Vocative",
        "translation": "Hi, brave soldier!",
        "nominative": "dzielny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Dzień dobry, ____ kapitanie!",
        "correctWord": "szanowny",
        "correctCase": "Vocative",
        "translation": "Good morning, esteemed captain!",
        "nominative": "szanowny",
        "type": ["adjectives"]
    },
    {
        "sentence": "Cześć, ____ dzieci!",
        "correctWord": "dwoje",
        "correctCase": "Vocative",
        "translation": "Hi, two children!",
        "nominative": "dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Witajcie, ____ przyjaciele!",
        "correctWord": "troje",
        "correctCase": "Vocative",
        "translation": "Welcome, three friends!",
        "nominative": "trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Hej, ____ studenci!",
        "correctWord": "czworo",
        "correctCase": "Vocative",
        "translation": "Hey, four students!",
        "nominative": "cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Cześć, ____ kolegów!",
        "correctWord": "pięciu",
        "correctCase": "Vocative",
        "translation": "Hi, five colleagues!",
        "nominative": "pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Witajcie, ____ nauczycieli!",
        "correctWord": "sześciu",
        "correctCase": "Vocative",
        "translation": "Welcome, six teachers!",
        "nominative": "sześć",
        "type": ["numbers"]
    },
    {
        "sentence": "Hej, ____ przyjaciół!",
        "correctWord": "siedmioro",
        "correctCase": "Vocative",
        "translation": "Hey, seven friends!",
        "nominative": "siedem",
        "type": ["numbers"]
    },
    {
        "sentence": "Cześć, ____ bracia!",
        "correctWord": "ośmiu",
        "correctCase": "Vocative",
        "translation": "Hi, eight brothers!",
        "nominative": "osiem",
        "type": ["numbers"]
    },
    {
        "sentence": "Witajcie, ____ sióstr!",
        "correctWord": "dziewięć",
        "correctCase": "Vocative",
        "translation": "Welcome, nine sisters!",
        "nominative": "dziewięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Hej, ____ członkowie zespołu!",
        "correctWord": "dziesięć",
        "correctCase": "Vocative",
        "translation": "Hey, ten team members!",
        "nominative": "dziesięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Cześć, ____ kolegów!",
        "correctWord": "jedenastu",
        "correctCase": "Vocative",
        "translation": "Hi, eleven colleagues!",
        "nominative": "jedenaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Witajcie, ____ uczniowie!",
        "correctWord": "dwunastu",
        "correctCase": "Vocative",
        "translation": "Welcome, twelve students!",
        "nominative": "dwanaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Hej, ____ sportowcy!",
        "correctWord": "trzynastu",
        "correctCase": "Vocative",
        "translation": "Hey, thirteen athletes!",
        "nominative": "trzynaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Cześć, ____ koleżanki!",
        "correctWord": "czternaście",
        "correctCase": "Vocative",
        "translation": "Hi, fourteen female colleagues!",
        "nominative": "czternaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Witajcie, ____ przyjaciele!",
        "correctWord": "piętnastu",
        "correctCase": "Vocative",
        "translation": "Welcome, fifteen friends!",
        "nominative": "piętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Hej, ____ goście!",
        "correctWord": "szesnastu",
        "correctCase": "Vocative",
        "translation": "Hey, sixteen guests!",
        "nominative": "szesnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Cześć, ____ przyjaciółki!",
        "correctWord": "siedemnaście",
        "correctCase": "Vocative",
        "translation": "Hi, seventeen female friends!",
        "nominative": "siedemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Witajcie, ____ rodzice!",
        "correctWord": "osiemnastu",
        "correctCase": "Vocative",
        "translation": "Welcome, eighteen parents!",
        "nominative": "osiemnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Hej, ____ bracia!",
        "correctWord": "dziewiętnaście",
        "correctCase": "Vocative",
        "translation": "Hey, nineteen brothers!",
        "nominative": "dziewiętnaście",
        "type": ["numbers"]
    },
    {
        "sentence": "Cześć, ____ studenci!",
        "correctWord": "dwudziestu",
        "correctCase": "Vocative",
        "translation": "Hi, twenty students!",
        "nominative": "dwadzieścia",
        "type": ["numbers"]
    },
    {
        "sentence": "Witajcie, ____ koleżanki!",
        "correctWord": "dwudziestu jeden",
        "correctCase": "Vocative",
        "translation": "Welcome, twenty-one female colleagues!",
        "nominative": "dwadzieścia jeden",
        "type": ["numbers"]
    },
    {
        "sentence": "Hej, ____ sportowcy!",
        "correctWord": "dwudziestu dwóch",
        "correctCase": "Vocative",
        "translation": "Hey, twenty-two athletes!",
        "nominative": "dwadzieścia dwa",
        "type": ["numbers"]
    },
    {
        "sentence": "Cześć, ____ przyjaciółki!",
        "correctWord": "dwudziestu trzech",
        "correctCase": "Vocative",
        "translation": "Hi, twenty-three female friends!",
        "nominative": "dwadzieścia trzy",
        "type": ["numbers"]
    },
    {
        "sentence": "Witajcie, ____ członkowie zespołu!",
        "correctWord": "dwudziestu czterech",
        "correctCase": "Vocative",
        "translation": "Welcome, twenty-four team members!",
        "nominative": "dwadzieścia cztery",
        "type": ["numbers"]
    },
    {
        "sentence": "Hej, ____ studenci!",
        "correctWord": "dwudziestu pięciu",
        "correctCase": "Vocative",
        "translation": "Hey, twenty-five students!",
        "nominative": "dwadzieścia pięć",
        "type": ["numbers"]
    },
    {
        "sentence": "Cześć, ____ koleżanki!",
        "correctWord": "dwudziestu sześciu",
        "correctCase": "Vocative",
        "translation": "Hi, twenty-six female colleagues!",
        "nominative": "dwadzieścia sześć",
        "type": ["numbers"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "ty",
        "correctCase": "Vocative",
        "translation": "Hi, you!",
        "nominative": "ty",
        "type": ["pronouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "mój przyjacielu",
        "correctCase": "Vocative",
        "translation": "Welcome, my friend!",
        "nominative": "mój przyjaciel",
        "type": ["pronouns"]
    },
    {
        "sentence": "Hej, ____!",
        "correctWord": "kochana",
        "correctCase": "Vocative",
        "translation": "Hey, dear!",
        "nominative": "kochana",
        "type": ["pronouns"]
    },
    {
        "sentence": "Dzień dobry, ____!",
        "correctWord": "panie",
        "correctCase": "Vocative",
        "translation": "Good morning, sir!",
        "nominative": "pan",
        "type": ["pronouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "moja siostro",
        "correctCase": "Vocative",
        "translation": "Hi, my sister!",
        "nominative": "moja siostra",
        "type": ["pronouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "moja żono",
        "correctCase": "Vocative",
        "translation": "Welcome, my wife!",
        "nominative": "moja żona",
        "type": ["pronouns"]
    },
    {
        "sentence": "Hej, ____!",
        "correctWord": "mój mężu",
        "correctCase": "Vocative",
        "translation": "Hey, my husband!",
        "nominative": "mój mąż",
        "type": ["pronouns"]
    },
    {
        "sentence": "Dzień dobry, ____!",
        "correctWord": "moje dziecko",
        "correctCase": "Vocative",
        "translation": "Good morning, my child!",
        "nominative": "moje dziecko",
        "type": ["pronouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "mój bracie",
        "correctCase": "Vocative",
        "translation": "Hi, my brother!",
        "nominative": "mój brat",
        "type": ["pronouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "moja matko",
        "correctCase": "Vocative",
        "translation": "Welcome, my mother!",
        "nominative": "moja matka",
        "type": ["pronouns"]
    },
    {
        "sentence": "Hej, ____!",
        "correctWord": "mój ojcze",
        "correctCase": "Vocative",
        "translation": "Hey, my father!",
        "nominative": "mój ojciec",
        "type": ["pronouns"]
    },
    {
        "sentence": "Dzień dobry, ____!",
        "correctWord": "moje babciu",
        "correctCase": "Vocative",
        "translation": "Good morning, my grandmother!",
        "nominative": "moje babcia",
        "type": ["pronouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "mój dziadku",
        "correctCase": "Vocative",
        "translation": "Hi, my grandfather!",
        "nominative": "mój dziadek",
        "type": ["pronouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "mój przyjacielu",
        "correctCase": "Vocative",
        "translation": "Welcome, my friend!",
        "nominative": "mój przyjaciel",
        "type": ["pronouns"]
    },
    {
        "sentence": "Hej, ____!",
        "correctWord": "kochani",
        "correctCase": "Vocative",
        "translation": "Hey, dear ones!",
        "nominative": "kochani",
        "type": ["pronouns"]
    },
    {
        "sentence": "Dzień dobry, ____!",
        "correctWord": "moje dzieci",
        "correctCase": "Vocative",
        "translation": "Good morning, my children!",
        "nominative": "moje dzieci",
        "type": ["pronouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "mój kolego",
        "correctCase": "Vocative",
        "translation": "Hi, my colleague!",
        "nominative": "mój kolega",
        "type": ["pronouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "moja koleżanko",
        "correctCase": "Vocative",
        "translation": "Welcome, my colleague (female)!",
        "nominative": "moja koleżanka",
        "type": ["pronouns"]
    },
    {
        "sentence": "Hej, ____!",
        "correctWord": "mój panie",
        "correctCase": "Vocative",
        "translation": "Hey, my sir!",
        "nominative": "mój pan",
        "type": ["pronouns"]
    },
    {
        "sentence": "Dzień dobry, ____!",
        "correctWord": "moi przyjaciele",
        "correctCase": "Vocative",
        "translation": "Good morning, my friends!",
        "nominative": "moi przyjaciele",
        "type": ["pronouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "moi koledzy",
        "correctCase": "Vocative",
        "translation": "Hi, my colleagues!",
        "nominative": "moi koledzy",
        "type": ["pronouns"]
    },
    {
        "sentence": "Witaj, ____!",
        "correctWord": "moja pani",
        "correctCase": "Vocative",
        "translation": "Welcome, my lady!",
        "nominative": "moja pani",
        "type": ["pronouns"]
    },
    {
        "sentence": "Hej, ____!",
        "correctWord": "mój kochanku",
        "correctCase": "Vocative",
        "translation": "Hey, my lover!",
        "nominative": "mój kochanek",
        "type": ["pronouns"]
    },
    {
        "sentence": "Dzień dobry, ____!",
        "correctWord": "moi rodzice",
        "correctCase": "Vocative",
        "translation": "Good morning, my parents!",
        "nominative": "moi rodzice",
        "type": ["pronouns"]
    },
    {
        "sentence": "Cześć, ____!",
        "correctWord": "moje dzieci",
        "correctCase": "Vocative",
        "translation": "Hi, my children!",
        "nominative": "moje dzieci",
        "type": ["pronouns"]
    },
    {
        "sentence": "Idę ____ sklep.",
        "correctWord": "do",
        "correctCase": "Prepositions",
        "translation": "I am going to the store.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Spaceruję ____ parku.",
        "correctWord": "po",
        "correctCase": "Prepositions",
        "translation": "I am walking in the park.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Mieszkam ____ Warszawie.",
        "correctWord": "w",
        "correctCase": "Prepositions",
        "translation": "I live in Warsaw.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Czekam ____ przystanku.",
        "correctWord": "na",
        "correctCase": "Prepositions",
        "translation": "I am waiting at the bus stop.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Czytam książkę ____ noc.",
        "correctWord": "przez",
        "correctCase": "Prepositions",
        "translation": "I am reading a book through the night.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Piszę list ____ przyjaciela.",
        "correctWord": "do",
        "correctCase": "Prepositions",
        "translation": "I am writing a letter to a friend.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Rozmawiam ____ telefonie.",
        "correctWord": "przez",
        "correctCase": "Prepositions",
        "translation": "I am talking on the phone.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Stoję ____ oknem.",
        "correctWord": "za",
        "correctCase": "Prepositions",
        "translation": "I am standing behind the window.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Jestem wdzięczny ____ pomoc.",
        "correctWord": "za",
        "correctCase": "Prepositions",
        "translation": "I am grateful for the help.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Pies leży ____ stołem.",
        "correctWord": "pod",
        "correctCase": "Prepositions",
        "translation": "The dog is lying under the table.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Mam prezent ____ ciebie.",
        "correctWord": "dla",
        "correctCase": "Prepositions",
        "translation": "I have a present for you.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Ona śpiewa ____ szkoły.",
        "correctWord": "dla",
        "correctCase": "Prepositions",
        "translation": "She sings for the school.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Dziękuję ____ zaproszenie.",
        "correctWord": "za",
        "correctCase": "Prepositions",
        "translation": "Thank you for the invitation.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Chodzę ____ pracy pieszo.",
        "correctWord": "do",
        "correctCase": "Prepositions",
        "translation": "I walk to work.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Rozmawiamy ____ filmie.",
        "correctWord": "o",
        "correctCase": "Prepositions",
        "translation": "We are talking about the movie.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Mieszkam ____ domem mojej babci.",
        "correctWord": "za",
        "correctCase": "Prepositions",
        "translation": "I live behind my grandmother's house.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Dzięki ____ pomocy udało się.",
        "correctWord": "twojej",
        "correctCase": "Prepositions",
        "translation": "Thanks to your help, it succeeded.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Pracuję ____ biurkiem.",
        "correctWord": "nad",
        "correctCase": "Prepositions",
        "translation": "I am working at the desk.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Uczę się ____ domu.",
        "correctWord": "w",
        "correctCase": "Prepositions",
        "translation": "I am studying at home.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Czekam ____ przystanku.",
        "correctWord": "na",
        "correctCase": "Prepositions",
        "translation": "I am waiting at the bus stop.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Opowiadam historię ____ wojnie.",
        "correctWord": "o",
        "correctCase": "Prepositions",
        "translation": "I am telling a story about the war.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Lubię jeździć ____ rowerze.",
        "correctWord": "na",
        "correctCase": "Prepositions",
        "translation": "I like to ride a bicycle.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Siedzę ____ krześle.",
        "correctWord": "na",
        "correctCase": "Prepositions",
        "translation": "I am sitting on the chair.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Czytam książkę ____ kuchni.",
        "correctWord": "w",
        "correctCase": "Prepositions",
        "translation": "I am reading a book in the kitchen.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Spaceruję ____ ulicy.",
        "correctWord": "po",
        "correctCase": "Prepositions",
        "translation": "I am walking on the street.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Pracuję ____ projekcie.",
        "correctWord": "nad",
        "correctCase": "Prepositions",
        "translation": "I am working on the project.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Jestem ____ ciebie dumny.",
        "correctWord": "z",
        "correctCase": "Prepositions",
        "translation": "I am proud of you.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Mam spotkanie ____ lekarzem.",
        "correctWord": "z",
        "correctCase": "Prepositions",
        "translation": "I have a meeting with the doctor.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Wyjeżdżam ____ tydzień.",
        "correctWord": "za",
        "correctCase": "Prepositions",
        "translation": "I am leaving in a week.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Pojedziemy ____ góry.",
        "correctWord": "w",
        "correctCase": "Prepositions",
        "translation": "We will go to the mountains.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Przygotowuję się ____ egzamin.",
        "correctWord": "do",
        "correctCase": "Prepositions",
        "translation": "I am preparing for the exam.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Zrobiłem to ____ ciebie.",
        "correctWord": "dla",
        "correctCase": "Prepositions",
        "translation": "I did it for you.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Jem obiad ____ łyżką.",
        "correctWord": "za",
        "correctCase": "Prepositions",
        "translation": "I eat lunch with a spoon.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Kupuję prezent ____ mojej siostry.",
        "correctWord": "dla",
        "correctCase": "Prepositions",
        "translation": "I am buying a present for my sister.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Uciekłem ____ deszczem.",
        "correctWord": "przed",
        "correctCase": "Prepositions",
        "translation": "I escaped from the rain.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Uczę się ____ błędów.",
        "correctWord": "na",
        "correctCase": "Prepositions",
        "translation": "I am learning from mistakes.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Jestem zmęczony ____ pracy.",
        "correctWord": "po",
        "correctCase": "Prepositions",
        "translation": "I am tired after work.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Piszę ____ długopisem.",
        "correctWord": "pod",
        "correctCase": "Prepositions",
        "translation": "I write with a pen.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Czekam ____ twojej odpowiedzi.",
        "correctWord": "na",
        "correctCase": "Prepositions",
        "translation": "I am waiting for your response.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Przyszedłem ____ domu.",
        "correctWord": "z",
        "correctCase": "Prepositions",
        "translation": "I came from home.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Jestem wdzięczny ____ pomoc.",
        "correctWord": "za",
        "correctCase": "Prepositions",
        "translation": "I am grateful for the help.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Dzięki ____ zrozumiałem.",
        "correctWord": "temu",
        "correctCase": "Prepositions",
        "translation": "Thanks to that, I understood.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Bez ____ nie dam rady.",
        "correctWord": "ciebie",
        "correctCase": "Prepositions",
        "translation": "I can't do it without you.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Piszę list ____ mojej babci.",
        "correctWord": "do",
        "correctCase": "Prepositions",
        "translation": "I am writing a letter to my grandmother.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Spaceruję ____ lesie.",
        "correctWord": "po",
        "correctCase": "Prepositions",
        "translation": "I am walking in the forest.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Pracuję ____ komputera.",
        "correctWord": "przy",
        "correctCase": "Prepositions",
        "translation": "I am working at the computer.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Czytam książkę ____ nocą.",
        "correctWord": "w",
        "correctCase": "Prepositions",
        "translation": "I am reading a book at night.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Lubię biegać ____ parku.",
        "correctWord": "w",
        "correctCase": "Prepositions",
        "translation": "I like to run in the park.",
        "type": ["prepositions"]
    },
    {
        "sentence": "Rozmawiamy ____ filmie.",
        "correctWord": "o",
        "correctCase": "Prepositions",
        "translation": "We are talking about the movie.",
        "type": ["prepositions"]
    },
    {
        "sentence": "On ____ książkę.",
        "correctWord": "czytał",
        "correctCase": "Imperfective",
        "translation": "He was reading a book.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ kolację.",
        "correctWord": "ugotowała",
        "correctCase": "Perfective",
        "translation": "She cooked dinner.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ film.",
        "correctWord": "oglądaliśmy",
        "correctCase": "Imperfective",
        "translation": "We were watching a movie.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ dom.",
        "correctWord": "zbudowali",
        "correctCase": "Perfective",
        "translation": "They built a house.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ kawę.",
        "correctWord": "piłem",
        "correctCase": "Imperfective",
        "translation": "I was drinking coffee.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ prezent.",
        "correctWord": "kupiłeś",
        "correctCase": "Perfective",
        "translation": "You bought a present.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ lekcje.",
        "correctWord": "odrabiała",
        "correctCase": "Imperfective",
        "translation": "She was doing her homework.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ na spacer.",
        "correctWord": "poszliśmy",
        "correctCase": "Perfective",
        "translation": "We went for a walk.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ telewizję.",
        "correctWord": "oglądał",
        "correctCase": "Imperfective",
        "translation": "He was watching TV.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ obiad.",
        "correctWord": "zjedli",
        "correctCase": "Perfective",
        "translation": "They ate lunch.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na gitarze.",
        "correctWord": "grałem",
        "correctCase": "Imperfective",
        "translation": "I was playing the guitar.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ dom.",
        "correctWord": "sprzątałeś",
        "correctCase": "Imperfective",
        "translation": "You were cleaning the house.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ herbatę.",
        "correctWord": "piła",
        "correctCase": "Imperfective",
        "translation": "She was drinking tea.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ do kina.",
        "correctWord": "chodziliśmy",
        "correctCase": "Imperfective",
        "translation": "We used to go to the cinema.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ lekcję.",
        "correctWord": "napisał",
        "correctCase": "Perfective",
        "translation": "He wrote a lesson.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ ciasto.",
        "correctWord": "upiekli",
        "correctCase": "Perfective",
        "translation": "They baked a cake.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ film.",
        "correctWord": "oglądałem",
        "correctCase": "Imperfective",
        "translation": "I was watching a movie.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ muzykę.",
        "correctWord": "słuchałeś",
        "correctCase": "Imperfective",
        "translation": "You were listening to music.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ książkę.",
        "correctWord": "przeczytała",
        "correctCase": "Perfective",
        "translation": "She read a book.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ list.",
        "correctWord": "pisaliśmy",
        "correctCase": "Imperfective",
        "translation": "We were writing a letter.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ na basen.",
        "correctWord": "poszedł",
        "correctCase": "Perfective",
        "translation": "He went to the pool.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ się na plaży.",
        "correctWord": "bawili",
        "correctCase": "Imperfective",
        "translation": "They were playing on the beach.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ tort.",
        "correctWord": "upiekłem",
        "correctCase": "Perfective",
        "translation": "I baked a cake.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ na siłownię.",
        "correctWord": "chodziłeś",
        "correctCase": "Imperfective",
        "translation": "You used to go to the gym.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ na fortepianie.",
        "correctWord": "grała",
        "correctCase": "Imperfective",
        "translation": "She was playing the piano.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ obiad.",
        "correctWord": "gotowaliśmy",
        "correctCase": "Imperfective",
        "translation": "We were cooking lunch.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ herbatę.",
        "correctWord": "wypił",
        "correctCase": "Perfective",
        "translation": "He drank tea.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ zamek z piasku.",
        "correctWord": "zbudowali",
        "correctCase": "Perfective",
        "translation": "They built a sandcastle.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ książkę.",
        "correctWord": "czytałem",
        "correctCase": "Imperfective",
        "translation": "I was reading a book.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ kolację.",
        "correctWord": "przygotowałeś",
        "correctCase": "Perfective",
        "translation": "You prepared dinner.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ tort.",
        "correctWord": "piecze",
        "correctCase": "Imperfective",
        "translation": "She is baking a cake.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ lekcje.",
        "correctWord": "odrabialiśmy",
        "correctCase": "Imperfective",
        "translation": "We were doing homework.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ dom.",
        "correctWord": "sprząta",
        "correctCase": "Imperfective",
        "translation": "He is cleaning the house.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ pizzę.",
        "correctWord": "upiekli",
        "correctCase": "Perfective",
        "translation": "They baked a pizza.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ list.",
        "correctWord": "napisałem",
        "correctCase": "Perfective",
        "translation": "I wrote a letter.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ lekcję.",
        "correctWord": "pisałeś",
        "correctCase": "Imperfective",
        "translation": "You were writing a lesson.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ dom.",
        "correctWord": "buduje",
        "correctCase": "Imperfective",
        "translation": "She is building a house.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ na spacer.",
        "correctWord": "chodzić",
        "correctCase": "Imperfective",
        "translation": "We are going for a walk.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ na gitarze.",
        "correctWord": "grał",
        "correctCase": "Imperfective",
        "translation": "He was playing the guitar.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ na zakupy.",
        "correctWord": "poszli",
        "correctCase": "Perfective",
        "translation": "They went shopping.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ kawę.",
        "correctWord": "piję",
        "correctCase": "Imperfective",
        "translation": "I am drinking coffee.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ obiad.",
        "correctWord": "gotujesz",
        "correctCase": "Imperfective",
        "translation": "You are cooking lunch.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ wiersz.",
        "correctWord": "napisała",
        "correctCase": "Perfective",
        "translation": "She wrote a poem.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ film.",
        "correctWord": "oglądaliśmy",
        "correctCase": "Imperfective",
        "translation": "We were watching a movie.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ książkę.",
        "correctWord": "przeczytał",
        "correctCase": "Perfective",
        "translation": "He read a book.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ tort.",
        "correctWord": "pieczą",
        "correctCase": "Imperfective",
        "translation": "They are baking a cake.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ dom.",
        "correctWord": "sprzątam",
        "correctCase": "Imperfective",
        "translation": "I am cleaning the house.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ pizzę.",
        "correctWord": "jesz",
        "correctCase": "Imperfective",
        "translation": "You are eating pizza.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ muzykę.",
        "correctWord": "słucha",
        "correctCase": "Imperfective",
        "translation": "She is listening to music.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ do szkoły codziennie.",
        "correctWord": "chodzę",
        "correctCase": "Imperfective",
        "translation": "I go to school every day.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ do kina w zeszłym tygodniu.",
        "correctWord": "poszliśmy",
        "correctCase": "Perfective",
        "translation": "We went to the cinema last week.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ na spacer każdego wieczoru.",
        "correctWord": "chodzą",
        "correctCase": "Imperfective",
        "translation": "They go for a walk every evening.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ na zakupy wczoraj.",
        "correctWord": "poszła",
        "correctCase": "Perfective",
        "translation": "She went shopping yesterday.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ do restauracji co piątek.",
        "correctWord": "chodzimy",
        "correctCase": "Imperfective",
        "translation": "We go to a restaurant every Friday.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na siłownię jutro.",
        "correctWord": "pójdę",
        "correctCase": "Perfective",
        "translation": "I will go to the gym tomorrow.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ do pracy każdego dnia.",
        "correctWord": "chodzisz",
        "correctCase": "Imperfective",
        "translation": "You go to work every day.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ do biblioteki w sobotę.",
        "correctWord": "poszedł",
        "correctCase": "Perfective",
        "translation": "He went to the library on Saturday.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na spacer teraz.",
        "correctWord": "idę",
        "correctCase": "Imperfective",
        "translation": "I am going for a walk now.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ na zajęcia codziennie.",
        "correctWord": "chodzi",
        "correctCase": "Imperfective",
        "translation": "She goes to classes every day.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ na plażę jutro.",
        "correctWord": "pójdziemy",
        "correctCase": "Perfective",
        "translation": "We will go to the beach tomorrow.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ do lekarza w zeszłym miesiącu.",
        "correctWord": "poszedłeś",
        "correctCase": "Perfective",
        "translation": "You went to the doctor last month.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na spotkanie każdego dnia.",
        "correctWord": "chodzę",
        "correctCase": "Imperfective",
        "translation": "I go to meetings every day.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ na basen co tydzień.",
        "correctWord": "chodzą",
        "correctCase": "Imperfective",
        "translation": "They go to the pool every week.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ na zakupy jutro.",
        "correctWord": "pójdzie",
        "correctCase": "Perfective",
        "translation": "He will go shopping tomorrow.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ na koncert w zeszły weekend.",
        "correctWord": "poszła",
        "correctCase": "Perfective",
        "translation": "She went to the concert last weekend.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ na wycieczkę każdego lata.",
        "correctWord": "chodzimy",
        "correctCase": "Imperfective",
        "translation": "We go on a trip every summer.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na kawę teraz.",
        "correctWord": "idę",
        "correctCase": "Imperfective",
        "translation": "I am going for coffee now.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ do sklepu co tydzień.",
        "correctWord": "chodzisz",
        "correctCase": "Imperfective",
        "translation": "You go to the store every week.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ do pracy codziennie.",
        "correctWord": "chodzi",
        "correctCase": "Imperfective",
        "translation": "He goes to work every day.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ na spacer jutro.",
        "correctWord": "pójdą",
        "correctCase": "Perfective",
        "translation": "They will go for a walk tomorrow.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na pocztę wczoraj.",
        "correctWord": "poszedłem",
        "correctCase": "Perfective",
        "translation": "I went to the post office yesterday.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ do kościoła w każdą niedzielę.",
        "correctWord": "chodzi",
        "correctCase": "Imperfective",
        "translation": "She goes to church every Sunday.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ na rynek teraz.",
        "correctWord": "idziemy",
        "correctCase": "Imperfective",
        "translation": "We are going to the market now.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ na zakupy jutro.",
        "correctWord": "pójdziesz",
        "correctCase": "Perfective",
        "translation": "You will go shopping tomorrow.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ na pocztę teraz.",
        "correctWord": "idzie",
        "correctCase": "Imperfective",
        "translation": "He is going to the post office now.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ do szkoły każdego dnia.",
        "correctWord": "chodzą",
        "correctCase": "Imperfective",
        "translation": "They go to school every day.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na plażę co roku.",
        "correctWord": "chodzę",
        "correctCase": "Imperfective",
        "translation": "I go to the beach every year.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ na siłownię teraz.",
        "correctWord": "idzie",
        "correctCase": "Imperfective",
        "translation": "She is going to the gym now.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ do muzeum w zeszłym tygodniu.",
        "correctWord": "poszliśmy",
        "correctCase": "Perfective",
        "translation": "We went to the museum last week.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ na spotkanie codziennie.",
        "correctWord": "chodzisz",
        "correctCase": "Imperfective",
        "translation": "You go to meetings every day.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ do kina w zeszły piątek.",
        "correctWord": "poszedł",
        "correctCase": "Perfective",
        "translation": "He went to the cinema last Friday.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na koncert jutro.",
        "correctWord": "pójdę",
        "correctCase": "Perfective",
        "translation": "I will go to the concert tomorrow.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ do biblioteki teraz.",
        "correctWord": "idą",
        "correctCase": "Imperfective",
        "translation": "They are going to the library now.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ na pocztę w zeszły czwartek.",
        "correctWord": "poszła",
        "correctCase": "Perfective",
        "translation": "She went to the post office last Thursday.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ na spacer codziennie.",
        "correctWord": "chodzimy",
        "correctCase": "Imperfective",
        "translation": "We go for a walk every day.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na rynek jutro.",
        "correctWord": "pójdę",
        "correctCase": "Perfective",
        "translation": "I will go to the market tomorrow.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ do kościoła w każdą niedzielę.",
        "correctWord": "chodzisz",
        "correctCase": "Imperfective",
        "translation": "You go to church every Sunday.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ na basen każdego lata.",
        "correctWord": "chodzi",
        "correctCase": "Imperfective",
        "translation": "He goes to the pool every summer.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ na zakupy teraz.",
        "correctWord": "idą",
        "correctCase": "Imperfective",
        "translation": "They are going shopping now.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na siłownię w zeszły piątek.",
        "correctWord": "poszedłem",
        "correctCase": "Perfective",
        "translation": "I went to the gym last Friday.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ona ____ na zakupy co tydzień.",
        "correctWord": "chodzi",
        "correctCase": "Imperfective",
        "translation": "She goes shopping every week.",
        "type": ["verbs"]
    },
    {
        "sentence": "My ____ do lekarza teraz.",
        "correctWord": "idziemy",
        "correctCase": "Imperfective",
        "translation": "We are going to the doctor now.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ty ____ do pracy w zeszłym miesiącu.",
        "correctWord": "poszedłeś",
        "correctCase": "Perfective",
        "translation": "You went to work last month.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na pocztę codziennie.",
        "correctWord": "chodzę",
        "correctCase": "Imperfective",
        "translation": "I go to the post office every day.",
        "type": ["verbs"]
    },
    {
        "sentence": "Oni ____ do kina teraz.",
        "correctWord": "idą",
        "correctCase": "Imperfective",
        "translation": "They are going to the cinema now.",
        "type": ["verbs"]
    },
    {
        "sentence": "On ____ na spacer co wieczór.",
        "correctWord": "chodzi",
        "correctCase": "Imperfective",
        "translation": "He goes for a walk every evening.",
        "type": ["verbs"]
    },
    {
        "sentence": "Ja ____ na rynek co tydzień.",
        "correctWord": "chodzę",
        "correctCase": "Imperfective",
        "translation": "I go to the market every week.",
        "type": ["verbs"]
    }
];
