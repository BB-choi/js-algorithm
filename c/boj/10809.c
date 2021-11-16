// 배열 초기화
// https://bb-dochi.tistory.com/6

#include <stdio.h>
#include <string.h>

int main(void)
{
    char str[101];
    int abc[26];

    // abc배열 초기화
    for (int i = 0; i < 26; i++)
    {
        abc[i] = -1;
    }

    scanf("%s", str);

    for (int i = 0; i < strlen(str); i++)
    {
        if (abc[str[i] - 97] == -1)
        {
            abc[str[i] - 97] = i;
        }
    }
    for (int i = 0; i < 26; i++)
    {
        printf("%d ", abc[i]);
    }
}