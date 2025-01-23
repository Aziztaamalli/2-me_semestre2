%%
[a-z] printf("%c",'a'+(yytext[0]+1-'a')%26);
[A-Z] printf("%c",'A'+(yytext[0]+1-'A')%26);
.|\n ECHO; //ECHO est une fonction prédéfinie qui permet de faire la même chose que printf("%s",yytext);
%%
int main() {
yylex();
return 0;
}

