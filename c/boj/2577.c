#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(void)
{
    int n1, n2, n3;
    int num = 0;
    char s[100];
    int cnt[10] = {0, };
    scanf("%d %d %d", &n1, &n2, &n3);
    num = n1 * n2 * n3;
    sprintf(s, "%d", num);
    for (int i = 0; i < strlen(s); i++)
    {
        cnt[s[i] - '0']++;
    }
    for (int i = 0; i < 10; i++)
    {
        printf("%d\n", cnt[i]);
    }
}