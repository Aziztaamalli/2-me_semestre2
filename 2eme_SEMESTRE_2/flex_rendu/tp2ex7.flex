%x COMMENT
%%
"/*" BEGIN(COMMENT);
<COMMENT>"*/" BEGIN(INITIAL);
<COMMENT>.  /*ignorer*/
"//"(.*) /*ignorer le commentaire d'un seul ligne*/
[a-zA-Z_][a-zA-Z0-9_]*[ ]*[(][^);]*[ ]*[)] { //declaration
char x[100];
sscanf(yytext,"%[^ (]",x);
printf("nom de fonction : %s\n",x);
}
.|\n /* ay 7aja wlla yarja3 l star */
%%
int main(){
yylex();
return 0;
}
