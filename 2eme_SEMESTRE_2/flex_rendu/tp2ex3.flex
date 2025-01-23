%{
#include <stdio.h>
#include <stdlib.h>
void echo(const char* unit, const char* lexeme){
printf("[%s:%s]", unit, lexeme);
}
%}

echap [tnr\"\\]
%x pascal
%x chaineC
%x commentC
%%
\' BEGIN pascal ; printf("chaine pascal :");
<pascal>' BEGIN INITIAL ;
<pascal>'' printf("%s",yytext);
<pascal>. printf("%s" ,yytext);
\" BEGIN chaineC;printf("chaine C : ");
<chaineC>\" BEGIN INITIAL;
<chaineC>{echap}|[^\\] printf("%s" ,yytext);
"/*" BEGIN commentC;printf("comment C: ");
<commentC>"*/" BEGIN INITIAL;
<commentC>"/*" printf("%s", yytext);
<commentC>. printf("%s",yytext);
. printf("non econnu");
%%
int main(){
printf("Commance prog: ");
yylex();
return 0;
}
