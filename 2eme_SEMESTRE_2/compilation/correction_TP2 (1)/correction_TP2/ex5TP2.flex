%{
int nb=0;
char mot[5]="";
%}
%%
[a-zA-Z] {mot[nb]=yytext[0];nb++;  if(nb==5) { printf("%s\n",mot);nb=0;} }
.|\n	
%%
