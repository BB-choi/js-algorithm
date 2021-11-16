#include <stdio.h>
#include <string.h>

int main(void)
{
    char s[1000001];
    int cnt = 0;

    scanf("%[^\n]", s);
    int len = strlen(s);
    for (int i = 0; i < len; i++)
    {
        if (s[i] == ' ')
        {
            cnt++;
        }
    }
    if (len == cnt)
    {
        printf("%d", 0);
        return (0);
    }
    if (s[0] == ' ')
    {
        cnt--;
    }
    if (s[len - 1] == ' ')
    {
        cnt--;
    }
    printf("%d", cnt + 1);
    return (0);
}