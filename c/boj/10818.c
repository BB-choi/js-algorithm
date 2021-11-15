#include <stdio.h>

int main(void)
{
    int input = 0;
    signed int min = 1000000;
    signed int max = -1000000;
    int num = 0;
    scanf("%d", &input);
    for (int i = 0; i < input; i++)
    {
        scanf("%d",&num);
        if (num > max)
        {
            max = num;
        }
        if (num < min)
        {
            min = num;
        }
    }
    printf("%d %d", min, max);
    return (0);
}