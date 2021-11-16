#include <stdio.h>

int main(void)
{
    int cnt;
    double max = 0.0;
    double arr[1000];
    double score[1000];
    double sum = 0.0;

    scanf("%d", &cnt);
    for (int i = 0; i < cnt; i++)
    {
        scanf("%lf", &arr[i]);
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    // 최대값 확인
    // printf("%d\n", max);
    for (int i = 0; i < cnt; i++)
    {
        score[i] = arr[i] / max * 100;
        // score[i] 입력확인
        // printf("%d : %lf ",i, score[i]);
        sum += score[i];
    }
    printf("%lf\n", sum / (double)cnt);
}