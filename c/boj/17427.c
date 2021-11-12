#include <stdio.h>
#include <math.h>

int main(void)
{
    int n = 0;
    long long sum = 0;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        sum += (n / i) * i;
    }
    printf("%lld", sum);
}