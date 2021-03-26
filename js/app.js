const questions = [
    new Question("В каком году были Олимпийские игры в Сочи?",
    "OP.jpg",
    [
        new Answer("1999", 0),
        new Answer("2015", 0),
        new Answer("2014", 1),
        new Answer("2022", 0)
    ], 2),
    new Question("Начало Воторой Мировой Войны?",
    "war.jpeg",
    [
        new Answer("1914", 0),
        new Answer("1945", 0),
        new Answer("1941", 0),
        new Answer("1939", 1)
    ], 3),
    new Question("Когда был ЧМ мира В Росии?",
    "football.jpg",
    [
        new Answer("2017", 0),
        new Answer("2018", 1),
        new Answer("2007", 0),
        new Answer("2010", 0)
    ], 1)
]

new Quiz(questions)