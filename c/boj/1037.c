#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    int n = 0;
    int *arr;
    int max = 2;
    int min = 1000000;
    scanf("%d", &n);
    arr = (int *)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
    {
         scanf("%d", &arr[i]);
    }
    for (int i = 0; i < n; i++)
    {
        if (arr[i] <= min)
            min = arr[i];
        if (arr[i] >= max)
            max = arr[i];
    }

    printf("%d", min * max);
    free(arr); 

    return (0);
}