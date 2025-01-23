%%
[a-zA-Z] {printf("%c", (*yytext == 'z' || *yytext == 'Z') ? *yytext -25 : *yytext + 1);}
. {printf("%c", *yytext);}

%%
int main(){
yylex();
return 0;
}
