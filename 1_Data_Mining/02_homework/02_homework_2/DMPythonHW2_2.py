#Assignment based on http://www.nasdaq.com/quotes/
#Feel free to use any libraries.
#Make sure that the output format is perfect as mentioned in the problem.
#Also check the second row of the download dataset.
#If it follows a different format, avoid it or remove it.
import pandas as pd
import argparse
import math
import csv
import numpy as np
import scipy
from scipy import stats


def normalization ( fileName , normalizationType , attribute):
    '''
    Input Parameters:
        fileName: The comma seperated file that must be considered for the normalization
        attribute: The attribute for which you are performing the normalization
        normalizationType: The type of normalization you are performing
    Output:
        For each line in the input file, print the original "attribute" value and "normalized" value seperated by <TAB>
    '''
    #TODO: Write code given the Input / Output Paramters. "date","close","volume","open","high","low"
    value = pd.read_csv(fileName)
    if(attribute == "date"):
        attribute1 = value.date
    elif(attribute == "close"):
        attribute1 = value.close
    elif(attribute == "volume"):
        attribute1 = value.volume
    elif(attribute == "open"):
        attribute1 = value.open
    elif(attribute == "high"):
        attribute1 = value.high
    elif(attribute == "low"):
        attribute = value.low

    float_lst = [float(x) for x in attribute1]
    minValue = min(float_lst)
    maxValue = max(float_lst)

    originalVal = float_lst
    modifiedValue = []
    if(normalizationType == "min_max"):
        for val in originalVal:
            normalizedValue = (val - minValue)/(maxValue - minValue)
            modifiedValue.append(normalizedValue)

        for x in range(757):
            print(str(originalVal[x]) + "\t" + str(modifiedValue[x]))

    elif(normalizationType == "z_score"):
        modifiedValue = stats.zscore(originalVal)
        for x in range(756):
            print(str(originalVal[x]) + "\t" + str(modifiedValue[x]))


def Mean(data):
    return (sum(data)/len(data))

def correlation ( attribute1 , fileName1 , attribute2, fileName2 ):
    '''
    Input Parameters:
        attribute1: The attribute you want to consider from file1
        attribute2: The attribute you want to consider from file2
        fileName1: The comma seperated file1
        fileName2: The comma seperated file2

    Output:
        Print the correlation coefficient
    '''
    #TODO: Write code given the Input / Output Paramters.
    value = pd.read_csv(fileName1)
    if(attribute1== "date"):
        attr1 = value.date
    elif(attribute1== "close"):
        attr1 = value.close
    elif(attribute1== "volume"):
        attr1 = value.volume
    elif(attribute1== "open"):
        attr1 = value.open
    elif(attribute1== "high"):
        attr1 = value.high
    elif(attribute1== "low"):
        attr1 = value.low

    A = [float(x) for x in attr1]

    value2 = pd.read_csv(fileName2)
    if(attribute2== "date"):
        attr2 = value2.date
    elif(attribute2== "close"):
        attr2 = value2.close
    elif(attribute2== "volume"):
        attr2 = value2.volume
    elif(attribute2== "open"):
        attr2 = value2.open
    elif(attribute2== "high"):
        attr2 = value2.high
    elif(attribute2== "low"):
        attr2= value2.low

    B = [float(x) for x in attr2]
    #First File
    correlationCoefficient = 0.0
    AMean = Mean(A)
    deviations1 = []
    for x in A:
        x = (x - Mean(A))**2
        deviations1.append(x)
    variance1 = sum(deviations1)/len(deviations1)
    ASTD = math.sqrt(variance1)

    # Second File
    BMean = Mean(B)
    deviations2 = []
    for y in B:
        y = (y - Mean(B))**2
        deviations2.append(y)
    variance2 = sum(deviations2)/len(deviations2)
    BSTD = math.sqrt(variance2)
    n = len(A)
    for ai, bi in  zip(A,B):
        correlationCoefficient += (ai - AMean)*(bi - BMean)

    try:
        correlationCoefficient = correlationCoefficient/(n*ASTD*BSTD)
        print (correlationCoefficient)
    except ZeroDivisionError:
        print ('Cannot calculate the correlation coefficient because one of the standard deviations is zero.')


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Data Mining HW2')
    parser.add_argument('-f1', type=str,
                            help="Location of filename1. Use only f1 when working with only one file.",
                            required=True)
    parser.add_argument("-f2", type=str,
                            help="Location of filename2. To be used only when there are two files to be compared.",
                            required=False)
    parser.add_argument("-n", type=str,
                            help="Type of Normalization. Select either min_max or z_score",
                            choices=['min_max','z_score'],
                            required=False)
    parser.add_argument("-a1", type=str,
                            help="Type of Attribute for filename1. Select either open or high or low or close or volume",
                            choices=['open','high','low','close','volume'],
                            required=False)
    parser.add_argument("-a2", type=str,
                            help="Type of Attribute for filename2. Select either open or high or low or close or volume",
                            choices=['open','high','low','close','volume'],
                            required=False)



    args = parser.parse_args()

    if ( args.n and args.a1 ):
        normalization( args.f1 , args.n , args.a1 )
    elif ( args.f2 and args.a1 and args.a2):
        correlation ( args.a1 , args.f1 , args.a2 , args.f2 )
    else:
        print ("Kindly provide input of the following form:\nDMPythonHW2.py -f1 <filename1> -a1 <attribute> -n <normalizationType> \nDMPythonHW2.py -f1 <filename1> -a1 <attribute> -f2 <filename2> -a2 <attribute>")
