// 날짜 계산
// https://www.acmicpc.net/problem/1476

#include <stdio.h>

int main(void)
{
    int e, s, m;
    int i = 1;
    int j = 1;
    int k = 1;
    
    scanf("%d %d %d", &e, &s, &m);
    int count = 1;

    while(1) {
        if (e == i && j == s && k == m) break;

        i++;
        j++;
        k++;
        if (i == 16) i = 1;
        if (j == 29) j = 1;
        if (k == 20) k = 1;

        count++;
    }

    printf("%d\n", count);
    return 0;
}