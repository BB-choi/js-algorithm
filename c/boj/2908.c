#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int n1, n2;
    scanf("%d %d", &n1, &n2);

    char str1[4], str2[4];
    sprintf(str1, "%d", n1);
    sprintf(str2, "%d", n2);

    char temp;
    temp = str1[2];
    str1[2] = str1[0];
    str1[0] = temp;

    temp = str2[2];
    str2[2] = str2[0];
    str2[0] = temp;

    n1 = atoi(str1);
    n2 = atoi(str2);
    printf("%d", n1 > n2 ? n1 : n2);
}