import datetime
from datetime import timedelta
import csv

#using the csv library we create a new csv file to store our values or append if one has already been created
with open('time-tracker.csv', 'a', newline='') as file:
    writer = csv.writer(file, quoting = csv.QUOTE_MINIMAL)
    datetimeFormat = '%Y-%m-%d %H:%M'
    print("Please enter date and time in format = 'year-month-day time' \n")
    print("Please note that time should be in GMT \n")
    print("An example will be '2016-04-16 13:00' \n")

    startDate = input("Enter start date and time: ")
    endDate = input("Enter end date and time: ")
        # date1 = '2016-04-16 11:00'
        # date2 = '2016-04-16 13:30'
        
#using the date functionality in python it can be subtracted to provide the difference between the dates specified
    diff = datetime.datetime.strptime(endDate, datetimeFormat)-datetime.datetime.strptime(startDate, datetimeFormat)

#seconds are picked from the difference and converted to hours
    seconds = diff.seconds
    hours = seconds/3600

    money_made = hours*5 
    
    writer.writerow([startDate, endDate, money_made])

    
