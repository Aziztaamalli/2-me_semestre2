%{
    int inWord = 0;
%}

%%
[a-zA-Z]    { 
                if (!inWord) {
                    inWord = 1;
                }
                printf("%c", yytext[0]);
            }
-           { 
                printf("-");
                inWord = 0;
            }
.           { 
                if (inWord) {
                    printf("\n");
                    inWord = 0;
                }
            }
%%

int main() {
    yylex();
    return 0;
}
