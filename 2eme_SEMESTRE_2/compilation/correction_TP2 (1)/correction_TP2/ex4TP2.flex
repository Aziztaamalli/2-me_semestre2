%{
	int num=1;
	char mot[10];
%}
%x MOT
%%
[a-zA-Z] {num=1; mot[num-1]=yytext[0]; mot[num]='\0'; BEGIN MOT; }
<MOT>[a-zA-Z] {num++; if(num<10) {mot[num-1]=yytext[0];mot[num]='\0';} }
<MOT>[^a-zA-Z] {if (num<10) printf("mot < 10: %s\n", mot); mot[0]='\0';BEGIN INITIAL;}
.|\n	
%%

