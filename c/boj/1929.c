#include <stdio.h>

int ft_is_prime(int nb)
{
    int i;

    i = 2;
    if (nb < 2)
    {
        return (0);
    }
    while (i <= nb / i)
    {
        if (nb % i == 0)
        {
            return (0);
        }
        i++;
    }
    return (1);
}

int main(void)
{
    int n1 = 0;
    int n2 = 0;
    scanf("%d", &n1);
    scanf("%d", &n2);
    for (int i = n1; n1 <= i && i <= n2; i++)
    {
        if (ft_is_prime(i))
        {
            printf("%d\n", i);
        }
    }
}