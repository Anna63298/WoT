""" a = True
b = 100000000
while True:
    c = int(input())
    if c < 0:
        break
    elif c >= b:
        a = False
        b = c
print(a) """

#Создать переменную, которая равна True.
#Создать переменную, которая равна 0.
#Реализовать цикл while True. Пока истинно, то:
#считываем количество денег в новую целочисленную переменную,
#если количество денег меньше нуля, то останавливаем цикл (break),
#в ином случае, если количество денег меньше или равно переменной из п. 2, то переменная из п. 1 становится False, а переменная из п. 2 становится равна количеству денег.
#Вне цикла вывести итоговый результат из пункта п. 1.

""" spisok = '0'
good = input()
while good != 'END':
    name = good.split(':')[1]
    name = int(name)
    if name <= 500:
        name = str(name)
        spisok += "\'" + name + "\'" + ', '
print(spisok) """

""" txt = "текст текст: один два три"
print(txt.partition(':')[2]) """

""" m = int(input())
k = 0
while True:
    n = int(input())
    if n != 0:
        k += 1
        if n > m == 0:
            print(k)
    else:
        break """


countries = {'UK': ['en'], 'Portugal': ['pt', 'esp', 'en'],
             'Russia': ['ru'], 'Spain': ['esp', 'en'],
             'France': ['fr'], 'Japan': ['jpn', 'en'], 
             'Brazil': ['pt', 'esp', 'en'], 'Turkey': ['tur', 'en', 'kur']}

# ваш код ниже
lang = int(input())
for i in countries:
    c = 0
    for j in countries.values():
        c += 1
    if c == lang:
        print(i)