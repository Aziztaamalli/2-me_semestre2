%{
int count = 0;
%}

%%

[a-zA-Z]+ { if
	 (count < 10 ){
	 printf("[%s]", yytext); 
	 
        }else{ 
printf("%s non valide", yytext);} 
count = 0;}
. {}

%%

int main()
{ printf("start: \n");
yylex();
return 0;
}


