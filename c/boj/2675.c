#include <stdio.h>
#include <string.h>

int main(void)
{
    int n, count;
    char str[30];
    scanf("%d", &count);
    while(count--)
    {
        scanf("%d %s", &n, str);
        for (int i = 0; i < strlen(str); i++)
        {
            for (int j = 0; j < n; j++)
            {
                printf("%c", str[i]);
            }
        }
        printf("\n");
    }
    return (0);
}