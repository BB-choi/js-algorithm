#include <stdio.h>
#include <string.h>

int main(void)
{
    char abc[26];
    char str[1000001];
    int cnt[26] = {0, };
    int max = 0;
    int maxIdx = 0;
    int flag = 0;
    for (int i = 0; i < 26; i++)
    {
        abc[i] = 'A' + i;
        // printf("%c ", abc[i]);
    }
    scanf("%s", str);
    int len = strlen(str);
    for (int i = 0; i < len; i++)
    {
        for (int j = 0; j < 26; j++)
        {
            if (str[i] == abc[j] || str[i] == abc[j] + 32)
            {
                cnt[j]++;
            }
        }
    }

    // 체크된 단어 수 확인
    /* for (int i = 0; i < 26; i++)
    {
        printf("%d ", cnt[i]);
    } */
    
    for (int i = 0; i < 26; i++)
    {
        if (cnt[i] > max)
        {
            max = cnt[i];
            maxIdx = i;
        }
    }
    for (int i = 0; i < 26; i++)
    {
        if (cnt[i] == max && max != 0)
        {
            flag++;
        }
    }
    if (flag > 1)
    {
        printf("?");
        return(0);
    }
    printf("%c", abc[maxIdx]);
    return (0);
}