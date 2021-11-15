#include <stdio.h>

int main(void)
{
    int n = 0;
    char str[100 + 1];
    int sum = 0;

    scanf("%d", &n);
    scanf("%s", str);
    for (int i = 0; i < n; i++)
    {
        sum += str[i] - '0';
    }
    printf("%d", sum);
    return (0);
}