#!/usr/bin/python
import sys

N = 0
min_num = 0
max_num = 0
mean = 0
standard_deviation = 0
Q1 = 0
median = 0
Q3 = 0
IQR = 0
row[][]

with open(sys.argv[1], 'r') as f:

            contents = f.read()

my_list = contents.split(",")

n = len(my_list)

print n

for i in range(n):
    for j in range(0,10):
        if(my_list[i] != 'g' or my_list[i] != 'h'):
            row[j][i] = my_list[i]


print N
print min_num
print max_num
print mean
print standard_deviation
print Q1
print median
print Q3
print IQR
