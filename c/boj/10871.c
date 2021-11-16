#include <stdio.h>

int main(void)
{
    int n1, n2;
    int temp;
    scanf("%d %d", &n1, &n2);
    for (int i = 0; i < n1; i++)
    {
        scanf("%d", &temp);
        if (temp < n2)
        {
            printf("%d ", temp);
        }
    }
}