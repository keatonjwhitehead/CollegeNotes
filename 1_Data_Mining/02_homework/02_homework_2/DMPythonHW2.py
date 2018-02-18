#Assignment based on http://www.nasdaq.com/quotes/
#Feel free to use any libraries.
#Make sure that the output format is perfect as mentioned in the problem.
#Also check the second row of the download dataset.
#If it follows a different format, avoid it or remove it.
'''
    Keaton Whitehead
    2/13/18
    CSCI-4502
'''
import argparse
import csv
import math

def normalization ( fileName , normalizationType , attribute):
    '''
    Input Parameters:
        fileName: The comma seperated file that must be considered for the normalization
        attribute: The attribute for which you are performing the normalization
        normalizationType: The type of normalization you are performing
    Output:
        For each line in the input file, print the original "attribute" value and "normalized" value seperated by <TAB>
    '''

    #Pull in the data and save in attributeList for later reference
    attributeList = []
    f = open(fileName,'r')
    reader = csv.DictReader(f)
    print("Attribute: " + attribute)
    for val in reader:
        if attribute in val:
            value = float(val[attribute])
            attributeList.append(value)

    f.close
    #The min and Max values of
    minValue = min(attributeList)
    maxValue = max(attributeList)
    modifiedValues = []
    '''
    Computes the min max normalization of the floating valuse
    Input:
        attributeList: list of the floating points to normalize
    Output:
        List of tuples where the first element is the original value and the second
        is the min_max normalization of the original value
    '''
    if(normalizationType == "min_max"):
        for val in values:
            normalizedValue = (val - minValue)/(maxValue - minValue)
            modifiedValues.append((val,normalizedValue))
        return modifiedValues

    #TODO: Write code given the Input / Output Paramters.
    # with open(fileName, newline='') as csvfile:
    #     fileReader = csv.reader(csvfile, delimiter=',',quotechar='|')
    #     for row in fileReader:
    #         attributeValues.append(row)
    #         if normalizationType == 'min_max':
    #             row =



    print('///////////////////' + normalizationType + '//////////////')


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
