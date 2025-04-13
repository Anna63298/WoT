text = ''
cakes = input()
#with open('cakes.csv') as cakes:
    for line in cakes:
        line.strip()
        line = line.split(';')
        line = str(line)
        text += line + '\n'
print(*text)