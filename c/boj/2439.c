#include <stdio.h>

int print(int n, char c)
{
    int i = 1;
    if (c == '*')
    {
        while(i <= n)
        {
            printf("*");
            i++;
        }
    }
    i = 1;
    if (c == ' ')
    {
        while(i <= n)
        {
            printf(" ");
            i++;
        }
    }
}

int main(void)
{
    int num = 0;
    int num2 = 1;
    scanf("%d", &num);
    for (int i = 1; i <= num; i++)
    {
        print(num - num2, ' ');
        print(i, '*');
        printf("\n");
        num2++; 
    }
}