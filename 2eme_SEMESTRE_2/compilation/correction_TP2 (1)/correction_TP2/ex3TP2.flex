%x CHAINEPASCAL
%x CHAINEC
%x COMMENTAIRE
%%
<CHAINEPASCAL>"'" {printf("'\n"); BEGIN INITIAL;}
<CHAINEPASCAL>"''" printf("'");
<CHAINEPASCAL>. ECHO;
<CHAINEC>\" {printf("\"\n"); BEGIN INITIAL;}
<CHAINEC>\\\" printf("\"");
<CHAINEC>[^\\] ECHO;
<COMMENTAIRE>"*/" {printf("*/\n"); BEGIN INITIAL;}		
<COMMENTAIRE>. ECHO;
' {printf("chaine Pascal='"); BEGIN CHAINEPASCAL;}
\" {printf("chaine C=\""); BEGIN CHAINEC;}
"/*" {printf("commentaire C=/*"); BEGIN COMMENTAIRE;}
.|"\n" ;
%%

