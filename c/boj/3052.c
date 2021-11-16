#include <stdio.h>

int main(void)
{
    int n;
    int arr[10] = {0, };
    int count = 0;
    int result = 0;
    for(int i = 0; i < 10; i++)
    {
        scanf("%d", &n);
        arr[i] = n % 42;
    }
    for (int i = 0; i < 10; i++)
    {
        count = 0;
        for (int j = i + 1; j < 10; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
        if (count == 0) result++;
    }
    printf("%d", result);
}