import sys
import pandas as pd

if __name__ == '__main__':
     cmdarg = int(sys.argv[1])
     data = pd.read_csv("/Users/keatonwhitehead/Documents/College/1_Data_Mining/02_homework/02_python_code/magic04.data.csv")
     Count = data.count(axis = 0)
     Min = data.min(axis = 0)
     Max = data.max(axis = 0)
     Mean = data.mean(axis = 0)
     STD = data.std(axis = 0)
     Q1 = data.quantile(q = 0.25, axis = 0)
     Median = data.median(axis = 0)
     Q3 = data.quantile(q = 0.75, axis = 0)
     iqravls = [q3-q1 for q3,q1 in zip(Q3,Q3)]
     print(Count[cmdarg], Min[cmdarg], Max[cmdarg], Mean[cmdarg], STD[cmdarg], Q1[cmdarg], Median[cmdarg], Q3[cmdarg], iqravls[cmdarg])
