#include <stdio.h>

int main(void)
{
    int n;
    scanf("%d", &n);

    // 꼭대기
    if (n == 1)
    {
        printf("*");
        return (0);
    }
    else
    {
        for (int i = 0; i < n - 1; i++)
        {
            printf(" ");
        }
        printf("*\n");
    }

    //  중간
    if (n > 1)
    {
        for (int i = 2; i < n ; i++)
        {
            for (int j = 0; j < n - i; j++)
            {
                printf(" ");
            }
            printf("*");
            for (int k = 0; k < 2 * (i - 1) -1; k++)
            {
                printf(" ");
            }
            printf("*\n");
        }
    }

    // 마지막
    if (n > 1)
    {
        // for (int i = 0; i < n + (n - 1); i++)
        for (int i = 0; i < 2 *n - 1; i++)
        {
            printf("*");
        }
    }
}