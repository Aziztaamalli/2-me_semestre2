import os
import re
from nltk.corpus import stopwords 
from collections import defaultdict
from nltk.stem import PorterStemmer
# Charger les stopwords
stopwords=stopwords.words("french")
# Initialiser le stemmer de Porter
stemmer = PorterStemmer()
def process_text(text):
    words = re.split(r"\W", text.lower())
    words = [stemmer.stem(t) for t in words]
    words = [t for t in words if t not in stopwords]
    words = [t for t in words if not (t.isdigit() or re.match(r'\d+', t))]
    return words
def compute_tf(document):
    word_freq = defaultdict(int)
    for word in document:
        word_freq[word] += 1
    total_words = len(document)
    tf = {word: freq/total_words for word, freq in word_freq.items()}
    return tf
def compute_global_tf(documents):
    global_tf = defaultdict(dict)
    for doc_id, doc in documents.items():
        global_tf[doc_id] = compute_tf(doc)
    return global_tf
def compute_idf(global_tf):
    idf = defaultdict(float)
    num_documents = len(global_tf)
    for doc_tf in global_tf.values():
        for word, tf in doc_tf.items():
            if tf > 0:
                idf[word] += 1
    for word, freq in idf.items():
        idf[word] = num_documents / (freq + 1)  # Adding 1 to avoid division by zero
    return idf
def compute_tf_idf(global_tf, idf):
    tf_idf = defaultdict(dict)
    for doc_id, doc_tf in global_tf.items():
        for word, tf in doc_tf.items():
            tf_idf[doc_id][word] = tf * idf[word]
    return tf_idf
def build_inverted_file(tf_idf):
    inverted_file = defaultdict(dict)
    for doc_id, doc_tf_idf in tf_idf.items():
        for word, weight in doc_tf_idf.items():
            inverted_file[word][doc_id] = weight
    return inverted_file
def main():
    documents_folder = "corpus"
    inverted_file_path = "fich-inv.txt"
    # Récupérer la liste des fichiers dans le dossier "documents"
    file_names = [f for f in os.listdir(documents_folder) if f.endswith(".txt")]
    # Lire et traiter chaque document
    documents = {}
    for file_name in file_names:
        file_path = os.path.join(documents_folder, file_name)
        with open(file_path, 'r') as file:
            text = file.read()
            processed_text = process_text(text)
            documents[file_name] = processed_text
    # Calculer TF global
    global_tf = compute_global_tf(documents)
    # Calculer IDF
    idf = compute_idf(global_tf)
    # Calculer TF-IDF
    tf_idf = compute_tf_idf(global_tf, idf)
    # Construire le fichier inversé
    inverted_file = build_inverted_file(tf_idf)
    # Écrire le fichier inversé
    with open(inverted_file_path, 'w') as inv_file:
        for word, doc_weights in inverted_file.items():
            inv_file.write(word + '----' + '-----'.join([f"{doc}-----{weight}" for doc, weight in doc_weights.items()]) + '\n')
    print("Le fichier inversé a été construit avec succès.")
if __name__ == "__main__":
    main()