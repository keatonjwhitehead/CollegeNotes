#!/usr/bin/python
import sys
iter1 = 0
iter2 = 0
i = 0

N = 0

max_num = 0
mean = 0
standard_deviation = 0
Q1 = 0
median = 0
Q3 = 0
IQR = 0
w, h = 10, 15
Matrix = [[0 for x in range(w)] for y in range(h)]

# def small_number(x):
#     if (min_num > x):
#         min_num = x

def max_number(x):
    if(max_num < x):
        max_num = x

input = sys.argv[1]
with open('magic04.data.txt', 'r') as f:

            contents = f.read()

my_list = contents.split(",")

n = len(my_list)

min_num = 100000
#Loop through the file and send each element to each function
while i in range(n):
    if(i%11 == 0):
        iter1 += 1
        iter2 = 0
    else:
        max_number(my_list[i])
        Matrix[iter1][iter2] = my_list[i]
        iter2 += 1

    i += 1
        #small_number()
print Matrix
print min_num
