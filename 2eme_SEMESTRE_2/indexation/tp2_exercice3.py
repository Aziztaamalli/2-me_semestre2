import os
import glob
import re
from nltk.corpus import stopwords 
from nltk.stem.porter import PorterStemmer
from collections import  Counter
from collections import defaultdict
def text_treatment(file_content):
    result=file_content.lower().split()
    stop_words=stopwords.words("french")
    # We remove the stop words from the list of words in the file content
    result=[word for word in result if word not in stop_words]
    # We remove numeric values
    result=[word for word in result if not word.isdigit()] 
    # We remove dates
    pattern=re.compile(r"\b\d{1,2}[/-]\d{1,2}\d{4}\b")
    result=[word for word in result if not re.match(pattern,word)]  
    # We apply stemming to words
    stemmer=PorterStemmer()
    result=[stemmer.stem(word) for word in result]
    return result
#this function return a dictionary of stems and their TFs of a given file
def local_TF(file_content):
    return (Counter(text_treatment(file_content)))
#This function return the global TF of a document, given a list of documents
def global_TF(all_files):
    #all_files = glob.glob(os.path.join(all_files,"*.txt"))
    result_dict=defaultdict(int)
    for file in all_files:
        file_content=open(file).read()
        file_TF=local_TF(file_content)
        for stem in  file_TF:
            result_dict[stem]+=file_TF[stem]
    return dict(result_dict)
# This function returns the number of docs where a stem appears
def Nb_doc(all_files,stem):
    #all_files =glob.glob(os.path.join(all_files,"*.txt"))
    result=0
    for file in all_files:
        file_content=open(file).read()
        if stem in text_treatment(file_content):
            result+=1
    return result
#this function return the IDF of a stem
def IDF(all_files,stem):
    NbDoc=Nb_doc(all_files,stem)
    if NbDoc==0:
        return 0
    return (1/NbDoc)
#this fct returns the weigth the stems in the all_files 
def weight(all_files,file_content,stem):
    treated_text=text_treatment(file_content)
    if stem not in  treated_text :
        return 0
    else:
        idf=IDF(all_files,stem)
        tf=local_TF(file_content)[stem]
        return (idf*tf)
def inversed_file_generation (all_files,final_file):
    #all_files =glob.glob(os.path.join(all_files,"*.txt"))
    for file in all_files:
        file_path=open(file)
        file_content=file_path.read()
        print (file_content)
        treated_text=text_treatment(file_content)
        for stem in treated_text:
            print(stem+"------"+file+"-----"+str(weight(all_files,file_content,stem))+"\n")
            final_file.write(stem+"------"+file+"-----"+str(weight(all_files,file_content,stem))+"\n")
corpus="C:\indexation\corpus"
all_paths=["doc1.txt","doc2.txt", "doc3.txt","doc4.txt","doc5.txt","doc6.txt","doc7.txt","doc8.txt","doc9.txt","doc10.txt"]
final_file=open("C:\GLSI2Cindexation\indexed_file.txt","w")
inversed_file_generation(all_paths,final_file)