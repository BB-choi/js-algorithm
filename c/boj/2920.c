#include <stdio.h>

int main(void)
{
    int num[9] = {0, };
    int chk = 3;
    for(int i = 0; i < 8; i++)
    {
        scanf("%d", &num[i]);
    }
    for(int i = 0; i < 8; i++)
    {
        if (num[i] == i + 1 && chk != 0)
        {
            chk = 1;
        }
        else if (num[i] == 8 -i && chk != 1)
        {
            chk = 0;
        }
        else
        {
            chk = -1;
            break;
        }
    }
    if (chk == 1)
        printf("ascending");
    else if (chk == 0)
        printf("descending");
    else if (chk == -1)
        printf("mixed");
}