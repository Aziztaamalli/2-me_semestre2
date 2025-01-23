NOMFONC [a-zA-Z_][a-zA-Z_0-9]*
%x COMMENTAIRE_ML 
%x COMMENTAIRE
%x CHAINE
%%
"/*" {BEGIN COMMENTAIRE_ML; /*ignorer tout ce qu'il y a dans un commentaire multiligne*/}
<COMMENTAIRE_ML>.|\n ; 
<COMMENTAIRE_ML>"*/" BEGIN INITIAL;
\" {BEGIN CHAINE;	/*ignorer tout ce qu'il y a dans une chaine */}
<CHAINE>\" BEGIN INITIAL;
<CHAINE>. ;
"//" {BEGIN COMMENTAIRE; /*ignorer tout ce qu'il y a dans un commentaire simple*/}
<COMMENTAIRE>\n BEGIN INITIAL;
<COMMENTAIRE>. ;
("if"|"for"|"while")\s*\( {; /* on va ignorer les if(..), for(..) while(..) car ne doivent pas être considérés comme fonction*/}
{NOMFONC}\s*\( {printf("%s\n", yytext); /*afficher les noms des fonctions quant elles sont détéctées*/}
.|\n ;
%%

