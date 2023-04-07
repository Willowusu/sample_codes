from faker import Faker
import csv
import random

fake = Faker()

result = fake.address()
update = result.replace(" " , "")
update1 = update.replace(",", "$")
update2 = update1.rstrip()
update3 = update2.split()
update4 = "".join(update3)
update5 = list(update4)
random.shuffle(update5)
update6 = "".join(update5)

user_password = hash(update6)

with open('password-manager.csv', 'a') as file:
    writer = csv.writer(file, quoting = csv.QUOTE_MINIMAL)
    name = raw_input("What is your name? ")
    app = raw_input("What app are you using the password for? ")

    writer.writerow([name, app, user_password])

print("\n" +update6 + '\nThis is your password. DO NOT REVEAL IT TO ANYONE\n\n')



