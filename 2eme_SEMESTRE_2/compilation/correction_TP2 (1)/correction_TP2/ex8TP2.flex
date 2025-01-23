%x COLLER 
%x NEXT
%%
[a-zA-Z]"-" {yytext[yyleng-1]='\0'; ECHO; BEGIN COLLER;/*quand on trouve un mot coupé, on affiche la partie sans "-"  */ }
<COLLER>"\n" { BEGIN NEXT;/*si on a un retour de ligne après une suite de caractères- alors on passe à l'état next 
qui permettra de coller le reste des lettres du mot coupé puis ajoute un retour de ligne juste après*/}
<COLLER>. {printf("-"); BEGIN INITIAL; /* si après le - il n'y a pas de \n come c'est le cas avec grand-mère, alors, on remet le tiret et on laisse comme c'est, 
et on repart à l'état initial pour poursuivre le parsing*/}
<NEXT>[a-zA-Z] {ECHO;/*si on est dans l'état next c'est qu'il faut ajouter les lettres au mot coupé et affiché un retour de ligne juste après*/}
<NEXT>[^a-zA-Z] {printf("\n");BEGIN INITIAL;}
. ECHO;
%%
