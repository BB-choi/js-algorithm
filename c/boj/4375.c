#include <stdio.h>

int main()
{
    int num = 0;
    while (scanf ("%d", &num) != EOF)
    {
        int cal = 1;
        int count = 1;

        while (1)
        {
            if (cal % num != 0)
            {
                cal = cal * 10 + 1;
                cal = cal % num;
                count++;
            }
            else
            {
                printf("%d\n", count);
                break;
            }
        }
    }

    return (0);
}