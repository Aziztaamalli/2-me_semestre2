%{
    int charCount = 0;
%}

%%
[a-zA-Z]   { 
                if (charCount < 5) {
                    printf("%c", yytext[0]);
                    charCount++;
                } else {
                    printf("\n%c", yytext[0]);
                    charCount = 1;
                }
            }
.          { /* Ignore les caractères non alphabétiques */ }
%%
int main()
{ printf("start: \n");
yylex();
return 0;
}
